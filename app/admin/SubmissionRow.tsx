"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Loader2, StickyNote, Trash2 } from "lucide-react";
import {
  KIND_LABELS,
  NOTES_MAX,
  STATUSES,
  STATUS_LABELS,
  type Submission,
  type SubmissionKind,
  type SubmissionStatus,
} from "@/lib/submissionTypes";

const KIND_STYLES: Record<SubmissionKind, string> = {
  "strategy-call": "bg-[rgba(255,79,23,0.15)] text-[var(--orange)] border-[rgba(255,79,23,0.35)]",
  booking: "bg-white/10 text-white border-white/20",
  newsletter: "bg-white/[0.06] text-white/70 border-white/12",
};

const STATUS_STYLES: Record<SubmissionStatus, string> = {
  new: "bg-[var(--orange)] text-white border-[var(--orange)]",
  contacted: "bg-white/10 text-white border-white/25",
  won: "bg-[#1C7C4A] text-white border-[#1C7C4A]",
  closed: "bg-transparent text-white/45 border-white/15",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const cell = "border-b border-white/[0.07] px-4 py-3.5 align-top";

export default function SubmissionRow({ submission }: { submission: Submission }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [openNotes, setOpenNotes] = useState(false);
  const [notes, setNotes] = useState(submission.notes ?? "");

  const send = async (body: Record<string, unknown>, method: "PATCH" | "DELETE" = "PATCH") => {
    setBusy(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/submissions/${submission.id}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: method === "DELETE" ? undefined : JSON.stringify(body),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        setError((payload && typeof payload.error === "string" && payload.error) || "Update failed.");
        return false;
      }
      // Re-render the server component so the table reflects the change.
      router.refresh();
      return true;
    } catch {
      setError("Network error.");
      return false;
    } finally {
      setBusy(false);
    }
  };

  const onDelete = async () => {
    const who = submission.name || submission.contact;
    if (!window.confirm(`Delete the submission from ${who}? This cannot be undone.`)) return;
    await send({}, "DELETE");
  };

  const saveNotes = async () => {
    if (await send({ notes })) setOpenNotes(false);
  };

  return (
    <>
      <tr className="transition-colors hover:bg-white/[0.03]">
        <td className={`${cell} whitespace-nowrap text-[13px] text-white/60`}>
          {formatDate(submission.receivedAt)}
        </td>

        <td className={cell}>
          <span
            className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-1 text-[11.5px] font-semibold ${KIND_STYLES[submission.kind]}`}
          >
            {KIND_LABELS[submission.kind]}
          </span>
        </td>

        <td className={`${cell} text-[13.5px] font-medium text-white`}>
          {submission.name || <span className="text-white/30">—</span>}
        </td>

        <td className={`${cell} text-[13.5px]`}>
          <a
            href={
              submission.contact.includes("@")
                ? `mailto:${submission.contact}`
                : `tel:${submission.contact.replace(/\s/g, "")}`
            }
            className="text-[var(--orange)] transition-opacity hover:opacity-75"
          >
            {submission.contact}
          </a>
          {submission.email && (
            <a
              href={`mailto:${submission.email}`}
              className="mt-1 block break-all text-[12.5px] text-white/60 transition-opacity hover:opacity-75"
            >
              {submission.email}
            </a>
          )}
          {submission.business && (
            <span className="mt-1 block text-[12.5px] text-white/45">{submission.business}</span>
          )}
        </td>

        <td className={`${cell} max-w-[260px] text-[13.5px] text-white/70`}>
          {submission.interest || <span className="text-white/30">—</span>}
          {submission.details && (
            <span className="mt-1 block whitespace-pre-wrap text-[12.5px] leading-[1.45] text-white/45">
              {submission.details}
            </span>
          )}
          {submission.budget && (
            <span className="mt-1 block text-[12.5px] text-white/45">{submission.budget}</span>
          )}
        </td>

        {/* Status */}
        <td className={cell}>
          <div className="relative inline-block">
            <select
              aria-label={`Status for ${submission.name || submission.contact}`}
              value={submission.status}
              disabled={busy}
              onChange={(e) => send({ status: e.target.value })}
              className={`cursor-pointer appearance-none rounded-full border py-1 pl-2.5 pr-7 text-[11.5px] font-semibold transition-colors disabled:opacity-50 ${STATUS_STYLES[submission.status]}`}
            >
              {STATUSES.map((s) => (
                <option key={s} value={s} className="bg-[#101216] text-white">
                  {STATUS_LABELS[s]}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 opacity-70"
            />
          </div>
        </td>

        {/* Actions */}
        <td className={`${cell} whitespace-nowrap`}>
          <div className="flex items-center gap-1.5">
            {busy && <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin text-white/50" />}
            <button
              type="button"
              onClick={() => setOpenNotes((v) => !v)}
              aria-expanded={openNotes}
              title={submission.notes ? "Edit note" : "Add note"}
              className={`grid h-8 w-8 place-items-center rounded-[8px] border transition-colors ${
                submission.notes
                  ? "border-[rgba(255,79,23,0.5)] text-[var(--orange)]"
                  : "border-white/12 text-white/50 hover:border-white/30 hover:text-white"
              }`}
            >
              <StickyNote aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">Notes</span>
            </button>
            <button
              type="button"
              onClick={onDelete}
              disabled={busy}
              title="Delete"
              className="grid h-8 w-8 place-items-center rounded-[8px] border border-white/12 text-white/50 transition-colors hover:border-[#C7442A] hover:text-[#FF6B4A] disabled:opacity-40"
            >
              <Trash2 aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        </td>
      </tr>

      {(openNotes || error) && (
        <tr>
          <td colSpan={7} className="border-b border-white/[0.07] bg-white/[0.02] px-4 py-4">
            {error && (
              <p role="alert" className="mb-3 text-[12.5px] text-[#FF8A6B]">
                {error}
              </p>
            )}
            {openNotes && (
              <div className="max-w-[640px]">
                <label className="block">
                  <span className="mb-1.5 block text-[12px] font-medium text-white/60">
                    Private note — only visible here
                  </span>
                  <textarea
                    rows={3}
                    maxLength={NOTES_MAX}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Called on Tuesday, sending a quote…"
                    className="w-full resize-y rounded-[9px] border border-white/12 bg-white/[0.05] px-3.5 py-2.5 text-[13px] text-white placeholder:text-white/30 focus:border-[var(--orange)] focus:outline-none focus:ring-1 focus:ring-[var(--orange)]"
                  />
                </label>
                <div className="mt-2.5 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={saveNotes}
                    disabled={busy}
                    className="rounded-[8px] bg-[var(--orange)] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#E5420F] disabled:opacity-60"
                  >
                    {busy ? "Saving…" : "Save note"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setNotes(submission.notes ?? "");
                      setOpenNotes(false);
                    }}
                    className="text-[12.5px] text-white/50 transition-colors hover:text-white"
                  >
                    Cancel
                  </button>
                  <span className="ml-auto text-[11.5px] text-white/30">
                    {notes.length}/{NOTES_MAX}
                  </span>
                </div>
              </div>
            )}
          </td>
        </tr>
      )}
    </>
  );
}
