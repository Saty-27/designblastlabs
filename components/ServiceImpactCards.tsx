"use client";

import React from "react";
import ServiceImpactCard, { ImpactCard } from "./ServiceImpactCard";

/**
 * Drop the four assets into /public/cards/ then set each `image` to
 * "/cards/{id}.webp". Until then the card renders its asset slot — no
 * placeholder files, no 404s.
 */
export const impactCards: ImpactCard[] = [
  {
    id: "website-development",
    category: "WEBSITE DEVELOPMENT",
    title: ["WEBSITES THAT", "GROW REVENUE", "5X."],
    highlightLine: 2,
    description: "Fast, custom-built websites designed to turn visitors into customers.",
    image: "/cards/website-development.webp",
    imageAlt: "Industrial packaging website, analytics dashboard and mobile app built by Design Blast Labs",
    imageFit: "contain",
    theme: "light",
    href: "/website-development",
  },
  {
    id: "social-media-marketing",
    category: "SOCIAL MEDIA MARKETING",
    title: ["1 CRORE+", "VIEWS FOR", "OUR CLIENTS."],
    highlightLine: 0,
    description: "Content that gets attention, builds reach and helps brands grow.",
    image: "/cards/social-media-marketing.jpg",
    imageAlt: "Instagram reels, creator shoot and social growth metrics produced by Design Blast Labs",
    imageFit: "contain",
    theme: "dark",
    href: "/social-media-management",
  },
  {
    id: "ai-agents-automation",
    category: "AI AGENTS & AUTOMATION",
    title: ["AI AGENTS", "THAT MAKE", "YOUR TEAM", "70% FASTER."],
    description: "Custom AI agents and workflows that automate repetitive business tasks.",
    image: "/cards/ai-agents-automation.webp",
    imageAlt: "AI agent dashboard automating customer enquiries and lead qualification",
    imageFit: "contain",
    theme: "accent",
    href: "/ai-automation",
  },
  {
    id: "app-development",
    category: "APP DEVELOPMENT",
    title: ["APPS THAT HELP", "YOUR BUSINESS", "SCALE."],
    highlightLine: 2,
    description: "Mobile and web applications built around the way your business works.",
    image: "/cards/app-development.webp",
    imageAlt: "Mobile and web application screens built by Design Blast Labs",
    imageFit: "contain",
    theme: "light",
    href: "/app-development",
  },
];

export default function ServiceImpactCards() {
  return (
    <section
      aria-label="What we build"
      className="w-full bg-white px-5 pb-[clamp(36px,3.2vw,64px)] pt-[clamp(32px,3vw,60px)] sm:px-6 lg:px-10"
    >
      {/* <md: swipe carousel with a peek of the next card. md+: grid. */}
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 md:mx-0 md:grid md:auto-rows-fr md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4">
        {impactCards.map((card) => (
          <div
            key={card.id}
            className="w-[82vw] shrink-0 snap-start md:w-auto md:shrink"
            style={{ minHeight: "clamp(430px, 31vw, 500px)" }}
          >
            <ServiceImpactCard card={card} />
          </div>
        ))}
      </div>
    </section>
  );
}
