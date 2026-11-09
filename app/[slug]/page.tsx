import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND, abs } from "@/lib/seo/site";
import { getAllFlatSlugs, parseRouteSlug } from "@/lib/seo/routes";
import GeneralServiceView from "@/components/services/GeneralServiceView";
import CityServiceView from "@/components/services/CityServiceView";
import CityHubView from "@/components/services/CityHubView";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllFlatSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const parsed = parseRouteSlug(params.slug);
  if (!parsed) return {};

  if (parsed.type === "service-general") {
    const { service } = parsed;
    // Strict title format: "[Service] Services | Design Blast Labs"
    const title = `${service.name} Services | ${BRAND}`;
    const description =
      service.metaDescription ||
      `${service.promise} Comprehensive ${service.name.toLowerCase()} solutions engineered for scalable commercial growth.`;
    const canonical = abs(`/${service.slug}`);

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: BRAND,
        type: "website",
      },
    };
  }

  if (parsed.type === "service-city") {
    const { service, city } = parsed;
    // Strict title format: "[Service] Company in [City] | Design Blast Labs"
    const title = `${service.name} Company in ${city.name} | ${BRAND}`;
    const cityAngle = city.serviceAngles[service.slug] || service.promise;
    const description = `${cityAngle} Dedicated ${service.name.toLowerCase()} team delivering measurable growth for ${city.name} businesses.`;
    const canonical = abs(`/${service.slug}-in-${city.slug}`);

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: BRAND,
        type: "website",
      },
    };
  }

  if (parsed.type === "city-hub") {
    const { city } = parsed;
    const title = `Digital Agency in ${city.name} — Websites, Marketing & AI | ${BRAND}`;
    const description = `${city.lede} Website development, digital marketing, social media, SEO and AI automation for ${city.name} businesses.`;
    const canonical = abs(`/${city.slug}`);

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: BRAND,
        type: "website",
      },
    };
  }

  return {};
}

export default function FlatSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const parsed = parseRouteSlug(params.slug);
  if (!parsed) notFound();

  if (parsed.type === "service-general") {
    return <GeneralServiceView service={parsed.service} />;
  }

  if (parsed.type === "service-city") {
    return (
      <CityServiceView
        service={parsed.service}
        city={parsed.city}
        otherCity={parsed.otherCity}
      />
    );
  }

  if (parsed.type === "city-hub") {
    return <CityHubView city={parsed.city} />;
  }

  notFound();
}
