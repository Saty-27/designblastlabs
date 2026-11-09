"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export interface BentoImageItem {
  id: string;
  title: string;
  tag: string;
  imageSrc: string;
}

const bentoItems: BentoImageItem[] = [
  {
    id: "camera",
    title: "Cinema Rig & Gear",
    tag: "EQUIPMENT",
    imageSrc: "/marketing/bento-camera.jpg?v=2",
  },
  {
    id: "filmcrew",
    title: "Brand Commercial Production",
    tag: "STUDIO SHOOT",
    imageSrc: "/marketing/bento-filmcrew.jpg",
  },
  {
    id: "editing",
    title: "High-Retention Timeline Edit",
    tag: "POST PRODUCTION",
    imageSrc: "/marketing/bento-editing.jpg",
  },
  {
    id: "product",
    title: "Premium Product Shoot",
    tag: "COMMERCIAL STILLS",
    imageSrc: "/marketing/bento-product.jpg",
  },
  {
    id: "team",
    title: "Creative Directors & Strategists",
    tag: "COLLABORATION",
    imageSrc: "/marketing/bento-team.jpg",
  },
];

export default function MarketingSection() {
  return (
    <section id="marketing" className="py-16 md:py-24 bg-blast-black text-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with Headline & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          {/* Left: Headline & Description */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs md:text-sm font-bold tracking-widest text-blast-orange uppercase font-mono">
              OUR MARKETING
            </span>
            <h2 className="font-barlow font-black text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight uppercase">
              BORN ONLINE. <br />
              BUILT <span className="text-blast-orange">TO BE SEEN.</span>
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans font-medium max-w-lg">
              We combine design, technology and marketing to create brands that people remember and results that matter.
            </p>
          </div>

          {/* Right: Big Impact Stats & View More CTA */}
          <div className="lg:col-span-6 flex flex-wrap items-center justify-between lg:justify-end gap-8 pb-2">
            <div className="flex items-center gap-6 sm:gap-8">
              {/* Stat 1 */}
              <div className="space-y-0.5">
                <div className="font-barlow font-black text-4xl sm:text-5xl text-blast-orange leading-none">
                  5K+
                </div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                  HOURS OF WORK
                </div>
              </div>

              {/* Divider */}
              <div className="h-10 w-[1px] bg-neutral-800" />

              {/* Stat 2 */}
              <div className="space-y-0.5">
                <div className="font-barlow font-black text-4xl sm:text-5xl text-white leading-none">
                  10K+
                </div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                  REELS &amp; VIDEOS
                </div>
              </div>

              {/* Divider */}
              <div className="h-10 w-[1px] bg-neutral-800" />

              {/* Stat 3 */}
              <div className="space-y-0.5">
                <div className="font-barlow font-black text-4xl sm:text-5xl text-white leading-none">
                  7K+
                </div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                  LEADS GENERATED
                </div>
              </div>
            </div>

            {/* CTA Pill */}
            <div>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 border border-blast-orange/80 hover:bg-blast-orange hover:text-white text-blast-orange px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200"
              >
                <span>VIEW MORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 5-Item Photographic Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-2">
          {bentoItems.map((item, idx) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900 group aspect-[4/3] md:aspect-[3/4] ${
                idx === 0 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blast-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[9px] font-mono font-bold tracking-wider text-blast-orange uppercase">
                  {item.tag}
                </span>
                <div className="font-barlow font-bold text-sm uppercase text-white truncate">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
