import { NextResponse } from "next/server";
import { BUDGETS, type ContactRequest, DETAILS_MAX, NEEDS, OTHER, SERVICES } from "@/lib/contactOptions";
import { append, forward } from "@/lib/submissions";
import { clientIp, rateLimit, sameOrigin } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Result = { ok: true; data: ContactRequest } | { ok: false; error: string };

/** 6 submissions per 10 minutes per IP — generous for a human, hostile to a bot. */
const MAX_SUBMISSIONS = 6;
const WINDOW_MS = 10 * 60 * 1000;

/** Hard ceiling on any single field, so a giant payload can't be stored. */
const FIELD_MAX = 200;

const str = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, FIELD_MAX) : "");

/**
 * "Other" is only meaningful with text alongside it. Returns the cleaned
 * string, or a failed Result to hand straight back to the caller.
 */
function detailsFor(choice: string, raw: string): string | { ok: false; error: string } {
  if (choice !== OTHER) return "";
  if (raw.length < 2) return { ok: false, error: "Please tell us what you need." };
  if (raw.length > DETAILS_MAX) {
    return { ok: false, error: `Please keep it under ${DETAILS_MAX} characters.` };
  }
  return raw;
}

function validate(body: unknown): Result {
  if (typeof body !== "object" || body === null) return { ok: false, error: "Invalid request body." };
  const b = body as Record<string, unknown>;

  // Default to the modal's shape so earlier clients keep working.
  const source = str(b.source) === "booking" ? "booking" : "strategy-call";

  if (source === "booking") {
    const name = str(b.name);
    const contact = str(b.contact);
    const need = str(b.need);
    const budget = str(b.budget);

    if (name.length < 2) return { ok: false, error: "Please enter your name." };
    // Either an email address or a phone/WhatsApp number is acceptable here.
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact);
    const isPhone = /^[+()\d][\d\s()-]{6,19}$/.test(contact);
    if (!isEmail && !isPhone) {
      return { ok: false, error: "Enter a valid email address or WhatsApp number." };
    }
    if (!NEEDS.includes(need)) return { ok: false, error: "Please choose what you need." };
    if (budget && !BUDGETS.includes(budget)) return { ok: false, error: "Please choose a valid budget." };

    const details = detailsFor(need, typeof b.details === "string" ? b.details.trim() : "");
    if (typeof details !== "string") return details;

    return { ok: true, data: { source, name, contact, need, budget, details } };
  }

  const fullName = str(b.fullName);
  const email = str(b.email);
  const phone = str(b.phone);
  const countryCode = str(b.countryCode);
  const business = str(b.business);
  const service = str(b.service);

  if (fullName.length < 2) return { ok: false, error: "Please enter your full name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!/^[0-9\s-]{7,15}$/.test(phone)) return { ok: false, error: "Please enter a valid phone number." };
  if (!/^\+\d{1,4}$/.test(countryCode)) return { ok: false, error: "Please select a country code." };
  if (!SERVICES.includes(service)) return { ok: false, error: "Please select a service." };

  // The requirement is always asked for here, whatever service they picked.
  const details = typeof b.details === "string" ? b.details.trim() : "";
  if (details.length < 5) return { ok: false, error: "Please tell us what you need." };
  if (details.length > DETAILS_MAX) {
    return { ok: false, error: `Please keep it under ${DETAILS_MAX} characters.` };
  }

  return { ok: true, data: { source, fullName, email, countryCode, phone, business, service, details } };
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "Request blocked." }, { status: 403 });
  }

  const limit = rateLimit(`contact:${clientIp(request)}`, MAX_SUBMISSIONS, WINDOW_MS);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Could not read the request." }, { status: 400 });
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const data = result.data;
  const entry =
    data.source === "booking"
      ? {
          kind: "booking" as const,
          name: data.name,
          contact: data.contact,
          interest: data.need,
          budget: data.budget || undefined,
          details: data.details || undefined,
        }
      : {
          kind: "strategy-call" as const,
          name: data.fullName,
          contact: `${data.countryCode} ${data.phone}`,
          email: data.email,
          business: data.business || undefined,
          interest: data.service,
          details: data.details || undefined,
        };

  let saved;
  try {
    saved = await append(entry);
  } catch {
    // Saving failed — say so rather than pretending it went through.
    return NextResponse.json(
      { error: "We couldn't save your request. Please call or email us instead." },
      { status: 500 }
    );
  }

  await forward(process.env.BOOKING_WEBHOOK_URL, saved);
  return NextResponse.json({ ok: true }, { status: 200 });
}
