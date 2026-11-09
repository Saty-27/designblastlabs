"use client";

import React, { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { brandIcons } from "@/data/brandIcons";

/**
 * Single source of truth for the floating buttons.
 *
 * `phone` is the 10-digit national number; the +91 and the wa.me form are
 * derived from it so they can never drift apart.
 */
export const floatingContact = {
  countryCode: "91",
  phone: "8928794211",
  email: "hello@designblastlabs.online",
};

const tel = `+${floatingContact.countryCode}${floatingContact.phone}`;
const wa = `https://wa.me/${floatingContact.countryCode}${floatingContact.phone}`;

interface FloatingAction {
  label: string;
  href: string;
  icon: React.ReactNode;
  /** External links open in a new tab. */
  external?: boolean;
}

const actions: FloatingAction[] = [
  {
    label: "Call us",
    href: `tel:${tel}`,
    icon: <Phone strokeWidth={2.2} className="h-[21px] w-[21px]" />,
  },
  {
    label: "Chat on WhatsApp",
    href: wa,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor" aria-hidden="true">
        <path d={brandIcons.whatsapp.path} />
      </svg>
    ),
  },
  {
    label: "Email us",
    href: `mailto:${floatingContact.email}`,
    icon: <Mail strokeWidth={2.2} className="h-[21px] w-[21px]" />,
  },
];

export default function FloatingContact() {
  const [shown, setShown] = useState(false);

  // Let the page settle before they slide in, so they don't fight the hero.
  useEffect(() => {
    const t = window.setTimeout(() => setShown(true), 600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div
      className="fixed bottom-5 right-4 z-[90] flex flex-col items-end gap-2.5 sm:bottom-7 sm:right-6 sm:gap-3"
      // Sits below the contact modal (z-120) so it never covers the dialog.
    >
      {actions.map((action, i) => (
        <a
          key={action.label}
          href={action.href}
          {...(action.external ? { target: "_blank", rel: "noreferrer" } : {})}
          aria-label={action.label}
          className="group relative grid h-[50px] w-[50px] place-items-center rounded-full bg-[var(--black)] text-white ring-1 ring-white/20 shadow-[0_10px_26px_-8px_rgba(14,16,24,0.55)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[var(--orange)] hover:ring-[var(--orange)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange)] motion-reduce:transition-none sm:h-[54px] sm:w-[54px]"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "none" : "translateY(14px) scale(0.85)",
            transition: `opacity 420ms cubic-bezier(0.22,0.61,0.36,1) ${i * 90}ms, transform 420ms cubic-bezier(0.22,0.61,0.36,1) ${i * 90}ms, background-color 300ms ease`,
          }}
        >
          {action.icon}

          {/* Label reveals on hover — pointer devices only, so it never
              blocks a tap on a phone. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-[calc(100%+10px)] hidden whitespace-nowrap rounded-full bg-[var(--black)] px-3.5 py-2 text-[12px] font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 lg:block"
          >
            {action.label}
          </span>
        </a>
      ))}
    </div>
  );
}
