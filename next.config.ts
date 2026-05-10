import type { NextConfig } from "next";

// Next.js (App Router + RSC streaming) injeta <script>self.__next_f.push(...)
// inline para hidratar a página. Sem 'unsafe-inline' em script-src o navegador
// bloqueia esses scripts em produção e a hidratação nunca completa — o que
// quebra hooks tipo useScroll do Framer Motion (zoom no hero não roda).
//
// Para uma estática como esse site (sem auth, sem inputs refletidos, sem
// upload), 'unsafe-inline' tem trade-off pequeno. Para tornar mais rígido,
// dá pra implementar nonces via middleware no futuro.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
