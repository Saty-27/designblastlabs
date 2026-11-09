"use client";

import React from "react";

export default function ClientMarquee() {
  const whiteBandClients = [
    "EUROPACK INDUSTRIES",
    "GAURANITAI",
    "TATA",
    "DIVINE NATURALS",
    "ISKCON JUHU",
  ];

  const blackBandClients = [
    "PREPASOLE",
    "EDUCONNECT AI",
    "META",
    "GOOGLE",
  ];

  return (
    <section id="clients" className="py-16 md:py-20 bg-white overflow-hidden border-b border-neutral-100">
      <div className="site-container mb-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs md:text-sm font-bold tracking-widest text-blast-orange uppercase font-mono">
              OUR CLIENTS
            </span>
            <h2 className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight uppercase text-blast-black">
              BRANDS THAT TRUST THE BLAST.
            </h2>
          </div>
          <div className="text-xs font-mono font-bold text-neutral-400 tracking-wider uppercase pb-1">
            100+ BRANDS &nbsp;|&nbsp; REAL RESULTS.
          </div>
        </div>
      </div>

      {/* Marquee Bands Container */}
      <div className="space-y-4">
        {/* Band 1: White Background, Black Bold Typography */}
        <div className="relative w-full overflow-hidden bg-white border-y border-neutral-200 py-5">
          <div className="flex w-max animate-marquee space-x-12 items-center">
            {[...whiteBandClients, ...whiteBandClients, ...whiteBandClients].map(
              (client, idx) => (
                <div key={idx} className="flex items-center space-x-12 shrink-0">
                  <span className="font-barlow font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-blast-black hover:text-blast-orange transition-colors cursor-default">
                    {client}
                  </span>
                  <span className="text-blast-orange font-bold text-2xl">✦</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Band 2: Obsidian Black Background, White Bold Typography */}
        <div className="relative w-full overflow-hidden bg-blast-black py-5 border-y border-neutral-900 shadow-inner">
          <div className="flex w-max animate-marquee-reverse space-x-12 items-center">
            {[...blackBandClients, ...blackBandClients, ...blackBandClients].map(
              (client, idx) => (
                <div key={idx} className="flex items-center space-x-12 shrink-0">
                  <span className="font-barlow font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white hover:text-blast-orange transition-colors cursor-default">
                    {client}
                  </span>
                  <span className="text-blast-orange font-bold text-2xl">✦</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
