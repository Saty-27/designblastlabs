"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export type CardTone = "light" | "dark" | "accent";

export interface Testimonial {
  id: string;
  quote: string;
  company: string;
  industry: string;
  /** Initials tile until a real client logo is supplied. */
  initials: string;
  rating: number;
  /**
   * true = wording not supplied by the client yet.
   * Replace with a real quote before publishing — never ship invented words
   * attributed to a named company.
   */
  placeholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "europack",
    quote:
      "Design Blast Labs transformed our online presence. We saw a huge increase in inquiries within 2 months. Highly recommended!",
    company: "Europack Industries",
    industry: "Manufacturing",
    initials: "EI",
    rating: 5,
  },
  {
    id: "divine-naturals",
    quote:
      "Their social media strategy helped us reach the right audience and our sales have grown significantly. Great team to work with!",
    company: "Divine Naturals",
    industry: "E-commerce",
    initials: "DN",
    rating: 5,
  },
  {
    id: "educonnect",
    quote:
      "The AI automation they built for us has saved hours of manual work. Very professional and delivery-focused team.",
    company: "Educonnect AI",
    industry: "SaaS Platform",
    initials: "EA",
    rating: 5,
  },
  {
    id: "gauranitai",
    quote:
      "The local campaign brought in steady footfall and donations. Clear reporting every month and no chasing required.",
    company: "Gauranitai",
    industry: "Local Services",
    initials: "GA",
    rating: 5,
    placeholder: true,
  },
  {
    id: "prepasole",
    quote:
      "They shipped our app faster than we expected and kept improving it after launch. Retention has climbed every quarter.",
    company: "Prepasole",
    industry: "EdTech App",
    initials: "PS",
    rating: 5,
    placeholder: true,
  },
  {
    id: "sharma",
    quote:
      "Our reels finally look like the brand we want to be. The content system runs without us having to think about it.",
    company: "Sharma Packagings",
    industry: "Industrial",
    initials: "SP",
    rating: 5,
    placeholder: true,
  },
];

/** White → black → orange, the same rhythm the growth-engine cards use. */
const TONES: CardTone[] = ["light", "dark", "accent"];

const shell: Record<CardTone, string> = {
  light: "bg-white border-[#E6E6E2] hover:border-[var(--orange)]",
  dark: "bg-[var(--black)] border-[var(--black)] hover:border-[var(--orange)]",
  accent: "bg-[var(--orange)] border-[var(--orange)] hover:border-[var(--black)]",
};
const quoteTone: Record<CardTone, string> = {
  light: "text-[#4A4E57]",
  dark: "text-white/70",
  accent: "text-[rgba(14,16,24,0.8)]",
};
const nameTone: Record<CardTone, string> = {
  light: "text-[var(--black)]",
  dark: "text-white",
  accent: "text-[var(--black)]",
};
const metaTone: Record<CardTone, string> = {
  light: "text-[var(--grey-600)]",
  dark: "text-white/45",
  accent: "text-[rgba(14,16,24,0.6)]",
};
const markTone: Record<CardTone, string> = {
  light: "text-[var(--orange)]",
  dark: "text-[var(--orange)]",
  accent: "text-white",
};
const starTone: Record<CardTone, string> = {
  light: "fill-[var(--orange)] text-[var(--orange)]",
  dark: "fill-[var(--orange)] text-[var(--orange)]",
  accent: "fill-[var(--black)] text-[var(--black)]",
};
const tileTone: Record<CardTone, string> = {
  light: "bg-[#F2F2EF] border-[#E6E6E2] text-[var(--black)]",
  dark: "bg-white/[0.08] border-white/15 text-white",
  accent: "bg-[var(--black)] border-[var(--black)] text-white",
};

const SPEED = 0.45;

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeAtRef = useRef(0);
  const rafRef = useRef(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = trackRef.current;
    if (!el) return;
    const step = () => {
      rafRef.current = requestAnimationFrame(step);
      if (pausedRef.current || Date.now() < resumeAtRef.current) return;
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      el.scrollLeft += SPEED;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduced]);

  const nudge = useCallback((dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.4;
    resumeAtRef.current = Date.now() + 700;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="relative w-full overflow-hidden bg-[#F4F4F1] py-[clamp(48px,4.2vw,86px)]"
    >
      {/* warm shading so the band reads as its own surface, not plain white */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 68% at 50% 0%, rgba(255,79,23,0.10) 0%, rgba(255,79,23,0.03) 38%, rgba(0,0,0,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[rgba(14,16,24,0.1)]"
      />

      <div className="site-container relative">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p
              className="font-bold uppercase tracking-[0.2em] text-[var(--orange)]"
              style={{ fontSize: "clamp(10px, 0.72vw, 13px)" }}
            >
              TESTIMONIALS
            </p>
            <h2
              className="mt-2.5 font-anton uppercase leading-[0.98] tracking-[-0.015em] text-[var(--black)]"
              style={{ fontSize: "clamp(28px, 2.9vw, 50px)" }}
            >
              LOVED BY GROWING BUSINESSES.
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Previous testimonials"
              className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(14,16,24,0.15)] bg-white text-[var(--black)] transition-colors hover:border-[var(--black)] hover:bg-[var(--black)] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="Next testimonials"
              className="grid h-11 w-11 place-items-center rounded-full bg-[var(--orange)] text-white transition-colors hover:bg-[#E5420F]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onPointerEnter={() => (pausedRef.current = true)}
          onPointerLeave={() => (pausedRef.current = false)}
          onFocusCapture={() => (pausedRef.current = true)}
          onBlurCapture={() => (pausedRef.current = false)}
          className="-mx-5 mt-[clamp(24px,2.2vw,40px)] flex gap-5 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 xl:mx-0 xl:px-0"
        >
          {[0, 1].map((pass) =>
            testimonials.map((t, i) => {
              const tone = TONES[i % TONES.length];
              return (
                <figure
                  key={`${pass}-${t.id}`}
                  data-card={pass === 0 ? "" : undefined}
                  aria-hidden={pass === 1 || undefined}
                  className={`group flex w-[min(80vw,384px)] shrink-0 cursor-default flex-col rounded-[18px] border p-7 shadow-[0_2px_10px_-6px_rgba(14,16,24,0.12)] transition-[transform,box-shadow,border-color] duration-[320ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-[6px] hover:shadow-[0_26px_50px_-22px_rgba(14,16,24,0.34)] ${shell[tone]}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className={`font-anton text-[44px] leading-[0.6] ${markTone[tone]}`}
                    >
                      &ldquo;
                    </span>
                    <span className="flex shrink-0 items-center gap-0.5 pt-1">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} aria-hidden="true" className={`h-3.5 w-3.5 ${starTone[tone]}`} />
                      ))}
                      <span className="sr-only">{t.rating} out of 5</span>
                    </span>
                  </div>

                  <blockquote className="mt-4 flex-1">
                    <p
                      className={`leading-[1.6] ${quoteTone[tone]}`}
                      style={{ fontSize: "clamp(14px, 1vw, 16px)" }}
                    >
                      {t.quote}
                    </p>
                  </blockquote>

                  <figcaption
                    className={`mt-7 flex items-center gap-3.5 border-t pt-5 ${
                      tone === "light"
                        ? "border-[#E6E6E2]"
                        : tone === "dark"
                        ? "border-white/10"
                        : "border-[rgba(14,16,24,0.15)]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-[12px] border font-anton text-[15px] leading-none ${tileTone[tone]}`}
                    >
                      {t.initials}
                    </span>
                    <span className="min-w-0">
                      <span className={`block truncate text-[15px] font-semibold ${nameTone[tone]}`}>
                        {t.company}
                      </span>
                      <span className={`mt-0.5 block truncate text-[13px] ${metaTone[tone]}`}>
                        {t.industry}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
