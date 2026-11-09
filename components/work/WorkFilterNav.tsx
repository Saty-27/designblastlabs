"use client";

import React, { useEffect, useRef } from "react";
import {
  Grid2X2,
  Monitor,
  Bot,
  Share2,
  Film,
  Smartphone,
} from "lucide-react";

export interface FilterItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  count: number;
}

interface WorkFilterNavProps {
  activeFilter: string;
  onSelect: (id: string) => void;
  counts?: {
    all?: number;
    websites?: number;
    "ai-automation"?: number;
    "social-media"?: number;
    "video-production"?: number;
    apps?: number;
  };
}

export default function WorkFilterNav({
  activeFilter,
  onSelect,
  counts,
}: WorkFilterNavProps) {
  const isManualScrollRef = useRef(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const webCount = counts?.websites ?? 6;
  const aiCount = counts?.["ai-automation"] ?? 4;
  const socialCount = counts?.["social-media"] ?? 4;
  const videoCount = counts?.["video-production"] ?? 4;
  const appCount = counts?.apps ?? 3;
  const allCount = counts?.all ?? (webCount + aiCount + socialCount + videoCount + appCount);

  const filters: FilterItem[] = [
    {
      id: "all",
      label: "ALL DISCIPLINES",
      icon: <Grid2X2 className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />,
      count: allCount,
    },
    {
      id: "websites",
      label: "WEB DEVELOPMENT",
      icon: <Monitor className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />,
      count: webCount,
    },
    {
      id: "ai-automation",
      label: "AI AGENTS & AUTOMATION",
      icon: <Bot className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />,
      count: aiCount,
    },
    {
      id: "social-media",
      label: "SOCIAL MEDIA GROWTH",
      icon: <Share2 className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />,
      count: socialCount,
    },
    {
      id: "video-production",
      label: "VIDEO PRODUCTION & EDITING",
      icon: <Film className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />,
      count: videoCount,
    },
    {
      id: "apps",
      label: "MOBILE & WEB APPS",
      icon: <Smartphone className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />,
      count: appCount,
    },
  ];

  // Scroll spy: synchronize active pill as user scrolls naturally through sections
  useEffect(() => {
    const sectionIds = ["websites", "ai-automation", "social-media", "video-production", "apps"];

    const handleScroll = () => {
      if (isManualScrollRef.current) return;

      const navHeight = 72;
      const filterBar = document.getElementById("portfolio-filter-bar");
      const filterHeight = filterBar?.offsetHeight || 56;
      const scrollOffset = navHeight + filterHeight + 40;

      const firstSection = document.getElementById("websites");
      if (firstSection) {
        const firstRect = firstSection.getBoundingClientRect();
        if (firstRect.top > scrollOffset + 80) {
          onSelect("all");
          return;
        }
      }

      let activeId = "all";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollOffset + 60 && rect.bottom > scrollOffset - 40) {
            activeId = id;
            break;
          }
        }
      }

      if (activeId) {
        onSelect(activeId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onSelect]);

  // Keep active pill horizontally visible within the scrollable container on smaller screens
  useEffect(() => {
    const btn = buttonRefs.current[activeFilter];
    const container = scrollContainerRef.current;
    if (btn && container) {
      const btnRect = btn.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();
      if (btnRect.left < contRect.left || btnRect.right > contRect.right) {
        btn.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activeFilter]);

  const handleJump = (id: string) => {
    isManualScrollRef.current = true;
    onSelect(id);

    const navHeight = 72;
    const filterBar = document.getElementById("portfolio-filter-bar");
    const filterHeight = filterBar?.offsetHeight || 56;
    const totalOffset = navHeight + filterHeight + 16;

    if (id === "all") {
      const firstSection = document.getElementById("websites");
      const targetY = firstSection
        ? firstSection.getBoundingClientRect().top + window.scrollY - totalOffset
        : 0;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: "smooth",
      });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, elementPosition - totalOffset),
          behavior: "smooth",
        });
      }
    }

    setTimeout(() => {
      isManualScrollRef.current = false;
    }, 850);
  };

  return (
    <div
      id="portfolio-filter-bar"
      className="sticky top-[var(--nav-h,72px)] z-40 bg-white/95 backdrop-blur-md border-b border-[var(--grey-200)] py-3 shadow-xs transition-all"
    >
      <div className="site-container">
        <div
          ref={scrollContainerRef}
          role="tablist"
          aria-label="Filter portfolio by discipline"
          className="flex items-center gap-1.5 xl:gap-2 overflow-x-auto py-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                ref={(el) => {
                  buttonRefs.current[f.id] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleJump(f.id)}
                className={`group inline-flex shrink-0 items-center gap-1.5 xl:gap-2 rounded-full px-3 py-1.5 xl:px-3.5 xl:py-2 text-[10.5px] lg:text-[11px] 2xl:text-[11.5px] font-bold uppercase tracking-[0.04em] leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-[#0E1018] text-white border border-[#0E1018] shadow-sm"
                    : "border border-[var(--grey-200)] bg-[#FAFAFA] text-[#0E1018] hover:border-[#0E1018] hover:bg-white"
                }`}
              >
                <span
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--orange)]"
                      : "text-[#6B7280] group-hover:text-[#0E1018]"
                  }`}
                >
                  {f.icon}
                </span>

                <span className="whitespace-nowrap">{f.label}</span>

                <span
                  className={`ml-0.5 inline-flex items-center justify-center rounded-full px-1.5 py-0.5 font-mono text-[9.5px] lg:text-[10px] font-semibold leading-none transition-colors duration-200 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#EAECEF] text-[#4B5563] group-hover:bg-[#E2E5E9] group-hover:text-[#111827]"
                  }`}
                >
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
