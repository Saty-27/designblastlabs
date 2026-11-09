"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { Plus } from "lucide-react";

export interface FaqItem {
  question: string;
  /** Draft wording — these state commitments, so review before publishing. */
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "How long does a website project take?",
    answer:
      "Most websites go live in three to five weeks. The timeline depends on the number of pages, how ready your content is, and how quickly feedback comes back at each review.",
  },
  {
    question: "Do you also handle domain and hosting?",
    answer:
      "Yes. We can register your domain, set up hosting and handle deployment — or work with whatever you already have in place.",
  },
  {
    question: "Can you manage our social media as well?",
    answer:
      "Yes. We cover strategy, content production, posting and monthly reporting. It can run on its own or alongside your website and ads.",
  },
  {
    question: "Do you build custom AI automation for businesses?",
    answer:
      "Yes. We build custom AI agents and automated workflows for lead qualification, customer support and the repetitive internal tasks that slow your team down.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across manufacturing, D2C and e-commerce, education, local services, NGOs and B2B. The approach changes by industry, but the focus on measurable outcomes does not.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free 20-minute call. We will go through your goals, suggest an approach, and follow up with a clear scope and quote — no obligation either way.",
  },
];

function useInView<T extends HTMLElement>(threshold = 0.15) {
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

export default function Faq() {
  const { ref, inView } = useInView<HTMLElement>();
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section
      ref={ref}
      id="faq"
      aria-label="Frequently asked questions"
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
          FAQ
        </p>

        <h2
          className="mt-2.5 font-anton uppercase leading-[0.98] tracking-[-0.015em] text-[var(--black)] transition-all duration-700"
          style={{
            fontSize: "clamp(28px, 3.3vw, 56px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(16px)",
            transitionDelay: "80ms",
          }}
        >
          FREQUENTLY ASKED QUESTIONS.
        </h2>

        <ul className="mt-[clamp(24px,2.2vw,40px)] space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const btnId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;
            const delay = 180 + i * 70;

            return (
              <li
                key={item.question}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(14px)",
                  transition: `opacity 560ms ${EASE} ${delay}ms, transform 560ms ${EASE} ${delay}ms`,
                }}
              >
                <div
                  className={`overflow-hidden rounded-[12px] border bg-white transition-colors duration-300 ${
                    isOpen ? "border-[var(--orange)]" : "border-[#E6E6E2] hover:border-[rgba(14,16,24,0.35)]"
                  }`}
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--orange)]"
                    >
                      <span
                        className="font-medium text-[var(--black)]"
                        style={{ fontSize: "clamp(14px, 1vw, 16px)" }}
                      >
                        {item.question}
                      </span>
                      <Plus
                        aria-hidden="true"
                        strokeWidth={2.2}
                        className={`h-5 w-5 shrink-0 transition-[transform,color] duration-300 ${
                          isOpen ? "rotate-45 text-[var(--orange)]" : "text-[var(--black)]"
                        }`}
                      />
                    </button>
                  </h3>

                  {/* 0fr → 1fr animates to the answer's natural height */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="grid transition-[grid-template-rows] duration-[380ms]"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transitionTimingFunction: "cubic-bezier(0.22,0.61,0.36,1)",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="px-6 pb-5 leading-[1.65] text-[var(--grey-600)]"
                        style={{ fontSize: "clamp(13.5px, 0.95vw, 15px)" }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
