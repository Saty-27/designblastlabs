"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AlertCircle,
  ArrowRight,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Lock,
  MessageSquare,
} from "lucide-react";
import { BUDGETS, DETAILS_MAX, NEEDS, OTHER } from "@/lib/contactOptions";

export interface CtaStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ctaSteps: CtaStep[] = [
  {
    number: "1.",
    title: "FILL THE FORM",
    description: "Share your basic details",
    icon: <ClipboardList strokeWidth={2} className="h-[22px] w-[22px]" />,
  },
  {
    number: "2.",
    title: "BOOK A TIME",
    description: "Choose a convenient slot",
    icon: <CalendarCheck strokeWidth={2} className="h-[22px] w-[22px]" />,
  },
  {
    number: "3.",
    title: "LET'S TALK",
    description: "Get a free strategy call",
    icon: <MessageSquare strokeWidth={2} className="h-[22px] w-[22px]" />,
  },
];

/**
 * PLACEHOLDER FIGURES — these are baked into public/footer/growth-globe.webp,
 * so changing them needs a new asset as well as this list. They are repeated
 * here only so assistive tech can read the image's content.
 */
export const globeMetrics = [
  { value: "50+", label: "Businesses Transformed", verified: false },
  { value: "100%", label: "Client Retention Rate", verified: false },
  { value: "3–6 Months", label: "Average ROI Timeline", verified: false },
  { value: "5.0/5", label: "Client Satisfaction", verified: false },
];

type Status = "idle" | "sending" | "saved" | "error";

const field =
  "w-full rounded-[10px] border border-[#E4E4E0] bg-[#FAFAFA] px-4 py-3.5 text-[14px] text-[var(--black)] placeholder:text-[#9A9AA0] transition-colors focus:border-[var(--orange)] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[var(--orange)]";

function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

export default function FinalCta() {
  const { ref, inView } = useInView<HTMLElement>();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", contact: "", need: "", budget: "", details: "" });

  const rise = (delay: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "none" : "translateY(18px)",
    transition: `opacity 680ms ${EASE} ${delay}ms, transform 680ms ${EASE} ${delay}ms`,
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "booking" }),
      });

      // Only a confirmed save counts as success.
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

  const sending = status === "sending";

  return (
    <section
      ref={ref}
      id="booking"
      aria-label="Book a call"
      className="relative w-full overflow-hidden bg-[#090B0E]"
    >
      {/* restrained orange lighting behind the centre visual */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[70%] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,74,28,0.16), transparent 62%)" }}
      />

      <div className="site-container relative py-[clamp(44px,3.6vw,72px)]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[28fr_42fr_30fr] lg:gap-8">
          {/* ── Left: headline + steps ─────────────────────────── */}
          <div className="min-w-0">
            <p
              className="font-bold uppercase tracking-[0.2em] text-[var(--orange)]"
              style={{ fontSize: "clamp(10px, 0.72vw, 13px)", ...rise(0) }}
            >
              GET STARTED
            </p>

            <h2
              className="mt-3 font-anton uppercase leading-[0.95] tracking-[-0.015em]"
              style={{ fontSize: "clamp(32px, 3.1vw, 52px)", ...rise(80) }}
            >
              <span className="block text-white">READY TO GROW?</span>
              <span className="block text-[var(--orange)]">LET&rsquo;S TALK.</span>
            </h2>

            <p
              className="mt-5 max-w-[40ch] leading-[1.6] text-[#A6A8AE]"
              style={{ fontSize: "clamp(13.5px, 0.95vw, 16px)", ...rise(140) }}
            >
              Book a free 20-minute call with our team and let&rsquo;s discuss how we can help your
              business grow.
            </p>

            <ol className="relative mt-9">
              {/* connector between the three circles */}
              <span
                aria-hidden="true"
                className="absolute left-[27px] top-[54px] w-px bg-white/15"
                style={{
                  bottom: 54,
                  transform: inView ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                  transition: `transform 700ms ${EASE} 320ms`,
                }}
              />
              {ctaSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative flex items-center gap-4 pb-7 last:pb-0"
                  style={rise(220 + i * 110)}
                >
                  <span
                    aria-hidden="true"
                    className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full border border-white/25 bg-[#0C0E12] text-[var(--orange)]"
                  >
                    {step.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-anton text-[16px] uppercase leading-none tracking-[0.01em] text-white">
                      <span className="text-[var(--orange)]">{step.number}</span> {step.title}
                    </span>
                    <span className="mt-2 block text-[13.5px] text-[#A6A8AE]">{step.description}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* ── Centre: growth globe ───────────────────────────── */}
          <div className="relative min-w-0" style={rise(260)}>
            <Image
              src="/footer/growth-globe.webp"
              alt="A glowing orange globe wrapped in orbital paths, surrounded by four metric cards."
              width={1024}
              height={682}
              sizes="(max-width: 1023px) 92vw, 42vw"
              priority={false}
              className="h-auto w-full select-none"
            />
            {/* the figures are part of the image, so expose them as text too */}
            <ul className="sr-only">
              {globeMetrics.map((m) => (
                <li key={m.label}>
                  {m.value} — {m.label}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: booking form ────────────────────────────── */}
          <div className="min-w-0" style={rise(340)}>
            <div
              className="rounded-[18px] bg-white p-[clamp(22px,1.9vw,30px)]"
              style={{
                boxShadow:
                  "0 30px 70px -30px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.06), 0 0 46px -14px rgba(255,74,28,0.32)",
              }}
            >
              {status === "saved" ? (
                <div className="py-10 text-center">
                  <CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-[var(--orange)]" />
                  <h3 className="mt-4 font-anton text-[24px] uppercase text-[var(--black)]">
                    REQUEST SAVED.
                  </h3>
                  <p className="mx-auto mt-2.5 max-w-[34ch] text-[13.5px] leading-[1.6] text-[var(--grey-600)]">
                    Thanks {form.name.split(" ")[0] || "there"} — your details are with us and
                    we&rsquo;ll be in touch on {form.contact} to confirm your 20-minute call.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", contact: "", need: "", budget: "", details: "" });
                    }}
                    className="mt-5 text-[13px] font-semibold text-[var(--orange)] underline underline-offset-4"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <h3
                    className="font-anton uppercase leading-none tracking-[-0.01em] text-[var(--black)]"
                    style={{ fontSize: "clamp(20px, 1.6vw, 27px)" }}
                  >
                    BOOK A FREE 20-MIN CALL
                  </h3>
                  <p className="mt-2.5 text-[13.5px] text-[var(--grey-600)]">
                    Let&rsquo;s discuss your project and see how we can help.
                  </p>

                  <div className="mt-6 space-y-3">
                    <label className="block">
                      <span className="sr-only">Your name</span>
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name*"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={field}
                      />
                    </label>

                    <label className="block">
                      <span className="sr-only">Email or WhatsApp</span>
                      <input
                        type="text"
                        required
                        placeholder="Email or WhatsApp*"
                        value={form.contact}
                        onChange={(e) => setForm({ ...form, contact: e.target.value })}
                        className={field}
                      />
                    </label>

                    <label className="block">
                      <span className="sr-only">What do you need?</span>
                      <select
                        required
                        value={form.need}
                        onChange={(e) =>
                          // drop any stale free text when they move off "Other"
                          setForm({
                            ...form,
                            need: e.target.value,
                            details: e.target.value === OTHER ? form.details : "",
                          })
                        }
                        className={`${field} ${form.need ? "" : "text-[#9A9AA0]"}`}
                      >
                        <option value="">What do you need?*</option>
                        {NEEDS.map((o) => (
                          <option key={o} value={o} className="text-[var(--black)]">
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>

                    {form.need === OTHER && (
                      <label className="block">
                        <span className="mb-1.5 block text-[12px] font-medium text-[var(--grey-600)]">
                          Tell us what you need <span className="text-[var(--orange)]">*</span>
                        </span>
                        <textarea
                          required
                          autoFocus
                          rows={3}
                          maxLength={DETAILS_MAX}
                          placeholder="Describe what you're looking for…"
                          value={form.details}
                          onChange={(e) => setForm({ ...form, details: e.target.value })}
                          className={`${field} resize-y`}
                        />
                        <span className="mt-1 block text-right text-[11.5px] text-[var(--grey-400)]">
                          {form.details.length}/{DETAILS_MAX}
                        </span>
                      </label>
                    )}

                    <label className="block">
                      <span className="sr-only">Budget (optional)</span>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className={`${field} ${form.budget ? "" : "text-[#9A9AA0]"}`}
                      >
                        <option value="">Budget (Optional)</option>
                        {BUDGETS.map((o) => (
                          <option key={o} value={o} className="text-[var(--black)]">
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="mt-4 flex items-start gap-2.5 rounded-[10px] border border-[rgba(255,79,23,0.4)] bg-[rgba(255,79,23,0.08)] px-3.5 py-2.5 text-[12.5px] leading-[1.5] text-[var(--black)]"
                    >
                      <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="group mt-5 flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--orange)] py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E5420F] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    <CalendarDays aria-hidden="true" className="h-[18px] w-[18px]" />
                    {sending ? "SAVING…" : "REQUEST MY CALL"}
                    {!sending && (
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </button>

                  <p className="mt-4 flex items-center justify-center gap-2 text-[12px] text-[var(--grey-600)]">
                    <Lock aria-hidden="true" className="h-3.5 w-3.5" />
                    No pressure. Just a conversation about your goals.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
