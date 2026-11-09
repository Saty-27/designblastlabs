"use client";

import React, { useRef, useState } from "react";
import { type Project, type WorkFilter, projects } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";



const filters: { id: WorkFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "websites", label: "Websites" },
  { id: "apps", label: "Apps" },
  { id: "social", label: "Social Media" },
  { id: "ai", label: "AI Automation" },
];

export default function OurWork() {
  const [active, setActive] = useState<WorkFilter>("all");
  const [expanded, setExpanded] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const visible =
    active === "all" ? projects : projects.filter((p) => p.tags.includes(active));

  /** Columns that split the current set into two rows, capped so cards stay legible. */
  const columns = Math.min(7, Math.max(4, Math.ceil(visible.length / 2)));

  /** Two rows is the default; "View All Projects" reveals whatever is left. */
  const limit = columns * 2;
  const hasMore = visible.length > limit;
  const shown = expanded ? visible : visible.slice(0, limit);

  const nudge = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.4;
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  return (
    <section id="work" className="w-full bg-white py-[clamp(44px,3.8vw,76px)]">
      <div className="site-container">
        {/* Heading + controls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="shrink-0">
            <p
              className="font-bold uppercase tracking-[0.2em] text-[var(--orange)]"
              style={{ fontSize: "clamp(10px, 0.72vw, 13px)" }}
            >
              OUR WORK
            </p>
            <h2
              className="mt-2.5 font-anton uppercase leading-[0.98] tracking-[-0.015em] text-[var(--black)]"
              style={{ fontSize: "clamp(28px, 2.6vw, 44px)" }}
            >
              <span className="block">REAL PROJECTS.</span>
              <span className="block">REAL RESULTS.</span>
            </h2>
          </div>

          {/* Filter pills */}
          <div
            role="tablist"
            aria-label="Filter projects"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:flex-1 lg:justify-center lg:overflow-visible lg:px-0"
          >
            {filters.map((f) => {
              const on = f.id === active;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => {
                    setActive(f.id);
                    setExpanded(false);
                  }}
                  className={`shrink-0 rounded-full border px-5 py-2.5 font-medium transition-colors duration-300 ${
                    on
                      ? "border-[var(--orange)] bg-[var(--orange)] text-white"
                      : "border-[var(--grey-200)] bg-white text-[var(--black)] hover:border-[var(--black)]"
                  }`}
                  style={{ fontSize: "clamp(12px, 0.82vw, 14px)" }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            {hasMore || expanded ? (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="group inline-flex items-center gap-1.5 font-semibold text-[var(--black)] transition-colors hover:text-[var(--orange)]"
                style={{ fontSize: "clamp(12px, 0.82vw, 14px)" }}
              >
                {expanded ? "Show Less" : `View All Projects (${visible.length})`}
                <ArrowRight
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    expanded ? "-rotate-90" : "group-hover:translate-x-1"
                  }`}
                />
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Previous projects"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--grey-200)] bg-white text-[var(--black)] transition-colors hover:border-[var(--black)]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="Next projects"
              className="grid h-10 w-10 place-items-center rounded-full bg-[var(--orange)] text-white transition-colors hover:bg-[#E5420F]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel — 5 up on desktop, swipeable below */}
        <div
          ref={trackRef}
          className="-mx-5 mt-[clamp(22px,2vw,34px)] flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 xl:mx-0 xl:grid xl:auto-rows-fr xl:overflow-visible xl:px-0"
          // Only takes effect once the track becomes a grid at xl.
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {shown.map((p) => (
            <a
              key={p.id}
              data-card
              href={p.href}
              {...(p.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className={`group relative flex w-[min(72vw,262px)] shrink-0 snap-start flex-col xl:w-auto xl:shrink overflow-hidden rounded-[14px] border p-3 transition-[transform,box-shadow] duration-[350ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-[3px] hover:shadow-[0_18px_34px_-18px_rgba(14,16,24,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2 ${
                p.accent
                  ? "border-[var(--orange)] bg-[var(--orange)]"
                  : "border-[var(--grey-200)] bg-white"
              }`}
              style={{ height: "clamp(236px, 18.8vw, 288px)" }}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={`font-anton uppercase leading-[1.05] tracking-[-0.01em] ${
                    p.accent ? "text-white" : "text-[var(--black)]"
                  }`}
                  style={{ fontSize: "clamp(15px, 1.15vw, 21px)" }}
                >
                  {p.name}
                </span>
                <span
                  aria-hidden="true"
                  className={`grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full border transition-transform duration-300 group-hover:translate-x-0.5 ${
                    p.accent
                      ? "border-white/50 text-white"
                      : "border-[var(--grey-200)] text-[var(--grey-600)] group-hover:border-[var(--orange)] group-hover:text-[var(--orange)]"
                  }`}
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="relative mt-2 flex-1 overflow-hidden rounded-[9px] bg-[var(--grey-100)]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-[400ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
                  />
                ) : (
                  // No screenshot yet — show the name rather than a broken-image glyph.
                  <div
                    role="img"
                    aria-label={`${p.name} — ${p.category}`}
                    className={`grid h-full w-full place-items-center px-3 text-center ${
                      p.accent ? "bg-white/15" : "bg-[var(--black)]"
                    }`}
                  >
                    <span
                      className={`font-anton uppercase leading-[1.05] tracking-[-0.01em] ${
                        p.accent ? "text-white" : "text-white/90"
                      }`}
                      style={{ fontSize: "clamp(15px, 1.3vw, 22px)" }}
                    >
                      {p.name}
                    </span>
                  </div>
                )}
                <span className="pointer-events-none absolute inset-0 grid place-items-center bg-[rgba(14,16,24,0.55)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                    View Project
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </span>
              </div>

              <span
                className={`mt-2 block truncate font-medium ${
                  p.accent ? "text-white/85" : "text-[var(--grey-600)]"
                }`}
                style={{ fontSize: "clamp(11px, 0.82vw, 14px)" }}
              >
                {p.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export { projects };
export type { Project, WorkFilter };
