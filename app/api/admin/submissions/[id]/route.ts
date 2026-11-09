import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import { remove, update } from "@/lib/submissions";
import { NOTES_MAX, STATUSES, type SubmissionStatus } from "@/lib/submissionTypes";
import { sameOrigin } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Middleware already guards /admin pages, but API routes are not under that
 * matcher — so each mutation re-checks the session itself. Never rely on the
 * UI having hidden a button.
 */
async function authorised(request: Request): Promise<boolean> {
  if (!sameOrigin(request)) return false;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return false;
  return verifySessionToken(cookies().get(ADMIN_COOKIE)?.value, secret);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  if (!(await authorised(request))) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Could not read the request." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const patch: { status?: SubmissionStatus; notes?: string } = {};

  if (typeof b?.status === "string") {
    if (!STATUSES.includes(b.status as SubmissionStatus)) {
      return NextResponse.json({ error: "Unknown status." }, { status: 400 });
    }
    patch.status = b.status as SubmissionStatus;
  }

  if (typeof b?.notes === "string") {
    if (b.notes.length > NOTES_MAX) {
      return NextResponse.json({ error: `Notes must be under ${NOTES_MAX} characters.` }, { status: 400 });
    }
    patch.notes = b.notes;
  }

  if (patch.status === undefined && patch.notes === undefined) {
    return NextResponse.json({ error: "Nothing to update." }, { status: 400 });
  }

  const updated = await update(params.id, patch);
  if (!updated) return NextResponse.json({ error: "Not found." }, { status: 404 });

  return NextResponse.json({ ok: true, submission: updated });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  if (!(await authorised(request))) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const removed = await remove(params.id);
  if (!removed) return NextResponse.json({ error: "Not found." }, { status: 404 });

  return NextResponse.json({ ok: true });
}
