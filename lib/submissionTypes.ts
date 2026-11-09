/** Client-safe types and labels. Kept free of `fs` so the browser can import it. */

export type SubmissionKind = "strategy-call" | "booking" | "newsletter";

/** Where an enquiry has got to. New arrivals start as "new". */
export type SubmissionStatus = "new" | "contacted" | "won" | "closed";

export interface Submission {
  id: string;
  kind: SubmissionKind;
  receivedAt: string;
  /** Person's name, where the form collects one. */
  name?: string;
  /** The best way to reach them — phone number or email address. */
  contact: string;
  /** Email address, where the form collects one alongside a phone number. */
  email?: string;
  business?: string;
  /** Service or need they picked. */
  interest?: string;
  /** Free text they typed when they picked "Other". */
  details?: string;
  budget?: string;
  status: SubmissionStatus;
  /** Your own private note, only ever visible in the admin panel. */
  notes?: string;
  updatedAt?: string;
}

export const KIND_LABELS: Record<SubmissionKind, string> = {
  "strategy-call": "Strategy call",
  booking: "Booking",
  newsletter: "Newsletter",
};

export const STATUSES: SubmissionStatus[] = ["new", "contacted", "won", "closed"];

export const STATUS_LABELS: Record<SubmissionStatus, string> = {
  new: "New",
  contacted: "Contacted",
  won: "Won",
  closed: "Closed",
};

/** Longest note we accept, enforced on both client and server. */
export const NOTES_MAX = 2000;
