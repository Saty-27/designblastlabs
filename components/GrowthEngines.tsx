"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import GrowthEngineCard, { GrowthEngine } from "./GrowthEngineCard";

export const growthEngines: GrowthEngine[] = [
  {
    id: "website-development",
    label: "WEBSITE DEVELOPMENT",
    title: ["WEBSITES THAT", "GROW REVENUE", "5X."],
    highlightLine: 2,
    description: "Fast, custom-built websites designed to turn visitors into customers.",
    image: "/assets/services/website-development.webp",
    imageAlt: "Industrial packaging website with conversion analytics",
    theme: "light",
    href: "/website-development",
  },
  {
    id: "social-media-marketing",
    label: "SOCIAL MEDIA MARKETING",
    title: ["1 CRORE+", "VIEWS FOR", "OUR CLIENTS."],
    highlightLine: 0,
    description: "Content that gets attention, builds reach and helps brands grow.",
    image: "/assets/services/social-media-marketing.webp",
    imageAlt: "Reels content production with social growth metrics",
    theme: "dark",
    href: "/social-media-management",
  },
  {
    id: "ai-agents",
    label: "AI AGENTS & AUTOMATION",
    title: ["AI AGENTS", "THAT MAKE", "YOUR TEAM", "70% FASTER."],
    description: "Custom AI agents and workflows that automate repetitive business tasks.",
    image: "/assets/services/ai-agents.webp",
    imageAlt: "AI automation dashboard qualifying and routing leads",
    theme: "accent",
    href: "/ai-automation",
  },
  {
    id: "app-development",
    label: "APP DEVELOPMENT",
    title: ["APPS THAT HELP", "YOUR BUSINESS", "SCALE."],
    highlightLine: 2,
    description: "Mobile and web applications built around the way your business works.",
    image: "/assets/services/app-development.webp",
    imageAlt: "Business mobile app screens for bookings and analytics",
    theme: "light",
    href: "/app-development",
  },
  {
    id: "web-and-search",
    label: "WEB & SEARCH",
    title: ["GET FOUND.", "GET CHOSEN."],
    highlightLine: 1,
    description:
      "Websites built to convert, SEO and AEO strategies that help your brand rank and get discovered.",
    pills: ["Website Development", "SEO", "AEO"],
    image: "/assets/services/web-and-search.webp",
    imageAlt: "Website analytics showing organic traffic and keyword ranking gains",
    theme: "light",
    href: "/seo",
  },
  {
    id: "content-and-video",
    label: "CONTENT & VIDEO",
    title: ["MAKE THEM", "WATCH."],
    highlightLine: 1,
    description:
      "Professional video shooting, cinematic production, reels and high-quality video editing.",
    pills: ["Video Shooting", "Video Editing"],
    image: "/assets/services/content-and-video.webp",
    imageAlt: "Video production set with camera rig and an edit timeline",
    theme: "dark",
    href: "/video-marketing",
  },
  {
    id: "brand-identity",
    label: "BRAND IDENTITY",
    title: ["LOOK", "UNFORGETTABLE."],
    description:
      "Distinctive branding, logo design and graphic design that make your business instantly recognizable.",
    pills: ["Branding Design", "Logo Design", "Graphic Design"],
    image: "/assets/services/brand-identity.webp",
    imageAlt: "Design Blast Labs branded stationery, cards and packaging",
    theme: "accent",
    href: "/services",
  },
  {
    id: "paid-growth",
    label: "PAID GROWTH",
    title: ["TURN CLICKS INTO", "CUSTOMERS."],
    highlightLine: 1,
    description:
      "Performance-driven Meta Ads and Google Ads campaigns focused on qualified leads and measurable growth.",
    pills: ["Meta Ads", "Google Ads"],
    image: "/assets/services/paid-growth.webp",
    imageAlt: "Meta Ads and Google Ads campaign dashboards on two phones",
    theme: "light",
    href: "/google-ads",
  },
];

export default function GrowthEngines() {
  const trackRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.5), behavior: "smooth" });
  };

  return (
    <section
      id="what-we-do"
      aria-label="What we do"
      className="w-full bg-white py-[clamp(44px,3.8vw,76px)]"
    >
      <div className="site-container">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p
              className="font-bold uppercase tracking-[0.2em] text-[var(--orange)]"
              style={{ fontSize: "clamp(10px, 0.72vw, 13px)" }}
            >
              WHAT WE DO
            </p>
            <h2
              className="mt-3 font-anton uppercase leading-[0.9] tracking-[-0.015em] text-[var(--black)]"
              style={{ fontSize: "clamp(32px, 3.6vw, 62px)" }}
            >
              <span className="block">EIGHT GROWTH ENGINES</span>
              <span className="block">FOR YOUR BUSINESS.</span>
            </h2>
          </div>

          <div className="hidden shrink-0 items-center gap-2.5 sm:flex">
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Previous services"
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--grey-200)] bg-white text-[var(--black)] transition-colors hover:border-[var(--black)] md:hidden"
            >
              <ArrowLeft className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="Next services"
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--grey-200)] bg-white text-[var(--black)] transition-colors hover:border-[var(--black)] md:hidden"
            >
              <ArrowRight className="h-[18px] w-[18px]" />
            </button>
            <a
              href="/services"
              aria-label="See all services"
              className="grid h-11 w-11 place-items-center rounded-full bg-[var(--orange)] text-white transition-colors hover:bg-[#E5420F]"
            >
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        {/* <xl: swipe carousel with a peek of the next card. xl: all four in one row. */}
        <div
          ref={trackRef}
          className="mt-[clamp(24px,2.4vw,38px)] -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 md:mx-0 md:grid md:auto-rows-fr md:grid-cols-2 md:gap-[18px] md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4"
        >
          {growthEngines.map((engine) => (
            <div
              key={engine.id}
              className="w-[84vw] shrink-0 snap-start sm:w-[58vw] md:w-auto md:shrink"
            >
              <GrowthEngineCard engine={engine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
