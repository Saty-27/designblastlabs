"use client";

import React from "react";
import { brandIcons } from "@/data/brandIcons";
import {
  Database,
  Bot,
  Camera,
  Film,
  Sparkles,
  Mic,
  Sun,
  Sliders,
  Smartphone,
  Users,
  MessageSquare,
  Headphones,
  Flame,
  Rocket,
  Code2,
} from "lucide-react";

export interface TechItem {
  name: string;
  category: string;
  note?: string;
}

export interface ServiceTechStackProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tools: TechItem[];
}

function renderToolIcon(name: string, category: string): React.ReactNode {
  const lower = name.toLowerCase();
  const catLower = category.toLowerCase();

  // 1. Direct SimpleIcons brand matches
  if (lower.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.nextdotjs.path} />
      </svg>
    );
  }
  if (lower.includes("react")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.react.path} />
      </svg>
    );
  }
  if (lower.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.tailwindcss.path} />
      </svg>
    );
  }
  if (lower.includes("shopify")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.shopify.path} />
      </svg>
    );
  }
  if (lower.includes("wordpress")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.wordpress.path} />
      </svg>
    );
  }
  if (lower.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.nodedotjs.path} />
      </svg>
    );
  }
  if (lower.includes("claude")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.claude.path} />
      </svg>
    );
  }
  if (lower.includes("gemini")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.googlegemini.path} />
      </svg>
    );
  }
  if (lower.includes("n8n")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.n8n.path} />
      </svg>
    );
  }
  if (lower.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.python.path} />
      </svg>
    );
  }
  if (lower.includes("davinci")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.davinciresolve.path} />
      </svg>
    );
  }
  if (lower.includes("whatsapp")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.whatsapp.path} />
      </svg>
    );
  }
  if (lower.includes("figma")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.figma.path} />
      </svg>
    );
  }
  if (lower.includes("instagram")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.instagram.path} />
      </svg>
    );
  }
  if (lower.includes("meta")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={brandIcons.meta.path} />
      </svg>
    );
  }

  // 2. Semantic Fallbacks
  if (lower.includes("postgres") || lower.includes("supabase") || catLower.includes("database")) {
    return <Database className="h-5 w-5" />;
  }
  if (lower.includes("gpt") || lower.includes("openai") || catLower.includes("agent") || catLower.includes("model")) {
    return <Bot className="h-5 w-5" />;
  }
  if (lower.includes("sony") || lower.includes("camera") || catLower.includes("camera") || catLower.includes("lens")) {
    return <Camera className="h-5 w-5" />;
  }
  if (lower.includes("premiere") || lower.includes("frame.io") || catLower.includes("editing") || catLower.includes("video")) {
    return <Film className="h-5 w-5" />;
  }
  if (lower.includes("after effects") || catLower.includes("motion")) {
    return <Sparkles className="h-5 w-5" />;
  }
  if (
    lower.includes("audition") ||
    lower.includes("sennheiser") ||
    lower.includes("rode") ||
    catLower.includes("audio")
  ) {
    return <Mic className="h-5 w-5" />;
  }
  if (lower.includes("aputure") || lower.includes("nanlite") || catLower.includes("lighting")) {
    return <Sun className="h-5 w-5" />;
  }
  if (lower.includes("dji") || lower.includes("gimbal") || catLower.includes("stabilization")) {
    return <Sliders className="h-5 w-5" />;
  }
  if (lower.includes("flutter") || catLower.includes("mobile")) {
    return <Smartphone className="h-5 w-5" />;
  }
  if (
    lower.includes("crm") ||
    lower.includes("hubspot") ||
    lower.includes("zoho") ||
    lower.includes("sales nav") ||
    catLower.includes("b2b")
  ) {
    return <Users className="h-5 w-5" />;
  }
  if (lower.includes("manychat") || catLower.includes("messaging")) {
    return <MessageSquare className="h-5 w-5" />;
  }
  if (lower.includes("typescript") || lower.includes("javascript") || catLower.includes("language")) {
    return <span className="font-mono text-[12px] font-bold leading-none">TS</span>;
  }
  if (lower.includes("artlist") || lower.includes("epidemic") || catLower.includes("licensing")) {
    return <Headphones className="h-5 w-5" />;
  }
  if (lower.includes("firebase")) {
    return <Flame className="h-5 w-5" />;
  }
  if (lower.includes("fastlane")) {
    return <Rocket className="h-5 w-5" />;
  }

  return <Code2 className="h-5 w-5" />;
}

export default function ServiceTechStack({
  eyebrow = "TECHNOLOGY & PLATFORMS",
  title = "BUILT WITH THE RIGHT TOOLS FOR THE JOB.",
  subtitle = "We choose reliable, high-performance tools based on real project requirements rather than agency hype.",
  tools,
}: ServiceTechStackProps) {
  // Dynamically select grid columns so there are never dangling empty slots
  const gridLayout =
    tools.length % 4 === 0
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : tools.length % 3 === 0
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <section className="w-full bg-[#FAFAFA] py-[clamp(50px,5vw,90px)] border-b border-[var(--grey-200)]">
      <div className="site-container">
        {/* Section Heading */}
        <div className="max-w-[780px]">
          <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--orange)] mb-3">
            {eyebrow}
          </p>
          <h2
            className="font-anton uppercase leading-[0.96] tracking-[-0.015em] text-[var(--black)]"
            style={{ fontSize: "clamp(28px, 3.2vw, 54px)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-4 leading-[1.65] text-[var(--grey-600)]"
              style={{ fontSize: "clamp(14.5px, 1.05vw, 18px)" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Balanced Tools Grid */}
        <div className={`mt-[clamp(32px,3.2vw,56px)] grid ${gridLayout} gap-4 sm:gap-5`}>
          {tools.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col justify-between rounded-[18px] border border-[var(--grey-200)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:shadow-[0_16px_36px_-12px_rgba(14,16,24,0.12)] overflow-hidden"
            >
              {/* Top Accent Strip on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--orange)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Row: Icon + Category Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] border border-[var(--grey-200)] bg-[#F8F9FA] text-[var(--black)] transition-all duration-300 group-hover:border-[var(--orange)] group-hover:bg-white group-hover:text-[var(--orange)] shadow-xs">
                    {renderToolIcon(t.name, t.category)}
                  </div>
                  <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[var(--orange)] bg-[rgba(255,79,23,0.08)] border border-[rgba(255,79,23,0.18)] px-2.5 py-1 rounded-[6px]">
                    {t.category}
                  </span>
                </div>

                {/* Tool Name */}
                <h3 className="mt-4 font-anton text-[22px] sm:text-[24px] uppercase tracking-tight text-[var(--black)] transition-colors duration-200 group-hover:text-[var(--orange)] leading-tight">
                  {t.name}
                </h3>
              </div>

              {/* Note / Commercial Description */}
              {t.note && (
                <p className="mt-3 text-[13px] sm:text-[13.5px] leading-[1.55] text-[var(--grey-600)]">
                  {t.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
