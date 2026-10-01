# LoanPay Tech — tech.loanpaylogic.com

Practical how-to technology guides in an original "geek terminal" visual style:
near-black background, neon-green monospace accents, terminal step cards.

## Stack

Next.js 15 + React 19 + Tailwind CSS 4 + TypeScript (strict). No extra
dependencies. No external fonts or images; the only third-party request is the
Google AdSense library script in `app/layout.tsx`.

## Develop

```bash
npm install --no-audit --no-fund
npm run dev
npx tsc --noEmit
npm run build
```

## Content

- 25 evergreen how-to / buying guides under `app/*/page.tsx`
- 5 legal pages: `/about` `/contact` `/privacy-policy` `/terms-of-service` `/disclaimer`
- Hub homepage `app/page.tsx` + `app/sitemap.ts` (31 URLs)

Every content page is a server component with full metadata, a single H1, a
data table, visible FAQs, and matching `FAQPage` JSON-LD.
