"use client";

import React from "react";
import { ArrowRight, ArrowUpRight, Zap, TrendingUp, BarChart2 } from "lucide-react";

export default function ResultsStrip() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* =========================================
              CARD 01: 1 CRORE+ VIEWS (BLACK PANEL)
              ========================================= */}
          <div className="relative bg-blast-black text-white rounded-[28px] p-7 md:p-8 overflow-hidden min-h-[400px] flex flex-col justify-between group border border-neutral-800 shadow-xl">
            {/* Top Typography */}
            <div className="space-y-3 z-10 max-w-[210px] sm:max-w-[240px]">
              <h2 className="font-barlow font-black text-4xl sm:text-5xl leading-[0.9] tracking-tight uppercase">
                <span className="text-blast-orange block">1 CRORE+</span>
                <span>VIEWS FOR</span>
                <span className="block">OUR CLIENTS.</span>
              </h2>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans font-medium pt-1">
                We create content that gets attention and drives real business results.
              </p>
            </div>

            {/* Visual: Angled Phone Mockup with Reel & +10M+ VIEWS Badge */}
            <div className="absolute right-[-15px] bottom-[-25px] w-[210px] sm:w-[230px] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-neutral-700/60 [transform:rotate(4deg)]">
                <img
                  src="/hero/hero-social.jpg"
                  alt="Social Media Views Reel"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Bottom Left Circular Action */}
            <div className="z-10 pt-6">
              <a
                href="#booking"
                className="w-10 h-10 rounded-full border border-neutral-700 hover:border-blast-orange hover:bg-blast-orange text-white flex items-center justify-center transition-all duration-200"
                aria-label="View social media results"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* =========================================
              CARD 02: AI AGENTS 70% FASTER (ORANGE PANEL)
              ========================================= */}
          <div className="relative bg-blast-orange text-blast-black rounded-[28px] p-7 md:p-8 overflow-hidden min-h-[400px] flex flex-col justify-between group shadow-xl">
            {/* Top Row: Headline + Black Circle Plus/Arrow */}
            <div className="flex items-start justify-between gap-4 z-10">
              <h2 className="font-barlow font-black text-4xl sm:text-5xl leading-[0.9] tracking-tight uppercase text-blast-black">
                <span>AI AGENTS</span>
                <br />
                <span>THAT MAKE YOUR</span>
                <br />
                <span>TEAM 70% FASTER.</span>
              </h2>

              <a
                href="#booking"
                className="w-10 h-10 rounded-full bg-blast-black text-white hover:bg-neutral-900 flex items-center justify-center transition-transform duration-200 group-hover:rotate-45 shrink-0"
                aria-label="Learn about AI agents"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* Bottom: 3 High-Impact White Metric Chips */}
            <div className="grid grid-cols-3 gap-2.5 z-10 pt-8">
              {/* Stat 1 */}
              <div className="bg-white rounded-2xl p-3 text-center shadow-md flex flex-col items-center justify-center space-y-1">
                <Zap className="w-4 h-4 text-blast-orange" />
                <div className="font-barlow font-black text-2xl text-blast-black leading-none">
                  70%
                </div>
                <div className="text-[9px] font-mono font-bold tracking-wider text-neutral-500 uppercase leading-tight">
                  EFFICIENCY
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-2xl p-3 text-center shadow-md flex flex-col items-center justify-center space-y-1">
                <TrendingUp className="w-4 h-4 text-blast-orange" />
                <div className="font-barlow font-black text-2xl text-blast-black leading-none">
                  340%
                </div>
                <div className="text-[9px] font-mono font-bold tracking-wider text-neutral-500 uppercase leading-tight">
                  BRAND GROWTH
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white rounded-2xl p-3 text-center shadow-md flex flex-col items-center justify-center space-y-1">
                <BarChart2 className="w-4 h-4 text-blast-orange" />
                <div className="font-barlow font-black text-2xl text-blast-black leading-none">
                  3X
                </div>
                <div className="text-[9px] font-mono font-bold tracking-wider text-neutral-500 uppercase leading-tight">
                  REVENUE
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              CARD 03: APPS THAT HELP SCALE (WHITE PANEL)
              ========================================= */}
          <div className="relative bg-white text-blast-black rounded-[28px] p-7 md:p-8 overflow-hidden min-h-[400px] flex flex-col justify-between group border border-neutral-200/90 shadow-xl">
            {/* Top Row: Headline + Black Circle Plus */}
            <div className="flex items-start justify-between gap-4 z-10">
              <h2 className="font-barlow font-black text-4xl sm:text-5xl leading-[0.9] tracking-tight uppercase text-blast-black max-w-[240px]">
                <span>APPS THAT HELP</span>
                <br />
                <span>YOUR BUSINESS</span>
                <br />
                <span>SCALE.</span>
              </h2>

              <a
                href="#booking"
                className="w-10 h-10 rounded-full bg-blast-black text-white hover:bg-neutral-900 flex items-center justify-center transition-transform duration-200 group-hover:rotate-45 shrink-0"
                aria-label="Learn about App Development"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* Overlapping Phone Mockup Bleeding to the right */}
            <div className="absolute right-[-20px] bottom-[-20px] w-[230px] sm:w-[250px] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
              <div className="relative rounded-[22px] overflow-hidden shadow-2xl border border-neutral-200/80 [transform:rotate(-3deg)]">
                <img
                  src="/hero/hero-app.jpg"
                  alt="Business App Screens"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Bottom Left Circular Arrow */}
            <div className="z-10 pt-6">
              <a
                href="#booking"
                className="w-10 h-10 rounded-full border border-neutral-300 hover:border-blast-orange hover:bg-blast-orange hover:text-white text-blast-black flex items-center justify-center transition-all duration-200"
                aria-label="View App scale solutions"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
