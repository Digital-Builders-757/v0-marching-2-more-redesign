# Marching 2 More — GHL remaining gaps

**~60-second read.** Separates what is **done in the repo** from what **requires GHL admin / env** and what is **left to validate**.

| Read next | Purpose |
|-----------|---------|
| [M2M_GHL_LIVE_CUTOVER_RUNBOOK.md](./M2M_GHL_LIVE_CUTOVER_RUNBOOK.md) | Ordered env + test sequences |
| [M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md](./M2M_GHL_ACCOUNT_SETUP_CHECKLIST.md) | Account-side checklist |
| [WORK_ORDER.md](./WORK_ORDER.md) — section **GHL integration — status** | Full pass summary |

---

## Done (in repo)

- `POST /api/submit-lead` (Node) + `lib/ghl/` (config, validate, client, submit orchestration).
- Lead forms wired: `/cma-form`, `/contact-us`, `/buy`, `/sell`, `/home-search`, `/free-home-valuation`, `/facing-foreclosure`, `/downsizing-your-home` (fallback), `/improve-your-credit` (local playbook path).
- UTM capture, `source_path`, buyer/seller typing, optional `notes` / `address` / `urgency`.
- **`getPrimaryConsultationBookUrl()`** — single booking pattern; GHL URL when set, else Calendly fallback.
- Server logs: `[ghl]` + `correlationId`; pipeline env gaps enumerated when opportunities skipped.
- Docs: runbook, this file, troubleshooting rows; `npm run ci` green.

---

## In progress / partial

- **Public URLs in code:** `GOHIGHLEVEL_BOOKING_URL` and three `GOHIGHLEVEL_QUIZ_*` remain **`REPLACE_WITH_*`** strings until marketing/GHL supply links. Site degrades safely (fallback forms / no broken iframes).
- **Opportunities:** creation only when **all four** pipeline/stage env vars are set; otherwise contact + tags only (by design).

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

- E2E or scripted smoke tests for `/api/submit-lead` (Playwright when prioritized).
- Optional: post `notes` to GHL conversation via Notes API (currently server log only).
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
