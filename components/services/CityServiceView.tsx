"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  Globe,
  Star,
  Quote,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
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
import { Service } from "@/lib/seo/services";
import { City } from "@/lib/seo/cities";
import { serviceDetail } from "@/lib/seo/serviceDetail";
import { projects } from "@/lib/projects";
import { BRAND, abs } from "@/lib/seo/site";
import { getLocalTestimonials, getLocalFaqs } from "@/lib/seo/cityServiceData";

export interface CityServiceViewProps {
  service: Service;
  city: City;
  otherCity: City;
}

export default function CityServiceView({ service, city, otherCity }: CityServiceViewProps) {
  const detail = serviceDetail[service.slug];
  const relevantProjects = (detail?.projectIds ?? [])
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const fallbackProjects =
    relevantProjects.length > 0
      ? relevantProjects
      : projects.filter((p) => p.tags.includes(service.workFilter)).slice(0, 4);

  const localTestimonials = getLocalTestimonials(city.slug);
  const localFaqs = getLocalFaqs(city.slug, service.name, service.slug);
  const localAngle = city.serviceAngles[service.slug] || service.body[0];

  // Combine local FAQs with service general FAQs
  const allFaqs = [...localFaqs, ...service.faqs];

  // Self-referencing URL
  const canonicalUrl = abs(`/${service.slug}-in-${city.slug}`);
  const generalUrl = abs(`/${service.slug}`);
  const otherCityUrl = abs(`/${service.slug}-in-${otherCity.slug}`);
  const cityHubUrl = abs(`/${city.slug}`);

  // Structured Data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${BRAND} — ${service.name} Company in ${city.name}`,
    description: `${service.name} services for ${city.name} businesses. ${localAngle}`,
    url: canonicalUrl,
    telephone: city.slug === "mumbai" ? "+91-98200-00000" : "+1-212-000-0000",
    priceRange: "$$",
    address:
      city.slug === "mumbai"
        ? {
            "@type": "PostalAddress",
            streetAddress: "13/101, Design Blast, Anand Nagar, Santacruz East",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400055",
            addressCountry: "IN",
          }
        : {
            "@type": "PostalAddress",
            streetAddress: "Design Blast Labs NYC Client Services",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10001",
            addressCountry: "US",
          },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    serviceArea: city.areas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, ${city.name}`,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} Company in ${city.name}`,
    description: service.promise,
    provider: {
      "@type": "Organization",
      name: BRAND,
      url: abs("/"),
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    url: canonicalUrl,
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
        name: `${city.name} Digital Agency`,
        item: cityHubUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${service.name} Company in ${city.name}`,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
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
          __html: JSON.stringify([localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      <main className="flex-1">
        {/* ── 01. Bespoke Hero with Single H1 ─────────────────────────────── */}
        <ServiceHero
          eyebrow={`${city.name.toUpperCase()} REGIONAL PRACTICE · ${service.shortName.toUpperCase()}`}
          title={`${service.name.toUpperCase()} COMPANY IN ${city.name.toUpperCase()}`}
          description={`${localAngle} Dedicated execution engineered for ${city.name} commercial standards.`}
          visualImage={service.heroImage || "/assets/services/website-development.webp"}
          visualAlt={`${service.name} in ${city.name}`}
          floatingBadge={
            city.slug === "mumbai"
              ? { title: "MUMBAI HQ", subtitle: "In-Person Kickoffs & Strategy" }
              : { title: "NYC HYBRID", subtitle: "US Eastern Time Mornings Overlap" }
          }
          trustBadges={[
            { value: city.slug === "mumbai" ? "Mumbai Studio" : "US ET Overlap", label: "Regional Team" },
            { value: "100%", label: "Client Retention" },
            { value: "Fixed-Scope", label: "Transparent Proposals" },
            { value: "<1.2s", label: "Interaction Latency" },
          ]}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: city.name, href: `/${city.slug}` },
            { label: `${service.name} in ${city.name}` },
          ]}
        />

        {/* ── 02. Unique Local Angle & Local Market Reality (Task 7) ──────── */}
        <section className="w-full bg-white py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
          <div className="site-container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                  LOCAL MARKET STRATEGY · {city.name.toUpperCase()}
                </span>
                <h2
                  className="mt-2 font-anton uppercase leading-[0.96] tracking-tight text-[var(--black)]"
                  style={{ fontSize: "clamp(26px, 2.8vw, 48px)" }}
                >
                  HOW {service.shortName.toUpperCase()} ACTUALLY WINS IN {city.name.toUpperCase()}.
                </h2>

                <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] leading-[1.75] text-[var(--grey-600)]">
                  <p className="font-medium text-[var(--black)] bg-orange-50/60 border-l-4 border-[var(--orange)] p-4 rounded-r-lg">
                    {localAngle}
                  </p>
                  {service.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Local Area Serving Matrix */}
              <div className="lg:col-span-5 rounded-[22px] border border-[var(--grey-200)] bg-[#FAFAFA] p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[var(--orange)]" />
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--black)]">
                    Local Areas Served Across {city.name}
                  </span>
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--grey-600)]">
                  We deploy campaigns, shoot productions, and onboard enterprise clients throughout:
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {city.areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-[var(--grey-300)] bg-white px-3 py-1.5 text-[12.5px] font-semibold text-[var(--grey-700)] shadow-xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-[var(--grey-200)] pt-5">
                  <div className="flex items-center gap-2 text-[12.5px] font-mono uppercase text-[var(--grey-500)]">
                    <Clock className="h-4 w-4 text-[var(--orange)]" />
                    <span>Availability & SLA</span>
                  </div>
                  <p className="mt-1 text-[13.5px] font-medium text-[var(--black)]">
                    {city.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. Unique Local Client Testimonials (Task 7) ────────────────── */}
        <section className="w-full bg-[#0E1018] py-[clamp(44px,4.5vw,80px)] text-white border-b border-neutral-900">
          <div className="site-container">
            <div className="max-w-[760px]">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                VERIFIED LOCAL PERFORMANCE
              </span>
              <h2
                className="mt-2.5 font-anton uppercase leading-[0.96] text-white"
                style={{ fontSize: "clamp(26px, 2.8vw, 48px)" }}
              >
                PROVEN RESULTS FOR {city.name.toUpperCase()} CLIENTS.
              </h2>
              <p className="mt-3 text-[14.5px] text-neutral-400">
                Real brands, real commercial metrics, and verified feedback from businesses operating in the {city.name} ecosystem:
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {localTestimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-[20px] border border-neutral-800 bg-[#141722] p-6.5 transition-all duration-300 hover:border-[var(--orange)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-[var(--orange)]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                        {t.neighborhood}
                      </span>
                    </div>

                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="font-anton text-[34px] leading-none text-[var(--orange)]">
                        {t.metric}
                      </span>
                      <span className="font-mono text-[11px] uppercase text-neutral-400">
                        {t.metricLabel}
                      </span>
                    </div>

                    <p className="mt-4 text-[14px] leading-[1.65] text-neutral-300 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-neutral-800 pt-4">
                    <p className="font-anton text-[16px] uppercase tracking-wide text-white">
                      {t.clientName}
                    </p>
                    <p className="font-mono text-[11px] uppercase text-neutral-400">
                      {t.industry}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04. Capabilities Grid ────────────────────────────────────────── */}
        {service.capabilities && service.capabilities.length > 0 && (
          <ServiceCapabilities
            title={`${service.shortName.toUpperCase()} CAPABILITIES FOR ${city.name.toUpperCase()}.`}
            subtitle={`Engineered deliverables calibrated to the competitive standards of ${city.name}.`}
            items={service.capabilities}
          />
        )}

        {/* ── 05. Execution Comparison ("DBL vs Typical Agencies") ─────────── */}
        {service.comparisonPoints && service.comparisonPoints.length > 0 && (
          <ServiceComparison
            title={`WHY ${city.name.toUpperCase()} BRANDS CHOOSE DESIGN BLAST LABS.`}
            subtitle="How our technical precision, engineering depth, and transparent pricing compare to regional vendors."
            points={service.comparisonPoints}
          />
        )}

        {/* ── 06. Structured Process ───────────────────────────────────────── */}
        {service.processSteps && service.processSteps.length > 0 && (
          <ServiceProcess
            title={`OUR ${city.name.toUpperCase()} SPRINT WORKFLOW.`}
            subtitle="Transparent milestones from discovery to production deployment."
            steps={service.processSteps}
          />
        )}

        {/* ── 07. Production Tech Stack ────────────────────────────────────── */}
        {service.techStack && service.techStack.length > 0 && (
          <ServiceTechStack
            title={`TECHNOLOGIES POWERING OUR ${service.shortName.toUpperCase()} PRACTICE.`}
            subtitle="Battle-tested production infrastructure used on high-stakes customer implementations."
            tools={service.techStack}
          />
        )}

        {/* ── 08. Relevant Project Portfolio ───────────────────────────────── */}
        <ServiceProjects
          title={`PORTFOLIO & IMPLEMENTATIONS.`}
          subtitle={`A selection of production systems built for high-growth businesses.`}
          projects={fallbackProjects}
        />

        {/* ── 09. Unique Local FAQs (Task 7) ───────────────────────────────── */}
        <ServiceFaq
          title={`${city.name.toUpperCase()} — ${service.shortName.toUpperCase()} FAQS.`}
          subtitle={`Clear answers on working together, local pricing, on-site collaboration, and SLAs in ${city.name}.`}
          faqs={allFaqs}
        />

        {/* ── 10. Three-Way Cross-Linking (Task 8) ─────────────────────────── */}
        <section className="w-full bg-[#FAFAFA] py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
          <div className="site-container">
            <div className="max-w-[760px] mb-8">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                CROSS-LOCATION NAVIGATION
              </span>
              <h2
                className="mt-2 font-anton uppercase leading-none text-[var(--black)]"
                style={{ fontSize: "clamp(24px, 2.6vw, 42px)" }}
              >
                EXPLORE OTHER PRACTICES & LOCATIONS
              </h2>
              <p className="mt-3 text-[14.5px] text-[var(--grey-600)]">
                Navigate between our global discipline overview, regional hubs, and alternate market practices:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Card 1: Global Discipline Overview */}
              <Link
                href={`/${service.slug}`}
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--grey-200)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:shadow-xl"
              >
                <div>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                    <Globe className="h-3.5 w-3.5" /> Global Overview
                  </span>
                  <h3 className="mt-3 font-anton text-[20px] uppercase text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                    {service.name} Services
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[var(--grey-600)]">
                    Explore our complete international capability breakdown, specifications, and architecture benchmarks.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-[var(--grey-200)] pt-4 text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                  <span>View Global Discipline</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Card 2: Other City Practice */}
              <Link
                href={`/${service.slug}-in-${otherCity.slug}`}
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--grey-200)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:shadow-xl"
              >
                <div>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    <MapPin className="h-3.5 w-3.5" /> Alternate Market
                  </span>
                  <h3 className="mt-3 font-anton text-[20px] uppercase text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                    {service.name} in {otherCity.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[var(--grey-600)]">
                    See how we execute {service.shortName.toLowerCase()} for brands in {otherCity.name} with dedicated timezone alignment.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-[var(--grey-200)] pt-4 text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                  <span>Explore {otherCity.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Card 3: City Hub Page */}
              <Link
                href={`/${city.slug}`}
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--grey-200)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:shadow-xl"
              >
                <div>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    <ShieldCheck className="h-3.5 w-3.5" /> Regional Headquarters
                  </span>
                  <h3 className="mt-3 font-anton text-[20px] uppercase text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                    All Services in {city.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[var(--grey-600)]">
                    Discover our full suite of digital engineering, AI automation, video production, and growth services in {city.name}.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-[var(--grey-200)] pt-4 text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                  <span>Visit {city.name} Hub</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. Related Services in Same City (Flat URLs) ─────────────────── */}
        <section className="w-full bg-white py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
          <div className="site-container">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
              COMPLEMENTARY DISCIPLINES IN {city.name.toUpperCase()}
            </span>
            <h2
              className="mt-2 font-anton uppercase leading-none text-[var(--black)]"
              style={{ fontSize: "clamp(24px, 2.6vw, 42px)" }}
            >
              INTEGRATED GROWTH ENGINES IN {city.name.toUpperCase()}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.related.slice(0, 4).map((relSlug) => (
                <Link
                  key={relSlug}
                  href={`/${relSlug}-in-${city.slug}`}
                  className="group rounded-[16px] border border-[var(--grey-200)] bg-[#FAFAFA] p-5 transition-all duration-300 hover:border-[var(--black)] hover:bg-white hover:shadow-md"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--orange)]">
                    {city.name} Discipline
                  </span>
                  <h4 className="mt-2 font-anton text-[17px] uppercase text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                    {relSlug.replace(/-/g, " ")} in {city.name}
                  </h4>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--black)]">
                    <span>Learn More</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12. Local Consultation Booking Form ─────────────────────────── */}
        <ServiceBookingForm
          serviceName={`${service.name} in ${city.name}`}
          headline={`START YOUR ${city.name.toUpperCase()} PROJECT.`}
          subtext={`Schedule a focused 20-minute strategy call. We will review your requirements, walk through ${city.name}-specific recommendations, and deliver a detailed fixed-price proposal.`}
        />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
