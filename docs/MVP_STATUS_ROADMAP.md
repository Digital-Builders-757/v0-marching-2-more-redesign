# MVP status / roadmap — Marching 2 More (marketing site)

High-level phase view. Detailed “done / next” lives in **[WORK_ORDER.md](./WORK_ORDER.md)**.

**GHL phase:** The project is in **implementation hardening / live cutover** mode — the **website-side lead capture foundation is shipped** (`POST /api/submit-lead`, wired forms, booking helper, observability). **Live account hookup** (Vercel `GHL_*` env, real field/pipeline/tag IDs, workflows, calendars) and **end-to-end validation against the M2M GHL sub-account** are **still pending**. See **[M2M_GHL_REMAINING_GAPS.md](./M2M_GHL_REMAINING_GAPS.md)** for a blunt split of done vs blocked vs remaining.

## Current focus (P0)

- **GoHighLevel cutover (through May 1, 2026)** — **Done in repo:** lead API, `lib/ghl/`, form wiring, `getPrimaryConsultationBookUrl()`, runbook/gaps docs. **Not done:** populate **`GHL_*`** in Vercel from **[`.env.example`](../.env.example)**; complete **GHL admin** tasks in **[M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md)**; execute **[M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md)** test sequences against a real sub-account. Replace **`GOHIGHLEVEL_*`** placeholders in **`lib/m2m-site.ts`** when booking/quiz URLs exist.
- **Wix / content parity QA** — Home, buy, sell, team, contact, policies; CTAs and numbers match **`lib/m2m-site.ts`** (partner URLs: **`PARTNER_LINKS`**; review CTA: **`GOOGLE_REVIEW_URL`**).
- **Site modernization** — Public routes in **[WORK_ORDER.md](./WORK_ORDER.md)** use **`M2mInsetHeroFrame`** / **`M2mInsetHeroScrim`** for the inset hero cluster (home, home-search, resources, CMA, free valuation), refreshed execution table (website-only), and polish on policy shell, agent profiles, blog, contact trust row, and footer **`M2M_MEDIA`**. Shared **lead-submit error** UI + slightly lighter **scrim** tokens improve readability on photo heroes without flattening the brand. Ongoing: Blob/tool hero art, campaign `content.ts` swaps, strict TypeScript in CI.
- **Lead-gen / routing** — Shared **`M2mBrandLogo`** + **`M2mLeadQuizSection`**; **`/facing-foreclosure`** with redirects from legacy slugs; **`/get-license-in-va`** (Moseley referral); campaign footers simplified; **`GOHIGHLEVEL_QUIZ_*`** in **`lib/m2m-site.ts`** still placeholders until GHL/marketing supply embed URLs — downsizing uses **fallback form** wired to **`/api/submit-lead`**; credit page uses **local playbook form** wired to API when quiz URL unset. **Website lead capture (in repo):** all **`submitLeadToApi`** surfaces share timeline options (`lib/m2m-lead-urgency.ts`), **`M2mLeadUrgencySelect`**, stronger buyer/seller payloads (address / urgency / notes where appropriate), **GHL contact Notes API** when `notes` is sent, and operator docs updated — **live GHO validation** still through cutover runbook.
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
| [M2M_GHL_REMAINING_GAPS.md](./M2M_GHL_REMAINING_GAPS.md) | GHL: done vs blocked vs QA |
| [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) | Env + test order for cutover |
| [DOCUMENTATION.md](./DOCUMENTATION.md) | Doc index |
| [lib/m2m-site.ts](../lib/m2m-site.ts) | Phone, mailto, GHL/Calendly booking, partners, resource URLs |
