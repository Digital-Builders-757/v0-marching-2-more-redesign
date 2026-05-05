# Marching 2 More — GHL remaining gaps

**~60-second read.** Separates what is **done in the repo** from what **requires GHL admin / env** and what is **left to validate**.

| Read next | Purpose |
|-----------|---------|
| [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md) | Env assumptions, tag rules, `npm run ghl:operator-check`, triage |
| [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) | Ordered env + test sequences |
| [M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md) | Account-side checklist |
| [WORK_ORDER.md](./WORK_ORDER.md) — section **GHL integration — status** | Full pass summary |

---

## Done (in repo)

- `POST /api/submit-lead` (Node) + `lib/ghl/` (config, validate, client, submit orchestration).
- **CRM errors:** GHL failures are classified into stable JSON `code` values (`crm_validation`, `crm_duplicate_or_merge`, `crm_auth`, `crm_rate_limit`, `crm_server`, `crm_unreachable`) with user-safe `error` text — see [`lib/ghl/crm-user-message.ts`](../lib/ghl/crm-user-message.ts), [`lib/m2m-lead-submit-error-copy.ts`](../lib/m2m-lead-submit-error-copy.ts), and HTTP mapping in [`app/api/submit-lead/route.ts`](../app/api/submit-lead/route.ts).
- **Validation:** `phone` and `date_of_birth` are **optional** on the API so short campaign forms can submit without them; full-intake forms still collect DOB/phone where the UI provides fields.
- Lead forms wired: `/cma-form`, `/contact-us`, `/buy`, `/sell`, `/home-search`, `/free-home-valuation`, `/facing-foreclosure`, **`FacingForeclosureQuizFallbackLead`** (quiz block when GHL quiz URL unset), `/downsizing-your-home` (fallback + **guide form**), `/improve-your-credit` (local playbook path), **`/va-loan-benefits`**, **`/fha-loan`**, **`/navigating-divorce`**, **`/resources`** (checklist form), plus homepage **`Contact`** and parity **`ContactForm`** (see [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md#lead-capture-routes-expected-crm-payload)).
- **Static quizzes** (`public/quizzes/…`) POST to `/api/submit-lead` and **require** HTTP + JSON `ok` before advancing to success UI (downsizing `main.js` + `quiz.html`, divorce `quiz.js`; **2026-05**).
- UTM capture, `source_path`, buyer/seller typing, optional `notes` / `address` / `urgency` (per-route strategies in [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md#lead-capture-routes-expected-crm-payload)); server posts `notes` to GHL contact notes API when set.
- **`getPrimaryConsultationBookUrl()`** — single booking pattern; GHL URL when set, else Calendly fallback.
- Server logs: `[ghl]` + `correlationId`; classified `crmUserCode` on upstream errors; pipeline env gaps enumerated when opportunities skipped.
- Operator script: `npm run ghl:operator-check` (optional `--ping`); see [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md).
- Docs: runbook, this file, troubleshooting rows; `npm run ci` green.

---

## In progress / partial

- **Public URLs in code:** `GOHIGHLEVEL_BOOKING_URL` and **`GOHIGHLEVEL_QUIZ_*`** (credit, foreclosure iframe, investor, BRRRR) may still be **`REPLACE_WITH_*`** until marketing/GHL supply links. Site degrades safely (fallback forms, static quiz error UI, no broken iframes).
- **Pipelines (strict):** all **four** of `GHL_BUYER_PIPELINE_ID`, `GHL_SELLER_PIPELINE_ID`, `GHL_BUYER_STAGE_NEW_INQUIRY_ID`, `GHL_SELLER_STAGE_NEW_INQUIRY_ID` must be set for **live** submissions to succeed. If any are missing, the API returns **`ok: false`** / **`code: config_error`** / **`failed_step: opportunities_create`** after local checks — **no** contact is written in GHL (see `strict_failure_pipeline_unconfigured` in [`lib/ghl/submit-lead.ts`](../lib/ghl/submit-lead.ts)).

---

## Blocked on GHL account access (cannot finish in code alone)

- **Private Integration token** → `GHL_API_KEY`.
- **Location ID** → `GHL_LOCATION_ID`.
- **Eight contact custom field UUIDs** → `GHL_CF_*` (see checklist table).
- **Buyer + seller pipeline IDs** + **New Inquiry (or first stage) stage IDs** → four `GHL_*PIPELINE*` / `GHL_*STAGE*` vars.
- **Tag names** matching env **`GHL_TAG_LEAD_BUYER`** / **`GHL_TAG_LEAD_SELLER`** (exact spelling).
- **Workflows:** SMS/email sequences, internal routing, urgency escalations, missed-call text-back — configured in GHL.
- **Calendars:** agent Google connections, buyer/seller consult flows, **real public booking URL** for `GOHIGHLEVEL_BOOKING_URL`.
- **Optional embeds:** real quiz/survey URLs for campaign landings.

---

## Remaining website work (optional / polish)

- **API contract:** [`tests/e2e/submit-lead-api.spec.ts`](../tests/e2e/submit-lead-api.spec.ts) exercises JSON/validation errors and the unconfigured-CRM path against a running server (no live GHL in CI).
- Optional: distinct UX when `GHL_DRY_RUN=true` vs live (currently same success copy).

---

## Remaining QA / validation

- Submit each major path **against production GHL** with real env (seller, buyer, contact-us, campaigns).
- Confirm tags, custom fields, opportunities (or intentional skip), workflows firing.
- Network tab: confirm **no** `GHL_*` secrets in client bundles.

---

## Next human actions (after this pass)

1. Open [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md).
2. Log into GHL as admin; work through [M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md).
3. Set Vercel env from [`.env.example`](../.env.example); replace `GOHIGHLEVEL_*` in `lib/m2m-site.ts` when URLs exist.
4. Run runbook test sequences; grep Vercel logs for `[ghl]` + `correlationId` on failures.
5. Update this doc (check off **Done** / shrink **Blocked**) as the account goes live.
