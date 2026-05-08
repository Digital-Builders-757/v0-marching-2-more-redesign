# Marketing image asset map

**Purpose:** Track **`public/images/`** files **and** document where **[`lib/m2m-media.ts`](../lib/m2m-media.ts)** (Vercel Blob) URLs appear so swaps stay intentional.  
**Unpackaged originals:** verbatim copies preserved in [`public/images/_original-client-delivery/`](../public/images/_original-client-delivery/).

**Maintenance:** When you add, rename, or retire a file under `public/images/` **or** change a Blob key / consumer in code, update **this doc** and the route’s `components/**/content.ts` or **`lib/m2m-media.ts`** as appropriate.

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
| **Cross-page reuse** | Same file on multiple routes when the story matches (consultation / planning) — document every route here | `m2m-partners-consult-evening-home` (partners band, FHA hero, credit takeaways backdrop) |

**Clutter avoidance:** Prefer a single atmospheric backdrop + typography over stacking multiple large photos in one viewport. Carousel slots are intentional multi-image UX; editorial pages should still lead with **one** strong image per scroll “chapter.”

Duplicate bytes (same photo in two places) are OK where called out below; intentional reuse keeps tone consistent across buyer/seller flows.

---

## Current files

| Filename | Path | Primary funnel | Where used | Role |
|----------|------|----------------|-----------|------|
| `m2m-home-hero-military-keys-porch.png` | `public/images/site/` | Site-wide | [`components/hero.tsx`](../components/hero.tsx) | Homepage hero backdrop (`next/image` + parallax wrapper) |
| `m2m-home-sell-military-consultation-kitchen.png` | `public/images/site/` | Site-wide | [`components/sell-hero.tsx`](../components/sell-hero.tsx) | Sell band backdrop (`next/image`, lazy) |
| `m2m-partners-consult-evening-home.png` | `public/images/site/` | Site-wide | [`components/partners.tsx`](../components/partners.tsx), [`components/improve-your-credit/content.ts`](../components/improve-your-credit/content.ts) (`TAKEAWAYS_BACKGROUND`), **`/fha-loan`** [`fha-loan/content.ts`](../components/fha-loan/content.ts) hero | Homepage partner circle; consult scene reused on FHA hero, credit takeaways backdrop |
| `m2m-foreclosure-hero-woman-docs-kitchen.png` | `public/images/facing-foreclosure/` | Foreclosure | [`components/facing-foreclosure/pre-foreclosure-hero.tsx`](../components/facing-foreclosure/pre-foreclosure-hero.tsx) (`content.ts`) | Full-bleed hero |
| `m2m-foreclosure-lead-renovation-planning.png` | `public/images/facing-foreclosure/` | Foreclosure | [`pre-foreclosure-lead.tsx`](../components/facing-foreclosure/pre-foreclosure-lead.tsx) (`content.ts`) | Form pairing column |
| `m2m-foreclosure-guide-organize-finances.png` | `public/images/facing-foreclosure/` | Foreclosure | [`components/facing-foreclosure/pre-foreclosure-guide-carousel.tsx`](../components/facing-foreclosure/pre-foreclosure-guide-carousel.tsx) (`content.ts`) | Guide carousel slide 1 |
| `m2m-foreclosure-guide-couple-planning-keys.png` | `public/images/facing-foreclosure/` | Foreclosure | Same | Guide carousel slide 2 |
| `m2m-foreclosure-guide-timeline-professional.png` | `public/images/facing-foreclosure/` | Foreclosure | Same | Guide carousel slide 3 |
| `m2m-foreclosure-guide-agent-tour-modern-home.png` | `public/images/facing-foreclosure/` | Foreclosure | Same | Guide carousel slide 4 |
| `m2m-downsizing-hero-family-photo-album-transition.png` | `public/images/downsizing/` | Downsizing | [`components/downsizing-your-home/downsizing-hero.tsx`](../components/downsizing-your-home/downsizing-hero.tsx) (`content.ts`) | Hero backdrop |
| `m2m-downsizing-signs-family-packing-kitchen.png` | `public/images/downsizing/` | Downsizing | [`components/downsizing-your-home/downsizing-problems.tsx`](../components/downsizing-your-home/downsizing-problems.tsx) | Editorial banner above icons |
| `m2m-downsizing-services-consultation-tablet-boxes.png` | `public/images/downsizing/` | Downsizing | [`components/downsizing-your-home/downsizing-services.tsx`](../components/downsizing-your-home/downsizing-services.tsx) | “How We Help” accordion intro |
| `m2m-downsizing-guide-callout-moving-optimism.png` | `public/images/downsizing/` | Downsizing | `downsizing-services.tsx` | Roadmap callout vignette |
| `divorce-hero-hopeful-transition.jpg` | `public/images/divorce/` | Divorce | [`DIVORCE_HERO_BACKGROUND`](../components/navigating-divorce/content.ts), [`divorce-hero.tsx`](../components/navigating-divorce/divorce-hero.tsx) | Hero backdrop |
| `divorce-couple-contemplative.jpg` | `public/images/divorce/` | Divorce | Collage slot `sellDuringDivorce` in [`content.ts`](../components/navigating-divorce/content.ts) | Collage — thoughtful moment |
| `divorce-new-home-keys.jpg` | `public/images/divorce/` | Divorce | Collage slot `family`; [`AERIAL_BACKGROUND`](../components/navigating-divorce/content.ts) (`divorce-aerial-lead.tsx` full-bleed) | Collage — keys / next chapter; aerial lead section |
| `divorce-modern-interior.jpg` | `public/images/divorce/` | Divorce | Collage slot `interior` in [`content.ts`](../components/navigating-divorce/content.ts) | Collage — home context |
| `m2m-divorce-collage-consultant-documents-table.png` | `public/images/divorce/` | Divorce | Collage slot `legal` | Collage — documents / counsel |
| `m2m-divorce-hero-mother-child-agent-consultation.png` | `public/images/divorce/` | Divorce | *(on disk; superseded for hero by `divorce-hero-hopeful-transition.jpg`)* | Archive / swap-in |
| ~~`m2m-divorce-collage-family-front-lawn.png`~~ | — | — | *(retired)* | — |
| `m2m-divorce-collage-multigen-porch-steps.png` | `public/images/divorce/` | Divorce | *(on disk; optional — not used in current collage)* | — |
| `m2m-divorce-collage-photo-album-dining.png` | `public/images/divorce/` | Divorce | *(on disk; optional — not used in current collage; same lineage as downsizing hero asset)* | — |
| `m2m-divorce-valuation-renovation-planning.png` | `public/images/divorce/` | Divorce | [`VALUATION_BACKGROUND`](../components/navigating-divorce/content.ts) full-bleed section |
| ~~`m2m-divorce-aerial-evening-consult-home.png`~~ | — | — | *(retired — removed from repo; hand artifacts on consult plate)* | — |
| `m2m-credit-family-planning-goals.png` | `public/images/credit/` | Crushing credit (`/improve-your-credit`) | [`credit-hero.tsx`](../components/improve-your-credit/credit-hero.tsx), homework collage via [`content.ts`](../components/improve-your-credit/content.ts) | Hero pillar + collage support |
| `m2m-credit-couple-plan-together.png` | `public/images/credit/` | Credit | Hero + collage + closing band | Hero pillar + collage + narrative band |
| `m2m-credit-professional-consultation.png` | `public/images/credit/` | Credit | Hero + education homework strip | Hero pillar + education strip |
| `m2m-credit-family-collaborative-home.png` | `public/images/credit/` | Credit | Tall education panel *(same raster as downsizing packing photo)* | Support column |
| `va-hero-military-homecoming.jpg` | `public/images/va-loan/` | VA benefits (`/va-loan-benefits`) | [`va-loan-benefits/content.ts`](../components/va-loan-benefits/content.ts) (`HERO_BACKGROUND`), [`va-hero.tsx`](../components/va-loan-benefits/va-hero.tsx) | Hero backdrop |
| `va-cta-patriotic-home.jpg` | `public/images/va-loan/` | VA benefits | [`content.ts`](../components/va-loan-benefits/content.ts) (`CTA_BANNER_BACKGROUND`), [`va-cta-banner.tsx`](../components/va-loan-benefits/va-cta-banner.tsx) | CTA band / support |
| `fha-quiz-guidance.jpg` | `public/images/fha-loan/` | FHA (`/fha-loan`) | [`fha-loan/content.ts`](../components/fha-loan/content.ts) (`FLAG_QUOTE_BACKGROUND`), [`fha-quote-form.tsx`](../components/fha-loan/fha-quote-form.tsx) | Quote form backdrop |
| `fha-hero-first-time-buyer.jpg` | `public/images/fha-loan/` | FHA | *(present on disk; optional future `/fha-loan` hero swap)* | — |
| `ChatGPT Image May 3, 2026, …AM.png` (subset; URL-encoded in code) | `public/images/_original-client-delivery/` | More investments (`/more-investments`) | [`more-investments/content.ts`](../components/more-investments/content.ts) (`HERO_SLIDES`) — **seven files**, chosen to match intro / fix-flip / multifamily / consultation beats | Hero carousel |
| `investor-short-term-rental.jpg` | `public/images/investments/` | More investments | Same (`HERO_SLIDES` short-term top) — **on-topic STR** where delivery batch has no hospitality shot | Hero carousel |
| Other `investor-*.jpg` (on disk) | `public/images/investments/` | — | Optional future carousel swaps | Reserve |

**Duplicates on purpose:** Downsizing hero raster and retired divorce collage slot (`m2m-divorce-collage-photo-album-dining`, optional on disk) share lineage; credit **`m2m-credit-family-collaborative-home`** repeats the downsizing packing image for thematic alignment across buyer education flows.

**Responsive delivery:** Local photos under `public/images/` are referenced with `next/image` and **Next.js image optimization** (see `next.config.mjs` `images.remotePatterns` for allowed remote hosts). Prefer explicit `sizes` on `fill` images so mobile does not download desktop widths.

## Static lead magnets (`public/downloads/`)

| Filename | Constants | Where used |
|----------|-----------|------------|
| `m2m-downsizing-guide.pdf` | `M2M_DOWNSIZING_GUIDE_PDF_*`, `getM2mDownsizingGuidePdfHref()` in [`lib/m2m-site.ts`](../lib/m2m-site.ts) | [`downsizing-guide-form.tsx`](../components/downsizing-your-home/downsizing-guide-form.tsx) success state |
| `m2m-divorce-sell-home-guide.pdf` | `M2M_DIVORCE_GUIDE_PDF_*`, `getM2mDivorceGuidePdfHref()` in [`lib/m2m-site.ts`](../lib/m2m-site.ts) | [`divorce-aerial-lead.tsx`](../components/navigating-divorce/divorce-aerial-lead.tsx) success state |

Optional env overrides: `NEXT_PUBLIC_M2M_DOWNSIZING_GUIDE_PDF_URL`, `NEXT_PUBLIC_M2M_DIVORCE_GUIDE_PDF_URL` (full `https://` or site path).

---

## Vercel Blob — team & agent portraits (`lib/m2m-media.ts`)

Semantic keys below live on the **`CORE`** object (spread into **`M2M_MEDIA`**). URLs point at Vercel Blob — tune **`object-position`** / zoom in consuming components when replacing a file.

| Key | Where used | Role |
|-----|------------|------|
| **`teamPhotoWide`** | [`components/team/team-hero.tsx`](../components/team/team-hero.tsx) (**`/our-team`** full-bleed hero); [`components/team/team-members.tsx`](../components/team/team-members.tsx) — **Jalessa Hendricks** card only *(component applies zoom + `object-position` to crop one figure from the wide plate; add **`headshotJalessa`** in **`lib/m2m-media.ts`** when a dedicated portrait exists)*; campaign reuse via **`M2M_MEDIA`**: **`vaLoanCtaBand`**, **`creditHeroCenter`** ([`lib/m2m-media.ts`](../lib/m2m-media.ts)); blog cover for **`pcs-relocation-checklist`** ([`lib/blog/posts.ts`](../lib/blog/posts.ts)) | Wide group / office plate |
| **`headshotDonavan`** | [`components/team/team-members.tsx`](../components/team/team-members.tsx); [`app/profile-page/page.tsx`](../app/profile-page/page.tsx); [`components/footer.tsx`](../components/footer.tsx) agent strip; [`lib/m2m-nav.ts`](../lib/m2m-nav.ts) **`M2M_HEADER_AGENT_LINKS`** | Portrait |
| **`headshotRoger`** | [`components/team/team-members.tsx`](../components/team/team-members.tsx); [`app/roger-lee/page.tsx`](../app/roger-lee/page.tsx); [`components/footer.tsx`](../components/footer.tsx); **`M2M_HEADER_AGENT_LINKS`** | Portrait |
| **`headshotKristin`** | [`components/team/team-members.tsx`](../components/team/team-members.tsx); [`app/kristin-s-profile/page.tsx`](../app/kristin-s-profile/page.tsx); **`M2M_HEADER_AGENT_LINKS`** *(header quick thumbnails — **not** in the footer’s two-thumb strip)* | Portrait |

**Shared framing (team + profiles):** Member cards and **[`AgentProfile`](../components/team/agent-profile.tsx)** use portrait **`aspect-[4/5]`**, **`rounded-sm`**, and a light **`ring-1 ring-m2m-deep/[0.08]`** so **`/our-team`** and **`/profile-page`** · **`/roger-lee`** · **`/kristin-s-profile`** stay visually coherent. Per-agent **`object-position`** is set beside each **`next/image`** in those components / pages.

---

## Quiz embed UX

[`M2mLeadQuizSection`](../components/m2m-lead-quiz-section.tsx) shows a tall iframe when `embedSrc` resolves to a hosted quiz (`https://…` or `/quizzes/…`). When **`ctaHref`** is also set to the same live quiz URL (or `/quizzes/…`), users get an **explicit button under the embed** (“Open quiz…”) — helpful if the iframe is blocked by cookies or CSP. **`GOHIGHLEVEL_QUIZ_*`** placeholders intentionally skip both until marketing supplies real URLs. Quiz and analyzer iframes use **`loading="lazy"`** where supported so embeds do not compete with the first paint.

**Static quiz HTML (local `/public/quizzes/`):** `downsizing-your-home/quiz.html`, `navigating-divorce/index.html`; submissions POST to **`/api/submit-lead`** inside each quiz script where wired. **`/va-loan-benefits`** uses **React** **`VaLoanAssessmentQuiz`** (not a static iframe); **`GOHIGHLEVEL_QUIZ_VA_LOAN_URL`** is reserved for a future hosted-only revert.

---

## Related docs

| Doc | Topic |
|-----|--------|
| [`M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md`](M2M_GHL_ADMIN_SETUP_SPEC_CLIENT.md) | CRM naming, QA checklist (operator) |
| [`M2M_LEAD_CAPTURE_MATRIX.md`](M2M_LEAD_CAPTURE_MATRIX.md) | Website → `/api/submit-lead` → GHL behavior |
| [`public/images/README.md`](../public/images/README.md) | Folder semantics |
