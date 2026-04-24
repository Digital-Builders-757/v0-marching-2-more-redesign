# Marching 2 More — GoHighLevel account setup checklist

**Purpose:** Tasks that must be completed **inside** the GoHighLevel (GHL) sub-account (M2M Team Leads) and supporting tools. The website repo cannot finish these without real IDs, URLs, and workflows from the account.

**Website repo (already done):** `POST /api/submit-lead`, `lib/ghl/`, form wiring, `getPrimaryConsultationBookUrl()`, structured logs — see [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md). This checklist is **only** account-side + env population.

**Blocked until:** an operator with GHL admin access can create or verify objects below and copy IDs into Vercel. Without **`GHL_API_KEY`** + **`GHL_LOCATION_ID`** + eight **`GHL_CF_*`** IDs, live mode will not configure (use **`GHL_DRY_RUN=true`** for UI-only testing).

**Related:** [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md) (assumptions, tag rules, triage) · [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md) · Live hookup / QA order: [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) · Website env template: [`.env.example`](../.env.example) · Public booking/quiz placeholders: [`lib/m2m-site.ts`](../lib/m2m-site.ts) · Skimmable gap list: [M2M_GHL_REMAINING_GAPS.md](./M2M_GHL_REMAINING_GAPS.md)

---

## 1. API access (website → GHL)

- [ ] Create a **Private Integration** (PIT) with scopes for contacts, opportunities, and tags (minimum).
- [ ] Copy the token into Vercel as **`GHL_API_KEY`** (server-only).
- [ ] Copy the **location ID** (sub-account) into **`GHL_LOCATION_ID`**.
- [ ] Confirm API base URL and **Version** header still match [HighLevel Private Integrations](https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken/) (website defaults: `https://services.leadconnectorhq.com`, `Version: 2021-07-28`).

---

## 2. Custom fields (contact)

Create or verify **contact** custom fields and paste each field’s **ID** into the matching env var:

| Field label (GHL) | Env var | Notes |
|-------------------|---------|--------|
| DOB | `GHL_CF_DOB` | When collected, website sends **`YYYY-MM-DD`** (date inputs). Short forms may omit DOB; the field is not written when absent. |
| **Property Address** | `GHL_CF_ADDRESS` | Free text; omitted when a form does not collect address. |
| Urgency (**text** field) | `GHL_CF_URGENCY` | Use the **TEXT** urgency field’s ID — **not** the dropdown urgency field. |
| Lead Type | `GHL_CF_LEAD_TYPE` | Website sends exact strings **`Buyer`** or **`Seller`**. Field must accept those values (text or matching single-select options). |
| UTM Source | `GHL_CF_UTM_SOURCE` | Omitted when empty. |
| UTM Medium | `GHL_CF_UTM_MEDIUM` | |
| UTM Campaign | `GHL_CF_UTM_CAMPAIGN` | |
| UTM Content | `GHL_CF_UTM_CONTENT` | |

- [ ] All eight IDs set in Vercel / `.env.local`.
- [ ] Confirm **Lead Type** in GHL accepts **`Buyer`** / **`Seller`** as sent from the site ([`lib/ghl/lead-mapping.ts`](../lib/ghl/lead-mapping.ts)).

---

## 3. Pipelines & stages

- [ ] **Buyer pipeline** — create stages aligned with the master plan (baseline: New Inquiry → … → Closed).
- [ ] **Seller pipeline** — same.
- [ ] Copy **pipeline IDs** → `GHL_BUYER_PIPELINE_ID`, `GHL_SELLER_PIPELINE_ID`.
- [ ] Copy **“New Inquiry”** (or equivalent first stage) stage IDs → `GHL_BUYER_STAGE_NEW_INQUIRY_ID`, `GHL_SELLER_STAGE_NEW_INQUIRY_ID`.

If these env vars are omitted, the site still **upserts the contact** and **applies tags**, but **skips opportunity creation** (see server logs).

---

## 4. Tags

- [ ] Create tags the website will attach — **intended names:** `M2M - Buyer` and `M2M - Seller` (ASCII hyphen, spaces as in GHL).
- [ ] Set **`GHL_TAG_LEAD_BUYER`** and **`GHL_TAG_LEAD_SELLER`** to comma-separated **exact tag names** as they appear in GHL (copy from GHL UI; do not paste from Word with **en dash** `–` or **em dash** `—`).
- [ ] If these env vars are **empty**, the site **still upserts the contact** but **skips** the tag API call for that lead type (no error — verify tags in GHL after test submits).
- [ ] Optional: **`GHL_PATH_TAGS`** for extra tags by pathname, format: `/cma-form:CMA Web|High Intent,/facing-foreclosure:Foreclosure`

---

## 5. Workflows & automations

- [ ] **Seller** — instant SMS + email + internal notification; priority routing for seller leads (first 60 days emphasis per master plan).
- [ ] **Buyer** — instant SMS + email + internal notification.
- [ ] **Urgency** — if using 0–30 day urgency, add elevated internal alerts (Slack / email / SMS) in GHL.
- [ ] **Missed-call text back** — enabled in GHL phone settings.

---

## 6. Notifications

- [ ] Slack / email / text recipients: owner + assigned agent rules defined in GHL (avoid hard-coding from the website).
- [ ] Verify test leads from staging/production land in the correct location and trigger workflows.

---

## 7. Calendars & booking (public URLs)

- [ ] **Buyer consult** and **seller consult** — separate GHL calendars or booking links.
- [ ] Each agent connects **their own Google Calendar** in GHL.
- [ ] Paste the **primary** public booking URL into [`GOHIGHLEVEL_BOOKING_URL`](../lib/m2m-site.ts) (must be `https://`).
- [ ] When set, header/footer/hero/blog “Book consultation” links prefer GHL over Calendly (`getPrimaryConsultationBookUrl()`).

---

## 8. Quiz / embed URLs (optional)

Replace placeholders in [`lib/m2m-site.ts`](../lib/m2m-site.ts) (must become real `https://` embed or form URLs):

- `GOHIGHLEVEL_QUIZ_CREDIT_URL` — until set, **improve-your-credit** uses the **local playbook form** (already submits to `/api/submit-lead`).
- `GOHIGHLEVEL_QUIZ_DOWNSIZING_URL` — until set, **downsizing** shows **fallback short form** to `/api/submit-lead`.
- `GOHIGHLEVEL_QUIZ_FORECLOSURE_URL` — until set, **facing-foreclosure** relies on the on-page **lead form** (not iframe).

When a URL is live, `M2mLeadQuizSection` shows the iframe; no placeholder string is loaded as `src`.

---

## 9. Website QA before May 1, 2026

- [ ] Submit **seller** path (e.g. `/cma-form`) — contact + fields + tags + opportunity.
- [ ] Submit **buyer** path (e.g. `/buy` mini form) — buyer pipeline/opportunity.
- [ ] **`/contact-us`** — both lead types + booking link row.
- [ ] Confirm **no** `GHL_*` values appear in browser bundles (Network tab: JSON body only to `/api/submit-lead`).
- [ ] Run `npm run ci` before merge.

---

## 10. Local development without CRM

Set **`GHL_DRY_RUN=true`** — validates payloads and returns success without calling GHL. Custom field env vars can be omitted in dry run (placeholders are injected server-side).
