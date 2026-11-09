import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { ADMIN_COOKIE, SESSION_TTL_MS, createSessionToken } from "@/lib/adminAuth";
import { clientIp, rateLimit, resetLimit, sameOrigin } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** 8 attempts per 15 minutes per IP, so a password can't be brute-forced. */
const MAX_ATTEMPTS = 8;
const WINDOW_MS = 15 * 60 * 1000;

/** Constant-time compare so credentials can't be recovered by timing. */
function matches(given: string, expected: string): boolean {
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length) {
    // Still do a comparison so the work is the same either way.
    timingSafeEqual(a, a);
    return false;
  }
  return timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "Request blocked." }, { status: 403 });
  }

  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!username || !password || !secret) {
    return NextResponse.json(
      {
        error:
          "Admin access is not configured. Set ADMIN_USERNAME, ADMIN_PASSWORD and ADMIN_SESSION_SECRET.",
      },
      { status: 500 }
    );
  }

  const ip = clientIp(request);
  const limit = rateLimit(`login:${ip}`, MAX_ATTEMPTS, WINDOW_MS);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: `Too many attempts. Try again in ${Math.ceil(limit.retryAfter / 60)} minute(s).` },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Could not read the request." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const givenUser = typeof b?.username === "string" ? b.username.trim() : "";
  const givenPass = typeof b?.password === "string" ? b.password : "";

  // Check both regardless, so a wrong username and a wrong password are
  // indistinguishable to an attacker — and say nothing about which failed.
  const userOk = matches(givenUser, username);
  const passOk = matches(givenPass, password);

  if (!userOk || !passOk) {
    return NextResponse.json(
      { error: `Incorrect username or password. ${limit.remaining} attempt(s) left.` },
      { status: 401 }
    );
  }

  resetLimit(`login:${ip}`);

  const response = NextResponse.json({ ok: true }, { status: 200 });
  response.cookies.set({
    name: ADMIN_COOKIE,
    value: await createSessionToken(secret),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  });
  return response;
}
