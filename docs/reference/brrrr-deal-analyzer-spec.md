# BRRRR Deal Analyzer — reference math (first-party UI)

Complete visual/copy source was an external HTML artifact; those tokens and layout were ported into React. This doc records the **financial logic** implemented in [`lib/brrrr-math.ts`](../../lib/brrrr-math.ts) so behavior stays reviewable without the original file.

## Inputs

| Field | Meaning |
|--------|---------|
| `purchasePrice` | Acquisition purchase price ($) |
| `closingCosts` | Closing costs ($) |
| `rehabBudget` | Renovation budget ($) |
| `holdingCostsTotal` | Holding costs during rehab ($) |
| `monthlyRent` | Stabilized monthly rent ($) |
| `annualPropertyTaxes` | Annual property taxes ($) |
| `annualInsurance` | Annual hazard insurance ($) |
| `monthlyHoa` | Monthly HOA ($) |
| `monthlyPropertyManagement` | Monthly property management fee ($) |
| `monthlyMaintenanceReserve` | Monthly maintenance reserve ($) |
| `afterRepairValue` | ARV for refinance underwriting ($) |
| `ltvPercent` | Refinance LTV (% of ARV), e.g. `75` |
| `annualInterestPercent` | Note rate on refinance loan (%), e.g. `7` |
| `loanTermYears` | Amortization term (years) |
| `refinanceFees` | Refinance closing costs / fees deducted from proceeds ($) |
| `existingDebtPayoff` | Existing debt paid off at refi (“original debt”), e.g. first lien payoff ($); `0` for all-cash purchase |

## Core outputs

All currency values are **numbers in dollars** (not cents).

1. **`totalProjectCost`** = `purchasePrice + closingCosts + rehabBudget + holdingCostsTotal`

2. **`refiLoanAmount`** = `afterRepairValue * (ltvPercent / 100)`

3. **`capitalRecaptured`** = `max(0, refiLoanAmount - refinanceFees - existingDebtPayoff)`

4. **`cashLeftInDeal`** = `totalProjectCost - capitalRecaptured`

5. **`operatingExpensesAnnual`** =
   `(annualPropertyTaxes + annualInsurance) + ((monthlyHoa + monthlyPropertyManagement + monthlyMaintenanceReserve) * 12)`

6. **`monthlyOperatingExpenses`** = `operatingExpensesAnnual / 12`

7. **`annualGrossRent`** = `monthlyRent * 12`

8. **`noiAnnual`** = `annualGrossRent - operatingExpensesAnnual`

9. **`noiMonthly`** = `noiAnnual / 12`

10. **`debtServiceMonthly`** = amortizing **P&I** on `refiLoanAmount` at `annualInterestPercent` / 12 per period and `loanTermYears * 12` payments.

11. **`monthlyCashFlow`** = `noiMonthly - debtServiceMonthly`

12. **`annualCashFlow`** = `monthlyCashFlow * 12`

13. **`cashOnCashReturn`** = `annualCashFlow / cashLeftInDeal` when `cashLeftInDeal > 0`; otherwise `undefined` (division not meaningful).

14. **`percentRecaptured`** = `capitalRecaptured / totalProjectCost` when `totalProjectCost > 0`; else `0`.

## Signal (Strong / Neutral / Caution)

Heuristic aligned with UX labels (“70% = Strong BRRRR” benchmark on capital recaptured):

- **strong**: `percentRecaptured >= 0.70` **and** `monthlyCashFlow >= 0`
- **caution**: `monthlyCashFlow < 0` **or** `percentRecaptured < 0.45`
- **neutral**: everything else

## Validation (minimum viable analyze)

Analyze is enabled when:

- Purchase price, rehab budget, **monthly rent**, ARV, LTV (`> 0`, `<= 100`), interest (`>= 0`), term (`> 0` years),
- Closing, holding costs, taxes, insurance, HOA, PM, reserve (**>= 0**),
- refinance fees **>= 0**, existing debt payoff **>= 0**

All fields are surfaced in the UI; missing/bad numeric input blocks analyze with accessible errors.
