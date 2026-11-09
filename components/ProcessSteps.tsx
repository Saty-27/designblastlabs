"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, BarChart3, Code2, FileText, Search } from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "We understand your business, goals and current challenges.",
    icon: <Search strokeWidth={2.4} className="h-[22px] w-[22px]" />,
  },
  {
    number: "02",
    title: "STRATEGIZE",
    description: "We create a clear plan tailored to your growth.",
    icon: <FileText strokeWidth={2.4} className="h-[22px] w-[22px]" />,
  },
  {
    number: "03",
    title: "BUILD & EXECUTE",
    description: "We design, develop and launch with precision.",
    icon: <Code2 strokeWidth={2.4} className="h-[22px] w-[22px]" />,
  },
  {
    number: "04",
    title: "GROW TOGETHER",
    description: "We track results and keep optimizing for higher growth.",
    icon: <BarChart3 strokeWidth={2.4} className="h-[22px] w-[22px]" />,
  },
];

function useInView<T extends HTMLElement>(threshold = 0.3) {
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
/** Dashes are painted, not characters, so they stay crisp at any width. */
const DASH =
  "repeating-linear-gradient(to right, var(--orange) 0 7px, transparent 7px 14px)";

export default function ProcessSteps() {
  const { ref, inView } = useInView<HTMLElement>();
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* The scroll-driven highlight only makes sense in the stacked mobile layout. */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /* Whichever step sits in the middle band of the screen becomes the active one. */
  useEffect(() => {
    if (!isMobile) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = stepRefs.current.indexOf(e.target as HTMLLIElement);
          if (i !== -1) setActive(i);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [isMobile]);

  return (
    <section
      ref={ref}
      id="process"
      aria-label="Our process"
      className="w-full bg-white py-[clamp(44px,3.8vw,76px)]"
    >
      <div className="site-container">
        <p
          className="font-bold uppercase tracking-[0.2em] text-[var(--orange)] transition-all duration-700"
          style={{
            fontSize: "clamp(10px, 0.72vw, 13px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(12px)",
          }}
        >
          OUR PROCESS
        </p>

        <h2
          className="mt-2.5 font-anton uppercase leading-[0.98] tracking-[-0.015em] text-[var(--black)] transition-all duration-700"
          style={{
            fontSize: "clamp(28px, 3.1vw, 54px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(16px)",
            transitionDelay: "80ms",
          }}
        >
          SIMPLE PROCESS. SERIOUS RESULTS.
        </h2>

        <ol className="mt-[clamp(30px,2.8vw,52px)] grid grid-cols-1 gap-y-0 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-7">
          {processSteps.map((step, i) => {
            const isLast = i === processSteps.length - 1;
            const dotDelay = 200 + i * 150;
            const lineDelay = dotDelay + 160;
            const textDelay = dotDelay + 90;

            return (
              <li
                key={step.number}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="group relative flex min-w-0 gap-5 pb-10 last:pb-0 sm:block sm:gap-0 sm:pb-0"
              >
                {/* Mobile only: the rail joining this circle to the next one. */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-[27px] top-16 w-[2px] rounded-full sm:hidden"
                    style={{
                      background: i < active ? "var(--orange)" : "#E6E6E2",
                      transition: "background 450ms ease",
                    }}
                  />
                )}

                {/* icon + connector share a row so the dashes meet the circles */}
                <div className="relative flex h-14 shrink-0 items-center">
                  <span
                    aria-hidden="true"
                    className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--orange)] text-white transition-[transform,box-shadow] duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_24px_-10px_rgba(255,79,23,0.8)]"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView
                        ? isMobile && i === active
                          ? "scale(1.12)"
                          : "scale(1)"
                        : "scale(0.55)",
                      boxShadow:
                        isMobile && i === active
                          ? "0 12px 30px -8px rgba(255,79,23,0.85)"
                          : "none",
                      transition: `opacity 520ms ${EASE} ${dotDelay}ms, transform 420ms ${EASE}, box-shadow 420ms ease`,
                    }}
                  >
                    {step.icon}
                  </span>

                  {/* dashed run to the next step — on the last one it ends in an arrow */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-[68px] top-1/2 hidden h-[2px] -translate-y-1/2 sm:block ${
                      isLast ? "right-8" : "right-0 lg:-right-7"
                    }`}
                    style={{
                      backgroundImage: DASH,
                      transformOrigin: "left center",
                      transform: inView ? "scaleX(1)" : "scaleX(0)",
                      transition: `transform 620ms ${EASE} ${lineDelay}ms`,
                    }}
                  />

                  {isLast && (
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute right-0 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[var(--orange)] sm:block"
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(-50%)" : "translate(-8px, -50%)",
                        transition: `opacity 400ms ease ${lineDelay + 420}ms, transform 400ms ${EASE} ${
                          lineDelay + 420
                        }ms`,
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(14px)",
                    transition: `opacity 620ms ${EASE} ${textDelay}ms, transform 620ms ${EASE} ${textDelay}ms`,
                  }}
                >
                  <h3 className="mt-3 flex items-baseline gap-2.5 sm:mt-5">
                    <span
                      className="font-anton leading-none text-[var(--orange)]"
                      style={{ fontSize: "clamp(19px, 1.1vw, 19px)" }}
                    >
                      {step.number}
                    </span>
                    <span
                      className="font-anton uppercase leading-none tracking-[-0.01em] transition-colors duration-300"
                      style={{
                        fontSize: "clamp(19px, 1.1vw, 19px)",
                        color: isMobile && i === active ? "var(--orange)" : "var(--black)",
                      }}
                    >
                      {step.title}
                    </span>
                  </h3>

                  <p
                    className="mt-2.5 max-w-[34ch] leading-[1.55] text-[var(--grey-600)] sm:max-w-[30ch]"
                    style={{ fontSize: "clamp(14.5px, 0.92vw, 15px)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
