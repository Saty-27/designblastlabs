/**
 * City data behind /[city] and /[city]/[service].
 *
 * `serviceAngles` is the important field: a paragraph written for each
 * city + service combination. Without it these pages would be the same copy
 * with a city name swapped in, which Google classifies as doorway pages and
 * demotes. Every combination here says something that is only true of that
 * market.
 */

export interface CityFaq {
  question: string;
  answer: string;
}

export interface City {
  slug: string;
  /** "Mumbai" */
  name: string;
  /** "Mumbai, Maharashtra" */
  fullName: string;
  region: string;
  country: string;
  /** One line under the H1. */
  lede: string;
  /** Standalone paragraphs about working in this market. */
  body: string[];
  /** Areas we reference for local relevance. */
  areas: string[];
  /** Sectors with real weight in this city. */
  industries: string[];
  /** Working-hours note, since one office is offshore to the other. */
  availability: string;
  faqs: CityFaq[];
  /** Service slug → a paragraph true only of this city + service. */
  serviceAngles: Record<string, string>;
}

export const cities: City[] = [
  {
    slug: "mumbai",
    name: "Mumbai",
    fullName: "Mumbai, Maharashtra",
    region: "Maharashtra",
    country: "India",
    lede:
      "Our head office is in Santacruz East. We work with Mumbai businesses in person when it helps and remotely when it doesn't.",
    body: [
      "Mumbai packs an unusual range of businesses into a small area. A packaging manufacturer in Vikhroli, a D2C brand in Bandra and a financial services firm in BKC are all competing for attention in the same city, and almost nothing transfers between them — the buying cycle, the objections and the channels that work are different in each case.",
      "The practical consequence is that generic agency playbooks underperform here. A campaign tuned for a Lower Parel consumer brand will not generate enquiries for an industrial supplier in Andheri MIDC, however well it is executed. We work from your actual customer and sales cycle rather than from a template with a Mumbai label on it.",
      "Being based in the city matters for some work and not for others. Shoots, workshops and stakeholder sessions go better in a room together. Build and campaign management do not need geography. We are in Santacruz East and happy to come to you when it genuinely adds something.",
    ],
    areas: [
      "Bandra",
      "Andheri",
      "BKC",
      "Lower Parel",
      "Santacruz",
      "Powai",
      "Vikhroli",
      "Goregaon",
      "Navi Mumbai",
      "Thane",
    ],
    industries: [
      "Manufacturing and industrial packaging",
      "D2C and e-commerce",
      "Real estate and developers",
      "Financial services",
      "Education",
      "Hospitality and food",
    ],
    availability:
      "Mumbai office hours, IST. Most clients reach us on WhatsApp between meetings.",
    faqs: [
      {
        question: "Do you meet clients in person in Mumbai?",
        answer:
          "Yes. We are based in Santacruz East and regularly meet clients across the city for kickoffs, shoots and review sessions. Day-to-day work runs over calls and shared documents.",
      },
      {
        question: "Do you work with businesses outside Mumbai?",
        answer:
          "We do — we have offices in Bangalore and Palghar as well, and clients in New York. Mumbai is simply where most of the team sits.",
      },
      {
        question: "What does a project cost in Mumbai?",
        answer:
          "It depends on scope rather than city. We quote after a short call where we understand what you are actually trying to achieve, and the quote is fixed before anything starts.",
      },
    ],
    serviceAngles: {
      "website-development":
        "A large share of Mumbai traffic arrives on mid-range Android phones over patchy mobile data, often on a commute. That is the condition we build for — which usually means being stricter about image weight and third-party scripts than a desktop-first agency would be.",
      "app-development":
        "Mumbai users are unusually storage-conscious, and app size genuinely affects whether an install survives the first month. We keep bundles lean and make offline behaviour sane, because connectivity on the Western line is not something to design around optimistically.",
      "digital-marketing":
        "Mumbai is among the most expensive ad markets in India, and bidding against well-funded national brands on generic terms is rarely winnable for a mid-sized business. We usually find better returns in narrower intent and in neighbourhood-level targeting than in city-wide reach.",
      "social-media-management":
        "Content that performs in Mumbai tends to be bilingual in rhythm even when it is written in English — Hinglish phrasing reads as natural here and stiff elsewhere. We write for how the city actually talks rather than translating a national campaign.",
      "instagram-marketing":
        "Mumbai has a dense creator economy, which means audiences here are fluent in content and quick to skip anything that looks like an ad. Hooks have to earn the first two seconds against unusually strong competition for attention.",
      "facebook-marketing":
        "Facebook still carries real weight in Mumbai's suburbs and among older buying demographics, well after brands have written it off. For property, education and services with a family decision-maker it frequently outperforms Instagram on cost per enquiry.",
      "linkedin-marketing":
        "BKC and Lower Parel concentrate a lot of India's financial and professional services decision-makers, and LinkedIn reaches them more reliably than any other channel. For B2B firms selling into those two postcodes it is usually the first place we would spend.",
      "video-marketing":
        "Mumbai is the easiest city in India to produce in — crew, equipment and locations are all available at short notice and at a range of budgets. That makes multi-deliverable shoot days considerably more affordable here than clients expect.",
      "video-editing":
        "Fast-turnaround post-production for Mumbai creators, commercial brands and real estate firms. We edit Reels, YouTube shows and corporate films with high-retention pacing and multi-format exports.",
      "video-production":
        "Mumbai is India's creative capital with world-class crews, lighting rental houses and diverse filming locations. We handle full on-location and studio shoots across Santacruz, Bandra, BKC, Andheri and Greater Mumbai.",
      seo: "Local search in Mumbai is fought at neighbourhood level. Ranking for a service plus Andheri or Bandra is both more achievable and more valuable than ranking for the same service plus Mumbai, because the intent behind the longer query is closer to a purchase.",
      aeo: "Assistants asked for recommendations in Mumbai lean heavily on directories, aggregators and review sites that often carry outdated information about smaller firms. Getting your own facts consistent across those sources is the first practical move.",
      "ai-automation":
        "WhatsApp is the default business channel in Mumbai, not email. Automations that qualify and route WhatsApp enquiries tend to return more hours here than anything built around an inbox.",
      "google-ads":
        "Mumbai search costs are high enough that match-type discipline matters more than it does in smaller markets. We typically cut wasted spend before increasing budget — most accounts we audit are funding searches the owner would never have chosen.",
    },
  },
  {
    slug: "new-york",
    name: "New York",
    fullName: "New York City",
    region: "New York",
    country: "United States",
    lede:
      "We work with New York businesses remotely, with an overlap window that covers your morning.",
    body: [
      "New York is a crowded, expensive market where buyers compare quickly and decide on specifics. Vague positioning gets filtered out before a conversation starts, which raises the bar on everything public-facing — the website, the profile, the first thirty seconds of a video.",
      "Acquisition costs here are among the highest anywhere, so efficiency matters more than reach. The businesses that do well tend to be narrow and clear rather than broad and polished: a specific service, for a specific customer, with proof attached.",
      "We work with New York clients remotely and have done for some time. Our day overlaps your morning, which in practice means you send feedback at the end of your day and it has been actioned by the time you are back at your desk.",
    ],
    areas: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "SoHo",
      "Tribeca",
      "Williamsburg",
      "Long Island City",
      "The Bronx",
      "Staten Island",
      "Jersey City",
    ],
    industries: [
      "Real estate and brokerage",
      "Hospitality and restaurants",
      "Fashion and apparel",
      "Professional services",
      "Health and wellness",
      "Creators and personal brands",
    ],
    availability:
      "Overlap with ET mornings. Feedback sent at end of day is typically actioned overnight.",
    faqs: [
      {
        question: "You're in India — how does that work for a New York client?",
        answer:
          "Our day overlaps your morning, so there is a live window for calls. The rest runs asynchronously: you send feedback in your evening and it is done before you start the next day. Several clients treat the time difference as an advantage.",
      },
      {
        question: "Do you understand the US market?",
        answer:
          "We work with New York clients in real estate, hospitality and creator brands. Where local nuance matters — compliance language, regional tone — we ask rather than assume.",
      },
      {
        question: "How do payments and contracts work?",
        answer:
          "We invoice in USD and work to a written scope with fixed deliverables. No percentage-of-spend arrangements.",
      },
    ],
    serviceAngles: {
      "website-development":
        "New York buyers skim and bounce fast — there is always another option one tab away. The first screen has to say what you do, who it is for and why you rather than a competitor, because you rarely get a second scroll to make the case.",
      "app-development":
        "New York users are on newer devices and better connections than most markets, which raises expectations rather than lowering them. Anything that stutters reads as broken, so we hold a tighter performance budget for US-facing builds.",
      "digital-marketing":
        "Customer acquisition costs in New York are brutal, which makes retention and lifetime value the decisive numbers. Campaigns optimised purely for first purchase tend to lose money here even when the dashboard looks healthy.",
      "social-media-management":
        "New York audiences respond to specificity — a named neighbourhood, a real price, an actual process. Aspirational brand content without concrete detail gets scrolled past in a market where everyone is producing it.",
      "instagram-marketing":
        "Instagram functions as a storefront in New York, particularly for restaurants, studios and personal brands. Location tags and neighbourhood-level discovery do real commercial work here in a way they do not in most cities.",
      "facebook-marketing":
        "Facebook's value in New York is concentrated in community groups and local intent rather than feed advertising. For neighbourhood services it is often cheaper and more trusted than Instagram.",
      "linkedin-marketing":
        "New York has the deepest concentration of senior decision-makers on LinkedIn anywhere. That makes it effective and expensive in equal measure — targeting has to be narrow, because broad reach here burns budget quickly.",
      "video-marketing":
        "Production costs in New York are high enough that many brands underproduce. We shoot remotely with local crews or direct your team on an iPhone — for short-form, the gap in results is far smaller than the gap in budget.",
      "video-editing":
        "Overnight turnaround on video editing for New York agencies, founders and media companies. Upload your raw footage at the end of your EDT workday, and wake up to polished cuts with color grading and subtitles.",
      "video-production":
        "We coordinate remote production strategy and post-production for New York brands, directing concept, script and multi-platform visual assets that stand out in competitive US markets.",
      seo: "New York search is borough-level. Ranking in Williamsburg or Long Island City is a genuinely different task from ranking across the city, and for most local businesses it is the one actually worth doing.",
      aeo: "New York is well covered by review platforms and local publications, which assistants lean on heavily when asked for recommendations. Being accurately represented in those sources is most of the battle for answer engine optimization here, and it is work that pays off across every assistant at once.",
      "ai-automation":
        "New York businesses lose a lot of margin to admin at the scheduling and intake stage — bookings, qualification, follow-up. Automating that layer typically returns more hours per dollar here than anything customer-facing.",
      "google-ads":
        "New York click costs are among the highest in the world, so Quality Score and landing page relevance carry outsized weight. Fixing the page a campaign points at usually beats raising the bid.",
    },
  },
];

export const citySlugs = cities.map((c) => c.slug);

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
