"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RelatedServiceItem {
  name: string;
  slug: string;
  promise: string;
}

export interface ServiceRelatedProps {
  currentSlug: string;
  services: RelatedServiceItem[];
}

export default function ServiceRelated({ currentSlug, services }: ServiceRelatedProps) {
  const filtered = services.filter((s) => s.slug !== currentSlug).slice(0, 3);
  if (filtered.length === 0) return null;

  return (
    <section className="w-full bg-[#FAFAFA] py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
      <div className="site-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
              INTEGRATED DISCIPLINES
            </span>
            <h2
              className="mt-2 font-anton uppercase leading-[0.96] tracking-tight text-[var(--black)]"
              style={{ fontSize: "clamp(26px, 2.8vw, 44px)" }}
            >
              EXPLORE RELATED SERVICES.
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[12px] text-[var(--black)] hover:text-[var(--orange)] transition-colors"
          >
            All Services Directory <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {filtered.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group flex flex-col justify-between rounded-[16px] border border-[var(--grey-200)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:shadow-lg"
            >
              <div>
                <span className="font-anton text-[20px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                  {s.name}
                </span>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-[var(--grey-600)]">
                  {s.promise}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-[var(--orange)]">
                <span>View Service Details</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
