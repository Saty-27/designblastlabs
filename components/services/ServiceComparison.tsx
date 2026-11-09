"use client";

import React from "react";
import { Check, X } from "lucide-react";

export interface ComparisonPoint {
  feature: string;
  dblApproach: string;
  othersApproach: string;
}

export interface ServiceComparisonProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  points: ComparisonPoint[];
}

export default function ServiceComparison({
  eyebrow = "WHY CHOOSE DESIGN BLAST LABS",
  title = "THE DIFFERENCE IN EXECUTION.",
  subtitle = "How our approach contrasts with standard agency practices, outsourced templates and unguided freelancers.",
  points,
}: ServiceComparisonProps) {
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

        {/* Comparison Table */}
        <div className="mt-[clamp(32px,3vw,56px)] overflow-x-auto pb-4">
          <div className="min-w-[700px] overflow-hidden rounded-[18px] border border-[var(--grey-200)] bg-white shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-[1.2fr_1.5fr_1.3fr] border-b border-[var(--grey-200)] bg-[#0C0E14] px-6 py-4 text-white">
              <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-neutral-400">
                Evaluation Factor
              </span>
              <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--orange)]">
                ★ Design Blast Labs
              </span>
              <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-neutral-400">
                Typical Agencies / Templates
              </span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-[var(--grey-200)]">
              {points.map((pt, i) => (
                <div
                  key={pt.feature}
                  className={`grid grid-cols-[1.2fr_1.5fr_1.3fr] items-center px-6 py-4.5 transition-colors ${
                    i % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"
                  } hover:bg-orange-50/20`}
                >
                  <span className="text-[14px] font-bold text-[var(--black)]">
                    {pt.feature}
                  </span>

                  <div className="flex items-start gap-2.5 pr-4">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[var(--orange)] text-white">
                      <Check strokeWidth={3} className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-[13.5px] font-medium leading-[1.5] text-[var(--black)]">
                      {pt.dblApproach}
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-[var(--grey-600)]">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-neutral-200 text-neutral-500">
                      <X strokeWidth={2.5} className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-[13px] leading-[1.5]">
                      {pt.othersApproach}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
