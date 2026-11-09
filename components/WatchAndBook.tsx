"use client";

import React, { useState } from "react";
import { Play, Pause, Volume2, Maximize2, Calendar, CheckCircle2 } from "lucide-react";

export default function WatchAndBook() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"INSIDE" | "WORK" | "GALLERY">("INSIDE");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Title */}
        <div className="space-y-3 mb-12">
          <span className="text-xs md:text-sm font-bold tracking-widest text-blast-orange uppercase font-mono">
            LET&apos;S TALK
          </span>
          <h2 className="font-barlow font-black text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight uppercase text-blast-black">
            WATCH. THEN BOOK A CALL.
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* =========================================
              LEFT COLUMN: CUSTOM VIDEO SHOWREEL PLAYER
              ========================================= */}
          <div className="lg:col-span-7 bg-blast-black rounded-[28px] p-3 sm:p-4 border border-neutral-800 shadow-2xl flex flex-col justify-between overflow-hidden relative group">
            {/* Top Video Tabs */}
            <div className="flex items-center gap-2 z-20 mb-3">
              {(["INSIDE", "WORK", "GALLERY"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`text-[11px] font-mono font-bold tracking-wider uppercase px-4 py-1.5 rounded-full transition-all ${
                    activeTab === tab
                      ? "bg-blast-orange text-white shadow-sm"
                      : "bg-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Video Canvas / Poster */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-950 flex items-center justify-center">
              <img
                src="/video/showreel-poster.jpg?v=2"
                alt="Design Blast Labs Showreel"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? "scale-105 filter brightness-105" : "group-hover:scale-102"
                }`}
              />

              {/* Video Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Central Play/Pause Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-blast-black hover:bg-blast-orange hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-20 group/btn"
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                )}
              </button>

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20 space-y-2">
                <div className="flex items-center justify-between text-white text-xs font-sans font-medium">
                  <span className="font-bold text-sm tracking-wide">Our Work Process</span>
                  <span className="font-mono text-[11px] text-neutral-300">
                    {isPlaying ? "0:45" : "0:20"} / 2:28
                  </span>
                </div>

                {/* Scrubber line */}
                <div className="w-full h-1.5 bg-neutral-700/80 rounded-full overflow-hidden flex items-center">
                  <div
                    className="h-full bg-blast-orange transition-all duration-300"
                    style={{ width: isPlaying ? "42%" : "18%" }}
                  />
                </div>

                {/* Secondary control actions */}
                <div className="flex items-center justify-between text-neutral-400 text-xs pt-1">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                    <span className="text-[10px] font-mono">1080P HD • 60FPS</span>
                  </div>
                  <Maximize2 className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: 20-MIN CALL BOOKING CARD
              ========================================= */}
          <div className="lg:col-span-5 bg-white rounded-[28px] p-7 sm:p-10 border border-neutral-200/90 shadow-xl flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 text-center space-y-4 my-auto animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-200 text-blast-orange flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-barlow font-black text-3xl uppercase tracking-tight text-blast-black">
                  Call Request Received!
                </h3>
                <p className="text-sm text-neutral-600 max-w-xs mx-auto leading-relaxed">
                  Thanks {formData.name || "there"}! We will confirm your 20-minute strategy call via WhatsApp/email within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono font-bold text-blast-orange uppercase underline pt-2"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <h3 className="font-barlow font-black text-3xl sm:text-4xl uppercase tracking-tight text-blast-black leading-none">
                    BOOK A FREE 20-MIN CALL
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-sans font-medium">
                    Let&apos;s discuss your project and see how we can help.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Name field */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your name*"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 text-sm text-blast-black placeholder:text-neutral-400 focus:outline-none focus:border-blast-orange focus:ring-1 focus:ring-blast-orange transition-all bg-neutral-50/50"
                    />
                  </div>

                  {/* Email / WhatsApp field */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Email or WhatsApp*"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 text-sm text-blast-black placeholder:text-neutral-400 focus:outline-none focus:border-blast-orange focus:ring-1 focus:ring-blast-orange transition-all bg-neutral-50/50"
                    />
                  </div>

                  {/* What do you need dropdown */}
                  <div>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 text-sm text-blast-black placeholder:text-neutral-400 focus:outline-none focus:border-blast-orange focus:ring-1 focus:ring-blast-orange transition-all bg-neutral-50/50"
                    >
                      <option value="" disabled>
                        What do you need?*
                      </option>
                      <option value="website">Website Development (Revenue Growth)</option>
                      <option value="ai">Custom AI Agents &amp; Workflows</option>
                      <option value="app">Mobile &amp; Web App Development</option>
                      <option value="social">Social Media &amp; Viral Content</option>
                      <option value="all">Full Digital System</option>
                    </select>
                  </div>

                  {/* Budget dropdown */}
                  <div>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 text-sm text-blast-black placeholder:text-neutral-400 focus:outline-none focus:border-blast-orange focus:ring-1 focus:ring-blast-orange transition-all bg-neutral-50/50"
                    >
                      <option value="" disabled>
                        Budget (Optional)
                      </option>
                      <option value="tier1">&lt; $5,000</option>
                      <option value="tier2">$5,000 – $15,000</option>
                      <option value="tier3">$15,000 – $50,000</option>
                      <option value="tier4">$50,000+</option>
                    </select>
                  </div>
                </div>

                {/* Big Orange Submit Pill */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blast-orange hover:bg-blast-orange-hover text-white py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/20 active:scale-[0.98]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>REQUEST MY CALL →</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
