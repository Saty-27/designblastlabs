import { mkdir, readFile, rename, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import type { Submission, SubmissionStatus } from "./submissionTypes";
import { NOTES_MAX, STATUSES } from "./submissionTypes";

export type { Submission, SubmissionKind, SubmissionStatus } from "./submissionTypes";
export { KIND_LABELS, STATUS_LABELS, STATUSES, NOTES_MAX } from "./submissionTypes";

/**
 * Every form on the site writes here, and the admin panel reads and edits here.
 *
 * WHERE IT LIVES: `DATA_DIR` if set, otherwise `.data` inside the project.
 * On a VPS, point DATA_DIR at a directory OUTSIDE the deploy folder — e.g.
 * /var/lib/designblastlabs — so redeploying (git clone, rsync, a fresh build)
 * can't wipe your enquiries. The default is fine for local development.
 *
 * This is the local filesystem, so it does NOT work on serverless hosts
 * (Vercel, Netlify) where the filesystem is wiped between invocations. On
 * those, swap these functions for database calls. Submissions are also
 * forwarded to BOOKING_WEBHOOK_URL / NEWSLETTER_WEBHOOK_URL when set.
 */
const STORE_DIR = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.join(process.cwd(), ".data");
const STORE_FILE = path.join(STORE_DIR, "submissions.jsonl");

export interface StorageInfo {
  directory: string;
  /** True when the store sits inside the project, where a redeploy can erase it. */
  insideProject: boolean;
  configured: boolean;
}

export function storageInfo(): StorageInfo {
  const insideProject = !path.relative(process.cwd(), STORE_DIR).startsWith("..");
  return { directory: STORE_DIR, insideProject, configured: Boolean(process.env.DATA_DIR) };
}

/**
 * Serialises writes within this process. Two admin edits landing at once would
 * otherwise read-modify-write the same file and lose one of the changes.
 */
let writeChain: Promise<unknown> = Promise.resolve();
function withLock<T>(task: () => Promise<T>): Promise<T> {
  const run = writeChain.then(task, task);
  // Keep the chain alive even if this task rejects.
  writeChain = run.catch(() => {});
  return run;
}

function parse(raw: string): Submission[] {
  const rows: Submission[] = [];
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const row = JSON.parse(trimmed) as Submission;
      // Rows written before statuses existed default to "new".
      rows.push({ ...row, status: row.status ?? "new" });
    } catch {
      // Skip a corrupted line rather than failing the whole dashboard.
    }
  }
  return rows;
}

async function readRaw(): Promise<Submission[]> {
  try {
    return parse(await readFile(STORE_FILE, "utf8"));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

/** Writes via a temp file + rename so a crash can't leave a half-written store. */
async function writeAll(rows: Submission[]): Promise<void> {
  await mkdir(STORE_DIR, { recursive: true });
  const tmp = `${STORE_FILE}.${randomUUID()}.tmp`;
  await writeFile(tmp, rows.map((r) => JSON.stringify(r)).join("\n") + (rows.length ? "\n" : ""), "utf8");
  await rename(tmp, STORE_FILE);
}

/** Appends one submission. Throws if the write fails, so callers can return 500. */
export async function append(
  entry: Omit<Submission, "id" | "receivedAt" | "status">
): Promise<Submission> {
  return withLock(async () => {
    const record: Submission = {
      ...entry,
      id: randomUUID(),
      receivedAt: new Date().toISOString(),
      status: "new",
    };
    const rows = await readRaw();
    rows.push(record);
    await writeAll(rows);
    return record;
  });
}

/** Newest first. Returns [] when nothing has been submitted yet. */
export async function readAll(): Promise<Submission[]> {
  const rows = await readRaw();
  return rows.sort((a, b) => b.receivedAt.localeCompare(a.receivedAt));
}

export interface SubmissionPatch {
  status?: SubmissionStatus;
  notes?: string;
}

/** Returns the updated row, or null when the id doesn't exist. */
export async function update(id: string, patch: SubmissionPatch): Promise<Submission | null> {
  return withLock(async () => {
    const rows = await readRaw();
    const i = rows.findIndex((r) => r.id === id);
    if (i === -1) return null;

    const next = { ...rows[i] };
    if (patch.status && STATUSES.includes(patch.status)) next.status = patch.status;
    if (typeof patch.notes === "string") {
      const trimmed = patch.notes.trim().slice(0, NOTES_MAX);
      next.notes = trimmed || undefined;
    }
    next.updatedAt = new Date().toISOString();

    rows[i] = next;
    await writeAll(rows);
    return next;
  });
}

/** Returns true when a row was removed, false when the id didn't exist. */
export async function remove(id: string): Promise<boolean> {
  return withLock(async () => {
    const rows = await readRaw();
    const next = rows.filter((r) => r.id !== id);
    if (next.length === rows.length) return false;
    await writeAll(next);
    return true;
  });
}

/**
 * Best-effort forward to a webhook. Never throws: the local write is the
 * source of truth, and a webhook outage must not fail the visitor's request.
 */
export async function forward(url: string | undefined, payload: unknown): Promise<void> {
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Swallowed deliberately — see above.
  }
}
