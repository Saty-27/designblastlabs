"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import HeroProof from "./HeroProof";
import { useContactModal } from "./ContactModalProvider";

export const heroContent = {
  /** One entry per rendered line — the breaks are intentional. */
  title: ["WE BUILD", "WHAT MAKES", "YOUR BUSINESS"],
  highlight: "GROW.",
  description:
    "Websites and apps that convert, social media that gets seen, SEO and AEO that keep you ranking, and AI automation that saves your team hours.",
  primaryCta: { label: "BOOK A FREE CALL", href: "#booking" },
  secondaryCta: { label: "SEE OUR WORK", href: "#work" },
  image: "/assets/hero/hero-main.webp",
  imageAlt:
    "Website, mobile social feed and AI automation dashboard built by Design Blast Labs",
};

export default function Hero() {
  const { open: openContact } = useContactModal();
  // TEMPORARY HERO ASSET — REPLACE WITH /assets/hero/hero-main.webp
  // The grey block below only shows while that file is missing.
  const [imageFailed, setImageFailed] = useState(false);
  const checkSettled = (el: HTMLImageElement | null) => {
    if (el && el.complete && el.naturalWidth === 0) setImageFailed(true);
  };

  // Desktop-only pointer parallax, capped at ±6px / ±4px.
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = sectionRef.current;
    if (!fine || calm || !section) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = section.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translate3d(${(dx * 6).toFixed(2)}px, ${(dy * 4).toFixed(2)}px, 0)`;
        }
      });
    };
    const onLeave = () => {
      if (parallaxRef.current) parallaxRef.current.style.transform = "translate3d(0,0,0)";
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-white">
      <div className="site-container pb-[clamp(40px,3.6vw,64px)] pt-[clamp(32px,3vw,56px)]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[55fr_45fr] md:items-center md:gap-x-8 md:gap-y-0 lg:grid-cols-[38fr_62fr]">
          {/* Headline — on mobile this sits above the image, so it is its own
              grid item rather than part of the left column. */}
          <div className="min-w-0 md:col-start-1 md:row-start-1">
            <h1
              className="hero-rise font-anton uppercase leading-[0.90] tracking-[-0.015em] text-[var(--black)]"
              style={{ animationDelay: "0ms", fontSize: "clamp(48px, 5.9vw, 124px)" }}
            >
              {heroContent.title.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
              <span className="block whitespace-nowrap text-[var(--orange)]">
                {heroContent.highlight}
              </span>
            </h1>
          </div>

          {/* Right — supplied composition; the floating UI lives inside the asset */}
          <div className="relative min-w-0 md:col-start-2 md:row-span-2 md:row-start-1 md:self-center lg:-mr-[clamp(20px,2.5vw,52px)] lg:-mt-[clamp(32px,3vw,56px)] lg:self-start">
            <div
              ref={parallaxRef}
              className="transition-transform duration-500 ease-out will-change-transform lg:-ml-[3%] lg:w-[103%]"
            >
              <div className="hero-float">
                {imageFailed ? (
                  <div
                    className="grid aspect-[3/2] w-full place-items-center rounded-[10px] bg-[var(--grey-100)]"
                    role="img"
                    aria-label="Hero visual placeholder"
                  >
                    <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--grey-400)]">
                      /assets/hero/hero-main.webp
                    </span>
                  </div>
                ) : (
                  <img
                    src={heroContent.image}
                    alt={heroContent.imageAlt}
                    ref={checkSettled}
                    onError={() => setImageFailed(true)}
                    className="hero-image-in h-auto w-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Supporting copy, buttons and proof — below the image on mobile. */}
          <div className="min-w-0 md:col-start-1 md:row-start-2">

            <p
              className="hero-rise max-w-[34ch] leading-[1.55] text-[var(--grey-600)] md:mt-8"
              style={{ animationDelay: "90ms", fontSize: "clamp(15px, 1vw, 21px)" }}
            >
              {heroContent.description}
            </p>

            <div
              className="hero-rise mt-8 flex flex-wrap items-center gap-3.5"
              style={{ animationDelay: "170ms" }}
            >
              <a
                href={heroContent.primaryCta.href}
                onClick={(e) => {
                  e.preventDefault();
                  openContact();
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--orange)] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5420F] hover:shadow-[0_12px_28px_-10px_rgba(255,79,23,0.75)]"
                style={{
                  height: "clamp(48px, 2.8vw, 62px)",
                  paddingInline: "clamp(30px, 2vw, 44px)",
                  fontSize: "clamp(11px, 0.72vw, 14px)",
                }}
              >
                {heroContent.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center rounded-full border border-[var(--black)] bg-white font-semibold uppercase tracking-[0.1em] text-[var(--black)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--black)] hover:text-white"
                style={{
                  height: "clamp(48px, 2.8vw, 62px)",
                  paddingInline: "clamp(30px, 2vw, 44px)",
                  fontSize: "clamp(11px, 0.72vw, 14px)",
                }}
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>

            <div className="hero-rise mt-11" style={{ animationDelay: "250ms" }}>
              <HeroProof />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
