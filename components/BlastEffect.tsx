"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

/* ------------------------------------------------------------------ *
 * ILLUSTRATIVE DEMONSTRATION DATA — not verified client results.
 *
 * Each metric holds two shapes: a declining pre-engagement baseline and
 * a post-engagement growth curve. The slider interpolates between them,
 * so dragging genuinely reshapes the graph instead of just recolouring
 * a fixed one.
 * ------------------------------------------------------------------ */

export interface MetricSeries {
  id: string;
  title: string;
  subtitle: string;
  before: number[];
  after: number[];
  kind: "line" | "bar";
  format: (n: number) => string;
  axis: (n: number) => string;
}

const plain = (n: number) => Math.round(n).toLocaleString("en-IN");
const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export const metrics: MetricSeries[] = [
  {
    id: "traffic",
    title: "ORGANIC WEBSITE TRAFFIC",
    subtitle: "Sessions from organic search",
    before: [1300, 1250, 1210, 1180, 1150, 1120, 1100, 1080, 1060, 1040, 1020, 1000],
    after: [1300, 1420, 1680, 2100, 2750, 3600, 4700, 6100, 7900, 10200, 12800, 15400],
    kind: "line",
    format: plain,
    axis: (n) => (n >= 1000 ? `${Math.round(n / 1000)}K` : `${Math.round(n)}`),
  },
  {
    id: "leads",
    title: "ORGANIC LEADS",
    subtitle: "Qualified enquiries from search",
    before: [22, 20, 19, 18, 17, 17, 16, 15, 15, 14, 14, 13],
    after: [22, 26, 34, 45, 60, 80, 105, 140, 180, 230, 280, 330],
    kind: "bar",
    format: plain,
    axis: (n) => `${Math.round(n)}`,
  },
  {
    id: "revenue",
    title: "SALES REVENUE",
    subtitle: "Revenue from organic enquiries",
    before: [56000, 52000, 50000, 48000, 46000, 45000, 44000, 43000, 42000, 41000, 40000, 39000],
    after: [56000, 68000, 88000, 115000, 150000, 195000, 250000, 320000, 400000, 490000, 560000, 620000],
    kind: "bar",
    format: inr,
    axis: (n) => (n === 0 ? "0" : `${Math.round(n / 100000)}L`),
  },
];

const N = 12;
const VB_W = 1000;
const VB_H = 250;
const PAD = 8;

const MUTED = [0x55, 0x5b, 0x64] as const;
const ACCENT = [0xff, 0x4a, 0x1c] as const;

const avg = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const toneAt = (t: number) => {
  const e = Math.pow(t, 0.75); // warm up a little ahead of the curve
  const c = MUTED.map((m, i) => Math.round(lerp(m, ACCENT[i], e)));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
};

const seriesAt = (m: MetricSeries, t: number) => m.before.map((b, i) => lerp(b, m.after[i], t));
const xAt = (i: number) => ((i + 0.5) / N) * VB_W;
const yAt = (v: number, peak: number) => VB_H - (v / peak) * (VB_H - PAD * 2) - PAD;

/* ------------------------------------------------------------------ */

export default function BlastEffect() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const handleRef = useRef<HTMLSpanElement>(null);

  const tRef = useRef(0);
  const draggingRef = useRef(false);
  const rafRef = useRef(0);
  const introRef = useRef(0);

  const [dragging, setDragging] = useState(false);
  const [mounted, setMounted] = useState(false);

  const peaks = useMemo(() => metrics.map((m) => Math.max(...m.after)), []);

  // Per-chart element refs — painted directly, never through React state.
  const chartRefs = useRef(
    metrics.map(() => ({
      wrap: React.createRef<HTMLDivElement>(),
      line: React.createRef<SVGPathElement>(),
      area: React.createRef<SVGPathElement>(),
      dots: Array.from({ length: N }, () => React.createRef<SVGCircleElement>()),
      bars: Array.from({ length: N }, () => React.createRef<SVGRectElement>()),
      now: React.createRef<HTMLSpanElement>(),
      pct: React.createRef<HTMLSpanElement>(),
    }))
  );

  const paint = useCallback(
    (t: number) => {
      const tone = toneAt(t);

      metrics.forEach((m, mi) => {
        const r = chartRefs.current[mi];
        const peak = peaks[mi];
        const vals = seriesAt(m, t);

        if (r.wrap.current) r.wrap.current.style.color = tone;

        if (m.kind === "line") {
          const pts = vals.map((v, i) => `${xAt(i).toFixed(1)} ${yAt(v, peak).toFixed(1)}`);
          const d = pts.map((p, i) => `${i ? "L" : "M"}${p}`).join(" ");
          r.line.current?.setAttribute("d", d);
          r.area.current?.setAttribute(
            "d",
            `${d} L${xAt(N - 1).toFixed(1)} ${VB_H} L${xAt(0).toFixed(1)} ${VB_H} Z`
          );
          vals.forEach((v, i) => {
            const c = r.dots[i].current;
            if (c) c.setAttribute("cy", yAt(v, peak).toFixed(1));
          });
        } else {
          vals.forEach((v, i) => {
            const rect = r.bars[i].current;
            if (!rect) return;
            const h = (v / peak) * (VB_H - PAD * 2);
            rect.setAttribute("y", (VB_H - h - PAD).toFixed(1));
            rect.setAttribute("height", Math.max(h, 0).toFixed(1));
          });
        }

        const base = avg(m.before);
        const now = avg(vals);
        const pct = ((now - base) / base) * 100;
        if (r.now.current) r.now.current.textContent = m.format(now);
        if (r.pct.current) {
          r.pct.current.textContent = `${pct >= 0 ? "+" : ""}${Math.round(pct).toLocaleString("en-IN")}%`;
        }
      });

      const pctStr = `${(t * 100).toFixed(2)}%`;
      if (fillRef.current) fillRef.current.style.width = pctStr;
      if (handleRef.current) handleRef.current.style.left = pctStr;

      const s = sliderRef.current;
      if (s) {
        s.setAttribute("aria-valuenow", String(Math.round(t * 100)));
        s.setAttribute(
          "aria-valuetext",
          t < 0.03 ? "Before Design Blast Labs" : t > 0.97 ? "After Design Blast Labs" : `${Math.round(t * 100)} percent toward the after state`
        );
      }
    },
    [peaks]
  );

  const apply = useCallback(
    (t: number) => {
      tRef.current = clamp(t, 0, 1);
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        paint(tRef.current);
      });
    },
    [paint]
  );

  // Paint the initial frame, then play the intro scrub once in view.
  useEffect(() => {
    setMounted(true);
    paint(0);

    const el = sectionRef.current;
    if (!el) return;

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calm) {
      apply(0.7);
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const target = 0.7;
        const dur = 1700;
        let start: number | null = null;
        const step = (ts: number) => {
          if (start === null) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          if (draggingRef.current) return; // user took over
          tRef.current = easeOutCubic(p) * target;
          paint(tRef.current);
          if (p < 1) introRef.current = requestAnimationFrame(step);
        };
        introRef.current = requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (introRef.current) cancelAnimationFrame(introRef.current);
    };
  }, [paint, apply]);

  const fromClientX = useCallback(
    (clientX: number) => {
      const el = trackRef.current;
      if (!el) return;
      const b = el.getBoundingClientRect();
      apply((clientX - b.left) / b.width);
    },
    [apply]
  );

  const onPointerDown = (e: React.PointerEvent) => {
    if (introRef.current) cancelAnimationFrame(introRef.current);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    draggingRef.current = true;
    setDragging(true);
    fromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    e.preventDefault();
    fromClientX(e.clientX);
  };
  const endDrag = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    draggingRef.current = false;
    setDragging(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 0.1 : 0.02;
    const map: Record<string, number> = {
      ArrowLeft: tRef.current - step,
      ArrowRight: tRef.current + step,
      ArrowDown: tRef.current - step,
      ArrowUp: tRef.current + step,
      Home: 0,
      End: 1,
    };
    if (e.key in map) {
      e.preventDefault();
      if (introRef.current) cancelAnimationFrame(introRef.current);
      apply(map[e.key]);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="blast-effect"
      aria-label="The Blast Effect — growth comparison"
      className="w-full bg-[#0E0F13] py-[clamp(48px,4.2vw,86px)]"
    >
      <div className="site-container">
        <p
          className="font-bold uppercase tracking-[0.2em] text-[var(--orange)]"
          style={{ fontSize: "clamp(10px, 0.72vw, 13px)" }}
        >
          THE BLAST EFFECT
        </p>
        <h2
          className="mt-2.5 font-anton uppercase leading-[0.98] tracking-[-0.015em] text-white"
          style={{ fontSize: "clamp(28px, 2.6vw, 44px)" }}
        >
          DRAG TO SEE THE DIFFERENCE.
        </h2>

        {/* The control */}
        <div className="mt-8 flex items-center gap-4 sm:gap-6">
          <span className="shrink-0 font-anton uppercase leading-none text-white/35 [font-size:clamp(12px,1vw,16px)]">
            Before
          </span>

          <div
            ref={sliderRef}
            role="slider"
            tabIndex={0}
            aria-label="Drag from before to after"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={0}
            onKeyDown={onKeyDown}
            className="relative min-w-0 flex-1 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--orange)]"
          >
            <div
              ref={trackRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              className="relative h-2 w-full cursor-ew-resize touch-none rounded-full bg-white/10"
            >
              <span
                ref={fillRef}
                className="absolute inset-y-0 left-0 rounded-full bg-[var(--orange)]"
                style={{ width: "0%" }}
              />
              <span
                ref={handleRef}
                className={`absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--orange)] text-white shadow-[0_0_0_6px_rgba(255,74,28,0.18)] transition-[transform,box-shadow] duration-200 ${
                  dragging ? "scale-110 shadow-[0_0_0_10px_rgba(255,74,28,0.24)]" : "hover:scale-105"
                }`}
                style={{ left: "0%" }}
              >
                <ChevronsLeftRight aria-hidden="true" className="h-5 w-5" />
              </span>
            </div>
          </div>

          <span className="shrink-0 font-anton uppercase leading-none text-white [font-size:clamp(12px,1vw,16px)]">
            After
          </span>
        </div>

        {/* Dashboard */}
        <div className="mt-9 space-y-4">
          {metrics.map((m, i) => {
            const r = chartRefs.current[i];
            const peak = peaks[i];
            const start = m.before;
            return (
              <div
                key={m.id}
                className="rounded-[14px] border border-white/10 bg-[#16181D] p-5 transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] sm:p-6"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "none" : "translateY(16px)",
                  transitionDelay: `${i * 110}ms`,
                }}
              >
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[190px_minmax(0,1fr)_170px] lg:items-center lg:gap-7">
                  <div className="min-w-0">
                    <h3 className="font-anton uppercase leading-[1.05] tracking-[-0.01em] text-white [font-size:clamp(15px,1.15vw,19px)]">
                      {m.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] leading-snug text-white/35">{m.subtitle}</p>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      Before
                    </p>
                    <span className="mt-1 block font-anton leading-none text-[#7D838C] [font-size:clamp(24px,1.9vw,33px)]">
                      {m.format(avg(m.before))}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex">
                      <div className="flex w-9 shrink-0 flex-col justify-between pr-2 text-right text-[10px] text-white/25">
                        {[4, 3, 2, 1, 0].map((k) => (
                          <span key={k}>{m.axis((peak / 4) * k)}</span>
                        ))}
                      </div>

                      <div
                        ref={r.wrap}
                        className="relative h-[clamp(130px,12.5vw,176px)] min-w-0 flex-1"
                        style={{ color: toneAt(0) }}
                      >
                        <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-between">
                          {[0, 1, 2, 3, 4].map((k) => (
                            <span key={k} className="block h-px w-full bg-white/[0.07]" />
                          ))}
                        </div>

                        <svg
                          viewBox={`0 0 ${VB_W} ${VB_H}`}
                          preserveAspectRatio="none"
                          className="absolute inset-0 h-full w-full"
                          role="img"
                          aria-label={`${m.title} — drag the slider to move between the before and after shape`}
                        >
                          {m.kind === "line" ? (
                            <>
                              <defs>
                                <linearGradient id={`${m.id}-fill`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              <path ref={r.area} d="" fill={`url(#${m.id}-fill)`} />
                              <path
                                ref={r.line}
                                d=""
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                              />
                              {start.map((v, k) => (
                                <circle
                                  key={k}
                                  ref={r.dots[k]}
                                  cx={xAt(k)}
                                  cy={yAt(v, peak)}
                                  r="3.5"
                                  fill="currentColor"
                                  vectorEffect="non-scaling-stroke"
                                />
                              ))}
                            </>
                          ) : (
                            start.map((v, k) => {
                              const slot = VB_W / N;
                              const bw = slot * 0.5;
                              const h = (v / peak) * (VB_H - PAD * 2);
                              return (
                                <rect
                                  key={k}
                                  ref={r.bars[k]}
                                  x={k * slot + (slot - bw) / 2}
                                  width={bw}
                                  y={VB_H - h - PAD}
                                  height={h}
                                  rx="3"
                                  fill="currentColor"
                                />
                              );
                            })
                          )}
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--orange)]">
                      Now
                    </p>
                    <span
                      ref={r.now}
                      className="mt-1 block font-anton leading-none text-white [font-size:clamp(26px,2.1vw,36px)]"
                    />
                    <span className="mt-3 inline-flex rounded-full bg-[var(--orange)] px-3.5 py-1.5">
                      <span ref={r.pct} className="font-anton text-[14px] leading-none text-white" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-[11px] text-white/25">
          Illustrative demonstration data, not verified client results.
        </p>
      </div>
    </section>
  );
}
