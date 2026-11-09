"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceFaqProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
}

export default function ServiceFaq({
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  title = "COMMON QUESTIONS & DIRECT ANSWERS.",
  subtitle = "Everything you need to know about timelines, deliverables, technology, revisions and commercial arrangements.",
  faqs,
}: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-white py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
      <div className="site-container">
        <div className="max-w-[760px]">
          <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
            {eyebrow}
          </span>
          <h2
            className="mt-2.5 font-anton uppercase leading-[0.96] tracking-[-0.015em] text-[var(--black)]"
            style={{ fontSize: "clamp(28px, 3.2vw, 54px)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-4 leading-[1.65] text-[var(--grey-600)]"
              style={{ fontSize: "clamp(14px, 1.05vw, 18px)" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion */}
        <div className="mt-[clamp(32px,3vw,56px)] max-w-[900px] space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[16px] border transition-all duration-300 ${
                  isOpen
                    ? "border-[var(--black)] bg-white shadow-md"
                    : "border-[var(--grey-200)] bg-[#FAFAFA] hover:border-[var(--grey-400)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span className="font-anton text-[18px] sm:text-[20px] uppercase tracking-tight text-[var(--black)] leading-[1.25]">
                    {faq.question}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "bg-[var(--orange)] text-white rotate-45"
                        : "bg-[var(--grey-200)] text-[var(--black)]"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-[14.5px] leading-[1.7] text-[var(--grey-600)] border-t border-[var(--grey-200)]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
