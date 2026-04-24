# Work order (Marching 2 More - site redesign)

**Execution spine for the public website.** Vision and rules: [M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md](./M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md). Current cross-site visual system pass: [M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md](./M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md). GoHighLevel integration is now an **active parallel track**; use [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md) as the CRM / automation source of truth.

## GHL integration — status (cutover readiness pass)

**Implemented in repo (this pass + prior foundation)**

- `POST /api/submit-lead` (Node), [`lib/ghl/`](../lib/ghl/) pipeline: validate → upsert contact → tags → optional opportunity; user-safe JSON errors with **`crm_*`** codes ([`lib/ghl/crm-user-message.ts`](../lib/ghl/crm-user-message.ts)) and HTTP status mapping in [`app/api/submit-lead/route.ts`](../app/api/submit-lead/route.ts).
- Structured server logs: `[ghl]` events + **`correlationId`** per submission; **`crmUserCode`** on classified upstream errors; **`listUnsetPipelineEnvVars()`** when opportunities are skipped (incomplete pipeline env).
- **Booking:** single pattern — [`getPrimaryConsultationBookUrl()`](../lib/m2m-site.ts) everywhere primary “book consultation” appears (including [`/contact-us`](../app/contact-us/page.tsx)): real `GOHIGHLEVEL_BOOKING_URL` wins, else Calendly fallback until GHL link exists.
- **Forms → API:** CMA, contact-us, buy/sell minis, home-search buyer, free valuation seller, foreclosure, downsizing (fallback + guide form), **credit playbook** (local form path), **VA** + **FHA** campaign forms, **divorce** guide form, **resources** checklist, homepage **Contact**, parity **`ContactForm`** — all send **`urgency`** (short forms default “Not sure yet”); see [M2M_LEAD_CAPTURE_MATRIX.md](./M2M_LEAD_CAPTURE_MATRIX.md).
- **Lead hardening (2026-04):** shared **MDY DOB** control; **`warnings`** on success for tags/opportunity/note partial failures; tiered **`crm_validation`** / duplicate hints in [`lib/ghl/crm-user-message.ts`](../lib/ghl/crm-user-message.ts); fetch failures → **`crm_unreachable`**; success JSON always includes **`correlationId`**.
- **Payload rules:** `phone` and `date_of_birth` optional on [`POST /api/submit-lead`](../app/api/submit-lead/route.ts); GHL upsert omits `phone` when not sent.
- UX: `aria-busy` on lead forms; success regions `aria-live`; [`lib/m2m-lead-submit.ts`](../lib/m2m-lead-submit.ts) documents user-safe errors.
- Docs: [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md), [M2M_GHL_REMAINING_GAPS.md](./M2M_GHL_REMAINING_GAPS.md), troubleshooting rows in [COMMON_ERRORS_QUICK_REFERENCE.md](./troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md).

**Verified**

- `npm run ci` (lint, test, typecheck, build) green on the integration branch.
- No `GHL_*` secrets in client bundles by design (env server-only; browser posts JSON only to `/api/submit-lead`).

**Not done (blocked on real GHL account + env)**

- Populate Vercel **`GHL_*`** from [`.env.example`](../.env.example) (PIT, location, eight custom field IDs, four pipeline/stage IDs, tag names).
- Replace **`GOHIGHLEVEL_*`** placeholders in [`lib/m2m-site.ts`](../lib/m2m-site.ts) with real `https://` booking + quiz URLs when marketing/GHL provides them.
- Build/configure workflows, notifications, calendars, and agent Google connections **inside GHL** — see [M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md).

**Still open (website / QA / content, not blocked on GHL login alone)**

- End-to-end smoke tests **against production GHL** (not only `GHL_DRY_RUN=true`).
- Optional: automated E2E (Playwright) for submit-lead paths; GHL Notes API for long `notes` if product wants conversation posts.

**Immediate next GHL tasks (operator order)**

1. Read [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) and [M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md).
2. Create/verify PIT + location → set `GHL_API_KEY`, `GHL_LOCATION_ID`.
3. Create custom fields → paste eight `GHL_CF_*` IDs.
4. Set pipelines/stages → four `GHL_*PIPELINE*` / `GHL_*STAGE*` env vars (or accept contact+tags-only until then).
5. Create tags → `GHL_TAG_LEAD_BUYER` / `GHL_TAG_LEAD_SELLER`.
6. Paste public booking URL into `GOHIGHLEVEL_BOOKING_URL`; optional quiz URLs into `GOHIGHLEVEL_QUIZ_*`.
7. Run seller + buyer + contact test sequences from the runbook; confirm in GHL UI.

## Done recently

- **DOB field UX (inset heroes)** — [`M2mLeadDobField`](../components/m2m-lead-form-fields.tsx): Radix **Select** (month/day/year) with portaled menus + local **Y/M/D** state so partial picks work while parent `value` stays empty until **`YYYY-MM-DD`** is complete; sr-only **`required`** gate + **`onInvalid`** focus to month. [`/home-search`](../components/home-search/home-search-buyer-lead.tsx): **`relative z-20`**, `id="home-search-dob"`, dark **`SelectContent`** classes. `npm run ci` green.
- **GHL error classification + campaign form wiring** — [`lib/ghl/crm-user-message.ts`](../lib/ghl/crm-user-message.ts) maps GHL HTTP failures to stable **`crm_*`** JSON codes and user-safe messages; [`lib/m2m-lead-submit-error-copy.ts`](../lib/m2m-lead-submit-error-copy.ts) + [`app/api/submit-lead/route.ts`](../app/api/submit-lead/route.ts) align UI and HTTP status. Stub forms now call **`submitLeadToApi`**: VA, FHA, downsizing guide, divorce aerial, `ContactForm`, home `Contact`, resources checklist. **Optional** `phone` / `date_of_birth` in [`lib/ghl/validate.ts`](../lib/ghl/validate.ts); [`lib/ghl/client.ts`](../lib/ghl/client.ts) omits empty `phone` on upsert. Operator + troubleshooting docs updated. `npm run ci` green.
- **Lead failure UX + hero readability (shared patterns)** — [`M2mLeadSubmitErrorAlert`](../components/m2m-lead-submit-error-alert.tsx) + [`lib/m2m-lead-submit-error-copy.ts`](../lib/m2m-lead-submit-error-copy.ts): calm copy, “what you can do,” optional correlation reference; wired on contact, CMA, valuation, buy/sell minis, foreclosure, downsizing, credit playbook, home-search buyer. **Scrim tokens** in [`m2m-layout`](../components/m2m-layout.tsx) (`luminous`, `home`, photo band) lightened for less muddy photography; key inset heroes and CTAs tuned for mobile contrast/tap targets (`/home-search`, `/free-home-valuation`, `/cma-form`, `/resources`, home hero). `npm run ci` green.
- **GoHighLevel live-cutover readiness** — Same scope as **GHL integration — status** above (logs, booking alignment, credit playbook, a11y on forms, runbook + gaps docs).
- **GoHighLevel foundation (Phase 1–2 website)** — [`lib/ghl/`](../lib/ghl/) (config, validate, client, submit orchestration), [`app/api/submit-lead/route.ts`](../app/api/submit-lead/route.ts), client [`lib/m2m-lead-submit.ts`](../lib/m2m-lead-submit.ts) + [`lib/m2m-utm.ts`](../lib/m2m-utm.ts), [`getPrimaryConsultationBookUrl()`](../lib/m2m-site.ts) (GHL-first booking). Seller/buyer forms wired on CMA, contact, foreclosure, free valuation, sell, downsizing fallback, buy, home-search. Account-side tasks: [`M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md`](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md), env template [`.env.example`](../.env.example).
- **Inset hero system** - `M2mInsetHeroFrame` + `M2mInsetHeroScrim` in [`components/m2m-layout.tsx`](../components/m2m-layout.tsx): shared 95% rounded card, ring/shadow, and tokenized scrims (`home` gradient + `60`-`80` opacity). Adopted on home [`Hero`](../components/hero.tsx), [`/home-search`](../app/home-search/page.tsx), [`/resources`](../app/resources/page.tsx), [`/cma-form`](../app/cma-form/page.tsx), [`/free-home-valuation`](../app/free-home-valuation/page.tsx) hero bands.
- **Policy + profiles + blog + contact** - [`PolicyPage`](../components/policy/policy-page.tsx): `m2m-deep` / `m2m-muted`, display title, `M2mSection` rhythm. [`AgentProfile`](../components/team/agent-profile.tsx): M2M tokens, shadcn `Button` CTAs. [`/blog`](../app/blog/page.tsx) and [`/blog/[slug]`](../app/blog/[slug]/page.tsx): on-brand prose/meta. [`/contact-us`](../app/contact-us/page.tsx): correct `h1` / eyebrow, trust row (phone + book via [`getPrimaryConsultationBookUrl()`](../lib/m2m-site.ts)).
- **Footer media** - Agent thumbnails use [`M2M_MEDIA`](../lib/m2m-media.ts) in [`Footer`](../components/footer.tsx).
- **Design token sweep (home funnel + reviews + valuation)** - `app/globals.css`: `m2m-reviews-band`. Buy/sell heroes + `M2M_MEDIA`. Partners / PropertySearch tokens. Reviews bands. Brand doc updated for reviews token.
- **Partners + shell + CMA** - Partner `href`s from `PARTNER_LINKS` in `lib/m2m-site.ts`. Branded `not-found`. CMA form shared field classes and footer placement.
- **Broader overhaul sweeps** - `M2mContainer` / `M2mSection` on partners, blog, team, reviews, contact, resources, campaigns, etc. Shared `m2m-layout`, `m2m-cta`, `m2m-form`, button variants (`m2mGold`, `m2mPanel`). Production Blob imagery in `lib/m2m-media.ts`.
- **Campaign landings** - `/improve-your-credit`, `/downsizing-your-home`, `/va-loan-benefits`, `/facing-foreclosure`, `/get-license-in-va` (see repo and [site-routes.md](./diagrams/site-routes.md)).
- **Tooling** - `npm run ci`; ESLint 9 flat config; docs spine (`AGENTS.md`, architecture, brand, workflow).

## Highest-priority weak routes (next visual passes)

1. **Framed-hero cluster** - `/`, `/home-search`, `/resources`, `/cma-form`, `/free-home-valuation`: shared system is in place; optional upgrades = Blob art instead of local PNGs where ready, and parallax only where it aids (home).
2. **Agent profiles** - `/profile-page`, `/roger-lee`, `/kristin-s-profile`: elevated with tokens/buttons; further polish = photography art direction, optional pull-quote or stats strip.
3. **Blog** - `/blog`, `/blog/[slug]`: typography improved; optional = index backdrop from `M2M_MEDIA.blogIndexBackdrop`, richer article typography (lists/blockquotes) when content supports it.
4. **Contact** - `/contact-us`: hierarchy fixed; optional = light hero still (`M2M_MEDIA.contactHeroStill`) if it stays minimal.
5. **Reviews** - `/reviews`: consider `GSAPAnimations` parity with other core pages; verify band tokens vs home.

## Public route audit (strength + pattern)

**Patterns:** `core` = `Header` + light `main` + global `Footer`. `campaign` = `Header` + `consultationCtaVariant="outlineCream"` + `bg-m2m-panel` + `DivorceLandingFooter`. `legal` = `PolicyPage` + footer.

| Route | Pattern | Strength | Notes |
|-------|---------|----------|--------|
| `/` | core | Good | Inset hero system; below-fold sections strong; buy page still reads slightly more "premium full-bleed." |
| `/buy`, `/sell` | core | Strong | Full-bleed heroes, `M2M_MEDIA`, consistent sections. |
| `/partners` | core | Strong | Blob hero/CTA stills, containers. |
| `/blog` | core | Good | Index rhythm; could add subtle backdrop. |
| `/blog/[slug]` | core | Good | Editorial hero; prose tuned to brand. |
| `/reviews` | core | Good | Missing optional GSAP parity; otherwise on system. |
| `/contact`, `/contact-us` | core | Good | `/contact` redirect; contact page trust row + semantics. |
| `/resources` | core | Good | Inset hero + form card; PNG hero until Blob. |
| `/our-team`, `/team` | core | Strong | Team hero + members; `/team` redirect. |
| `/profile-page`, `/roger-lee`, `/kristin-s-profile` | interior | Good | `AgentProfile` on tokens + buttons. |
| `/home-search` | core | Good | Inset hero; tool CTAs. |
| `/free-home-valuation`, `/home-valuation` | core | Good | Inset hero + sections; `/home-valuation` redirect. |
| `/cma-form` | core | Good | Inset hero + form card. |
| Legal (`/cookie-policy`, `/privacy-policy`, `/terms-and-conditions`, `/accessibility-statement`, `/copy-of-privacy-policy`) | legal | Good | Token-aligned policy shell. |
| `/get-license-in-va` | core | Good | Moseley VA license referral landing. |
| `/fha-loan`, `/improve-your-credit`, `/more-investments`, `/navigating-divorce` | campaign | Strong-Good | Layout primitives; per-page copy/forms vary. |
| `/downsizing-your-home`, `/va-loan-benefits`, `/facing-foreclosure` | campaign | Strong-Good | Same. |

Authoritative list: `app/**/page.tsx`. Grouped reference: [docs/diagrams/site-routes.md](./diagrams/site-routes.md).

## P0 / P1 punchlist (visual & system)

**P0**

- Keep inset hero + scrim **one system** - extend to any new tool pages; avoid reintroducing inline `rgba(5,13,6,...)` one-offs.
- Primary page **`<h1>`** must match the page topic (contact, blog index, etc.).
- Forms: shared field classes from [`lib/m2m-form.ts`](../lib/m2m-form.ts); submit hierarchy clear on light cards.

**P1**

- Replace remaining **local PNG heroes** with `M2M_MEDIA` when assets exist (resources, home-search, CMA funnel).
- **Blog** body: richer `prose` modifiers if posts gain structure beyond paragraphs.
- **Reviews** + **get-license-in-va**: section-by-section pass for dead zones and CTA bands as needed.
- **Strict TypeScript in CI** - when ready, narrow `typescript.ignoreBuildErrors` in `next.config.mjs`.

## Next 3 batches

1. **Batch A (shipped in this pass)** - Inset hero primitive + framed-route sweep; policy shell; profiles; blog/contact; footer `M2M_MEDIA`.
2. **Batch B** - Blob/tool hero imagery; blog index backdrop; contact optional hero still; CMA form radio/hint token cleanup sweep on other long forms.
3. **Batch C** - Campaign page CTA/form consistency audit; reviews GSAP + spacing parity; legal long-form readability (TOC anchors if needed); E2E smoke (e.g. Playwright) when prioritized.

## Shared-system follow-ups

- `M2mInsetHeroFrame` / `M2mInsetHeroScrim` - default choice for "premium card" heroes; full-bleed (`BuyHero`) remains for key marketing pages.
- `M2mProse` - use for short policy callouts or pull quotes where `prose` is heavy.
- **Button hierarchy** - primary `m2mPanel` / `m2mGold` on dark; forms on light already use panel/deep; audit campaign landings for outliers.

## Strong vs lagging (snapshot)

- **Strong:** `/buy`, `/sell`, `/our-team`, `/partners`, most **campaign** landings, blog post hero treatment.
- **Good (steady improvement):** home, tool pages (search, resources, valuation, CMA), blog index, contact, profiles, legal.
- **Lag if unattended:** any new route that skips `M2mContainer` / inset or full-bleed pattern; long forms that revert to raw gray borders.

## Next (website-only)

1. **Content / parity QA** - Walk primary routes; confirm CTAs match [`lib/m2m-site.ts`](../lib/m2m-site.ts) (Calendly, RealScout, Google reviews, partners).
2. **Tests** - Replace placeholder `npm test` with smoke E2E when prioritized.
3. **Optional** - Strict Next typecheck in CI when the codebase is ready.

## Source of truth

| Area | Location |
|------|----------|
| Agent + doc map | `AGENTS.md`, `docs/DOCUMENTATION_INDEX.md` |
| Architecture | `docs/ARCHITECTURE_SOURCE_OF_TRUTH.md` |
| Brand / tokens | `docs/BRAND_CONSTITUTION.md`, `app/globals.css` |
| External URLs, phone, mailto | `lib/m2m-site.ts` |
| Blob image URLs | `lib/m2m-media.ts` |
| App routes | `app/` |
| Shared UI | `components/ui/` |
| Layout / inset hero | `components/m2m-layout.tsx` |
| GHL env contract | `.env.example` |
| GHL live hookup + QA order | [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) |
| GHL done vs blocked (skim) | [M2M_GHL_REMAINING_GAPS.md](./M2M_GHL_REMAINING_GAPS.md) |

CRM integration source of truth: [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md). Account-side tasks: [M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md). Website visual work stays here; CRM / automation execution details live in those documents.
