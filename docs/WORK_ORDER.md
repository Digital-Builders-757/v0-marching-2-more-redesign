# Work order (Marching 2 More - site redesign)

**Execution spine for the public website.** Vision and rules: [M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md](./M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md). Current cross-site visual system pass: [M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md](./M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md). GoHighLevel integration is now an **active parallel track**; use [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md) as the CRM / automation source of truth.

## Done recently

- **GoHighLevel foundation (Phase 1–2 website)** — [`lib/ghl/`](../lib/ghl/) (config, validate, client, submit orchestration), [`app/api/submit-lead/route.ts`](../app/api/submit-lead/route.ts), client [`lib/m2m-lead-submit.ts`](../lib/m2m-lead-submit.ts) + [`lib/m2m-utm.ts`](../lib/m2m-utm.ts), [`getPrimaryConsultationBookUrl()`](../lib/m2m-site.ts) (GHL-first booking). Seller/buyer forms wired on CMA, contact, foreclosure, free valuation, sell, downsizing fallback, buy, home-search. Account-side tasks: [`M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md`](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md), env template [`.env.example`](../.env.example).
- **Inset hero system** - `M2mInsetHeroFrame` + `M2mInsetHeroScrim` in [`components/m2m-layout.tsx`](../components/m2m-layout.tsx): shared 95% rounded card, ring/shadow, and tokenized scrims (`home` gradient + `60`-`80` opacity). Adopted on home [`Hero`](../components/hero.tsx), [`/home-search`](../app/home-search/page.tsx), [`/resources`](../app/resources/page.tsx), [`/cma-form`](../app/cma-form/page.tsx), [`/free-home-valuation`](../app/free-home-valuation/page.tsx) hero bands.
- **Policy + profiles + blog + contact** - [`PolicyPage`](../components/policy/policy-page.tsx): `m2m-deep` / `m2m-muted`, display title, `M2mSection` rhythm. [`AgentProfile`](../components/team/agent-profile.tsx): M2M tokens, shadcn `Button` CTAs. [`/blog`](../app/blog/page.tsx) and [`/blog/[slug]`](../app/blog/[slug]/page.tsx): on-brand prose/meta. [`/contact-us`](../app/contact-us/page.tsx): correct `h1` / eyebrow, trust row (phone + Calendly).
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

CRM integration source of truth: [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md). Website visual work stays here; CRM / automation execution details live in that document.
