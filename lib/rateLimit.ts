/**
 * Fixed-window rate limiter held in memory.
 *
 * LIMITATION, STATED PLAINLY: this counts per server process. It stops casual
 * password guessing and form spam from a single source, but it resets on deploy
 * and does not coordinate across multiple instances or serverless lambdas. For
 * a hardened production setup put Cloudflare / your host's WAF in front, or
 * move these counters to Redis or Upstash.
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

/** Drop expired buckets so the map can't grow without bound. */
function sweep(now: number) {
  if (buckets.size < 5000) return;
  Array.from(buckets.entries()).forEach(([key, bucket]) => {
    if (bucket.resetAt <= now) buckets.delete(key);
  });
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  /** Seconds until the window resets — send as Retry-After. */
  retryAfter: number;
}

export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, retryAfter: 0 };
  }

  existing.count += 1;
  const retryAfter = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));

  if (existing.count > limit) {
    return { allowed: false, remaining: 0, retryAfter };
  }
  return { allowed: true, remaining: limit - existing.count, retryAfter };
}

/** Clears a key — used so a successful login doesn't count against the user. */
export function resetLimit(key: string): void {
  buckets.delete(key);
}

/**
 * Best-effort client IP. Proxy headers are spoofable unless your host
 * overwrites them, so treat this as a speed bump, not an identity.
 */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

/**
 * Rejects cross-site POSTs by comparing Origin against the request host.
 * With a SameSite=Lax session cookie this is belt-and-braces CSRF defence.
 */
export function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true; // non-browser clients (curl, server-to-server)
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}
