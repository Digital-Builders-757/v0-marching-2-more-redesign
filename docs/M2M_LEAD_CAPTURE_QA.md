# Lead capture — manual QA template

Use **live GHL** (contact + opportunity + custom fields) as source of truth, not only the browser success message.

**After each scenario:** record `correlationId` from the success JSON or error alert, then locate the same id in Vercel logs if needed.

## Quick live script

1. **New buyer:** `/home-search` or `/buy` — buyer pipeline, stage **New Inquiry**, buyer tags, `GHL_CF_URGENCY` TEXT populated, `GHL_CF_LEAD_TYPE` = Buyer, optional note.
2. **New seller:** `/free-home-valuation` or `/sell` mini — seller pipeline, seller tags, urgency TEXT, lead type Seller.
3. **Duplicate email:** repeat submission with same email (same route) — note whether GHL **updates** contact vs error; capture `code` if any.
4. **Duplicate phone:** same phone, different email — document GHL behavior (merge, error, or new contact).
5. **Buyer → seller crossover:** create buyer, then submit seller route with same email — document lead type field + opportunities.

## Short-form urgency defaults

On VA, FHA, divorce, downsizing guide, resources checklist, home Contact, ContactForm: default **“Not sure yet”** should appear in **`GHL_CF_URGENCY`** without the user opening the select. Changing to a timeline string should set `urgency_explicit: true` in logs (`[ghl] urgency_meta`).

## Partial success drill (staging)

Temporarily misconfigure a non-critical step (e.g. invalid tag name) and confirm:

- Response: `ok: true`, `warnings` contains `tags_failed`, UI shows **Heads up** panel.
- Contact still created / updated in GHL.

## Duplicate / conflict matrix (fill during QA)

| Case | Expected in GHL | Notes |
|------|-------------------|--------|
| Same email resubmit | | |
| Same phone resubmit | | |
| Email A + phone B vs existing split | | |
| Buyer then seller same email | | |

## DOB

On mobile + desktop, pick a birth year **before 2000** quickly (no “stuck in current year” picker). Submit CMA or contact-us with DOB and confirm `GHL_CF_DOB`.
