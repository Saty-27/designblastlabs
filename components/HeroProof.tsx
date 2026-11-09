"use client";

import React from "react";
import { TrendingUp, Play, LineChart } from "lucide-react";

export interface ProofItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

/**
 * Editable placeholder metrics — not verified company statistics.
 * Swap the values here before publishing.
 */
export const heroProof: ProofItem[] = [
  {
    value: "+200%",
    label: "Website Growth",
    icon: <TrendingUp strokeWidth={2.5} className="h-[22px] w-[22px]" />,
  },
  {
    value: "10M+",
    label: "Views / Year",
    icon: <Play strokeWidth={2.5} className="h-[21px] w-[21px]" />,
  },
  {
    value: "5X",
    label: "Revenue Increase",
    icon: <LineChart strokeWidth={2.5} className="h-[22px] w-[22px]" />,
  },
];

export default function HeroProof() {
  return (
    <ul className="grid grid-cols-3 items-stretch gap-x-3 sm:gap-x-5 xl:gap-x-6 2xl:gap-x-8">
      {heroProof.map((item, i) => (
        <li
          key={item.label}
          className={`flex h-full min-w-0 flex-col items-start gap-2.5 xl:flex-row xl:items-center xl:gap-3.5 ${
            i > 0 ? "border-l border-[#EDEDE9] pl-3 sm:pl-5 xl:border-0 xl:pl-0" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className="grid shrink-0 place-items-center rounded-full border-[1.5px] border-[rgba(255,79,23,0.3)] bg-white text-[var(--orange)]"
            style={{ height: "clamp(38px, 2.6vw, 62px)", width: "clamp(38px, 2.6vw, 62px)" }}
          >
            {item.icon}
          </span>
          <span className="flex min-w-0 flex-1 flex-col justify-start leading-none">
            <span
              className="block font-anton uppercase leading-[0.95] tracking-[-0.01em] text-[var(--black)]"
              style={{ fontSize: "clamp(22px, 1.9vw, 44px)" }}
            >
              {item.value}
            </span>
            <span
              className="mt-1.5 block min-h-[2.6em] font-medium leading-[1.3] text-[var(--grey-600)] xl:mt-2 xl:min-h-0"
              style={{ fontSize: "clamp(11px, 0.82vw, 17px)" }}
            >
              {item.label}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
