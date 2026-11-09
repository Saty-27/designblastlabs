"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export interface HeaderProps {
  onBookCallClick?: () => void;
}

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#what-we-do" },
  { label: "Clients", href: "#clients" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ onBookCallClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (onBookCallClick) {
      e.preventDefault();
      onBookCallClick();
      return;
    }
    handleScrollTo(e, "#booking");
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(14,16,24,0.08)]" : ""
      }`}
    >
      <div className="w-full px-5 sm:px-6 lg:px-10">
        {/* 3-zone grid keeps the nav optically centred regardless of logo/CTA width */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6" style={{ height: "var(--nav-h)" }}>
          {/* Logo — swap /brand/logo.svg later, layout is driven by the h-10 box */}
          <Link href="/" aria-label="Design Blast Labs — home" className="flex items-center shrink-0">
            <img
              src="/brand/logo.svg"
              alt="Design Blast Labs"
              className="w-auto object-contain"
              style={{ height: "clamp(48px, 4.2vw, 76px)" }}
            />
          </Link>

          {/* Centre navigation */}
          <nav className="hidden lg:flex items-center justify-center" style={{ gap: "clamp(24px, 2.4vw, 44px)" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="group relative font-semibold text-blast-black/85 hover:text-blast-orange transition-colors duration-200 py-1"
                style={{ fontSize: "clamp(14px, 1.15vw, 20px)" }}
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-blast-orange transition-[width] duration-250 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center justify-end">
            <a
              href="#booking"
              onClick={handleCta}
              className="inline-flex items-center gap-2 bg-blast-orange hover:bg-blast-orange-hover text-white rounded-full font-bold tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-px hover:shadow-[0_6px_18px_-6px_rgba(255,79,23,0.55)] active:translate-y-0"
              style={{
                fontSize: "clamp(12px, 1vw, 17px)",
                padding: "clamp(13px, 1.05vw, 19px) clamp(28px, 2.3vw, 44px)",
              }}
            >
              <span>BOOK A CALL</span>
              <ArrowRight className="w-[1.1em] h-[1.1em]" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="lg:hidden col-start-3 justify-self-end p-2 -mr-2 text-blast-black hover:text-blast-orange transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 px-5 sm:px-6 lg:px-10 py-6 space-y-5 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-base font-semibold text-blast-black hover:text-blast-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            onClick={handleCta}
            className="w-full bg-blast-orange hover:bg-blast-orange-hover text-white py-3.5 rounded-full text-center text-[11px] font-bold tracking-[0.12em] uppercase transition-colors flex items-center justify-center gap-2"
          >
            <span>BOOK A CALL</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
