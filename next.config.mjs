/**
 * Content-Security-Policy.
 *
 * 'unsafe-inline' is required for styles because Tailwind and this project's
 * components set inline style attributes; 'unsafe-eval' is dev-only (webpack
 * HMR needs it). Fonts and images are self-hosted via next/font, so no external
 * origins are allowed at all.
 */
const isHttps = process.env.ENABLE_HTTPS === "true";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}`,
  // Forms post to our own API; webhooks are called server-side, not from here.
  "connect-src 'self'",
  ...(isHttps ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Clickjacking: frame-ancestors above is the modern rule, this covers old browsers.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  ...(isHttps
    ? [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }]
    : []),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework version to attackers.
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/services/:slug",
        destination: "/:slug",
        statusCode: 301,
      },
      {
        source: "/mumbai/:slug",
        destination: "/:slug-in-mumbai",
        statusCode: 301,
      },
      {
        source: "/new-york/:slug",
        destination: "/:slug-in-new-york",
        statusCode: 301,
      },
      {
        source: "/portfolio",
        destination: "/work",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Belt and braces: the admin pages also set this via metadata.
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
