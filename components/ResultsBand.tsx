"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Eye, BarChart3, Smartphone, Zap } from "lucide-react";

export interface ResultItem {
  value: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
  /** false renders the value in white — used to break the run of orange. */
  accent: boolean;
}

/**
 * Editable placeholder metrics — not verified company statistics.
 * Swap the values here before publishing.
 */
export const resultItems: ResultItem[] = [
  {
    value: "10M+",
    label: "Views Generated",
    sub: "For Social Media Clients",
    icon: <Eye strokeWidth={2.25} className="h-[22px] w-[22px]" />,
    accent: false,
  },
  {
    value: "+200%",
    label: "Business Growth",
    sub: "From Websites We Build",
    icon: <BarChart3 strokeWidth={2.25} className="h-[22px] w-[22px]" />,
    accent: true,
  },
  {
    value: "5X",
    label: "Revenue Increase",
    sub: "From Custom Apps",
    icon: <Smartphone strokeWidth={2.25} className="h-[22px] w-[22px]" />,
    accent: true,
  },
  {
    value: "70%",
    label: "Faster Operations",
    sub: "With AI Automation",
    icon: <Zap strokeWidth={2.25} className="h-[22px] w-[22px]" />,
    accent: true,
  },
];


/**
 * Counts up to the numeric part of a value like "10M+" or "+200%", keeping the
 * prefix and suffix intact. Writes straight to the DOM so four counters running
 * at once never trigger a React re-render.
 */
function CountUp({ value, duration = 1500 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
    // Nothing numeric to animate (or the user prefers less motion) — just show it.
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value;
      return;
    }

    const [, prefix, digits, suffix] = match;
    const target = parseFloat(digits);
    const decimals = (digits.split(".")[1] || "").length;
    const render = (n: number) => {
      el.textContent = `${prefix}${n.toFixed(decimals)}${suffix}`;
    };
    render(0);

    let frame = 0;
    let settle = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // easeOutCubic
          render(target * (1 - Math.pow(1 - t, 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        // rAF is throttled in background tabs, so guarantee the final value.
        settle = window.setTimeout(() => {
          cancelAnimationFrame(frame);
          render(target);
        }, duration + 200);
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
    };
  }, [value, duration]);

  // Server-render the final value so it is correct before hydration and for SEO.
  return <span ref={ref}>{value}</span>;
}

export default function ResultsBand() {
  return (
    <section
      aria-label="Our results"
      className="w-full bg-[var(--black)] text-white"
    >
      <div className="site-container py-[clamp(30px,1.9vw,34px)]">
        <p
          className="flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[var(--orange)]"
          style={{ fontSize: "clamp(10px, 0.72vw, 14px)" }}
        >
          <span aria-hidden="true" className="inline-block h-[5px] w-[5px] rounded-full bg-[var(--orange)]" />
          OUR RESULTS
        </p>

        <div className="mt-[clamp(14px,1.2vw,22px)] flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-0">
          <ul className="grid flex-1 grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-9 lg:flex lg:flex-1 lg:items-stretch lg:gap-y-0">
            {resultItems.map((item, i) => (
              <li
                key={item.label}
                className={`flex min-w-0 flex-col items-start gap-2.5 sm:flex-row sm:items-start sm:gap-4 lg:flex-1 lg:justify-start ${
                  i > 0 ? "lg:border-l lg:border-white/[0.14] lg:pl-[clamp(16px,1.6vw,34px)]" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="mt-1 grid shrink-0 place-items-center rounded-[14px] border border-white/10 bg-white/[0.06] text-[var(--orange)]"
                  style={{ height: "clamp(46px, 2.9vw, 64px)", width: "clamp(46px, 2.9vw, 64px)" }}
                >
                  {item.icon}
                </span>

                <span className="min-w-0">
                  <span
                    className={`block font-anton uppercase leading-[0.95] tracking-[-0.01em] ${
                      item.accent ? "text-[var(--orange)]" : "text-white"
                    }`}
                    style={{ fontSize: "clamp(32px, 2.2vw, 50px)" }}
                  >
                    <CountUp value={item.value} />
                  </span>
                  <span
                    className="mt-1.5 block font-semibold text-white"
                    style={{ fontSize: "clamp(14px, 0.82vw, 16px)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="mt-0.5 block font-medium text-white/45"
                    style={{ fontSize: "clamp(12px, 0.72vw, 14px)" }}
                  >
                    {item.sub}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="shrink-0 lg:pl-[clamp(20px,2vw,40px)]">
            <a
              href="#case-studies"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--orange)] font-semibold uppercase tracking-[0.1em] text-[var(--orange)] transition-colors duration-300 hover:bg-[var(--orange)] hover:text-white sm:w-auto"
              style={{
                height: "clamp(42px, 2.5vw, 54px)",
                paddingInline: "clamp(22px, 1.6vw, 34px)",
                fontSize: "clamp(10px, 0.68vw, 13px)",
              }}
            >
              REAL RESULTS
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
