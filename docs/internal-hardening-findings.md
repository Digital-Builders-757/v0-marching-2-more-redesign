# Internal — Website Launch Hardening Findings

**Audience:** Developers / operator  
**Companion doc:** [`website-launch-hardening-report.md`](website-launch-hardening-report.md) (client-facing)  
**Rule:** No secret values in this file — reference env var **names** only.  
**Last updated:** 2026-05-05

---

## 0. Shipped fixes (2026-05)

The following items from the original hardening review are **addressed in repo**:

| Item | Change |
|------|--------|
| TypeScript bypass | **`typescript.ignoreBuildErrors`** removed from [`next.config.mjs`](../next.config.mjs); `next build` + `npm run ci` enforce types. |
| Static quiz false success | [`public/quizzes/downsizing-your-home/main.js`](../public/quizzes/downsizing-your-home/main.js), [`quiz.html`](../public/quizzes/downsizing-your-home/quiz.html), [`public/quizzes/navigating-divorce/quiz.js`](../public/quizzes/navigating-divorce/quiz.js) **await** `fetch`, parse JSON, require **`res.ok` + `ok: true`** before success UI; inline error + re-enable submit. |
| Foreclosure quiz empty block | [`FacingForeclosureQuiz`](../components/facing-foreclosure/facing-foreclosure-quiz.tsx) mounts [`FacingForeclosureQuizFallbackLead`](../components/facing-foreclosure/facing-foreclosure-quiz-fallback-lead.tsx) when GHL quiz URL unset. |
| Footer avatar `alt` | [`components/footer.tsx`](../components/footer.tsx) — `alt` includes agent name. |

---

## 1. Summary

Repo review for Marching 2 More Next.js site: single lead API (`POST /api/submit-lead`), server-only GHL integration, mostly consistent form submit guards. **Open engineering follow-ups:** unmounted parity contact components; optional richer telemetry on `failed_step`.

---

## 2. Suspicious or fragile patterns (still relevant)

### 2.1 Empty tags — strict failure

**File:** [`lib/ghl/submit-lead.ts`](../lib/ghl/submit-lead.ts)

- If `GHL_TAG_LEAD_BUYER` / `GHL_TAG_LEAD_SELLER` resolve to an **empty** tag list for the lead, the API returns **`ok: false`** (`failed_step: contacts_tags`, `code: config_error`) — no GHL writes.

### 2.2 Opportunity creation — all-or-nothing env

**File:** [`lib/ghl/config.ts`](../lib/ghl/config.ts) — `pipelines` is `null` unless all four of `GHL_BUYER_PIPELINE_ID`, `GHL_SELLER_PIPELINE_ID`, `GHL_BUYER_STAGE_NEW_INQUIRY_ID`, `GHL_SELLER_STAGE_NEW_INQUIRY_ID` are set.

**File:** [`lib/ghl/submit-lead.ts`](../lib/ghl/submit-lead.ts) — if `pipelines` is incomplete, logs **`strict_failure_pipeline_unconfigured`** and returns **`ok: false`** before any GHL call.

**Follow-up:** Operator checklist must set all four pipeline/stage IDs for production — otherwise every submit fails at configuration.

### 2.3 Success contract (strict full pipeline)

**Current behavior:** `ok: true` only after contact upsert, tags, opportunity, and operator note all succeed. Any step failure → **`ok: false`** with `correlationId` for triage.

**File:** [`lib/m2m-lead-submit.ts`](../lib/m2m-lead-submit.ts) may still parse optional `warnings[]` for forward compatibility — the live route does not emit them.

### 2.4 Unused / unmounted lead components

**Confirmed:** [`docs/M2M_LEAD_CAPTURE_MATRIX.md`](M2M_LEAD_CAPTURE_MATRIX.md) — `ContactForm` is only referenced from **`ContactUsParity`**; no `app` route imports **`components/contact.tsx`**. Canonical surface is **`/contact-us`**.

**Follow-up (optional hygiene):** remove parity folder or wire it intentionally once product confirms it is obsolete.

### 2.5 `failed_step` typing vs note step

**File:** [`lib/m2m-lead-submit.ts`](../lib/m2m-lead-submit.ts) — narrows `failed_step` to subsets of steps; confirm alignment with server if `contacts_note` is ever returned (grep server types).

---

## 3. TODO /.placeholder references (non-exhaustive)

| Location | Note |
|----------|------|
| [`lib/m2m-site.ts`](../lib/m2m-site.ts) | `GOHIGHLEVEL_BOOKING_URL`, `GOHIGHLEVEL_QUIZ_CREDIT_URL`, `GOHIGHLEVEL_QUIZ_FORECLOSURE_URL`, `GOHIGHLEVEL_QUIZ_INVESTOR_URL`, `GOHIGHLEVEL_BRRRR_ANALYZER_URL` — `REPLACE_WITH_*` until marketing supplies live `https` links |
| Campaign `content.ts` / [`lib/m2m-media.ts`](../lib/m2m-media.ts) | SWAP / interim asset keys |
| [`components/m2m-lead-quiz-section.tsx`](../components/m2m-lead-quiz-section.tsx) | Developer-facing message references `lib/m2m-site.ts` in UI when embed missing and **no** `children` |

---

## 4. Environment variables checklist (operator)

Copy from [`.env.example`](../.env.example). Verify in **Vercel** (or host) for production:

- [ ] `GHL_API_KEY`, `GHL_LOCATION_ID`
- [ ] All `GHL_CF_*` field IDs match GHL contact custom fields
- [ ] `GHL_TAG_LEAD_BUYER`, `GHL_TAG_LEAD_SELLER` exact match GHL tag strings
- [ ] Optional `GHL_PATH_TAGS` format validated
- [ ] All four pipeline/stage IDs if opportunities required
- [ ] `GHL_DRY_RUN=false` in production

**CLI helper:** `npm run ghl:operator-check` (see `.env.example` header).

---

## 5. Browser QA matrix (manual)

Run on **production-like** build with real `GHL_*` (or dry-run intentionally).

| # | Surface | Action | Pass criteria |
|---|---------|--------|----------------|
| 1 | `/contact-us` | Submit buyer + seller variants | 200 JSON `ok`, GHL contact; tags; opportunity + note when env complete |
| 2 | `/buy`, `/home-search` | Full buyer form | DOB + urgency land in expected custom fields |
| 3 | `/free-home-valuation`, `/sell` | Seller form | Address + urgency |
| 4 | `/cma-form` | Long seller intake | Long `notes` + composed address |
| 5 | `/facing-foreclosure` | `PreForeclosureForm` + quiz fallback | Seller pipeline; quiz form errors + success; GHL iframe when URL set |
| 6 | `/downsizing-your-home` | Static quiz + iframe + fallback | Force API error (invalid JSON) → inline error, no false success |
| 7 | `/navigating-divorce` | Static quiz | Same as #6 |
| 8 | `/improve-your-credit` | Local form path | Works when GHL quiz URL unset |
| 9 | `/more-investments` | Investor section | Placeholder vs iframe when URLs set |
| 10 | Contact page + blog | “Pick a time” | Opens Calendly or GHL as configured |
| 11 | Global | Network tab | No `GHL_API_KEY` or Bearer token in browser |
| 12 | 404 / redirects | `/contact`, `/team`, `/home-valuation` | Redirect targets correct |

---

## 6. Suggested developer tasks (prioritized)

**P0**

1. Production env verification + one end-to-end lead per funnel type.

**P1**

1. Audit unused `components/contact*.tsx` usage; delete or integrate.

**P2**

1. Extend Playwright with more funnel `request` contracts if needed ([`tests/e2e/submit-lead-api.spec.ts`](../tests/e2e/submit-lead-api.spec.ts) covers the API entrypoint).

---

## 7. File index (quick grep anchors)

- API route: `app/api/submit-lead/route.ts`
- Orchestration: `lib/ghl/submit-lead.ts`, `lib/ghl/client.ts`, `lib/ghl/validate.ts`, `lib/ghl/lead-mapping.ts`, `lib/ghl/config.ts`
- Client: `lib/m2m-lead-submit.ts`
- Constants: `lib/m2m-site.ts`, `lib/m2m-nav.ts`
- Quiz shell: `components/m2m-lead-quiz-section.tsx`
- Foreclosure quiz fallback: `components/facing-foreclosure/facing-foreclosure-quiz-fallback-lead.tsx`
- Static quizzes: `public/quizzes/downsizing-your-home/main.js`, `public/quizzes/downsizing-your-home/quiz.html`, `public/quizzes/navigating-divorce/quiz.js`

---

*End of internal findings.*
