import React from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Phone } from "lucide-react";
import BookCallButton from "@/components/BookCallButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

/** Nav + footer + floating contact, so every landing page matches the home page. */
export function LandingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[var(--black)]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-[var(--grey-600)]">
        {trail.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-[var(--grey-400)]" />}
            {c.href ? (
              <Link href={c.href} className="transition-colors hover:text-[var(--orange)]">
                {c.label}
              </Link>
            ) : (
              <span className="text-[var(--black)]">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  trail,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  trail: Crumb[];
}) {
  return (
    <section className="w-full bg-white pb-[clamp(28px,2.6vw,48px)] pt-[clamp(24px,2.4vw,40px)]">
      <div className="site-container">
        <Breadcrumbs trail={trail} />

        <p
          className="font-bold uppercase tracking-[0.2em] text-[var(--orange)]"
          style={{ fontSize: "clamp(10px, 0.72vw, 13px)" }}
        >
          {eyebrow}
        </p>

        <h1
          className="mt-3 max-w-[20ch] font-anton uppercase leading-[0.96] tracking-[-0.015em] text-[var(--black)]"
          style={{ fontSize: "clamp(32px, 4.2vw, 68px)" }}
        >
          {title}
        </h1>

        <p
          className="mt-5 max-w-[62ch] leading-[1.65] text-[var(--grey-600)]"
          style={{ fontSize: "clamp(15px, 1.1vw, 19px)" }}
        >
          {lede}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <BookCallButton className="group inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5420F]">
            Book a free call
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </BookCallButton>
          <Link
            href="/#work"
            className="inline-flex items-center rounded-full border border-[var(--black)] bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--black)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--black)] hover:text-white"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Prose({ heading, paragraphs }: { heading?: string; paragraphs: string[] }) {
  return (
    <section className="w-full bg-white py-[clamp(26px,2.4vw,44px)]">
      <div className="site-container">
        {heading && (
          <h2
            className="mb-5 font-anton uppercase leading-[1] tracking-[-0.015em] text-[var(--black)]"
            style={{ fontSize: "clamp(24px, 2.6vw, 40px)" }}
          >
            {heading}
          </h2>
        )}
        <div className="max-w-[72ch] space-y-5">
          {paragraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="leading-[1.75] text-[var(--grey-600)]"
              style={{ fontSize: "clamp(14.5px, 1vw, 17px)" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeliverableGrid({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; description: string }[];
}) {
  return (
    <section className="w-full bg-[#FBFBF9] py-[clamp(34px,3.2vw,60px)]">
      <div className="site-container">
        <h2
          className="font-anton uppercase leading-[1] tracking-[-0.015em] text-[var(--black)]"
          style={{ fontSize: "clamp(24px, 2.6vw, 40px)" }}
        >
          {heading}
        </h2>
        <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-[14px] border border-[#E6E6E2] bg-white p-5"
            >
              <h3 className="text-[15px] font-bold text-[var(--black)]">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[var(--grey-600)]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function OutcomeList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section className="w-full bg-white py-[clamp(30px,2.8vw,52px)]">
      <div className="site-container">
        <h2
          className="font-anton uppercase leading-[1] tracking-[-0.015em] text-[var(--black)]"
          style={{ fontSize: "clamp(24px, 2.6vw, 40px)" }}
        >
          {heading}
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[var(--orange)]"
              >
                <Check strokeWidth={3.4} className="h-[12px] w-[12px] text-white" />
              </span>
              <span className="text-[15px] leading-[1.55] text-[var(--black)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FaqList({
  heading,
  faqs,
}: {
  heading: string;
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section className="w-full bg-white py-[clamp(30px,2.8vw,52px)]">
      <div className="site-container">
        <h2
          className="font-anton uppercase leading-[1] tracking-[-0.015em] text-[var(--black)]"
          style={{ fontSize: "clamp(24px, 2.6vw, 40px)" }}
        >
          {heading}
        </h2>
        <dl className="mt-6 max-w-[80ch] space-y-5">
          {faqs.map((f) => (
            <div key={f.question} className="rounded-[12px] border border-[#E6E6E2] p-5">
              <dt className="text-[15.5px] font-bold text-[var(--black)]">{f.question}</dt>
              <dd className="mt-2 text-[14.5px] leading-[1.7] text-[var(--grey-600)]">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function LinkGrid({
  heading,
  intro,
  links,
}: {
  heading: string;
  intro?: string;
  links: { label: string; href: string; note?: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <section className="w-full bg-[#FBFBF9] py-[clamp(30px,2.8vw,52px)]">
      <div className="site-container">
        <h2
          className="font-anton uppercase leading-[1] tracking-[-0.015em] text-[var(--black)]"
          style={{ fontSize: "clamp(22px, 2.3vw, 34px)" }}
        >
          {heading}
        </h2>
        {intro && (
          <p className="mt-3 max-w-[62ch] text-[14.5px] leading-[1.65] text-[var(--grey-600)]">
            {intro}
          </p>
        )}
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex h-full flex-col justify-between rounded-[12px] border border-[#E6E6E2] bg-white p-4 transition-colors hover:border-[var(--orange)]"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-[14.5px] font-semibold text-[var(--black)]">{l.label}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--grey-400)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--orange)]" />
                </span>
                {l.note && (
                  <span className="mt-1.5 block text-[13px] leading-[1.5] text-[var(--grey-600)]">
                    {l.note}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaBand({ title, body }: { title: string; body: string }) {
  return (
    <section className="w-full bg-[var(--black)] py-[clamp(36px,3.4vw,64px)]">
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <h2
              className="font-anton uppercase leading-[1] tracking-[-0.015em] text-white"
              style={{ fontSize: "clamp(24px, 2.6vw, 42px)" }}
            >
              {title}
            </h2>
            <p className="mt-3 max-w-[56ch] text-[15px] leading-[1.65] text-white/60">{body}</p>
          </div>
          <BookCallButton className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-[var(--orange)] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5420F]">
            <Phone aria-hidden="true" className="h-[17px] w-[17px]" />
            Book a free call
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}

export function StackGrid({
  heading,
  groups,
}: {
  heading: string;
  groups: { title: string; blurb: string; tools: string[] }[];
}) {
  return (
    <section className="w-full bg-[var(--grey-50,#F7F7F8)] py-[clamp(34px,3vw,58px)]">
      <div className="site-container">
        <h2
          className="font-anton uppercase leading-[1] tracking-[-0.015em] text-[var(--black)]"
          style={{ fontSize: "clamp(24px, 2.6vw, 40px)" }}
        >
          {heading}
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-[16px] border border-[var(--grey-200)] bg-white p-6"
            >
              <h3 className="font-anton uppercase leading-[1.05] tracking-[-0.01em] text-[var(--black)]"
                style={{ fontSize: "clamp(17px, 1.3vw, 21px)" }}>
                {g.title}
              </h3>
              <p className="mt-2.5 leading-[1.65] text-[var(--grey-600)]"
                style={{ fontSize: "clamp(13.5px, 0.95vw, 15px)" }}>
                {g.blurb}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-[var(--grey-200)] bg-[var(--grey-50,#F7F7F8)] px-3 py-1.5 text-[12px] font-medium text-[var(--grey-600)]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkStrip({
  heading,
  projects,
}: {
  heading: string;
  projects: { id: string; name: string; category: string; image: string | null; href: string; external?: boolean }[];
}) {
  if (projects.length === 0) return null;
  return (
    <section className="w-full bg-white py-[clamp(34px,3vw,58px)]">
      <div className="site-container">
        <h2
          className="font-anton uppercase leading-[1] tracking-[-0.015em] text-[var(--black)]"
          style={{ fontSize: "clamp(24px, 2.6vw, 40px)" }}
        >
          {heading}
        </h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.href}
              {...(p.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group overflow-hidden rounded-[16px] border border-[var(--grey-200)] bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-24px_rgba(14,16,24,0.3)]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--black)]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <span className="grid h-full w-full place-items-center px-4 text-center font-anton uppercase leading-[1.05] tracking-[-0.01em] text-white"
                    style={{ fontSize: "clamp(18px, 1.6vw, 26px)" }}>
                    {p.name}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <span className="font-anton uppercase tracking-[-0.01em] text-[var(--black)]"
                  style={{ fontSize: "clamp(14px, 1vw, 17px)" }}>
                  {p.name}
                </span>
                <span className="text-[12px] font-medium text-[var(--grey-600)]">{p.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
