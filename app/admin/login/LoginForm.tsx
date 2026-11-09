"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertCircle, ArrowRight, Lock, User } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const next = params.get("next");
        // Only follow same-site paths, never an absolute URL from the query.
        router.replace(next && next.startsWith("/") && !next.startsWith("//") ? next : "/admin");
        router.refresh();
        return;
      }

      const payload = await res.json().catch(() => null);
      setError((payload && typeof payload.error === "string" && payload.error) || "Sign in failed.");
    } catch {
      setError("Network error — please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} noValidate className="mt-7">
      <label className="mb-4 block">
        <span className="mb-1.5 block text-[12px] font-medium text-white/70">Username</span>
        <div className="relative">
          <User
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
          />
          <input
            type="text"
            required
            autoFocus
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-[9px] border border-white/12 bg-white/[0.05] py-3 pl-11 pr-3 text-[14px] text-white placeholder:text-white/35 transition-colors focus:border-[var(--orange)] focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-[var(--orange)]"
          />
        </div>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-[12px] font-medium text-white/70">Password</span>
        <div className="relative">
          <Lock
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
          />
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-[9px] border border-white/12 bg-white/[0.05] py-3 pl-11 pr-3 text-[14px] text-white placeholder:text-white/35 transition-colors focus:border-[var(--orange)] focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-[var(--orange)]"
          />
        </div>
      </label>

      {error && (
        <p
          role="alert"
          className="mt-4 flex items-start gap-2.5 rounded-[9px] border border-[rgba(255,79,23,0.4)] bg-[rgba(255,79,23,0.1)] px-3.5 py-2.5 text-[12.5px] leading-[1.5] text-white/85"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="group mt-5 flex w-full items-center justify-center gap-2.5 rounded-[9px] bg-[var(--orange)] py-3.5 font-anton text-[14px] uppercase tracking-[0.05em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E5420F] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {busy ? "CHECKING…" : "SIGN IN"}
        {!busy && (
          <ArrowRight className="h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    </form>
  );
}
