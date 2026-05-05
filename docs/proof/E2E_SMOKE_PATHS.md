# E2E / automated smoke paths (repo truth)

Runs as part of **`npm run ci`** via **`npm run test:e2e`** (Playwright; see **`playwright.config`** for `next start` wiring).

## `tests/e2e/submit-lead-api.spec.ts` — API contract

- Rejects malformed JSON (`400`, `bad_request`).
- Validation errors (`400`, `validation_error`).
- Minimal valid POST: **`503` + `config_error`** when CRM env incomplete (GitHub Actions / typical CI); **`200` + `ok: true`** when full local `GHL_*` allows (optional local verification).

Does **not** require live production GHO for CI green.

## `tests/e2e/funnel-regression.spec.ts` — pages + mocked form posts

Consultation CTAs (`M2M_CONTACT_CONSULTATION_PATH`), mobile menu parity, **`/more-investments`** `#investor-tools`.

**Stable page-load paths** (`data-testid` per [`lib/m2m-funnel-regression.ts`](../../lib/m2m-funnel-regression.ts)):

- `/facing-foreclosure`
- `/navigating-divorce`
- `/downsizing-your-home`
- `/improve-your-credit`
- `/fha-loan`
- `/more-investments`

**Quiz / embed:**

- Downsizing: static **`/quizzes/downsizing-your-home/quiz.html`** iframe visible.
- Divorce: **`/quizzes/navigating-divorce/index.html`** + `#guide-form`.
- Foreclosure: quiz region + fallback markup when remote embed unavailable.

**Forms (XHR to `POST /api/submit-lead` stubbed in test):**

- Facing foreclosure (success + failure → alert, no false thank-you).
- Navigating divorce guide form.
- Improve your credit playbook.
- FHA quote form.

**Manual / out of repo:** production GHL field layout, VA campaign-only paths (`/va-loan-benefits` is not in the automated page-load registry above).
