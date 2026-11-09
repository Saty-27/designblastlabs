"use client";

import React, { useState } from "react";
import { ArrowUpRight, ImageIcon } from "lucide-react";

export type CardTheme = "light" | "dark" | "accent";

export interface ImpactCard {
  /** Also the asset filename: /cards/{id}.webp */
  id: string;
  category: string;
  /** One entry per rendered line — the breaks are intentional. */
  title: string[];
  /** Line (0-based) that carries the orange highlight; omit for none. */
  highlightLine?: number;
  description: string;
  /** null renders the asset slot. Set to "/cards/{id}.webp" once the file exists. */
  image: string | null;
  imageAlt: string;
  /** "contain" preserves a composed asset; "cover" fills. Default "cover". */
  imageFit?: "cover" | "contain";
  theme: CardTheme;
  href: string;
}

const themeShell: Record<CardTheme, string> = {
  light: "bg-white border border-neutral-200/90 text-blast-black",
  dark: "bg-blast-black border border-blast-black text-white",
  accent: "bg-blast-orange border border-blast-orange text-blast-black",
};

const themeCategory: Record<CardTheme, string> = {
  light: "text-neutral-500",
  dark: "text-white/60",
  accent: "text-blast-black/70",
};

const themeBody: Record<CardTheme, string> = {
  light: "text-neutral-600",
  dark: "text-white/65",
  accent: "text-blast-black/75",
};

const themeArrow: Record<CardTheme, string> = {
  light: "bg-blast-black text-white group-hover:bg-blast-orange",
  dark: "bg-white text-blast-black group-hover:bg-blast-orange group-hover:text-white",
  accent: "bg-blast-black text-white group-hover:bg-white group-hover:text-blast-black",
};

const themeSlot: Record<CardTheme, string> = {
  light: "bg-[#F4F5F7] text-neutral-400",
  dark: "bg-white/[0.06] text-white/40",
  accent: "bg-white/20 text-blast-black/50",
};

export default function ServiceImpactCard({ card }: { card: ImpactCard }) {
  // The accent card stays solid black — orange on orange would vanish.
  const canHighlight = card.theme !== "accent";
  // Falls back to the asset slot if the file isn't in /public/cards yet,
  // so paths can be wired ahead of the artwork landing.
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(card.image) && !imageFailed;

  // The error event can fire before React hydrates and attaches onError, so
  // also check the already-settled state when the node is handed to us.
  const checkSettled = (el: HTMLImageElement | null) => {
    if (el && el.complete && el.naturalWidth === 0) setImageFailed(true);
  };

  return (
    <a
      href={card.href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] p-7 transition-[transform,box-shadow] duration-[380ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-[5px] hover:shadow-[0_26px_50px_-24px_rgba(14,16,24,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blast-orange focus-visible:ring-offset-2 ${themeShell[card.theme]}`}
    >
      {/* Category + arrow */}
      <div className="flex items-start justify-between gap-4">
        <span
          className={`font-sans font-semibold uppercase tracking-[0.16em] ${themeCategory[card.theme]}`}
          style={{ fontSize: "clamp(10px, 0.72vw, 12px)" }}
        >
          {card.category}
        </span>
        <span
          aria-hidden="true"
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-[background-color,color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${themeArrow[card.theme]}`}
        >
          <ArrowUpRight className="h-[18px] w-[18px]" />
        </span>
      </div>

      {/* Headline */}
      <h3
        className="mt-5 font-barlow font-black uppercase leading-[0.92] tracking-[-0.01em]"
        style={{ fontSize: "clamp(28px, 2.6vw, 40px)" }}
      >
        {card.title.map((line, i) => (
          <span
            key={line}
            className={`block ${canHighlight && card.highlightLine === i ? "text-blast-orange" : ""}`}
          >
            {line}
          </span>
        ))}
      </h3>

      {/* Supporting copy */}
      <p
        className={`mt-3.5 mb-6 font-sans font-medium leading-relaxed ${themeBody[card.theme]}`}
        style={{ fontSize: "clamp(12.5px, 0.88vw, 14px)" }}
      >
        {card.description}
      </p>

      {/* Visual — flexes so every card ends at the same height */}
      <div className="relative -mx-7 -mb-7 mt-auto aspect-[3/2] overflow-hidden">
        {showImage ? (
          <img
            src={card.image as string}
            ref={checkSettled}
            onError={() => setImageFailed(true)}
            alt={card.imageAlt}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-center transition-transform duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.03] ${
              card.imageFit === "contain" ? "object-contain" : "object-cover"
            }`}
          />
        ) : (
          <div
            className={`absolute inset-0 grid place-items-center ${themeSlot[card.theme]}`}
          >
            <div className="px-4 text-center">
              <ImageIcon className="mx-auto h-5 w-5" />
              <div className="mt-2 font-mono text-[10px] tracking-[0.12em]">
                /cards/{card.id}.webp
              </div>
            </div>
          </div>
        )}
      </div>
    </a>
  );
}
