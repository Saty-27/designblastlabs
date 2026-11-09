"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Filter,
  Headphones,
  LineChart,
  Megaphone,
  MessageSquare,
  Monitor,
  Phone,
  Star,
  Tag,
  Target,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useContactModal } from "./ContactModalProvider";

export interface ComparisonRow {
  icon: React.ReactNode;
  feature: string;
  /** How we handle it. */
  ours: string;
  /** What the alternative typically looks like. */
  others: string;
}

const ico = "h-[19px] w-[19px]";

export const comparisonRows: ComparisonRow[] = [
  {
    icon: <Target className={ico} />,
    feature: "Strategy + Execution",
    ours: "End-to-end strategy and hands-on execution",
    others: "Only execution, often without clear strategy",
  },
  {
    icon: <Monitor className={ico} />,
    feature: "Modern, Fast Websites",
    ours: "Custom, high-performance websites built for results",
    others: "Outdated templates and generic designs",
  },
  {
    icon: <LineChart className={ico} />,
    feature: "SEO & Organic Growth",
    ours: "Data-driven SEO to bring consistent organic traffic",
    others: "Basic SEO or not included",
  },
  {
    icon: <Megaphone className={ico} />,
    feature: "Social Media Marketing",
    ours: "Strategic content and growth-focused campaigns",
    others: "Occasional posting with no clear strategy",
  },
  {
    icon: <Bot className={ico} />,
    feature: "AI Automation & Agents",
    ours: "Custom AI workflows to save time and increase sales",
    others: "Usually not offered",
  },
  {
    icon: <Filter className={ico} />,
    feature: "Conversion-Focused Design",
    ours: "Designs that turn visitors into customers",
    others: "Focus on looks, not conversion",
  },
  {
    icon: <MessageSquare className={ico} />,
    feature: "Direct Communication",
    ours: "Speak directly with our team (you're never left in the dark)",
    others: "Multiple account managers",
  },
  {
    icon: <Headphones className={ico} />,
    feature: "Ongoing Support",
    ours: "Continuous support and proactive improvements",
    others: "Limited support after launch",
  },
  {
    icon: <Tag className={ico} />,
    feature: "Transparent Pricing",
    ours: "Clear, honest pricing with no hidden costs",
    others: "Hidden fees and unexpected charges",
  },
];

const headerChips = [
  { icon: <Target className="h-[19px] w-[19px]" />, line1: "Strategy", line2: "First Approach" },
  { icon: <BarChart3 className="h-[19px] w-[19px]" />, line1: "Measurable", line2: "Results" },
  { icon: <Users className="h-[19px] w-[19px]" />, line1: "Long-Term", line2: "Partnership" },
];

const ctaPoints = [
  { icon: <Target className="h-[19px] w-[19px]" />, line1: "A strategy tailored", line2: "to your business" },
  { icon: <BarChart3 className="h-[19px] w-[19px]" />, line1: "Clear priorities and", line2: "recommended next steps" },
  { icon: <Zap className="h-[19px] w-[19px]" />, line1: "A practical plan for", line2: "sustainable growth" },
];

/**
 * PLACEHOLDER FIGURES — not verified numbers. Replace each `value` with a
 * figure you can stand behind (or delete the row) before this goes live.
 */
export const trustStats = [
  { icon: <Users className="h-[20px] w-[20px]" />, value: "100+", label: "Businesses Transformed", verified: false },
  { icon: <BarChart3 className="h-[20px] w-[20px]" />, value: "3–6 Months", label: "Average ROI Timeline", verified: false },
  { icon: <Trophy className="h-[20px] w-[20px]" />, value: "100%", label: "Client Retention Rate", verified: false },
  { icon: <Star className="h-[20px] w-[20px]" />, value: "5.0/5", label: "Client Satisfaction", verified: false },
];

/** Relative bar heights for the CTA panel's growth graphic. */
const BARS = [20, 27, 34, 43, 54, 66, 79, 92];

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
const RULE = "#EFEFEB";
const MID_RULE = "rgba(255, 79, 23, 0.16)";
/** Column geometry — shared by the <colgroup> and the raised middle card. */
const COLS = ["31%", "34.5%", "34.5%"];

export default function WhyChooseUs() {
  const { ref, inView } = useInView<HTMLElement>();
  const { open: openContact } = useContactModal();

  const rise = (delay: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "none" : "translateY(16px)",
    transition: `opacity 620ms ${EASE} ${delay}ms, transform 620ms ${EASE} ${delay}ms`,
  });

  return (
    <section
      ref={ref}
      id="why-us"
      aria-label="Why choose Design Blast Labs"
      className="w-full bg-white py-[clamp(46px,4vw,84px)]"
    >
      <div className="site-container">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="min-w-0 max-w-[780px]">
            <div className="flex items-center gap-3.5" style={rise(0)}>
              <span
                className="font-bold uppercase tracking-[0.2em] text-[var(--orange)]"
                style={{ fontSize: "clamp(10px, 0.72vw, 13px)" }}
              >
                WHY CHOOSE US
              </span>
              <span aria-hidden="true" className="h-px w-[clamp(44px,5vw,96px)] bg-[rgba(255,79,23,0.45)]" />
            </div>

            <h2
              className="mt-2.5 font-anton uppercase leading-[0.96] tracking-[-0.015em] text-[var(--black)]"
              style={{ fontSize: "clamp(30px, 3.6vw, 62px)", ...rise(80) }}
            >
              DESIGN BLAST LABS{" "}
              <span className="lowercase text-[var(--grey-400)]" style={{ fontSize: "0.58em" }}>
                vs
              </span>{" "}
              <span className="text-[var(--orange)]">OTHERS.</span>
            </h2>

            <p
              className="mt-3 max-w-[54ch] leading-[1.6] text-[var(--grey-600)]"
              style={{ fontSize: "clamp(14px, 1.05vw, 18px)", ...rise(140) }}
            >
              More than a service provider. A growth partner for your business.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-4 lg:shrink-0 lg:flex-nowrap lg:pt-2">
            {headerChips.map((chip, i) => (
              <li key={chip.line1} className="flex items-center" style={rise(200 + i * 80)}>
                {i > 0 && (
                  <span aria-hidden="true" className="mr-5 hidden h-10 w-px bg-[#E6E6E2] sm:block" />
                )}
                <span
                  aria-hidden="true"
                  className="mr-3 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[rgba(255,79,23,0.1)] text-[var(--orange)]"
                >
                  {chip.icon}
                </span>
                <span className="text-[13.5px] font-semibold leading-[1.25] text-[var(--black)]">
                  {chip.line1}
                  <br />
                  {chip.line2}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Table + CTA ────────────────────────────────────────── */}
        <div className="mt-[clamp(26px,2.4vw,44px)] grid grid-cols-1 gap-7 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* Comparison table */}
          <div style={rise(260)}>
            <div className="overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div
                className="relative rounded-[16px] md:min-w-[680px]"
                style={{ boxShadow: `0 0 0 1px ${RULE}` }}
              >
                {/* Raised "winner" column, drawn behind the table */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 top-0 hidden rounded-[16px] md:block"
                  style={{
                    left: COLS[0],
                    width: COLS[1],
                    background:
                      "linear-gradient(180deg, rgba(255,79,23,0.13) 0%, rgba(255,79,23,0.045) 100%)",
                    boxShadow:
                      "0 22px 46px -26px rgba(255,79,23,0.8), 0 0 0 1.5px rgba(255,79,23,0.3)",
                  }}
                />

                <table className="relative w-full border-collapse text-left max-md:block" style={{ zIndex: 1 }}>
                  <caption className="sr-only">
                    Design Blast Labs compared with traditional agencies across nine areas
                  </caption>
                  <colgroup className="max-md:hidden">
                    {COLS.map((w, i) => (
                      <col key={i} style={{ width: w }} />
                    ))}
                  </colgroup>

                  <thead className="max-md:hidden">
                    <tr>
                      <th
                        scope="col"
                        className="rounded-tl-[16px] bg-[#F6F6F3] px-6 py-4 text-[15px] font-bold text-[var(--black)]"
                        style={{ borderBottom: `1px solid ${RULE}` }}
                      >
                        Features
                      </th>
                      <th
                        scope="col"
                        className="rounded-t-[16px] bg-[var(--orange)] px-6 py-4 text-center font-anton text-[16px] uppercase tracking-[0.02em] text-white"
                      >
                        Design Blast Labs
                      </th>
                      <th
                        scope="col"
                        className="rounded-tr-[16px] bg-[#F6F6F3] px-6 py-4 text-center text-[15px] font-bold text-[var(--black)]"
                        style={{ borderBottom: `1px solid ${RULE}` }}
                      >
                        Traditional Agencies
                      </th>
                    </tr>
                  </thead>

                  <tbody className="max-md:block">
                    {comparisonRows.map((row, i) => {
                      const last = i === comparisonRows.length - 1;
                      const delay = 340 + i * 55;
                      return (
                        <tr
                          key={row.feature}
                          className="group max-md:mb-3 max-md:block max-md:overflow-hidden max-md:rounded-[14px] max-md:border max-md:border-[#E6E6E2] max-md:last:mb-0"
                          style={rise(delay)}
                        >
                          <th
                            scope="row"
                            className={`bg-[#FBFBF9] px-6 py-[15px] align-middle max-md:block max-md:border-b max-md:border-[#E6E6E2] max-md:px-4 max-md:py-3 ${
                              last ? "rounded-bl-[16px]" : ""
                            }`}
                            style={{ borderBottom: last ? "none" : `1px solid ${RULE}` }}
                          >
                            <span className="flex items-center gap-3.5">
                              <span
                                aria-hidden="true"
                                className="shrink-0 text-[var(--black)] transition-colors duration-300 group-hover:text-[var(--orange)]"
                              >
                                {row.icon}
                              </span>
                              <span className="text-[14px] font-semibold leading-[1.3] text-[var(--black)]">
                                {row.feature}
                              </span>
                            </span>
                          </th>

                          <td
                            className="px-5 py-[15px] align-middle max-md:block max-md:px-4 max-md:py-3"
                            style={{ borderBottom: last ? "none" : `1px solid ${MID_RULE}` }}
                          >
                            <span className="mb-1.5 block font-anton text-[11px] uppercase tracking-[0.08em] text-[var(--orange)] md:hidden">
                              Design Blast Labs
                            </span>
                            <span className="flex items-start gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-px grid h-[21px] w-[21px] shrink-0 place-items-center rounded-full bg-[var(--orange)]"
                              >
                                <Check strokeWidth={3.6} className="h-[12px] w-[12px] text-white" />
                              </span>
                              <span className="text-[13.5px] leading-[1.45] text-[var(--black)]">
                                {row.ours}
                              </span>
                            </span>
                          </td>

                          <td
                            className={`bg-white px-6 py-[15px] align-middle max-md:block max-md:px-4 max-md:py-3 ${
                              last ? "rounded-br-[16px]" : ""
                            }`}
                            style={{ borderBottom: last ? "none" : `1px solid ${RULE}` }}
                          >
                            <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--grey-400)] md:hidden">
                              Traditional Agencies
                            </span>
                            <span className="flex items-start gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-px grid h-[21px] w-[21px] shrink-0 place-items-center rounded-full bg-[#D9D9D4]"
                              >
                                <X strokeWidth={3.4} className="h-[11px] w-[11px] text-white" />
                              </span>
                              <span className="text-[13.5px] leading-[1.45] text-[var(--grey-600)]">
                                {row.others}
                              </span>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Orange CTA panel */}
          <aside
            className="relative flex flex-col overflow-hidden rounded-[16px] p-[clamp(24px,2.2vw,36px)] text-white shadow-[0_26px_60px_-30px_rgba(255,79,23,0.8)]"
            style={{
              background:
                "linear-gradient(145deg, #FF5A24 0%, var(--orange) 45%, #EF4310 100%)",
              ...rise(320),
            }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 68%)" }}
            />

            <div className="relative flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/50 px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em]">
                YOUR NEXT MOVE
              </span>
            </div>

            <h3
              className="relative mt-7 font-anton uppercase leading-[0.92] tracking-[-0.015em]"
              style={{ fontSize: "clamp(30px, 2.9vw, 50px)" }}
            >
              <span className="block text-white">STOP SETTLING.</span>
              <span className="block text-[var(--black)]">START SCALING.</span>
            </h3>

            <p className="relative mt-4 max-w-[46ch] text-[14.5px] leading-[1.55] text-white/90">
              Let&rsquo;s identify the biggest opportunities to improve your website, marketing, and
              business automation.
            </p>

            {/* Bullets on the left, growth graphic tucked in on the right */}
            <div className="relative mt-7 flex-1">
              <ul className="space-y-4 sm:max-w-[58%]">
                {ctaPoints.map((p) => (
                  <li key={p.line1} className="flex items-center gap-3.5">
                    <span
                      aria-hidden="true"
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/18 text-white"
                    >
                      {p.icon}
                    </span>
                    <span className="text-[13.5px] font-medium leading-[1.3] text-white">
                      {p.line1}
                      <br />
                      {p.line2}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2 right-0 hidden h-[200px] w-[42%] sm:block"
              >
                <div className="absolute inset-x-0 bottom-0 flex h-[72%] items-end gap-[4px]">
                  {BARS.map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-t-[3px]"
                      style={{
                        height: inView ? `${h}%` : "6%",
                        background:
                          i >= BARS.length - 2 ? "rgba(255,255,255,0.46)" : "rgba(255,255,255,0.22)",
                        transition: `height 760ms ${EASE} ${440 + i * 60}ms`,
                      }}
                    />
                  ))}
                </div>

                <svg viewBox="0 0 200 200" fill="none" className="absolute inset-0 h-full w-full">
                  <path
                    d="M8 186 C 60 180, 108 150, 140 104 S 178 38, 190 14"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    style={{
                      strokeDasharray: 320,
                      strokeDashoffset: inView ? 0 : 320,
                      transition: `stroke-dashoffset 1200ms ${EASE} 560ms`,
                    }}
                  />
                  <path
                    d="M168 10 L193 9 L188 34"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    style={{
                      opacity: inView ? 1 : 0,
                      transition: `opacity 400ms ${EASE} 1500ms`,
                    }}
                  />
                </svg>

                <span
                  className="absolute left-[-12%] top-[30%] rounded-[10px] bg-white px-3 py-2 text-[11px] font-semibold leading-[1.5] text-[var(--black)] shadow-[0_10px_24px_-10px_rgba(14,16,24,0.6)]"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(10px)",
                    transition: `opacity 520ms ${EASE} 900ms, transform 520ms ${EASE} 900ms`,
                  }}
                >
                  More Traffic
                  <br />
                  More Leads
                  <br />
                  More Sales <span className="text-[var(--orange)]">↗</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={openContact}
              className="group relative mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-white py-[18px] font-anton text-[15px] uppercase tracking-[0.04em] text-[var(--black)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--black)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
            >
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              GET A FREE STRATEGY CALL
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="relative mt-4 text-center text-[13px] text-white/85">
              No pressure. Just a conversation about your goals.
            </p>
          </aside>
        </div>

        {/* ── Stats bar ──────────────────────────────────────────── */}
        <ul
          className="mt-[clamp(26px,2.4vw,44px)] grid grid-cols-2 gap-3 border-t border-[#EFEFEB] pt-[clamp(26px,2.2vw,40px)] sm:gap-x-6 sm:gap-y-7 lg:grid-cols-4"
          style={rise(420)}
        >
          {trustStats.map((s, i) => (
            <li
              key={s.label}
              className="flex flex-col items-start gap-2.5 rounded-[14px] border border-[#EFEFEB] bg-[#FBFBF9] p-4 sm:flex-row sm:items-center sm:gap-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
            >
              {i > 0 && (
                <span aria-hidden="true" className="mr-2 hidden h-12 w-px bg-[#EFEFEB] lg:block" />
              )}
              <span
                aria-hidden="true"
                className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-[rgba(255,79,23,0.1)] text-[var(--orange)] sm:h-[52px] sm:w-[52px]"
              >
                {s.icon}
              </span>
              <span className="min-w-0">
                <span className="block whitespace-nowrap font-anton text-[clamp(20px,1.7vw,29px)] leading-none text-[var(--black)]">
                  {s.value}
                </span>
                <span className="mt-1.5 block text-[12.5px] leading-[1.3] text-[var(--grey-600)] sm:text-[13px]">
                  {s.label}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
