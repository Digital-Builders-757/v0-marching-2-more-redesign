# Marching 2 More — GoHighLevel account setup checklist

**Purpose:** Tasks that must be completed **inside** the GoHighLevel (GHL) sub-account (M2M Team Leads) and supporting tools. The website repo cannot finish these without real IDs, URLs, and workflows from the account.

**Related:** [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md) · Website env template: [`.env.example`](../.env.example) · Public booking/quiz placeholders: [`lib/m2m-site.ts`](../lib/m2m-site.ts)

---

## 1. API access (website → GHL)

- [ ] Create a **Private Integration** (PIT) with scopes for contacts, opportunities, and tags (minimum).
- [ ] Copy the token into Vercel as **`GHL_API_KEY`** (server-only).
- [ ] Copy the **location ID** (sub-account) into **`GHL_LOCATION_ID`**.
- [ ] Confirm API base URL and **Version** header still match [HighLevel Private Integrations](https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken/) (website defaults: `https://services.leadconnectorhq.com`, `Version: 2021-07-28`).

---

## 2. Custom fields (contact)

Create or verify **contact** custom fields and paste each field’s **ID** into the matching env var:

| Field label (GHL) | Env var |
|-------------------|---------|
| DOB | `GHL_CF_DOB` |
| Address | `GHL_CF_ADDRESS` |
| Urgency | `GHL_CF_URGENCY` |
| Lead Type | `GHL_CF_LEAD_TYPE` |
| UTM Source | `GHL_CF_UTM_SOURCE` |
| UTM Medium | `GHL_CF_UTM_MEDIUM` |
| UTM Campaign | `GHL_CF_UTM_CAMPAIGN` |
| UTM Content | `GHL_CF_UTM_CONTENT` |

- [ ] All eight IDs set in Vercel / `.env.local`.
- [ ] **Lead Type** options can mirror website values: `Buyer` / `Seller` (website sends those strings).

---

## 3. Pipelines & stages

- [ ] **Buyer pipeline** — create stages aligned with the master plan (baseline: New Inquiry → … → Closed).
- [ ] **Seller pipeline** — same.
- [ ] Copy **pipeline IDs** → `GHL_BUYER_PIPELINE_ID`, `GHL_SELLER_PIPELINE_ID`.
- [ ] Copy **“New Inquiry”** (or equivalent first stage) stage IDs → `GHL_BUYER_STAGE_NEW_INQUIRY_ID`, `GHL_SELLER_STAGE_NEW_INQUIRY_ID`.

If these env vars are omitted, the site still **upserts the contact** and **applies tags**, but **skips opportunity creation** (see server logs).

---

## 4. Tags

- [ ] Create tags the website will attach (e.g. `M2M — Buyer`, `M2M — Seller`).
- [ ] Set **`GHL_TAG_LEAD_BUYER`** and **`GHL_TAG_LEAD_SELLER`** to comma-separated **exact tag names** as they appear in GHL.
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

Replace placeholders in [`lib/m2m-site.ts`](../lib/m2m-site.ts):

- `GOHIGHLEVEL_QUIZ_CREDIT_URL`
- `GOHIGHLEVEL_QUIZ_DOWNSIZING_URL`
- `GOHIGHLEVEL_QUIZ_FORECLOSURE_URL`

When downsizing/foreclosure URLs are live, the iframe shows the GHL quiz; until then, the site shows the **fallback short form** (downsizing) or the **lead form** (foreclosure).

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
