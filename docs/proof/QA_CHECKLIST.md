# QA checklist (pointers only)

Avoid maintaining a separate full matrix here.

1. **Funnel / embed / CTA sanity** → [M2M_FUNNEL_SMOKE_CHECKLIST.md](../M2M_FUNNEL_SMOKE_CHECKLIST.md)
2. **Live CRM verification (GHO)** → [M2M_LEAD_CAPTURE_QA.md](../M2M_LEAD_CAPTURE_QA.md) + [M2M_GHL_OPERATOR_VERIFICATION.md](../M2M_GHL_OPERATOR_VERIFICATION.md)
3. **Engineering manual matrix** → [internal-hardening-findings.md](../internal-hardening-findings.md) §5

Automated suites: **`npm run ci`** (includes Playwright — see [E2E_SMOKE_PATHS.md](./E2E_SMOKE_PATHS.md)).
