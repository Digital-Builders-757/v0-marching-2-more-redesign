# GoHighLevel — operator verification & assumptions

**Audience:** Operators wiring **Vercel env** to the **live M2M GHL sub-account**. This doc complements [M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md) (what to create in GHL) and [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) (cutover order).

**Secrets:** Never commit `.env.local` or paste `GHL_API_KEY` into tickets. The browser must never receive `GHL_*` variables (Network tab should only show JSON **to** `/api/submit-lead`, no CRM token).

---

## 1. Quick repo-side checks (after env is filled)

From the repo root (loads `.env.local` / `.env` if present):

```bash
npm run ghl:operator-check
```

Optional: verify token can read the configured location (still **no** response body printed):

```bash
npm run ghl:operator-check -- --ping
```

- **401 / 403:** token wrong, expired, or missing **location** scope for the Private Integration.
- **404:** `GHL_LOCATION_ID` does not match a location the token can access.

---

## 2. Reference env contract (M2M Team Leads)

Use the IDs your sub-account actually shows in GHL; the values below are the **intended** production contract (confirm in GHL before treating as canonical):

| Variable | Intended value (verify in GHL UI) |
|----------|-----------------------------------|
| `GHL_LOCATION_ID` | `XP2xuSYrcyWrQvtypMlx` |
| `GHL_CF_DOB` | `vxr8bExc2U6lZnl4NBRh` |
| `GHL_CF_ADDRESS` | `6BxhMhqYNc4h9dJ7EehM` (field label: **Property Address**) |
| `GHL_CF_URGENCY` | `2L3vthC9f5mvV8mriGVo` (**TEXT** urgency field, not the dropdown field) |
| `GHL_CF_LEAD_TYPE` | `2mWB1HfGmUQV57n8WRSs` |
| `GHL_CF_UTM_*` | four IDs as in `.env.example` / your runbook |
| Pipelines / stages | buyer + seller pipeline IDs and **New Inquiry** stage UUIDs |

If any ID is copied from another sub-account or an old sandbox, GHL will often return **422** or **400** on upsert.

---

## 3. Hidden assumptions the website makes (important)

These are **not** configurable per sub-account in code without a code change:

### 3.1 Lead type custom field value

- The API sends **`Buyer`** or **`Seller`** (capital **B** / **S**, rest lowercase) in the custom field bound to `GHL_CF_LEAD_TYPE`.
- GHL must accept that string: either a **text** field or a **single option** whose stored value is exactly `Buyer` / `Seller`. If GHL only has `buyer` / `seller` or different labels, upsert can fail.

**Code:** [`lib/ghl/lead-mapping.ts`](../lib/ghl/lead-mapping.ts) (`leadType === "buyer" ? "Buyer" : "Seller"`).

### 3.2 Date of birth

- **Optional** on `POST /api/submit-lead`. Full-intake forms use shared **month / day / year** selects ([`M2mLeadDobField`](../components/m2m-lead-form-fields.tsx)) that submit **`YYYY-MM-DD`** (min year **1920**, no future dates). Short campaign forms may omit DOB; the custom field is then **not** sent.
- The field in GHL should be **date** or **text** compatible with `YYYY-MM-DD` when populated.

**Code:** [`lib/ghl/validate.ts`](../lib/ghl/validate.ts) (`submitLeadRequestSchema` superRefine); [`lib/m2m-dob.ts`](../lib/m2m-dob.ts).

### 3.3 Phone

- **Optional** on the API. When provided, normalized to **E.164** when possible (e.g. US 10 digits → `+1…`). If the user enters fewer than 10 digits, validation fails with a field error.
- When absent or empty, **`phone` is omitted** from the GHL upsert body so matching can rely on **email** (per GHL upsert behavior).

**Code:** [`lib/ghl/validate.ts`](../lib/ghl/validate.ts) (`normalizePhoneToE164`); [`lib/ghl/client.ts`](../lib/ghl/client.ts) (`upsertContact`).

### 3.4 Property Address (`GHL_CF_ADDRESS`)

- Maps to the GHL contact field labeled **Property Address** (per account decision).
- **Omitted** when empty (e.g. pure buyer minis with no address). That is intentional; do not require address in GHL for those paths unless product changes. Optional buyer **context** may appear in a **contact note** or timeline field instead of this address field.

### 3.5 Urgency (`GHL_CF_URGENCY`)

- Maps to the **free-text** urgency field, **not** the dropdown field ID. Timeline strings and passive defaults (**“Not sure yet”**, **“Just exploring”**) live in [`lib/m2m-lead-urgency.ts`](../lib/m2m-lead-urgency.ts). **Short forms** default to “Not sure yet” so the TEXT field is almost always populated; users can change it without an extra required field.
- **Operator logs:** Vercel logs include `[ghl] urgency_meta` with `explicit: true|false` (from JSON `urgency_explicit`) and `valueBucket`: `none` | `passive_default` | `passive_explicit` | `timeline`. **`passive_default`** means the visitor did not change the default timeline select.
- **Where to look in GHO:** Contact record → custom fields → the TEXT field bound to `GHL_CF_URGENCY` (not the dropdown, if you have both). If the value is missing, verify env ID and that no workflow clears the field after create.

**Surface list:** [`docs/M2M_LEAD_CAPTURE_MATRIX.md`](./M2M_LEAD_CAPTURE_MATRIX.md).

### 3.6 UTM fields

- Optional. Empty UTM params are **not** sent as custom field entries (omitted entirely).

### 3.7 Tags

- Env vars `GHL_TAG_LEAD_BUYER` and `GHL_TAG_LEAD_SELLER` are **comma-separated lists** of tag names.
- Names must match GHL **byte-for-byte** (spaces, hyphens, casing). Common mistake: pasting from Word with an **en dash** (`–`) instead of ASCII hyphen (`-`).
- **Intended names:** `M2M - Buyer` and `M2M - Seller` (hyphen + spaces as in GHL).
- If a tag list is **empty**, the site **skips** the tags API call for that lead type (contact still upserts). Empty env is easy to misread as “success” in GHL when no tags appear.

### 3.8 Pipelines / opportunities

- All **four** of `GHL_BUYER_PIPELINE_ID`, `GHL_SELLER_PIPELINE_ID`, `GHL_BUYER_STAGE_NEW_INQUIRY_ID`, `GHL_SELLER_STAGE_NEW_INQUIRY_ID` must be set for **opportunity** creation.
- If any one is missing, behavior is **degraded by design:** contact upsert + tags (if any), then log `opportunity_skipped`.

### 3.9 Request order (for log triage)

1. `POST /contacts/upsert`
2. `POST /contacts/:id/tags` (if there is at least one tag)
3. `POST /opportunities/` (if pipelines complete)
4. `POST /contacts/:id/notes` (if the website sent `notes` in JSON)

**Partial success:** If step 1 succeeds but step 2, 3, or 4 fails, the API still returns **`ok: true`** with optional **`warnings`**: `tags_failed`, `opportunity_failed`, `note_failed`. The UI shows a calm “Heads up” panel with the **`correlationId`**. Vercel logs: `[ghl] tags_failed_partial`, `[ghl] opportunity_failed_partial`, `[ghl] contact_note_failed_partial`.

A failure on step 1 returns **`ok: false`** with `failed_step: "contacts_upsert"` (no contact ID in JSON).

### 3.10 Duplicate / merge log hints

On `crm_duplicate_or_merge`, server logs may include **`logDuplicateHint`**: `email` | `phone` | `merge` | `unknown` (derived from sanitized upstream text only). Use with **`correlationId`** to match the `[ghl] upstream_error` line in Vercel.

---

## 4. Interpreting production failures (HTTP status + `code`)

The browser receives **user-safe** `error` strings and a machine **`code`** for UI copy. Common CRM-related codes from [`lib/ghl/crm-user-message.ts`](../lib/ghl/crm-user-message.ts):

| `code` | Typical HTTP | Meaning (high level) |
|--------|----------------|----------------------|
| `crm_validation` | 400 | GHL rejected payload (format, field value, tag, pipeline, etc.) — check env + field definitions |
| `crm_duplicate_or_merge` | 400 | Duplicate / merge wording from GHL or **409** — user may already exist in the sub-account |
| `crm_auth` | 502 | **401 / 403** from GHL — token, scope, or location |
| `crm_rate_limit` | 429 | Too many requests |
| `crm_server` | 502 | GHL **5xx** |
| `crm_unreachable` | 502 | Other upstream failure, **or** transport error (**HTTP status 0** / fetch failure) |

**Operators** still triage with:

| Source | Fields |
|--------|--------|
| Browser **Network** tab → `POST /api/submit-lead` JSON | `correlationId`, `code`, `error`, optional `failed_step` (`contacts_upsert` / `contacts_tags` / `opportunities_create`), optional `crm_http_status` (note: contact note creation failures are log-only, not a failed response) |
| **Vercel** logs | Search `correlationId` and `[ghl]` — `API error` includes `path`, `status`, `statusBucket`, `upstreamDetail`, `bodyPreview` (truncate, no token); **`upstream_error`** includes **`crmUserCode`** (classified, no PII) |

**`crm_http_status` (rough guide):**

- **401 / 403:** token or location scope.
- **422 / 400** on upsert: field IDs, field types, or **value** mismatch (lead type string, DOB format, etc.).
- Failure on **tags** path: tag name mismatch or tag API error.
- Failure on **opportunities:** pipeline/stage IDs or stage not in pipeline.

See also [troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md](./troubleshooting/COMMON_ERRORS_QUICK_REFERENCE.md).

---

## 5. Dry run (`GHL_DRY_RUN=true`)

- No HTTP calls to GHL; responses are **synthetic** success.
- Server injects placeholder custom field IDs if real `GHL_CF_*` are missing — **do not** use dry-run env shape as proof of production config.
- Use for **UI and JSON contract** testing only.

---

## 6. Exact live verification after deploy

1. Run **`npm run ghl:operator-check`** locally with the same values as Vercel (or validate in Vercel env UI).
2. Optionally **`npm run ghl:operator-check -- --ping`**.
3. In production, submit **one buyer** test (`/home-search` or `/buy`) and **one seller** test (`/cma-form` or `/free-home-valuation` form).
4. For each response, note **`correlationId`** (even on success, if you add logging — success path logs it in Vercel).
5. In GHL: contact, custom fields (especially **Lead type**, **DOB** when the form collected it, **Property Address** when sent), **tags**, and **opportunity** (if all four pipeline vars set).

If failures persist after env matches this doc, use the response **`code`** and Vercel `[ghl]` logs (`crmUserCode`, `upstreamDetail`) — remaining issues are usually **token scopes, field definitions, tag names, or pipeline objects in GHL** unless logs show `internal_error`.

---

## 7. Related files (code)

- [`lib/ghl/config.ts`](../lib/ghl/config.ts) — env loading, tag parsing, pipeline completeness
- [`lib/ghl/lead-mapping.ts`](../lib/ghl/lead-mapping.ts) — custom field list + tag resolution
- [`lib/ghl/crm-user-message.ts`](../lib/ghl/crm-user-message.ts) — classify GHL failures → user-safe `code` + `error`
- [`lib/ghl/client.ts`](../lib/ghl/client.ts) — LeadConnector requests
- [`lib/ghl/submit-lead.ts`](../lib/ghl/submit-lead.ts) — orchestration + logging
- [`app/api/submit-lead/route.ts`](../app/api/submit-lead/route.ts) — HTTP status + JSON errors (`correlationId`, `code`)
- [`lib/m2m-lead-submit-error-copy.ts`](../lib/m2m-lead-submit-error-copy.ts) — alert copy per `code`
