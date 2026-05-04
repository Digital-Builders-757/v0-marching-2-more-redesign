# Marketing image asset map

**Purpose:** Track client photography under `public/images/` so swaps stay intentional.  
**Unpackaged originals:** verbatim copies preserved in [`public/images/_original-client-delivery/`](../public/images/_original-client-delivery/).

**Maintenance:** When you add, rename, or retire a file under `public/images/`, update **this table** and the route’s `components/**/content.ts` (or [`lib/m2m-media.ts`](../lib/m2m-media.ts) for Blob URLs not yet replaced by local art).

## CRM spec vs shipped website tagging

[`M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md`](M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md) describes GoHighLevel **funnel-named pipelines** and `m2m-funnel-*` tags. The live site maps **`lead_type` buyer/seller** to **two** env pipelines (`GHL_BUYER_*`, `GHL_SELLER_*`); campaign seller funnels share the **seller** pipeline and rely on **`GHL_PATH_TAGS`** (exact paths) for funnel tags unless code is extended. Route-level payloads: **[`M2M_LEAD_CAPTURE_MATRIX.md`](M2M_LEAD_CAPTURE_MATRIX.md)**.

Success UI on `/facing-foreclosure`, `/navigating-divorce`, `/downsizing-your-home`, and other wired forms remains **component-gated on the API response**, and now requires **full CRM pipeline completion** before thank-you states render (no partial-success success states).

## Where to drop the next batch

1. Paste files into **`public/images/_original-client-delivery/`** under a dated subfolder **or** recreate `NewImages/` temporarily with the client drop.
2. Rename to **`m2m-{funnel}-{role}-{short-topic}.png`** (ASCII, hyphens).
3. Move into the appropriate subdirectory below.
4. Update **this doc** + the relevant `components/**/content.ts` or **`lib/m2m-media.ts`** path.

---

## How to use imagery (roles)

Keep **one primary visual idea per section** above the fold; add smaller or secondary images only when they clarify a beat (education, carousel, collage slot).

| Role | When to use | Examples in this repo |
|------|----------------|-----------------------|
| **Hero** | Full-bleed or dominant column; sets emotional + contextual tone for the page | `m2m-*-hero-*`, homepage hero, FHA hero (`site/partners-consult`) |
| **Support-only** | Thumbnails, strip collages, small cards — never competing with headline + main CTA | Credit hero trio, foreclosure guide carousel, downsizing accordion vignettes |
| **Cross-page reuse** | Same file on multiple routes when the story matches (consultation / planning) — document every route here | `m2m-partners-consult-evening-home` (partners band, divorce panel, FHA, credit takeaways backdrop) |

**Clutter avoidance:** Prefer a single atmospheric backdrop + typography over stacking multiple large photos in one viewport. Carousel slots are intentional multi-image UX; editorial pages should still lead with **one** strong image per scroll “chapter.”

Duplicate bytes (same photo in two places) are OK where called out below; intentional reuse keeps tone consistent across buyer/seller flows.

---

## Current files

| Filename | Path | Primary funnel | Where used | Role |
|----------|------|----------------|-----------|------|
| `m2m-home-hero-military-keys-porch.png` | `public/images/site/` | Site-wide | [`components/hero.tsx`](../components/hero.tsx) | Homepage hero backdrop (`next/image` + parallax wrapper) |
| `m2m-home-sell-military-consultation-kitchen.png` | `public/images/site/` | Site-wide | [`components/sell-hero.tsx`](../components/sell-hero.tsx) | Sell band backdrop (`next/image`, lazy) |
| `m2m-partners-consult-evening-home.png` | `public/images/site/` | Site-wide | [`components/partners.tsx`](../components/partners.tsx), [`components/navigating-divorce/content.ts`](../components/navigating-divorce/content.ts) (`sellDuringDivorce` collage), [`components/improve-your-credit/content.ts`](../components/improve-your-credit/content.ts) (`TAKEAWAYS_BACKGROUND`), **`/fha-loan`** [`fha-loan/content.ts`](../components/fha-loan/content.ts) hero | Homepage partner circle; inclusive consult scene reused on divorce FHA-adjacent panel, FHA hero, credit takeaways backdrop |
| `m2m-foreclosure-hero-woman-docs-kitchen.png` | `public/images/facing-foreclosure/` | Foreclosure | [`components/facing-foreclosure/pre-foreclosure-hero.tsx`](../components/facing-foreclosure/pre-foreclosure-hero.tsx) (`content.ts`) | Full-bleed hero |
| `m2m-foreclosure-lead-renovation-planning.png` | `public/images/facing-foreclosure/` | Foreclosure | [`components/facing-foreclosure/pre-foreclosure-lead.tsx`](../components/facing-foreclosure/pre-foreclosure-lead.tsx) (`content.ts`) | Form pairing column |
| `m2m-foreclosure-guide-organize-finances.png` | `public/images/facing-foreclosure/` | Foreclosure | [`components/facing-foreclosure/pre-foreclosure-guide-carousel.tsx`](../components/facing-foreclosure/pre-foreclosure-guide-carousel.tsx) (`content.ts`) | Guide carousel slide 1 |
| `m2m-foreclosure-guide-couple-planning-keys.png` | `public/images/facing-foreclosure/` | Foreclosure | Same | Guide carousel slide 2 |
| `m2m-foreclosure-guide-timeline-professional.png` | `public/images/facing-foreclosure/` | Foreclosure | Same | Guide carousel slide 3 |
| `m2m-foreclosure-guide-agent-tour-modern-home.png` | `public/images/facing-foreclosure/` | Foreclosure | Same | Guide carousel slide 4 |
| `m2m-downsizing-hero-family-photo-album-transition.png` | `public/images/downsizing/` | Downsizing | [`components/downsizing-your-home/downsizing-hero.tsx`](../components/downsizing-your-home/downsizing-hero.tsx) (`content.ts`) | Hero backdrop |
| `m2m-downsizing-signs-family-packing-kitchen.png` | `public/images/downsizing/` | Downsizing | [`components/downsizing-your-home/downsizing-problems.tsx`](../components/downsizing-your-home/downsizing-problems.tsx) | Editorial banner above icons |
| `m2m-downsizing-services-consultation-tablet-boxes.png` | `public/images/downsizing/` | Downsizing | [`components/downsizing-your-home/downsizing-services.tsx`](../components/downsizing-your-home/downsizing-services.tsx) | “How We Help” accordion intro |
| `m2m-downsizing-guide-callout-moving-optimism.png` | `public/images/downsizing/` | Downsizing | `downsizing-services.tsx` | Roadmap callout vignette |
| `m2m-divorce-hero-mother-child-agent-consultation.png` | `public/images/divorce/` | Divorce | [`components/navigating-divorce/`](../components/navigating-divorce/) landing hero |
| ~~`m2m-divorce-collage-family-front-lawn.png`~~ | — | — | *(retired)* | Replaced — panel 1 now uses **`site`** consult image for broader audience fit |
| `m2m-divorce-collage-multigen-porch-steps.png` | `public/images/divorce/` | Divorce | Collage slot `family` |
| `m2m-divorce-collage-photo-album-dining.png` | `public/images/divorce/` | Divorce | Collage slot `interior` (memories-at-home motif) |
| `m2m-divorce-collage-consultant-documents-table.png` | `public/images/divorce/` | Divorce | Collage slot `legal` |
| `m2m-divorce-valuation-renovation-planning.png` | `public/images/divorce/` | Divorce | [`VALUATION_BACKGROUND`](../components/navigating-divorce/content.ts) full-bleed section |
| `m2m-divorce-aerial-evening-consult-home.png` | `public/images/divorce/` | Divorce | [`AERIAL_BACKGROUND`](../components/navigating-divorce/content.ts) |
| `m2m-credit-family-planning-goals.png` | `public/images/credit/` | Crushing credit (`/improve-your-credit`) | [`credit-hero.tsx`](../components/improve-your-credit/credit-hero.tsx), homework collage via [`content.ts`](../components/improve-your-credit/content.ts) | Hero pillar + collage support |
| `m2m-credit-couple-plan-together.png` | `public/images/credit/` | Credit | Hero + collage + closing band | Hero pillar + collage + narrative band |
| `m2m-credit-professional-consultation.png` | `public/images/credit/` | Credit | Hero + education homework strip | Hero pillar + education strip |
| `m2m-credit-family-collaborative-home.png` | `public/images/credit/` | Credit | Tall education panel *(same raster as downsizing packing photo)* | Support column |
| `va-hero-military-homecoming.jpg` | `public/images/va-loan/` | VA benefits (`/va-loan-benefits`) | [`va-loan-benefits/content.ts`](../components/va-loan-benefits/content.ts) (`HERO_BACKGROUND`), [`va-hero.tsx`](../components/va-loan-benefits/va-hero.tsx) | Hero backdrop |
| `va-cta-patriotic-home.jpg` | `public/images/va-loan/` | VA benefits | [`content.ts`](../components/va-loan-benefits/content.ts) (`CTA_BANNER_BACKGROUND`), [`va-cta-banner.tsx`](../components/va-loan-benefits/va-cta-banner.tsx) | CTA band / support |
| `fha-quiz-guidance.jpg` | `public/images/fha-loan/` | FHA (`/fha-loan`) | [`fha-loan/content.ts`](../components/fha-loan/content.ts) (`FLAG_QUOTE_BACKGROUND`), [`fha-quote-form.tsx`](../components/fha-loan/fha-quote-form.tsx) | Quote form backdrop |
| `fha-hero-first-time-buyer.jpg` | `public/images/fha-loan/` | FHA | *(present on disk; not referenced in `content.ts` — optional future swap)* | — |
| `investor-*.jpg` (6 files) | `public/images/investments/` | More investments (`/more-investments`) | [`more-investments/content.ts`](../components/more-investments/content.ts) (`HERO_SLIDES`), [`investments-hero.tsx`](../components/more-investments/investments-hero.tsx), [`investments-hero-slides.tsx`](../components/more-investments/investments-hero-slides.tsx) | Hero carousel |

**Duplicates on purpose:** Downsizing hero and divorce collage (`photo-album-dining`) share one duplicate raster (`01_52_57` lineage); credit **`m2m-credit-family-collaborative-home`** repeats the downsizing packing image for thematic alignment across buyer education flows.

**Responsive delivery:** Local photos under `public/images/` are referenced with `next/image` and **Next.js image optimization** (see `next.config.mjs` `images.remotePatterns` for allowed remote hosts). Prefer explicit `sizes` on `fill` images so mobile does not download desktop widths.

---

## Quiz embed UX

[`M2mLeadQuizSection`](../components/m2m-lead-quiz-section.tsx) shows a tall iframe when `embedSrc` resolves to a hosted quiz (`https://…` or `/quizzes/…`). When **`ctaHref`** is also set to the same live quiz URL (or `/quizzes/…`), users get an **explicit button under the embed** (“Open quiz…”) — helpful if the iframe is blocked by cookies or CSP. **`GOHIGHLEVEL_QUIZ_*`** placeholders intentionally skip both until marketing supplies real URLs. Quiz and analyzer iframes use **`loading="lazy"`** where supported so embeds do not compete with the first paint.

---

## Related docs

| Doc | Topic |
|-----|--------|
| [`M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md`](M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md) | CRM naming, QA checklist (operator) |
| [`M2M_LEAD_CAPTURE_MATRIX.md`](M2M_LEAD_CAPTURE_MATRIX.md) | Website → `/api/submit-lead` → GHL behavior |
| [`public/images/README.md`](../public/images/README.md) | Folder semantics |
