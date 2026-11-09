"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { BUDGETS, NEEDS, OTHER } from "@/lib/contactOptions";

export interface ServiceBookingFormProps {
  serviceName: string;
  headline?: string;
  subtext?: string;
}

export default function ServiceBookingForm({
  serviceName,
  headline = "READY TO DISCUSS YOUR PROJECT?",
  subtext = "Book a free 20-minute strategy consultation. We will analyze your goals, outline an actionable plan, and follow up with a clear quote — no obligation.",
}: ServiceBookingFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    need: serviceName,
    budget: "",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setStatus("error");
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your WhatsApp or phone number.");
      setStatus("error");
      return;
    }

    if (!formData.details.trim() || formData.details.trim().length < 5) {
      setErrorMessage("Please share a brief note on what you need.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "strategy-call",
          fullName: formData.name,
          business: formData.business || undefined,
          email: formData.email,
          countryCode: "+91",
          phone: formData.phone.replace(/^\+91/, "").trim(),
          service: formData.need,
          details: formData.details,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error || "We could not save your request. Please try again or call us.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network connection issue. Please retry or contact us directly via WhatsApp.");
      setStatus("error");
    }
  };

  const inputStyle =
    "w-full rounded-[10px] border border-neutral-800 bg-[#141720] px-4 py-3 text-[14px] text-white placeholder:text-neutral-500 transition-colors focus:border-[var(--orange)] focus:bg-[#181B26] focus:outline-none focus:ring-1 focus:ring-[var(--orange)]";

  return (
    <section id="consultation" className="relative w-full overflow-hidden bg-[#090B0E] py-[clamp(52px,4.8vw,92px)] text-white">
      {/* Glow orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, var(--orange) 0%, transparent 70%)",
        }}
      />

      <div className="site-container relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Direct Pitch */}
          <div>
            <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
              DIRECT CONSULTATION
            </span>

            <h2
              className="mt-3 font-anton uppercase leading-[0.96] tracking-[-0.015em] text-white"
              style={{ fontSize: "clamp(30px, 3.6vw, 60px)" }}
            >
              {headline}
            </h2>

            <p
              className="mt-5 max-w-[52ch] leading-[1.68] text-neutral-400"
              style={{ fontSize: "clamp(14.5px, 1.05vw, 18px)" }}
            >
              {subtext}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--orange)] text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-[14.5px] font-bold text-white">Direct Access to Practitioners</h3>
                  <p className="text-[13px] text-neutral-400">
                    No middlemen or commission-driven salespeople. You speak directly with engineers, designers and strategists.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--orange)] text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-[14.5px] font-bold text-white">No-Obligation Feasibility & Proposal</h3>
                  <p className="text-[13px] text-neutral-400">
                    We clearly state what is realistic, how long it takes, and what it costs before any commitment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--orange)] text-white">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-[14.5px] font-bold text-white">Strict Confidentiality</h3>
                  <p className="text-[13px] text-neutral-400">
                    Your business models, project briefs and proprietary IP remain strictly private.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Lead Form */}
          <div className="rounded-[20px] border border-neutral-800 bg-[#10131B] p-6 sm:p-8 shadow-2xl">
            {status === "success" ? (
              <div className="py-12 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--orange)] text-white">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-anton text-[26px] uppercase tracking-tight text-white">
                  CONSULTATION REQUEST RECEIVED
                </h3>
                <p className="mx-auto mt-3 max-w-[34ch] text-[14px] leading-[1.6] text-neutral-300">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our team will review your requirements and reach out on{" "}
                  <strong className="text-[var(--orange)]">{formData.email}</strong> or WhatsApp to schedule your 20-minute call.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      business: "",
                      email: "",
                      phone: "",
                      need: serviceName,
                      budget: "",
                      details: "",
                    });
                  }}
                  className="mt-6 text-[13px] font-semibold text-[var(--orange)] underline underline-offset-4"
                >
                  Submit another project brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="border-b border-neutral-800 pb-3 mb-2">
                  <h3 className="font-anton text-[22px] uppercase tracking-tight text-white">
                    REQUEST A PROJECT CONSULTATION
                  </h3>
                  <p className="text-[12.5px] text-neutral-400">
                    Target Service: <span className="text-[var(--orange)] font-bold">{serviceName}</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Your Name <span className="text-[var(--orange)]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Industries"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Email Address <span className="text-[var(--orange)]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      WhatsApp / Phone <span className="text-[var(--orange)]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Primary Service Required
                    </label>
                    <select
                      value={formData.need}
                      onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                      className={inputStyle}
                    >
                      {NEEDS.map((n) => (
                        <option key={n} value={n} className="bg-[#10131B] text-white">
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className={inputStyle}
                    >
                      <option value="" className="bg-[#10131B] text-neutral-400">
                        Select bracket (optional)
                      </option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b} className="bg-[#10131B] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Brief Project Description <span className="text-[var(--orange)]">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us what you are trying to build, automate or scale..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className={`${inputStyle} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-[13px] font-medium text-red-400 bg-red-950/40 border border-red-800/60 p-3 rounded-[8px]">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-lg transition-all hover:bg-[#E5420F] disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "submitting" ? "SUBMITTING BRIEF..." : "BOOK MY STRATEGY CALL →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
