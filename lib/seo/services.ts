/**
 * Service definitions behind every /services/* and /[city]/[service] page.
 *
 * Each entry carries rich, authoritative substance. Designed for high conversion,
 * clear search intent, and discoverability across Google Search and Generative AI engines.
 */

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceComparisonPoint {
  feature: string;
  dblApproach: string;
  othersApproach: string;
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
  timeline?: string;
}

export interface ServiceTechItem {
  name: string;
  category: string;
  note?: string;
}

export interface ServiceCapability {
  eyebrow?: string;
  title: string;
  description: string;
  deliverables?: string[];
  theme?: "light" | "dark" | "accent";
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  seoTitle?: string;
  metaDescription?: string;
  eyebrow?: string;
  h1Title?: string;
  promise: string;
  body: string[];
  heroImage?: string;
  heroAlt?: string;
  floatingBadge?: { title: string; subtitle: string };
  trustBadges?: { value: string; label: string }[];
  capabilities?: ServiceCapability[];
  comparisonPoints?: ServiceComparisonPoint[];
  processSteps?: ServiceProcessStep[];
  techStack?: ServiceTechItem[];
  deliverables: ServiceDeliverable[];
  outcomes: string[];
  faqs: ServiceFaq[];
  related: string[];
  workFilter: "websites" | "apps" | "social" | "ai";
}

export const services: Service[] = [
  // ── 01. WEBSITE DEVELOPMENT (Priority 1) ──────────────────────────────────
  {
    slug: "website-development",
    name: "Website Development",
    shortName: "Websites",
    seoTitle: "Website Development Company in Mumbai | Design Blast Labs",
    metaDescription:
      "Looking for a website development company in Mumbai? Design Blast Labs creates custom, responsive and SEO-friendly business websites, e-commerce stores and web applications.",
    eyebrow: "WEBSITE DEVELOPMENT COMPANY IN MUMBAI",
    h1Title: "WEBSITES BUILT TO TURN YOUR DIGITAL PRESENCE INTO BUSINESS GROWTH.",
    promise:
      "Custom websites built to load in under 2 seconds, communicate your value clearly, and turn visitors into qualified enquiries.",
    heroImage: "/assets/services/website-development.webp",
    heroAlt: "Custom B2B website development preview on desktop and mobile",
    floatingBadge: {
      title: "+180% CONVERSION RATE",
      subtitle: "Verified Post-Launch Uplift",
    },
    trustBadges: [
      { value: "<2s", label: "Mobile Load Speed" },
      { value: "100%", label: "Custom Architecture" },
      { value: "Clean", label: "Zero Vendor Lock-in" },
    ],
    body: [
      "Your website is the single most critical asset in your digital ecosystem. For most customers, partners, and investors, it is their first real interaction with your business. When a website looks outdated, takes five seconds to load on a phone, or buries the contact path behind confusing menus, you lose credibility and revenue before the conversation even begins.",
      "At Design Blast Labs, we develop custom, responsive, and search-optimized business websites, e-commerce storefronts, and web applications. Every project is built from scratch around your sales cycle, customer objections, and commercial objectives — never from bloated, generic commercial themes that slow down your business.",
      "By combining modern frontend engineering (Next.js, React, TypeScript, Tailwind CSS) with clean technical SEO and conversion-focused UX design, we deliver websites that not only look like an international digital agency built them, but actively generate pipeline for your team.",
    ],
    capabilities: [
      {
        eyebrow: "CUSTOM WEB ENGINEERING",
        title: "Corporate & Business Websites",
        description:
          "High-performance corporate sites tailored for industrial suppliers, B2B services, consultancies, and modern enterprises seeking market authority.",
        deliverables: [
          "Bespoke UI/UX wireframes & Figma prototypes",
          "Clean Next.js & React frontend architecture",
          "Semantic HTML & structured JSON-LD schema",
          "Full mobile responsiveness across all viewports",
        ],
        theme: "light",
      },
      {
        eyebrow: "E-COMMERCE PLATFORMS",
        title: "High-Converting E-Commerce Stores",
        description:
          "Bespoke Shopify and custom headless e-commerce builds designed to minimize cart abandonment and maximize average order value.",
        deliverables: [
          "Seamless checkout and payment gateway integrations",
          "Real-time inventory and shipping API connections",
          "Product variant architecture & high-speed image CDN",
          "Automated post-purchase review & email flows",
        ],
        theme: "dark",
      },
      {
        eyebrow: "MODERNIZATION",
        title: "Website Redesign & Migration",
        description:
          "Upgrading outdated legacy sites into fast, modern platforms without sacrificing existing Google search rankings or domain authority.",
        deliverables: [
          "Comprehensive 301 URL redirect mapping",
          "Preservation of high-ranking keyword landing pages",
          "Complete UI/UX refresh to current design standards",
          "Elimination of technical code debt & bloated plugins",
        ],
        theme: "accent",
      },
      {
        eyebrow: "PERFORMANCE & VITALS",
        title: "Speed Optimization & Core Web Vitals",
        description:
          "Engineering web pages that render in under two seconds on mid-range smartphones over 4G mobile networks.",
        deliverables: [
          "Next-gen image formatting (WebP/AVIF) & lazy loading",
          "Zero layout shifts (CLS < 0.05) & instant interactivity",
          "Server-side rendering (SSR) & static pre-generation",
          "Minified CSS and JavaScript bundle trees",
        ],
        theme: "light",
      },
      {
        eyebrow: "WEB APPLICATIONS",
        title: "Custom Web Applications & Portals",
        description:
          "Interactive client portals, multi-step quotation calculators, custom booking engines, and internal admin panels.",
        deliverables: [
          "Secure authentication & role-based permissions",
          "PostgreSQL & Supabase database architecture",
          "RESTful & GraphQL API integrations",
          "Real-time data visualization & report exports",
        ],
        theme: "light",
      },
      {
        eyebrow: "CONTENT INDEPENDENCE",
        title: "Intuitive CMS & Repository Handover",
        description:
          "Edit your content, add case studies, and update pricing independently without risking broken layouts.",
        deliverables: [
          "Tailored WordPress, Webflow or Headless CMS setups",
          "100% full repository ownership on GitHub",
          "Zero recurring vendor lock-in or proprietary fees",
          "Video walkthrough training for your internal team",
        ],
        theme: "light",
      },
    ],
    comparisonPoints: [
      {
        feature: "Underlying Architecture",
        dblApproach: "Custom Next.js & React builds engineered specifically for your business logic.",
        othersApproach: "Purchased $50 WordPress templates bloated with 40+ third-party plugins.",
      },
      {
        feature: "Mobile Loading Speed",
        dblApproach: "Sub-2-second loads on mobile devices with verified 90+ Google PageSpeed scores.",
        othersApproach: "Sluggish 6–10 second load times caused by uncompressed assets and heavy themes.",
      },
      {
        feature: "Technical SEO Foundations",
        dblApproach: "Semantic HTML5, automated XML sitemaps, structured schema, and canonical tags built-in.",
        othersApproach: "Basic metadata left blank or reliant on conflicting third-party SEO plugins.",
      },
      {
        feature: "Conversion Flow & UX",
        dblApproach: "Every page has dedicated enquiry pathways, social proof, and clear next steps.",
        othersApproach: "Generic brochure layouts with a lonely contact button buried on page five.",
      },
      {
        feature: "Asset & Code Ownership",
        dblApproach: "You own 100% of your source code, domain, hosting accounts, and media assets.",
        othersApproach: "Proprietary agency lock-in where you cannot move your website if you leave.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "DISCOVERY & WIREFRAMING",
        description:
          "We analyze your audience, sales cycle, and competitor landscape to map the page architecture and write the core messaging hierarchy.",
        timeline: "Week 1",
      },
      {
        number: "02",
        title: "BESPOKE UI/UX DESIGN",
        description:
          "We create high-fidelity Figma prototypes for desktop and mobile, establishing the design system, typography, and visual assets.",
        timeline: "Weeks 1–2",
      },
      {
        number: "03",
        title: "FRONTEND & CMS DEVELOPMENT",
        description:
          "We engineer the site with Next.js, TypeScript, and Tailwind CSS, integrating CMS fields, forms, and third-party APIs.",
        timeline: "Weeks 2–4",
      },
      {
        number: "04",
        title: "PERFORMANCE AUDIT & GO-LIVE",
        description:
          "Rigorous cross-browser testing, Core Web Vitals optimization, 301 redirect validation, and smooth production deployment.",
        timeline: "Weeks 4–5",
      },
    ],
    techStack: [
      { name: "Next.js", category: "Full-Stack Framework", note: "Server-side rendering & static generation" },
      { name: "React", category: "UI Library", note: "Component-driven interface development" },
      { name: "TypeScript", category: "Language", note: "Type-safe, robust code execution" },
      { name: "Tailwind CSS", category: "Styling", note: "Zero runtime CSS overhead" },
      { name: "Shopify", category: "E-Commerce", note: "Custom theme & headless integration" },
      { name: "WordPress", category: "CMS", note: "Headless or custom ACF theme architecture" },
      { name: "Node.js", category: "Backend", note: "Custom APIs & microservices" },
      { name: "PostgreSQL", category: "Database", note: "Reliable relational data storage" },
    ],
    deliverables: [
      {
        title: "Custom Brand Design",
        description: "Bespoke responsive Figma design system matching your exact brand identity and guidelines.",
      },
      {
        title: "Production Frontend Engineering",
        description: "Modern, hand-crafted Next.js/React codebase thoroughly tested on real smartphone screens.",
      },
      {
        title: "Technical SEO & Schema",
        description: "Full JSON-LD structured data, Open Graph meta tags, canonical URLs, and dynamic sitemaps.",
      },
      {
        title: "Conversion Architecture",
        description: "Direct booking modal integrations, WhatsApp chat buttons, and lead routing webhooks.",
      },
      {
        title: "CMS & Code Ownership",
        description: "Complete Git repository access, deployment pipeline setup, and administrative CMS access.",
      },
    ],
    outcomes: [
      "A website that renders in around 2 seconds on mobile data",
      "Noticeably higher conversion rates from visitors to qualified enquiries",
      "Clean semantic architecture that Google and AI search engines easily crawl",
      "Full ownership of your source code and content management system",
    ],
    faqs: [
      {
        question: "How much does a custom business website cost in Mumbai?",
        answer:
          "Our website projects typically range from ₹50,000 to ₹3,00,000+ depending on whether you need a streamlined business landing site, a multi-page corporate platform, or an advanced custom e-commerce solution. We provide a transparent, fixed-scope quote following our initial 20-minute discovery call — no surprise fees.",
      },
      {
        question: "How long does it take to design and launch a website?",
        answer:
          "Most standard corporate websites go live within 3 to 5 weeks. More complex e-commerce stores or custom web applications with third-party ERP/CRM integrations take 6 to 8 weeks. Timelines depend heavily on how quickly content assets and review feedback are approved.",
      },
      {
        question: "Can we edit our own website content after launch?",
        answer:
          "Yes. We configure intuitive CMS dashboards (WordPress, Webflow, or headless setups) for everything that changes regularly: blog articles, team bios, case studies, client testimonials, and product listings. You can update text and images anytime without touching code.",
      },
      {
        question: "Will our website preserve its existing Google search rankings during a redesign?",
        answer:
          "Yes. We conduct a thorough pre-launch URL inventory and implement strict 1-to-1 301 redirects, maintain existing on-page keyword structures, and submit updated XML sitemaps to Google Search Console to ensure your organic traffic is preserved.",
      },
      {
        question: "Will the website be optimized for mobile smartphones?",
        answer:
          "Mobile-first is our non-negotiable standard. Over 70% of web traffic in India arrives on smartphones over mobile connections. Every button, layout, typography scale, and image is specifically designed and verified on actual Android and iOS devices.",
      },
      {
        question: "Do you provide hosting, domain setup, and ongoing maintenance?",
        answer:
          "Yes. We can purchase and configure domains, configure fast cloud hosting on Vercel or AWS, set up SSL security certificates, and provide ongoing monthly maintenance, security patching, and speed monitoring packages.",
      },
    ],
    related: ["ai-automation", "app-development", "seo", "digital-marketing"],
    workFilter: "websites",
  },

  // ── 02. AI AUTOMATION & AI AGENTS (Priority 2) ───────────────────────────
  {
    slug: "ai-automation",
    name: "AI Automation & AI Agents",
    shortName: "AI Automation",
    seoTitle: "AI Automation Agency in Mumbai | AI Agent Development",
    metaDescription:
      "Looking for an AI automation agency in Mumbai? Design Blast Labs develops custom AI agents, intelligent workflows, AI assistants and business process automation solutions.",
    eyebrow: "AI AUTOMATION & AGENT DEVELOPMENT",
    h1Title: "MAKE YOUR BUSINESS SMARTER WITH AI AUTOMATION.",
    promise:
      "Custom AI agents, intelligent WhatsApp workflows, and automated business operations that eliminate repetitive tasks and save your team 70% of manual hours.",
    heroImage: "/assets/services/ai-agents.webp",
    heroAlt: "AI agent workflow automation dashboard and pipeline",
    floatingBadge: {
      title: "70% FASTER OPERATIONS",
      subtitle: "Autonomous Pipeline Execution",
    },
    trustBadges: [
      { value: "24/7", label: "Instant Qualification" },
      { value: "Private", label: "Enterprise Data Security" },
      { value: "No-Code", label: "n8n & API Workflows" },
    ],
    body: [
      "Manual processes, repetitive data entry, and disconnected business tools drain operational momentum and inflate overhead costs. When your team spends hours manually answering the same customer questions, copy-pasting lead details from WhatsApp into your CRM, or reviewing invoices line by line, high-value strategy takes a backseat.",
      "Design Blast Labs builds production-grade AI agents and intelligent workflow automations for growing companies. We do not build toy chatbots that hallucinate or give vague canned responses. We engineer reliable, deterministic AI systems that connect to your real business tools, read company documentation, qualify prospective buyers, and trigger actions in your databases.",
      "Whether you need an autonomous WhatsApp sales assistant that books consultations while you sleep, an automated document extraction pipeline that parses vendor receipts into your accounting software, or a private internal knowledge assistant, we tailor each solution to your actual operational architecture.",
    ],
    capabilities: [
      {
        eyebrow: "AUTONOMOUS SYSTEMS",
        title: "Custom AI Agent Development",
        description:
          "Goal-directed AI agents equipped with verified tool access to query internal databases, schedule appointments, and execute multi-step workflows autonomously.",
        deliverables: [
          "Anthropic Claude 3.5 & OpenAI GPT-4o agent logic",
          "Tool-use execution with strict verification boundaries",
          "Automatic escalation to human team members when needed",
          "Comprehensive logging and audit trails for every run",
        ],
        theme: "accent",
      },
      {
        eyebrow: "CONVERSATIONAL COMMERCE",
        title: "WhatsApp AI Sales & Support Assistants",
        description:
          "Transform your most important business channel into an automated growth engine that qualifies leads and responds in seconds.",
        deliverables: [
          "Official WhatsApp Cloud API verification and setup",
          "Bilingual English/Hindi natural conversational flow",
          "Instant product catalog queries & quotation calculation",
          "Direct synchronization with Google Sheets, HubSpot & Zoho",
        ],
        theme: "dark",
      },
      {
        eyebrow: "SALES OPERATIONS",
        title: "CRM & Inbound Lead Qualification",
        description:
          "Instantly score incoming website and social media leads, enrich company records, and route high-value prospects to the right account executive.",
        deliverables: [
          "Zero-latency webhook ingestion from landing forms",
          "Automated company firmographic enrichment",
          "Custom lead scoring rules based on budget & intent",
          "Slack, email, and SMS notifications for hot leads",
        ],
        theme: "light",
      },
      {
        eyebrow: "INTELLIGENT OCR",
        title: "Document Processing & Data Extraction",
        description:
          "Eliminate manual data entry by extracting structured key-value pairs from PDFs, invoices, purchase orders, and contracts.",
        deliverables: [
          "Vision-language model processing of scanned receipts",
          "Structured JSON export directly into ERP or accounting tools",
          "Validation checks against database master records",
          "99%+ accuracy with automated exception flagging",
        ],
        theme: "light",
      },
      {
        eyebrow: "INTERNAL SEARCH",
        title: "Private RAG Knowledge Assistants",
        description:
          "Empower your employees to query company SOPs, technical manuals, past proposals, and legal policies using secure retrieval-augmented generation.",
        deliverables: [
          "Private vector database indexing (Supabase / Pinecone)",
          "Strict data isolation with zero model training on your data",
          "Exact source citation footnotes for every generated answer",
          "Slack and web browser internal chat interfaces",
        ],
        theme: "light",
      },
      {
        eyebrow: "WORKFLOW CONNECTIVITY",
        title: "Cross-Platform n8n & API Automation",
        description:
          "Connect your marketing, sales, accounting, and communication tools into unified automated pipelines that run 24/7 without recurring per-task fees.",
        deliverables: [
          "Self-hosted or managed n8n workflow deployment",
          "Custom webhook handlers and API connectors",
          "Automated retry logic and error alert systems",
          "Zero reliance on fragile manual file transfers",
        ],
        theme: "light",
      },
    ],
    comparisonPoints: [
      {
        feature: "Core System Capability",
        dblApproach: "Autonomous AI agents that use approved tools, query live APIs, and update databases.",
        othersApproach: "Basic rigid chatbots that only spit out canned FAQ answers or hallucinate.",
      },
      {
        feature: "Data Privacy & Security",
        dblApproach: "Zero model retention agreements; company data is never used to train public models.",
        othersApproach: "Pasting sensitive company data into consumer ChatGPT accounts with no governance.",
      },
      {
        feature: "Channel Native Execution",
        dblApproach: "WhatsApp Cloud API, Slack, CRM webhooks, and private internal web dashboards.",
        othersApproach: "Clunky generic website pop-up widgets that visitors immediately close.",
      },
      {
        feature: "Software Cost & Licensing",
        dblApproach: "Open architectures using self-hosted n8n and pay-per-token model APIs (cents per day).",
        othersApproach: "Expensive closed SaaS subscriptions that charge exorbitant fees per task execution.",
      },
      {
        feature: "Human Fallback Integration",
        dblApproach: "Graceful handover to live staff whenever sentiment, complexity, or risk thresholds trigger.",
        othersApproach: "Dead-end loops where frustrated buyers cannot reach an actual human.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "OPERATIONAL AUDIT",
        description:
          "We analyze your team's repetitive weekly tasks, identify data bottlenecks, and pinpoint high-ROI automation opportunities.",
        timeline: "Week 1",
      },
      {
        number: "02",
        title: "ARCHITECTURE & PROMPTING",
        description:
          "We structure the system prompt, establish strict guardrails, configure vector databases, and build API tool definitions.",
        timeline: "Weeks 1–2",
      },
      {
        number: "03",
        title: "PIPELINE INTEGRATION",
        description:
          "We connect the agent to WhatsApp Cloud API, your CRM, internal databases, and communication channels via n8n workflows.",
        timeline: "Weeks 2–3",
      },
      {
        number: "04",
        title: "BENCHMARKING & HANDOVER",
        description:
          "We run multi-scenario edge case testing, verify zero-hallucination accuracy, and train your staff on monitoring the system.",
        timeline: "Weeks 3–4",
      },
    ],
    techStack: [
      { name: "Claude 3.5 Sonnet", category: "LLM Model", note: "Top-tier reasoning and tool-calling" },
      { name: "GPT-4o", category: "LLM Model", note: "Multimodal text and vision extraction" },
      { name: "Google Gemini", category: "LLM Model", note: "Long-context document analysis" },
      { name: "n8n", category: "Workflow Engine", note: "Self-hosted private workflow automation" },
      { name: "Python", category: "Backend Engine", note: "Custom agent logic and API pipelines" },
      { name: "Supabase", category: "Vector Store", note: "pgvector embeddings & secure storage" },
      { name: "WhatsApp Cloud API", category: "Messaging", note: "Official verified business integration" },
      { name: "HubSpot / Zoho", category: "CRM", note: "Automated record synchronization" },
    ],
    deliverables: [
      {
        title: "Custom AI Agent System",
        description: "Configured LLM agent with verified tool-use capabilities, custom system prompts, and edge-case guardrails.",
      },
      {
        title: "WhatsApp & CRM Pipeline",
        description: "End-to-end integration connecting WhatsApp inbound leads to your sales team's pipeline in real time.",
      },
      {
        title: "Document Parsing Engine",
        description: "Vision-language extraction workflow exporting clean JSON from invoices, purchase orders, or forms.",
      },
      {
        title: "Monitoring & Admin Portal",
        description: "Live dashboard tracking conversation logs, execution success rates, and token usage costs.",
      },
      {
        title: "Team SOPs & Video Training",
        description: "Step-by-step documentation showing how to adjust prompts, add new tools, and inspect workflow logs.",
      },
    ],
    outcomes: [
      "Immediate reduction of 60–80% in manual administrative and data-entry hours",
      "Inbound WhatsApp inquiries qualified and routed within 15 seconds 24/7",
      "Near-zero data entry errors across invoice and CRM pipelines",
      "Predictable, low running costs using direct pay-per-use AI model APIs",
    ],
    faqs: [
      {
        question: "What is the difference between an AI chatbot and an autonomous AI agent?",
        answer:
          "A chatbot is a conversational interface that matches keywords or prompts to return predefined text answers. An autonomous AI agent, by contrast, possesses 'tool access': it can reason about a multi-step objective, query your database to look up inventory, calculate pricing, create a calendar invite, and write records back to your CRM without human intervention.",
      },
      {
        question: "How does AI automation connect with WhatsApp?",
        answer:
          "We use the official Meta WhatsApp Cloud API. This gives your business a verified phone number that connects to our automation backend. Inbound messages trigger intelligent reasoning workflows that look up product specs, answer questions, qualify the lead, and notify your sales team instantly.",
      },
      {
        question: "Is our proprietary business data safe when using AI?",
        answer:
          "Yes. We strictly utilize enterprise API endpoints from Anthropic and OpenAI that carry explicit contractual guarantees: zero data retention for training, data encryption in transit and at rest, and strict tenant isolation. Your customer and company data is never used to train public foundation models.",
      },
      {
        question: "What business operations can realistically be automated in 30 days?",
        answer:
          "The fastest high-ROI automations are: 1) WhatsApp inbound lead qualification and appointment booking; 2) Invoice and receipt data extraction into accounting systems; 3) CRM contact enrichment from website inquiries; and 4) Internal FAQ/SOP search assistants for team members.",
      },
      {
        question: "What happens if the AI agent encounters a question it cannot answer?",
        answer:
          "We program deterministic fallback rules and confidence scoring thresholds into every agent. If a user's question falls outside the agent's knowledge base or sentiment analysis indicates frustration, the system politely halts autonomous replies and immediately notifies a human representative with the full transcript.",
      },
      {
        question: "Do we have to pay expensive monthly software subscriptions?",
        answer:
          "No. We build on open-standard tools and self-hosted workflow engines like n8n combined with direct model API keys (OpenAI / Anthropic). You only pay direct per-token API costs, which typically amount to a few hundred rupees per month even for thousands of inquiries.",
      },
    ],
    related: ["website-development", "app-development", "social-media-management"],
    workFilter: "ai",
  },

  // ── 03. SOCIAL MEDIA MARKETING (Priority 3) ──────────────────────────────
  {
    slug: "social-media-management",
    name: "Social Media Marketing",
    shortName: "Social Media",
    seoTitle: "Social Media Marketing Agency in Mumbai | Design Blast Labs",
    metaDescription:
      "Grow your business with a social media marketing agency in Mumbai. Design Blast Labs provides social media strategy, Instagram marketing, content creation, campaign management and paid advertising.",
    eyebrow: "SOCIAL MEDIA MARKETING AGENCY IN MUMBAI",
    h1Title: "TURN YOUR SOCIAL MEDIA PRESENCE INTO A BUSINESS GROWTH ENGINE.",
    promise:
      "Strategic content production, viral short-form Reels, and platform management that builds brand authority and converts audience attention into commercial enquiries.",
    heroImage: "/assets/services/social-media-marketing.webp",
    heroAlt: "Social media marketing Reels and creative content showcase",
    floatingBadge: {
      title: "1 CRORE+ VIEWS",
      subtitle: "Generated For Client Brands",
    },
    trustBadges: [
      { value: "Full-Funnel", label: "Strategy to Production" },
      { value: "In-House", label: "Studio & Film Crew" },
      { value: "Zero Bots", label: "Genuine Engagement" },
    ],
    body: [
      "Your audience is already spending hours every day scrolling through Instagram, LinkedIn, and YouTube. The challenge is not whether they are on social media — it is whether your brand gives them any reason to stop and care. Posting generic stock photos with uninspired captions once a week does not build a brand; it simply wastes budget.",
      "Design Blast Labs operates as an end-to-end creative social media agency for B2B enterprises, D2C consumer brands, and ambitious founders. We combine creative scripting, high-retention video production, sharp graphic design, and platform-specific distribution strategies to make your brand impossible to ignore.",
      "We treat social media as an engine for commercial growth rather than a vanity metrics exercise. Every reel, carousel, and thought leadership post is designed around a clear business job: build market authority, solve a specific customer problem, and guide viewers toward booking a call or ordering your product.",
    ],
    capabilities: [
      {
        eyebrow: "ATTENTION ENGINEERING",
        title: "Short-Form Video & Instagram Reels",
        description:
          "Cinematic vertical video scripted, shot, edited, and paced specifically to capture the crucial first two seconds and hold retention.",
        deliverables: [
          "Hook writing tailored to current algorithm patterns",
          "On-location filming or studio production in Mumbai",
          "Dynamic subtitle animation, sound effects & grading",
          "Native audio and trend integration for maximum reach",
        ],
        theme: "dark",
      },
      {
        eyebrow: "B2B AUTHORITY",
        title: "LinkedIn Executive & Founder Branding",
        description:
          "Position your executive team as the definitive voice in your industry through structured opinion pieces, breakdowns, and slide decks.",
        deliverables: [
          "Ghostwriting based on 30-minute monthly founder interviews",
          "Multi-slide carousel design breaking down complex ideas",
          "Strategic engagement with target industry accounts",
          "Direct message pipeline management for partnership inquiries",
        ],
        theme: "light",
      },
      {
        eyebrow: "CONTENT SYSTEM",
        title: "Monthly Editorial Calendar & Direction",
        description:
          "A structured monthly calendar establishing balance across your core content pillars: education, social proof, culture, and conversion.",
        deliverables: [
          "30-day advance content roadmap mapped to business goals",
          "Brand-aligned visual templates and color grading guidelines",
          "High-converting copy and caption writing with strategic hashtags",
          "Complete scheduling and publishing across all accounts",
        ],
        theme: "accent",
      },
      {
        eyebrow: "CONVERSION CHANNELS",
        title: "Community Management & DM Automation",
        description:
          "Turn comments, story replies, and inbound direct messages into qualified commercial opportunities with fast, human-centric responses.",
        deliverables: [
          "Active monitoring and moderation of comments and tags",
          "Keyword-triggered automated DM flows with link delivery",
          "Escalation of commercial lead conversations to sales staff",
          "Monthly sentiment and audience question analysis",
        ],
        theme: "light",
      },
      {
        eyebrow: "PAID AMPLIFICATION",
        title: "Meta Ads & Performance Retargeting",
        description:
          "Combine organic brand building with targeted paid campaigns that turn top-performing organic reels into scalable customer acquisition assets.",
        deliverables: [
          "Advantage+ creative testing and audience segmentation",
          "Custom retargeting funnels targeting engaged profile visitors",
          "Server-side Conversions API (CAPI) pixel tracking",
          "Weekly cost-per-lead and return on ad spend (ROAS) reporting",
        ],
        theme: "light",
      },
      {
        eyebrow: "ACCOUNT GOVERNANCE",
        title: "Profile Optimization & Bio Architecture",
        description:
          "Transform your profile page from a static bio into a high-converting digital storefront that clearly states who you help and how to buy.",
        deliverables: [
          "Bespoke story highlight covers and strategic sequence design",
          "High-converting bio copy with single call-to-action focus",
          "Custom Linktree or standalone mobile landing page setup",
          "Cross-platform profile visual alignment",
        ],
        theme: "light",
      },
    ],
    comparisonPoints: [
      {
        feature: "Content Production Standard",
        dblApproach: "Cinematic, founder-led video shoots with on-location camera crew, real lighting, and audio.",
        othersApproach: "Recycled Canva templates, generic stock photos, and robotic AI-generated graphics.",
      },
      {
        feature: "Core Measurement Metric",
        dblApproach: "Website referral traffic, inbound DMs, lead inquiries, and commercial revenue.",
        othersApproach: "Vanity likes and comments generated by engagement pods and irrelevant audiences.",
      },
      {
        feature: "Platform Nuance",
        dblApproach: "Tailored creative: punchy Reels for Instagram, deep thought-leadership carousels for LinkedIn.",
        othersApproach: "Cross-posting the identical image and text across Facebook, Twitter, and LinkedIn simultaneously.",
      },
      {
        feature: "Follower Growth Strategy",
        dblApproach: "100% organic interest driven by genuinely valuable, entertaining, and educational video assets.",
        othersApproach: "Purchasing fake bot followers that ruin your account's algorithmic reach permanently.",
      },
      {
        feature: "Strategy & Reporting",
        dblApproach: "Weekly performance check-ins, content iteration cycles, and honest pipeline attribution.",
        othersApproach: "A confusing automated PDF report at the end of the month with zero actionable takeaways.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "BRAND & AUDIENCE AUDIT",
        description:
          "We analyze your past content performance, audit competitor channels, and establish your 4 core content pillars.",
        timeline: "Week 1",
      },
      {
        number: "02",
        title: "SCRIPTING & PRODUCTION",
        description:
          "We write punchy scripts and organize a high-yield monthly filming shoot at your office or in our studio.",
        timeline: "Week 2",
      },
      {
        number: "03",
        title: "EDITING & GRAPHIC PACKAGING",
        description:
          "Our post-production team edits vertical reels with dynamic text, color grading, sound design, and carousel graphics.",
        timeline: "Weeks 2–3",
      },
      {
        number: "04",
        title: "DISTRIBUTION & OPTIMIZATION",
        description:
          "We handle scheduling, monitor audience engagement, manage DMs, and adjust the next month's hooks based on retention data.",
        timeline: "Ongoing",
      },
    ],
    techStack: [
      { name: "Instagram Graph API", category: "Publishing", note: "Direct scheduling and live analytics" },
      { name: "Meta Business Suite", category: "Ads Management", note: "Advantage+ targeting & CAPI" },
      { name: "LinkedIn Sales Nav", category: "B2B Outreach", note: "Target account profiling" },
      { name: "DaVinci Resolve", category: "Video Finishing", note: "Cinematic color grading for reels" },
      { name: "Figma", category: "Graphic Design", note: "Carousel architecture and typography" },
      { name: "ManyChat", category: "DM Automation", note: "Keyword-triggered lead capture" },
    ],
    deliverables: [
      {
        title: "Monthly Content Deliverables",
        description: "12 to 20 polished short-form Reels and carousel posts produced, edited, and approved in advance.",
      },
      {
        title: "On-Location Shoot Direction",
        description: "Professional camera crew, wireless audio, and lighting setups for on-site client production days.",
      },
      {
        title: "Platform Copy & Hashtags",
        description: "Platform-optimized captions written to encourage comments, shares, and website clicks.",
      },
      {
        title: "Automated Inbound Routing",
        description: "Setup of automated DM responses delivering brochures, links, or booking prompts to prospects.",
      },
      {
        title: "Monthly ROI Review",
        description: "Clear monthly review analyzing audience retention, top-performing hooks, and inbound leads generated.",
      },
    ],
    outcomes: [
      "Consistent, professional brand presence that elevates your authority above local competitors",
      "Noticeable increase in organic profile views, saved posts, and direct message inquiries",
      "A growing library of reusable video assets that can also be repurposed for paid ads and sales decks",
      "Complete freedom for founders and internal teams to focus on operations while social media runs smoothly",
    ],
    faqs: [
      {
        question: "What is the difference between organic social media management and paid social media ads?",
        answer:
          "Organic social media management is about building durable authority, educating your audience, and nurturing long-term brand equity through regular posts, reels, and stories. Paid advertising, by contrast, involves paying Meta or LinkedIn to place your creative directly in front of targeted users who don't follow you yet. Both work best together: organic proves which messages resonate, and paid ads scale them.",
      },
      {
        question: "Do you guarantee follower counts or viral video views?",
        answer:
          "No reputable agency can guarantee exact viral view numbers or follower counts, because algorithms change and audience behavior cannot be fabricated ethically. We focus on verified metrics that impact business: qualified reach in your geographic target market, average view duration, engagement rate, and inbound commercial enquiries.",
      },
      {
        question: "Do we need to appear on camera, or can you create content without our team?",
        answer:
          "Content featuring real people — founders, engineers, facility staff, and clients — consistently outperforms faceless stock content by a factor of 3X to 5X. We coach camera-shy team members with guided interview formats that feel natural. However, for brands requiring product-only shoots or animated design carousels, we can produce high-performing creative without team members on screen.",
      },
      {
        question: "Which social media platforms should our business prioritize?",
        answer:
          "For B2B services, industrial manufacturing, and enterprise technology, LinkedIn and YouTube deliver the highest lead quality. For D2C consumer goods, e-commerce, real estate, hospitality, and local services, Instagram Reels and Meta Ads drive the highest engagement and purchase intent.",
      },
      {
        question: "How do monthly filming shoots work?",
        answer:
          "We plan every shoot day rigorously with advance shot lists, scripted hooks, and lighting requirements. A single efficient 4-to-6 hour shoot at your office or facility typically yields enough raw footage to produce 15 to 20 high-quality reels, behind-the-scenes clips, and carousel backdrops for the entire upcoming month.",
      },
      {
        question: "Can you manage our existing social accounts, or do we need new ones?",
        answer:
          "We take over and optimize your existing accounts so you preserve all historical followers and post history. We audit your existing branding, upgrade the bio, organize highlight covers, and implement a cohesive aesthetic from day one.",
      },
    ],
    related: ["video-editing", "video-production", "digital-marketing", "instagram-marketing"],
    workFilter: "social",
  },

  // ── 04. VIDEO EDITING (Priority 4) ────────────────────────────────────────
  {
    slug: "video-editing",
    name: "Video Editing & Post-Production",
    shortName: "Video Editing",
    seoTitle: "Video Editing Company in Mumbai | Professional Video Editing Services",
    metaDescription:
      "Looking for professional video editing services in Mumbai? Design Blast Labs edits reels, YouTube videos, corporate films, advertisements and promotional content for businesses.",
    eyebrow: "PROFESSIONAL VIDEO EDITING SERVICES",
    h1Title: "EVERY FRAME SHOULD HAVE A PURPOSE.",
    promise:
      "High-retention video editing, motion graphics, color grading and audio engineering that transforms raw footage into compelling visual stories.",
    heroImage: "/marketing/bento-editing.jpg",
    heroAlt: "Professional video editing timeline and color grading interface",
    floatingBadge: {
      title: "CINEMATIC PACING",
      subtitle: "High-Retention Visual Storytelling",
    },
    trustBadges: [
      { value: "48h", label: "Turnaround Available" },
      { value: "DaVinci", label: "Studio Color Grading" },
      { value: "Multi-Cut", label: "9:16, 16:9 & 1:1 Exports" },
    ],
    body: [
      "Great video editing is not just about cutting clips together in chronological order. It is about understanding pacing, audio psychology, narrative arc, and the subtle visual cues that keep a viewer watching from the first second until the final call to action.",
      "Most businesses and creators are sitting on hours of valuable raw footage: smartphone clips, event recordings, customer interviews, podcast conversations, and product demonstrations that remain unused because they lack the editing polish to represent the brand professionally.",
      "Design Blast Labs provides dedicated post-production and video editing services for businesses, marketing teams, agencies, and content creators. From rapid-fire vertical Reels and YouTube documentary-style videos to polished corporate films and commercial advertisements, we bring professional color grading, sound design, kinetic typography, and motion graphics to every frame.",
    ],
    capabilities: [
      {
        eyebrow: "VIRAL RETENTION",
        title: "Instagram Reels & TikTok Post-Production",
        description:
          "Vertical 9:16 cuts engineered for immediate hook impact, dynamic zoom transitions, kinetic captions, and platform sound trends.",
        deliverables: [
          "Elimination of dead air, pauses, and filler words",
          "Custom animated captions with highlighted keyword typography",
          "Layered sound effects (whooshes, risers, pop cues)",
          "B-roll insertion and green screen graphic overlays",
        ],
        theme: "dark",
      },
      {
        eyebrow: "LONG-FORM MEDIA",
        title: "YouTube Video & Podcast Editing",
        description:
          "Engaging narrative editing for corporate YouTube channels, founder podcasts, educational series, and documentary-style case studies.",
        deliverables: [
          "Multi-camera angle switching and sync",
          "Audio leveling, background noise removal, and EQ mastering",
          "Custom chapter markers, lower thirds, and animated intro/outros",
          "Thumbnail-ready still frame exports and title suggestions",
        ],
        theme: "light",
      },
      {
        eyebrow: "PERFORMANCE ADS",
        title: "Commercial & Paid Social Ad Creatives",
        description:
          "Direct-response video edits designed to stop the scroll, highlight product benefits, and drive clicks for Meta, Google, and LinkedIn ad campaigns.",
        deliverables: [
          "Multiple opening hook variations for A/B creative testing",
          "Prominent animated callouts for key features and discount offers",
          "Clear visual CTAs and end-card animation",
          "Aspect ratio adaptations for feed (4:5), story (9:16), and desktop (16:9)",
        ],
        theme: "accent",
      },
      {
        eyebrow: "POST FINISHING",
        title: "Color Correction & Creative Grading",
        description:
          "Transform flat log footage into rich, cinematic visuals with balanced skin tones, clean contrast, and consistent brand color palettes.",
        deliverables: [
          "Shot-to-shot exposure and white balance matching",
          "Log profile conversion (Sony S-Log, Apple ProRes, Canon Log)",
          "Bespoke stylized film emulation or crisp corporate look",
          "Broadcast and web REC.709 color standards compliance",
        ],
        theme: "light",
      },
      {
        eyebrow: "AUDIO MASTERY",
        title: "Sound Design & Audio Enhancement",
        description:
          "Clean, crisp audio that commands attention. Half of great video is sound design — we ensure your voiceovers are crystal clear and your background tracks hit the beat.",
        deliverables: [
          "Vocal de-essing, noise reduction, and clarity compression",
          "Commercial music licensing through accredited libraries",
          "Impactful cinematic sound design and ambient foley effects",
          "Audio ducking behind spoken dialogue for maximum legibility",
        ],
        theme: "light",
      },
      {
        eyebrow: "VISUAL PACKAGING",
        title: "Motion Graphics & Animated Titles",
        description:
          "Custom 2D motion graphics, kinetic typography, animated diagrams, and logo reveals that elevate your production value above competitors.",
        deliverables: [
          "Animated logo stings and brand openers",
          "Data visualization charts and infographics",
          "Custom branded lower-third nameplates",
          "UI mockup animations showcasing web or app screens",
        ],
        theme: "light",
      },
    ],
    comparisonPoints: [
      {
        feature: "Editing Software & Standards",
        dblApproach: "DaVinci Resolve Studio and Premiere Pro with calibrated color monitors and lossless exports.",
        othersApproach: "Mobile automated editing apps with compressed exports and default template transitions.",
      },
      {
        feature: "Sound Design & Audio",
        dblApproach: "Custom audio mixing, frequency EQ, licensed background music, and bespoke foley sound effects.",
        othersApproach: "Unbalanced audio where music drowns out the speaker, accompanied by distracting room echo.",
      },
      {
        feature: "Typography & Subtitles",
        dblApproach: "Custom-designed kinetic typography that matches your brand guidelines and color codes.",
        othersApproach: "Generic auto-generated yellow subtitles with typos and awkward line breaks.",
      },
      {
        feature: "Delivery Formats",
        dblApproach: "Complete deliverables package: vertical (9:16), horizontal (16:9), and square (1:1) with captions.",
        othersApproach: "Single horizontal video that looks poorly cropped when uploaded to Instagram or mobile feeds.",
      },
      {
        feature: "Revision Workflow",
        dblApproach: "Frame-accurate timecoded review links (Frame.io) for quick, clear client feedback.",
        othersApproach: "Confusing email threads with timestamps that cause endless misunderstandings.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "FOOTAGE HANDOVER & BRIEF",
        description:
          "You upload your raw footage to our secure cloud drive and share project goals, target audience, and preferred visual reference styles.",
        timeline: "Day 1",
      },
      {
        number: "02",
        title: "ROUGH CUT & NARRATIVE PACING",
        description:
          "We log the footage, cut out mistakes, structure the narrative flow, and assemble the rough timeline for pacing review.",
        timeline: "Days 2–3",
      },
      {
        number: "03",
        title: "SOUND, COLOR & MOTION",
        description:
          "We add sound effects, licensed music, color grading, animated subtitles, and custom motion graphics.",
        timeline: "Days 3–4",
      },
      {
        number: "04",
        title: "REVIEW, POLISH & MASTER EXPORT",
        description:
          "You review via timecoded links, we implement final revisions, and deliver full-resolution master files ready to publish.",
        timeline: "Day 5",
      },
    ],
    techStack: [
      { name: "DaVinci Resolve", category: "NLE & Color", note: "Industry-standard color grading & finishing" },
      { name: "Adobe Premiere Pro", category: "NLE Editing", note: "Multi-camera assembly and cutting" },
      { name: "After Effects", category: "Motion Graphics", note: "2D kinetic text & visual effects" },
      { name: "Adobe Audition", category: "Audio Engineering", note: "Noise reduction & spectral frequency repair" },
      { name: "Frame.io", category: "Review Platform", note: "Timecoded collaborative client feedback" },
      { name: "Artlist / Epidemic", category: "Licensing", note: "100% royalty-free commercial music clearing" },
    ],
    deliverables: [
      {
        title: "Full HD & 4K Master Exports",
        description: "Pristine high-bitrate video exports formatted specifically for web, social media, or broadcast playback.",
      },
      {
        title: "Multi-Platform Aspect Ratios",
        description: "Every hero video can be delivered in 9:16 (Reels/Shorts), 16:9 (YouTube/Web), and 1:1 (Feed).",
      },
      {
        title: "Burned-In & SRT Subtitles",
        description: "Hard-coded styled kinetic subtitles plus standalone .SRT files for accessibility and closed captions.",
      },
      {
        title: "Commercially Cleared Audio",
        description: "Fully licensed background music and sound effects with zero copyright strike risk on YouTube or Meta.",
      },
      {
        title: "Organized Project Archiving",
        description: "Secure 90-day cloud backup of your project files and raw footage for future cutdowns or revisions.",
      },
    ],
    outcomes: [
      "Substantially higher watch time and retention rates on social media and video platforms",
      "Immediate elevation of your brand's perceived professionalism and production quality",
      "Consistent turnaround times so your content marketing schedule never falls behind",
      "Maximum ROI from raw footage by turning single shoot days into multiple platform assets",
    ],
    faqs: [
      {
        question: "How do we send our raw footage to your team?",
        answer:
          "We provide a private, high-speed cloud upload link (Google Drive, Dropbox, or frame-accurate transfer) where you can easily drop raw video files from your camera, smartphone, or drive. Once uploaded, our editors ingest and organize the footage immediately.",
      },
      {
        question: "What is your typical turnaround time for edited videos?",
        answer:
          "For short-form Instagram Reels and TikTok videos, our standard turnaround is 48 to 72 hours. For longer YouTube videos, podcasts, or corporate films, the first cut is typically delivered within 3 to 5 business days. Expedited rush delivery is available on request.",
      },
      {
        question: "How are revisions and feedback handled?",
        answer:
          "We share a dedicated review link where you can click directly on the video frame at the exact second you want a change, type your comment, and our editors see precisely what you mean. Every project includes two structured rounds of revisions to ensure you are 100% satisfied.",
      },
      {
        question: "Can you create multiple video formats from one piece of footage?",
        answer:
          "Yes. That is one of our most popular workflows. From a single 10-minute horizontal interview or podcast, we can deliver the full 16:9 YouTube video, three to five high-impact 9:16 vertical Reels with animated captions, and square promotional teaser clips.",
      },
      {
        question: "Do you provide licensed background music and sound effects?",
        answer:
          "Yes. We license all music and sound effects through top commercial audio libraries (Artlist, Epidemic Sound). You receive full commercial clearance so your videos will never be flagged, muted, or copyright-struck on YouTube, Instagram, Facebook, or LinkedIn.",
      },
      {
        question: "Can you edit footage shot on a smartphone?",
        answer:
          "Absolutely. Modern iPhones and high-end Android phones shoot exceptional 4K footage. With proper editing, color grading, vocal noise removal, and animated typography, smartphone footage can look just as impressive as content shot on cinema cameras.",
      },
    ],
    related: ["video-production", "social-media-management", "digital-marketing"],
    workFilter: "social",
  },

  // ── 05. VIDEO PRODUCTION (Priority 5) ────────────────────────────────────
  {
    slug: "video-production",
    name: "Video Production Company",
    shortName: "Video Production",
    seoTitle: "Video Production Company in Mumbai | Design Blast Labs",
    metaDescription:
      "Looking for a video production company in Mumbai? Design Blast Labs creates corporate videos, product films, promotional advertisements, brand videos and commercial content.",
    eyebrow: "VIDEO PRODUCTION COMPANY IN MUMBAI",
    h1Title: "WE TURN BUSINESS STORIES INTO POWERFUL VISUAL EXPERIENCES.",
    promise:
      "Full-service video production: concept, scripting, professional filming crew, cinema equipment, and on-location execution across Mumbai and India.",
    heroImage: "/marketing/bento-filmcrew.jpg",
    heroAlt: "Cinema camera crew on set for corporate video production",
    floatingBadge: {
      title: "CINEMA 4K PRODUCTION",
      subtitle: "Full Crew & Studio Direction",
    },
    trustBadges: [
      { value: "Sony FX", label: "Cinema Camera Gear" },
      { value: "Turnkey", label: "Script to Final Master" },
      { value: "Mumbai", label: "On-Location & Studio" },
    ],
    body: [
      "People remember what they see and feel far longer than what they read on a static page. Whether you are explaining an industrial manufacturing process, launching a flagship consumer product, or presenting your company's mission to prospective investors, a professionally produced film builds instant credibility that amateur video simply cannot match.",
      "Design Blast Labs is a full-service commercial video production company based in Santacruz East, Mumbai. We handle the complete lifecycle of corporate films, brand commercials, product showcases, and customer case study videos — from initial creative concept and scriptwriting to on-location filming, lighting, audio engineering, and post-production.",
      "We operate with our own cinema equipment: Sony FX6 and FX3 cinema cameras, cinema lenses, professional lighting rigs, wireless lavalier audio systems, and DJI stabilization gimbals. Because we manage both creative direction and technical crew in-house, your project stays on schedule, on budget, and true to your brand's visual identity.",
    ],
    capabilities: [
      {
        eyebrow: "CORPORATE STORYTELLING",
        title: "Corporate Brand Films & Company Profiles",
        description:
          "High-end corporate films that articulate your vision, showcase leadership, highlight company culture, and build trust with institutional clients.",
        deliverables: [
          "Pre-shoot concept brainstorming & strategic scriptwriting",
          "Executive interview direction that brings out natural confidence",
          "B-roll coverage of offices, teams, and real business operations",
          "Cinematic musical scoring and broadcast-grade color mastering",
        ],
        theme: "light",
      },
      {
        eyebrow: "INDUSTRIAL SHOWCASE",
        title: "Manufacturing & Facility Video Production",
        description:
          "Dynamic visual documentation of factory floors, heavy machinery, automated production lines, quality control, and warehouse logistics.",
        deliverables: [
          "On-site filming at plants, warehouses, and industrial facilities",
          "Specialized safety gear, industrial lighting & gimbal tracking",
          "High-frame-rate slow motion capturing intricate machinery",
          "Process breakdown graphics explaining proprietary workflows",
        ],
        theme: "dark",
      },
      {
        eyebrow: "COMMERCIAL FILMING",
        title: "Product Films & Commercial Advertisements",
        description:
          "Studio and tabletop commercial filming that highlights product craftsmanship, material textures, packaging aesthetics, and functionality.",
        deliverables: [
          "Studio lighting design tailored to product reflective qualities",
          "Macro lens cinematography capturing fine textures and details",
          "Fluid camera motion and motorized turntable presentation",
          "Fast-paced commercial editing formatted for web and digital ads",
        ],
        theme: "accent",
      },
      {
        eyebrow: "PRE-PRODUCTION",
        title: "Concept Development, Scripting & Storyboards",
        description:
          "A great shoot begins long before anyone presses record. We develop creative concepts, write conversational scripts, and plan shot lists.",
        deliverables: [
          "Target audience discovery and core message articulation",
          "Two-column AV scriptwriting with dialogue and visual cues",
          "Visual moodboards and detailed scene-by-scene shot lists",
          "Production scheduling, location permits, and call sheet coordination",
        ],
        theme: "light",
      },
      {
        eyebrow: "ON-SET CREW",
        title: "Professional Film Crew & Equipment Rental",
        description:
          "Full production crew handling lighting, multi-channel sound recording, camera operation, and on-set creative direction.",
        deliverables: [
          "Director, Director of Photography (DP), gaffer, and sound recordist",
          "4K Cinema camera packages with prime lens sets",
          "Continuous LED studio lighting and softbox diffusers",
          "Broadcast wireless audio transmitters and boom microphones",
        ],
        theme: "light",
      },
      {
        eyebrow: "CUSTOMER PROOF",
        title: "Client Testimonial & Case Study Videos",
        description:
          "Capture authentic, persuasive video testimonials from your actual clients that overcome sales objections and shorten enterprise deal cycles.",
        deliverables: [
          "Structured question guides designed to elicit specific metrics",
          "On-location filming at client offices or job sites",
          "B-roll cutaways showing your product or service in action",
          "Short snackable cuts for sales presentations and LinkedIn",
        ],
        theme: "light",
      },
    ],
    comparisonPoints: [
      {
        feature: "Camera & Lighting Gear",
        dblApproach: "Cinema camera systems (Sony FX6/FX3) with prime cinema glass, gimbal stabilizers, and studio LED lighting.",
        othersApproach: "Consumer DSLR cameras with natural room lighting and tinny on-camera audio.",
      },
      {
        feature: "Scripting & Pre-Production",
        dblApproach: "Thorough concept development, scripted dialogue, shot lists, and rehearsal guidance.",
        othersApproach: "Showing up on shoot day with no shot list and asking the client to 'just talk about the business'.",
      },
      {
        feature: "Interview Direction",
        dblApproach: "Expert interviewers who put non-actors at ease, guiding them into concise, compelling soundbites.",
        othersApproach: "Stiff, awkward interviews with visible teleprompter reading and robotic body language.",
      },
      {
        feature: "Production Efficiency",
        dblApproach: "Meticulous planning designed to yield a primary hero film plus 10+ social cutdowns from one shoot day.",
        othersApproach: "A full day of shooting that only produces a single 2-minute video that quickly becomes stale.",
      },
      {
        feature: "Turnkey Accountability",
        dblApproach: "Single team responsible for concept, shoot, edit, color, sound, and delivery.",
        othersApproach: "Shooting crew blames the separate editor for issues; editor blames the camera crew for bad footage.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "PRE-PRODUCTION & SCRIPTING",
        description:
          "We define the narrative goal, write the script, build the storyboard, scout locations, and coordinate the shoot day schedule.",
        timeline: "Week 1",
      },
      {
        number: "02",
        title: "ON-LOCATION FILMING",
        description:
          "Our crew arrives on site with cinema cameras, lighting, and audio gear to capture interviews, B-roll, and facility footage.",
        timeline: "Week 2",
      },
      {
        number: "03",
        title: "EDITING & COLOR FINISHING",
        description:
          "We assemble the timeline, color grade in DaVinci Resolve, mix audio, and add motion graphics and licensed music.",
        timeline: "Weeks 2–3",
      },
      {
        number: "04",
        title: "REVIEW & MULTI-FORMAT DELIVERY",
        description:
          "You review via timecoded links, we apply revisions, and deliver master 4K files alongside social cutdowns.",
        timeline: "Week 4",
      },
    ],
    techStack: [
      { name: "Sony FX6 Cinema", category: "Primary Camera", note: "Full-frame 4K dual base ISO cinema capture" },
      { name: "Sony FX3", category: "B-Cam & Gimbal", note: "High-mobility 4K B-roll and tracking camera" },
      { name: "Sony G Master", category: "Lenses", note: "Fast aperture primes for cinematic depth of field" },
      { name: "Aputure & Nanlite", category: "Lighting", note: "High-CRI LED daylight and RGB accent lighting" },
      { name: "Sennheiser & Rode", category: "Audio", note: "Broadcast wireless lavaliers & boom microphones" },
      { name: "DJI RS3 Pro", category: "Stabilization", note: "Smooth tracking shots through offices and factories" },
    ],
    deliverables: [
      {
        title: "Primary 4K Master Film",
        description: "Full-resolution cinematic master video complete with color grade, sound design, and custom titles.",
      },
      {
        title: "Social Media Cutdowns",
        description: "Vertical 9:16 and short 30-to-60 second teaser edits formatted for Instagram, LinkedIn, and YouTube Shorts.",
      },
      {
        title: "Commercial Music Clearance",
        description: "Worldwide royalty-free synchronization license certificate for all audio tracks used in the film.",
      },
      {
        title: "High-Resolution Production Stills",
        description: "Set of high-resolution photographic stills captured on set, perfect for press releases and web imagery.",
      },
      {
        title: "Clean Archival Master",
        description: "Textless and split-track audio masters enabling future translation, subtitle swaps, or re-editing.",
      },
    ],
    outcomes: [
      "A flagship visual asset that establishes unmatched authority when pitching enterprise clients or investors",
      "Significantly higher engagement and conversion when embedded on landing pages or sent in sales proposals",
      "Durable video content with a multi-year shelf life that can be repurposed across numerous marketing campaigns",
      "Stress-free shoot execution managed entirely by experienced directors and camera crews in Mumbai",
    ],
    faqs: [
      {
        question: "What is the difference between video production and video editing?",
        answer:
          "Video production refers to the complete end-to-end creation process, including pre-production planning, scriptwriting, directing, camera crew, lighting, audio recording, and on-location filming. Video editing is strictly the post-production stage (cutting, grading, and sound design) performed on footage that has already been shot.",
      },
      {
        question: "Do we need professional actors or can we film our own team?",
        answer:
          "We almost always recommend featuring your actual team, founders, and engineers. Modern business audiences are quick to detect paid actors and find them artificial. Our directors specialize in interviewing non-actors in a conversational, comfortable format that captures genuine passion and credibility without stage fright.",
      },
      {
        question: "How long does a corporate video production project take from start to finish?",
        answer:
          "A typical corporate film or product video takes between 3 to 5 weeks from initial briefing to final delivery: 1 week for pre-production and scriptwriting, 1 to 2 days for the actual shoot, and 1 to 2 weeks for editing, color grading, sound design, and client review rounds.",
      },
      {
        question: "Can you film outside of Mumbai?",
        answer:
          "Yes. While our primary studio and equipment hub is in Mumbai (Santacruz East), our production crews travel across Maharashtra, Gujarat, Bangalore, Delhi NCR, and throughout India for industrial plant shoots, corporate headquarters, and client case study interviews.",
      },
      {
        question: "How much content can we realistically produce from one shoot day?",
        answer:
          "With disciplined shot-listing and planning, a single full-day shoot typically yields: 1) One main 2-to-3 minute corporate or product film; 2) Three to five short 30-second focus clips; and 3) A dozen vertical B-roll clips for social media Reels and website video backgrounds.",
      },
      {
        question: "What equipment do you bring on set?",
        answer:
          "We bring a professional cinema production package: Sony FX6 and FX3 cinema cameras, Sony G Master prime and zoom lenses, Aputure studio lighting diffusers, Sennheiser wireless audio lavaliers, boom directional microphones, and motorized gimbal stabilizers.",
      },
    ],
    related: ["video-editing", "social-media-management", "website-development"],
    workFilter: "social",
  },

  // ── 06. APP DEVELOPMENT (Secondary Priority) ─────────────────────────────
  {
    slug: "app-development",
    name: "App Development",
    shortName: "Apps",
    seoTitle: "App Development Company in Mumbai | Design Blast Labs",
    metaDescription:
      "Build custom mobile and web applications with Design Blast Labs. We develop business applications, Android and iOS apps, cross-platform products and custom digital solutions.",
    eyebrow: "APP DEVELOPMENT COMPANY IN MUMBAI",
    h1Title: "APPS THAT HELP YOUR BUSINESS SCALE.",
    promise:
      "iOS and Android applications designed around speed, lean bundle footprints, intuitive user UX, and durable cross-platform codebases.",
    heroImage: "/assets/services/app-development.webp",
    heroAlt: "Mobile app interfaces for iOS and Android built by Design Blast Labs",
    floatingBadge: {
      title: "5X REVENUE INCREASE",
      subtitle: "Custom Mobile App Deployments",
    },
    trustBadges: [
      { value: "iOS & Android", label: "Single Codebase" },
      { value: "<50MB", label: "Lean Bundle Size" },
      { value: "100%", label: "Store Compliance" },
    ],
    body: [
      "A mobile app earns its place on a customer's phone by being faster, more convenient, and more capable than a responsive website. If an app stutters, consumes hundreds of megabytes of storage, or crashes during checkout, users will uninstall it within forty-eight hours.",
      "At Design Blast Labs, we develop custom iOS and Android mobile applications using proven cross-platform frameworks (React Native, Flutter) and high-performance backend architectures. We begin by helping you validate whether an app is genuinely the right strategic move for your business — and when it is, we focus on the core journeys that drive repeat usage and engagement.",
      "From consumer commerce and EdTech platforms to internal logistics and sales-force automation tools, we handle the entire development lifecycle: UI/UX design, API integration, rigorous device testing, App Store and Google Play approval, and ongoing maintenance.",
    ],
    capabilities: [
      {
        eyebrow: "CROSS-PLATFORM",
        title: "Cross-Platform Mobile Apps (React Native & Flutter)",
        description:
          "Build once and deploy seamlessly across iOS and Android with native performance, shared business logic, and halved maintenance costs.",
        deliverables: [
          "React Native and Flutter architecture with native bridges",
          "Smooth 60fps animations and gesture handling",
          "Lean bundle packaging optimized for storage-conscious users",
          "Single codebase reducing ongoing feature rollout costs",
        ],
        theme: "light",
      },
      {
        eyebrow: "BUSINESS OPERATIONS",
        title: "Internal Operations & Field Team Apps",
        description:
          "Custom mobile tools that empower your field sales agents, delivery drivers, inventory managers, and service technicians on the move.",
        deliverables: [
          "Offline-first synchronization for patchy connectivity",
          "Barcode, QR code, and camera document scanning",
          "GPS location tracking and automated route logging",
          "Role-based security permissions and administrative dashboards",
        ],
        theme: "dark",
      },
      {
        eyebrow: "BACKEND ARCHITECTURE",
        title: "Scalable API & Cloud Infrastructure",
        description:
          "Fast, secure server backends built to handle concurrent user traffic, real-time push notifications, and payment processing.",
        deliverables: [
          "Node.js, NestJS, and Python microservices architecture",
          "PostgreSQL, Redis caching, and Supabase cloud databases",
          "Firebase Cloud Messaging (FCM) push notification engine",
          "Razorpay, Stripe, and Apple/Google In-App Purchase setup",
        ],
        theme: "accent",
      },
      {
        eyebrow: "STORE APPROVAL",
        title: "App Store & Google Play Submission",
        description:
          "Guiding your application through the strict review guidelines of the Apple App Store and Google Play Store to guarantee smooth approval.",
        deliverables: [
          "App Store privacy manifests and safety declarations",
          "High-converting store screenshots and promotional copy",
          "TestFlight and Google Play Internal testing setups",
          "Rapid resolution of store guideline inquiries or flags",
        ],
        theme: "light",
      },
    ],
    comparisonPoints: [
      {
        feature: "Development Cost & Velocity",
        dblApproach: "Modern cross-platform codebases (React Native/Flutter) sharing 85%+ code across iOS and Android.",
        othersApproach: "Separate native teams for iOS and Android that double development costs and release timelines.",
      },
      {
        feature: "App Footprint & Speed",
        dblApproach: "Lean bundle sizes (<50MB) with offline caching and instant startup speeds.",
        othersApproach: "Bloated webview wrappers that lag, consume gigabytes of cache, and drain battery.",
      },
      {
        feature: "App Store Success Rate",
        dblApproach: "100% compliant store submission architecture following strict human interface guidelines.",
        othersApproach: "Frequent rejections caused by guideline oversights, broken links, or missing privacy disclosures.",
      },
      {
        feature: "Post-Launch Support",
        dblApproach: "Continuous crash monitoring, OS version update patches, and active API maintenance.",
        othersApproach: "Developers disappear after launch, leaving the app to break on the next iOS/Android update.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "USER JOURNEY & PROTOTYPE",
        description:
          "We define the core MVP features, eliminate bloat, and create clickable Figma prototypes of every mobile screen.",
        timeline: "Weeks 1–2",
      },
      {
        number: "02",
        title: "FRONTEND & API ENGINEERING",
        description:
          "We build the cross-platform frontend components and connect them to secure backend APIs and databases.",
        timeline: "Weeks 3–6",
      },
      {
        number: "03",
        title: "BETA TESTING & REFINEMENT",
        description:
          "We deploy private builds via TestFlight and Google Play Internal testing to real users to verify UX and squash bugs.",
        timeline: "Weeks 6–7",
      },
      {
        number: "04",
        title: "STORE SUBMISSION & LAUNCH",
        description:
          "We handle App Store and Play Store compliance checks, publish the application, and monitor crash diagnostics.",
        timeline: "Week 8",
      },
    ],
    techStack: [
      { name: "React Native", category: "Mobile Framework", note: "Native components with JavaScript/TypeScript" },
      { name: "Flutter", category: "Mobile Framework", note: "High-performance Dart UI rendering" },
      { name: "Node.js / NestJS", category: "Backend API", note: "Scalable server microservices" },
      { name: "Firebase", category: "Mobile Backend", note: "Real-time database, auth & push notifications" },
      { name: "PostgreSQL", category: "Database", note: "Robust relational database architecture" },
      { name: "Fastlane", category: "DevOps", note: "Automated App Store build and deployment pipelines" },
    ],
    deliverables: [
      {
        title: "Production iOS & Android Apps",
        description: "Compiled .ipa and .aab binary packages fully signed and ready for app store release.",
      },
      {
        title: "Complete Backend & API Suite",
        description: "Fully documented RESTful or GraphQL API endpoints, database schemas, and admin panels.",
      },
      {
        title: "App Store Optimization Assets",
        description: "Optimized app store titles, keyword-rich descriptions, and high-resolution device screenshot mockups.",
      },
      {
        title: "Full Source Code Ownership",
        description: "100% transfer of source code repositories, cloud hosting accounts, and app store developer access.",
      },
    ],
    outcomes: [
      "Smooth, crash-free mobile application with verified App Store and Google Play approvals",
      "Noticeably higher customer retention, repeat orders, and engagement compared to mobile web alone",
      "Streamlined internal field operations with real-time data sync and zero paperwork",
      "A scalable mobile foundation built to support new feature rollouts over multiple years",
    ],
    faqs: [
      {
        question: "Should we build a cross-platform app or separate native iOS and Android apps?",
        answer:
          "For 95% of business, e-commerce, and SaaS applications, a modern cross-platform framework like React Native or Flutter is the superior choice. You build from a single codebase, release features simultaneously across both stores, and save 40% to 50% in initial development and ongoing maintenance costs. Separate native apps are only required if your app requires specialized low-level hardware access, high-end 3D gaming, or intensive AR processing.",
      },
      {
        question: "How long does mobile app development take from concept to store launch?",
        answer:
          "A focused Minimum Viable Product (MVP) app typically launches within 8 to 10 weeks. This includes 2 weeks for UI/UX wireframing and prototyping, 4 to 5 weeks for frontend and backend engineering, and 2 weeks for beta testing and App Store review approvals.",
      },
      {
        question: "How do you handle Apple App Store and Google Play approvals?",
        answer:
          "We manage the entire submission process directly. We prepare the metadata, write the privacy declarations, configure Apple TestFlight and Google Play Internal testing, and ensure all guidelines regarding payments, user data, and account deletion are 100% satisfied.",
      },
      {
        question: "Can the app work offline when mobile connection drops?",
        answer:
          "Yes. We can architect local on-device caching (using SQLite or WatermelonDB) so that users can continue browsing data, reviewing orders, or filling out field forms without an active connection. Once connectivity returns, the app automatically synchronizes all changes with the server.",
      },
      {
        question: "What does it cost to build a mobile app in Mumbai?",
        answer:
          "Custom mobile app projects typically start from ₹1,50,000 for focused business tools or MVPs, and scale to ₹5,00,000+ for complex platforms with real-time tracking, payment gateways, and custom backend servers. We provide detailed milestone estimates following our discovery consultation.",
      },
    ],
    related: ["website-development", "ai-automation", "digital-marketing"],
    workFilter: "apps",
  },

  // ── 07. DIGITAL MARKETING (Maintained Route) ──────────────────────────────
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortName: "Marketing",
    seoTitle: "Digital Marketing Agency in Mumbai | Design Blast Labs",
    metaDescription:
      "Integrated digital marketing services in Mumbai: SEO, performance advertising, social media, and conversion optimization managed as a unified growth system.",
    eyebrow: "DIGITAL MARKETING SERVICES IN MUMBAI",
    h1Title: "INTEGRATED DIGITAL MARKETING THAT DRIVES MEASURABLE REVENUE.",
    promise:
      "Search, social and paid media run as one connected growth engine, judged by pipeline revenue rather than vanity impressions.",
    heroImage: "/assets/services/web-and-search.webp",
    heroAlt: "Digital marketing growth analytics and campaign dashboard",
    body: [
      "Most digital marketing fails because channels operate in silos. Your SEO team doesn't talk to the people running your paid Google Ads, your social media agency posts generic graphics that ignore customer objections, and nobody looks at why visitors bounce off your landing page.",
      "Design Blast Labs runs digital marketing as a unified system. When you align organic search intent, targeted paid media, compelling video content, and conversion-optimized landing pages, customer acquisition costs drop and return on ad spend compounds.",
      "We measure success in customer enquiries, qualified sales calls, and revenue generated — not superficial impressions or irrelevant website clicks.",
    ],
    deliverables: [
      { title: "Full-Funnel Growth Strategy", description: "Auditing existing channels and building unified acquisition funnels." },
      { title: "Cross-Channel Campaign Management", description: "Coordinated Meta Ads, Google Ads, and organic search campaigns." },
      { title: "Conversion Rate Optimization (CRO)", description: "A/B testing landing pages, forms, and offers to maximize lead capture." },
      { title: "Transparent Real-Time Analytics", description: "Live reporting dashboards tracking blended CAC, ROAS, and pipeline revenue." },
    ],
    outcomes: [
      "Unified customer acquisition strategy across paid, organic, and social channels",
      "Lower blended customer acquisition cost (CAC) through coordinated retargeting",
      "Honest, transparent attribution that shows exactly where sales originate",
    ],
    faqs: [
      {
        question: "How quickly do digital marketing campaigns show results?",
        answer:
          "Paid search and social media campaigns (Google Ads, Meta Ads) begin generating traffic and leads within the first week of launch. Organic search engine optimization (SEO) and content marketing compound over 3 to 6 months to establish durable, zero-ad-cost traffic.",
      },
      {
        question: "Do you manage both paid advertising and organic content?",
        answer:
          "Yes. Managing both under one roof is our core advantage: lessons learned from paid search keywords inform our organic content strategy, and top-performing organic video hooks are repurposed directly into high-converting paid ad creatives.",
      },
    ],
    related: ["website-development", "seo", "google-ads", "social-media-management"],
    workFilter: "websites",
  },

  // ── 08. SEO — SEARCH ENGINE OPTIMISATION (Maintained Route) ───────────────
  {
    slug: "seo",
    name: "Search Engine Optimisation",
    shortName: "SEO",
    seoTitle: "SEO Company in Mumbai | Search Engine Optimisation Services",
    metaDescription:
      "Rank higher on Google with data-driven SEO services in Mumbai. We provide technical SEO audits, commercial keyword ranking, content strategy and ethical link authority.",
    eyebrow: "SEO SERVICES IN MUMBAI",
    h1Title: "TECHNICAL & STRATEGIC SEO THAT COMPOUNDS INTO DURABLE TRAFFIC.",
    promise:
      "Clean technical foundations, intent-driven content, and domain authority that turn Google Search into your most consistent source of customer enquiries.",
    heroImage: "/assets/services/web-and-search.webp",
    heroAlt: "SEO organic traffic growth and keyword ranking analytics",
    body: [
      "Real SEO is three jobs that must happen in sequence: 1) A technically sound website that search engines can easily crawl, render, and index; 2) In-depth, helpful content that answers the exact commercial search intent of real buyers; and 3) Genuine digital authority that proves your business is a credible recommendation.",
      "Skipping straight to aggressive link-building without fixing slow load times or thin content is a waste of capital. At Design Blast Labs, we eliminate technical crawl debt, implement rich schema markup, and build comprehensive keyword content clusters that capture buyers at the exact moment they are looking for your services.",
    ],
    deliverables: [
      { title: "Technical Crawl & Core Vitals Audit", description: "Resolving indexing errors, redirect chains, layout shifts, and mobile speed." },
      { title: "Commercial Keyword Clustering", description: "Mapping high-intent transactional search terms to dedicated service pages." },
      { title: "On-Page Content & Entity Optimization", description: "Structuring semantic H1-H3 headings, FAQ schema, and internal linking." },
      { title: "Local SEO & Google Business Profile", description: "Dominating local Mumbai map packs and neighbourhood geographic queries." },
    ],
    outcomes: [
      "Top-page Google rankings for high-intent commercial keywords in your industry",
      "Compounding organic website visits that reduce your reliance on paid ads",
      "Protection against Google core algorithm updates through white-hat best practices",
    ],
    faqs: [
      {
        question: "How long does it take to rank on the first page of Google?",
        answer:
          "For technical fixes and local search queries (e.g. service + Mumbai locality), results often materialize within 4 to 8 weeks. For competitive national keywords, sustainable top rankings typically take 3 to 6 months of consistent technical execution and content publishing.",
      },
      {
        question: "Do you guarantee #1 rankings on Google?",
        answer:
          "No agency can guarantee #1 rankings because Google's algorithm evaluates hundreds of dynamic signals and competitor moves. Anyone promising guaranteed #1 spots in 30 days is usually employing black-hat spam techniques that risk algorithmic penalties. We guarantee transparent, white-hat technical execution that reliably builds organic search visibility.",
      },
    ],
    related: ["website-development", "aeo", "digital-marketing", "google-ads"],
    workFilter: "websites",
  },

  // ── 09. AEO — ANSWER ENGINE OPTIMISATION (Maintained Route) ───────────────
  {
    slug: "aeo",
    name: "AEO — AI Search Optimisation",
    shortName: "AEO",
    seoTitle: "AEO Services in Mumbai | AI Search Engine Optimisation",
    metaDescription:
      "Get cited and recommended by ChatGPT, Google AI Overviews, Perplexity and Gemini when prospective buyers search for solutions in your industry.",
    eyebrow: "AI SEARCH ENGINE OPTIMISATION",
    h1Title: "GET CITED BY CHATGPT, GEMINI & GOOGLE AI OVERVIEWS.",
    promise:
      "Structuring your company data, entity footprint, and authoritative content so AI engines recommend your brand when buyers ask for category leaders.",
    heroImage: "/assets/services/ai-agents.webp",
    heroAlt: "AI Search Optimisation and LLM entity citation graph",
    body: [
      "Search is experiencing its biggest transformation in 25 years. More buyers are asking ChatGPT, Google Gemini, and Perplexity for direct recommendations rather than clicking through ten blue links on a search page.",
      "Large Language Models (LLMs) do not rank pages using traditional backlink counters. They synthesize answers from authoritative sources with consistent entity data, clear question-answer structures, and structured schema graphs.",
      "Design Blast Labs structures your digital footprint for Answer Engine Optimization (AEO). We ensure that when prospective customers ask conversational queries about your industry, AI models recognize your company as a verified, credible entity worth citing.",
    ],
    deliverables: [
      { title: "Entity Authority & Knowledge Graph Setup", description: "Establishing consistent organization schema, Wikidata references, and brand triples." },
      { title: "Answer-First Content Architecture", description: "Direct, factual question-and-answer formatting that LLMs easily extract." },
      { title: "Citation Source Coverage", description: "Getting your business featured in the authoritative directories and publications AI models crawl." },
      { title: "Semantic JSON-LD Structuring", description: "Deep schema markup establishing services, service areas, and founders." },
    ],
    outcomes: [
      "Increased frequency of brand citations in ChatGPT, Perplexity, and Google AI Overviews",
      "Protection of your brand's narrative when prospective buyers research you using AI tools",
      "Future-proof discovery architecture ready for the next decade of conversational search",
    ],
    faqs: [
      {
        question: "What is the difference between SEO and AEO?",
        answer:
          "SEO focuses on ranking web pages in traditional search engine result pages (SERPs) like Google. AEO (Answer Engine Optimization) focuses on getting your brand cited and recommended directly inside conversational AI answers generated by ChatGPT, Perplexity, Google AI Overviews, and Gemini.",
      },
      {
        question: "How do AI search engines decide which companies to recommend?",
        answer:
          "AI models crawl the web looking for consensus across trusted sources: review directories, news coverage, verified structured schema, and clear semantic definitions. When your business has consistent entity facts and authoritative content that directly answers buyer questions, AI engines cite you with confidence.",
      },
    ],
    related: ["seo", "ai-automation", "website-development"],
    workFilter: "ai",
  },

  // ── 10. GOOGLE ADS & PPC (Maintained Route) ───────────────────────────────
  {
    slug: "google-ads",
    name: "Google Ads & PPC Management",
    shortName: "Google Ads",
    seoTitle: "Google Ads Agency in Mumbai | Performance PPC Management",
    metaDescription:
      "Capture high-intent buyers with Google Ads management in Mumbai. High-converting search campaigns, strict negative keyword bidding, and conversion tracking.",
    eyebrow: "PERFORMANCE PPC MANAGEMENT",
    h1Title: "SEARCH ADS THAT CAPTURE BUYERS READY TO PURCHASE.",
    promise:
      "High-intent search campaigns focused on qualified cost-per-enquiry rather than wasting budget on irrelevant clicks.",
    heroImage: "/assets/services/web-and-search.webp",
    heroAlt: "Google Ads performance metrics and conversion tracking dashboard",
    body: [
      "Google Search Ads is the most direct channel for customer acquisition because people are actively typing what they want to buy right now. However, most accounts waste 30% to 50% of their ad spend funding broad-match search terms that will never convert.",
      "At Design Blast Labs, we engineer Google Ads campaigns with strict match-type discipline, relentless negative keyword pruning, and custom high-converting landing pages. We track every rupee through to actual business inquiries and phone calls.",
    ],
    deliverables: [
      { title: "High-Intent Keyword Architecture", description: "Targeting exact match commercial queries that indicate ready-to-buy intent." },
      { title: "Aggressive Negative Keyword Hygiene", description: "Blocking irrelevant searches before they waste your daily advertising budget." },
      { title: "Bespoke Landing Page Alignment", description: "Ensuring 100% message match between the search ad copy and landing page headline." },
      { title: "Server-Side Conversion Tracking", description: "Accurate tracking of phone calls, form fills, and WhatsApp chats back to ad campaigns." },
    ],
    outcomes: [
      "Immediate surge in qualified inbound inquiries from day one of campaign launch",
      "Lower cost per qualified lead by eliminating wasteful broad-match spend",
      "Full transparency: you own the Google Ads account and see every rupee spent",
    ],
    faqs: [
      {
        question: "What is a good starting monthly budget for Google Ads in Mumbai?",
        answer:
          "For targeted local Mumbai campaigns, a starting ad spend of ₹30,000 to ₹60,000 per month is typically sufficient to test search volume, identify high-converting keywords, and generate a steady flow of enquiries. For competitive B2B or national campaigns, budgets scale based on target lead volume.",
      },
      {
        question: "Do you charge a percentage of ad spend or a flat fee?",
        answer:
          "We charge a transparent, fixed monthly management fee based on campaign scope rather than taking a percentage of ad spend. This ensures our recommendation is always to lower your customer acquisition cost, not to inflate your advertising budget unnecessarily.",
      },
    ],
    related: ["website-development", "digital-marketing", "seo"],
    workFilter: "websites",
  },

  // ── 11. INSTAGRAM MARKETING (Maintained Route) ────────────────────────────
  {
    slug: "instagram-marketing",
    name: "Instagram Marketing",
    shortName: "Instagram",
    seoTitle: "Instagram Marketing Agency in Mumbai | Reels & Growth",
    metaDescription:
      "Scale your brand on Instagram with high-retention Reels, aesthetic carousel design, community management and targeted Meta advertising in Mumbai.",
    eyebrow: "INSTAGRAM MARKETING AGENCY IN MUMBAI",
    h1Title: "REELS, CAROUSELS & STRATEGY THAT GROW REAL BRAND REACH.",
    promise:
      "Turn your Instagram account into a visual storefront that stops the scroll and turns viewers into paying customers.",
    heroImage: "/social/social-reel.jpg",
    heroAlt: "Instagram Reels content production and social growth feed",
    body: [
      "Instagram has evolved from a photo sharing app into modern culture's primary discovery engine. If your Reels lack strong hooks, your grid looks fragmented, or your bio doesn't clearly direct traffic, you miss out on thousands of potential customers.",
      "We produce high-retention vertical Reels, aesthetic multi-slide carousels, and engaging stories backed by strategic DM lead capture systems.",
    ],
    deliverables: [
      { title: "Viral Short-Form Reels", description: "Scripted, shot, edited, and formatted for maximum algorithmic retention." },
      { title: "Aesthetic Carousels & Design", description: "Educational slides that generate saves, shares, and profile visits." },
      { title: "Automated DM Lead Funnels", description: "Instant keyword-triggered link and brochure delivery directly in DMs." },
    ],
    outcomes: [
      "Consistent high-aesthetic visual presence matching top international brands",
      "Organic reach growth among verified demographic audiences in Mumbai and India",
    ],
    faqs: [
      {
        question: "How many posts and reels do you produce per month?",
        answer:
          "Our standard Instagram retainer packages include 12 to 16 high-impact Reels and 4 to 8 carousel slides per month, scheduled at peak audience engagement windows.",
      },
    ],
    related: ["social-media-management", "video-editing", "video-production"],
    workFilter: "social",
  },

  // ── 12. FACEBOOK MARKETING (Maintained Route) ─────────────────────────────
  {
    slug: "facebook-marketing",
    name: "Facebook Marketing",
    shortName: "Facebook",
    seoTitle: "Facebook Marketing & Meta Ads Agency in Mumbai",
    metaDescription:
      "Targeted Facebook marketing and Meta advertising campaigns in Mumbai. Reach decision makers and local buyers with high-converting creative funnels.",
    eyebrow: "FACEBOOK & META ADS AGENCY",
    h1Title: "PERFORMANCE FACEBOOK CAMPAIGNS BUILT TO SCALE PROFITABLY.",
    promise:
      "Strategic Meta ad campaigns and community management that reach suburban and family decision-makers across Mumbai and India.",
    heroImage: "/assets/services/social-media-marketing.webp",
    heroAlt: "Facebook advertising campaigns and audience targeting dashboard",
    body: [
      "Facebook remains an indispensable channel for real estate, education, healthcare, and family consumer products in India. When combined with Meta's sophisticated Advantage+ AI targeting, Facebook campaigns deliver substantial lead volume at lower acquisition costs.",
    ],
    deliverables: [
      { title: "Advantage+ Ad Funnels", description: "Dynamic creative testing identifying top-converting copy and visual hooks." },
      { title: "Lead Generation Forms", description: "Low-friction instant lead forms integrated directly with WhatsApp and CRM." },
    ],
    outcomes: [
      "Predictable, high-volume lead flow for real estate, B2C, and education sectors",
    ],
    faqs: [
      {
        question: "Does Facebook still work for businesses in Mumbai?",
        answer:
          "Yes. While younger demographics spend more time on Instagram, Facebook remains the dominant daily channel for older decision-makers (35+) who hold high purchasing power for property, education, and family investments.",
      },
    ],
    related: ["social-media-management", "google-ads", "digital-marketing"],
    workFilter: "social",
  },

  // ── 13. LINKEDIN MARKETING (Maintained Route) ─────────────────────────────
  {
    slug: "linkedin-marketing",
    name: "LinkedIn Marketing",
    shortName: "LinkedIn",
    seoTitle: "B2B LinkedIn Marketing Agency in Mumbai | Executive Branding",
    metaDescription:
      "Establish market authority and connect with enterprise decision makers. B2B LinkedIn marketing, founder personal branding and targeted lead generation in Mumbai.",
    eyebrow: "B2B LINKEDIN MARKETING IN MUMBAI",
    h1Title: "B2B POSITIONING & FOUNDER BRANDING THAT CLOSES ENTERPRISE DEALS.",
    promise:
      "Executive personal branding and company page management that connects with corporate leaders in BKC, Lower Parel, and worldwide.",
    heroImage: "/assets/services/social-media-marketing.webp",
    heroAlt: "LinkedIn executive thought leadership and B2B engagement",
    body: [
      "In B2B, people do business with people they trust. An active, authoritative founder presence on LinkedIn shortens sales cycles, opens partnership doors, and attracts top-tier talent in ways traditional corporate advertising cannot match.",
    ],
    deliverables: [
      { title: "Founder Ghostwriting", description: "Deep-dive thought leadership posts based on short monthly strategy interviews." },
      { title: "Company Page Management", description: "Consistent corporate updates, hiring announcements, and case study breakdowns." },
    ],
    outcomes: [
      "Direct relationship building with C-suite executives and B2B decision makers",
    ],
    faqs: [
      {
        question: "How much time does the founder need to invest each month?",
        answer:
          "Only 45 minutes per month. We conduct a structured interview to capture your thoughts, insights, and stories, and our copywriters turn them into an entire month of authoritative LinkedIn posts and carousels.",
      },
    ],
    related: ["social-media-management", "digital-marketing", "website-development"],
    workFilter: "social",
  },

  // ── 14. VIDEO MARKETING (Legacy Route — kept for backward compatibility) ──
  {
    slug: "video-marketing",
    name: "Video Marketing & Production",
    shortName: "Video",
    seoTitle: "Video Production & Marketing in Mumbai | Design Blast Labs",
    metaDescription: "Professional video production and marketing in Mumbai. Commercial films, Reels and video editing.",
    promise: "Shoots, edits and short-form video made to hold attention and sell something.",
    heroImage: "/marketing/bento-filmcrew.jpg",
    heroAlt: "Video production crew",
    body: [
      "Video is the most persuasive format available and the easiest to waste money on. A polished brand film nobody watches to the end is worth less than a rough thirty-second clip that answers the question a customer actually had.",
    ],
    deliverables: [
      { title: "Production & Shoot Days", description: "Full cinema crew on set in Mumbai." },
      { title: "Post-Production Editing", description: "Color grading, sound design and multi-format exports." },
    ],
    outcomes: ["High-impact visual content library"],
    faqs: [
      { question: "Do you handle shoots and editing?", answer: "Yes, we handle both end-to-end." },
    ],
    related: ["video-editing", "video-production", "social-media-management"],
    workFilter: "social",
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
