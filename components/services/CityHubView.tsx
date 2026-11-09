"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  Globe,
  Star,
  Clock,
  Sparkles,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ServiceBookingForm from "@/components/services/ServiceBookingForm";
import { City, cities } from "@/lib/seo/cities";
import { services } from "@/lib/seo/services";
import { BRAND, abs } from "@/lib/seo/site";
import { getLocalTestimonials } from "@/lib/seo/cityServiceData";

export interface CityHubViewProps {
  city: City;
}

export default function CityHubView({ city }: CityHubViewProps) {
  const otherCity = cities.find((c) => c.slug !== city.slug) || cities[0];
  const localTestimonials = getLocalTestimonials(city.slug);
  const canonicalUrl = abs(`/${city.slug}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${BRAND} — ${city.name}`,
    description: city.lede,
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
    areaServed: { "@type": "City", name: city.name },
    serviceArea: city.areas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, ${city.name}`,
    })),
    knowsAbout: services.map((s) => s.name),
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
        name: `Digital Agency in ${city.name}`,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
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
          __html: JSON.stringify([schema, breadcrumbSchema, faqSchema]),
        }}
      />

      <main className="flex-1">
        {/* ── 01. City Hero Section with Single H1 ────────────────────────── */}
        <section className="relative overflow-hidden border-b border-[var(--grey-200)] bg-[#0E1018] pt-[clamp(90px,11vw,140px)] pb-[clamp(50px,6vw,90px)] text-white">
          <div className="site-container relative z-10">
            {/* Breadcrumb Trail */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12px] font-mono uppercase text-neutral-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--orange)] font-semibold">{city.name}</span>
            </nav>

            <div className="max-w-[900px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-[#161922] px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--orange)]">
                <MapPin className="h-3 w-3" />
                <span>{city.country} PRACTICE · REGIONAL HUB</span>
              </div>

              {/* Single H1 Heading */}
              <h1
                className="mt-4 font-anton uppercase leading-[0.92] tracking-tight text-white"
                style={{ fontSize: "clamp(38px, 5.5vw, 76px)" }}
              >
                DIGITAL AGENCY IN{" "}
                <span className="text-[var(--orange)]">{city.name.toUpperCase()}.</span>
              </h1>

              <p className="mt-5 max-w-[720px] text-[16px] sm:text-[18px] leading-[1.65] text-neutral-300">
                {city.lede} Integrated web engineering, performance marketing, short-form video production, and custom AI automation engineered for {city.name} enterprises.
              </p>

              {/* Quick Proof Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-[#141722] px-3.5 py-1.5 font-mono text-[11.5px] uppercase text-neutral-300">
                  <Clock className="h-3.5 w-3.5 text-[var(--orange)]" />
                  {city.availability}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-[#141722] px-3.5 py-1.5 font-mono text-[11.5px] uppercase text-neutral-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-[var(--orange)]" />
                  100% Client Retention
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-[#141722] px-3.5 py-1.5 font-mono text-[11.5px] uppercase text-neutral-300">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--orange)]" />
                  14 Specialized Disciplines
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. Editorial Context on Working in City ─────────────────────── */}
        <section className="w-full bg-white py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
          <div className="site-container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                  REGIONAL FOCUS · {city.name.toUpperCase()}
                </span>
                <h2
                  className="mt-2 font-anton uppercase leading-[0.96] tracking-tight text-[var(--black)]"
                  style={{ fontSize: "clamp(26px, 2.8vw, 48px)" }}
                >
                  WORKING WITH BUSINESSES IN {city.name.toUpperCase()}.
                </h2>

                <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] leading-[1.75] text-[var(--grey-600)]">
                  {city.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Local Areas Served & Sectors */}
              <div className="lg:col-span-5 rounded-[22px] border border-[var(--grey-200)] bg-[#FAFAFA] p-6 sm:p-8">
                <h3 className="font-anton text-[20px] uppercase text-[var(--black)]">
                  AREAS WE OPERATE ACROSS
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {city.areas.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-[var(--grey-300)] bg-white px-3 py-1.5 text-[12.5px] font-semibold text-[var(--grey-700)] shadow-xs"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-[var(--grey-200)] pt-6">
                  <h3 className="font-anton text-[20px] uppercase text-[var(--black)]">
                    SECTORS WE FREQUENTLY ACCELERATE
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {city.industries.map((ind) => (
                      <li key={ind} className="flex items-center gap-2 text-[13.5px] text-[var(--grey-700)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. All 14 Services in City (Flat URLs) ──────────────────────── */}
        <section className="w-full bg-[#FAFAFA] py-[clamp(44px,4.5vw,84px)] border-b border-[var(--grey-200)]">
          <div className="site-container">
            <div className="max-w-[760px] mb-10">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                SERVICES DIRECTORY · {city.name.toUpperCase()}
              </span>
              <h2
                className="mt-2 font-anton uppercase leading-[0.96] text-[var(--black)]"
                style={{ fontSize: "clamp(26px, 2.8vw, 48px)" }}
              >
                SPECIALIZED DISCIPLINES IN {city.name.toUpperCase()}.
              </h2>
              <p className="mt-3 text-[14.5px] text-[var(--grey-600)]">
                Every service is delivered with local context, market-specific nuance, and dedicated engineering rigor:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}-in-${city.slug}`}
                  className="group flex flex-col justify-between rounded-[20px] border border-[var(--grey-200)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:shadow-lg"
                >
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      {city.name} Practice
                    </span>
                    <h3 className="mt-2 font-anton text-[21px] uppercase text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                      {s.name} in {city.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.6] text-[var(--grey-600)]">
                      {s.promise}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 border-t border-[var(--grey-200)] pt-4 text-[11.5px] font-bold uppercase tracking-wider text-[var(--black)] group-hover:text-[var(--orange)]">
                    <span>Explore Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04. Verified Local Testimonials ──────────────────────────────── */}
        <section className="w-full bg-[#0E1018] py-[clamp(44px,4.5vw,80px)] text-white border-b border-neutral-900">
          <div className="site-container">
            <div className="max-w-[760px]">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                PROVEN RESULTS
              </span>
              <h2
                className="mt-2.5 font-anton uppercase leading-[0.96] text-white"
                style={{ fontSize: "clamp(26px, 2.8vw, 48px)" }}
              >
                HEAR FROM {city.name.toUpperCase()} CLIENTS.
              </h2>
              <p className="mt-3 text-[14.5px] text-neutral-400">
                Verified impact metrics delivered for local enterprises and ambitious brands:
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {localTestimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-[20px] border border-neutral-800 bg-[#141722] p-6.5"
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

        {/* ── 05. Frequently Asked Questions ───────────────────────────────── */}
        <section className="w-full bg-white py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
          <div className="site-container max-w-[840px]">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
              CLEAR ANSWERS
            </span>
            <h2
              className="mt-2 font-anton uppercase leading-[0.96] text-[var(--black)]"
              style={{ fontSize: "clamp(26px, 2.8vw, 48px)" }}
            >
              {city.name.toUpperCase()} CLIENT QUESTIONS.
            </h2>

            <div className="mt-8 divide-y divide-[var(--grey-200)] border-y border-[var(--grey-200)]">
              {city.faqs.map((faq, idx) => (
                <div key={idx} className="py-5">
                  <h3 className="font-anton text-[18px] uppercase tracking-wide text-[var(--black)]">
                    {faq.question}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[var(--grey-600)]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. Other Locations & Global Directory ───────────────────────── */}
        <section className="w-full bg-[#FAFAFA] py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
          <div className="site-container">
            <div className="max-w-[760px] mb-8">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                LOCATIONS & DIRECTORIES
              </span>
              <h2
                className="mt-2 font-anton uppercase leading-none text-[var(--black)]"
                style={{ fontSize: "clamp(24px, 2.6vw, 42px)" }}
              >
                EXPAND YOUR REACH
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Link
                href={`/${otherCity.slug}`}
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--grey-200)] bg-white p-6 transition-all duration-300 hover:border-[var(--black)] hover:shadow-xl"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    Alternate Regional Practice
                  </span>
                  <h3 className="mt-3 font-anton text-[22px] uppercase text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                    Digital Agency in {otherCity.name}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-[var(--grey-600)]">
                    {otherCity.lede}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 border-t border-[var(--grey-200)] pt-4 text-[12px] font-bold uppercase tracking-wider text-[var(--orange)]">
                  <span>Visit {otherCity.name} Hub</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/services"
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--grey-200)] bg-white p-6 transition-all duration-300 hover:border-[var(--black)] hover:shadow-xl"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--orange)]">
                    All Disciplines
                  </span>
                  <h3 className="mt-3 font-anton text-[22px] uppercase text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                    Global Services Directory
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-[var(--grey-600)]">
                    Browse all 14 core growth, engineering, AI automation, and production disciplines.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 border-t border-[var(--grey-200)] pt-4 text-[12px] font-bold uppercase tracking-wider text-[var(--orange)]">
                  <span>View All Services</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 07. Booking Form ────────────────────────────────────────────── */}
        <ServiceBookingForm
          serviceName={`Digital Growth in ${city.name}`}
          headline={`SCALE YOUR ${city.name.toUpperCase()} BUSINESS.`}
          subtext={`Let's discuss how we can engineer growth for your company in ${city.name}. Book a focused 20-minute strategy call with our leadership team.`}
        />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
