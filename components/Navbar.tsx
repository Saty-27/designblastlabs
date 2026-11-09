"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useContactModal } from "./ContactModalProvider";

/**
 * Absolute hrefs, so these still work from the service and city pages where the
 * target sections do not exist. On the home page we intercept and smooth-scroll.
 */
const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Contact", href: "/#booking" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { open: openContact } = useContactModal();

  const pathname = usePathname();

  /** Every "Book a call" goes to the modal rather than scrolling away. */
  const book = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    openContact();
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    // Only hijack same-page anchors; let real navigations happen normally.
    const hash = href.startsWith("/#") ? href.slice(1) : null;
    if (!hash || pathname !== "/") return;
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--grey-200)]">
      <div className="site-container">
        {/* 3 zones so the nav stays optically centred whatever the logo/CTA width */}
        <div
          className="grid grid-cols-[auto_1fr_auto] items-center gap-6"
          style={{ height: "var(--nav-h)" }}
        >
          {/* Temporary wordmark — replace with the real logo asset later */}
          <Link href="/" aria-label="Design Blast Labs — home" className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid place-items-center rounded-[10px] bg-[var(--black)] font-barlow font-black tracking-tight text-white"
              style={{ height: "clamp(36px, 2.4vw, 46px)", width: "clamp(36px, 2.4vw, 46px)", fontSize: "clamp(15px, 1vw, 19px)" }}
            >
              DB
            </span>
            <span className="font-barlow font-black uppercase leading-none tracking-tight text-[var(--black)]"
              style={{ fontSize: "clamp(19px, 1.3vw, 26px)" }}>
              DESIGN <span className="text-[var(--orange)]">BLAST</span>
              <span className="ml-1.5 text-[11px] font-bold tracking-[0.3em] text-[var(--grey-400)]">
                LABS
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="font-medium text-[var(--black)] transition-colors duration-200 hover:text-[var(--orange)]"
                style={{ fontSize: "clamp(14px, 0.95vw, 18px)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center justify-end">
            <a
              href="#booking"
              onClick={book}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#E5420F] hover:shadow-[0_6px_16px_-6px_rgba(255,79,23,0.6)]"
              style={{ height: "clamp(38px, 2.4vw, 50px)", paddingInline: "clamp(24px, 1.7vw, 36px)", fontSize: "clamp(11px, 0.7vw, 14px)" }}
            >
              BOOK A CALL
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="col-start-3 justify-self-end p-2 -mr-2 text-[var(--black)] transition-colors hover:text-[var(--orange)] lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--grey-200)] bg-white lg:hidden">
          <div className="site-container space-y-4 py-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-base font-medium text-[var(--black)] transition-colors hover:text-[var(--orange)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#booking"
              onClick={book}
              className="flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[var(--orange)] text-[11px] font-semibold uppercase tracking-[0.1em] text-white"
            >
              BOOK A CALL
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
