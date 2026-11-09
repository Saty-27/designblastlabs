"use client";

import React, { useCallback, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export type EngineTheme = "light" | "dark" | "accent";

export interface GrowthEngine {
  id: string;
  label: string;
  /** One entry per rendered line — the breaks are intentional. */
  title: string[];
  /** 0-based index of the line carrying the orange highlight. */
  highlightLine?: number;
  description: string;
  /** Sub-services listed as pills under the description. */
  pills?: string[];
  /** null renders a branded panel instead — used until artwork lands. */
  image: string | null;
  imageAlt: string;
  theme: EngineTheme;
  href: string;
}

const shell: Record<EngineTheme, string> = {
  light: "bg-white border border-[var(--grey-200)] text-[var(--black)]",
  dark: "bg-[var(--black)] border border-[var(--black)] text-white",
  accent: "bg-[var(--orange)] border border-[var(--orange)] text-[var(--black)]",
};

const labelTone: Record<EngineTheme, string> = {
  light: "text-[var(--grey-600)]",
  dark: "text-white/55",
  accent: "text-[rgba(14,16,24,0.65)]",
};

const bodyTone: Record<EngineTheme, string> = {
  light: "text-[var(--grey-600)]",
  dark: "text-white/60",
  accent: "text-[rgba(14,16,24,0.75)]",
};

const arrowTone: Record<EngineTheme, string> = {
  light: "bg-[var(--black)] text-white",
  dark: "bg-white text-[var(--black)]",
  accent: "bg-[var(--black)] text-white",
};

const pillTone: Record<EngineTheme, string> = {
  light: "border-[var(--grey-200)] bg-white text-[var(--black)]",
  dark: "border-white/20 bg-white/[0.06] text-white",
  accent: "border-[rgba(14,16,24,0.25)] bg-[rgba(255,255,255,0.18)] text-[var(--black)]",
};

/** Shown until the real artwork is dropped in. */
const placeholderTone: Record<EngineTheme, string> = {
  light: "bg-[var(--black)]",
  dark: "bg-[#15171E]",
  accent: "bg-[rgba(14,16,24,0.92)]",
};

/** Orange on an orange card would vanish, so that one stays solid black. */
const canHighlight = (t: EngineTheme) => t !== "accent";

export default function GrowthEngineCard({ engine }: { engine: GrowthEngine }) {
  // Artwork is dropped in separately; until a file exists we show the branded
  // panel rather than a broken image.
  const [artworkLoaded, setArtworkLoaded] = useState(false);

  /**
   * An image cached by the browser can finish decoding before React attaches
   * onLoad, so the event never fires. Checking `complete` on the node as it
   * mounts covers that case; onLoad covers the slow path.
   */
  const measure = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete && node.naturalWidth > 0) setArtworkLoaded(true);
  }, []);

  return (
    <a
      href={engine.href}
      className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[22px] transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-[5px] hover:shadow-[0_26px_52px_-24px_rgba(14,16,24,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2 ${shell[engine.theme]}`}
    >
      <div className="flex items-start justify-between gap-3 px-6 pt-6">
        <span
          className={`font-semibold uppercase tracking-[0.14em] ${labelTone[engine.theme]}`}
          style={{ fontSize: "clamp(10px, 0.65vw, 12px)" }}
        >
          {engine.label}
        </span>
        <span
          aria-hidden="true"
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform duration-[450ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${arrowTone[engine.theme]}`}
        >
          <ArrowUpRight className="h-[17px] w-[17px]" />
        </span>
      </div>

      <h3
        className="mt-4 px-6 font-anton uppercase leading-[1.04] tracking-[-0.01em]"
        style={{ fontSize: "clamp(24px, 1.95vw, 33px)" }}
      >
        {engine.title.map((line, i) => (
          <span
            key={line}
            className={`block ${
              canHighlight(engine.theme) && engine.highlightLine === i
                ? "text-[var(--orange)]"
                : ""
            }`}
          >
            {line}
          </span>
        ))}
      </h3>

      <p
        className={`mt-3 px-6 font-medium leading-[1.4] ${bodyTone[engine.theme]}`}
        style={{ fontSize: "clamp(12.5px, 0.88vw, 14px)" }}
      >
        {engine.description}
      </p>

      {engine.pills && engine.pills.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2 px-6">
          {engine.pills.map((pill) => (
            <li
              key={pill}
              className={`rounded-full border px-3 py-1.5 text-[11.5px] font-semibold ${pillTone[engine.theme]}`}
            >
              {pill}
            </li>
          ))}
        </ul>
      )}

      {/* Visual sits flush to the bottom edge; 16:10 matches the assets exactly */}
      <div className="relative mt-auto w-full overflow-hidden pt-5">
        {/* The branded panel is the base layer. Artwork fades in over it only
            once it has actually decoded, so a missing file degrades to the
            panel instead of a broken image — including before hydration, which
            an onError handler alone cannot catch. */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <span
            aria-hidden="true"
            className={`absolute inset-0 grid place-items-center overflow-hidden ${placeholderTone[engine.theme]}`}
          >
            <span
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at 20% 0%, rgba(255,79,23,0.42), transparent 62%), radial-gradient(90% 80% at 100% 100%, rgba(255,79,23,0.22), transparent 60%)",
              }}
            />
            <span
              className="pointer-events-none absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />
            <span
              className="relative text-center font-anton uppercase leading-[1.1] tracking-[0.06em] text-white"
              style={{ fontSize: "clamp(14px, 1.15vw, 19px)" }}
            >
              {engine.label}
            </span>
          </span>

          {engine.image && (
            <img
              ref={measure}
              src={engine.image}
              alt={engine.imageAlt}
              loading="lazy"
              decoding="async"
              onLoad={() => setArtworkLoaded(true)}
              onError={() => setArtworkLoaded(false)}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-[opacity,transform] duration-[500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:-translate-y-1 group-hover:scale-[1.04] ${
                artworkLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>

        <span
          aria-hidden="true"
          className={`absolute bottom-5 left-6 grid h-10 w-10 place-items-center rounded-full shadow-[0_6px_18px_-6px_rgba(14,16,24,0.4)] transition-transform duration-[450ms] group-hover:translate-x-0.5 ${arrowTone[engine.theme]}`}
        >
          <ArrowRight className="h-[18px] w-[18px]" />
        </span>
      </div>
    </a>
  );
}
