# Lead capture surfaces matrix

**Last updated:** 2026-04-24 (hardening pass)

| Route / component | Funnel | Submission | Error UI | DOB | Urgency | Duplicate notes |
|-------------------|--------|-------------|----------|-----|---------|-----------------|
| `app/cma-form/page.tsx` | Seller | `submitLeadToApi` | `M2mLeadSubmitErrorAlert` | `M2mLeadDobField` (MDY selects) | Timeline radios → API | Upsert usually merges on email |
| `app/contact-us/page.tsx` | User choice | `submitLeadToApi` | Alert | `M2mLeadDobField` | `M2mLeadUrgencySelect` full | Same |
| `components/contact.tsx` | User choice | `submitLeadToApi` | Alert | — | Short-form urgency (default passive) | Same |
| `components/contact/contact-form.tsx` | Seller | `submitLeadToApi` | Alert | — | Short-form urgency | Same |
| `components/buy/buy-lead-mini.tsx` | Buyer | `submitLeadToApi` | Alert | `M2mLeadDobField` | Full select | Same |
| `components/home-search/home-search-buyer-lead.tsx` | Buyer | `submitLeadToApi` | Alert | `M2mLeadDobField` | Full select | Same |
| `components/sell/sell-valuation-lead-mini.tsx` | Seller | `submitLeadToApi` | Alert | `M2mLeadDobField` | Full select | Same |
| `components/free-home-valuation/valuation-seller-lead-form.tsx` | Seller | `submitLeadToApi` | Alert | `M2mLeadDobField` | Full select | Same |
| `components/downsizing-your-home/downsizing-fallback-lead.tsx` | Seller | `submitLeadToApi` | Alert | `M2mLeadDobField` | Full select | Same |
| `components/downsizing-your-home/downsizing-guide-form.tsx` | Seller | `submitLeadToApi` | Alert | — | Short-form urgency | Same |
| `components/facing-foreclosure/pre-foreclosure-form.tsx` | Seller | `submitLeadToApi` | Alert | `M2mLeadDobField` | Full select | Same |
| `components/improve-your-credit/credit-playbook-form.tsx` | Buyer | `submitLeadToApi` | Alert | `M2mLeadDobField` | Full select | Same |
| `components/va-loan-benefits/va-lead-form.tsx` | Buyer | `submitLeadToApi` | Alert | — | Short-form urgency | Same |
| `components/fha-loan/fha-quote-form.tsx` | Buyer | `submitLeadToApi` | Alert | — | Short-form urgency | Same |
| `components/navigating-divorce/divorce-aerial-lead.tsx` | Seller | `submitLeadToApi` | Alert | — | Short-form urgency | Same |
| `app/resources/resources-checklist-form.tsx` | Buyer | `submitLeadToApi` | Alert | — | Short-form urgency | Same |

**API:** `POST /api/submit-lead` only for production lead capture above.

**Partial success:** Success responses may include `warnings` (e.g. `tags_failed`, `opportunity_failed`, `note_failed`) when the contact upsert succeeded but a later step failed. See `lib/ghl/submit-lead.ts`.

**Urgency:** Short forms use passive defaults (“Not sure yet”, “Just exploring”) plus timeline options; `urgency_explicit: true` when the user changes away from the initial default. Logged server-side only.

**Excluded:** Routes without `submitLeadToApi` are intentionally not CRM-wired (quiz embeds, external links only) — see `docs/M2M_GHL_INTEGRATION_MASTER_PLAN.md`.
