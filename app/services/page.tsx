import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Monitor,
  Search,
  Share2,
  Smartphone,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BookCallButton from "@/components/BookCallButton";
import ServiceBookingForm from "@/components/services/ServiceBookingForm";
import { BRAND, abs } from "@/lib/seo/site";
import { cities } from "@/lib/seo/cities";

export const metadata: Metadata = {
  title: `Services — Websites, AI Automation, Social Media & Video Production | ${BRAND}`,
  description:
    "Explore Design Blast Labs' integrated services: custom website development, AI automation agents, social media marketing, professional video editing, and cinema video production in Mumbai.",
  alternates: { canonical: abs("/services") },
  openGraph: {
    title: `Our Services | ${BRAND}`,
    description:
      "Integrated digital growth, technology, and creative production services built for real commercial outcomes.",
    url: abs("/services"),
  },
};

const featuredServices = [
  {
    number: "01",
    slug: "website-development",
    name: "Website Development",
    eyebrow: "PRIORITY 01 — WEB SYSTEMS",
    heading: "WEBSITES THAT GROW REVENUE 5X.",
    description:
      "Custom-coded Next.js, React and e-commerce websites built to render in under two seconds, communicate your value clearly, and turn visitors into qualified commercial enquiries.",
    capabilities: [
      "Custom Next.js & React Frontend Architecture",
      "High-Converting Shopify & Headless E-Commerce",
      "Core Web Vitals Optimization (<2s Mobile Data)",
      "Technical SEO & Structured Schema Foundations",
    ],
    industries: "B2B Manufacturing, Industrial Suppliers, Consultancies & Modern E-Commerce",
    image: "/assets/services/website-development.webp",
    imageAlt: "Custom corporate website development preview",
    theme: "light",
    href: "/website-development",
    ctaText: "Explore Website Development →",
  },
  {
    number: "02",
    slug: "ai-automation",
    name: "AI Automation & AI Agents",
    eyebrow: "PRIORITY 02 — INTELLIGENT SYSTEMS",
    heading: "AI AGENTS THAT MAKE YOUR TEAM 70% FASTER.",
    description:
      "Autonomous AI agents, WhatsApp sales workflows, and CRM automations that eliminate manual tasks, qualify inbound leads instantly, and save your staff hours every week.",
    capabilities: [
      "Autonomous LLM Agents with Tool-Use & Database Access",
      "WhatsApp Cloud API Inbound Sales & Support Assistants",
      "Automated Invoice & Document OCR Extraction Pipelines",
      "Private RAG Knowledge Bases for Internal SOPs",
    ],
    industries: "Operations, Real Estate, Logistics & High-Volume Sales Teams",
    image: "/assets/services/ai-agents.webp",
    imageAlt: "AI agent workflow automation dashboard",
    theme: "dark",
    href: "/ai-automation",
    ctaText: "Explore AI Automation & Agents →",
  },
  {
    number: "03",
    slug: "social-media-management",
    name: "Social Media Marketing",
    eyebrow: "PRIORITY 03 — ATTENTION ENGINES",
    heading: "TURN ATTENTION INTO BUSINESS REVENUE.",
    description:
      "Full-service social media strategy, short-form Reels production, executive LinkedIn branding, and monthly editorial calendars designed around business results rather than vanity metrics.",
    capabilities: [
      "Viral Short-Form Reels Scripting, Shooting & Post",
      "B2B LinkedIn Executive & Founder Thought Leadership",
      "High-Converting Monthly Content Calendars & Design",
      "Direct Message (DM) Lead Capture & Automation",
    ],
    industries: "B2B Enterprises, Real Estate Developers, D2C Brands & Founders",
    image: "/assets/services/social-media-marketing.webp",
    imageAlt: "Social media marketing Reels content feed",
    theme: "light",
    href: "/social-media-management",
    ctaText: "Explore Social Media Marketing →",
  },
  {
    number: "04",
    slug: "video-editing",
    name: "Video Editing & Post-Production",
    eyebrow: "PRIORITY 04 — POST-PRODUCTION SUITE",
    heading: "EVERY FRAME SHOULD HAVE A PURPOSE.",
    description:
      "High-retention video editing, dynamic kinetic typography, DaVinci Resolve color grading, sound design, and multi-format exports for Reels, YouTube, and commercial video ads.",
    capabilities: [
      "Instagram Reels & YouTube Shorts Hook-Pacing Cuts",
      "Long-Form YouTube Video & Podcast Multi-Cam Assembly",
      "DaVinci Resolve Broadcast Color Grading & Skin Balancing",
      "Sound Design, Audio Noise Removal & Licensed Music",
    ],
    industries: "Content Creators, Brand Media Teams & Paid Social Advertisers",
    image: "/marketing/bento-editing.jpg",
    imageAlt: "Professional video editing and color grading timeline",
    theme: "dark",
    href: "/video-editing",
    ctaText: "Explore Video Editing Services →",
  },
  {
    number: "05",
    slug: "video-production",
    name: "Video Production Company",
    eyebrow: "PRIORITY 05 — CINEMA PRODUCTION",
    heading: "BUSINESS STORIES TURNED INTO VISUAL EXPERIENCES.",
    description:
      "Turnkey commercial video production across Mumbai: concept development, scriptwriting, professional camera crew, Sony cinema camera gear, studio lighting, and on-location filming.",
    capabilities: [
      "Corporate Brand Films & Executive Company Profiles",
      "Industrial Plant, Factory Floor & Facility Filming",
      "Studio Commercial Tabletop Product Shoots",
      "Full Camera Crew, Gaffer, Audio & 4K Cinema Gear",
    ],
    industries: "Industrial Plants, Corporate Head Offices & Commercial Brands",
    image: "/marketing/bento-filmcrew.jpg",
    imageAlt: "Cinema camera crew on set for corporate video production",
    theme: "light",
    href: "/video-production",
    ctaText: "Explore Video Production →",
  },
];

const secondaryServices = [
  {
    title: "App Development",
    slug: "app-development",
    icon: Smartphone,
    promise:
      "Cross-platform iOS and Android mobile apps built on React Native and Flutter with lean footprints and store approval guarantees.",
    tag: "Mobile Systems",
  },
  {
    title: "Search Engine Optimisation",
    slug: "seo",
    icon: Search,
    promise:
      "Technical audits, commercial keyword clustering, on-page entity optimization, and local Mumbai Google Map Pack dominance.",
    tag: "Organic Growth",
  },
  {
    title: "Google Ads & Performance PPC",
    slug: "google-ads",
    icon: Zap,
    promise:
      "High-intent search advertising focused on qualified cost-per-enquiry, match-type discipline, and landing page conversion tracking.",
    tag: "Paid Acquisition",
  },
  {
    title: "AEO — AI Search Optimisation",
    slug: "aeo",
    icon: Sparkles,
    promise:
      "Getting your brand cited and recommended by ChatGPT, Google AI Overviews, Perplexity and Gemini when buyers ask for category leaders.",
    tag: "Generative Search",
  },
  {
    title: "Digital Marketing Integration",
    slug: "digital-marketing",
    icon: Layers,
    promise:
      "Search, social and paid media managed as one unified acquisition system, lowering your blended customer acquisition costs.",
    tag: "Full-Funnel Growth",
  },
  {
    title: "Instagram Marketing",
    slug: "instagram-marketing",
    icon: Share2,
    promise:
      "Reels, multi-slide carousels, and bio optimization that stop the scroll and build durable organic brand equity.",
    tag: "Visual Culture",
  },
  {
    title: "Facebook & Meta Ads",
    slug: "facebook-marketing",
    icon: Monitor,
    promise:
      "Advantage+ creative testing funnels that reach suburban and family decision-makers across Mumbai and India.",
    tag: "Paid Social",
  },
  {
    title: "LinkedIn Executive Marketing",
    slug: "linkedin-marketing",
    icon: Cpu,
    promise:
      "B2B positioning and founder thought leadership that starts high-trust conversations with enterprise decision makers.",
    tag: "B2B Authority",
  },
];

export default function ServicesIndexPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[var(--black)] selection:bg-[var(--orange)] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* ── 01. Flagship Hero ────────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden border-b border-[var(--grey-200)] bg-white pb-[clamp(50px,5vw,90px)] pt-[clamp(36px,3.5vw,64px)]">
          {/* Subtle warm glow in top-right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[15%] top-0 h-[450px] w-[500px] rounded-full opacity-40 blur-[130px]"
            style={{
              background: "radial-gradient(circle, rgba(255,79,23,0.2) 0%, transparent 70%)",
            }}
          />

          <div className="site-container relative">
            {/* Breadcrumb Trail */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-[12.5px] font-medium text-[var(--grey-600)]">
                <li>
                  <Link href="/" className="hover:text-[var(--orange)] transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-[var(--grey-400)]">/</li>
                <li className="font-semibold text-[var(--black)]">Services</li>
              </ol>
            </nav>

            <div className="max-w-[980px]">
              <h1
                className="font-anton uppercase leading-[0.92] tracking-[-0.02em] text-[var(--black)]"
                style={{ fontSize: "clamp(36px, 5.2vw, 84px)" }}
              >
                DIGITAL GROWTH. CREATIVE EXECUTION.{" "}
                <span className="text-[var(--orange)]">INTELLIGENT TECHNOLOGY.</span>
              </h1>

              <p
                className="mt-6 max-w-[66ch] leading-[1.68] text-[var(--grey-600)]"
                style={{ fontSize: "clamp(16px, 1.2vw, 21px)" }}
              >
                From custom website development and AI-powered business automation to social media
                marketing and professional video production, Design Blast Labs brings the
                capabilities businesses need to build, market and scale in the digital world.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BookCallButton className="group inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-8 py-4 text-[12.5px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_22px_-6px_rgba(255,79,23,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5420F]">
                  BOOK A FREE CALL
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </BookCallButton>

                <Link
                  href="/work"
                  className="inline-flex items-center rounded-full border border-[var(--black)] bg-white px-7 py-4 text-[12.5px] font-bold uppercase tracking-[0.1em] text-[var(--black)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--black)] hover:text-white"
                >
                  EXPLORE OUR WORK
                </Link>
              </div>

              {/* Fast Trust Indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--grey-200)] pt-6 text-[13px] font-medium text-[var(--grey-600)]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--orange)]" /> Headquartered in Santacruz, Mumbai
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--orange)]" /> Direct Practitioner Access (No Middlemen)
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--orange)]" /> 100% Code & Asset Ownership
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. The 5 Featured Priority Services (Alternating Editorial) ── */}
        <section className="w-full bg-white py-[clamp(50px,5vw,90px)] border-b border-[var(--grey-200)]">
          <div className="site-container">
            <div className="max-w-[760px] mb-12">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                CORE DISCIPLINES
              </span>
              <h2
                className="mt-2.5 font-anton uppercase leading-[0.96] tracking-[-0.015em] text-[var(--black)]"
                style={{ fontSize: "clamp(30px, 3.6vw, 60px)" }}
              >
                THE FIVE ENGINES THAT GROW BUSINESSES.
              </h2>
              <p
                className="mt-3.5 leading-[1.65] text-[var(--grey-600)]"
                style={{ fontSize: "clamp(14.5px, 1.05vw, 18px)" }}
              >
                These five areas represent our primary engineering, creative, and automation
                capacities. Each is managed in-house by dedicated specialists with zero outsourced
                compromise.
              </p>
            </div>

            {/* Alternating Featured Service Blocks */}
            <div className="space-y-12">
              {featuredServices.map((svc, idx) => {
                const isDark = svc.theme === "dark";
                const isEven = idx % 2 === 1;

                return (
                  <div
                    key={svc.slug}
                    className={`group relative overflow-hidden rounded-[24px] border transition-all duration-300 hover:shadow-2xl ${
                      isDark
                        ? "border-neutral-800 bg-[#0C0E14] text-white"
                        : "border-[var(--grey-200)] bg-[#FAFAFA] text-[var(--black)]"
                    }`}
                  >
                    <div
                      className={`grid grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 ${
                        isEven ? "lg:grid-cols-[0.9fr_1.1fr]" : ""
                      }`}
                    >
                      {/* Copy Column */}
                      <div className={isEven ? "lg:order-2" : ""}>
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-anton text-[26px] leading-none ${
                              isDark ? "text-[var(--orange)]" : "text-[var(--orange)]"
                            }`}
                          >
                            {svc.number}
                          </span>
                          <span
                            className={`font-mono text-[11px] font-bold uppercase tracking-widest ${
                              isDark ? "text-neutral-400" : "text-neutral-500"
                            }`}
                          >
                            {svc.eyebrow}
                          </span>
                        </div>

                        <h3
                          className={`mt-3 font-anton uppercase leading-[0.98] tracking-tight ${
                            isDark ? "text-white" : "text-[var(--black)]"
                          }`}
                          style={{ fontSize: "clamp(26px, 2.6vw, 44px)" }}
                        >
                          {svc.heading}
                        </h3>

                        <p
                          className={`mt-4 leading-[1.65] ${
                            isDark ? "text-neutral-300" : "text-[var(--grey-600)]"
                          }`}
                          style={{ fontSize: "clamp(14px, 1vw, 17px)" }}
                        >
                          {svc.description}
                        </p>

                        {/* Capabilities Pills */}
                        <div className="mt-6 border-t border-current/10 pt-5">
                          <p
                            className={`font-mono text-[11px] font-bold uppercase tracking-wider mb-3 ${
                              isDark ? "text-neutral-400" : "text-neutral-500"
                            }`}
                          >
                            Key Capabilities Included:
                          </p>
                          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                            {svc.capabilities.map((cap) => (
                              <li
                                key={cap}
                                className={`flex items-start gap-2 text-[13px] font-medium leading-[1.4] ${
                                  isDark ? "text-neutral-200" : "text-[var(--black)]"
                                }`}
                              >
                                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--orange)]" />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Industries note */}
                        <div className="mt-5 text-[12.5px] font-medium">
                          <span className={isDark ? "text-neutral-400" : "text-neutral-500"}>
                            Best Suited For:{" "}
                          </span>
                          <span className={isDark ? "text-white" : "text-[var(--black)] font-bold"}>
                            {svc.industries}
                          </span>
                        </div>

                        {/* Action Link */}
                        <div className="mt-8">
                          <Link
                            href={svc.href}
                            className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                              isDark
                                ? "bg-[var(--orange)] text-white hover:bg-[#E5420F]"
                                : "bg-[var(--black)] text-white hover:bg-[var(--orange)]"
                            }`}
                          >
                            {svc.ctaText}
                          </Link>
                        </div>
                      </div>

                      {/* Image Visual Column */}
                      <div className={isEven ? "lg:order-1" : ""}>
                        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[16px] border border-current/10 bg-neutral-900 shadow-xl">
                          <Image
                            src={svc.image}
                            alt={svc.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 92vw, 45vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 03. Additional Specialist Disciplines Grid ───────────────────── */}
        <section className="w-full bg-[#FAFAFA] py-[clamp(50px,5vw,90px)] border-b border-[var(--grey-200)]">
          <div className="site-container">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="max-w-[760px]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                  EXPANDED CAPABILITIES
                </span>
                <h2
                  className="mt-2.5 font-anton uppercase leading-[0.96] tracking-[-0.015em] text-[var(--black)]"
                  style={{ fontSize: "clamp(30px, 3.6vw, 60px)" }}
                >
                  SPECIALIST GROWTH SERVICES.
                </h2>
                <p
                  className="mt-3.5 leading-[1.65] text-[var(--grey-600)]"
                  style={{ fontSize: "clamp(14.5px, 1.05vw, 18px)" }}
                >
                  Complementary performance disciplines that integrate directly with our core
                  development and video production engines.
                </p>
              </div>

              <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-neutral-400">
                8 Specialized Systems
              </span>
            </div>

            {/* 3-Column Bento Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {secondaryServices.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="group flex flex-col justify-between rounded-[18px] border border-[var(--grey-200)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-[var(--orange)] group-hover:bg-[var(--orange)] group-hover:text-white transition-colors">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--orange)]">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="mt-5 font-anton text-[21px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[var(--grey-600)]">
                        {item.promise}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 pt-4 border-t border-[var(--grey-200)] text-[12px] font-bold uppercase tracking-wider text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      <span>View Specifications</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 04. "Not Sure Which Service You Need?" Section ────────────────── */}
        <section className="w-full bg-[#0C0E14] text-white py-[clamp(50px,5vw,90px)] border-b border-neutral-900">
          <div className="site-container">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                  INTEGRATED ARCHITECTURE
                </span>

                <h2
                  className="mt-3 font-anton uppercase leading-[0.96] tracking-[-0.015em] text-white"
                  style={{ fontSize: "clamp(30px, 3.6vw, 60px)" }}
                >
                  NOT SURE WHICH SERVICE YOUR BUSINESS NEEDS?
                </h2>

                <p
                  className="mt-5 max-w-[56ch] leading-[1.68] text-neutral-300"
                  style={{ fontSize: "clamp(15px, 1.1vw, 19px)" }}
                >
                  Most companies do not need all twelve services on day one. Many of our strongest
                  client relationships begin with a single focused priority — such as a modern
                  website rebuild or a high-yield video shoot — and expand into automation and paid
                  growth once the first engine produces cash flow.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--orange)] text-white">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-[14px] text-neutral-300">
                      <strong className="text-white">Standalone Projects:</strong> Need only an
                      AI agent, a video shoot, or a website overhaul? We execute discrete scopes
                      with clean milestone deliverables.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--orange)] text-white">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-[14px] text-neutral-300">
                      <strong className="text-white">Unified Growth Systems:</strong> Combine web
                      engineering, video production, and AI lead qualification under one team to
                      eliminate handoff delays.
                    </p>
                  </div>
                </div>

                <div className="mt-9">
                  <BookCallButton className="group inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-8 py-4 text-[12.5px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-[#E5420F]">
                    GET AN HONEST FEASIBILITY OPINION
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </BookCallButton>
                </div>
              </div>

              {/* Geographic Footprint Cards */}
              <div className="rounded-[22px] border border-neutral-800 bg-[#12151E] p-6 sm:p-8">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                  OFFICES & PRODUCTION HUBS
                </span>
                <h3 className="mt-2 font-anton text-[24px] uppercase text-white">
                  WHERE WE OPERATE
                </h3>
                <p className="mt-2 text-[13.5px] text-neutral-400">
                  Headquartered in Mumbai with active production capabilities and client accounts
                  across major economic centers:
                </p>

                <div className="mt-6 space-y-3">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}`}
                      className="group flex items-center justify-between rounded-[12px] border border-neutral-800 bg-neutral-900/60 p-4 transition-all hover:border-[var(--orange)] hover:bg-neutral-800/80"
                    >
                      <div>
                        <span className="block font-anton text-[18px] uppercase text-white group-hover:text-[var(--orange)] transition-colors">
                          {city.name} Office
                        </span>
                        <span className="text-[12px] text-neutral-400">{city.lede}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-[var(--orange)] transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05. Direct Project Inquiry Form ──────────────────────────────── */}
        <ServiceBookingForm
          serviceName="Full Digital System"
          headline="READY TO SCALE YOUR BUSINESS?"
          subtext="Tell us what you are trying to build, automate, or market. We will analyze your requirements and follow up with a clear, fixed-scope proposal."
        />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
