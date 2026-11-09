"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Monitor, Star, Users } from "lucide-react";

export interface FeaturedReview {
  id: string;
  /** Short pull-quote, set in the display face. */
  highlight: string;
  quote: string;
  company: string;
  industry: string;
  initials: string;
  /** Up to three work tags shown as pills. */
  tags: { label: string; icon: React.ReactNode }[];
  href: string;
  /**
   * true = wording not supplied by the client yet. Replace before publishing —
   * never ship invented words attributed to a named company.
   */
  placeholder?: boolean;
}

export interface SupportingReview {
  id: string;
  quote: string;
  company: string;
  industry: string;
  initials: string;
  tone: "dark" | "light";
  href: string;
  placeholder?: boolean;
}

const icon = {
  site: <Monitor strokeWidth={2.2} className="h-4 w-4" />,
  ux: <BarChart3 strokeWidth={2.2} className="h-4 w-4" />,
  leads: <Users strokeWidth={2.2} className="h-4 w-4" />,
};

export const featuredReviews: FeaturedReview[] = [
  {
    id: "europack",
    highlight: "THEY TRANSFORMED OUR ONLINE PRESENCE.",
    quote:
      "Design Blast Labs transformed our online presence. We saw a huge increase in inquiries within 2 months. Highly recommended!",
    company: "Europack Industries",
    industry: "Manufacturing",
    initials: "EI",
    tags: [
      { label: "Website redesign", icon: icon.site },
      { label: "Google Ads", icon: icon.ux },
      { label: "Lead generation", icon: icon.leads },
    ],
    href: "#case-studies",
  },
  {
    id: "divine",
    highlight: "OUR SALES HAVE GROWN SIGNIFICANTLY.",
    quote:
      "Their social media strategy helped us reach the right audience and our sales have grown significantly. Great team to work with!",
    company: "Divine Naturals",
    industry: "E-commerce",
    initials: "DN",
    tags: [
      { label: "Social strategy", icon: icon.site },
      { label: "Content system", icon: icon.ux },
      { label: "Audience growth", icon: icon.leads },
    ],
    href: "#case-studies",
  },
  {
    id: "prepasole",
    highlight: "SHIPPED FASTER THAN WE EXPECTED.",
    quote:
      "They shipped our app faster than we expected and kept improving it after launch. Retention has climbed every quarter.",
    company: "Prepasole",
    industry: "EdTech App",
    initials: "PS",
    tags: [
      { label: "App development", icon: icon.site },
      { label: "Product design", icon: icon.ux },
      { label: "Retention", icon: icon.leads },
    ],
    href: "#case-studies",
    placeholder: true,
  },
];

export const supportingReviews: SupportingReview[] = [
  {
    id: "vr",
    quote:
      "Professional, creative and result-driven team. They helped us get more enquiries and grow our business significantly.",
    company: "VR Packaging Solutions",
    industry: "Manufacturing",
    initials: "VR",
    tone: "dark",
    href: "#case-studies",
  },
  {
    id: "educonnect",
    quote:
      "The AI automation they built for us has saved hours of manual work. Very professional and delivery-focused team.",
    company: "Educonnect AI",
    industry: "Education Technology",
    initials: "ED",
    tone: "light",
    href: "#case-studies",
  },
];

const DURATION = 4000;

function Disc({
  initials,
  size,
  variant,
}: {
  initials: string;
  size: number;
  variant: "black" | "outline";
}) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full font-anton leading-none ${
        variant === "black"
          ? "bg-[var(--black)] text-white"
          : "border border-white/35 bg-transparent text-white"
      }`}
      style={{ height: size, width: size, fontSize: size * 0.33 }}
    >
      {initials}
    </span>
  );
}

function Stars({ tone }: { tone: "white" | "orange" }) {
  return (
    <span className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`h-[17px] w-[17px] ${
            tone === "white" ? "fill-white text-white" : "fill-[var(--orange)] text-[var(--orange)]"
          }`}
        />
      ))}
      <span className="sr-only">5 out of 5</span>
    </span>
  );
}

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const pausedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = featuredReviews.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const restart = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (reduced) return;
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return;
      setIndex((i) => (i + 1) % total);
    }, DURATION);
  }, [reduced, total]);

  useEffect(() => {
    restart();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [restart]);

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + total) % total);
    restart();
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      id="client-reviews"
      aria-label="Client reviews"
      className="w-full bg-white py-[clamp(44px,3.8vw,76px)]"
    >
      <div className="site-container">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-14">
          <div>
            <p
              className="font-bold uppercase tracking-[0.18em] text-[var(--orange)]"
              style={{ fontSize: "clamp(10px, 0.78vw, 14px)" }}
            >
              CLIENT LOVE / REAL RESULTS
            </p>
            <h2
              className="mt-3 font-anton uppercase leading-[0.96] tracking-[-0.015em]"
              style={{ fontSize: "clamp(30px, 3.4vw, 58px)" }}
            >
              <span className="block text-[var(--black)]">DON&rsquo;T TAKE OUR WORD FOR IT.</span>
              <span className="block text-[var(--orange)]">HEAR IT FROM THEM.</span>
            </h2>
          </div>
          <p
            className="leading-[1.6] text-[var(--grey-600)] lg:pb-2"
            style={{ fontSize: "clamp(13.5px, 0.95vw, 16px)" }}
          >
            We partner with businesses across industries to create websites, content systems and
            automation that drive measurable outcomes.
          </p>
        </div>

        {/* Featured rotating review */}
        <div
          onPointerEnter={() => (pausedRef.current = true)}
          onPointerLeave={() => (pausedRef.current = false)}
          onFocusCapture={() => (pausedRef.current = true)}
          onBlurCapture={() => (pausedRef.current = false)}
          aria-roledescription="carousel"
          className="relative mt-[clamp(24px,2.2vw,38px)] overflow-hidden rounded-[22px] bg-[var(--orange)] p-[clamp(20px,2.6vw,46px)]"
        >
          {featuredReviews.map((r, i) => {
            const active = i === index;
            return (
              <div
                key={r.id}
                aria-hidden={!active}
                className={`grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-0 ${
                  active ? "" : "pointer-events-none absolute inset-0 p-[clamp(20px,2.6vw,46px)]"
                }`}
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "none" : "translateY(12px)",
                  transition:
                    "opacity 560ms cubic-bezier(0.22,0.61,0.36,1), transform 560ms cubic-bezier(0.22,0.61,0.36,1)",
                }}
              >
                {/* Left */}
                <div className="min-w-0 lg:pr-12">
                  <div className="flex items-center gap-4">
                    <Disc initials={r.initials} size={56} variant="black" />
                    <Stars tone="white" />
                  </div>

                  <p
                    className="mt-6 font-anton uppercase leading-[1.02] tracking-[-0.015em] text-[var(--black)]"
                    style={{ fontSize: "clamp(22px, 2.6vw, 46px)" }}
                  >
                    {r.highlight}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <span className="shrink-0 font-anton text-[16px] leading-none text-white">
                      {pad(index + 1)}
                      <span className="text-white/55"> / {pad(total)}</span>
                    </span>
                    <span className="h-[3px] min-w-0 flex-1 overflow-hidden rounded-full bg-white/30">
                      <span
                        className="block h-full rounded-full bg-white transition-[width] duration-500 ease-out"
                        style={{ width: `${((index + 1) / total) * 100}%` }}
                      />
                    </span>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
                    {r.tags.map((t) => (
                      <li
                        key={t.label}
                        className="flex items-center gap-1.5 rounded-full bg-[rgba(14,16,24,0.12)] px-3 py-2 text-[12px] font-semibold text-[var(--black)] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[13px]"
                      >
                        {t.icon}
                        {t.label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className="min-w-0 lg:border-l lg:border-white/30 lg:pl-12">
                  <span aria-hidden="true" className="font-anton text-[42px] leading-[0.6] text-white">
                    &ldquo;
                  </span>

                  <blockquote className="mt-4">
                    <p
                      className="leading-[1.6] text-white"
                      style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}
                    >
                      &ldquo;{r.quote}&rdquo;
                    </p>
                  </blockquote>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/30 pt-5 lg:flex-nowrap">
                    <div className="flex min-w-0 items-center gap-3.5">
                      <Disc initials={r.initials} size={46} variant="black" />
                      <span className="min-w-0">
                        <span className="block truncate text-[15px] font-bold text-[var(--black)]">
                          {r.company}
                        </span>
                        <span className="mt-0.5 block truncate text-[13px] text-[rgba(14,16,24,0.7)]">
                          {r.industry}
                        </span>
                      </span>
                    </div>

                    {/* lg:mr clears the prev/next arrows, which are pinned to the
                        card's bottom-right and would otherwise sit on top of this. */}
                    <a
                      href={r.href}
                      className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/70 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white hover:text-[var(--orange)] lg:mr-[114px]"
                    >
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Arrows pinned to the card, outside the swapping slides */}
          <div className="relative z-10 mt-7 flex items-center justify-end gap-2.5 lg:absolute lg:bottom-[clamp(24px,2.6vw,46px)] lg:right-[clamp(24px,2.6vw,46px)] lg:mt-0">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-[var(--orange)]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="grid h-11 w-11 place-items-center rounded-full bg-[var(--black)] text-white transition-colors hover:bg-[#23262F]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Supporting reviews */}
        <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {supportingReviews.map((r) => {
            const dark = r.tone === "dark";
            return (
              <li
                key={r.id}
                className={`flex flex-col rounded-[18px] border p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-[4px] sm:p-6 ${
                  dark
                    ? "border-[var(--black)] bg-[var(--black)] hover:shadow-[0_24px_44px_-24px_rgba(14,16,24,0.6)]"
                    : "border-[#E6E6E2] bg-white hover:shadow-[0_24px_44px_-24px_rgba(14,16,24,0.3)]"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <Disc initials={r.initials} size={44} variant={dark ? "outline" : "black"} />
                  <Stars tone="orange" />
                </div>

                <blockquote className="mt-4 flex-1">
                  <p
                    className={`leading-[1.6] ${dark ? "text-white/85" : "text-[#4A4E57]"}`}
                    style={{ fontSize: "clamp(13.5px, 0.95vw, 15px)" }}
                  >
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </blockquote>

                <div
                  className={`mt-6 flex flex-wrap items-end justify-between gap-3 border-t pt-4 ${
                    dark ? "border-white/15" : "border-[#E6E6E2]"
                  }`}
                >
                  <span className="min-w-0">
                    <span
                      className={`block truncate text-[14px] font-bold ${
                        dark ? "text-white" : "text-[var(--black)]"
                      }`}
                    >
                      {r.company}
                    </span>
                    <span
                      className={`mt-0.5 block truncate text-[12.5px] ${
                        dark ? "text-white/50" : "text-[var(--grey-600)]"
                      }`}
                    >
                      {r.industry}
                    </span>
                  </span>

                  <a
                    href={r.href}
                    className={`group inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold transition-colors ${
                      dark ? "text-white hover:text-[var(--orange)]" : "text-[var(--black)] hover:text-[var(--orange)]"
                    }`}
                  >
                    View case study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
