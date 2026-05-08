# Work order (Marching 2 More - site redesign)

**Execution spine for the public website.** Vision and rules: [M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md](./M2M_WEBSITE_OVERHAUL_MASTER_PLAN.md). Cross-site visual principles and checklist: [M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md](./M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md)—**running priorities and ships stay in this file** (avoid treating both as competing “sources of truth”). The current Marching 2 More queue lives in [marching2more/README.md](./marching2more/README.md) and [marching2more/M2M_CATCHUP_ROADMAP.md](./marching2more/M2M_CATCHUP_ROADMAP.md). GoHighLevel integration is an **active parallel track**; use [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md) as the CRM / automation source of truth.

## GHL integration — status (cutover readiness pass)

**Implemented in repo (this pass + prior foundation)**

- `POST /api/submit-lead` (Node), [`lib/ghl/`](../lib/ghl/) pipeline: validate → upsert contact → tags → opportunity → operator note; user-safe JSON errors with **`crm_*`** codes ([`lib/ghl/crm-user-message.ts`](../lib/ghl/crm-user-message.ts)) and HTTP status mapping in [`app/api/submit-lead/route.ts`](../app/api/submit-lead/route.ts).
- Structured server logs: `[ghl]` events + **`correlationId`** per submission; **`crmUserCode`** on classified upstream errors; **`strict_failure_pipeline_unconfigured`** when any of the four pipeline/stage env vars is unset (submit fails before GHL).
- **Booking:** primary "book consultation" **button** surfaces use [`getConsultationRequestUrl()`](../lib/m2m-site.ts) (`/contact-us?intent=consultation`). Pick-a-time / calendar links use [`getPrimaryConsultationBookUrl()`](../lib/m2m-site.ts) (contact trust row “Schedule online”, blog post **Pick a time**, etc.): real `GOHIGHLEVEL_BOOKING_URL` wins, else Calendly fallback until GHL link exists.
- **Forms → API:** CMA, contact-us, buy/sell minis, home-search buyer, free valuation seller, foreclosure, downsizing (fallback + guide form), **credit playbook** (local form path), **VA** + **FHA** campaign forms, **divorce** guide form, **resources** checklist, homepage **Contact**, parity **`ContactForm`** — all send **`urgency`** (short forms default “Not sure yet”); see [M2M_LEAD_CAPTURE_MATRIX.md](./M2M_LEAD_CAPTURE_MATRIX.md).
- **Lead hardening (2026-04 → 2026-05):** shared **MDY DOB** control; **strict** success (`ok: true` only after note succeeds; no partial-success thank-you states); tiered **`crm_validation`** / duplicate hints in [`lib/ghl/crm-user-message.ts`](../lib/ghl/crm-user-message.ts); fetch failures → **`crm_unreachable`**; success JSON always includes **`correlationId`**. Playwright API smoke: [`tests/e2e/submit-lead-api.spec.ts`](../tests/e2e/submit-lead-api.spec.ts).
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

- **Client campaign imagery + FHA editorial band (2026-05-08)** — **`public/images/**`** `m2m-*-client*` set: downsizing hero + problems banner ([`downsizing-your-home/content.ts`](../components/downsizing-your-home/content.ts)); **`/fha-loan`** hero + **`EDITORIAL_SECTION_IMAGE`** + [`FhaEditorialImageBand`](../components/fha-loan/fha-editorial-image-band.tsx) after trust strip ([`app/fha-loan/page.tsx`](../app/fha-loan/page.tsx)); **`/improve-your-credit`** center hero column; **`/more-investments`** intro carousel center; **`/navigating-divorce`** collage slot 1 + alt; **`/va-loan-benefits`** hero, CTA band, benefits editorial image ([`va-benefits-content.tsx`](../components/va-loan-benefits/va-benefits-content.tsx)). **[`M2M_ASSET_MAP.md`](./M2M_ASSET_MAP.md)** rows. **`npm run typecheck`**, **`npm run test`**, **`npm run lint`**, **`npm run build`** green. *(Loose Explorer-style drops under `public/images/` root with spaces in filenames are not committed—canonical paths live under route folders.)*

- **Agent booking + divorce collage + home-search/resources polish (2026-05-07)** — **Profiles:** **`M2M_AGENT_BOOKING_*`** in [`lib/m2m-site.ts`](../lib/m2m-site.ts); [`AgentProfile`](../components/team/agent-profile.tsx) **gold** CTA = per-agent book/calendar (or mailto where used), panel links **`getConsultationRequestUrl()`**; wired on [`/profile-page`](../app/profile-page/page.tsx), [`/roger-lee`](../app/roger-lee/page.tsx), [`/kristin-s-profile`](../app/kristin-s-profile/page.tsx), [`/jalessa-hendricks`](../app/jalessa-hendricks/page.tsx). **`/navigating-divorce`:** four-panel collage in [`content.ts`](../components/navigating-divorce/content.ts) uses transition-focused art (porch + photo-album slots); alts in [`divorce-gallery-collage.tsx`](../components/navigating-divorce/divorce-gallery-collage.tsx); [`M2M_ASSET_MAP.md`](./M2M_ASSET_MAP.md) rows updated. **`/home-search`:** drop duplicate hero “Speak with an Agent” link; buyer lead block copy aims that intent at the form. **`/resources`:** internal guides callout type/spacing bump. Remove one unused `_original-client-delivery` PNG. **`npm run typecheck`**, **`npm run test`**, **`npm run lint`**, **`npm run build`** green.

- **Launch polish pass (2026-05 — routes + loading feel + conversion hygiene)** — **`/blog`**: [`BlogHero`](../components/blog/blog-hero.tsx) backdrop via **`next/image`**, shared **[`M2mContainer`](../components/m2m-layout.tsx)** alignment, symmetric gold eyebrow rule; [`BlogList`](../components/blog/blog-list.tsx) **`M2mContainer`** gutters, **`rounded-sm`** media shells + light rings, responsive **`sizes`**, **focus-visible** rings on post links. **`/reviews`**: [`ReviewsHero`](../components/reviews/reviews-hero.tsx) stable **`min-height`** band; backdrop **`pointer-events-none`**. **`/contact-us`**: non-consult thank-you line renders a real apostrophe (**We'll**); trust row **`min-w-0`**. **Shared CTAs / transitions:** [`M2mConsultationCta`](../components/m2m-cta.tsx) + [`m2mOutlineGoldLinkClass`](../components/m2m-cta.tsx) use calm **ring** focus styles on gold/panel; [`M2mContactShellFallback`](../components/m2m-page-skeleton.tsx) **`main`** uses the same **cream → white** gradient as [`M2mRouteLoading`](../components/m2m-page-skeleton.tsx) so Suspense handoffs match generic route loading. `npm run ci` green.

- **Team imagery + agent profiles (2026-05 — marching2more batch 4)** — **[`/our-team`**](../app/our-team/page.tsx): [`TeamHero`](../components/team/team-hero.tsx) wide-shot **`object-position`** + **`min-height`** hero band; [`TeamMembers`](../components/team/team-members.tsx) unified **`aspect-[4/5]`** portrait frames + ring; **Jalessa Hendricks** card crops **`teamPhotoWide`** with zoom / focal **`object-position`** until a dedicated Blob portrait exists. **Profiles** ([`/profile-page`](../app/profile-page/page.tsx), [`/roger-lee`](../app/roger-lee/page.tsx), [`/kristin-s-profile`](../app/kristin-s-profile/page.tsx)): [`AgentProfile`](../components/team/agent-profile.tsx) coherent mobile/desktop layout (portrait-first on small screens), **`getConsultationRequestUrl()`** for **Book a consultation**, typography and spacing aligned with team surfaces. **Docs:** [M2M_ASSET_MAP](./M2M_ASSET_MAP.md) Blob team/agent table. Brief: [M2M_TEAM_IMAGERY_AND_PROFILE_POLISH_WORK_ORDER](./marching2more/M2M_TEAM_IMAGERY_AND_PROFILE_POLISH_WORK_ORDER.md). `npm run lint` / **`npm run typecheck`** / **`npm run build`** green.

- **Final cleanup sweep (2026-05 — final polish batch 5)** — **`/free-home-valuation`** proof strip: cream band + testimonial / RealScout sidebar cards use **M2m** border/ring/elevation (no **gray-50** slab); avatar rings. **`/reviews`** list cards match the same card language; expectation copy **padding** slightly opened. `npm run lint` / **`npm run test`** / **`npm run typecheck`** / **`npm run build`** green.

- **Live lead-capture verification — repo + docs (2026-05 — final polish batch 3)** — Audited **`POST /api/submit-lead`** → **`lib/ghl/submit-lead.ts`**: strict tags/pipeline/note order; **`GHL_DRY_RUN`** blocked in production; correlation IDs on all JSON outcomes. **`/contact-us`**: **`intent=buyer`** forces buyer CRM type; **`intent=seller`** or **`consultation`** forces seller — **UTM-only** (or other) query updates **do not** reset the visitor’s buyer/seller radio ([`app/contact-us/page.tsx`](../app/contact-us/page.tsx)). Docs: [M2M_GHL_OPERATOR_VERIFICATION](M2M_GHL_OPERATOR_VERIFICATION.md) §3.9 (operator note always created), §5 (production dry-run), [M2M_GHL_LIVE_CUTOVER_RUNBOOK](M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) §§4 · 7 · 10 (quiz parity, contact intent, rollback), [M2M_LEAD_CAPTURE_MATRIX](M2M_LEAD_CAPTURE_MATRIX.md), [M2M_LEAD_CAPTURE_QA](M2M_LEAD_CAPTURE_QA.md), [COMMON_ERRORS_QUICK_REFERENCE](troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md), [M2M_GHL_REMAINING_GAPS](M2M_GHL_REMAINING_GAPS.md). Local **`npm run ghl:operator-check`** green when env present; live GHO checklist still operator-owned.

- **Loading & perceived performance (2026-05 — final polish batch 2)** — [`M2mRouteLoading`](../components/m2m-page-skeleton.tsx) now mirrors the core marketing shell (sticky panel header stub · cream-tinted white **`main`** · dark footer band) for [`app/loading.tsx`](../app/loading.tsx); softer **`m2mLoadingSoft`** + **`.m2m-loading-block`** in [`globals.css`](../app/globals.css) (**`prefers-reduced-motion`** → static placeholders). Homepage dynamic chunks still use **`M2mHomeSectionSkeleton`** with **`M2mSection`**-aligned **`py-14 md:py-20`**. **`M2mContactShellFallback`** replaces bare “Loading…” on [`/contact-us`](../app/contact-us/page.tsx) Suspense — same chrome as route transitions without mounting Header/Footer twice in the fallback path. `npm run ci` stays green locally.

- **Documentation & release readiness (2026-05)** — Added **`docs/proof/`** stubs ([`QA_CHECKLIST`](proof/QA_CHECKLIST.md) pointers, [`E2E_SMOKE_PATHS`](proof/E2E_SMOKE_PATHS.md)); indexed in [`DOCUMENTATION_INDEX`](DOCUMENTATION_INDEX.md); [`website-launch-hardening-report`](website-launch-hardening-report.md) + [`internal-hardening-findings`](internal-hardening-findings.md) tightened (ContactForm row, duplicated disclaimer trim, CI E2E reality); [`MVP_STATUS_ROADMAP`](MVP_STATUS_ROADMAP.md) GHL cutoff wording + P1 automation pointer; funnel smoke checklist cross-links **`lib/m2m-funnel-regression.ts`**; marching-2-more [`SKILL`](../.cursor/skills/marching-2-more/SKILL.md): removed incorrect **`images.unoptimized`** claim (`next/image` follows default **`next.config.mjs`**).

- **Launch engineering pass (2026-05)** — Static quizzes **`public/quizzes/`** (downsizing `main.js`, `quiz.html`, divorce `quiz.js`) **await `/api/submit-lead`**, parse JSON, and show **inline error + retry** when `!ok` or network fails (no false success). **`FacingForeclosureQuiz`** mounts **`FacingForeclosureQuizFallbackLead`** when the GHL foreclosure embed URL is unset (mirrors downsizing fallback pattern). Footer agent thumbnails: meaningful **`alt`**. **`typescript.ignoreBuildErrors`** removed from [`next.config.mjs`](../next.config.mjs) — production build + `npm run ci` enforce TypeScript. Docs: [`website-launch-hardening-report.md`](./website-launch-hardening-report.md), [`internal-hardening-findings.md`](./internal-hardening-findings.md), [`DOCUMENTATION_INDEX.md`](./DOCUMENTATION_INDEX.md), matrix + roadmap + troubleshooting aligned. `npm run ci` green.

- **Launch-readiness pass** — Homepage [`metadata`](../app/page.tsx): `canonical` + Open Graph; root layout drops **`generator`** meta; [`/home-search`](../app/home-search/page.tsx) single document **`h1`** (sr-only) + column **`h2`s**; decorative star rows **`aria-hidden`** + sr-only rating copy on [`Hero`](../components/hero.tsx) and [`ReviewsHero`](../components/reviews/reviews-hero.tsx); **`focus-visible`** rings on hero phone/consultation links; larger tap targets + focus rings on [`HomeTopicNav`](../components/home-topic-nav.tsx) and [`M2mRelatedPages`](../components/m2m-related-pages.tsx) links. `npm run ci` green.

- **Conversion + content engine (growth system pass)** — Live [`/blog`](../app/blog/page.tsx) index (`BlogHero` + `BlogList` + metadata); **Blog** in header/footer nav ([`lib/m2m-nav.ts`](../lib/m2m-nav.ts)); [`lib/blog/render-post-content.tsx`](../lib/blog/render-post-content.tsx) subset renderer for post bodies; [`app/blog/[slug]/page.tsx`](../app/blog/[slug]/page.tsx) simplified article CTAs + client reviews link; [`lib/blog/posts.ts`](../lib/blog/posts.ts) removes demo/Supabase placeholder copy, Wix cover URLs → `M2M_MEDIA`, related internal links; [`app/resources/page.tsx`](../app/resources/page.tsx) internal guides strip; trust notes on [`HomeSearchBuyerLead`](../components/home-search/home-search-buyer-lead.tsx), [`ValuationSellerLeadForm`](../components/free-home-valuation/valuation-seller-lead-form.tsx), [`/cma-form`](../app/cma-form/page.tsx); [`/reviews`](../app/reviews/page.tsx) expectation line before CTA; [`M2mCampaignFaq`](../components/m2m-campaign-faq.tsx) + per-route FAQ copy on downsizing, divorce, foreclosure, credit, VA, FHA (`variant="light"`), investments; FHA [`TESTIMONIALS`](../components/fha-loan/content.ts) aligned to real client voice; investor tools honest placeholder copy ([`investments-tools.tsx`](../components/more-investments/investments-tools.tsx)). Menu search: `blog` keyword → `/blog`. Brief: [M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md](./marching2more/M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md).

- **Priority-guide site pass** — Decision frame [M2M_SITE_IMPROVEMENT_PRIORITY_GUIDE.md](./marching2more/M2M_SITE_IMPROVEMENT_PRIORITY_GUIDE.md): `main#main-content` **`overflow-x: clip`** in [`app/globals.css`](../app/globals.css); homepage [**`Hero`**](../components/hero.tsx) primary **`focus-visible`** + **`touch-manipulation`**; [**`/contact-us`**](../app/contact-us/page.tsx) trust-row **tap targets**, success message copy fix; [**`/reviews`**](../app/reviews/page.tsx) mounts **`GSAPAnimations`** (**`blur-in`** / **`fade-up`** on hero + CTA); [**`M2mConsultationCta`**](../components/m2m-cta.tsx) **`min-h-12`**; mobile header book CTA sizing; [**`Footer`**](../components/footer.tsx) agent quick links expanded hit area; **`BuyCTA`** / **`SellCTA`** / **`ReviewsCta`** / [**`PartnersCTA`**](../components/partners/partners-cta.tsx) / [**`TeamCTA`**](../components/team/team-cta.tsx) **`inline-flex min-h-12`** + focus rings; [**`DivorceSupportCta`**](../components/navigating-divorce/divorce-support-cta.tsx); [**`PolicyPage`**](../components/policy/policy-page.tsx) rhythm; [**`TeamMembers`**](../components/team/team-members.tsx) focus ring on profile cards; [`lib/m2m-form.ts`](../lib/m2m-form.ts) hierarchy comment block. Deferred per guide: Blob hero swaps, **`GOHIGHLEVEL_*`** operator env.

- **Home funnel follow-up (same priority frame)** — [`PropertySearch`](../components/property-search.tsx): **`focus-visible`** on CTAs + Creed attribution tap strip; secondary **Tell Us Your Needs** → **`/contact-us?intent=buyer`**; [`SellHero`](../components/sell-hero.tsx) three CTAs **`inline-flex min-h-12`** + focus rings; [`Testimonials`](../components/testimonials.tsx): **`/reviews`** eyebrow link + footer review CTAs; [**`/home-search`**](../app/home-search/page.tsx) inset **`focus-visible`** on hero CTAs; resources [**checklist form**](../app/resources/resources-checklist-form.tsx) consent links to **`/terms-and-conditions`**; [`lib/m2m-nav.ts`](../lib/m2m-nav.ts) menu first item **Welcome → Home**; [`lib/m2m-menu-search.ts`](../lib/m2m-menu-search.ts) **`welcome`** / **`home`** / **`homepage`** resolve to **`/`**.

- **Site experience uplift (journey + clarity)** — [`lib/m2m-nav.ts`](../lib/m2m-nav.ts): **Buy** / **Sell** hub routes in header + footer; menu dividers via **`dividerBefore`** (no magic indices). [`components/header.tsx`](../components/header.tsx): mobile-visible **Book consult** CTA, roomier menu rows. [`lib/m2m-menu-search.ts`](../lib/m2m-menu-search.ts): **`buy`** / **`sell`** hub routing + catalog entries + refreshed placeholder/hint. Homepage [`Hero`](../components/hero.tsx): clearer **who we serve** + geography; kicker stacks on small screens; **Explore services** links (**`/buy`**, **`/sell`**, **`/reviews`**); primary CTAs unchanged (Work With Us · Free Home Valuation); phone + **Book a consultation** secondary. [`HomeTopicNav`](../components/home-topic-nav.tsx) + [`lib/m2m-content-clusters.ts`](../lib/m2m-content-clusters.ts): hub links first in **`M2M_HOME_TOPIC_LINKS`**, **`min-h-11`** chips. [`Testimonials`](../components/testimonials.tsx): explicit trust line on real client stories. Brief + ship log: [marching2more/M2M_SITE_EXPERIENCE_UPLIFT_WORK_ORDER.md](./marching2more/M2M_SITE_EXPERIENCE_UPLIFT_WORK_ORDER.md). `npm run typecheck` / **`npm run lint`** / **`npm run test`** green on save.

- **Conversion + content engine (growth system — May 2026 pass)** — Shared **[`M2mPostSubmitNextSteps`](../components/m2m-post-submit-next-steps.tsx)** after successful submits on [`/contact-us`](../app/contact-us/page.tsx), [`/cma-form`](../app/cma-form/page.tsx), [`HomeSearchBuyerLead`](../components/home-search/home-search-buyer-lead.tsx), and [`ValuationSellerLeadForm`](../components/free-home-valuation/valuation-seller-lead-form.tsx) (internal next steps + **`data-m2m-track`**). Richer **[`M2M_CONTENT_CLUSTERS`](../lib/m2m-content-clusters.ts)** copy + **`Book a consultation`** / hub links; **[`M2mRelatedPages`](../components/m2m-related-pages.tsx)** trust footnote, **`min-h-11`** links, **`related_page`** tracking. [`/home-search`](../app/home-search/page.tsx): seller **bridge strip** (**`/sell`**, valuation, CMA). [`/resources`](../app/resources/page.tsx): internal guides lead with **buy / sell / consult**. [`/blog/[slug]`](../app/blog/[slug]/page.tsx): three CTA widths + **buy/sell** text links. Contact intro: clearer **response expectations**. Ship log: [marching2more/M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md](./marching2more/M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md). `npm run typecheck` / **`npm run lint`** / **`npm run test`** green on save.

- **Repo hygiene + mobile polish (May 2026 pass)** — [`docs/DOCUMENTATION_INDEX.md`](./DOCUMENTATION_INDEX.md): **queue vs ship log** clarity. [`components/m2m-layout.tsx`](../components/m2m-layout.tsx): **`min-w-0`** on inset hero frame, section, prose; container JSDoc. [`app/globals.css`](../app/globals.css): overflow comment vs root layout. [`lib/m2m-form.ts`](../lib/m2m-form.ts): **`m2mFormShellWidthSafeClass`** + **[`/contact-us`](../app/contact-us/page.tsx)** form. [`Footer`](../components/footer.tsx) + [`PolicyPage`](../components/policy/policy-page.tsx): mobile spacing. Ship log: [marching2more/M2M_REPO_HYGIENE_AND_MOBILE_POLISH_WORK_ORDER.md](./marching2more/M2M_REPO_HYGIENE_AND_MOBILE_POLISH_WORK_ORDER.md). `npm run typecheck` / **`npm run lint`** / **`npm run test`** green on save.

- **Repo hygiene + mobile UX polish** — Documentation spine trimmed (`DOCUMENTATION.md` points only at [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)); cross-links clarify WORK_ORDER vs [M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md](./M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md); marching2more specs labeled vs live repo. Shared shell: safe-area padding on header/footer, overflow discipline, globals typography tweaks, quiz iframe wrappers (`max-w-full`). Route-level spacing on core pages (`/`, `/buy`, `/sell`, `/contact-us`, `/home-search`, `/free-home-valuation`, `/cma-form`, `/resources`, `/our-team`, `/profile-page`, `/reviews`), campaign landings, and policy shells. Brief: [marching2more/M2M_REPO_HYGIENE_AND_MOBILE_POLISH_WORK_ORDER.md](./marching2more/M2M_REPO_HYGIENE_AND_MOBILE_POLISH_WORK_ORDER.md). **`/contact`** remains a redirect to **`/contact-us`** (see [`app/contact/page.tsx`](../app/contact/page.tsx)). `npm run ci` green after ship.

- **Client page fixes batch (CTA + campaign surfaces)** — `/contact-us?intent=consultation` for primary consultation CTA (`M2mConsultationCta`), `getPrimaryConsultationBookUrl()` retained for “Schedule online”; **Work With Us** → `/contact-us?intent=buyer` (hero, footer, reviews, divorce landings, blog). **VA loan** hero/CTA imagery + “Get on the List” banner. **Facing foreclosure** guide carousel (`pre-foreclosure-guide-carousel`). **Credit repair** refreshed `M2M_MEDIA` + spacing between duplicate download CTAs. **FHA loan** placeholder features replaced with accurate copy. **`/more-investments`** investor tools (`#investor-tools`): quiz embed + BRRRR analyzer placeholder + three tool stubs; env: `GOHIGHLEVEL_QUIZ_INVESTOR_URL`, `GOHIGHLEVEL_BRRRR_ANALYZER_URL` in [`lib/m2m-site.ts`](../lib/m2m-site.ts). Decision log: [`marching2more/M2M_CLIENT_PAGE_FIXES_WORK_ORDER.md`](./marching2more/M2M_CLIENT_PAGE_FIXES_WORK_ORDER.md). `npm run ci` green.

## Done recently (older)

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
2. **Agent profiles** — `/profile-page`, `/roger-lee`, `/kristin-s-profile`: shared **`AgentProfile`** system refreshed (2026-05); optional later = dedicated **`headshotJalessa`** on **`/our-team`**, editorial extras (pull-quote / stats) if content grows.
3. **Blog** - `/blog`, `/blog/[slug]`: typography improved; optional = index backdrop from `M2M_MEDIA.blogIndexBackdrop`, richer article typography (lists/blockquotes) when content supports it.
4. **Contact** - `/contact-us`: hierarchy fixed; optional = light hero still (`M2M_MEDIA.contactHeroStill`) if it stays minimal.
5. **Reviews** — `/reviews`: **`GSAPAnimations`** added; verify band tokens vs home during QA.

## Public route audit (strength + pattern)

**Patterns:** `core` = `Header` + light `main` + global `Footer`. `campaign` = `Header` + `consultationCtaVariant="outlineCream"` + `bg-m2m-panel` + `DivorceLandingFooter`. `legal` = `PolicyPage` + footer.

| Route | Pattern | Strength | Notes |
|-------|---------|----------|--------|
| `/` | core | Good | Inset hero system; below-fold sections strong; buy page still reads slightly more "premium full-bleed." |
| `/buy`, `/sell` | core | Strong | Full-bleed heroes, `M2M_MEDIA`, consistent sections. |
| `/partners` | core | Strong | Blob hero/CTA stills, containers. |
| `/blog` | core | Good | Hero: **`next/image`** backdrop + **`M2mContainer`**; list matches site gutters, framed thumbnails, focus rings. |
| `/blog/[slug]` | core | Good | Editorial hero; prose tuned to brand. |
| `/reviews` | core | Good | **`GSAPAnimations`**; hero band **`min-height`** + non-interactive backdrop. |
| `/contact`, `/contact-us` | core | Good | `/contact` redirect; trust row + semantics; thank-you messaging typo-free. |
| `/resources` | core | Good | Inset hero + form card; PNG hero until Blob. |
| `/our-team`, `/team` | core | Strong | Team hero + members; `/team` redirect. |
| `/profile-page`, `/roger-lee`, `/kristin-s-profile` | interior | Strong | Shared **`AgentProfile`**; portrait framing aligned with **`/our-team`** cards; CTAs: buyer intent + **`getConsultationRequestUrl()`**. |
| `/home-search` | core | Good | Inset hero; tool CTAs. |
| `/free-home-valuation`, `/home-valuation` | core | Good | Inset hero + sections; `/home-valuation` redirect. |
| `/cma-form` | core | Good | Inset hero + form card. |
| Legal (`/cookie-policy`, `/privacy-policy`, `/terms-and-conditions`, `/accessibility-statement`; footer “Disclaimers” → `/privacy-policy`; `/copy-of-privacy-policy` redirects) | legal | Good | Token-aligned policy shell. |
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
- **Reviews** + **get-license-in-va**: periodic pass for dead zones and CTA bands as needed (**`/reviews`** CTA tier refreshed this batch).
## Historical batches (overhaul era)

Earlier overhaul work tracked **inset hero** adoption, Blob/backdrops, campaign consistency, and legal readability in rolling batches. Current site-wide batches are logged under **Done recently** above and in [M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md](./M2M_VISUAL_POLISH_SYSTEM_PASS_2026.md). Remaining optional themes: Blob/tool hero imagery where assets exist; blog index backdrop; CMA/radio hint token sweep on long forms; Playwright smoke when prioritized.

## Shared-system follow-ups

- `M2mInsetHeroFrame` / `M2mInsetHeroScrim` - default choice for "premium card" heroes; full-bleed (`BuyHero`) remains for key marketing pages.
- `M2mProse` - use for short policy callouts or pull quotes where `prose` is heavy.
- **Button hierarchy** - primary `m2mPanel` / `m2mGold` on dark; forms on light already use panel/deep; audit campaign landings for outliers.

## Strong vs lagging (snapshot)

- **Strong:** `/buy`, `/sell`, `/our-team`, agent profiles (`/profile-page`, `/roger-lee`, `/kristin-s-profile`), `/partners`, most **campaign** landings, blog post hero treatment.
- **Good (steady improvement):** home, tool pages (search, resources, valuation, CMA), blog index, contact, legal.
- **Lag if unattended:** any new route that skips `M2mContainer` / inset or full-bleed pattern; long forms that revert to raw gray borders.

## Next (website-only)

1. **Content / parity QA** — Walk primary routes; confirm CTAs match [`lib/m2m-site.ts`](../lib/m2m-site.ts) (Calendly, RealScout, Google reviews, partners); spot-check new blog posts + campaign FAQs on mobile.
2. **Tests** — Replace placeholder `npm test` with smoke E2E when prioritized.
3. **Optional** — Strict Next typecheck in CI when the codebase is ready.

Further product-growth ideas stay in [M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md](./marching2more/M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md) (not a duplicate execution queue). Team imagery + profile polish batch is **logged above** (see [M2M_ASSET_MAP](./M2M_ASSET_MAP.md)); final launch polish / live QA lives in [M2M_FINAL_POLISH_AND_LIVE_QA_WORK_ORDER.md](./marching2more/M2M_FINAL_POLISH_AND_LIVE_QA_WORK_ORDER.md).

Reference (not a competing queue): [M2M_SITE_IMPROVEMENT_PRIORITY_GUIDE.md](./marching2more/M2M_SITE_IMPROVEMENT_PRIORITY_GUIDE.md), [M2M_SITE_EXPERIENCE_UPLIFT_WORK_ORDER.md](./marching2more/M2M_SITE_EXPERIENCE_UPLIFT_WORK_ORDER.md), [M2M_REPO_HYGIENE_AND_MOBILE_POLISH_WORK_ORDER.md](./marching2more/M2M_REPO_HYGIENE_AND_MOBILE_POLISH_WORK_ORDER.md).

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
