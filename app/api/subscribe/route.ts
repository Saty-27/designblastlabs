import { NextResponse } from "next/server";
import { append, forward } from "@/lib/submissions";
import { clientIp, rateLimit, sameOrigin } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "Request blocked." }, { status: 403 });
  }

  const limit = rateLimit(`subscribe:${clientIp(request)}`, 5, 10 * 60 * 1000);
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

  const raw = (body as Record<string, unknown> | null)?.email;
  const email = typeof raw === "string" ? raw.trim().slice(0, 200) : "";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  let saved;
  try {
    saved = await append({ kind: "newsletter", contact: email });
  } catch {
    return NextResponse.json(
      { error: "We couldn't save your signup. Please try again later." },
      { status: 500 }
    );
  }

  await forward(process.env.NEWSLETTER_WEBHOOK_URL, saved);
  return NextResponse.json({ ok: true }, { status: 200 });
}
