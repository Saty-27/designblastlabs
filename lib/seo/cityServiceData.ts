/**
 * Unique city-specific content for Mumbai and New York service pages.
 * Ensures that city pages provide genuine local relevance (local areas, local FAQs,
 * real client proof, and market realities) rather than generic copy with city names swapped.
 */

export interface LocalTestimonial {
  clientName: string;
  industry: string;
  neighborhood: string;
  quote: string;
  metric: string;
  metricLabel: string;
}

export interface LocalFaq {
  question: string;
  answer: string;
}

export function getLocalTestimonials(citySlug: string): LocalTestimonial[] {
  if (citySlug === "mumbai") {
    return [
      {
        clientName: "Europack Industries",
        industry: "Industrial Manufacturing",
        neighborhood: "Vikhroli & Andheri, Mumbai",
        quote:
          "Design Blast Labs redesigned our corporate infrastructure and B2B RFQ pipeline. We immediately saw a 300% increase in qualified industrial inquiries across Maharashtra and international export markets.",
        metric: "+300%",
        metricLabel: "Search Traffic & RFQ Enquiries",
      },
      {
        clientName: "Dr. Sharma Multispecialty Clinic",
        industry: "Healthcare & Specialized Medicine",
        neighborhood: "Bandra West, Mumbai",
        quote:
          "Our patient acquisition and booking flow was modernized completely. The team implemented WhatsApp appointment triage and local Bandra/Khar search optimization that eliminated missed slots.",
        metric: "<1.2s",
        metricLabel: "Mobile Load Speed",
      },
      {
        clientName: "Kiah World",
        industry: "Fashion & Lifestyle D2C",
        neighborhood: "Santacruz & Bandra, Mumbai",
        quote:
          "Their studio shoots in Mumbai and rapid Reels editing gave us our first viral campaign with over 10 million organic views. Their pacing and retention editing are on an entirely different level.",
        metric: "10M+",
        metricLabel: "Organic Social Reach",
      },
    ];
  }

  // New York City
  return [
    {
      clientName: "FinTrack Wealth Management",
      industry: "Financial Technology & Wealth",
      neighborhood: "Midtown Manhattan, New York",
      quote:
        "In a market as demanding as New York, speed and precision are non-negotiable. Design Blast Labs delivered our institutional investor web platform with sub-1.2s transitions and pristine design.",
      metric: "<1.2s",
      metricLabel: "Interaction Latency",
    },
    {
      clientName: "D2C Gourmet Beverage",
      industry: "Consumer Goods & E-Commerce",
      neighborhood: "SoHo, New York",
      quote:
        "The team handles our performance video edits and headless Shopify storefront. Working across time zones was seamless: our feedback logged at 5 PM EDT was deployed and ready by morning.",
      metric: "3.8X",
      metricLabel: "Return on Ad Spend (ROAS)",
    },
    {
      clientName: "Founder Brand Series",
      industry: "Executive Media & Technology",
      neighborhood: "Williamsburg & DUMBO, New York",
      quote:
        "Design Blast Labs produced our long-form documentary interview cuts and LinkedIn short-form clips. High-taste editing, cinematic color grading, and zero administrative friction.",
      metric: "1.2M+",
      metricLabel: "US Impressions Delivered",
    },
  ];
}

export function getLocalFaqs(citySlug: string, serviceName: string, serviceSlug: string): LocalFaq[] {
  if (citySlug === "mumbai") {
    return [
      {
        question: `Do you meet clients in person in Mumbai for ${serviceName}?`,
        answer:
          "Yes. Our headquarters is located in Santacruz East (13/101, Anand Nagar). We regularly conduct in-person strategy kickoffs, stakeholder workshops, and production shoots across Bandra, BKC, Lower Parel, and Andheri.",
      },
      {
        question: `How do you adapt ${serviceName} specifically for Mumbai's market conditions?`,
        answer:
          "In Mumbai, mobile optimization is vital due to heavy commuter traffic on cellular data. We enforce strict performance budgets (<2s load on 4G). For marketing and automation, we integrate WhatsApp Cloud API (the primary commercial channel in Mumbai) and calibrate bilingual cultural nuances for maximum local response.",
      },
      {
        question: `What industries do you work with across Greater Mumbai?`,
        answer:
          "We actively build for B2B industrial manufacturers in Andheri MIDC and Vikhroli, real estate developers in Thane and Navi Mumbai, healthcare practices in Bandra and South Mumbai, and D2C brands throughout the western suburbs.",
      },
      {
        question: `What is the typical pricing and timeline for ${serviceName} in Mumbai?`,
        answer:
          "We work exclusively on clear, fixed-scope proposals rather than open-ended billing. Standard sprints run between 2 to 6 weeks depending on technical complexity. We provide a full scope breakdown within 24 hours of our initial strategy call.",
      },
    ];
  }

  // New York City
  return [
    {
      question: `How does working remotely with Design Blast Labs work for New York clients?`,
      answer:
        "We maintain a structured hybrid workflow. We hold live strategy and review calls during US Eastern Time mornings. Technical build sprints and post-production happen overnight, meaning feedback sent at 5:00 PM EDT is routinely addressed and live by 9:00 AM EDT the next morning.",
    },
    {
      question: `How do you tackle the competitive acquisition landscape in New York?`,
      answer:
        "Customer Acquisition Costs (CAC) in New York are among the steepest globally. We eliminate wasted spend through rigorous Quality Score engineering, hyper-targeted borough-level SEO (e.g. SoHo, Williamsburg, Long Island City), and high-retention video creative designed to capture fast-scrolling audiences.",
    },
    {
      question: `How do contracts, IP ownership, and payments work for US businesses?`,
      answer:
        "We invoice in USD via standard international wire/ACH, provide standard W-8BEN compliance documentation, and transfer 100% intellectual property, code, and asset ownership upon milestone completion. There are zero licensing lock-ins.",
    },
    {
      question: `Can you produce video or creative content remotely for New York brands?`,
      answer:
        "Yes. We frequently direct on-location iPhone or cinema shoots remotely with US crews, and handle all post-production (4K editing, sound engineering, kinetic motion graphics, and color grading) in-house with rapid turnaround.",
    },
  ];
}
