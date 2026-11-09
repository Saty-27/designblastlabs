"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Globe, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCapabilities from "@/components/services/ServiceCapabilities";
import ServiceComparison from "@/components/services/ServiceComparison";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTechStack from "@/components/services/ServiceTechStack";
import ServiceProjects from "@/components/services/ServiceProjects";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceBookingForm from "@/components/services/ServiceBookingForm";
import ServiceRelated from "@/components/services/ServiceRelated";
import { Service } from "@/lib/seo/services";
import { serviceDetail } from "@/lib/seo/serviceDetail";
import { projects } from "@/lib/projects";
import { BRAND, abs } from "@/lib/seo/site";
import { cities } from "@/lib/seo/cities";

export interface GeneralServiceViewProps {
  service: Service;
}

export default function GeneralServiceView({ service }: GeneralServiceViewProps) {
  const detail = serviceDetail[service.slug];
  const relevantProjects = (detail?.projectIds ?? [])
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const fallbackProjects =
    relevantProjects.length > 0
      ? relevantProjects
      : projects.filter((p) => p.tags.includes(service.workFilter)).slice(0, 4);

  const related = service.related
    .map((slug) => serviceDetail[slug] ? { slug, name: slug.replace(/-/g, " ").toUpperCase(), promise: "Integrated growth service" } : null)
    .filter(Boolean);

  // Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} Services`,
    description: service.metaDescription || service.promise,
    provider: {
      "@type": "Organization",
      name: BRAND,
      url: abs("/"),
      logo: abs("/brand/logo.svg"),
      address: {
        "@type": "PostalAddress",
        streetAddress: "13/101, Design Blast, Anand Nagar, Santacruz East",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400055",
        addressCountry: "IN",
      },
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: c.name,
    })),
    url: abs(`/${service.slug}`),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: abs("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: abs("/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${service.name} Services`,
        item: abs(`/${service.slug}`),
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[var(--black)] selection:bg-[var(--orange)] selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      <main className="flex-1">
        {/* ── 01. Bespoke Service Hero with Single H1 ───────────────────────── */}
        <ServiceHero
          eyebrow={service.eyebrow || `${service.name.toUpperCase()} SERVICES`}
          title={service.h1Title || `${service.name.toUpperCase()} SERVICES`}
          description={service.promise}
          visualImage={service.heroImage || "/assets/services/website-development.webp"}
          visualAlt={service.heroAlt || `${service.name} showcase`}
          floatingBadge={service.floatingBadge}
          trustBadges={service.trustBadges}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: `${service.name}` },
          ]}
        />

        {/* ── 02. In-Depth Editorial Context (Why It Matters) ─────────────── */}
        <section className="w-full bg-white py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
          <div className="site-container">
            <div className="max-w-[800px]">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                OVERVIEW & BUSINESS PROBLEM
              </span>
              <h2
                className="mt-2.5 font-anton uppercase leading-[0.96] tracking-tight text-[var(--black)]"
                style={{ fontSize: "clamp(26px, 2.8vw, 48px)" }}
              >
                WHY THIS MATTERS FOR YOUR GROWTH.
              </h2>

              <div className="mt-6 space-y-5 text-[15px] sm:text-[16px] leading-[1.75] text-[var(--grey-600)]">
                {service.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Extra In-Depth Sections if present */}
            {detail?.sections && detail.sections.length > 0 && (
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 border-t border-[var(--grey-200)] pt-10">
                {detail.sections.map((sec) => (
                  <div
                    key={sec.heading}
                    className="rounded-[18px] border border-[var(--grey-200)] bg-[#FAFAFA] p-6 sm:p-7"
                  >
                    <h3 className="font-anton text-[20px] uppercase text-[var(--black)]">
                      {sec.heading}
                    </h3>
                    <div className="mt-4 space-y-3 text-[14px] leading-[1.65] text-[var(--grey-600)]">
                      {sec.paragraphs.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── 03. Capabilities Grid ────────────────────────────────────────── */}
        {service.capabilities && service.capabilities.length > 0 && (
          <ServiceCapabilities
            title={`WHAT WE DELIVER IN ${service.shortName.toUpperCase()}.`}
            subtitle="Specific capabilities and technical deliverables engineered for measurable commercial outcomes."
            items={service.capabilities}
          />
        )}

        {/* ── 04. Execution Comparison ("DBL vs Others") ───────────────────── */}
        {service.comparisonPoints && service.comparisonPoints.length > 0 && (
          <ServiceComparison
            title="HOW OUR EXECUTION CONTRASTS WITH TYPICAL AGENCIES."
            subtitle="Why our engineering standards, direct access, and transparent pricing stand apart."
            points={service.comparisonPoints}
          />
        )}

        {/* ── 05. Structured Methodology / Process ─────────────────────────── */}
        {service.processSteps && service.processSteps.length > 0 && (
          <ServiceProcess
            title={`OUR ${service.shortName.toUpperCase()} PROCESS.`}
            subtitle="From initial brief to final delivery and ongoing scaling, every stage has defined milestones."
            steps={service.processSteps}
          />
        )}

        {/* ── 06. Production Technology Arsenal ────────────────────────────── */}
        {service.techStack && service.techStack.length > 0 && (
          <ServiceTechStack
            title={`TECHNOLOGIES & TOOLS WE USE FOR ${service.shortName.toUpperCase()}.`}
            subtitle="Production-grade frameworks, cameras, and automation platforms proven in live commercial environments."
            tools={service.techStack}
          />
        )}

        {/* ── 07. Real Client Projects Showcase ────────────────────────────── */}
        <ServiceProjects
          title={`RELEVANT ${service.shortName.toUpperCase()} WORK.`}
          subtitle="Explore client implementations where this discipline was delivered."
          projects={fallbackProjects}
        />

        {/* ── 08. Tangible Business Outcomes ───────────────────────────────── */}
        {service.outcomes && service.outcomes.length > 0 && (
          <section className="w-full bg-[#0C0E14] text-white py-[clamp(44px,4vw,76px)] border-b border-neutral-900">
            <div className="site-container">
              <div className="max-w-[760px]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                  COMMERCIAL IMPACT
                </span>
                <h2
                  className="mt-2.5 font-anton uppercase leading-[0.96] tracking-[-0.015em] text-white"
                  style={{ fontSize: "clamp(26px, 2.8vw, 48px)" }}
                >
                  WHAT YOU WALK AWAY WITH.
                </h2>
                <p className="mt-3 text-[14.5px] text-neutral-400">
                  Every engagement is evaluated against concrete business deliverables:
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-3 rounded-[14px] border border-neutral-800 bg-[#141720] p-4.5"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--orange)] text-white">
                      <Check strokeWidth={3} className="h-3 w-3" />
                    </span>
                    <span className="text-[14.5px] font-medium leading-[1.5] text-white">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 09. Frequently Asked Questions ───────────────────────────────── */}
        <ServiceFaq
          title={`FREQUENTLY ASKED QUESTIONS ABOUT ${service.shortName.toUpperCase()}.`}
          subtitle="Direct, transparent answers regarding timelines, budgets, deliverables and revisions."
          faqs={service.faqs}
        />

        {/* ── 10. Local Geographic Sub-Hubs Cross-Linking (Task 8) ──────────── */}
        <section className="w-full bg-white py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
          <div className="site-container">
            <div className="max-w-[760px] mb-8">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                REGIONAL DELIVERY HUBS
              </span>
              <h2
                className="mt-2 font-anton uppercase leading-none text-[var(--black)]"
                style={{ fontSize: "clamp(24px, 2.6vw, 42px)" }}
              >
                {service.name.toUpperCase()} BY LOCATION
              </h2>
              <p className="mt-3 text-[14.5px] text-[var(--grey-600)]">
                We provide dedicated regional execution tailored to local market dynamics in Mumbai and New York:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Mumbai Hub Card */}
              <Link
                href={`/${service.slug}-in-mumbai`}
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      <MapPin className="h-3.5 w-3.5" /> Mumbai Headquarters
                    </span>
                    <span className="rounded-full bg-orange-100 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-[var(--orange)]">
                      In-Person Available
                    </span>
                  </div>
                  <h3 className="mt-4 font-anton text-[22px] uppercase text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                    {service.name} Company in Mumbai
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[var(--grey-600)]">
                    Local on-site strategy, Santacruz East office, and execution across Bandra, BKC, Lower Parel, and Andheri.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 border-t border-[var(--grey-200)] pt-4 text-[12px] font-bold uppercase tracking-wider text-[var(--orange)]">
                  <span>Explore Mumbai Specifications</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>

              {/* New York Hub Card */}
              <Link
                href={`/${service.slug}-in-new-york`}
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--grey-200)] bg-[#FAFAFA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-blue-600">
                      <Globe className="h-3.5 w-3.5" /> New York Market
                    </span>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-blue-700">
                      ET Morning Overlap
                    </span>
                  </div>
                  <h3 className="mt-4 font-anton text-[22px] uppercase text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                    {service.name} Company in New York
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[var(--grey-600)]">
                    US-focused execution, overnight sprint completion, USD billing, and competitive borough targeting across Manhattan and Brooklyn.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 border-t border-[var(--grey-200)] pt-4 text-[12px] font-bold uppercase tracking-wider text-[var(--orange)]">
                  <span>Explore New York Specifications</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. Cross-Discipline Related Services (Flat URLs) ──────────────── */}
        <ServiceRelated
          currentSlug={service.slug}
          services={cities[0] ? Object.keys(cities[0].serviceAngles).map((slug) => ({
            name: slug.replace(/-/g, " ").toUpperCase(),
            slug: slug,
            promise: "Integrated digital and creative execution",
          })) : []}
        />

        {/* ── 12. Direct Embedded Consultation Booking Form ────────────────── */}
        <ServiceBookingForm
          serviceName={service.name}
          headline={`READY TO SCALE YOUR ${service.shortName.toUpperCase()}?`}
          subtext={`Book a free 20-minute consultation with our lead team. We will analyze your goals, outline feasibility, and provide a transparent, fixed-scope quote.`}
        />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
