# site-casamento

Landing page cinematográfica de casamento — Anderson & Juliana, 21 de Novembro de 2026.

Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, Framer Motion.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estrutura

- `src/app/page.tsx` — orquestrador cinematográfico (scrollytelling).
- `src/components/CinematicHero.tsx` — Hero com Ring Zoom (200vh sticky + interpolação de scroll).
- `src/components/GiftSection.tsx` — vitrine de presentes com modal PIX.
- `next.config.ts` — security headers (CSP, X-Content-Type-Options, Referrer-Policy).
