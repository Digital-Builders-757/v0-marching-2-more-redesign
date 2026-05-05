# Marching 2 More — GoHighLevel integration master plan

**Last updated:** April 24, 2026  
**Owner:** Marching 2 More / Donavan McFadden  
**Technical implementation owner:** website CTO / coding agent execution inside this repo  
**Target completion window:** core website → GHL pipeline **live-validated** (manual QA, April 2026); ongoing polish (booking URL, GHL automations) continues in the account.

---

## See also (operational entry points)

- **End-to-end system behavior (canonical):** [`docs/M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md`](./M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md) — architecture, where data lands in GHO, operator verification order, **strict** success (full pipeline or `ok: false`).
- **Client / team (non-technical):** [`docs/M2M_CLIENT_CRM_HANDOFF_GUIDE.md`](./M2M_CLIENT_CRM_HANDOFF_GUIDE.md) — what the site does vs what GHO does, how to confirm leads, common mistakes.

This master plan remains the **scope, phases, and business** record for the integration; the system guide is the best **single place** for “how it works in production” after cutover.

---

## Purpose

This document is the source of truth for the active Marching 2 More website → GoHighLevel integration.

The business requirement has changed from the older HubSpot-centric brief.

**HubSpot is out. GoHighLevel is in.**

Marching 2 More keeps the public website on **Next.js App Router + TypeScript + Tailwind + Vercel** as the branded lead-capture layer, while **GoHighLevel (GHL)** becomes the operational system of record for:

- contacts
- tags
- pipelines / opportunities
- automations
- calendars / booking
- notifications
- reporting

This plan exists so implementation inside the website repo stays clean, server-safe, and aligned with the business rules Donavan approved.

---

## What changed from the old brief

The original internal direction referenced **HubSpot + Calendly**.

That is no longer the target architecture.

### Replace this

- HubSpot CRM ownership
- Calendly-based booking handoff
- HubSpot language in docs, forms, routing, or env naming

### With this

- GoHighLevel as CRM / automation / calendar / reporting system
- GHL-backed booking links and calendars
- M2M Team Leads GHL location as the first destination for all new leads

---

## Architectural boundary

### Website repo owns

- public pages and funnel UX
- buyer / seller lead capture forms
- hidden attribution capture (UTMs where available)
- thank-you / next-step UX
- server-side form submission route(s)
- analytics wiring on the website (GA4, Meta Pixel, later Meta CAPI support)

### GoHighLevel owns

- contact records
- custom fields
- tags
- buyer and seller pipelines
- workflows / automations
- SMS / email sequences
- missed-call text back
- booking calendars
- opportunity stage progression
- internal notifications / alerts
- reporting

### External operational systems remain external

- Slack notifications may still be used, but should be triggered from GHL workflow / webhook logic
- direct-mail, AI, and other operational tooling should not be hard-coded into the site unless scope expands again

---

## Business rules

1. **Seller leads are the highest priority for the first 60 days.**
2. The site should use **separate funnels by pain point**, not one giant generic branching intake.
3. Buyer and seller forms should stay **short and conversion-focused**.
4. Within the **first 5 minutes** of a new lead submission, the operating goal is:
   - call the prospect
   - text the prospect
   - notify the owner and assigned agent internally
5. Booking should be handled by **GoHighLevel calendars**, not Calendly.
6. Reporting should live in **GoHighLevel first**, with the primary weekly KPIs being:
   - cost per lead
   - appointment rate

---

## Form rules

### Required fields

- `name`
- `email`

### Optional fields

- `phone` (omitted from GHL upsert when absent; if provided, must look like a valid US-style number after normalization)
- `date_of_birth` (when present, normalized to **`YYYY-MM-DD`** for the DOB custom field)
- `address`
- `urgency`

### Hidden attribution fields (when available)

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`

### Explicit lead typing

Every form submission must include:

- `lead_type: "buyer" | "seller"`

If a page targets a seller pain point such as foreclosure, downsizing, valuation, or prep-to-list, the form should resolve to the **seller funnel**, even if the copy varies page to page.

### Lead capture routes (expected CRM payload)

**Authoritative route/component matrix:** [`docs/M2M_LEAD_CAPTURE_MATRIX.md`](./M2M_LEAD_CAPTURE_MATRIX.md) (submission path, DOB, urgency mode).

Shared timeline strings for `urgency` (TEXT) come from [`lib/m2m-lead-urgency.ts`](../lib/m2m-lead-urgency.ts), including passive defaults on short forms. `GHL_CF_ADDRESS` maps to the GHL field labeled **Property Address**; optional fields are omitted when empty.

**API success:** `ok: true` only when **contact upsert**, **tags**, **opportunity create**, and **contact note** all succeed — see [`lib/ghl/submit-lead.ts`](../lib/ghl/submit-lead.ts). Every response includes **`correlationId`**. On failure, **`ok: false`** with `code`, optional `failed_step`, and user-safe `error`.

| Route / component | Funnel | `address` | `urgency` | `notes` (→ contact note in GHO) | Live route |
|-------------------|--------|-----------|-----------|-----------------------------------|------------|
| `app/cma-form/page.tsx` | Seller | Street / city / ZIP composed | Timeline radios | Property condition + goals | `/cma-form` |
| `app/contact-us/page.tsx` | Buyer or seller (user choice) | If seller, optional | Timeline select | Free message | `/contact-us` |
| `components/buy/buy-lead-mini.tsx` | Buyer | — | Timeline select | Optional context (area, budget) | `/buy` (CTA block) |
| `components/home-search/home-search-buyer-lead.tsx` | Buyer | — | Timeline select | Optional context | `/home-search` |
| `components/sell/sell-valuation-lead-mini.tsx` | Seller | Optional one-line | Timeline select | — | `/sell` (valuation block) |
| `components/free-home-valuation/valuation-seller-lead-form.tsx` | Seller | Optional | Timeline select | Optional “before we call” | `/free-home-valuation` |
| `components/downsizing-your-home/downsizing-fallback-lead.tsx` | Seller | Optional | Timeline select | Optional context | `/downsizing-your-home` |
| `components/facing-foreclosure/pre-foreclosure-form.tsx` | Seller | Optional | Timeline select | Message | `/facing-foreclosure` |
| `components/facing-foreclosure/facing-foreclosure-quiz-fallback-lead.tsx` | Seller | — | Timeline select | “Embed fallback” prefix + optional message | `/facing-foreclosure` (quiz section when GHL quiz URL unset) |
| `components/improve-your-credit/credit-playbook-form.tsx` | Buyer | — | “When planning to buy” (same options) | Playbook line + optional one-line context | `/improve-your-credit` |
| `components/va-loan-benefits/va-lead-form.tsx` | Buyer | — | Short-form urgency (default “Not sure yet”) | Message + VA inquiry tag line | `/va-loan-benefits` |
| `components/fha-loan/fha-quote-form.tsx` | Buyer | — | Short-form urgency | Subject + message | `/fha-loan` |
| `components/downsizing-your-home/downsizing-guide-form.tsx` | Seller | Ship-to → `address` when set | Short-form urgency | Special instructions + guide request | `/downsizing-your-home` |
| `components/navigating-divorce/divorce-aerial-lead.tsx` | Seller | — | Short-form urgency | Message + guide request | `/navigating-divorce` |
| `components/contact/contact-form.tsx` | Seller (parity) | — | Short-form urgency | Message | **Not mounted** (only `ContactUsParity`; unused) |
| `components/contact.tsx` | Buyer or seller from interest | — | Short-form urgency | Interest + message | **Not mounted** (use `/contact-us`) |
| `app/resources/resources-checklist-form.tsx` | Buyer | — | Short-form urgency | Checklist request note | `/resources` |

**Server:** `notes` and submission metadata are combined into an **operator note** posted with `POST /contacts/:contactId/notes` **after** the opportunity is created. If that call fails, the handler returns **`ok: false`** (`failed_step: contacts_note` when classified). See [`lib/ghl/client.ts`](../lib/ghl/client.ts) and [`lib/ghl/submit-lead.ts`](../lib/ghl/submit-lead.ts).

**Errors:** Upstream GHL HTTP failures are mapped to user-safe JSON via [`lib/ghl/crm-user-message.ts`](../lib/ghl/crm-user-message.ts) (`crm_*` codes) and UI copy via [`lib/m2m-lead-submit-error-copy.ts`](../lib/m2m-lead-submit-error-copy.ts).

---

## Website submission contract

The website should continue posting to:

- `POST /api/submit-lead`

### Runtime

- run in the **Node.js runtime**
- keep all secrets server-side only
- do not expose GHL credentials to the client

### API responsibilities

The API route should:

1. validate required fields (`name`, `email`; optional `phone` / `date_of_birth` per form)
2. normalize phone / strings / lead type
3. create or update the contact in GoHighLevel
4. write minimum custom field data
5. apply appropriate lead tags
6. create or update the opportunity in the correct pipeline / stage
7. when `notes` is present, add a **contact note** in GHL (non-blocking on failure)
8. trigger or hand off to GHL workflow-friendly metadata
9. return a stable success / failure contract to the website

### Suggested request payload

```ts
type SubmitLeadRequest = {
  lead_type: "buyer" | "seller"
  name: string
  email: string
  phone?: string
  date_of_birth?: string
  address?: string
  urgency?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  source_page?: string
  source_path?: string
  /** Free text; server posts to GHL contact Notes API when set (see `lib/ghl/submit-lead.ts`). */
  notes?: string
}
```

### Suggested response contract

```ts
type SubmitLeadResponse =
  | { ok: true; contactId?: string; opportunityId?: string }
  | {
      ok: false
      error: string
      /** e.g. validation_error | config_error | crm_validation | crm_duplicate_or_merge | crm_auth | crm_rate_limit | crm_server | crm_unreachable | internal_error | bad_request | bad_response */
      code?: string
      correlationId?: string
      failed_step?: "contacts_upsert" | "contacts_tags" | "opportunities_create"
      crm_http_status?: number
    }
```

---

## GoHighLevel contact + field mapping

All leads should enter the **M2M Team Leads** GoHighLevel location first.

They should then be separated using both:

- tags
- pipelines / opportunities

### Minimum custom fields to configure in GHL

- `Lead Type`
- `Urgency`
- `UTM Source`
- `UTM Medium`
- `UTM Campaign`
- `UTM Content`
- `DOB` (may be empty on short-form leads when not collected)
- `Address`

These fields are the baseline because they support:

- attribution
- urgency-based routing
- buyer vs seller separation
- future reporting and agent assignment rules

### Data stored vs visible in the GHO UI

**Successful field population and what operators see on the default contact screen are not the same thing.** The API can write custom fields (including **Urgency** as TEXT via `GHL_CF_URGENCY` and **DOB** via `GHL_CF_DOB`) while operators still do not *notice* the values until those fields are **added to the contact record layout** (or opened in the custom-fields panel) in GHO. Live QA showed **urgency** and **date of birth** saving correctly; earlier confusion was often **GHL UI visibility** (e.g. Urgency not placed on the contact view), not failed writes. Operators should follow the verification order in [M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md](./M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md) and [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md).

**Do not confuse** the **TEXT** urgency field (what the site writes) with a separate **dropdown** Urgency field in GHO, if both exist — only the TEXT field ID is bound in env as `GHL_CF_URGENCY`.

---

## Pipelines

Maintain separate pipelines for:

- **M2M Buyer Pipeline** (env: `GHL_BUYER_PIPELINE_ID`) — first stage for new web leads: **New Inquiry** (env: `GHL_BUYER_STAGE_NEW_INQUIRY_ID`)
- **M2M Seller Pipeline** (env: `GHL_SELLER_PIPELINE_ID`) — first stage: **New Inquiry** (env: `GHL_SELLER_STAGE_NEW_INQUIRY_ID`)

**Base tags (intended production names, exact match in GHO):** `M2M - Buyer` and `M2M - Seller` via `GHL_TAG_LEAD_BUYER` / `GHL_TAG_LEAD_SELLER` (comma-separated if multiple). UUIDs and tag spelling live in GHO and Vercel env — see [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md).

### Default stage progression

Use a practical baseline like:

1. New Inquiry
2. Contact Attempted
3. Conversation Started
4. Appointment Scheduled
5. Appointment Completed
6. Active Client / Listing
7. Under Contract
8. Closed Won / Lost

Seller naming can be adapted slightly for listing flow, but the shape should stay equivalent.

---

## Automations

### Buyer leads

Every new buyer lead should receive:

- instant text
- instant email
- internal notification path

### Seller leads

Every new seller lead should receive a **seller-specific sequence** in GHL.

Because seller leads are the top priority, seller workflows should be the first ones wired and verified.

### High-intent handling

Urgency of **0–30 days** should trigger elevated internal alerts for faster response.

### Missed-call text back

Enable missed-call text back in GHL so high-intent leads still get immediate acknowledgement.

---

## Notifications

New leads should notify:

- Slack
- email
- text

Recipients should include:

- owner
- assigned agent when applicable

Important: Slack can remain part of the architecture, but the preferred trigger should come from **GHL workflow / webhook logic**, not a revived HubSpot pattern.

---

## Booking and calendars

**Target operating model:** booking through **GoHighLevel calendars** (not Calendly as the long-term system).

**Current website behavior (transitional):** [`getPrimaryConsultationBookUrl()`](../lib/m2m-site.ts) uses **`GOHIGHLEVEL_BOOKING_URL`** when it is a real `http(s)` URL; otherwise it falls back to **`CALENDLY_BOOK_URL`** until GHL provides the primary public link. All primary “book consultation” CTAs should use this helper — do not scatter raw Calendly URLs in components.

### Rules (GHL account)

- each agent should connect their own Google Calendar individually
- buyer consults and seller consults should use **separate booking links** (or distinct flows) as the account defines
- opportunity stage moves after appointments remain **GHL workflow** concerns once pipelines are live

---

## Tracking and attribution

The website should continue using:

- GA4
- Meta Pixel

It should also support:

- Meta Conversions API (CAPI) as a follow-up enhancement

### Primary conversion event

Treat **new lead / form submit** as the main conversion event.

This is the primary performance engine for the near-term funnel.

---

## Environment variables

The old `HUBSPOT_*` variables should not be used in production.

### Server-only

- `GHL_API_KEY`
- `GHL_LOCATION_ID`
- `GHL_CF_DOB`
- `GHL_CF_ADDRESS`
- `GHL_CF_URGENCY`
- `GHL_CF_LEAD_TYPE`
- `GHL_CF_UTM_SOURCE`
- `GHL_CF_UTM_MEDIUM`
- `GHL_CF_UTM_CAMPAIGN`
- `GHL_CF_UTM_CONTENT`

### Browser-safe

- `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### Security rule

Server-only secrets must remain server-side only and must never use the `NEXT_PUBLIC_` prefix.

---

## Website surface inventory (initial wiring priority)

### Highest priority seller surfaces

- `/free-home-valuation`
- `/cma-form`
- `/sell`
- `/downsizing-your-home`
- `/facing-foreclosure`
- any seller guide / pre-listing / valuation CTA pages

### Buyer surfaces

- `/buy`
- `/home-search`
- buyer-contact paths

### Shared contact / booking surfaces

- `/contact-us`
- shared consultation CTA components

---

## Migration rules

### Remove or phase out

- HubSpot language in docs and code comments
- Calendly as the primary consultation / booking system
- legacy assumptions that reporting must leave GHL

### Preserve

- Next.js + Vercel security model
- short-form conversion strategy
- hidden UTM capture
- clear thank-you / next-step UX

---

## Implementation phases

**Website phases 1–3 are shipped in this repo.** Phases 4–5 depend on GHL account configuration and live QA.

## Phase 1 — foundation

**Done (repo):** env contract in [`.env.example`](../.env.example); shared GHL modules; lead payload contract aligned with `lib/ghl/validate.ts`.

- ongoing: keep this plan and checklists aligned with production learnings

## Phase 2 — website submission path

**Done (repo):** `POST /api/submit-lead`; Zod validation; upsert → tags → opportunity → operator note; stable JSON responses with **`crm_*`** error classification and appropriate HTTP status codes.

- live behavior requires valid **`GHL_*`** env (or `GHL_DRY_RUN=true` for testing without upstream calls)

## Phase 3 — page wiring

**Status: shipped in repo** — seller and buyer surfaces wired (including VA/FHA, divorce, downsizing guide, resources checklist, home contact, and parity contact form); consultation URLs use **`getPrimaryConsultationBookUrl()`** (GHL when configured, else transitional Calendly). Remaining: swap **`GOHIGHLEVEL_BOOKING_URL`** to a real link when the account provides it.

- preserve thank-you UX and attribution capture (ongoing QA)

## Phase 4 — automations + notifications

- verify buyer instant text / email sequence
- verify seller-specific sequence
- verify urgency escalation
- verify Slack / email / text internal alert flow
- verify missed-call text back

## Phase 5 — booking + QA

- connect GHL calendars
- confirm buyer vs seller consult routing
- verify opportunity stage movement on booking
- run end-to-end QA across the highest-priority funnels

---

## Acceptance checklist

The integration is not “done” until the following are true:

- forms still submit cleanly from the website
- secrets remain server-side only
- a lead lands in the correct GHL location
- required custom fields are populated
- buyer and seller paths are separated correctly
- seller leads receive the correct seller automation
- buyer leads receive the correct buyer automation
- urgency triggers elevated alerting
- primary public booking uses **GHL** (`GOHIGHLEVEL_BOOKING_URL`); transitional Calendly fallback in code is acceptable only until that URL is live
- owner / assigned-agent notifications are working
- attribution fields are present where available
- thank-you UX still feels polished and branded

---

## Risks / watchouts

- silent field-name drift between frontend forms and GHL mappings
- custom field IDs missing or renamed in GHL
- booking links shipped before calendar ownership is verified per agent
- hidden UTMs dropped during page refactors
- mixed buyer/seller routing caused by over-generic form reuse
- raw Calendly URLs added **outside** `getPrimaryConsultationBookUrl()` / `CALENDLY_BOOK_URL` (breaks single source of truth)

---

## Execution notes for coding agents

- prefer shared utilities over per-page API copy-paste
- keep the submission contract stable across all forms
- preserve `lib/m2m-site.ts` as the source of truth for external operational URLs
- do not leak GHL credentials into client components
- keep seller surfaces first in execution order
- do not silently break existing CTAs while integrating forms

---

## Deliverable status (website repo)

**Completed**

1. Shared GHL config + `POST /api/submit-lead` + LeadConnector-style client (`lib/ghl/`).
2. Seller and buyer forms wired with stable contract + `source_path` (priority surfaces + campaign fallbacks + contact-us + credit playbook local path).
3. Consultation links use **`getPrimaryConsultationBookUrl()`** (GHL-first, Calendly fallback while `GOHIGHLEVEL_BOOKING_URL` is still a placeholder).
4. Cutover docs: [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md), [M2M_GHL_REMAINING_GAPS.md](./M2M_GHL_REMAINING_GAPS.md); structured server logs with **`correlationId`** for live debugging.

**Ongoing (account / marketing, not code-blocked)**

1. Keep **`GHL_*`** in Vercel aligned with the live GHO sub-account ([M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md)); rotate tokens per policy.
2. Replace **`GOHIGHLEVEL_*`** placeholder public URLs in `lib/m2m-site.ts` when final links are supplied.
3. GHO-side: workflows, SMS/email, calendars, and reporting — **source of truth in GHO**, verified there (see [M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md](./M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md)).

**Manual QA:** Core submit path, custom fields (including DOB + TEXT urgency with layout visibility understood), tags, and opportunities are **exercised against production**; treat [M2M_LEAD_CAPTURE_QA.md](./M2M_LEAD_CAPTURE_QA.md) as the live checklist template.

---

## Source files likely to change

- `lib/m2m-site.ts`
- `lib/m2m-constants.ts`
- `components/m2m-cta.tsx`
- `app/contact-us/page.tsx`
- seller and buyer landing page forms
- `app/api/**`
- analytics helpers if Meta CAPI support begins now

This plan is the governing source of truth for the active GHL integration scope in the Marching 2 More website repo.

---

## Implementation status (website repo)

**Shipped in code (foundation + cutover readiness):**

- Shared server modules under **`lib/ghl/`** (config, validation, LeadConnector-style HTTP client, contact upsert, tags, opportunity create).
- **`POST /api/submit-lead`** — Node runtime, Zod validation, stable JSON responses (**`crm_*`** error codes); secrets stay server-only.
- Client helpers: **`lib/m2m-lead-submit.ts`**, **`lib/m2m-utm.ts`**, **`useM2mUtm`**, **`M2mLeadDobField`**.
- Forms wired with `lead_type`, optional DOB/phone, UTMs, and `source_path` on seller, buyer, and campaign surfaces (see [lead capture table](#lead-capture-routes-expected-crm-payload) and [M2M_GHL_REMAINING_GAPS.md](./M2M_GHL_REMAINING_GAPS.md)).
- **Observability:** per-request **`correlationId`**; **`crmUserCode`** on classified upstream errors; logs **`strict_failure_pipeline_unconfigured`** with **`missingEnvVars`** when any of the four pipeline/stage env vars is unset; no raw email/phone in logs.
- **Booking single source of truth:** **`getPrimaryConsultationBookUrl()`** — documented in **`lib/m2m-site.ts`**; contact page uses the same helper as header/footer/hero/blog.

**Confirmed technical decisions**

- **Dry run:** `GHL_DRY_RUN=true` skips upstream calls; custom field env vars optional (placeholders injected server-side).
- **Pipelines:** All **four** buyer/seller pipeline + stage env vars must be set for **live** submissions. If any is missing, the API returns **`ok: false`** / **`config_error`** before calling GHL (`strict_failure_pipeline_unconfigured`).
- **Notes:** Operator note (metadata + optional visitor `notes`) is posted **after** opportunity create ([`lib/ghl/client.ts`](../lib/ghl/client.ts) `createContactNote`). If that call fails, the handler returns **`ok: false`** — not a silent partial success.

**Still requires the GHL account + Vercel env (not completable from repo alone):**

- All **`GHL_*`** credentials and custom field / pipeline / stage IDs — see **[M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md)** and **[`.env.example`](../.env.example)**.
- **Live cutover + QA order:** **[M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md)** · **Blunt gap list:** **[M2M_GHL_REMAINING_GAPS.md](./M2M_GHL_REMAINING_GAPS.md)**.
- Public booking + quiz URLs in **`lib/m2m-site.ts`** (`GOHIGHLEVEL_*`) — replace placeholders when marketing/GHL supply real `https://` links.

**API note:** Contact/opportunity request bodies are isolated in **`lib/ghl/client.ts`**. If the live API returns 4xx after credentials are set, adjust payloads there against the current [HighLevel API docs](https://marketplace.gohighlevel.com/docs/).
