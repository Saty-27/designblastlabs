import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Clock,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import BookCallButton from "@/components/BookCallButton";
import WorkFilterClient from "@/components/work/WorkFilterClient";
import ServiceBookingForm from "@/components/services/ServiceBookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Websites, AI, Social & Video Portfolio — Design Blast Labs",
  description:
    "Explore 21+ verified client implementations across custom website development, AI automation agents, social media growth, commercial video production, and mobile apps by Design Blast Labs.",
  alternates: {
    canonical: "https://designblastlabs.com/work",
  },
  openGraph: {
    title: "Our Work & Case Studies | Design Blast Labs Portfolio",
    description:
      "Explore verified client work across web development, custom AI agents, viral social campaigns, and 4K video production in Mumbai & global markets.",
    url: "https://designblastlabs.com/work",
    siteName: "Design Blast Labs",
    images: [
      {
        url: "https://designblastlabs.com/cards/website-development.webp",
        width: 1200,
        height: 630,
        alt: "Design Blast Labs Portfolio and Selected Work",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
};

// Structured Data for Google, Bing, Perplexity, and ChatGPT Search
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://designblastlabs.com/work#webpage",
      url: "https://designblastlabs.com/work",
      name: "Our Work & Case Studies | Design Blast Labs Portfolio",
      description:
        "Comprehensive client portfolio and case studies across website development, AI automation, social media marketing, and video production.",
      creator: {
        "@type": "Organization",
        name: "Design Blast Labs",
        url: "https://designblastlabs.com",
        logo: "https://designblastlabs.com/brand/logo.svg",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://designblastlabs.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Work",
          item: "https://designblastlabs.com/work",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Design Blast Labs Selected Client Work",
      description: "Verified projects across engineering, marketing, and artificial intelligence.",
      itemListElement: [
        {
          "@type": "CreativeWork",
          position: 1,
          name: "Europack Industries Global Website",
          headline: "Custom B2B Export Website & Google Ads Engine",
          description: "High-performance industrial catalogue yielding +300% website traffic and +120% qualified international RFQs.",
          url: "https://designblastlabs.com/work#websites",
        },
        {
          "@type": "CreativeWork",
          position: 2,
          name: "Educonnect Conversational AI Agent",
          headline: "Intelligent Student Admissions & Guidance Agent",
          description: "24/7 autonomous admissions agent resolving 82% of inquiries automatically with zero-hallucination guardrails.",
          url: "https://designblastlabs.com/work#ai-automation",
        },
        {
          "@type": "CreativeWork",
          position: 3,
          name: "Hiranandani Developers Luxury Real Estate Campaign",
          headline: "Viral Real Estate Social Media Engine",
          description: "Organic Reels and paid Meta Ads generating 10M+ organic video views and +140% site visits.",
          url: "https://designblastlabs.com/work#social-media",
        },
        {
          "@type": "CreativeWork",
          position: 4,
          name: "Inedible Brand Commercial Production",
          headline: "Cinematic 4K Food & FMCG Brand Film",
          description: "Full-day studio production in Mumbai shot on Sony FX6 Cinema cameras with 92% viewer retention.",
          url: "https://designblastlabs.com/work#video-production",
        },
        {
          "@type": "CreativeWork",
          position: 5,
          name: "Prepasole EdTech Mobile App",
          headline: "Cross-Platform Exam Preparation Mobile Application",
          description: "Native React Native application with 50,000+ student downloads and 4.8 star average rating.",
          url: "https://designblastlabs.com/work#apps",
        },
      ],
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex min-h-screen flex-col bg-white text-[var(--black)] selection:bg-[var(--orange)] selection:text-white">
        <Navbar />

        <main className="flex-1">
          {/* ── 01. Flagship Header & Proof Strip ───────────────────────────── */}
        <section className="relative overflow-hidden bg-white pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-[var(--grey-200)]">
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[20%] top-0 h-[480px] w-[500px] rounded-full opacity-35 blur-[130px]"
            style={{
              background: "radial-gradient(circle, rgba(255,79,23,0.3) 0%, rgba(255,255,255,0) 70%)",
            }}
          />

          <div className="site-container relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-[12.5px] font-medium text-[var(--grey-600)]">
                <li>
                  <Link href="/" className="hover:text-[var(--orange)] transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-[var(--grey-400)]">/</li>
                <li className="font-semibold text-[var(--black)]">Our Work</li>
              </ol>
            </nav>

            <div className="max-w-[980px]">
              <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--orange)] mb-3">
                SELECTED PORTFOLIO & CASE STUDIES
              </p>

              <h1
                className="font-anton uppercase leading-[0.92] tracking-[-0.02em] text-[var(--black)]"
                style={{ fontSize: "clamp(36px, 5.2vw, 84px)" }}
              >
                PROVEN WORK.{" "}
                <span className="text-[var(--orange)]">MEASURABLE RESULTS.</span>
              </h1>

              <p
                className="mt-6 max-w-[68ch] leading-[1.68] text-[var(--grey-600)]"
                style={{ fontSize: "clamp(16px, 1.2vw, 21px)" }}
              >
                A curated archive of production implementations built for ambitious startups,
                established manufacturers, and hyper-growth consumer brands. Every project reflects
                direct engineering and creative execution with zero outsourced compromise.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BookCallButton className="group inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-8 py-4 text-[12.5px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_22px_-6px_rgba(255,79,23,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5420F]">
                  START YOUR PROJECT
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </BookCallButton>

                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-[var(--black)] bg-white px-7 py-4 text-[12.5px] font-bold uppercase tracking-[0.1em] text-[var(--black)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--black)] hover:text-white"
                >
                  EXPLORE SERVICES
                </Link>
              </div>

              {/* Fast Proof Metrics Strip */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[var(--grey-200)] pt-8 sm:grid-cols-4 sm:gap-6">
                <div>
                  <div className="font-anton text-[28px] sm:text-[34px] leading-none text-[var(--orange)]">
                    1 CRORE+
                  </div>
                  <div className="mt-1.5 text-[12px] font-mono uppercase tracking-wider text-[var(--grey-600)]">
                    Organic Video Views
                  </div>
                </div>

                <div>
                  <div className="font-anton text-[28px] sm:text-[34px] leading-none text-[var(--black)]">
                    +300%
                  </div>
                  <div className="mt-1.5 text-[12px] font-mono uppercase tracking-wider text-[var(--grey-600)]">
                    Average Traffic Growth
                  </div>
                </div>

                <div>
                  <div className="font-anton text-[28px] sm:text-[34px] leading-none text-[var(--orange)]">
                    70%
                  </div>
                  <div className="mt-1.5 text-[12px] font-mono uppercase tracking-wider text-[var(--grey-600)]">
                    Manual Time Saved by AI
                  </div>
                </div>

                <div>
                  <div className="font-anton text-[28px] sm:text-[34px] leading-none text-[var(--black)]">
                    100%
                  </div>
                  <div className="mt-1.5 text-[12px] font-mono uppercase tracking-wider text-[var(--grey-600)]">
                    Code & Asset Ownership
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. Sticky Filter & Quick Navigation Bar ──────────────────────── */}
        <WorkFilterClient />

        {/* ── 03. Section 1: Website Development ───────────────────────────── */}
        <section
          id="websites"
          className="w-full bg-white py-[clamp(50px,5vw,90px)] border-b border-[var(--grey-200)] scroll-mt-36"
        >
          <div className="site-container">
            {/* Section Header */}
            <div className="max-w-[780px] mb-12">
              <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--orange)] mb-3">
                DISCIPLINE 01 — WEB ENGINEERING
              </p>
              <h2
                className="font-anton uppercase leading-[0.96] tracking-[-0.015em] text-[var(--black)]"
                style={{ fontSize: "clamp(28px, 3.4vw, 56px)" }}
              >
                WEBSITES THAT GROW REVENUE 5X.
              </h2>
              <p
                className="mt-4 leading-[1.65] text-[var(--grey-600)]"
                style={{ fontSize: "clamp(14.5px, 1.1vw, 18px)" }}
              >
                Custom Next.js & React web applications, headless e-commerce, and high-performance
                corporate portals engineered to load in under 2 seconds and turn visitors into
                paying customers.
              </p>
            </div>

            {/* Websites Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1: Europack */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/europack/laptop.jpg"
                      alt="Europack Industries Website"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--black)]/80 backdrop-blur-sm px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      B2B Manufacturing
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>NEXT.JS</span> • <span>GOOGLE ADS</span> • <span>SEO</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      EUROPACK INDUSTRIES
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--grey-600)]">
                      Global industrial packaging manufacturer website redesign with automated RFQ
                      lead forms and international Google Search campaigns.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--grey-200)] pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">+300% TRAFFIC</span>
                    <span className="text-[var(--grey-600)]">+120% LEADS</span>
                    <span className="text-[var(--grey-600)]">&lt;1.4S SPEED</span>
                  </div>
                </div>
              </div>

              {/* Project 2: Gauranitai */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/gauranitai/laptop.jpg"
                      alt="Gauranitai Website"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--black)]/80 backdrop-blur-sm px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      E-Commerce & Culture
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>REACT</span> • <span>CUSTOM CART</span> • <span>PAYMENTS</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      GAURANITAI HERITAGE
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--grey-600)]">
                      Bespoke brand portal with seamless donation processing, international
                      multi-currency checkout, and mobile-first responsive architecture.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--grey-200)] pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">+250% FOOTFALL</span>
                    <span className="text-[var(--grey-600)]">3X DONATIONS</span>
                    <span className="text-[var(--grey-600)]">100% MOBILE</span>
                  </div>
                </div>
              </div>

              {/* Project 3: Educonnect AI */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/educonnect-ai/desktop.jpg"
                      alt="Educonnect AI Web Platform"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--orange)] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      AI + Web Platform
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>NEXT.JS</span> • <span>SUPABASE</span> • <span>TYPESCRIPT</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      EDUCONNECT AI
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--grey-600)]">
                      Full-stack education portal with interactive student eligibility calculators,
                      automated admission flows, and real-time counselor handoffs.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--grey-200)] pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">+180% CONVERSION</span>
                    <span className="text-[var(--grey-600)]">4.8/5 RATING</span>
                    <span className="text-[var(--grey-600)]">&lt;1.6S LOAD</span>
                  </div>
                </div>
              </div>

              {/* Project 4: TATA */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/tata/website.webp"
                      alt="TATA Enterprise Portal"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--black)]/80 backdrop-blur-sm px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      Enterprise Portal
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>NEXT.JS</span> • <span>DESIGN SYSTEM</span> • <span>SECURITY</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      TATA ENTERPRISE
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--grey-600)]">
                      High-security enterprise web interface built with pixel-perfect brand
                      guideline adherence, zero layout shifts, and accessible contrast.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--grey-200)] pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">100% BRAND ACCURACY</span>
                    <span className="text-[var(--grey-600)]">0 CLS SHIFT</span>
                  </div>
                </div>
              </div>

              {/* Project 5: VR Packaging */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/vr-packaging/website.webp"
                      alt="VR Packaging Solutions Website"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--black)]/80 backdrop-blur-sm px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      B2B Catalogue
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>NEXT.JS</span> • <span>TECHNICAL SEO</span> • <span>HEADLESS</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      VR PACKAGING SOLUTIONS
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--grey-600)]">
                      Commercial packaging supplier web catalogue with category-level schema
                      markup, instant RFQ submission, and top-tier Google rankings.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--grey-200)] pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">+95% RFQ LEADS</span>
                    <span className="text-[var(--grey-600)]">TOP 3 RANKINGS</span>
                  </div>
                </div>
              </div>

              {/* Project 6: Aether */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/aether/website.webp"
                      alt="Aether Systems Website"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--black)]/80 backdrop-blur-sm px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      SaaS Marketing
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>NEXT.JS</span> • <span>FRAMER MOTION</span> • <span>TAILWIND</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      AETHER SYSTEMS
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--grey-600)]">
                      Developer tooling marketing site with interactive code demos, dark/light theme
                      switching, and smooth micro-interactions that boosted trial conversions.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--grey-200)] pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">+210% SIGNUPS</span>
                    <span className="text-[var(--grey-600)]">99 PAGESPEED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. Section 2: AI Automation & Custom AI Agents ───────────────── */}
        <section
          id="ai-automation"
          className="w-full bg-[#0C0E14] text-white py-[clamp(50px,5vw,90px)] border-b border-neutral-900 scroll-mt-36"
        >
          <div className="site-container">
            {/* Section Header */}
            <div className="max-w-[780px] mb-12">
              <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--orange)] mb-3">
                DISCIPLINE 02 — ARTIFICIAL INTELLIGENCE
              </p>
              <h2
                className="font-anton uppercase leading-[0.96] tracking-[-0.015em] text-white"
                style={{ fontSize: "clamp(28px, 3.4vw, 56px)" }}
              >
                AI AGENTS THAT MAKE YOUR TEAM 70% FASTER.
              </h2>
              <p
                className="mt-4 leading-[1.65] text-neutral-400"
                style={{ fontSize: "clamp(14.5px, 1.1vw, 18px)" }}
              >
                Custom tool-calling LLM agents, automated WhatsApp lead routers, and back-office
                document parsing engines designed to eliminate repetitive operational overhead.
              </p>
            </div>

            {/* AI Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* AI 1: Educonnect Agent */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-neutral-800 bg-[#141720] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--orange)] hover:bg-[#1A1E29] hover:shadow-2xl">
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px] bg-[#0E1018]">
                    <Image
                      src="/ai/ai-workflow.jpg"
                      alt="AI Agent Architecture"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--orange)] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      Autonomous Agent
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>CLAUDE 3.5 SONNET</span> • <span>PYTHON</span> • <span>WHATSAPP API</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[26px] uppercase tracking-tight text-white group-hover:text-[var(--orange)] transition-colors">
                      EDUCONNECT CONVERSATIONAL AI AGENT
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-neutral-300">
                      24/7 intelligent student admissions counselor capable of answering complex
                      curriculum FAQs, checking prerequisite eligibility, and booking human advisor
                      slots directly in CRM.
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-neutral-800 pt-5">
                  <div className="grid grid-cols-3 gap-3 text-center font-mono">
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-[var(--orange)]">82%</div>
                      <div className="text-[10px] uppercase text-neutral-400">Queries Resolved</div>
                    </div>
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-white">&lt;1S</div>
                      <div className="text-[10px] uppercase text-neutral-400">Response Speed</div>
                    </div>
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-white">0%</div>
                      <div className="text-[10px] uppercase text-neutral-400">Hallucinations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI 2: Amazon Invoice Pipeline */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-neutral-800 bg-[#141720] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--orange)] hover:bg-[#1A1E29] hover:shadow-2xl">
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px] bg-[#0E1018]">
                    <Image
                      src="/projects/amazon/website.webp"
                      alt="Amazon Inbound Automation"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-neutral-800 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                      Workflow Pipeline
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>N8N</span> • <span>VISION EXTRACTION</span> • <span>POSTGRESQL</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[26px] uppercase tracking-tight text-white group-hover:text-[var(--orange)] transition-colors">
                      AMAZON ORDER & INVOICE RECONCILIATION
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-neutral-300">
                      Automated high-throughput document parsing workflow extracting line items,
                      tax calculations, and vendor codes from disparate PDF bills with real-time
                      accounting sync.
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-neutral-800 pt-5">
                  <div className="grid grid-cols-3 gap-3 text-center font-mono">
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-[var(--orange)]">70%</div>
                      <div className="text-[10px] uppercase text-neutral-400">Hours Saved</div>
                    </div>
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-white">100%</div>
                      <div className="text-[10px] uppercase text-neutral-400">Data Accuracy</div>
                    </div>
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-white">INSTANT</div>
                      <div className="text-[10px] uppercase text-neutral-400">ERP Sync</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI 3: Zomato Ops */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-neutral-800 bg-[#141720] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--orange)] hover:bg-[#1A1E29] hover:shadow-2xl">
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px] bg-[#0E1018]">
                    <Image
                      src="/projects/zomato/website.webp"
                      alt="Zomato Merchant Ops"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-neutral-800 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                      Operations Automation
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>NODE.JS</span> • <span>REDIS QUEUES</span> • <span>WEBHOOKS</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[26px] uppercase tracking-tight text-white group-hover:text-[var(--orange)] transition-colors">
                      ZOMATO MERCHANT OPS AUTOMATION
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-neutral-300">
                      Event-driven webhook engine orchestrating menu updates, pricing changes, and
                      branch availability alerts across regional kitchen networks.
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-neutral-800 pt-5">
                  <div className="grid grid-cols-3 gap-3 text-center font-mono">
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-[var(--orange)]">15K+</div>
                      <div className="text-[10px] uppercase text-neutral-400">Events / Day</div>
                    </div>
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-white">99.98%</div>
                      <div className="text-[10px] uppercase text-neutral-400">Uptime</div>
                    </div>
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-white">&lt;50MS</div>
                      <div className="text-[10px] uppercase text-neutral-400">Queue Latency</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI 4: Moneyview */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-neutral-800 bg-[#141720] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--orange)] hover:bg-[#1A1E29] hover:shadow-2xl">
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px] bg-[#0E1018]">
                    <Image
                      src="/projects/moneyview/website.webp"
                      alt="Moneyview Underwriting Engine"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-neutral-800 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                      FinTech Underwriting
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>LLM VISION</span> • <span>FASTAPI</span> • <span>SUPABASE VECTOR</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[26px] uppercase tracking-tight text-white group-hover:text-[var(--orange)] transition-colors">
                      MONEYVIEW LOAN DOCUMENT CLASSIFICATION
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-neutral-300">
                      Automated income statement and KYC verification pipeline classifying multi-page
                      financial documents with strict PII masking and verification trails.
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-neutral-800 pt-5">
                  <div className="grid grid-cols-3 gap-3 text-center font-mono">
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-[var(--orange)]">60%</div>
                      <div className="text-[10px] uppercase text-neutral-400">Faster Review</div>
                    </div>
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-white">SECURE</div>
                      <div className="text-[10px] uppercase text-neutral-400">PII Guarded</div>
                    </div>
                    <div className="rounded-[10px] bg-neutral-900/80 p-2.5">
                      <div className="text-[18px] font-bold text-white">100%</div>
                      <div className="text-[10px] uppercase text-neutral-400">Audit Trail</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05. Section 3: Social Media Marketing ────────────────────────── */}
        <section
          id="social-media"
          className="w-full bg-white py-[clamp(50px,5vw,90px)] border-b border-[var(--grey-200)] scroll-mt-36"
        >
          <div className="site-container">
            {/* Section Header */}
            <div className="max-w-[780px] mb-12">
              <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--orange)] mb-3">
                DISCIPLINE 03 — ORGANIC REACH & PAID SOCIAL
              </p>
              <h2
                className="font-anton uppercase leading-[0.96] tracking-[-0.015em] text-[var(--black)]"
                style={{ fontSize: "clamp(28px, 3.4vw, 56px)" }}
              >
                1 CRORE+ VIEWS FOR OUR CLIENTS.
              </h2>
              <p
                className="mt-4 leading-[1.65] text-[var(--grey-600)]"
                style={{ fontSize: "clamp(14.5px, 1.1vw, 18px)" }}
              >
                We produce high-impact short-form video systems, organic viral hooks, and targeted
                Meta and LinkedIn paid advertising campaigns that turn attention into real revenue.
              </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Social 1: Hiranandani */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/hiranandani/instagram.webp"
                      alt="Hiranandani Social Media Campaign"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-[var(--orange)] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      Luxury Real Estate
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-anton text-[20px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      HIRANANDANI DEVELOPERS
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.5] text-[var(--grey-600)]">
                      Architectural walkthrough reels, lifestyle storytelling, and site visit
                      lead ads across Mumbai.
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-[var(--grey-200)] pt-3.5">
                  <div className="text-[12px] font-mono font-bold text-[var(--orange)]">
                    10M+ VIDEO VIEWS • +140% VISITS
                  </div>
                </div>
              </div>

              {/* Social 2: Jason NYC */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/jasonnycrealtor/instagram.webp"
                      alt="Jason NYC Realtor Social"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-[var(--black)]/80 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      Manhattan Real Estate
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-anton text-[20px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      JASON NYC REALTOR
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.5] text-[var(--grey-600)]">
                      High-end penthouse video tours and personal brand positioning commanding high
                      net-worth buyers.
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-[var(--grey-200)] pt-3.5">
                  <div className="text-[12px] font-mono font-bold text-[var(--orange)]">
                    4.2M+ VIEWS • UHNW CLIENTS
                  </div>
                </div>
              </div>

              {/* Social 3: New Fork City */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/new-fork-city/instagram.webp"
                      alt="New Fork City Social Feed"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-[var(--black)]/80 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      Viral Media
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-anton text-[20px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      NEW FORK CITY & CREATORS
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.5] text-[var(--grey-600)]">
                      Fast-paced food cinematography and trend-jacking audio curation delivering
                      record-breaking algorithmic lift.
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-[var(--grey-200)] pt-3.5">
                  <div className="text-[12px] font-mono font-bold text-[var(--orange)]">
                    25M+ COMBINED VIEWS
                  </div>
                </div>
              </div>

              {/* Social 4: Sharma Packagings B2B */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/sharma/desktop.jpg"
                      alt="Sharma Packagings LinkedIn Campaign"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-[var(--black)]/80 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      B2B Thought Leadership
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-anton text-[20px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      SHARMA PACKAGINGS
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.5] text-[var(--grey-600)]">
                      LinkedIn document carousels and technical explainers addressing supply chain
                      pain points for B2B procurement leads.
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-[var(--grey-200)] pt-3.5">
                  <div className="text-[12px] font-mono font-bold text-[var(--orange)]">
                    +350% B2B INQUIRIES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06. Section 4: Video Production & Editing ────────────────────── */}
        <section
          id="video-production"
          className="w-full bg-[#0C0E14] text-white py-[clamp(50px,5vw,90px)] border-b border-neutral-900 scroll-mt-36"
        >
          <div className="site-container">
            {/* Section Header */}
            <div className="max-w-[780px] mb-12">
              <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--orange)] mb-3">
                DISCIPLINE 04 — VIDEO PRODUCTION & POST-PRODUCTION
              </p>
              <h2
                className="font-anton uppercase leading-[0.96] tracking-[-0.015em] text-white"
                style={{ fontSize: "clamp(28px, 3.4vw, 56px)" }}
              >
                CINEMATIC VIDEO BUILT FOR MAXIMUM RETENTION.
              </h2>
              <p
                className="mt-4 leading-[1.65] text-neutral-400"
                style={{ fontSize: "clamp(14.5px, 1.1vw, 18px)" }}
              >
                From on-location 4K cinema camera crews in Mumbai to high-retention post-production
                editing, we produce brand films, commercials, and viral reels that stop the scroll.
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Video 1: Inedible */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-neutral-800 bg-[#141720] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--orange)] hover:bg-[#1A1E29] hover:shadow-2xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0E1018]">
                    <Image
                      src="/projects/inedible/desktop.jpg"
                      alt="Inedible Commercial Shoot"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--orange)] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      Commercial Ad Film
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>SONY FX6</span> • <span>STUDIO LIGHTING</span> • <span>DAVINCI</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-white group-hover:text-[var(--orange)] transition-colors">
                      INEDIBLE COMMERCIAL PRODUCTION
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-neutral-300">
                      Studio commercial shoot with high-speed macro food cinematography, high-CRI
                      lighting rigs, and broadcast-ready color grading.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-neutral-800 pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">4K CINEMA MASTER</span>
                    <span className="text-neutral-400">92% RETENTION</span>
                  </div>
                </div>
              </div>

              {/* Video 2: Factory & Showreel */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-neutral-800 bg-[#141720] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--orange)] hover:bg-[#1A1E29] hover:shadow-2xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0E1018]">
                    <Image
                      src="/video/showreel-poster.jpg"
                      alt="Industrial Showreel Production"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-neutral-800 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                      Corporate & Industrial
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>SONY FX3</span> • <span>DJI RS3 PRO</span> • <span>SENNHEISER</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-white group-hover:text-[var(--orange)] transition-colors">
                      INDUSTRIAL PLANT & BRAND FILM
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-neutral-300">
                      On-location factory walkthrough with gimbal tracking shots, founder interviews,
                      and immersive sound design showcasing large-scale manufacturing.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-neutral-800 pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">MULTI-CAM 4K</span>
                    <span className="text-neutral-400">LICENSED AUDIO</span>
                  </div>
                </div>
              </div>

              {/* Video 3: High Retention Reels */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-neutral-800 bg-[#141720] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--orange)] hover:bg-[#1A1E29] hover:shadow-2xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0E1018]">
                    <Image
                      src="/marketing/bento-editing.jpg"
                      alt="Video Editing Suite"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-neutral-800 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                      Post-Production
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>PREMIERE PRO</span> • <span>AFTER EFFECTS</span> • <span>SFX</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-white group-hover:text-[var(--orange)] transition-colors">
                      HIGH-RETENTION REELS & AD EDITS
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-neutral-300">
                      Pacing optimization, kinetic text overlays, SFX layering, and rapid turnaround
                      engineered to beat social media retention curves.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-neutral-800 pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">TOP 5% RETENTION</span>
                    <span className="text-neutral-400">24-48H TURNAROUND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 07. Section 5: Mobile App Development ────────────────────────── */}
        <section
          id="apps"
          className="w-full bg-white py-[clamp(50px,5vw,90px)] border-b border-[var(--grey-200)] scroll-mt-36"
        >
          <div className="site-container">
            {/* Section Header */}
            <div className="max-w-[780px] mb-12">
              <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--orange)] mb-3">
                DISCIPLINE 05 — MOBILE ENGINEERING
              </p>
              <h2
                className="font-anton uppercase leading-[0.96] tracking-[-0.015em] text-[var(--black)]"
                style={{ fontSize: "clamp(28px, 3.4vw, 56px)" }}
              >
                APPS THAT HELP YOUR BUSINESS SCALE.
              </h2>
              <p
                className="mt-4 leading-[1.65] text-[var(--grey-600)]"
                style={{ fontSize: "clamp(14.5px, 1.1vw, 18px)" }}
              >
                Custom iOS and Android mobile applications built with native performance, offline
                persistence, real-time push notifications, and enterprise cloud backends.
              </p>
            </div>

            {/* Apps Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* App 1: Prepasole */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/prepasole/desktop.jpg"
                      alt="Prepasole Mobile App"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--orange)] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      EdTech Mobile App
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>REACT NATIVE</span> • <span>TYPESCRIPT</span> • <span>NODE.JS</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      PREPASOLE EDTECH APP
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--grey-600)]">
                      Cross-platform test preparation mobile application with offline practice mode,
                      instant question evaluations, and rank prediction algorithms.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--grey-200)] pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">50,000+ DOWNLOADS</span>
                    <span className="text-[var(--grey-600)]">4.8★ APP STORE</span>
                  </div>
                </div>
              </div>

              {/* App 2: Milkvilla */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/milkvilla/playstore.webp"
                      alt="Milkvilla App"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--black)]/80 backdrop-blur-sm px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      Delivery & Logistics
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>FLUTTER</span> • <span>FIREBASE</span> • <span>GOOGLE MAPS</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      MILKVILLA DELIVERY PLATFORM
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--grey-600)]">
                      Daily subscription delivery platform managing recurring milk delivery
                      routes, customer wallet top-ups, and live courier tracking.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--grey-200)] pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">10K+ ACTIVE USERS</span>
                    <span className="text-[var(--grey-600)]">ZERO DROPPED ORDERS</span>
                  </div>
                </div>
              </div>

              {/* App 3: Prime Leather */}
              <div className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0C0E14]">
                    <Image
                      src="/projects/prime-leather/playstore.webp"
                      alt="Prime Leather Mobile Store"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--black)]/80 backdrop-blur-sm px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      E-Commerce Mobile
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <span>REACT NATIVE</span> • <span>SHOPIFY SDK</span> • <span>APPLE PAY</span>
                    </div>
                    <h3 className="mt-2 font-anton text-[24px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      PRIME LEATHER MOBILE STORE
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--grey-600)]">
                      Luxury goods shopping app integrated with Shopify backend, automated push
                      promotions, and biometric 1-tap checkout.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--grey-200)] pt-4">
                  <div className="flex items-center justify-between text-[12px] font-mono">
                    <span className="font-bold text-[var(--orange)]">+65% REPEAT ORDERS</span>
                    <span className="text-[var(--grey-600)]">&lt;1.2S TRANSITIONS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* ── 08. Embedded Conversion Lead Capture ─────────────────────────── */}
          <ServiceBookingForm
            serviceName="Full Multi-Discipline Portfolio"
            headline="READY TO BUILD SOMETHING EXTRAORDINARY?"
            subtext="Tell us what you are trying to design, develop, automate, or produce. We will review your requirements and provide a clear, fixed-scope proposal within 24 hours."
          />
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
}
