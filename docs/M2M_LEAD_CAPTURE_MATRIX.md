# Lead capture — route and surface matrix

**Last updated:** 2026-05-07

**API:** All production lead capture in this table posts **only** to `POST /api/submit-lead` (via `submitLeadToApi` in [`lib/m2m-lead-submit.ts`](../lib/m2m-lead-submit.ts)). No GHL keys in the browser.

**Strict success:** `ok: true` now means required CRM steps completed for that lead submission (contact upsert + tags + opportunity + contact note). Any required step failure returns `ok: false` with `code`, `correlationId`, and (when available) `failed_step`.

**Urgency (TEXT):** The site writes timeline strings to the **TEXT** custom field `GHL_CF_URGENCY`, not a separate dropdown. **Short** forms use passive defaults in [`lib/m2m-lead-urgency.ts`](../lib/m2m-lead-urgency.ts) (“Not sure yet” / “Just exploring”) unless the user changes the control — server logs `[ghl] urgency_meta` with `explicit` and `valueBucket` for support.

**GHO UI:** A field can be **saved** and still **not appear** on the default contact screen until that custom field is on the **contact layout** in GoHighLevel. See [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md) §3.2, §3.5, §3.10.

**Static quizzes** (`public/quizzes/...`) post the same JSON contract; they set **`source_path`** to the parent campaign route and include **`urgency`** (quiz timeline / landing intent) so `GHL_CF_URGENCY` stays populated like React forms.

**Excluded (not in matrix):** Quiz embeds, external-only links, and pages without `submitLeadToApi` (see [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md)).

---

## Route-by-route (live-wired `app` routes)

Marketing funnel copy can be foreclosure/divorce/downsizing, but payload routing still uses `lead_type` (`buyer` / `seller`) for CRM pipeline/tag behavior.

| Route | Funnel | Primary UI | Name, email, phone | DOB | Address → Property | Urgency (TEXT) | Notes → contact | Expected GHO outcome (when env complete) |
|-------|--------|------------|--------------------|-----|-------------------|---------------|-----------------|----------------------------------------|
| `/buy` | Buyer | `BuyLeadMini` (Buy CTA) | Y | Y (`M2mLeadDobField`) | — | Full timeline select; value explicit when set | Optional context / area / budget | **M2M Buyer Pipeline**, **New Inquiry**, tag **M2M - Buyer**; `Lead type` = Buyer; optional UTMs; opportunity name `M2M Web — Buyer — {name}` |
| `/home-search` | Buyer | `HomeSearchBuyerLead` | Y | Y | — | Full select | Optional context | Same as buyer row |
| `/free-home-valuation` | Seller | `ValuationSellerLeadForm` | Y | Y | Optional one-line / property | Full select | Optional “before we call” | **M2M Seller Pipeline**, **New Inquiry**, **M2M - Seller**; `Lead type` = Seller |
| `/sell` | Seller | `SellValuationLeadMini` (SellValuation) | Y | Y | Optional one-line | Full select | — | Same as seller row |
| `/cma-form` | Seller | `app/cma-form/page` | Y | Y | Composed street / city / ZIP | Timeline radios (explicit choices) | Property condition, goals, etc. | Same as seller row; strong address + long notes when filled |
| `/contact-us` | Buyer or seller (user) | `app/contact-us/page` | Y | Y | If seller path, optional | Full `M2mLeadUrgencySelect` | Free message | Tag + pipeline by lead type; **`?intent=buyer`** forces **buyer** CRM on sync; **`?intent=seller`** or **`?intent=consultation`** forces **seller**; other query params (e.g. UTMs) **do not** reset the radio — default first paint is **seller** |
| `/downsizing-your-home` | Seller | (1) `DownsizingFallbackLead` (2) `DownsizingGuideForm` | Y | (1) Y (2) — | (1) optional (2) ship-to → `address` when set | (1) full (2) short-form default + options | (1) optional context (2) guide + instructions | Same as seller row; (2) may populate **Property Address** when ship-to set |
| `/facing-foreclosure` | Seller | `PreForeclosureUnifiedForm` (`pre-foreclosure-form.tsx`) — hero + final CTA | Y | — | Required (address or ZIP) | Intent-derived TEXT (`urgency`); **`foreclosure_intent`**: `guide` / `speak_now` / `both` | Optional message | Same as seller row; optional tags **`GHL_TAG_FORECLOSURE_INTENT_*`**; optional CF **`GHL_CF_FORECLOSURE_INTENT`**; on-screen + link PDF **`m2m-pre-foreclosure-guide.pdf`** |
| `/improve-your-credit` | Buyer | `CreditPlaybookForm` | Y | Y | — | Full select (when planning to buy) | Playbook request + optional line | Same as buyer row; `source_path` `/improve-your-credit` |
| `/va-loan-benefits` | Buyer | `VALeadForm` | Y | — | — | Short-form; passive default if unchanged | Message + VA line | Same as buyer row |
| `/fha-loan` | Buyer | `FhaBuyerQuizSection` (static `public/quizzes/fha-loan/` iframe when configured) | Y | — | — | Quiz timeline / intent | Structured quiz fields + optional notes | Same as buyer row; see FHA quiz payload in `lib/ghl` validation |
| `/navigating-divorce` | Seller | `DivorceAerialLead` | Y | — | — | Short-form | Message + guide request | Same as seller row |
| `/resources` | Buyer | `ResourcesChecklistForm` | Y | — | — | Short-form | Checklist request | Same as buyer row |

`/` **(homepage)** does not currently render a `submitLeadToApi` form; the header/footer link **Contact** routes visitors to booking / `/contact-us` style flows. For parity, **`components/contact.tsx`** and **`components/contact/contact-form.tsx`** still call `submitLeadToApi` in code but are **not mounted** on any `app` route in this tree (`ContactForm` is only used from unused `ContactUsParity`).

**Legacy path:** `GET /contact` **redirects** to `/contact-us`.

---

## Component reference (for code search)

| Component file | Funnel | DOB in UI | Urgency style | Error surface |
|----------------|--------|------------|---------------|---------------|
| `app/cma-form/page.tsx` | Seller | Y | Radios | `M2mLeadSubmitErrorAlert` |
| `app/contact-us/page.tsx` | User | Y | Full select | Alert |
| `components/buy/buy-lead-mini.tsx` | Buyer | Y | Full select | Alert |
| `components/home-search/home-search-buyer-lead.tsx` | Buyer | Y | Full select | Alert |
| `components/sell/sell-valuation-lead-mini.tsx` | Seller | Y | Full select | Alert |
| `components/free-home-valuation/valuation-seller-lead-form.tsx` | Seller | Y | Full select | Alert |
| `components/downsizing-your-home/downsizing-fallback-lead.tsx` | Seller | Y | Full select | Alert |
| `components/downsizing-your-home/downsizing-guide-form.tsx` | Seller | — | Short-form | Alert |
| `components/facing-foreclosure/pre-foreclosure-form.tsx` | Seller | — | Intent-derived (`urgency`) | Alert |
| `components/improve-your-credit/credit-playbook-form.tsx` | Buyer | Y | Full select | Alert |
| `components/va-loan-benefits/va-lead-form.tsx` | Buyer | — | Short-form | Alert |
| `components/fha-loan/fha-buyer-quiz-section.tsx` | Buyer | — | Quiz-driven | Alert |
| `components/navigating-divorce/divorce-aerial-lead.tsx` | Seller | — | Short-form | Alert |
| `app/resources/resources-checklist-form.tsx` | Buyer | — | Short-form | Alert |
| `components/contact.tsx` | User (interest) | — | Short-form | Alert |
| `components/contact/contact-form.tsx` | Seller | — | Short-form | Alert |

## Related

- [M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md](./M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md) — end-to-end behavior
- [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md) — business scope and phases
- [M2M_LEAD_CAPTURE_QA.md](./M2M_LEAD_CAPTURE_QA.md) — manual QA template
