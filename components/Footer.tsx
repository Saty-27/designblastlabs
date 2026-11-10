"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { brandIcons } from "@/data/brandIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Tech Stack", href: "/#tech-stack" },
  { label: "Contact", href: "/#booking" },
];

const serviceLinks = [
  { label: "Website Development", href: "/website-development" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Social Media Management", href: "/social-media-management" },
  { label: "SEO", href: "/seo" },
  { label: "AEO — AI Search", href: "/aeo" },
  { label: "AI Automation", href: "/ai-automation" },
  { label: "App Development", href: "/app-development" },
  { label: "Google Ads", href: "/google-ads" },
  { label: "Video Marketing & Production", href: "/video-marketing" },
  { label: "Instagram Marketing", href: "/instagram-marketing" },
  { label: "Facebook Marketing", href: "/facebook-marketing" },
  { label: "LinkedIn Marketing", href: "/linkedin-marketing" },
  { label: "All services", href: "/services" },
];


/** Real contact details — kept from the live site, not the mockup's dummy number. */
export interface Office {
  label: string;
  lines: string[];
}

export const offices: Office[] = [
  {
    label: "Head Office — Mumbai",
    lines: [
      "13/101, Design Blast, Anand Nagar,",
      "Santacruz East, Mumbai 400055",
    ],
  },
  {
    label: "Bangalore",
    lines: [
      "BTM 4th Stage, 5th Main Rd, Vijaya Bank Layout,",
      "Devarachikkana Halli, Bengaluru, Karnataka 560076",
    ],
  },
  {
    label: "Rustomjee — Palghar",
    lines: [
      "SY No. 77/16, Saravali Road, Dubalpada,",
      "Saravali, Palghar, Maharashtra 401602",
    ],
  },
];

export const contact = {
  location: "Mumbai, India",
  email: "hello@designblastlabs.online",
  phone: "+91 89287 94211",
};

/**
 * CONFIGURE BEFORE LAUNCH: these are placeholder destinations, not real Design
 * Blast Labs profiles. Set each `href` to the actual profile URL; any entry
 * left as null is hidden rather than linking somewhere wrong.
 */
export const socials: {
  label: string;
  href: string | null;
  /** lucide component, or a vendored brand path for marks lucide lacks. */
  icon?: React.ElementType;
  path?: string;
}[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/design-blast-labs",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/designblastlabs?psln=M254dWlsY3F1c21y",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@DesignBlastLabs",
    icon: Youtube,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918928794211",
    path: brandIcons.whatsapp.path,
  },
  { label: "Facebook", href: null, icon: Facebook },
  { label: "X", href: null, path: brandIcons.x.path },
];

/** UNVERIFIED CLAIM — confirm the subscriber count or remove this line. */
const communityLine = { count: "500+", verified: false };

const colHead = "flex items-center gap-2 text-[14px] font-semibold text-white";
const colLink =
  "group inline-flex items-center gap-1.5 text-[14px] text-[#A6A8AE] transition-colors hover:text-[var(--orange)]";

type NewsletterStatus = "idle" | "sending" | "saved" | "error";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NewsletterStatus>("idle");
  const [error, setError] = useState("");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      // Only a confirmed save counts as subscribed.
      if (res.ok) {
        setStatus("saved");
        setEmail("");
        return;
      }

      const payload = await res.json().catch(() => null);
      setError(
        (payload && typeof payload.error === "string" && payload.error) ||
          "We couldn't save your signup. Please try again."
      );
      setStatus("error");
    } catch {
      setError("Network error — you were not subscribed. Please retry.");
      setStatus("error");
    }
  };

  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-[#090B0E]">
      {/* ── Illuminated separator ──────────────────────────────── */}
      <div aria-hidden="true" className="relative h-px w-full">
        <span
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,74,28,0.45) 18%, #FF9A5C 50%, rgba(255,74,28,0.45) 82%, transparent 100%)",
          }}
        />
        <span
          className="absolute left-1/2 top-1/2 h-[90px] w-[72%] -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,74,28,0.32), transparent 70%)" }}
        />
      </div>
      {/* dot texture fading out beneath the divider */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[180px]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,74,28,0.32) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
        }}
      />

      <div className="site-container relative">
        <div className="pt-[clamp(36px,3.2vw,60px)]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_1.1fr_1.2fr_1.2fr] lg:gap-10">
            {/* Brand + newsletter */}
            <div className="min-w-0">
              <p className="font-anton text-[22px] uppercase leading-none tracking-[-0.01em]">
                <span className="text-white">DESIGN </span>
                <span className="text-[var(--orange)]">BLAST </span>
                <span className="text-white">LABS</span>
              </p>
              <p className="mt-3.5 max-w-[32ch] text-[14px] leading-[1.6] text-[#A6A8AE]">
                Your growth partner in the digital world.
              </p>

              <form onSubmit={subscribe} noValidate className="mt-6 max-w-[340px]">
                {status === "saved" ? (
                  <p className="flex items-center gap-2 py-3 text-[13px] font-semibold text-[var(--orange)]">
                    <Check aria-hidden="true" className="h-4 w-4" />
                    You&rsquo;re on the list.
                  </p>
                ) : (
                  <div className="flex items-center rounded-full bg-white p-1.5 focus-within:ring-2 focus-within:ring-[var(--orange)]">
                    <label className="min-w-0 flex-1">
                      <span className="sr-only">Email address</span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full bg-transparent px-4 text-[13px] text-[var(--black)] placeholder:text-[#9A9AA0] focus:outline-none"
                      />
                    </label>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--orange)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#E5420F] disabled:cursor-wait disabled:opacity-70"
                    >
                      {status === "sending" ? "SAVING…" : "SUBSCRIBE"}
                      {status !== "sending" && (
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      )}
                    </button>
                  </div>
                )}

                {status === "error" && (
                  <p role="alert" className="mt-2.5 flex items-start gap-2 text-[12.5px] text-white/80">
                    <AlertCircle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--orange)]" />
                    {error}
                  </p>
                )}
              </form>

              {/* neutral avatar marks — no stock or generated faces */}
              <div className="mt-6 flex items-center gap-3">
                {/* Brand letters rather than invented people — these are marks,
                    not photographs of subscribers. */}
                <span aria-hidden="true" className="flex -space-x-2.5">
                  {[
                    { letter: "D", bg: "#FF4A1C", fg: "#FFFFFF" },
                    { letter: "B", bg: "#2A2D34", fg: "#FFFFFF" },
                    { letter: "L", bg: "#FF7A4D", fg: "#0E1018" },
                    { letter: "+", bg: "#1A1D23", fg: "#FF4A1C" },
                  ].map(({ letter, bg, fg }) => (
                    <span
                      key={letter}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#090B0E] font-anton text-[14px] leading-none"
                      style={{ background: bg, color: fg }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <p className="max-w-[26ch] text-[13px] leading-[1.45] text-[#A6A8AE]">
                  Join {communityLine.count} founders getting growth insights every week.
                </p>
              </div>
            </div>

            {/* Quick links */}
            <nav aria-label="Quick links" className="min-w-0">
              <h2 className={colHead}>
                <span aria-hidden="true" className="h-[14px] w-[3px] rounded-full bg-[var(--orange)]" />
                Quick Links
              </h2>
              <ul className="mt-5 space-y-4">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={colLink}>
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Services" className="min-w-0">
              <h2 className={colHead}>
                <span aria-hidden="true" className="h-[14px] w-[3px] rounded-full bg-[var(--orange)]" />
                Services
              </h2>
              <ul className="mt-5 space-y-4">
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={colLink}>
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div className="min-w-0">
              <h2 className={colHead}>
                <span aria-hidden="true" className="h-[14px] w-[3px] rounded-full bg-[var(--orange)]" />
                Contact
              </h2>
              <ul className="mt-5 space-y-4">
                {offices.map((office) => (
                  <li key={office.label} className="flex items-start gap-3">
                    <MapPin
                      aria-hidden="true"
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--orange)]"
                    />
                    <address className="not-italic">
                      <span className="block text-[13px] font-semibold text-white">
                        {office.label}
                      </span>
                      {office.lines.map((line) => (
                        <span key={line} className="block text-[13.5px] leading-[1.5] text-[#A6A8AE]">
                          {line}
                        </span>
                      ))}
                    </address>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Mail aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-[var(--orange)]" />
                  <a href={`mailto:${contact.email}`} className="truncate text-[14px] text-[#A6A8AE] transition-colors hover:text-[var(--orange)]">
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-[var(--orange)]" />
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-[14px] text-[#A6A8AE] transition-colors hover:text-[var(--orange)]">
                    {contact.phone}
                  </a>
                </li>
              </ul>

              <ul className="mt-6 flex flex-wrap items-center gap-2.5">
                {socials
                  .filter((s) => s.href)
                  .map(({ label, href, icon: Icon, path }) => (
                    <li key={label}>
                      <a
                        href={href as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow Design Blast Labs on ${label}`}
                        className="grid h-10 w-10 place-items-center rounded-[10px] border border-white/12 text-white transition-all duration-200 hover:scale-105 hover:border-[var(--orange)] hover:bg-[var(--orange)]"
                      >
                        {Icon ? (
                          <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                        ) : (
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            fill="currentColor"
                            className="h-[17px] w-[17px]"
                          >
                            <path d={path} />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* ── Oversized wordmark ───────────────────────────────── */}
          <div className="relative mt-[clamp(30px,3vw,56px)]">
            {/* Its own row above the wordmark — overlapping the letterforms left
                it chopped into unreadable fragments. */}
            <div
              aria-hidden="true"
              className="mb-[clamp(14px,1.4vw,26px)] hidden items-center gap-4 sm:flex"
            >
              <span className="h-px flex-1 bg-white/12" />
              <span className="whitespace-nowrap text-[clamp(8px,0.72vw,12px)] uppercase tracking-[0.42em] text-[#8A8D95]">
                STRATEGY <span className="text-[var(--orange)]">×</span> DESIGN{" "}
                <span className="text-[var(--orange)]">×</span> AUTOMATION{" "}
                <span className="text-[var(--orange)]">×</span> GROWTH
              </span>
              <span className="h-px flex-1 bg-white/12" />
            </div>

            <p
              aria-label="Design Blast Labs"
              className="relative flex w-full select-none justify-between overflow-x-clip py-[0.12em] font-anton uppercase leading-[0.82] tracking-[-0.02em]"
              style={{ fontSize: "clamp(34px, 10.4vw, 190px)" }}
            >
              <span
                aria-hidden="true"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 62%, #C2C6CD 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                DESIGN
              </span>
              <span aria-hidden="true" className="text-[var(--orange)]">
                BLAST
              </span>
              <span
                aria-hidden="true"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 62%, #C2C6CD 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                LABS
              </span>
            </p>

          </div>

          <div className="mt-[clamp(14px,1.4vw,26px)] flex flex-col gap-3 border-t border-white/10 py-6 text-[13px] text-[#6E7077] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Design Blast Labs. All rights reserved.</p>
            <p className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Back to top"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                      ? "auto"
                      : "smooth",
                  })
                }
                className="grid h-8 w-8 place-items-center rounded-full border border-white/12 text-white/50 transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]"
              >
                <ArrowUpRight strokeWidth={1.6} className="h-4 w-4" />
              </button>
              <a href="#privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <span aria-hidden="true" className="text-white/20">
                |
              </span>
              <a href="#terms" className="transition-colors hover:text-white">
                Terms &amp; Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
