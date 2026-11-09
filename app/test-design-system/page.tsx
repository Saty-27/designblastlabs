import React from "react";

export default function DesignSystemTestPage() {
  const fontCandidates = [
    {
      name: "Barlow Condensed (Black 900)",
      fontClass: "font-barlow font-black tracking-tight",
      description: "Heavy condensed grotesque, clean industrial apex and open counters.",
    },
    {
      name: "Barlow Condensed (ExtraBold 800)",
      fontClass: "font-barlow font-extrabold tracking-tight",
      description: "Balanced condensed weight, very close letterform rhythm.",
    },
    {
      name: "Bebas Neue (Regular 400)",
      fontClass: "font-bebas font-normal tracking-normal",
      description: "Pure all-caps display condensed, very tall x-height.",
    },
    {
      name: "Anton (Regular 400)",
      fontClass: "font-anton font-normal tracking-tight",
      description: "Super heavy headline display font with square terminals.",
    },
    {
      name: "Oswald (Bold 700)",
      fontClass: "font-oswald font-bold tracking-tight",
      description: "Reworked Alternate Gothic sans with condensed proportions.",
    },
    {
      name: "Archivo Narrow (Bold 700)",
      fontClass: "font-archivo font-bold tracking-tight",
      description: "Narrow grotesque font designed for print and digital headlines.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-blast-black p-8 md:p-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="border-b border-neutral-200 pb-6">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-blast-orange mb-2">
          Step 02 — Design System Verification
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Typography & Color Architecture Test
        </h1>
        <p className="text-neutral-500 mt-2 text-sm max-w-2xl">
          Visual comparison of typography candidates against reference authority (70% White / 15% Black / 15% Blast Orange).
        </p>
      </div>

      {/* Brand Identity & Logo Verification */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 text-xs font-mono">
          Step 03 — Brand Identity & Vector Logo Verification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Light Background Test */}
          <div className="border border-neutral-200 p-8 rounded-2xl bg-white shadow-sm space-y-4">
            <span className="text-xs font-mono text-neutral-400 font-bold uppercase">Logo on Pure White (#FFFFFF)</span>
            <div className="p-4 bg-white border border-dashed border-neutral-200 rounded-xl flex items-center justify-start">
              <img src="/brand/logo.svg" alt="Design Blast Labs Logo" className="h-10 w-auto" />
            </div>
          </div>

          {/* Dark Background Test */}
          <div className="border border-neutral-800 p-8 rounded-2xl bg-blast-black shadow-sm space-y-4">
            <span className="text-xs font-mono text-neutral-400 font-bold uppercase">Logo on Obsidian Black (#0E1018)</span>
            <div className="p-4 bg-blast-black border border-dashed border-neutral-700 rounded-xl flex items-center justify-start">
              <img src="/brand/logo-dark.svg" alt="Design Blast Labs Logo Dark" className="h-10 w-auto" />
            </div>
          </div>

          {/* Favicon Test */}
          <div className="border border-neutral-200 p-6 rounded-2xl bg-neutral-50 shadow-sm flex items-center gap-6">
            <img src="/brand/favicon.svg" alt="Favicon" className="w-12 h-12 rounded-xl shadow-md" />
            <div>
              <div className="font-bold text-sm">Favicon / App Icon (48×48 SVG)</div>
              <div className="text-xs text-neutral-500">Geometric DB lightning emblem on Obsidian Black</div>
            </div>
          </div>

          {/* Giant Wordmark Test */}
          <div className="border border-neutral-800 p-6 rounded-2xl bg-blast-black text-white shadow-sm space-y-2">
            <span className="text-xs font-mono text-neutral-400 font-bold uppercase">Giant Footer Typographic Wordmark</span>
            <div className="font-barlow font-black text-4xl uppercase tracking-tight">
              DESIGN <span className="text-blast-orange">BLAST</span> LABS
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Ratios */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 text-xs font-mono">
          Color Ratios & Contrast (70% White / 15% Black / 15% Blast Orange)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-neutral-200 p-6 rounded-2xl bg-white shadow-sm space-y-2">
            <div className="h-20 bg-white border border-neutral-200 rounded-lg flex items-center justify-center font-bold text-blast-black">
              #FFFFFF (70%)
            </div>
            <div className="font-bold text-sm">PURE WHITE — Surface & Structure</div>
            <div className="text-xs text-neutral-500">Header, hero canvas, card surfaces, content body</div>
          </div>

          <div className="border border-neutral-800 p-6 rounded-2xl bg-blast-black text-white shadow-sm space-y-2">
            <div className="h-20 bg-blast-black border border-neutral-700 rounded-lg flex items-center justify-center font-bold text-white">
              #0E1018 (15%)
            </div>
            <div className="font-bold text-sm">OBSIDIAN BLACK — Typography & Grounding</div>
            <div className="text-xs text-neutral-400">Headlines, 1 Crore+ card, bento container, footer</div>
          </div>

          <div className="border border-blast-orange/30 p-6 rounded-2xl bg-blast-orange text-white shadow-sm space-y-2">
            <div className="h-20 bg-blast-orange rounded-lg flex items-center justify-center font-bold text-white text-lg">
              #FF4F17 (15%)
            </div>
            <div className="font-bold text-sm">BLAST ORANGE — High-Voltage Accents</div>
            <div className="text-xs text-white/90">5X accents, primary CTA pills, AI card, testimonial block</div>
          </div>
        </div>
      </section>

      {/* Button & Interactive Test */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 text-xs font-mono">
          Button & Pill States
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-blast-orange hover:bg-blast-orange-hover text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-sm flex items-center gap-2">
            GET A FREE WEBSITE PLAN <span>→</span>
          </button>
          <button className="bg-white hover:bg-neutral-50 text-blast-black border-2 border-blast-black px-7 py-3 rounded-full font-bold text-sm tracking-wide transition-all">
            SEE OUR WORK
          </button>
          <button className="bg-blast-orange hover:bg-blast-orange-hover text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2">
            BOOK A CALL <span>→</span>
          </button>
          <button className="bg-blast-black hover:bg-neutral-900 text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all flex items-center gap-2">
            VIEW ALL PROJECTS <span>→</span>
          </button>
        </div>
      </section>

      {/* Candidate Typography Comparison */}
      <section className="space-y-12">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 text-xs font-mono">
          Headline Font Comparison Matrix
        </h2>

        {fontCandidates.map((candidate, idx) => (
          <div
            key={idx}
            className="border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-6 hover:border-blast-orange transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-neutral-100 gap-2">
              <div>
                <span className="text-xs font-mono text-blast-orange font-bold mr-3">
                  CANDIDATE #{idx + 1}
                </span>
                <span className="font-bold text-lg">{candidate.name}</span>
              </div>
              <p className="text-xs text-neutral-500">{candidate.description}</p>
            </div>

            {/* Hero Headline Simulation */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                Hero Headline Scale:
              </span>
              <div
                className={`${candidate.fontClass} text-5xl md:text-7xl lg:text-8xl leading-[0.92] uppercase`}
              >
                WEBSITES THAT <br />
                GROW REVENUE{" "}
                <span className="text-blast-orange">5X.</span>
              </div>
            </div>

            {/* Section Heading Simulation */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                Section Heading:
              </span>
              <div
                className={`${candidate.fontClass} text-3xl md:text-5xl leading-none uppercase`}
              >
                EVERYTHING UNDER ONE ROOF.
              </div>
            </div>

            {/* Card Headline Simulation */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                Card Headline:
              </span>
              <div
                className={`${candidate.fontClass} text-2xl md:text-3xl leading-tight uppercase`}
              >
                AI AGENTS THAT MAKE YOUR TEAM 70% FASTER.
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Tag */}
      <div className="pt-8 border-t border-neutral-200 text-xs font-mono text-neutral-400 flex justify-between">
        <span>DESIGN BLAST LABS — DESIGN SYSTEM SPEC v1.0</span>
        <span>VERIFICATION RUN</span>
      </div>
    </div>
  );
}
