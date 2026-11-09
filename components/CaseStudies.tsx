"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export interface CaseStudyMetric {
  /** Numeric target — the counter animates to this. */
  value: number;
  prefix: string;
  suffix: string;
  label: string;
}

export interface MonthlyPoint {
  month: string;
  /** Sessions for that month. */
  visits: number;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  services: string;
  timeline: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Live client site the project visual links out to. */
  siteUrl: string;
  href: string;
  metrics: { websiteTraffic: CaseStudyMetric; leadsGenerated: CaseStudyMetric };
  chartTitle: string;
  /**
   * ILLUSTRATIVE ONLY — the project has no month-by-month analytics export.
   * The shape is scaled so Jun / Jan === 4.0, i.e. the verified +300% uplift.
   * Replace with the real GA/GSC monthly figures before publishing.
   */
  monthlyTraffic: MonthlyPoint[];
  monthlyTrafficIsIllustrative: boolean;
}

/** Single source of truth — the counters, chart and labels all read from here. */
export const featuredCaseStudy: CaseStudy = {
  id: "europack",
  client: "EUROPACK INDUSTRIES",
  industry: "Manufacturing",
  services: "Website + Google Ads",
  timeline: "6 Months",
  description:
    "We redesigned their website and ran Google Ads to generate international enquiries.",
  image: "/projects/europack/website.webp",
  imageAlt: "The Europack Industries homepage we redesigned",
  /** Live site the project visual links out to. */
  siteUrl: "https://europackindia.com/",
  href: "#booking",
  metrics: {
    websiteTraffic: { value: 300, prefix: "+", suffix: "%", label: "Website Traffic" },
    leadsGenerated: { value: 120, prefix: "+", suffix: "%", label: "Leads Generated" },
  },
  chartTitle: "Website Traffic",
  monthlyTraffic: [
    { month: "Jan", visits: 6200 },
    { month: "Feb", visits: 8900 },
    { month: "Mar", visits: 11800 },
    { month: "Apr", visits: 13400 },
    { month: "May", visits: 19200 },
    { month: "Jun", visits: 24800 },
  ],
  monthlyTrafficIsIllustrative: true,
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/** Fires once when the element is ~65% visible. */
function useInView<T extends HTMLElement>() {
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
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect(); // run once per page load
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

function Counter({ metric, run }: { metric: CaseStudyMetric; run: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(metric.value);
      return;
    }
    const duration = 1600;
    let raf = 0;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setN(Math.round(easeOutCubic(p) * metric.value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // rAF is paused while the tab/pane is hidden; make sure the figure still
    // lands on its real value rather than being stuck at 0.
    const settle = window.setTimeout(() => setN(metric.value), duration + 150);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(settle);
    };
  }, [run, metric.value]);

  return (
    <span
      className="block font-anton leading-none tracking-[-0.01em] text-[var(--orange)]"
      style={{ fontSize: "clamp(34px, 2.8vw, 56px)" }}
    >
      {metric.prefix}
      {n}
      {metric.suffix}
    </span>
  );
}

function TrafficChart({ data, run }: { data: MonthlyPoint[]; run: boolean }) {
  const [hover, setHover] = useState<number | null>(null);
  const peak = Math.max(...data.map((d) => d.visits));

  return (
    <div className="relative mt-5 flex h-[clamp(150px,13vw,210px)] items-end gap-[clamp(8px,0.9vw,16px)]">
      {data.map((d, i) => {
        const pct = (d.visits / peak) * 100;
        return (
          <div
            key={d.month}
            className="group relative flex h-full flex-1 flex-col justify-end"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            {hover === i && (
              <div className="pointer-events-none absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg border border-[#E8E8E8] bg-white px-3 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.1)]">
                <span className="block text-[11px] font-semibold text-[var(--black)]">
                  {d.month}
                </span>
                <span className="block text-[11px] text-[var(--grey-600)]">
                  {d.visits.toLocaleString()} visits
                </span>
              </div>
            )}
            <div
              className="w-full rounded-t-[5px] bg-[var(--orange)] transition-[height,filter] duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:brightness-110"
              style={{
                height: run ? `${pct}%` : "0%",
                transitionDelay: `${i * 100}ms`,
              }}
            />
            <span className="mt-2.5 block text-center text-[11px] font-medium text-[var(--grey-600)]">
              {d.month}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function CaseStudies({
  study = featuredCaseStudy,
}: {
  study?: CaseStudy;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { websiteTraffic, leadsGenerated } = study.metrics;

  return (
    <section id="case-studies" className="w-full bg-white py-[clamp(44px,3.8vw,76px)]">
      <div className="site-container">
        <p
          className="font-bold uppercase tracking-[0.2em] text-[var(--orange)]"
          style={{ fontSize: "clamp(10px, 0.72vw, 13px)" }}
        >
          CASE STUDY
        </p>
        <h2
          className="mt-2.5 font-anton uppercase leading-[0.98] tracking-[-0.015em] text-[var(--black)]"
          style={{ fontSize: "clamp(28px, 2.6vw, 44px)" }}
        >
          PROOF, NOT PROMISES.
        </h2>

        <div
          ref={ref}
          className="mt-[clamp(26px,2.4vw,44px)] grid grid-cols-1 items-center gap-[clamp(28px,3vw,56px)] lg:grid-cols-[37fr_29fr_34fr]"
        >
          {/* Left — project visual */}
          <div className="min-w-0">
            <a
              href={study.siteUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit the ${study.client} website (opens in a new tab)`}
              className="group block overflow-hidden rounded-[16px] border border-[#E8E8E8] bg-[#F5F5F3] shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:scale-[1.015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange)]"
            >
              <img
                src={study.image}
                alt={study.imageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </a>
          </div>

          {/* Centre — details + metrics */}
          <div className="min-w-0">
            <h3
              className="font-anton uppercase leading-[1.02] tracking-[-0.01em] text-[var(--black)]"
              style={{ fontSize: "clamp(22px, 1.8vw, 32px)" }}
            >
              {study.client}
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {[study.industry, study.services, study.timeline].map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-[#E5E5E5] bg-white px-3.5 py-1.5 text-[12px] font-medium text-[var(--black)]"
                >
                  {pill}
                </li>
              ))}
            </ul>

            <p
              className="mt-5 max-w-[42ch] leading-[1.55] text-[var(--grey-600)]"
              style={{ fontSize: "clamp(13.5px, 0.95vw, 16px)" }}
            >
              {study.description}
            </p>

            <div className="mt-7 flex items-stretch gap-[clamp(20px,2vw,38px)]">
              <div>
                <Counter metric={websiteTraffic} run={inView} />
                <span className="mt-2 block text-[13px] font-medium text-[var(--grey-600)]">
                  {websiteTraffic.label}
                </span>
              </div>
              <div aria-hidden="true" className="w-px self-stretch bg-[#E8E8E8]" />
              <div>
                <Counter metric={leadsGenerated} run={inView} />
                <span className="mt-2 block text-[13px] font-medium text-[var(--grey-600)]">
                  {leadsGenerated.label}
                </span>
              </div>
            </div>

            <a
              href={study.href}
              className="group mt-8 inline-flex h-[46px] items-center gap-2 rounded-full bg-[var(--orange)] px-7 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5420F]"
            >
              READ FULL CASE STUDY
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — analytics */}
          <div className="min-w-0">
            <figure
              className="rounded-[16px] border border-[#E8E8E8] bg-white p-[clamp(18px,1.6vw,28px)] shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
              aria-label={`${study.chartTitle}: monthly sessions from ${study.monthlyTraffic[0].month} to ${
                study.monthlyTraffic[study.monthlyTraffic.length - 1].month
              }, a ${websiteTraffic.prefix}${websiteTraffic.value}${websiteTraffic.suffix} increase`}
            >
              <figcaption className="flex items-start justify-between gap-4">
                <span
                  className="font-semibold text-[var(--black)]"
                  style={{ fontSize: "clamp(13px, 0.95vw, 16px)" }}
                >
                  {study.chartTitle}
                </span>
                <span
                  className="font-anton leading-none text-[var(--orange)]"
                  style={{ fontSize: "clamp(22px, 1.9vw, 34px)" }}
                >
                  {websiteTraffic.prefix}
                  {websiteTraffic.value}
                  {websiteTraffic.suffix}
                </span>
              </figcaption>

              <TrafficChart data={study.monthlyTraffic} run={inView} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
