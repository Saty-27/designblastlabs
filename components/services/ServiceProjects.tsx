"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";

export interface ServiceProjectsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  projects: Project[];
}

export default function ServiceProjects({
  eyebrow = "RELEVANT WORK",
  title = "REAL CLIENT IMPLEMENTATIONS.",
  subtitle = "Selected projects showcasing our execution quality, design standards and conversion focus.",
  projects,
}: ServiceProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="w-full bg-[#FAFAFA] py-[clamp(44px,4vw,76px)] border-b border-[var(--grey-200)]">
      <div className="site-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-[760px]">
            <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
              {eyebrow}
            </span>
            <h2
              className="mt-2.5 font-anton uppercase leading-[0.96] tracking-[-0.015em] text-[var(--black)]"
              style={{ fontSize: "clamp(28px, 3.2vw, 54px)" }}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className="mt-4 leading-[1.65] text-[var(--grey-600)]"
                style={{ fontSize: "clamp(14px, 1.05vw, 18px)" }}
              >
                {subtitle}
              </p>
            )}
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[12.5px] text-[var(--black)] transition-colors hover:text-[var(--orange)]"
          >
            All 21+ Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="mt-[clamp(32px,3vw,56px)] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((proj) => (
            <div
              key={proj.id}
              className="group overflow-hidden rounded-[18px] border border-[var(--grey-200)] bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--black)] hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] bg-neutral-100">
                {proj.image ? (
                  <Image
                    src={proj.image}
                    alt={`${proj.name} — ${proj.category}`}
                    fill
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 30vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center bg-[#0C0E14] text-white">
                    <span className="font-anton text-[22px] uppercase text-[var(--orange)]">
                      {proj.name}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-anton text-[19px] uppercase tracking-tight text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
                    {proj.name}
                  </span>
                  {proj.href && (
                    <a
                      href={proj.href}
                      target={proj.external ? "_blank" : undefined}
                      rel={proj.external ? "noreferrer" : undefined}
                      className="grid h-8 w-8 place-items-center rounded-full border border-[var(--grey-200)] text-[var(--black)] transition-colors group-hover:border-[var(--orange)] group-hover:bg-[var(--orange)] group-hover:text-white"
                      aria-label={`View ${proj.name}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="mt-2 flex items-center justify-between text-[12.5px] text-[var(--grey-600)]">
                  <span>{proj.category}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--orange)] font-bold">
                    Case Available
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
