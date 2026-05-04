# Website Launch Hardening Report

**Prepared for:** Marching 2 More — pre-domain-connection readiness  
**Review type:** Repository-level launch hardening (QA, integrations, configuration patterns, and identified risks)  
**Date:** May 1, 2026  
**Report refreshed:** 2026-05-01 — aligns with shipped repo improvements (static quiz API verification, foreclosure quiz React fallback, production TypeScript enforcement, footer image `alt`). See [WORK_ORDER.md](WORK_ORDER.md) “Launch engineering pass”.

---

## 1. Executive Summary

This report summarizes a **readiness review** of the Marching 2 More marketing website codebase: primary routes, lead capture flows, GoHighLevel (GHL) integration behavior as implemented, quizzes and CTAs, environment-variable patterns, third-party scripts, and common launch-risk areas visible from the repository.

**Launch status label: Conditionally Ready for Domain Connection**

The site’s **lead architecture is coherent and intentional**: the browser submits JSON only to **`POST /api/submit-lead`**, and GoHighLevel credentials remain **server-side** in configuration (not embedded in client bundles). Form components generally include **loading/disabled** behavior during submission, and the API validates input with **Zod** before calling GHL.

**Main caveats before connecting a production domain** (not necessarily “blockers” for every client, but they should be resolved or explicitly accepted):

1. **Production hosting configuration** must supply complete **`GHL_*`** environment variables for live CRM behavior (or use **`GHL_DRY_RUN`** only for staged testing). **Requires manual verification** in the live host (e.g. Vercel).
2. Several **public marketing URLs** in [`lib/m2m-site.ts`](../lib/m2m-site.ts) still use **`REPLACE_WITH_*` placeholders** for GoHighLevel booking and some quiz/embed surfaces (notably **credit**, **investor**, and **foreclosure iframe** until `GOHIGHLEVEL_QUIZ_FORECLOSURE_URL` is live). The site **falls back sensibly** (Calendly booking when GHL booking is unset; **local forms** for credit and **foreclosure quiz section**; downsizing/divorce **static quizzes** validate the API response before showing success).
3. **Production build** runs TypeScript as part of **`next build`** ([`next.config.mjs`](../next.config.mjs) does **not** set `ignoreBuildErrors`). Keep **`npm run ci`** green before merge; if `tsc` errors reference **stale `.next/types`**, delete `.next` and rerun (see [COMMON_ERRORS_QUICK_REFERENCE.md](troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md)).

**Recommended next step:** Complete a short **production smoke test** (forms → GHL contact, tags, pipeline/opportunity if enabled) on the actual deployment environment, confirm or update **`M2M_SITE_ORIGIN`** / metadata for the final hostname, then connect the domain—or connect the domain only to a staging project first if you prefer zero-drama cutover.

**This is not** a formal penetration test or enterprise cybersecurity audit.

---

## 2. Scope of Review

This review covered, at the **repository level**:

- Website **routes and pages** under the Next.js App Router (`app/`)
- **Forms** and shared styling/helpers for lead surfaces
- **Quizzes** (React-wrapped sections and static assets under `public/quizzes/`)
- **GoHighLevel routing logic** (`lib/ghl/*`, `POST /api/submit-lead`)
- **CTA and primary button targets** (header, footer, hero, key landings)
- **Third-party scripts and analytics** visible in application code
- **Environment and configuration patterns** (variable **names** only in this document)
- **Known launch risks** visible from code and project configuration

Out of scope: live server logs, live GHL account verification, legal review of claims, formal security assessment, and performance testing under production load.

**Explicit disclaimer:** This is **not** a formal penetration test or enterprise cybersecurity audit.

---

## 3. Technical Stack Observed

| Layer | Observation | Evidence |
|-------|-------------|----------|
| Framework | Next.js **16.2.0** (App Router) | [`package.json`](../package.json) |
| UI | React **19**, Tailwind **4**, Radix/shadcn-style components | [`package.json`](../package.json), `components/ui/` |
| Validation | **Zod** on lead API payload | [`lib/ghl/validate.ts`](../lib/ghl/validate.ts) |
| Motion | GSAP (client components) | Project skill / `components/gsap-animations.tsx` (referenced in docs) |
| Analytics | **Vercel Analytics** + delegated CTA click events | [`app/layout.tsx`](../app/layout.tsx), [`components/m2m-cta-analytics.tsx`](../components/m2m-cta-analytics.tsx) |
| CRM | **GoHighLevel** via server-only API integration | [`lib/ghl/`](../lib/ghl/), [`app/api/submit-lead/route.ts`](../app/api/submit-lead/route.ts) |
| Package manager | **npm** | [`package.json`](../package.json), `package-lock.json` |

---

## 4. Page and Route Inventory

| Page / route | Purpose | Key components / notes | Status |
|--------------|---------|--------------------------|--------|
| `/` | Home / brand entry | [`app/page.tsx`](../app/page.tsx), [`components/hero.tsx`](../components/hero.tsx), header/footer | Verified in code |
| `/buy` | Buyer funnel | [`app/buy/page.tsx`](../app/buy/page.tsx), `BuyLeadMini` | Verified in code |
| `/sell` | Seller funnel | [`app/sell/page.tsx`](../app/sell/page.tsx), `SellValuationLeadMini` | Verified in code |
| `/home-search` | Buyer / home search | [`app/home-search/page.tsx`](../app/home-search/page.tsx), `HomeSearchBuyerLead` | Verified in code |
| `/free-home-valuation` | Seller valuation lead | [`app/free-home-valuation/page.tsx`](../app/free-home-valuation/page.tsx), `ValuationSellerLeadForm` | Verified in code |
| `/home-valuation` | Legacy alias | Redirect → `/free-home-valuation` | Verified in code |
| `/cma-form` | Seller CMA / intake | [`app/cma-form/page.tsx`](../app/cma-form/page.tsx) | Verified in code |
| `/contact-us` | Contact / buyer-seller / consultation | [`app/contact-us/page.tsx`](../app/contact-us/page.tsx) | Verified in code |
| `/contact` | Legacy alias | Redirect → `/contact-us` | Verified in code |
| `/resources` | Resources / checklist | [`app/resources/page.tsx`](../app/resources/page.tsx), `ResourcesChecklistForm` | Verified in code |
| `/blog`, `/blog/[slug]` | Content / articles | [`app/blog/`](../app/blog/) | Verified in code |
| `/reviews` | Social proof | [`app/reviews/page.tsx`](../app/reviews/page.tsx) | Verified in code |
| `/our-team`, `/team` | Team | `/our-team` primary; `/team` redirects | Verified in code |
| `/profile-page`, `/roger-lee`, `/kristin-s-profile` | Agent profiles | `app/*/page.tsx` | Verified in code |
| `/partners` | Partners | [`app/partners/page.tsx`](../app/partners/page.tsx) | Verified in code |
| `/va-loan-benefits` | VA campaign | [`app/va-loan-benefits/page.tsx`](../app/va-loan-benefits/page.tsx), `VALeadForm` | Verified in code |
| `/fha-loan` | FHA campaign | [`app/fha-loan/page.tsx`](../app/fha-loan/page.tsx), `FHAQuoteForm` | Verified in code |
| `/improve-your-credit` | Credit / playbook | [`app/improve-your-credit/page.tsx`](../app/improve-your-credit/page.tsx), `CreditPlaybookForm` | Verified in code |
| `/navigating-divorce` | Divorce campaign + quiz | [`app/navigating-divorce/page.tsx`](../app/navigating-divorce/page.tsx), `DivorceQuiz`, `DivorceAerialLead` | Verified in code |
| `/downsizing-your-home` | Downsizing campaign + quiz | [`app/downsizing-your-home/page.tsx`](../app/downsizing-your-home/page.tsx), `DownsizingQuiz` | Verified in code |
| `/facing-foreclosure` | Pre-foreclosure campaign | [`app/facing-foreclosure/page.tsx`](../app/facing-foreclosure/page.tsx), `PreForeclosureForm`, `FacingForeclosureQuiz` | Verified in code |
| `/more-investments` | Investor education | [`app/more-investments/page.tsx`](../app/more-investments/page.tsx), `InvestmentsTools` | Verified in code |
| `/get-license-in-va` | Licensing referral | [`app/get-license-in-va/page.tsx`](../app/get-license-in-va/page.tsx) | Verified in code |
| Legal / policies | Cookie, privacy, terms, accessibility, disclaimers route | `app/cookie-policy`, `privacy-policy`, `terms-and-conditions`, `accessibility-statement`, `copy-of-privacy-policy` | Verified in code |
| `not-found` | 404 | [`app/not-found.tsx`](../app/not-found.tsx) | Verified in code |

**Requires manual verification:** Final sitemap parity, redirects at DNS / edge, and that analytics and metadata match the **actual** production hostname (see §8 for `M2M_SITE_ORIGIN`).

---

## 5. Lead Capture and GoHighLevel Routing Review

**Handler:** All rows below ultimately post to **`POST /api/submit-lead`** ([`app/api/submit-lead/route.ts`](../app/api/submit-lead/route.ts)), processed by [`lib/ghl/submit-lead.ts`](../lib/ghl/submit-lead.ts): **upsert contact** → **apply tags** → **create opportunity** → **add contact note**. Success now requires the full pipeline; failure at any required step returns `ok: false` and keeps the UI out of thank-you states.

| Page / form | Buyer / seller / general | Captured fields (typical) | API route | GHL contact | Tags | Opportunity | Notes |
|-------------|--------------------------|-----------------------------|-----------|-------------|------|-------------|-------|
| `/buy` — `BuyLeadMini` | Buyer | Name, email, phone, DOB, urgency, optional context | `/api/submit-lead` | Yes (when configured) | Buyer tags + optional path tags | If pipeline env set | Custom fields per `GHL_CF_*`; notes optional | Verified in code |
| `/home-search` — `HomeSearchBuyerLead` | Buyer | Same family as buyer mini | `/api/submit-lead` | Yes | Buyer | If configured | UTM helpers as used | Verified in code |
| `/free-home-valuation` — `ValuationSellerLeadForm` | Seller | Name, email, phone, DOB, address line, urgency, optional message | `/api/submit-lead` | Yes | Seller | If configured | Property address → `GHL_CF_ADDRESS` when mapped | Verified in code |
| `/sell` — `SellValuationLeadMini` | Seller | Similar to valuation form | `/api/submit-lead` | Yes | Seller | If configured | — | Verified in code |
| `/cma-form` | Seller | Full intake + address composition + long notes | `/api/submit-lead` | Yes | Seller (+ optional `GHL_PATH_TAGS`) | If configured | Notes often large | Verified in code |
| `/contact-us` | User-selected | Name, email, phone, DOB, lead type, urgency, message | `/api/submit-lead` | Yes | By `lead_type` | If configured | Free message → notes | Verified in code |
| `/downsizing-your-home` — fallback / guide | Seller | Varies by `DownsizingFallbackLead` / `DownsizingGuideForm` | `/api/submit-lead` | Yes | Seller | If configured | Guide/shipping context in notes when used | Verified in code |
| `/facing-foreclosure` — `PreForeclosureForm` | Seller | Full intake pattern | `/api/submit-lead` | Yes | Seller | If configured | Distress context in notes | Verified in code |
| `/facing-foreclosure` — `FacingForeclosureQuizFallbackLead` | Seller | Name, email, phone, urgency, message (quiz block when GHL embed unset) | `/api/submit-lead` | Yes | Seller | If configured | Prefixed notes for ops | Verified in code |
| `/improve-your-credit` — `CreditPlaybookForm` | Buyer | Playbook request + timeline | `/api/submit-lead` | Yes | Buyer | If configured | — | Verified in code |
| `/va-loan-benefits` — `VALeadForm` | Buyer | Shorter intake; message | `/api/submit-lead` | Yes | Buyer | If configured | — | Verified in code |
| `/fha-loan` — `FHAQuoteForm` | Buyer | Shorter intake | `/api/submit-lead` | Yes | Buyer | If configured | — | Verified in code |
| `/navigating-divorce` — `DivorceAerialLead` | Seller | Short-form aerial / guide lead | `/api/submit-lead` | Yes | Seller | If configured | — | Verified in code |
| `/resources` — checklist form | Buyer | Checklist request | `/api/submit-lead` | Yes | Buyer | If configured | — | Verified in code |
| Static downsizing quiz (`public/quizzes/...`) | Seller (in payload) | Varies by surface (`main.js` / `quiz.html` hero + in-quiz capture) | `/api/submit-lead` | Yes | Seller tags from env | If configured | Structured **notes**; **requires `res.ok` + JSON `ok` before success UI** | Verified in code |
| Static divorce quiz | Seller | Name, email, phone; quiz answers in **notes** | `/api/submit-lead` | Yes | Seller | If configured | Awaits response before results animation | Verified in code |
| `components/contact.tsx` / `ContactForm` | Varies | Wired to API in code | `/api/submit-lead` | If mounted | — | If configured | Docs matrix: **not mounted** on current `app` routes | Issue / debt — verify if still needed |

**Status key (overall):** **Verified in code** for orchestration and API contract; **Requires manual verification** for live GHL field IDs, tag spelling, pipeline IDs, and that GHL **contact layouts** show custom fields as expected (a known GHL UI nuance documented elsewhere in this repo).

---

## 6. Quiz Functionality Review

| Quiz / page | Files / components | Submission path | CRM routing | Status | Notes |
|-------------|-------------------|-----------------|-------------|--------|-------|
| Downsizing — embedded static quiz | `public/quizzes/downsizing-your-home/` (`main.js`, `quiz.html`), [`DownsizingQuiz`](../components/downsizing-your-home/downsizing-quiz.tsx) | `fetch` → `/api/submit-lead`; success UI only when **`res.ok` and `data.ok`** | Same as other leads | Verified in code | Inline error regions (`#mf-submit-error`, `#ff-submit-error`, `#quiz-lead-error`) + retry. |
| Downsizing — fallback form | [`DownsizingFallbackLead`](../components/downsizing-your-home/downsizing-fallback-lead.tsx) | `submitLeadToApi` | Full React form error handling | Verified in code | Reliable path when iframe/embed not used. |
| Navigating divorce — embedded static quiz | `public/quizzes/navigating-divorce/`, [`DivorceQuiz`](../components/navigating-divorce/divorce-quiz.tsx) | `await fetch` in `quiz.js`; results only after **`ok`** | Posts seller lead with rich **notes** | Verified in code | `#lead-submit-error` on failure. |
| Improve your credit | [`CreditPlaybookForm`](../components/improve-your-credit/credit-playbook-form.tsx), `GOHIGHLEVEL_QUIZ_CREDIT_URL` | GHL embed **if** URL set to `https`; else **local form** → `/api/submit-lead` | Same server pipeline | Verified in code | Placeholder URL → local form still captures leads. |
| Facing foreclosure | [`FacingForeclosureQuiz`](../components/facing-foreclosure/facing-foreclosure-quiz.tsx) + [`FacingForeclosureQuizFallbackLead`](../components/facing-foreclosure/facing-foreclosure-quiz-fallback-lead.tsx) | GHL iframe if `GOHIGHLEVEL_QUIZ_FORECLOSURE_URL` is live `https`; else **children** fallback → `/api/submit-lead` | Same server pipeline | Verified in code | When real URL ships, iframe shows; fallback hidden. |
| More investments | [`investments-tools.tsx`](../components/more-investments/investments-tools.tsx) | Investor quiz embed if URL live; BRRRR iframe if URL live | Embedded tools may be GHL-hosted — routing **outside** Next API if user completes embed-only flows | Requires manual verification | Placeholder copy references [`lib/m2m-site.ts`](../lib/m2m-site.ts). |

---

## 7. CTA and Button Routing Review

| Page / region | CTA / button | Destination / action | Status | Notes |
|---------------|--------------|----------------------|--------|-------|
| Header / footer | Book / consultation primary CTA | Default [`getConsultationRequestUrl()`](../lib/m2m-site.ts) → `/contact-us?intent=consultation` | Verified in code | [`M2mConsultationCta`](../components/m2m-cta.tsx), [`components/header.tsx`](../components/header.tsx), [`components/footer.tsx`](../components/footer.tsx) |
| Home hero | Work With Us | `/contact-us?intent=buyer` | Verified in code | [`components/hero.tsx`](../components/hero.tsx) |
| Home hero | Free Home Valuation | RealScout URL `REALSCOUT_HOME_VALUATION_URL` | Verified in code | External tab |
| Home hero | Book a consultation (inline link) | `/contact-us?intent=consultation` | Verified in code | Same as `getConsultationRequestUrl()` |
| Home hero | Phone | `M2M_PHONE_HREF` | Verified in code | `tel:` link |
| Contact Us | Schedule online / pick a time | [`getPrimaryConsultationBookUrl()`](../lib/m2m-site.ts) → **GHL** if `GOHIGHLEVEL_BOOKING_URL` is real **https**, else **Calendly** | Verified in code | **Requires manual verification:** confirm Calendly vs GHL is the intended production calendar. |
| Blog article footer | Work With Us | `/contact-us?intent=buyer` | Verified in code | [`app/blog/[slug]/page.tsx`](../app/blog/[slug]/page.tsx) |
| Blog article footer | Pick a time | `getPrimaryConsultationBookUrl()` (opens new tab) | Verified in code | Same GHL/Calendly logic as contact page |
| Reviews band | Work With Us | `/contact-us?intent=buyer` | Verified in code | [`components/reviews/reviews-cta.tsx`](../components/reviews/reviews-cta.tsx) |
| Footer quick links | Work With Us | `/contact-us?intent=buyer` | Verified in code | [`lib/m2m-nav.ts`](../lib/m2m-nav.ts) |
| More investments | Contact team | `/contact-us?intent=buyer` | Verified in code | [`investments-tools.tsx`](../components/more-investments/investments-tools.tsx) |
| VA / campaign pages | Get on the List / campaign CTAs | **Requires manual verification** in browser per page | Requires manual verification | Spot-check [`app/va-loan-benefits/page.tsx`](../app/va-loan-benefits/page.tsx) and related components |

---

## 8. Environment and Secrets Review

The following **variable names** appear in server-side CRM configuration (see [`.env.example`](../.env.example) and [`lib/ghl/config.ts`](../lib/ghl/config.ts)). **Values are intentionally omitted** from this report.

| Name | Role |
|------|------|
| `GHL_DRY_RUN` | When true, skips live CRM calls (used for smoke testing) |
| `GHL_API_KEY` | Private integration token (server only) |
| `GHL_LOCATION_ID` | Sub-account / location |
| `GHL_API_BASE_URL`, `GHL_API_VERSION` | Optional API endpoint overrides |
| `GHL_CF_DOB`, `GHL_CF_ADDRESS`, `GHL_CF_URGENCY`, `GHL_CF_LEAD_TYPE`, `GHL_CF_UTM_*` | Contact custom field IDs |
| `GHL_BUYER_PIPELINE_ID`, `GHL_SELLER_PIPELINE_ID`, `GHL_BUYER_STAGE_NEW_INQUIRY_ID`, `GHL_SELLER_STAGE_NEW_INQUIRY_ID` | Opportunity routing |
| `GHL_TAG_LEAD_BUYER`, `GHL_TAG_LEAD_SELLER`, `GHL_PATH_TAGS` | Tag application |

**Client-side secret exposure:** Repository review did not find `GHL_*` or `NEXT_PUBLIC_*` CRM keys in application TypeScript sources; the browser helper only posts JSON to **`/api/submit-lead`** ([`lib/m2m-lead-submit.ts`](../lib/m2m-lead-submit.ts)). **Requires manual verification** in production using browser DevTools (Network tab) to confirm no secrets leak in bundles or responses.

**Public URL constants** (not secrets) in [`lib/m2m-site.ts`](../lib/m2m-site.ts): `GOHIGHLEVEL_BOOKING_URL`, `GOHIGHLEVEL_QUIZ_*`, `GOHIGHLEVEL_BRRRR_ANALYZER_URL` — several remain **`REPLACE_WITH_*`** strings until marketing supplies live links.

**Canonical site origin:** `M2M_SITE_ORIGIN` is hardcoded for metadata — **Requires manual verification** against the final production domain.

---

## 9. Third-Party Scripts and Integrations

| Integration | Role | Evidence |
|-------------|------|----------|
| **GoHighLevel** | CRM — contacts, tags, opportunities, notes | `lib/ghl/*`, `/api/submit-lead` |
| **Vercel Analytics** | Traffic analytics | [`@vercel/analytics`](../app/layout.tsx) |
| **Custom CTA events** | `m2m_cta` events via `data-m2m-track` | [`components/m2m-cta-analytics.tsx`](../components/m2m-cta-analytics.tsx) |
| **Calendly** | Fallback public scheduling when GHL booking URL not set | [`lib/m2m-site.ts`](../lib/m2m-site.ts) `CALENDLY_BOOK_URL`, `getPrimaryConsultationBookUrl()` |
| **RealScout / partner URLs** | Search / valuation / partner links | [`lib/m2m-site.ts`](../lib/m2m-site.ts) |

**Chat widget:** No Intercom, Drift, Tawk, or similar script was found in a codebase search of common vendor names. **Requires manual verification** if a widget is injected only via hosting dashboard or tag manager outside this repo.

---

## 10. UX, Mobile, and Content Readiness

- **Forms:** Shared classes support **touch-sized** controls (`min-h` patterns in [`lib/m2m-form.ts`](../lib/m2m-form.ts)); many submit buttons use **`disabled={submitting}`** — reasonable duplicate-submit protection at the component level. **Requires manual verification** on real devices.
- **Skip link:** Root layout includes “Skip to main content” ([`app/layout.tsx`](../app/layout.tsx)).
- **Images:** [`next.config.mjs`](../next.config.mjs) sets `images.unoptimized: true` and whitelists remote hosts. **Requires manual verification** for broken remote assets and alt text coverage site-wide.
- **Placeholder / swap copy:** Campaign `content.ts` files and [`lib/m2m-media.ts`](../lib/m2m-media.ts) document interim imagery — expect ongoing creative swaps; not a functional defect.
- **Policy route naming:** “Disclaimers” in the footer points to `copy-of-privacy-policy` — **polish** item; verify client is comfortable with URL wording.
---

## 11. Compliance and Content Risk Notes

The following items are **not legal advice**. They are **recommended for client / legal compliance review** where regulated messaging, telephony, or fair-housing sensitivity applies.

- **SMS / phone:** No explicit SMS opt-in, 10DLC, or TCPA-style consent patterns were identified in form code. If the team plans **text campaigns** or automated SMS from GHL, workflows should be reviewed with qualified counsel and carrier/regulatory requirements.
- **Chat widget:** If added later, placement, disclosure, and data retention should align with privacy policy commitments.
- **Fair housing:** Imagery and copy should be reviewed for **inclusive, non-discriminatory** presentation; code alone cannot certify campaign photography.
- **Financial / distressed / life-event claims:** Pages referencing **VA loans, FHA loans, credit improvement, foreclosure, divorce, grants, and investing** should have **licensed-professional review** where applicable. Resource links in [`lib/m2m-site.ts`](../lib/m2m-site.ts) (`RESOURCE_EXTERNAL_LINKS`) point to government/organizational sites — still verify they match current marketing compliance standards.

---

## 12. Known Issues and Open Items

### Launch blockers

*Use this list only for items that should **stop** domain connection. Whether each item is a true blocker is a business decision.*

1. **Incomplete production `GHL_*` on the live host** — without API key, location, and custom field IDs, live CRM writes will fail or enter **`config_error` / `GHL_DRY_RUN`** behavior. **Requires manual verification.**

### Pre-launch recommended fixes

1. Replace or confirm **`GOHIGHLEVEL_BOOKING_URL`** vs intentional **Calendly** fallback.
2. Set real **`GOHIGHLEVEL_QUIZ_*` / BRRRR** URLs when marketing assets exist (**credit**, **foreclosure iframe**, **investor**).
3. Confirm **`M2M_SITE_ORIGIN`** matches the launch hostname for Open Graph / canonical URLs.

### Post-launch improvements

1. Automated E2E smoke tests for `/api/submit-lead` and critical forms.
2. Consolidate or mount unused contact components if they are truly obsolete (`components/contact.tsx` per matrix).
3. SEO and CRO passes on campaign pages after creative finalization.

---

## 13. Recommended Launch Decision

**Recommendation:** **Connect the domain after** (a) production **`GHL_*`** variables are correctly set and smoke-tested in the **actual** deployment, (b) schedulers (**GHL vs Calendly**) are consciously chosen, and (c) the team **accepts or fixes** remaining **investor / credit GHL embed** placeholders called out in §6 (foreclosure quiz block now has a **React fallback**; static quizzes **validate API success**).

**Reason:** The codebase shows a **mature, single-entry lead pipeline** suitable for production, but **CRM and hostname configuration are environment-dependent**, and a few **marketing embeds** remain placeholders by design. None of the code findings above inherently prevent DNS cutover if the business accepts interim UX on those sections.

---

## 14. Evidence Appendix

| Area | File / path | What it confirms |
|------|-------------|------------------|
| Lead API | [`app/api/submit-lead/route.ts`](../app/api/submit-lead/route.ts) | HTTP entry, error code mapping |
| GHL orchestration | [`lib/ghl/submit-lead.ts`](../lib/ghl/submit-lead.ts) | Contact → tags → opportunity → note |
| Validation | [`lib/ghl/validate.ts`](../lib/ghl/validate.ts) | Zod schema, phone/DOB rules |
| Field / tag mapping | [`lib/ghl/lead-mapping.ts`](../lib/ghl/lead-mapping.ts) | Custom fields, tags, pipelines |
| Client submit helper | [`lib/m2m-lead-submit.ts`](../lib/m2m-lead-submit.ts) | Browser `fetch` to `/api/submit-lead` only |
| Env template | [`.env.example`](../.env.example) | Required `GHL_*` names |
| Site constants | [`lib/m2m-site.ts`](../lib/m2m-site.ts) | Phone, email, booking, quiz URLs, origin |
| Nav / footer CTAs | [`lib/m2m-nav.ts`](../lib/m2m-nav.ts), [`components/hero.tsx`](../components/hero.tsx) | Primary internal routes |
| Quiz shell | [`components/m2m-lead-quiz-section.tsx`](../components/m2m-lead-quiz-section.tsx) | Embed vs fallback behavior |
| Static downsizing quiz | [`public/quizzes/downsizing-your-home/main.js`](../public/quizzes/downsizing-your-home/main.js), [`quiz.html`](../public/quizzes/downsizing-your-home/quiz.html) | Payload + response-checked `fetch` |
| Static divorce quiz | [`public/quizzes/navigating-divorce/quiz.js`](../public/quizzes/navigating-divorce/quiz.js) | Payload + `await fetch` / JSON `ok` |
| Build config | [`next.config.mjs`](../next.config.mjs) | Redirects, images; TypeScript enforced on build |
| Analytics | [`app/layout.tsx`](../app/layout.tsx), [`components/m2m-cta-analytics.tsx`](../components/m2m-cta-analytics.tsx) | Vercel Analytics + CTA events |
| Lead matrix (internal doc) | [`docs/M2M_LEAD_CAPTURE_MATRIX.md`](M2M_LEAD_CAPTURE_MATRIX.md) | Route-by-route field expectations |

---

*End of client-facing report.*
