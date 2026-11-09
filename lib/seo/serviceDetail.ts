/**
 * Extra depth for each service page: the stacks we actually build on, the work
 * that belongs to that service, and prose that covers the ways people phrase
 * the same search without repeating a keyword at them.
 *
 * Kept separate from `services.ts` so the core definition stays readable.
 */

export interface StackGroup {
  /** e.g. "Custom-coded builds" vs "No-code and CMS". */
  title: string;
  /** When this route is the right call — the honest version. */
  blurb: string;
  tools: string[];
}

export interface ExtraSection {
  heading: string;
  paragraphs: string[];
}

export interface ServiceDetail {
  /** Project ids from components/OurWork.tsx, shown as a work strip. */
  projectIds: string[];
  stacksHeading?: string;
  stacks?: StackGroup[];
  sections?: ExtraSection[];
}

export const serviceDetail: Record<string, ServiceDetail> = {
  "website-development": {
    projectIds: ["tata", "europack", "gauranitai", "aether", "vr-packaging", "educonnect-ai"],
    stacksHeading: "Two ways we build, and when each one is right",
    stacks: [
      {
        title: "Custom-coded builds",
        blurb:
          "For sites that have to do something — logic, integrations, scale, or a design nobody else has. Slower to start, far cheaper to live with once traffic and features grow.",
        tools: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Vercel"],
      },
      {
        title: "No-code, CMS and ecommerce platforms",
        blurb:
          "For a catalogue, a storefront or a content site your team needs to edit daily without calling a developer. You trade some control for speed and a much shorter learning curve.",
        tools: ["WordPress", "Webflow", "Shopify", "Framer", "Wix Studio"],
      },
    ],
    sections: [
      {
        heading: "Choosing between a custom build and a platform",
        paragraphs: [
          "The question is rarely which technology is better. It is which one you can afford to live with. A Shopify store gets a working checkout, payment handling and inventory on day one, and the monthly fee buys you a team maintaining all of it. A custom build gives you no ceiling and no licence fee, but every feature is something somebody has to write.",
          "Our rule of thumb: if the catalogue is standard and the margin is thin, start on a platform. If the product logic is the business — configurators, quoting, multi-step ordering, anything a competitor cannot copy by installing the same app — build it properly. We have moved clients both directions, and the ones who regret it are usually the ones who picked on principle rather than on cost.",
          "Whichever route you take, the ownership terms are the same. You hold the domain, the hosting account, the repository and the analytics. Nothing is parked behind our login, and leaving does not require our permission.",
        ],
      },
      {
        heading: "Online stores and catalogues",
        paragraphs: [
          "An ecommerce build lives or dies on the three screens between interest and payment. Most lost revenue is not a traffic problem — it is a product page that hides the delivery cost, a cart that forgets itself on a refresh, or a checkout asking for an account before it asks for money.",
          "We instrument those steps before touching the design, because the fix is usually specific and boring rather than a redesign. Where a Shopify theme does the job we use one and spend the budget on the parts that are yours: the product data, the photography, the post-purchase email. Where the catalogue has real complexity — variable pricing, bulk tiers, B2B approvals — a custom storefront ends up costing less than fighting a theme that was never built for it.",
        ],
      },
      {
        heading: "What you should expect from whoever builds it",
        paragraphs: [
          "Ask any website development company you are considering for three things: a site they built that is still live two years later, the name of the person who will actually write your code, and what happens if you want to leave. The answers separate a studio from a reseller faster than any portfolio.",
          "We work in short, visible stages — structure, then design, then build, then launch — and you see a working URL from the first week rather than a slide deck. Timelines for a straightforward business site run four to six weeks; a store or a web app with real logic runs longer, and we say so before you commit rather than halfway through.",
        ],
      },
    ],
  },

  "app-development": {
    projectIds: ["milkvilla", "prime-leather", "educonnect-ai"],
    stacksHeading: "What we build on",
    stacks: [
      {
        title: "Cross-platform",
        blurb:
          "One codebase, both stores. The right default for most businesses — the cost and the maintenance stay proportionate to the size of the app.",
        tools: ["React Native", "Expo", "TypeScript", "Firebase", "Supabase"],
      },
      {
        title: "Native, where it earns its cost",
        blurb:
          "Dropped to only when a feature genuinely needs it — heavy camera work, background location, tight hardware integration or animation a bridge cannot keep up with.",
        tools: ["Swift", "Kotlin"],
      },
      {
        title: "Backend and release",
        blurb:
          "The part nobody demos and everybody needs: accounts, payments, push, crash reporting and a release pipeline you are not afraid of.",
        tools: ["Node.js", "PostgreSQL", "Stripe", "Razorpay", "App Store Connect", "Google Play Console"],
      },
    ],
    sections: [
      {
        heading: "Do you actually need an app?",
        paragraphs: [
          "A fair number of the briefs we get are better served by a fast mobile website. An app has to be found, downloaded, kept and reopened — four chances to lose someone that a web page never has. It earns its place when people use it repeatedly, when it needs to work offline, or when push notifications are genuinely part of the product rather than a marketing afterthought.",
          "When the honest answer is no, we say so. When it is yes, scope gets cut to the two or three things people will do over and over, because an app that does one thing well gets kept and an app that does forty things adequately gets deleted in week two.",
        ],
      },
      {
        heading: "What it costs and how long it takes",
        paragraphs: [
          "Price is driven by scope, not polish. A focused app with accounts, a core workflow and payments is a different order of work from a marketplace with two sides, chat and a wallet. We quote in stages so you can stop after version one if the numbers are not there, rather than discovering the budget halfway through a twelve-month build.",
          "Store review is part of the timeline, not a surprise at the end. Listings, screenshots, privacy declarations and the data-safety form are prepared alongside the build, which is where most first-time submissions get rejected.",
        ],
      },
    ],
  },

  "digital-marketing": {
    projectIds: ["europack", "zomato", "bajaj", "moneyview"],
    stacksHeading: "What we run it on",
    stacks: [
      {
        title: "Channels",
        blurb: "Run together and judged against one number, rather than each reporting its own flattering metric.",
        tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Google Business Profile", "WhatsApp Business"],
      },
      {
        title: "Measurement",
        blurb: "Set up first, so the first month of spend is not also the month you find out tracking was broken.",
        tools: ["GA4", "Google Tag Manager", "Search Console", "Looker Studio", "CRM conversion imports"],
      },
    ],
    sections: [
      {
        heading: "What a month actually looks like",
        paragraphs: [
          "The first two weeks are unglamorous: fixing tracking, finding where enquiries are really coming from, and killing the spend that cannot be traced to anything. It is common to cut ten to thirty percent of a budget in the first month without losing a single lead.",
          "After that the work settles into a rhythm — test, read, reallocate. Budget moves toward whatever is producing qualified enquiries and away from whatever is producing clicks. You get a monthly report in plain language that includes the things that did not work, because an agency that only reports good news is managing your perception rather than your marketing.",
        ],
      },
      {
        heading: "Who this suits, and who it does not",
        paragraphs: [
          "This works best when you can tell us what a customer is worth and roughly how long they take to decide. With those two numbers, decisions about channel and budget stop being opinions. Without them, everyone is guessing politely.",
          "It suits businesses with something to sell that people already search for, or a clear audience we can reach on paid social. It suits brand-new categories far less well — if nobody is searching yet, demand has to be created first, and that is a slower and more expensive job we would rather you hear about now than in month four.",
        ],
      },
    ],
  },

  "social-media-management": {
    projectIds: ["hiranandani", "iskcon-juhu", "new-fork-city", "thekatherinerae", "jasonnycrealtor", "serhant"],
    stacksHeading: "How the work gets made",
    stacks: [
      {
        title: "Production",
        blurb: "Shot and cut in-house, which is why the turnaround is days rather than weeks.",
        tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "Illustrator", "Figma"],
      },
      {
        title: "Platforms and scheduling",
        blurb: "Posting, replying and reporting in one place, so nothing sits unanswered for three days.",
        tools: ["Instagram", "Facebook", "LinkedIn", "YouTube", "Meta Business Suite", "WhatsApp Business"],
      },
    ],
    sections: [
      {
        heading: "What gets posted, and why",
        paragraphs: [
          "Each month is a mix rather than a theme. Content that explains what you do, content that proves it, and content that gives somebody a reason to follow who is not ready to buy yet. Pure promotion stops working within weeks; pure entertainment builds an audience that never converts.",
          "The proof posts are the ones most businesses skip and the ones that do the most work — a finished job, a before and after, a customer saying something specific. They are harder to make because they need access to your actual operations, which is why we ask for it early.",
        ],
      },
      {
        heading: "Replies are part of the job",
        paragraphs: [
          "Comments and DMs are where social turns into revenue, and they are the first thing to get dropped when an agency is only measured on posting. We handle the first response and hand anything commercial to you with context, usually the same day.",
          "Reporting covers saves, shares, profile visits and enquiries. Follower count is the easiest number to inflate and the least connected to money, so it is the one we pay least attention to.",
        ],
      },
    ],
  },

  "instagram-marketing": {
    projectIds: ["thekatherinerae", "new-fork-city", "weworewhat", "hiranandani"],
    stacksHeading: "What we use",
    stacks: [
      {
        title: "Production",
        blurb: "Vertical-first, cut for sound-off viewing, graded so a phone shoot does not look like one.",
        tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop"],
      },
      {
        title: "Growth and measurement",
        blurb: "Reach is the input, not the result — we track what happens after the view.",
        tools: ["Instagram Insights", "Meta Business Suite", "Meta Ads Manager"],
      },
    ],
    sections: [
      {
        heading: "Reels, and what actually moves",
        paragraphs: [
          "The first second decides everything. Most reels that underperform are fine from the third second onward, which is why we cut openings hard and test several versions of the same idea rather than polishing one.",
          "Volume matters more than perfection here. A consistent run of good-enough posts with two or three genuine hits beats one immaculate film a month, and it gives the account enough signal to be shown to people who do not already follow you.",
        ],
      },
      {
        heading: "The grid still matters, just less than people think",
        paragraphs: [
          "Reels bring people to the profile; the profile decides whether they follow. That makes the top of the grid, the bio and the highlights worth real attention — but it is a conversion problem, not an aesthetic one, and a perfectly colour-matched feed has never rescued an account that posts nothing worth watching.",
          "We keep the grid coherent and spend the effort on the posts themselves. A clear bio that says what you do and who for, highlights that answer the three questions everyone asks, and a pinned post that proves you are good at the thing.",
        ],
      },
      {
        heading: "Growing without buying followers",
        paragraphs: [
          "Bought followers wreck the one thing that matters: the ratio between who sees a post and who engages with it. An account with fifty thousand disinterested followers gets shown to fewer real people than one with three thousand engaged ones, and the damage takes months to undo.",
          "Real growth here is unglamorous. Post consistently, reply to everything in the first hour, collaborate with accounts your customers already follow, and let the posts that perform tell you what to make more of.",
        ],
      },
    ],
  },

  "facebook-marketing": {
    projectIds: ["meta", "bajaj", "europack"],
    stacksHeading: "What we use",
    stacks: [
      {
        title: "Campaigns",
        blurb: "Built around the offer and the audience, not around whatever objective the interface suggests first.",
        tools: ["Meta Ads Manager", "Meta Pixel", "Conversions API", "Advantage+ campaigns"],
      },
      {
        title: "Creative",
        blurb: "Enough variations to find the one that works, produced in-house so testing is not bottlenecked on a freelancer.",
        tools: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Figma"],
      },
    ],
    sections: [
      {
        heading: "Why most Facebook campaigns stall",
        paragraphs: [
          "Usually it is creative fatigue rather than targeting. The same audience sees the same ad until it stops responding, and the account looks broken when it simply needs new material. We plan for a refresh cadence from the start instead of reacting once performance drops.",
          "The second common cause is tracking. With the pixel alone, a meaningful share of conversions never gets attributed, which starves the algorithm of the signal it optimises on. Setting up the Conversions API properly is unglamorous and routinely makes more difference than any targeting change.",
        ],
      },
      {
        heading: "Audiences, and why broad often wins now",
        paragraphs: [
          "Detailed interest targeting mattered more five years ago than it does today. The platform is generally better at finding buyers from a good conversion signal than from a stack of interest filters, and heavily layered audiences often just make everything more expensive by shrinking the pool.",
          "The exceptions are retargeting and customer-list audiences, which still earn their place. Your own data — past purchasers, people who got partway through a checkout, an email list — consistently outperforms anything assembled from interests.",
        ],
      },
      {
        heading: "What we do before spending anything",
        paragraphs: [
          "Tracking first, always. If conversions are not being recorded correctly, the first month of budget buys data that is wrong, and the algorithm optimises toward the wrong thing for as long as it runs.",
          "Then the landing page. Sending paid traffic to a page that loads slowly or buries the offer is the most expensive mistake in the account, and it is usually cheaper to fix the page than to raise the budget.",
        ],
      },
    ],
  },

  "linkedin-marketing": {
    projectIds: ["blackrock", "moneyview", "jasonnycrealtor"],
    stacksHeading: "What we use",
    stacks: [
      {
        title: "Organic",
        blurb: "Founder and company presence built on things worth reading, which is most of what works here.",
        tools: ["LinkedIn Pages", "Creator tools", "Document posts"],
      },
      {
        title: "Paid and outbound",
        blurb: "Expensive per click, so it only earns its place when the contract value justifies it.",
        tools: ["LinkedIn Campaign Manager", "Lead Gen Forms", "Sales Navigator"],
      },
    ],
    sections: [
      {
        heading: "Why the founder's account beats the company page",
        paragraphs: [
          "Company pages get a fraction of the reach a person does, and readers know the difference between a brand statement and someone describing a problem they have actually dealt with. The work is usually to get what is already in a founder's head into a post each week, not to invent a content strategy.",
          "Paid LinkedIn is the most expensive click in the business. It is worth it when a single customer is worth several lakh or more; below that, the same budget almost always does better elsewhere, and we will tell you so rather than run it.",
        ],
      },
      {
        heading: "What to actually post",
        paragraphs: [
          "The posts that work are specific. A number from a real project, a decision you got wrong and what it cost, how a process in your industry actually runs — things only someone doing the work would know. Generic advice performs badly here because the audience is largely made up of people who do the same job.",
          "Format matters less than most guides suggest, with one exception: text that stands on its own beats a link, because the platform shows link posts to fewer people. Where there is something to link, it goes in the comments.",
        ],
      },
      {
        heading: "Measuring something other than impressions",
        paragraphs: [
          "Impressions on LinkedIn are easy to grow and easy to misread. The numbers worth watching are profile views, connection requests from the kind of person you sell to, and inbound messages — all of which lag the posting by weeks rather than appearing the same day.",
          "For a long sales cycle, attribution is honestly imperfect, and we would rather say that than invent a tidy number. What we can show is whether the right people are arriving and whether conversations are starting.",
        ],
      },
    ],
  },

  "video-editing": {
    projectIds: ["iskcon-juhu", "new-fork-city", "thekatherinerae", "hiranandani"],
    stacksHeading: "Post-production suites & finishing engines",
    stacks: [
      {
        title: "Non-linear editing & color finishing",
        blurb: "Industry-standard suites calibrated for broadcast, YouTube, and high-retention vertical social media.",
        tools: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "After Effects", "Adobe Audition", "Frame.io"],
      },
      {
        title: "Audio mastering & graphics",
        blurb: "Custom kinetic typography, sound design, and clean audio restoration that survives silent autoplay.",
        tools: ["Izotope RX Audio", "Epidemic Sound Commercial", "Artlist Enterprise", "Custom 2D Motion"],
      },
    ],
    sections: [
      {
        heading: "Engineered for attention and watch-time",
        paragraphs: [
          "Most viewers decide whether to keep watching within the first 1.8 seconds. Our post-production team specializes in hook pacing, eliminate dead space, and applying visual pattern interrupts that hold retention all the way to your CTA.",
          "We export across all platform specifications: vertical 9:16 for Reels and Shorts, landscape 16:9 for YouTube and websites, and 1:1 square for feed promotions with hard-coded animated captions.",
        ],
      },
    ],
  },

  "video-production": {
    projectIds: ["iskcon-juhu", "hiranandani", "new-fork-city", "thekatherinerae"],
    stacksHeading: "Cinema cameras, lighting and crew",
    stacks: [
      {
        title: "Camera & Optics",
        blurb: "Full-frame 4K cinema cameras equipped with fast prime glass for cinematic depth of field and color rendition.",
        tools: ["Sony FX6 Cinema Line", "Sony FX3", "Sony G Master Prime Lenses", "DJI RS3 Pro Gimbal"],
      },
      {
        title: "Lighting & Sound",
        blurb: "Studio-grade diffuse lighting and multi-channel broadcast wireless microphones for crystal-clear spoken audio.",
        tools: ["Aputure 300d/600d", "Nanlite Softboxes", "Sennheiser Wireless G4", "Rode Wireless PRO"],
      },
    ],
    sections: [
      {
        heading: "Full-service Mumbai production crew",
        paragraphs: [
          "From concept and scriptwriting to on-location directing and post-production, we manage the entire video production lifecycle under one roof in Mumbai.",
          "A single full-day shoot is planned rigorously to yield a primary brand or corporate film alongside a dozen vertical cutdowns for social media, maximizing your production ROI.",
        ],
      },
    ],
  },

  "video-marketing": {
    projectIds: ["iskcon-juhu", "new-fork-city", "hiranandani", "thekatherinerae"],
    stacksHeading: "Shooting and editing",
    stacks: [
      {
        title: "Edit and finish",
        blurb: "Direction, cutting, grading and motion graphics under one roof, so revisions take hours rather than a week.",
        tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"],
      },
      {
        title: "Capture",
        blurb: "Scaled to the job — a reel does not need a crew, and a brand film should not be shot on a phone.",
        tools: ["Mirrorless cameras", "Gimbal", "Lavalier and shotgun audio", "LED lighting"],
      },
    ],
    sections: [
      {
        heading: "Planned around where it will be watched",
        paragraphs: [
          "A vertical reel, a YouTube explainer and a sixty-second ad are different products even when they come from the same shoot day. Deciding that upfront changes the shot list, the framing and the way the audio is recorded — which is why cropping one into the others afterwards always looks like what it is.",
          "Most budgets are better spent on three useful videos than one beautiful one. A polished brand film nobody finishes is worth less than a rough clip that answers the question a customer actually had.",
        ],
      },
      {
        heading: "What a shoot day actually produces",
        paragraphs: [
          "One properly planned day typically yields a hero piece, six to ten short vertical cuts and a library of stills. That ratio is deliberate — the short cuts are what feed the next two months of posting, and they cost almost nothing extra once the crew and the lighting are already in the room.",
          "The planning is what makes it possible. Interviews are shot so answers stand alone without the question, b-roll is captured in both orientations, and audio is recorded properly rather than taken off the camera. Skip any of those and the footage only works in the one format it was framed for.",
        ],
      },
      {
        heading: "Scripting that does not sound scripted",
        paragraphs: [
          "Most business video fails in the writing, not the filming. A script that reads well on paper tends to sound stiff out loud, so we write to be spoken — short sentences, one idea at a time, and the point made in the first ten seconds rather than held back for a reveal nobody waits for.",
          "Where the speaker is a founder or an engineer rather than a presenter, we interview instead of scripting. People are far more convincing explaining something they know than reciting something they were handed on the day.",
        ],
      },
    ],
  },

  seo: {
    projectIds: ["europack", "gauranitai", "vr-packaging", "tata"],
    stacksHeading: "What we work with",
    stacks: [
      {
        title: "Technical",
        blurb: "Done first, because content published on a site search engines cannot crawl properly is wasted money.",
        tools: ["Search Console", "Screaming Frog", "Core Web Vitals", "Schema.org structured data", "XML sitemaps"],
      },
      {
        title: "Research and reporting",
        blurb: "Topics in clusters rather than isolated keywords, so pages support each other instead of competing.",
        tools: ["Ahrefs", "Semrush", "Google Keyword Planner", "GA4", "Looker Studio"],
      },
    ],
    sections: [
      {
        heading: "How long it takes, honestly",
        paragraphs: [
          "Technical fixes can show up within weeks. Content and authority take months — three to six before the trend is clear on a competitive term, longer in a crowded category. Anyone promising page one in thirty days is either targeting terms nobody searches or about to do something that gets the site penalised.",
          "What you should see early is movement in impressions and in the number of distinct queries bringing people in. Those move before rankings do, and they are the sign the work is landing.",
        ],
      },
      {
        heading: "Local search",
        paragraphs: [
          "For a business with an address, the map pack is often worth more than the blue links above it. That work is different: a complete and consistent business profile, categories chosen deliberately, real photos, and a steady trickle of reviews rather than a burst of them.",
          "Consistency across directories matters more than most people expect. The same name, address and phone number everywhere sounds trivial and is one of the more common reasons a legitimate business ranks below a less established competitor.",
        ],
      },
    ],
  },

  aeo: {
    projectIds: ["amazon", "blackrock", "zomato"],
    stacksHeading: "What this involves",
    stacks: [
      {
        title: "Making your content quotable",
        blurb: "Clear, self-contained passages with the answer near the question — the shape these systems lift from.",
        tools: ["Schema.org structured data", "FAQ and HowTo markup", "llms.txt", "Entity-consistent copy"],
      },
      {
        title: "Tracking citations",
        blurb: "Checking where you are actually appearing, because none of these platforms report it to you.",
        tools: ["ChatGPT", "Google AI Overviews", "Perplexity", "Gemini", "Bing Copilot"],
      },
    ],
    sections: [
      {
        heading: "Why this is suddenly worth doing",
        paragraphs: [
          "A growing share of research now ends inside an answer rather than on a results page. The user reads a synthesised response and either a business is named in it or it is not — there is no second page to be on, and no way to buy your way in.",
          "The mechanics overlap with SEO without being identical. Language models favour content that states things plainly, keeps facts consistent across the web, and does not bury the answer under four paragraphs of preamble. A lot of copy written to sound impressive performs badly for exactly that reason.",
        ],
      },
      {
        heading: "What nobody can promise you",
        paragraphs: [
          "This field is early and genuinely unsettled. The systems change without notice, they disagree with each other, and anyone selling a guaranteed method is overselling. What can be done is make your content the easiest correct thing to quote and then measure what happens.",
          "That measurement is the part most providers skip, because it takes real work to check a set of buying questions across several assistants every month. Without it you are paying for an activity rather than an outcome.",
        ],
      },
    ],
  },

  "ai-automation": {
    projectIds: ["amazon", "blackrock", "zomato", "bajaj", "moneyview", "educonnect-ai"],
    stacksHeading: "What we build with",
    stacks: [
      {
        title: "Models and agents",
        blurb: "Chosen per task — the cheapest model that is reliably good enough, not the largest one available.",
        tools: ["Claude", "OpenAI", "Gemini", "Vector databases", "RAG pipelines"],
      },
      {
        title: "Plumbing",
        blurb: "The unglamorous half: connecting the systems you already pay for so work stops being retyped between them.",
        tools: ["n8n", "Make", "Zapier", "Python", "Node.js", "REST and webhook integrations"],
      },
    ],
    sections: [
      {
        heading: "Where automation pays, and where it does not",
        paragraphs: [
          "The work that pays is repetitive, high-volume and rule-shaped: qualifying and routing enquiries, pulling data between systems, drafting first versions of documents somebody then checks, answering the same twenty questions. The saving is real and easy to measure in hours.",
          "The work that does not pay is anything requiring judgement with a real cost attached, where a confident wrong answer is worse than no answer. We draw that line explicitly and put a human in the loop at it, rather than automating something that will quietly cause damage for months.",
        ],
      },
      {
        heading: "Built to be handed over",
        paragraphs: [
          "An automation nobody but us can maintain is a liability dressed as an asset. Workflows are documented, credentials live in your accounts, and someone on your team is walked through how each one works and how to switch it off.",
          "We also set up monitoring, because the failure mode of a silent automation is that it stops working and nobody notices for a fortnight.",
        ],
      },
      {
        heading: "Starting small on purpose",
        paragraphs: [
          "The automations that survive are the ones that started as one annoying task. We pick a process somebody on your team already complains about, automate that alone, and let it run for a fortnight before touching anything else. It is slower on paper and far more likely to still be running a year later.",
          "Big-bang automation programmes fail for a predictable reason: they change several things at once, so when something goes wrong nobody can tell which part caused it. Shipping one workflow at a time keeps every failure cheap and obvious.",
          "You also learn what your data is actually like. Almost every project turns up a spreadsheet with inconsistent names, a CRM field people use for three different things, or a process that two departments run differently. Finding that on a small workflow costs a day; finding it on a large one costs a month.",
        ],
      },
    ],
  },

  "google-ads": {
    projectIds: ["europack", "vr-packaging", "moneyview"],
    stacksHeading: "What we manage it with",
    stacks: [
      {
        title: "Campaign types",
        blurb: "Picked for the job rather than whatever the interface pushes hardest on setup.",
        tools: ["Search", "Performance Max", "Shopping", "YouTube", "Remarketing"],
      },
      {
        title: "Measurement",
        blurb: "Offline conversion imports where the sale happens on a call, so bidding optimises on revenue rather than form fills.",
        tools: ["GA4", "Google Tag Manager", "Conversion imports", "Looker Studio", "Call tracking"],
      },
    ],
    sections: [
      {
        heading: "Where the money usually leaks",
        paragraphs: [
          "Four causes account for most waste: broad match running without supervision, no negative keyword discipline, automated recommendations applied without review, and traffic landing on a page that does not match what was searched. None of them are exotic, and all of them are routine to find in an account nobody has audited in a year.",
          "We go after those first. It is common for an account to get cheaper before it gets bigger, which is a strange thing to report in month one and the right order to do the work in.",
        ],
      },
      {
        heading: "What we will tell you not to bid on",
        paragraphs: [
          "Not every keyword is winnable at a price that makes sense. Head terms in competitive categories are often bid up by companies with a far higher customer value than yours, and matching them is a way to lose money steadily.",
          "The better position is usually narrower and less contested — longer queries where intent is obvious and the competition has not bothered. Saying which is which is part of the job, not an upsell.",
        ],
      },
    ],
  },
};
