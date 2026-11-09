"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  CalendarDays,
  Download,
  Inbox,
  LogOut,
  Mail,
  Phone,
  RefreshCw,
  Search,
} from "lucide-react";
import {
  KIND_LABELS,
  STATUSES,
  STATUS_LABELS,
  type Submission,
  type SubmissionKind,
  type SubmissionStatus,
} from "@/lib/submissionTypes";
import SubmissionRow from "./SubmissionRow";

type Filter = "all" | SubmissionKind;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "strategy-call", label: "Strategy calls" },
  { id: "booking", label: "Bookings" },
  { id: "newsletter", label: "Newsletter" },
];


function toCsv(rows: Submission[]): string {
  const headers = ["Received", "Type", "Name", "Contact", "Email", "Business", "Interest", "Details", "Budget", "Status", "Notes"];
  const esc = (v: string | undefined) => `"${(v ?? "").replace(/"/g, '""')}"`;
  const lines = rows.map((r) =>
    [
      esc(r.receivedAt),
      esc(KIND_LABELS[r.kind]),
      esc(r.name),
      esc(r.contact),
      esc(r.email),
      esc(r.business),
      esc(r.interest),
      esc(r.details),
      esc(r.budget),
      esc(STATUS_LABELS[r.status]),
      esc(r.notes),
    ].join(",")
  );
  return [headers.join(","), ...lines].join("\n");
}

export default function SubmissionsView({
  submissions,
  storageWarning,
}: {
  submissions: Submission[];
  /** Store directory, when it sits somewhere a redeploy could erase. */
  storageWarning: string | null;
}) {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");
  const [status, setStatus] = useState<SubmissionStatus | "any">("any");
  const [query, setQuery] = useState("");
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Poll for new submissions so the panel fills in without a manual reload.
  useEffect(() => {
    if (!autoRefresh) return;
    const id = window.setInterval(() => router.refresh(), 20000);
    return () => window.clearInterval(id);
  }, [autoRefresh, router]);

  const counts = useMemo(() => {
    const base: Record<Filter, number> = {
      all: submissions.length,
      "strategy-call": 0,
      booking: 0,
      newsletter: 0,
    };
    submissions.forEach((s) => {
      base[s.kind] += 1;
    });
    return base;
  }, [submissions]);

  const lastSevenDays = useMemo(() => {
    const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return submissions.filter((s) => new Date(s.receivedAt).getTime() >= cutoff).length;
  }, [submissions]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return submissions.filter((s) => {
      if (filter !== "all" && s.kind !== filter) return false;
      if (status !== "any" && s.status !== status) return false;
      if (!q) return true;
      return [s.name, s.contact, s.email, s.business, s.interest, s.details, s.budget, s.notes]
        .filter(Boolean)
        .some((v) => (v as string).toLowerCase().includes(q));
    });
  }, [submissions, filter, status, query]);

  const newCount = useMemo(() => submissions.filter((s) => s.status === "new").length, [submissions]);

  const download = () => {
    const blob = new Blob([toCsv(visible)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `submissions-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const signOut = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  const stats = [
    { label: "Total", value: counts.all, icon: <Inbox className="h-[18px] w-[18px]" /> },
    { label: "Strategy calls", value: counts["strategy-call"], icon: <Phone className="h-[18px] w-[18px]" /> },
    { label: "Bookings", value: counts.booking, icon: <CalendarDays className="h-[18px] w-[18px]" /> },
    { label: "Newsletter", value: counts.newsletter, icon: <Mail className="h-[18px] w-[18px]" /> },
  ];

  return (
    <main className="min-h-screen bg-[#090B0E] px-[clamp(16px,3vw,40px)] py-[clamp(24px,3vw,44px)]">
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="font-anton text-[18px] uppercase leading-none tracking-[-0.01em]">
              <span className="text-white">DESIGN </span>
              <span className="text-[var(--orange)]">BLAST </span>
              <span className="text-white">LABS</span>
            </p>
            <h1
              className="mt-3 font-anton uppercase leading-[1] tracking-[-0.015em] text-white"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              FORM SUBMISSIONS
            </h1>
            <p className="mt-2 flex flex-wrap items-center gap-2.5 text-[13.5px] text-white/50">
              Every enquiry from the contact modal, the booking form and the newsletter.
              {newCount > 0 && (
                <span className="rounded-full bg-[var(--orange)] px-2.5 py-0.5 text-[11.5px] font-bold text-white">
                  {newCount} new
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={download}
              disabled={visible.length === 0}
              className="inline-flex items-center gap-2 rounded-[9px] border border-white/12 px-4 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/12 disabled:hover:text-white"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Export CSV
            </button>
            <button
              type="button"
              onClick={signOut}
              className="inline-flex items-center gap-2 rounded-[9px] border border-white/12 px-4 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]"
            >
              <LogOut aria-hidden="true" className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>

        {storageWarning && (
          <p className="mt-6 flex items-start gap-2.5 rounded-[10px] border border-[rgba(255,79,23,0.35)] bg-[rgba(255,79,23,0.1)] px-4 py-3 text-[12.5px] leading-[1.55] text-white/85">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
            <span>
              Submissions are stored inside the project folder (<code>{storageWarning}</code>), so a
              redeploy that replaces that folder would erase them. Set{" "}
              <code>DATA_DIR</code> to a path outside the deploy directory — for example{" "}
              <code>/var/lib/designblastlabs</code> — and restart. This is fine for local
              development.
            </span>
          </p>
        )}

        {/* Stats */}
        <ul className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {stats.map((s) => (
            <li key={s.label} className="rounded-[12px] border border-white/10 bg-[#101216] p-4">
              <span aria-hidden="true" className="text-[var(--orange)]">
                {s.icon}
              </span>
              <p className="mt-3 font-anton text-[26px] leading-none text-white">{s.value}</p>
              <p className="mt-1.5 text-[12.5px] text-white/50">{s.label}</p>
            </li>
          ))}
          <li className="rounded-[12px] border border-white/10 bg-[#101216] p-4">
            <span aria-hidden="true" className="text-[var(--orange)]">
              <CalendarDays className="h-[18px] w-[18px]" />
            </span>
            <p className="mt-3 font-anton text-[26px] leading-none text-white">{lastSevenDays}</p>
            <p className="mt-1.5 text-[12.5px] text-white/50">Last 7 days</p>
          </li>
        </ul>

        {/* Controls */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <ul className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <li key={f.id}>
                <button
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={filter === f.id}
                  className={`rounded-full border px-4 py-2 text-[12.5px] font-semibold transition-colors ${
                    filter === f.id
                      ? "border-[var(--orange)] bg-[var(--orange)] text-white"
                      : "border-white/12 text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {f.label} ({counts[f.id]})
                </button>
              </li>
            ))}
          </ul>

          <label className="relative">
            <span className="sr-only">Filter by status</span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as SubmissionStatus | "any")}
              className="cursor-pointer rounded-full border border-white/12 bg-transparent px-4 py-2 text-[12.5px] font-semibold text-white/70 transition-colors hover:border-white/30 focus:border-[var(--orange)] focus:outline-none"
            >
              <option value="any" className="bg-[#101216]">
                Any status
              </option>
              {STATUSES.map((st) => (
                <option key={st} value={st} className="bg-[#101216]">
                  {STATUS_LABELS[st]}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={() => router.refresh()}
            title={autoRefresh ? "Auto-refreshing every 20s" : "Auto-refresh paused"}
            onDoubleClick={() => setAutoRefresh((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-[12.5px] font-semibold text-white/70 transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]"
          >
            <RefreshCw
              aria-hidden="true"
              className={`h-3.5 w-3.5 ${autoRefresh ? "animate-[spin_3s_linear_infinite]" : ""}`}
            />
            Refresh
          </button>

          <label className="relative ml-auto min-w-[220px] flex-1 sm:max-w-[300px]">
            <span className="sr-only">Search submissions</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, phone, email…"
              className="w-full rounded-[9px] border border-white/12 bg-white/[0.05] py-2.5 pl-10 pr-3 text-[13px] text-white placeholder:text-white/35 transition-colors focus:border-[var(--orange)] focus:outline-none focus:ring-1 focus:ring-[var(--orange)]"
            />
          </label>
        </div>

        {/* Table */}
        <div className="mt-5 overflow-x-auto rounded-[12px] border border-white/10">
          <table className="w-full min-w-[820px] border-collapse text-left">
            <caption className="sr-only">Form submissions, newest first</caption>
            <thead>
              <tr className="bg-[#101216]">
                {["Received", "Type", "Name", "Contact", "Interest", "Status", "Actions"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="whitespace-nowrap border-b border-white/10 px-4 py-3.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/50"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-16 text-center">
                    <Inbox aria-hidden="true" className="mx-auto h-8 w-8 text-white/25" />
                    <p className="mt-3 text-[14px] font-semibold text-white">
                      {submissions.length === 0 ? "No submissions yet" : "Nothing matches"}
                    </p>
                    <p className="mt-1.5 text-[13px] text-white/45">
                      {submissions.length === 0
                        ? "Enquiries will appear here as soon as someone submits a form."
                        : "Try a different filter or search term."}
                    </p>
                  </td>
                </tr>
              ) : (
                visible.map((s) => <SubmissionRow key={s.id} submission={s} />)
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-[12.5px] text-white/35">
          Showing {visible.length} of {submissions.length} submissions.
        </p>
      </div>
    </main>
  );
}
