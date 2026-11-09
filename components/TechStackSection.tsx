"use client";

import React, { useEffect, useRef, useState } from "react";
import { brandIcons } from "@/data/brandIcons";

/** Order here is the order the groups render in. */
export const toolGroups = [
  "Design",
  "Development",
  "Shooting & Video Editing",
  "CMS & No-Code Platforms",
  "Advertising & Social",
  "AI & Automation",
] as const;

export type ToolGroup = (typeof toolGroups)[number];

export interface Tool {
  name: string;
  category: string;
  /** Heading this tool sits under in the grid. */
  group: ToolGroup;
  /** Official Simple Icons path, or null when the brand isn't in the set. */
  path: string | null;
  /** Brand colour, used for the hover state. */
  hex: string;
  /** Shown instead of a logo when `path` is null — never a hand-drawn stand-in. */
  fallback?: string;
}

/**
 * Logos come from Simple Icons (official, versioned SVG paths).
 * Canva and OpenAI are not in the set — both brands had their icons removed —
 * so they use a lettermark fallback rather than an invented approximation.
 */
export const tools: Tool[] = [
  // Design
  { name: "Figma", group: "Design", category: "Design", path: brandIcons.figma.path, hex: `${brandIcons.figma.hex}` },
  { name: "Photoshop", group: "Design", category: "Design", path: null, hex: "#31A8FF", fallback: "Ps" },
  { name: "Canva", group: "Design", category: "Content", path: null, hex: "#00C4CC", fallback: "Cv" },

  // Frontend
  { name: "React", group: "Development", category: "Frontend", path: brandIcons.react.path, hex: `${brandIcons.react.hex}` },
  { name: "Next.js", group: "Development", category: "Full Stack", path: brandIcons.nextdotjs.path, hex: "#FFFFFF" },
  { name: "JavaScript", group: "Development", category: "Language", path: brandIcons.javascript.path, hex: `${brandIcons.javascript.hex}` },
  { name: "HTML5", group: "Development", category: "Markup", path: brandIcons.html5.path, hex: `${brandIcons.html5.hex}` },
  { name: "CSS", group: "Development", category: "Styling", path: brandIcons.css.path, hex: `${brandIcons.css.hex}` },
  { name: "Sass", group: "Development", category: "Styling", path: brandIcons.sass.path, hex: `${brandIcons.sass.hex}` },
  { name: "Tailwind CSS", group: "Development", category: "UI Framework", path: brandIcons.tailwindcss.path, hex: `${brandIcons.tailwindcss.hex}` },

  // Backend
  { name: "Node.js", group: "Development", category: "Backend", path: brandIcons.nodedotjs.path, hex: `${brandIcons.nodedotjs.hex}` },
  { name: "NestJS", group: "Development", category: "Backend", path: brandIcons.nestjs.path, hex: `${brandIcons.nestjs.hex}` },
  { name: "Java", group: "Development", category: "Backend", path: null, hex: "#5382A1", fallback: "Ja" },
  { name: "Spring", group: "Development", category: "Framework", path: brandIcons.spring.path, hex: `${brandIcons.spring.hex}` },
  { name: "Python", group: "Development", category: "Backend", path: brandIcons.python.path, hex: `${brandIcons.python.hex}` },
  { name: "R", group: "Development", category: "Data", path: brandIcons.r.path, hex: `${brandIcons.r.hex}` },

  // Shooting & video — Adobe pulled its marks from Simple Icons, so Premiere and
  // After Effects use the same lettermark treatment as Photoshop.
  { name: "Premiere Pro", group: "Shooting & Video Editing", category: "Video Editing", path: null, hex: "#9999FF", fallback: "Pr" },
  { name: "After Effects", group: "Shooting & Video Editing", category: "Motion Graphics", path: null, hex: "#9999FF", fallback: "Ae" },
  { name: "DaVinci Resolve", group: "Shooting & Video Editing", category: "Colour & Finishing", path: brandIcons.davinciresolve.path, hex: `${brandIcons.davinciresolve.hex}` },

  // Platforms
  { name: "WordPress", group: "CMS & No-Code Platforms", category: "CMS", path: brandIcons.wordpress.path, hex: `${brandIcons.wordpress.hex}` },
  { name: "Webflow", group: "CMS & No-Code Platforms", category: "No-Code", path: brandIcons.webflow.path, hex: `${brandIcons.webflow.hex}` },
  { name: "Shopify", group: "CMS & No-Code Platforms", category: "E-Commerce", path: brandIcons.shopify.path, hex: `${brandIcons.shopify.hex}` },

  // Growth & AI
  { name: "Google Ads", group: "Advertising & Social", category: "Advertising", path: brandIcons.googleads.path, hex: `${brandIcons.googleads.hex}` },
  { name: "Meta Ads", group: "Advertising & Social", category: "Advertising", path: brandIcons.meta.path, hex: `${brandIcons.meta.hex}` },
  { name: "Instagram", group: "Advertising & Social", category: "Social", path: brandIcons.instagram.path, hex: `${brandIcons.instagram.hex}` },
  { name: "Facebook", group: "Advertising & Social", category: "Social", path: brandIcons.facebook.path, hex: `${brandIcons.facebook.hex}` },
  { name: "WhatsApp", group: "Advertising & Social", category: "Messaging", path: brandIcons.whatsapp.path, hex: `${brandIcons.whatsapp.hex}` },

  { name: "Claude", group: "AI & Automation", category: "AI Models", path: brandIcons.claude.path, hex: `${brandIcons.claude.hex}` },
  { name: "OpenAI", group: "AI & Automation", category: "AI Agents", path: null, hex: "#FFFFFF", fallback: "AI" },
  { name: "Gemini", group: "AI & Automation", category: "AI Models", path: brandIcons.googlegemini.path, hex: `${brandIcons.googlegemini.hex}` },
  { name: "n8n", group: "AI & Automation", category: "Automation", path: brandIcons.n8n.path, hex: `${brandIcons.n8n.hex}` },
];

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

export default function TechStackSection() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="tech-stack"
      aria-label="Our tech stack"
      className="w-full bg-[#0E0F13] py-[clamp(44px,3.8vw,76px)]"
    >
      <div className="site-container">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(14px)",
              transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}`,
            }}
          >
            <p
              className="font-bold uppercase tracking-[0.2em] text-[var(--orange)]"
              style={{ fontSize: "clamp(10px, 0.72vw, 13px)" }}
            >
              OUR TECH STACK
            </p>
            <h2
              className="mt-2.5 font-anton uppercase leading-[0.98] tracking-[-0.015em] text-white"
              style={{ fontSize: "clamp(28px, 2.9vw, 50px)" }}
            >
              THE TOOLS BEHIND THE BLAST.
            </h2>
          </div>

          <p
            className="shrink-0 text-[#A0A3AA] lg:pb-2"
            style={{
              fontSize: "clamp(13px, 0.92vw, 15px)",
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(14px)",
              transition: `opacity 700ms ${EASE} 120ms, transform 700ms ${EASE} 120ms`,
            }}
          >
            We use the best tools for the best results.
          </p>
        </div>

        <div className="mt-[clamp(24px,2.2vw,40px)] space-y-[clamp(26px,2.4vw,42px)]">
          {toolGroups.map((group) => {
            const inGroup = tools.filter((t) => t.group === group);
            if (inGroup.length === 0) return null;

            return (
              <div key={group}>
                <div className="flex items-center gap-3.5">
                  <h3 className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.18em] text-white/55">
                    {group}
                  </h3>
                  <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
                </div>

                <ul className="mt-3.5 grid grid-cols-3 gap-2.5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
                  {inGroup.map((tool, i) => (
                  <li
                    key={tool.name}
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "none" : "translateY(16px)",
                      transition: `opacity 560ms ${EASE} ${100 + i * 28}ms, transform 560ms ${EASE} ${
                        100 + i * 28
                      }ms`,
                    }}
                  >
                    <div
                      className="group flex h-[84px] flex-col items-center justify-center gap-1.5 rounded-[12px] border border-[#292D34] bg-[#111419] px-1.5 text-center transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-[var(--orange)] hover:bg-[#171B21] motion-reduce:transform-none active:border-[var(--orange)] sm:h-[72px] sm:flex-row sm:justify-start sm:gap-3.5 sm:px-4 sm:text-left lg:px-5"
                      style={{ ["--brand" as string]: tool.hex }}
                    >
                      <span
                        aria-hidden="true"
                        className="grid h-8 w-8 shrink-0 place-items-center text-[#A0A3AA] transition-colors duration-200 group-hover:text-[color:var(--brand)]"
                      >
                        {tool.path ? (
                          <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]" fill="currentColor">
                            <path d={tool.path} />
                          </svg>
                        ) : (
                          <span className="grid h-[26px] w-[26px] place-items-center rounded-[7px] border border-current text-[11px] font-bold leading-none">
                            {tool.fallback}
                          </span>
                        )}
                      </span>

                      <span className="min-w-0 max-w-full">
                        <span className="block text-[11.5px] font-medium leading-[1.2] text-white sm:truncate sm:text-[14px] lg:text-[15px]">
                          {tool.name}
                        </span>
                        <span className="mt-1 hidden truncate font-mono text-[11px] uppercase tracking-[0.1em] text-[#A0A3AA] sm:block">
                          {tool.category}
                        </span>
                      </span>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
