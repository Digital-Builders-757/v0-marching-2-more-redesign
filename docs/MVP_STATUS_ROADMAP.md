# MVP status / roadmap — Marching 2 More (marketing site)

High-level phase view. Detailed “done / next” lives in **[WORK_ORDER.md](./WORK_ORDER.md)**.

## Current focus (P0)

- **Wix / content parity QA** — Home, buy, sell, team, contact, policies; CTAs and numbers match **`lib/m2m-site.ts`**.
- **CI health** — `npm run ci` (lint, typecheck, build, Playwright smoke) and **`.github/workflows/pr-ci.yml`** stay green on PRs.

## Next (P1)

- **Production media** — Replace placeholder remote images with finalized assets; keep **`next.config.mjs`** `images.remotePatterns` in sync.
- **`/resources` depth** — Pre-listing checklist page and `.txt` download via **`GET /api/pre-listing-checklist`**; wire email capture and swap in a real PDF when assets are ready.
- **Test coverage** — Playwright smoke covers home, `/resources`, and `/contact-us`; extend with more routes or visual checks as needed.
- **TypeScript strictness** — Narrow or remove `typescript.ignoreBuildErrors` in `next.config.mjs` when the codebase is ready.

## References

| Doc | Purpose |
|-----|---------|
| [WORK_ORDER.md](./WORK_ORDER.md) | Recent ships and ordered next steps |
| [DOCUMENTATION.md](./DOCUMENTATION.md) | Doc index |
| [lib/m2m-site.ts](../lib/m2m-site.ts) | Phone, mailto, Calendly, partners, resource URLs |
