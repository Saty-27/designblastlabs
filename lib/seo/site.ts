import { cities } from "./cities";
import { services } from "./services";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://designblastlabs.com").replace(/\/$/, "");

export const BRAND = "Design Blast Labs";

export function abs(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** 
 * Every indexable URL with new flat structure:
 * - Hubs: /, /services, /work, /mumbai, /new-york
 * - 14 General services: /:slug
 * - 14 Mumbai services: /:slug-in-mumbai
 * - 14 New York services: /:slug-in-new-york
 * Total = 5 + 42 = 47 URLs (zero old nested URLs).
 */
export function allRoutes(): string[] {
  const out = ["/", "/services", "/work", "/mumbai", "/new-york"];
  services.forEach((s) => {
    out.push(`/${s.slug}`);
    out.push(`/${s.slug}-in-mumbai`);
    out.push(`/${s.slug}-in-new-york`);
  });
  return out;
}

/**
 * City landing pages and key service locations, declared for crawlers and structured data.
 */
export const locationLinks = [
  { label: "Digital Agency in Mumbai", href: "/mumbai" },
  { label: "Website Development in Mumbai", href: "/website-development-in-mumbai" },
  { label: "Digital Marketing in Mumbai", href: "/digital-marketing-in-mumbai" },
  { label: "Digital Agency in New York", href: "/new-york" },
  { label: "Website Development in New York", href: "/website-development-in-new-york" },
  { label: "SEO in New York", href: "/seo-in-new-york" },
];
