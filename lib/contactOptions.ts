/** Shared between the API route and the forms, so validation can't drift. */

/** Picking this reveals a free-text box; the typed value is stored in `details`. */
export const OTHER = "Other";

export const SERVICES = [
  "Website Development",
  "AI Agents & Automation",
  "Social Media Marketing",
  "Video Editing",
  "Video Production",
  "App Development",
  "SEO & Organic Growth",
  "Not sure yet",
  OTHER,
];

export const NEEDS = [
  "Website Development",
  "AI Agents & Automation",
  "Social Media Marketing",
  "Video Editing",
  "Video Production",
  "App Development",
  "Full Digital System",
  OTHER,
];

export const BUDGETS = [
  "Under ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹10,00,000",
  "₹10,00,000+",
];

/** Upper bound on the free-text box, enforced on both client and server. */
export const DETAILS_MAX = 800;

/** Phone-led request from the "book a call" modal. */
export interface StrategyCallRequest {
  source: "strategy-call";
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  business?: string;
  service: string;
  /** What they need. Always asked for on this form. */
  details: string;
}

/** Email/WhatsApp-led request from the footer booking card. */
export interface BookingRequest {
  source: "booking";
  name: string;
  contact: string;
  need: string;
  budget?: string;
  /** What they typed when they chose "Other". */
  details?: string;
}

export type ContactRequest = StrategyCallRequest | BookingRequest;
