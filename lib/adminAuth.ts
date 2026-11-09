/**
 * Signed session cookie for the admin panel.
 *
 * Uses Web Crypto so the same code runs in middleware (Edge runtime) and in
 * Node route handlers. The cookie holds only an expiry plus an HMAC over it —
 * no credentials travel to the browser.
 */

export const ADMIN_COOKIE = "dbl_admin";
export const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

const encoder = new TextEncoder();

function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value: string) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
  // Allocate over a plain ArrayBuffer so the result satisfies BufferSource.
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createSessionToken(secret: string, ttlMs = SESSION_TTL_MS): Promise<string> {
  const payload = toBase64Url(encoder.encode(JSON.stringify({ exp: Date.now() + ttlMs })));
  const signature = await crypto.subtle.sign("HMAC", await hmacKey(secret), encoder.encode(payload));
  return `${payload}.${toBase64Url(new Uint8Array(signature))}`;
}

export async function verifySessionToken(token: string | undefined, secret: string): Promise<boolean> {
  if (!token || !secret) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  try {
    const valid = await crypto.subtle.verify(
      "HMAC",
      await hmacKey(secret),
      fromBase64Url(signature),
      encoder.encode(payload)
    );
    if (!valid) return false;

    const { exp } = JSON.parse(new TextDecoder().decode(fromBase64Url(payload)));
    return typeof exp === "number" && Date.now() < exp;
  } catch {
    return false;
  }
}
