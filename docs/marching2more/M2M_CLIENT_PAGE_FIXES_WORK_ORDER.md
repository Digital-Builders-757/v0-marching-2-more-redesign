# M2M client page fixes — work order (batch)

**Status:** executed in repo (see git history).  
**Spec reference:** [M2M_SITE_REBUILD_SPEC.md](./M2M_SITE_REBUILD_SPEC.md), [WORK_ORDER.md](../WORK_ORDER.md).

## Decisions (ambiguous items)

| Topic | Decision |
|-------|----------|
| **Work With Us** | Primary CTA points to `/contact-us?intent=buyer` (short lead path) instead of `/home-search`. Footer quick link aligned. `/home-search` remains available from the hamburger menu for full search tools. |
| **Book a consultation (site-wide CTA)** | `M2mConsultationCta` default `href` is `/contact-us?intent=consultation` with expectation copy on the contact page. **Scheduling:** secondary link uses `getPrimaryConsultationBookUrl()` (“Schedule a time online”) so GHL/Calendly remains reachable without conflicting the “single booking helper” env story. |
| **“Within an hour”** | Copy uses **business-hours framing** (“we typically reach out within about an hour during business hours”) to avoid implying 24/7 staffing. |
| **Facing foreclosure — guide photos** | Carousel uses **brand Blob stills as stand-ins** for printed guide spreads until Marketing supplies PDF/export shots. Quotes paraphrase the on-page education columns. |
| **Investor tools** | Surface lives on **`/more-investments#investor-tools`** (no new route). Quiz embed URL: `GOHIGHLEVEL_QUIZ_INVESTOR_URL`. BRRRR: `GOHIGHLEVEL_BRRRR_ANALYZER_URL` or placeholder card until set. Extra tool cards labeled “More tools — details coming soon.” |
| **VA CTA** | Banner button label matches form: **“Get on the List”** (hero background swapped for distinct art). |

## Route ownership (unchanged unless noted)

| Request | Owning route / component |
|---------|---------------------------|
| VA loan background + CTA | `app/va-loan-benefits/page.tsx`, `components/va-loan-benefits/*` |
| Facing foreclosure carousel | `app/facing-foreclosure/page.tsx`, `components/facing-foreclosure/pre-foreclosure-guide-carousel.tsx` |
| Credit imagery + button spacing | `components/improve-your-credit/*` |
| Work With Us / consultation | `components/hero.tsx`, `lib/m2m-nav.ts`, `components/m2m-cta.tsx`, `app/contact-us/page.tsx` |
| Investor tools | `app/more-investments/page.tsx`, `components/more-investments/investments-tools.tsx` |
| FHA inaccurate sections | `components/fha-loan/content.ts`, `components/fha-loan/fha-features.tsx` |

---

## Campaign imagery — semantic `M2M_MEDIA` map (handoff for next agent)

**Source of truth:** [`lib/m2m-media.ts`](../../lib/m2m-media.ts) — `CORE` base URLs plus named keys (`divorce*`, `vaLoan*`, `fha*`, `credit*`, `investorCarousel*`). Campaign route `content.ts` files point at these keys so **only `m2m-media.ts` needs URL edits** when Blob assets are replaced. Life-event funnel art also lives under `public/images/**/m2m-*.png` ([`docs/M2M_ASSET_MAP.md`](../../docs/M2M_ASSET_MAP.md)).

| Theme | Keys (replace URL in one place) | Interim intent |
|-------|----------------------------------|----------------|
| Divorce | `divorceHeroBackdrop`, `divorceCollage*`, `divorceValuationBackground`, `divorceAerialBackground` | Human top hero photo; four distinct collage panels; valuation + aerial full-bleed Blobs (no local PNG) |
| VA | `vaLoanHero`, `vaLoanCtaBand` | Household stability + team trust |
| FHA | `fhaHero`, `fhaQuoteBackdrop` | Guidance / approachable; quote form no longer uses Unsplash |
| Credit | `creditHeroLeft/Center/Right`, `creditEducationLarge`, `creditHomeworkA–C`, `creditTakeawaysBanner`, `creditClosingBanner` | Momentum left, trust center, goal right |
| Investor carousel | `investorCarouselIntroCenter`, `investorCarouselFixFlip*`, `investorCarouselMultifamily*`, `investorCarouselShortTerm*` | Distinct slide assets; swap per key when lifestyle shots exist |

**Still needed from client/marketing:** Route-specific photography where JSDoc says `TODO(asset):` — each key can temporarily alias an existing CORE URL until the final Blob upload.
