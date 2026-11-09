"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Zap } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";

export interface TrustBadge {
  label: string;
  value: string;
}

export interface ServiceHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  trustBadges?: TrustBadge[];
  visualImage: string;
  visualAlt: string;
  floatingBadge?: {
    title: string;
    subtitle: string;
  };
  breadcrumbs?: { label: string; href?: string }[];
}

export default function ServiceHero({
  eyebrow,
  title,
  description,
  primaryCtaText = "BOOK A FREE CALL",
  secondaryCtaText = "VIEW OUR WORK",
  secondaryCtaHref = "/#work",
  trustBadges = [
    { value: "100%", label: "Custom Architecture" },
    { value: "Direct", label: "Engineer & Creator Access" },
    { value: "Fast", label: "Production Turnaround" },
  ],
  visualImage,
  visualAlt,
  floatingBadge = {
    title: "+180% CONVERSION",
    subtitle: "Built for Measurable Growth",
  },
  breadcrumbs = [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }],
}: ServiceHeroProps) {
  const { open: openContact } = useContactModal();

  return (
    <section className="relative w-full overflow-hidden border-b border-[var(--grey-200)] bg-white pb-[clamp(44px,4vw,76px)] pt-[clamp(28px,2.5vw,48px)]">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[20%] top-0 h-[480px] w-[500px] rounded-full opacity-40 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(255,79,23,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="site-container relative">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] font-medium text-[var(--grey-600)]">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-[var(--grey-400)]" />
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-[var(--orange)]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[var(--black)] font-semibold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column: Headlines & CTAs */}
          <div className="min-w-0">
            {eyebrow && (
              <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                {eyebrow}
              </p>
            )}

            <h1
              className="mt-3 font-anton uppercase leading-[0.94] tracking-[-0.015em] text-[var(--black)]"
              style={{ fontSize: "clamp(34px, 4.4vw, 72px)" }}
            >
              {title}
            </h1>

            <p
              className="mt-6 max-w-[58ch] leading-[1.68] text-[var(--grey-600)]"
              style={{ fontSize: "clamp(15px, 1.1vw, 19px)" }}
            >
              {description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openContact}
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-8 py-4 text-[12.5px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_20px_-6px_rgba(255,79,23,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5420F] hover:shadow-[0_12px_28px_-8px_rgba(255,79,23,0.7)]"
              >
                {primaryCtaText}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center rounded-full border border-[var(--black)] bg-white px-7 py-4 text-[12.5px] font-bold uppercase tracking-[0.1em] text-[var(--black)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--black)] hover:text-white"
              >
                {secondaryCtaText}
              </Link>
            </div>

            {/* Trust Badges Bar */}
            {trustBadges && trustBadges.length > 0 && (
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-[var(--grey-200)] pt-6 sm:gap-6">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="min-w-0">
                    <span className="block font-anton text-[18px] sm:text-[22px] uppercase leading-none tracking-tight text-[var(--black)]">
                      <span className="text-[var(--orange)]">{badge.value}</span>
                    </span>
                    <span className="mt-1 block text-[11px] sm:text-[12.5px] font-medium leading-[1.3] text-[var(--grey-600)]">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Visual Mockup Showcase */}
          <div className="relative min-w-0">
            <div className="relative mx-auto w-full overflow-hidden rounded-[20px] border border-[var(--grey-200)] bg-[#0C0E14] p-2.5 shadow-[0_24px_50px_-20px_rgba(14,16,24,0.25)] sm:p-3.5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]">
                <Image
                  src={visualImage}
                  alt={visualAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 45vw"
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Floating conversion badge */}
              {floatingBadge && (
                <div className="absolute -bottom-3 -left-3 sm:bottom-6 sm:left-6 rounded-[14px] border border-white/15 bg-[var(--black)]/95 p-3.5 text-white backdrop-blur-md shadow-2xl">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--orange)] text-white">
                      <Zap className="h-5 w-5 fill-white text-white" />
                    </span>
                    <div>
                      <p className="font-anton text-[15px] uppercase leading-none tracking-tight text-white">
                        {floatingBadge.title}
                      </p>
                      <p className="mt-1 text-[11px] font-medium text-white/70">
                        {floatingBadge.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
