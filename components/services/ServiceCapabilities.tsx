"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";

export interface CapabilityItem {
  eyebrow?: string;
  title: string;
  description: string;
  deliverables?: string[];
  theme?: "light" | "dark" | "accent";
}

export interface ServiceCapabilitiesProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: CapabilityItem[];
}

export default function ServiceCapabilities({
  eyebrow = "CORE CAPABILITIES",
  title,
  subtitle,
  items,
}: ServiceCapabilitiesProps) {
  return (
    <section className="w-full bg-[#FAFAFA] py-[clamp(48px,4.5vw,84px)] border-b border-[var(--grey-200)]">
      <div className="site-container">
        {/* Section Header */}
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

        {/* Capabilities Grid */}
        <div className="mt-[clamp(32px,3vw,56px)] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const isDark = item.theme === "dark";
            const isAccent = item.theme === "accent";

            return (
              <div
                key={item.title}
                className={`group relative flex flex-col justify-between rounded-[18px] border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isDark
                    ? "border-neutral-800 bg-[var(--black)] text-white hover:border-neutral-700"
                    : isAccent
                    ? "border-[var(--orange)] bg-[var(--orange)] text-white"
                    : "border-[var(--grey-200)] bg-white text-[var(--black)] hover:border-[var(--black)]"
                }`}
              >
                <div>
                  {item.eyebrow && (
                    <span
                      className={`block font-mono text-[10.5px] font-bold uppercase tracking-widest ${
                        isDark ? "text-[var(--orange)]" : isAccent ? "text-white/80" : "text-[var(--orange)]"
                      }`}
                    >
                      {item.eyebrow}
                    </span>
                  )}

                  <h3
                    className={`mt-2 font-anton uppercase leading-[1.05] tracking-tight ${
                      isDark || isAccent ? "text-white" : "text-[var(--black)]"
                    }`}
                    style={{ fontSize: "clamp(18px, 1.4vw, 24px)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3.5 text-[14px] leading-[1.6] ${
                      isDark ? "text-neutral-300" : isAccent ? "text-white/90" : "text-[var(--grey-600)]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {item.deliverables && item.deliverables.length > 0 && (
                  <div
                    className={`mt-6 border-t pt-5 ${
                      isDark
                        ? "border-neutral-800"
                        : isAccent
                        ? "border-white/20"
                        : "border-[var(--grey-200)]"
                    }`}
                  >
                    <ul className="space-y-2.5">
                      {item.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-start gap-2.5 text-[13px]">
                          <span
                            className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                              isDark
                                ? "bg-[var(--orange)] text-white"
                                : isAccent
                                ? "bg-white text-[var(--orange)]"
                                : "bg-[var(--orange)] text-white"
                            }`}
                          >
                            <Check strokeWidth={3} className="h-2.5 w-2.5" />
                          </span>
                          <span
                            className={`leading-[1.4] ${
                              isDark ? "text-neutral-200" : isAccent ? "text-white" : "text-[var(--black)] font-medium"
                            }`}
                          >
                            {deliv}
                          </span>
                        </li>
                      ))}
                    </ul>
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
