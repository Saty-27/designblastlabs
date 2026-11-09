"use client";

import React from "react";
import {
  Monitor,
  Bot,
  Cpu,
  Smartphone,
  Instagram,
  BarChart,
  Video,
  Users,
  Plus,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  variant: "orange" | "black" | "white";
}

const servicesData: ServiceItem[] = [
  // 1. First: ORANGE
  {
    id: "website-dev",
    title: "WEBSITE DEVELOPMENT",
    description: "High-converting websites designed to turn visitors into customers.",
    tags: ["Business Websites", "E-Commerce", "Web Apps"],
    icon: <Monitor className="w-7 h-7 text-white" />,
    variant: "orange",
  },
  // 2. White
  {
    id: "ai-agents",
    title: "CUSTOM AI AGENTS",
    description: "Build AI agents that handle real business tasks for you.",
    tags: ["AI Employees", "Customer Support", "Lead Handling"],
    icon: <Bot className="w-7 h-7 text-blast-black" />,
    variant: "white",
  },
  // 3. White
  {
    id: "ai-workflows",
    title: "AI WORKFLOWS & AUTOMATION",
    description: "Connect your tools and automate repetitive business workflows.",
    tags: ["Workflows", "CRM", "API", "Automation"],
    icon: <Cpu className="w-7 h-7 text-blast-black" />,
    variant: "white",
  },
  // 4. White
  {
    id: "app-dev",
    title: "APP DEVELOPMENT",
    description: "Mobile and web applications built around your business.",
    tags: ["iOS", "Android", "Web App"],
    icon: <Smartphone className="w-7 h-7 text-blast-black" />,
    variant: "white",
  },
  // 5. White
  {
    id: "instagram-marketing",
    title: "INSTAGRAM MARKETING",
    description: "Content systems that turn attention into brand growth.",
    tags: ["Instagram", "Reels", "Content"],
    icon: <Instagram className="w-7 h-7 text-blast-black" />,
    variant: "white",
  },
  // 6. White (Google Ads & PPC)
  {
    id: "google-ads",
    title: "GOOGLE ADS & PPC",
    description: "Performance campaigns built to generate qualified leads.",
    tags: ["Google Ads", "PPC", "Lead Generation"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        />
      </svg>
    ),
    variant: "white",
  },
  // 7. White
  {
    id: "organic-seo",
    title: "ORGANIC SEO",
    description: "Build long-term visibility and bring qualified traffic to your website.",
    tags: ["Technical SEO", "On-Page", "Content"],
    icon: <BarChart className="w-7 h-7 text-blast-black" />,
    variant: "white",
  },
  // 8. White
  {
    id: "video-shoot",
    title: "VIDEO SHOOT & EDIT",
    description: "Professional shooting and editing for brands that want to be seen.",
    tags: ["Video Shoot", "Editing", "Reels"],
    icon: <Video className="w-7 h-7 text-blast-black" />,
    variant: "white",
  },
  // 9. Last: BLACK
  {
    id: "social-management",
    title: "SOCIAL MEDIA MANAGEMENT",
    description: "We manage your social presence from strategy to publishing.",
    tags: ["Strategy", "Posting", "Analytics"],
    icon: <Users className="w-7 h-7 text-white" />,
    variant: "black",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-3">
            <span className="text-xs md:text-sm font-bold tracking-widest text-blast-orange uppercase font-mono">
              SERVICES
            </span>
            <h2 className="font-barlow font-black text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight uppercase text-blast-black">
              EVERYTHING UNDER ONE ROOF.
            </h2>
          </div>
          <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider pb-1">
            Strategy. Design. Technology. Marketing. Content.
          </div>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((svc) => {
            const isOrange = svc.variant === "orange";
            const isBlack = svc.variant === "black";

            return (
              <div
                key={svc.id}
                className={`rounded-[22px] p-7 flex flex-col justify-between min-h-[260px] transition-all duration-300 group border hover:shadow-xl ${
                  isOrange
                    ? "bg-blast-orange text-white border-blast-orange shadow-lg"
                    : isBlack
                    ? "bg-blast-black text-white border-neutral-800 shadow-lg"
                    : "bg-white text-blast-black border-neutral-200/90 shadow-sm hover:border-blast-orange/50"
                }`}
              >
                {/* Top Row: Icon + Circle Plus Action */}
                <div className="flex items-center justify-between">
                  <div className="p-1">{svc.icon}</div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-200 group-hover:rotate-90 ${
                      isOrange
                        ? "border-white/40 text-white group-hover:bg-white group-hover:text-blast-orange"
                        : isBlack
                        ? "border-neutral-700 text-white group-hover:bg-blast-orange group-hover:border-blast-orange"
                        : "border-neutral-200 text-neutral-400 group-hover:border-blast-black group-hover:text-blast-black"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </div>

                {/* Middle: Title & Description */}
                <div className="space-y-2 py-4">
                  <h3
                    className={`font-barlow font-black text-2xl sm:text-[26px] leading-tight tracking-tight uppercase ${
                      isOrange ? "text-white" : isBlack ? "text-white" : "text-blast-black"
                    }`}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed font-sans font-medium line-clamp-2 ${
                      isOrange
                        ? "text-white/90"
                        : isBlack
                        ? "text-neutral-400"
                        : "text-neutral-600"
                    }`}
                  >
                    {svc.description}
                  </p>
                </div>

                {/* Bottom: Category Pill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-sans font-bold px-3 py-1 rounded-full border transition-colors ${
                        isOrange
                          ? "bg-white/20 border-white/30 text-white"
                          : isBlack
                          ? "bg-neutral-800/80 border-neutral-700 text-neutral-300"
                          : "bg-neutral-50 border-neutral-200/80 text-neutral-700 group-hover:border-neutral-300"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
