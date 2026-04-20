# MVP status / roadmap — Marching 2 More (marketing site)

High-level phase view. Detailed “done / next” lives in **[WORK_ORDER.md](./WORK_ORDER.md)**.

## Current focus (P0)

- **Wix / content parity QA** — Home, buy, sell, team, contact, policies; CTAs and numbers match **`lib/m2m-site.ts`** (partner URLs: **`PARTNER_LINKS`**; review CTA: **`GOOGLE_REVIEW_URL`**).
- **Site modernization** — Public routes in **[WORK_ORDER.md](./WORK_ORDER.md)** use **`M2mInsetHeroFrame`** / **`M2mInsetHeroScrim`** for the inset hero cluster (home, home-search, resources, CMA, free valuation), refreshed execution table (website-only), and polish on policy shell, agent profiles, blog, contact trust row, and footer **`M2M_MEDIA`**. Ongoing: Blob/tool hero art, campaign `content.ts` swaps, form backends, strict TypeScript in CI.
- **Lead-gen / routing (shipped)** — Shared **`M2mBrandLogo`** + **`M2mLeadQuizSection`**; **`/facing-foreclosure`** with redirects from legacy slugs; **`/get-license-in-va`** (Moseley referral); campaign footers simplified; quiz URLs in **`lib/m2m-site.ts`** remain placeholders until GHL provides embeds.
- **CI health** — `npm run ci` (lint, test, typecheck, build) stays green locally and on PRs (`.github/workflows/pr-ci.yml` matches that sequence).

## Next (P1)

- **Production media** — Replace placeholder remote images with finalized assets; keep **`next.config.mjs`** `images.remotePatterns` in sync. Campaigns **`/improve-your-credit`**, **`/downsizing-your-home`**, **`/va-loan-benefits`**, and **`/facing-foreclosure`** use `content.ts` “SWAP” / TODO notes for final art, links, and form backends.
- **Real tests** — Replace placeholder `npm test` with unit or Playwright smoke coverage when prioritized.
- **TypeScript strictness** — Narrow or remove `typescript.ignoreBuildErrors` in `next.config.mjs` when the codebase is ready.

## References

| Doc | Purpose |
|-----|---------|
| [AGENTS.md](../AGENTS.md) | Agent start + canonical doc order |
| [ARCHITECTURE_CONSTITUTION.md](./ARCHITECTURE_CONSTITUTION.md) | Invariant list |
| [ARCHITECTURE_SOURCE_OF_TRUTH.md](./ARCHITECTURE_SOURCE_OF_TRUTH.md) | Technical overview |
| [WORK_ORDER.md](./WORK_ORDER.md) | Recent ships and ordered next steps |
| [DOCUMENTATION.md](./DOCUMENTATION.md) | Doc index |
| [lib/m2m-site.ts](../lib/m2m-site.ts) | Phone, mailto, Calendly, partners, resource URLs |
