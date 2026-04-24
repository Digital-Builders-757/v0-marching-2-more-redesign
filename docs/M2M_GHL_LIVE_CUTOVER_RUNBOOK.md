# Marching 2 More — GoHighLevel live cutover runbook

**Purpose:** Step-by-step order for plugging real GHL values into the website and validating end-to-end. Companion docs: [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md) (assumptions + triage), [M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md) (account-side tasks), [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md) (architecture), [`.env.example`](../.env.example), [M2M_GHL_REMAINING_GAPS.md](./M2M_GHL_REMAINING_GAPS.md) (post-pass checklist).

---

## 0. Repo-side sanity check (operators)

After filling `.env.local` (or before promoting Vercel env):

```bash
npm run ghl:operator-check
npm run ghl:operator-check -- --ping
```

See [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md). No secrets are printed; `--ping` confirms token + `GHL_LOCATION_ID` can read the location (HTTP status only).

---

## 1. Env vars to collect (Vercel + local `.env.local`)

Copy names from [`.env.example`](../.env.example). Minimum for **live** submissions:

| Variable | Role |
|----------|------|
| `GHL_API_KEY` | Private Integration token (server-only) |
| `GHL_LOCATION_ID` | Sub-account / location ID |
| `GHL_CF_*` | Eight contact custom field IDs (DOB, address, urgency, lead type, four UTM fields) |
| `GHL_BUYER_PIPELINE_ID` / `GHL_SELLER_PIPELINE_ID` | Pipeline IDs |
| `GHL_BUYER_STAGE_NEW_INQUIRY_ID` / `GHL_SELLER_STAGE_NEW_INQUIRY_ID` | First-stage IDs |
| `GHL_TAG_LEAD_BUYER` / `GHL_TAG_LEAD_SELLER` | Comma-separated tag names (must exist in GHL) |

Optional: `GHL_PATH_TAGS`, `GHL_API_BASE_URL`, `GHL_API_VERSION`.

**Dry-run (no CRM calls):** set `GHL_DRY_RUN=true`. Custom field envs can be omitted; the server injects placeholders.

**Public URLs (code, not env):** replace `REPLACE_WITH_*` strings in [`lib/m2m-site.ts`](../lib/m2m-site.ts) for booking and quiz embeds when links exist.

---

## 2. GHL account items to configure

Follow [M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md) in order: API access, custom fields, pipelines/stages, tags, workflows, notifications, calendars, optional quizzes.

---

## 3. Booking URLs

- Set **`GOHIGHLEVEL_BOOKING_URL`** in [`lib/m2m-site.ts`](../lib/m2m-site.ts) to the primary public GHL scheduling link (`https://...`).
- Site-wide “Book consultation” behavior uses **`getPrimaryConsultationBookUrl()`**: GHL when configured, otherwise Calendly (`CALENDLY_BOOK_URL`).

---

## 4. Quiz / embed URLs

In [`lib/m2m-site.ts`](../lib/m2m-site.ts):

- `GOHIGHLEVEL_QUIZ_CREDIT_URL`
- `GOHIGHLEVEL_QUIZ_DOWNSIZING_URL`
- `GOHIGHLEVEL_QUIZ_FORECLOSURE_URL`

Until each is a real `https://` URL, [`M2mLeadQuizSection`](../components/m2m-lead-quiz-section.tsx) shows fallback copy or local/fallback forms (no broken iframe).

---

## 5. Test sequence — seller lead

1. Unset or avoid `GHL_DRY_RUN` in the environment you are testing (or use dry-run first for smoke).
2. Open `/cma-form` (or `/sell` mini form).
3. Fill fields **as prompted on that form** (full-intake paths include phone and DOB; short campaign forms may only require name + email).
4. Submit.
5. **In GHL:** confirm contact upsert, tags, custom fields, and (if all four pipeline envs are set) a new opportunity on the **seller** pipeline at **New Inquiry** (or configured stage).

---

## 6. Test sequence — buyer lead

1. Open `/buy` (mini form), `/home-search`, `/va-loan-benefits`, `/fha-loan`, `/resources` (checklist), or `/improve-your-credit` (local playbook form when quiz URL not set).
2. Submit with valid data (each form’s required fields differ; name + email are always required by the API).
3. **In GHL:** verify **buyer** tags/pipeline/opportunity as configured.

---

## 7. Test sequence — contact us

1. Open `/contact-us` (optionally `?intent=buyer` or `?intent=seller`).
2. Submit the form.
3. **In GHL:** verify lead type field and path-based tags if using `GHL_PATH_TAGS`.

---

## 8. What to verify in GHL after each submit

- Contact record exists / updates (upsert).
- Custom fields populated (especially Lead Type, UTM fields).
- Tags applied (exact names).
- Opportunity created **only if** all four pipeline/stage env vars are set; otherwise contact + tags only (see server logs: `opportunity_skipped`).

---

## 9. Common failure modes

| Symptom | What to check |
|---------|----------------|
| **503** / “Lead capture is not configured” | Missing `GHL_API_KEY` / `GHL_LOCATION_ID` or required `GHL_CF_*` in live mode |
| **502** / generic CRM error | GHL rejected a step — in the browser Network response, copy **`correlationId`**, **`failed_step`**, **`crm_http_status`**. In **Vercel logs**, search the same `correlationId` and `[ghl]` (`path`, `statusBucket`, `upstreamDetail`, `bodyPreview`). See [M2M_GHL_OPERATOR_VERIFICATION.md §4](./M2M_GHL_OPERATOR_VERIFICATION.md#4-interpreting-production-failures-502--user-message) |
| Contact saved, **no opportunity** | Not all of `GHL_BUYER_PIPELINE_ID`, `GHL_SELLER_PIPELINE_ID`, `GHL_BUYER_STAGE_NEW_INQUIRY_ID`, `GHL_SELLER_STAGE_NEW_INQUIRY_ID` set — intentional degradation |
| **422** / validation from GHL | Wrong custom field IDs or value shapes — compare field IDs in GHL UI to env |
| Tags not applied | Tag names in env must match GHL **exactly** |
| Double booking confusion | Booking links should come only from `getPrimaryConsultationBookUrl()` in [`lib/m2m-site.ts`](../lib/m2m-site.ts) |

---

## 10. Rollback / fallback

- **Pause live CRM:** set `GHL_DRY_RUN=true` in Vercel (submissions succeed without upstream calls) **or** remove broken `GHL_*` and accept 503 until fixed (not ideal for production).
- **Booking:** if GHL URL is not ready, leave `GOHIGHLEVEL_BOOKING_URL` as placeholder; **`getPrimaryConsultationBookUrl()`** falls back to Calendly.
- **Revert code deploy:** roll back the Vercel deployment to the last known good build.

---

## Server logs (operators)

Successful path emits structured lines such as `submit_start`, `contact_upserted`, `tags_applied`, `opportunity_created` or `opportunity_skipped` with a **`correlationId`** — use it to match one browser submission to one request in logs. Do not paste raw logs containing lead PII into public channels.
