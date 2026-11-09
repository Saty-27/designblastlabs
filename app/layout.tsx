import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Bebas_Neue,
  Anton,
  Oswald,
  Archivo_Narrow,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/components/ContactModalProvider";
import { abs, locationLinks } from "@/lib/seo/site";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://designblastlabs.com"),
  title: "DESIGN BLAST LABS — Digital Agency & Systems | Mumbai",
  description:
    "We build websites that grow revenue 5X, custom AI agents, apps, and viral social content systems for modern brands.",
  keywords: [
    "Design Blast Labs",
    "Website Development",
    "Custom AI Agents",
    "App Development",
    "Digital Agency Mumbai",
    "Performance Marketing",
    "B2B Websites",
  ],
  authors: [{ name: "Design Blast Labs" }],
  creator: "Design Blast Labs",
  publisher: "Design Blast Labs",
  openGraph: {
    title: "DESIGN BLAST LABS — Digital Agency & Systems",
    description: "Websites that grow revenue 5X. Custom AI agents, apps & viral content.",
    url: "https://designblastlabs.com",
    siteName: "Design Blast Labs",
    images: [
      {
        url: "/brand/logo.svg",
        width: 1200,
        height: 630,
        alt: "Design Blast Labs Brand Identity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/brand/favicon.svg",
    shortcut: "/brand/favicon.svg",
    apple: "/brand/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Design Blast Labs",
  image: "https://designblastlabs.com/brand/logo.svg",
  description: "Creative technology digital agency specializing in high-converting websites, AI agents, mobile apps, and growth marketing.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13/101, Design Blast, Anand Nagar, Santacruz East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400055",
    addressCountry: "IN",
  },
  telephone: "+918928794211",
  email: "hello@designblastlabs.online",
  url: "https://designblastlabs.com",
  priceRange: "$$$",
};

/**
 * City landing pages, declared for crawlers rather than listed in the footer.
 * Pairs with sitemap.xml — both point at the same canonical URLs.
 */
const navigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Design Blast Labs locations and services",
  itemListElement: locationLinks.map((l, i) => ({
    "@type": "SiteNavigationElement",
    position: i + 1,
    name: l.label,
    url: abs(l.href),
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${barlowCondensed.variable}
        ${bebasNeue.variable}
        ${anton.variable}
        ${oswald.variable}
        ${archivoNarrow.variable}
        ${inter.variable}
        ${jetbrainsMono.variable}
      `}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationJsonLd) }}
        />
      </head>
      <body className="bg-white text-blast-black font-sans antialiased selection:bg-blast-orange selection:text-white">
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
