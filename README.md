# PURL — Make What You Wear

A knitting fashion house: premium patterns, kits, and yarn for people who'd rather make the piece than find it. Built as a frontend-only Next.js site — no backend, no real payments, all commerce interactions are static/local UI.

## Brand & Business Concept

- **Brand:** PURL — a knitting fashion house positioned between luxury editorial and independent designer brand, not a craft store.
- **Primary revenue models:** digital patterns (high-margin, instant delivery), premium kits (yarn + pattern + notions bundled, higher AOV), and the Knit Club membership ($9/mo recurring, drives retention and repeat purchase).
- **Target customer:** 22–40, fashion- and design-literate, drawn to slow fashion and independent brands — whether or not they already knit.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer-motion-ready component structure, `lucide-react` icons
- Editorial photography generated for the brand and optimized to JPEG via `scripts/optimize-images.mjs`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes: home, `/shop`, `/shop/[slug]`, `/quiz`, `/journal`, `/journal/[slug]`, `/knit-club`, `/about`, `/faq`, `/shipping`, `/contact`
- `src/components/sections` — homepage editorial/conversion sections (hero, drops, membership, quiz, etc.)
- `src/components/product`, `src/components/shop` — product card, product grid, cart UI
- `src/lib/data.ts` — brand copy, products, testimonials, journal posts, quiz logic
- `src/lib/cart-context.tsx` — local (non-persisted, no backend) cart state

## Notes

This is a frontend-only build: the cart, checkout button, quiz, and newsletter/contact forms are fully interactive UI with no server or payment processing behind them, ready to be wired up to a commerce backend later.
