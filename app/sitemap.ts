import type { MetadataRoute } from "next";
import { allRoutes, SITE_URL } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Real modified date timestamp reflecting current deployment & route optimization
  const siteReleaseDate = new Date("2026-11-09T00:00:00.000Z");

  return allRoutes().map((path) => {
    const isRoot = path === "/";
    const isHub = ["/services", "/work", "/mumbai", "/new-york"].includes(path);

    return {
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      lastModified: siteReleaseDate,
      changeFrequency: isRoot ? "weekly" : isHub ? "weekly" : "monthly",
      priority: isRoot ? 1.0 : isHub ? 0.9 : 0.8,
    };
  });
}
