import { getCity, cities, City } from "./cities";
import { getService, services, Service } from "./services";

export type ParsedRoute =
  | { type: "city-hub"; city: City }
  | { type: "service-city"; service: Service; city: City; otherCity: City }
  | { type: "service-general"; service: Service };

export function parseRouteSlug(slug: string): ParsedRoute | null {
  // 1. City hubs
  if (slug === "mumbai" || slug === "new-york") {
    const city = getCity(slug);
    return city ? { type: "city-hub", city } : null;
  }

  // 2. City-specific service pages
  if (slug.endsWith("-in-mumbai")) {
    const serviceSlug = slug.slice(0, -"-in-mumbai".length);
    const service = getService(serviceSlug);
    const city = getCity("mumbai");
    const otherCity = getCity("new-york");
    if (service && city && otherCity) {
      return { type: "service-city", service, city, otherCity };
    }
  }

  if (slug.endsWith("-in-new-york")) {
    const serviceSlug = slug.slice(0, -"-in-new-york".length);
    const service = getService(serviceSlug);
    const city = getCity("new-york");
    const otherCity = getCity("mumbai");
    if (service && city && otherCity) {
      return { type: "service-city", service, city, otherCity };
    }
  }

  // 3. General service pages
  const service = getService(slug);
  if (service) {
    return { type: "service-general", service };
  }

  return null;
}

/** Returns all 44 slugs for static prerendering */
export function getAllFlatSlugs(): string[] {
  const slugs: string[] = [];

  // 14 General services
  services.forEach((s) => {
    slugs.push(s.slug);
  });

  // 14 Mumbai services
  services.forEach((s) => {
    slugs.push(`${s.slug}-in-mumbai`);
  });

  // 14 New York services
  services.forEach((s) => {
    slugs.push(`${s.slug}-in-new-york`);
  });

  // 2 City hubs
  cities.forEach((c) => {
    slugs.push(c.slug);
  });

  return slugs;
}
