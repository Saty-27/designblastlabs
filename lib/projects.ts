/**
 * Portfolio data. Lives outside the client component so server components
 * (the service landing pages) can import it without crossing the RSC boundary.
 */

export type WorkFilter = "all" | "websites" | "apps" | "social" | "ai";

export interface Project {
  id: string;
  name: string;
  /** Category line shown under the visual. */
  category: string;
  /** Which filters this project belongs to. */
  tags: Exclude<WorkFilter, "all">[];
  /** null renders the placeholder slot. Original screenshots noted per project. */
  image: string | null;
  href: string;
  /** true when href points off-site, so the card opens in a new tab. */
  external?: boolean;
  /** One card is emphasised in orange. */
  accent?: boolean;
}

export const projects: Project[] = [
  {
    // Captured logged out on purpose — the supplied screenshot showed a signed-in
    // account with a name, postcode and browsing history.
    id: "amazon",
    name: "AMAZON",
    category: "AI Automation",
    tags: ["ai"],
    image: "/projects/amazon/website.webp",
    href: "https://www.amazon.in/",
    external: true,
  },
  {
    // Image pending: blackrock.com renders unstyled in a headless browser, so a
    // supplied screenshot is needed. Placeholder shows until then.
    id: "blackrock",
    name: "BLACKROCK",
    category: "AI Automation",
    tags: ["ai"],
    image: null,
    href: "https://www.blackrock.com/",
    external: true,
  },
  {
    // CONFIRM: category is a guess — set it to the work actually delivered.
    id: "tata",
    name: "TATA",
    category: "Website Development",
    tags: ["websites"],
    image: "/projects/tata/website.webp",
    href: "#case-studies",
  },
  {
    id: "europack",
    name: "EUROPACK INDUSTRIES",
    category: "Website + Google Ads",
    tags: ["websites"],
    image: "/projects/europack/website.webp",
    href: "#case-studies",
  },
  {
    id: "educonnect-ai",
    name: "EDUCONNECT AI",
    category: "AI + Web Application",
    tags: ["websites", "ai"],
    image: "/projects/educonnect-ai/website.webp",
    href: "https://iskconjuhuipp.online/",
    external: true,
    accent: true,
  },
  {
    // CONFIRM: no live URL supplied for this one yet.
    id: "aether",
    name: "AETHER",
    category: "Website Development",
    tags: ["websites"],
    image: "/projects/aether/website.webp",
    href: "#case-studies",
  },
  {
    id: "gauranitai",
    name: "GAURANITAI",
    category: "Website Development",
    tags: ["websites"],
    image: "/projects/gauranitai/website.webp",
    href: "https://gauranitai.in/",
    external: true,
  },
  {
    id: "milkvilla",
    name: "MILKVILLA",
    category: "App Development",
    tags: ["apps"],
    image: "/projects/milkvilla/playstore.webp",
    href: "https://play.google.com/store/apps/details?id=com.grobo.milkybay",
    external: true,
  },
  {
    id: "prime-leather",
    name: "PRIME LEATHER",
    category: "App Development",
    tags: ["apps"],
    image: "/projects/prime-leather/playstore.webp",
    href: "https://play.google.com/store/apps/details?id=com.simicart.primeleather",
    external: true,
  },
  {
    id: "vr-packaging",
    name: "VR PACKAGING SOLUTIONS",
    category: "Website Development",
    tags: ["websites"],
    image: "/projects/vr-packaging/website.webp",
    href: "https://vrpack.co.in/",
    external: true,
  },
  {
    // CONFIRM: URL inferred from the screenshot's branding.
    id: "moneyview",
    name: "MONEYVIEW",
    category: "AI Automation",
    tags: ["ai"],
    image: "/projects/moneyview/website.webp",
    href: "https://moneyview.in/",
    external: true,
  },
  {
    id: "zomato",
    name: "ZOMATO",
    category: "AI Automation",
    tags: ["ai"],
    image: "/projects/zomato/website.webp",
    href: "https://www.zomato.com/",
    external: true,
  },
  {
    // CONFIRM: no live URL supplied for this one yet.
    id: "meta",
    name: "META",
    category: "AI Automation",
    tags: ["ai"],
    image: "/projects/meta/website.webp",
    href: "#case-studies",
  },
  {
    // CONFIRM: category is a guess — set it to the work actually delivered.
    id: "bajaj",
    name: "BAJAJ FINSERV",
    category: "AI Automation",
    tags: ["ai"],
    image: "/projects/bajaj/website.webp",
    href: "https://www.bajajfinserv.in/",
    external: true,
  },
  {
    id: "hiranandani",
    name: "HIRANANDANI DEVELOPERS",
    category: "Social Media Marketing",
    tags: ["social"],
    image: "/projects/hiranandani/instagram.webp",
    href: "https://www.instagram.com/hiranandanidevelopers/",
    external: true,
  },
  {
    id: "jasonnycrealtor",
    name: "JASON NYC REALTOR",
    category: "Social Media Marketing",
    tags: ["social"],
    image: "/projects/jasonnycrealtor/instagram.webp",
    href: "https://www.instagram.com/jasonnycrealtor/",
    external: true,
  },
  {
    id: "thekatherinerae",
    name: "THEKATHERINERAE",
    category: "Social Media Marketing",
    tags: ["social"],
    image: "/projects/thekatherinerae/instagram.webp",
    href: "https://www.instagram.com/thekatherinerae/",
    external: true,
  },
  {
    id: "new-fork-city",
    name: "NEW FORK CITY",
    category: "Social Media Marketing",
    tags: ["social"],
    image: "/projects/new-fork-city/instagram.webp",
    href: "https://www.instagram.com/new_fork_city/",
    external: true,
  },
  {
    // Image pending: instagram.com requires a login, so it can't be captured here.
    id: "weworewhat",
    name: "WEWOREWHAT",
    category: "Social Media Marketing",
    tags: ["social"],
    image: null,
    href: "https://www.instagram.com/weworewhat/",
    external: true,
  },
  {
    // Image pending: instagram.com requires a login, so it can't be captured here.
    id: "serhant",
    name: "SERHANT",
    category: "Social Media Marketing",
    tags: ["social"],
    image: null,
    href: "https://www.instagram.com/serhant/",
    external: true,
  },
  {
    // CONFIRM: category is a guess — set it to the work actually delivered.
    id: "iskcon-juhu",
    name: "ISKCON JUHU",
    category: "Social Media Marketing",
    tags: ["social"],
    image: "/projects/iskcon-juhu/website.jpg",
    href: "#case-studies",
  },
];
