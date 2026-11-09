"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  List,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  User,
  X,
} from "lucide-react";
import { DETAILS_MAX, OTHER, SERVICES } from "@/lib/contactOptions";

/** Dial codes we most often hear from. Value is sent to the API as `countryCode`. */
export const countryCodes = [
  { code: "+91", label: "IN +91" },
  { code: "+1", label: "US +1" },
  { code: "+44", label: "UK +44" },
  { code: "+971", label: "AE +971" },
  { code: "+61", label: "AU +61" },
  { code: "+65", label: "SG +65" },
];

type Status = "idle" | "sending" | "saved" | "error";

const FIELD =
  "w-full rounded-[9px] border border-white/12 bg-white/[0.05] py-3 pl-11 pr-3 text-[13.5px] text-white placeholder:text-white/35 transition-colors focus:border-[var(--orange)] focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-[var(--orange)]";
const LABEL = "mb-1.5 block text-[12px] font-medium text-white/70";
const ADORN = "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const baseId = useId();
  const titleId = `${baseId}-title`;
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  /** Element that had focus before opening, so we can hand it back. */
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    business: "",
    service: "",
    details: "",
  });

  const close = useCallback(() => onClose(), [onClose]);

  /* Open: remember focus, lock scroll, focus the first field. */
  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement as HTMLElement | null;

    const { overflow, paddingRight } = document.body.style;
    const gutter = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gutter > 0) document.body.style.paddingRight = `${gutter}px`;

    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 60);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      returnFocusRef.current?.focus?.();
    };
  }, [open]);

  /* Esc to dismiss + Tab cycles inside the panel. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [open, close]);

  /* Reset back to a blank form the next time it opens. */
  useEffect(() => {
    if (open) return;
    const t = window.setTimeout(() => {
      setStatus("idle");
      setError("");
      setForm({
        fullName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        business: "",
        service: "",
        details: "",
      });
    }, 250);
    return () => window.clearTimeout(t);
  }, [open]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "strategy-call" }),
      });

      // Only a confirmed save counts as success — never show "sent" otherwise.
      if (res.ok) {
        setStatus("saved");
        return;
      }

      const payload = await res.json().catch(() => null);
      setError(
        (payload && typeof payload.error === "string" && payload.error) ||
          "We couldn't save your request. Please try again."
      );
      setStatus("error");
    } catch {
      setError("Network error — your request was not saved. Please check your connection and retry.");
      setStatus("error");
    }
  };

  if (!open) return null;

  const sending = status === "sending";

  return (
    <div
      className="fixed inset-0 z-[120] flex items-end justify-center overflow-y-auto overscroll-contain p-4 sm:items-center xl:justify-end xl:pr-[clamp(20px,2.5vw,52px)]"
      style={{ animation: "dblFade 180ms ease-out both" }}
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={close}
        className="fixed inset-0 h-full w-full cursor-default bg-[#07080B]/75 backdrop-blur-[3px]"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-[420px] rounded-[16px] border border-white/10 bg-[#101218] p-[clamp(20px,1.8vw,28px)] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]"
        style={{ animation: "dblRise 260ms cubic-bezier(0.22,0.61,0.36,1) both" }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange)]"
        >
          <X aria-hidden="true" className="h-[17px] w-[17px]" />
        </button>

        {status === "saved" ? (
          <div className="py-8 text-center">
            <CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-[var(--orange)]" />
            <h2
              id={titleId}
              className="mt-5 font-anton uppercase leading-none tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(21px, 1.8vw, 27px)" }}
            >
              REQUEST SAVED.
            </h2>
            <p className="mx-auto mt-3 max-w-[36ch] text-[13.5px] leading-[1.6] text-white/60">
              Thanks {form.fullName.split(" ")[0] || "for reaching out"} — your details are with us and
              we&rsquo;ll call you on {form.countryCode} {form.phone} to set up your free strategy call.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-7 inline-flex items-center gap-2 rounded-[9px] bg-[var(--orange)] px-7 py-3 font-anton text-[13px] uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#E5420F]"
            >
              DONE
            </button>
          </div>
        ) : (
          <>
            <h2
              id={titleId}
              className="pr-9 font-anton uppercase leading-[1.02] tracking-[-0.015em]"
              style={{ fontSize: "clamp(21px, 1.9vw, 28px)" }}
            >
              <span className="block text-white">LET&rsquo;S TALK ABOUT</span>
              <span className="block text-[var(--orange)]">YOUR GROWTH.</span>
            </h2>
            <p className="mt-2.5 text-[13px] leading-[1.55] text-white/55">
              Share your details and we&rsquo;ll get in touch to discuss your goals.
            </p>

            <form onSubmit={submit} noValidate className="mt-5">
              <div className="space-y-3.5">
                <div>
                  <label className={LABEL} htmlFor={`${baseId}-name`}>
                    Full Name <span className="text-[var(--orange)]">*</span>
                  </label>
                  <div className="relative">
                    <User aria-hidden="true" className={`${ADORN} h-[16px] w-[16px]`} />
                    <input
                      ref={firstFieldRef}
                      id={`${baseId}-name`}
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="John Doe"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className={FIELD}
                    />
                  </div>
                </div>

                <div>
                  <label className={LABEL} htmlFor={`${baseId}-email`}>
                    Email Address <span className="text-[var(--orange)]">*</span>
                  </label>
                  <div className="relative">
                    <Mail aria-hidden="true" className={`${ADORN} h-[16px] w-[16px]`} />
                    <input
                      id={`${baseId}-email`}
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={FIELD}
                    />
                  </div>
                </div>

                <div>
                  <label className={LABEL} htmlFor={`${baseId}-phone`}>
                    Phone Number <span className="text-[var(--orange)]">*</span>
                  </label>
                  <div className="flex gap-2">
                    <label className="shrink-0">
                      <span className="sr-only">Country code</span>
                      <select
                        value={form.countryCode}
                        onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                        className="h-full rounded-[9px] border border-white/12 bg-white/[0.05] px-2.5 text-[13px] text-white transition-colors focus:border-[var(--orange)] focus:outline-none focus:ring-1 focus:ring-[var(--orange)]"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code} className="text-[var(--black)]">
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <div className="relative min-w-0 flex-1">
                      <Phone aria-hidden="true" className={`${ADORN} h-[16px] w-[16px]`} />
                      <input
                        id={`${baseId}-phone`}
                        type="tel"
                        inputMode="tel"
                        required
                        autoComplete="tel-national"
                        placeholder="98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={FIELD}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={LABEL} htmlFor={`${baseId}-business`}>
                    Business Name <span className="text-white/40">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Building2 aria-hidden="true" className={`${ADORN} h-[16px] w-[16px]`} />
                    <input
                      id={`${baseId}-business`}
                      type="text"
                      autoComplete="organization"
                      placeholder="Your Business"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className={FIELD}
                    />
                  </div>
                </div>

                <div>
                  <label className={LABEL} htmlFor={`${baseId}-service`}>
                    Service You&rsquo;re Interested In <span className="text-[var(--orange)]">*</span>
                  </label>
                  <div className="relative">
                    <List aria-hidden="true" className={`${ADORN} h-[16px] w-[16px]`} />
                    <select
                      id={`${baseId}-service`}
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${FIELD} ${form.service ? "" : "text-white/35"}`}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="text-[var(--black)]">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={LABEL} htmlFor={`${baseId}-details`}>
                    Your Requirement <span className="text-[var(--orange)]">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3.5 top-[13px] h-[16px] w-[16px] text-white/40"
                    />
                    <textarea
                      id={`${baseId}-details`}
                      required
                      rows={3}
                      maxLength={DETAILS_MAX}
                      placeholder={
                        form.service === OTHER
                          ? "Describe what you're looking for…"
                          : "What are you trying to achieve? Timelines, budget, anything useful."
                      }
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className={`${FIELD} resize-y`}
                    />
                  </div>
                  <span className="mt-1 block text-right text-[11px] text-white/35">
                    {form.details.length}/{DETAILS_MAX}
                  </span>
                </div>
              </div>

              {status === "error" && (
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
                disabled={sending}
                className="group mt-5 flex w-full items-center justify-center gap-2.5 rounded-[9px] bg-[var(--orange)] py-3.5 font-anton text-[14px] uppercase tracking-[0.05em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E5420F] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {sending ? "SAVING…" : "REQUEST MY CALL"}
                {!sending && (
                  <ArrowRight className="h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

              <p className="mt-3.5 flex items-center justify-center gap-1.5 text-[11.5px] text-white/40">
                <Lock aria-hidden="true" className="h-3 w-3" />
                Your details are secure. We respect your privacy.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
