"use client";

import React from "react";

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  timeline?: string;
}

export interface ServiceProcessProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps: ProcessStepItem[];
}

export default function ServiceProcess({
  eyebrow = "OUR METHODOLOGY",
  title = "STRUCTURED DELIVERY. NO SURPRISES.",
  subtitle = "From first brief to post-launch optimization, every stage has clear deliverables and verified checkpoints.",
  steps,
}: ServiceProcessProps) {
  return (
    <section className="w-full bg-[#0C0E14] text-white py-[clamp(48px,4.5vw,84px)] border-b border-neutral-900">
      <div className="site-container">
        <div className="max-w-[760px]">
          <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
            {eyebrow}
          </span>
          <h2
            className="mt-2.5 font-anton uppercase leading-[0.96] tracking-[-0.015em] text-white"
            style={{ fontSize: "clamp(28px, 3.2vw, 54px)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-4 leading-[1.65] text-neutral-400"
              style={{ fontSize: "clamp(14px, 1.05vw, 18px)" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Steps Grid */}
        <div className="mt-[clamp(36px,3.2vw,60px)] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between rounded-[18px] border border-neutral-800 bg-[#12151D] p-6 transition-all duration-300 hover:border-[var(--orange)]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="font-anton text-[28px] leading-none text-[var(--orange)]">
                    {step.number}
                  </span>
                  {step.timeline && (
                    <span className="rounded-full bg-neutral-800/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-neutral-300">
                      {step.timeline}
                    </span>
                  )}
                </div>

                <h3
                  className="mt-5 font-anton text-[20px] uppercase tracking-tight text-white"
                >
                  {step.title}
                </h3>

                <p className="mt-3 text-[13.5px] leading-[1.65] text-neutral-400">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 font-mono text-[11px] font-semibold text-[var(--orange)] uppercase tracking-wider">
                <span>Phase {i + 1}</span>
                <span className="h-px flex-1 bg-neutral-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
