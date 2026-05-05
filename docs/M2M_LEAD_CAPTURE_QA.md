# Lead capture — manual QA template

Use **live GoHighLevel (GHO)** (contact, custom fields, tags, notes, opportunities) as the **source of truth** for whether a lead worked — not the browser “thank you” alone.

**After each scenario:** record `correlationId` from the `POST /api/submit-lead` JSON (success or error), then search the same id in Vercel logs if needed.

**Live QA note (2026):** **Date of birth** and **Urgency (TEXT)** are writing correctly from production forms when the form collects them. If operators “don’t see” them in the UI, check whether those custom fields are **on the GHO contact record layout** — **successful population and visible field layout are not the same thing.** See [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md) §3.10 and [M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md](./M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md).

**Static quizzes (`public/quizzes/`):** Quiz UIs **await** the lead API and show an **error message** (not success) when the response is not `ok: true`. For QA, confirm both success and a forced error path (e.g. temporarily invalid payload) on staging if desired.

**Repo / engineering checks (no live GHO):** `rg` over `*.{ts,tsx}` — `GHL_*` only under `lib/ghl/`, `scripts/`, `tests/`, `app/api/` (no client bundles). Browser code posts JSON only to **`/api/submit-lead`** ([`lib/m2m-lead-submit.ts`](../lib/m2m-lead-submit.ts)). API errors return user-safe `error` + `code` + `correlationId` (no CRM tokens). **`GHL_DRY_RUN=true`** is **blocked when `VERCEL_ENV=production`** — use dry-run on preview/local/staging only ([`lib/ghl/submit-lead.ts`](../lib/ghl/submit-lead.ts)). **`npm run ghl:operator-check`** (optional `--ping`) after env fill; **`npm run ci`** exercises the API contract without live CRM.

---

## GHO visibility check (do this for any “missing field” report)

1. Open the **contact** by email.
2. Open **all custom fields** (not only the default header fields). Add **Urgency (TEXT)** and **DOB** to the **contact layout** in GHO if the team should see them without drilling in.
3. Confirm the **TEXT** Urgency field (env `GHL_CF_URGENCY`) — not a different dropdown Urgency field, if the account has both.

---

## Quick live script (verification order)

Match [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md) §3.10:

1. **Contact** — confirm the person exists in the M2M GHO location.
2. **Custom fields** — Lead type, DOB (if collected), **Property Address** (if sent), **Urgency (TEXT)**, UTMs; use layout/visibility check above.
3. **Tags** — **M2M - Buyer** or **M2M - Seller** (and any path-based tags from env).
4. **Notes** — when the form sends `notes` (message, CMA context, etc.).
5. **Opportunities** — **M2M Buyer Pipeline** or **M2M Seller Pipeline**, stage **New Inquiry** (requires all four pipeline/stage env vars; if missing or invalid, expect submission failure and no success UI).

---

## Funnel spot checks

1. **New buyer:** `/home-search` or `/buy` — buyer pipeline (if env complete), **New Inquiry**, **M2M - Buyer**, `GHL_CF_URGENCY` TEXT set, `GHL_CF_LEAD_TYPE` = Buyer, optional note.
2. **New seller:** `/free-home-valuation` or `/sell` mini — seller pipeline, **M2M - Seller**, urgency TEXT, lead type Seller.
3. **Duplicate email:** repeat submission with same email (same route) — note whether GHO **updates** the contact vs error; capture `code` if any.
4. **Duplicate phone:** same phone, different email — document GHO behavior (merge, error, or new contact). Edge-case matrix below.
5. **Buyer → seller crossover:** create buyer, then submit a seller route with same email — document lead type field and opportunities.
6. **GHO layout — DOB and Urgency:** after a form that includes DOB and timeline, confirm values in **custom fields** even if they were not on the default layout before the test (add fields to the layout for the team if needed).

## Short-form urgency defaults

On VA, FHA, divorce, downsizing **guide**, resources checklist, and similar: default **“Not sure yet”** (or shared short-form default) should still land in **`GHL_CF_URGENCY`**. Changing the select should set `urgency_explicit: true` in Vercel (`[ghl] urgency_meta`).

## Forced failure drill (staging / careful prod)

Temporarily misconfigure one required step (e.g. invalid tag configuration) and confirm:

- Response is `ok: false` with `code`, `correlationId`, and `failed_step` when available.
- UI stays in error/retry mode (no thank-you state).
- Vercel logs include the same `correlationId` and the failing CRM step.

## Duplicate / conflict matrix (edge cases)

Fill if you are validating merge behavior; **most** submissions are plain upserts. Common path is: same email updates the same contact.

| Case | Expected in GHO | Notes |
|------|-------------------|-------|
| Same email resubmit | | |
| Same phone resubmit | | |
| Email A + phone B vs existing split | | |
| Buyer then seller same email | | |

## DOB UX

On mobile and desktop, pick a birth year **before 2000** quickly (no “stuck in current year” picker). Submit CMA, contact-us, or another DOB form and confirm `GHL_CF_DOB` in the **custom fields** list (and on layout, after § “GHO visibility check”).

---

## Related

- [M2M_LEAD_CAPTURE_MATRIX.md](./M2M_LEAD_CAPTURE_MATRIX.md) — which routes collect what
- [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) — cutover order
- [proof/E2E_SMOKE_PATHS.md](./proof/E2E_SMOKE_PATHS.md) — automated Playwright scope in **`npm run ci`**
