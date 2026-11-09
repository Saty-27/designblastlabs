"use client";

import React from "react";

export const trustedClients = [
  "EUROPACK",
  "GAURANITAI",
  "TATA",
  "DIVINE NATURALS",
  "ISKCON JUHU",
  "META",
  "GOOGLE",
  "PREPASOLE",
  "EDUCONNECT AI",
];

function Run({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {trustedClients.map((name) => (
        <span key={name} className="flex shrink-0 items-center">
          <span
            className="whitespace-nowrap font-anton uppercase tracking-[0.01em] text-[var(--black)]"
            style={{ fontSize: "clamp(22px, 2vw, 42px)" }}
          >
            {name}
          </span>
          <span
            className="px-[clamp(20px,1.9vw,38px)] text-[var(--orange)]"
            style={{ fontSize: "clamp(12px, 0.9vw, 19px)" }}
          >
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function ClientTrustStrip() {
  return (
    <section
      aria-label="Clients we have worked with"
      className="w-full border-y border-[var(--grey-200)] bg-white"
    >
      <div className="site-container pb-[clamp(16px,1.3vw,26px)] pt-[clamp(18px,1.5vw,30px)]">
        <p
          className="font-bold uppercase tracking-[0.2em] text-[var(--black)]"
          style={{ fontSize: "clamp(10px, 0.72vw, 15px)" }}
        >
          TRUSTED BY BRANDS WE&apos;VE HELPED GROW
        </p>
      </div>

      {/* Two identical runs scrolling -50% gives a seamless loop */}
      <div className="relative overflow-hidden pb-[clamp(18px,1.6vw,32px)]">
        <div className="flex w-max animate-trust-marquee items-center">
          <Run />
          <Run ariaHidden />
        </div>
      </div>
    </section>
  );
}
