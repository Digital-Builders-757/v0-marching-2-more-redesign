/**
 * BRRRR calculator — formulas documented in docs/reference/brrrr-deal-analyzer-spec.md
 */

export type BrrrrDealInputs = {
  purchasePrice: number
  closingCosts: number
  rehabBudget: number
  holdingCostsTotal: number
  monthlyRent: number
  annualPropertyTaxes: number
  annualInsurance: number
  monthlyHoa: number
  monthlyPropertyManagement: number
  monthlyMaintenanceReserve: number
  afterRepairValue: number
  ltvPercent: number
  annualInterestPercent: number
  loanTermYears: number
  refinanceFees: number
  existingDebtPayoff: number
}

export type BrrrrSignal = "strong" | "neutral" | "caution"

export type BrrrrMetrics = {
  totalProjectCost: number
  refiLoanAmount: number
  capitalRecaptured: number
  cashLeftInDeal: number
  operatingExpensesAnnual: number
  monthlyOperatingExpenses: number
  annualGrossRent: number
  noiAnnual: number
  noiMonthly: number
  debtServiceMonthly: number
  monthlyCashFlow: number
  annualCashFlow: number
  cashOnCashReturn: number | undefined
  percentRecaptured: number
  signal: BrrrrSignal
}

export type BrrrrValidationIssue = {
  field: keyof BrrrrDealInputs | "general"
  message: string
}

const EPS = 1e-9

/** Fixed-rate monthly principal & interest (standard amortizing loan). */
export function monthlyDebtService(loanAmount: number, annualRatePercent: number, termYears: number): number {
  if (loanAmount <= EPS) return 0
  const n = Math.round(termYears * 12)
  if (n <= 0) return 0

  const r = annualRatePercent / 100 / 12
  if (r <= EPS) {
    return loanAmount / n
  }

  const pow = Math.pow(1 + r, n)
  return loanAmount * (r * pow) / (pow - 1)
}

export function computeBrrrrMetrics(inputs: BrrrrDealInputs): BrrrrMetrics {
  const totalProjectCost =
    inputs.purchasePrice +
    inputs.closingCosts +
    inputs.rehabBudget +
    inputs.holdingCostsTotal

  const refiLoanAmount = inputs.afterRepairValue * (inputs.ltvPercent / 100)

  const capitalRecaptured = Math.max(0, refiLoanAmount - inputs.refinanceFees - inputs.existingDebtPayoff)

  const cashLeftInDeal = totalProjectCost - capitalRecaptured

  const monthlyFixedOpex =
    inputs.monthlyHoa + inputs.monthlyPropertyManagement + inputs.monthlyMaintenanceReserve
  const operatingExpensesAnnual = inputs.annualPropertyTaxes + inputs.annualInsurance + monthlyFixedOpex * 12

  const annualGrossRent = inputs.monthlyRent * 12
  const noiAnnual = annualGrossRent - operatingExpensesAnnual
  const noiMonthly = noiAnnual / 12

  const monthlyOperatingExpenses = operatingExpensesAnnual / 12

  const debtServiceMonthly = monthlyDebtService(refiLoanAmount, inputs.annualInterestPercent, inputs.loanTermYears)

  const monthlyCashFlow = noiMonthly - debtServiceMonthly
  const annualCashFlow = monthlyCashFlow * 12

  const percentRecaptured = totalProjectCost > EPS ? capitalRecaptured / totalProjectCost : 0

  const cashOnCashReturn =
    cashLeftInDeal > EPS ? annualCashFlow / cashLeftInDeal : undefined

  const signal = resolveSignal(percentRecaptured, monthlyCashFlow)

  return {
    totalProjectCost,
    refiLoanAmount,
    capitalRecaptured,
    cashLeftInDeal,
    operatingExpensesAnnual,
    monthlyOperatingExpenses,
    annualGrossRent,
    noiAnnual,
    noiMonthly,
    debtServiceMonthly,
    monthlyCashFlow,
    annualCashFlow,
    cashOnCashReturn,
    percentRecaptured,
    signal,
  }
}

export function resolveSignal(
  percentRecaptured: number,
  monthlyCashFlow: number,
): BrrrrSignal {
  if (monthlyCashFlow < -EPS || percentRecaptured + EPS < 0.45) {
    return "caution"
  }
  if (percentRecaptured + EPS >= 0.7 && monthlyCashFlow >= -EPS) {
    return "strong"
  }
  return "neutral"
}

/** Block analyze until core economics are sane. */
export function validateBrrrrInputs(inputs: BrrrrDealInputs): BrrrrValidationIssue[] {
  const issues: BrrrrValidationIssue[] = []

  const reqPositive = (
    field: keyof BrrrrDealInputs,
    label: string,
    v: number,
    allowZero = false,
  ) => {
    if (!Number.isFinite(v)) {
      issues.push({ field, message: `${label} must be a valid number.` })
      return
    }
    if (v < 0) {
      issues.push({ field, message: `${label} cannot be negative.` })
      return
    }
    if (!allowZero && v <= EPS) {
      issues.push({ field, message: `${label} must be greater than zero.` })
    }
  }

  reqPositive("purchasePrice", "Purchase price", inputs.purchasePrice)
  reqPositive("rehabBudget", "Rehab budget", inputs.rehabBudget, true)
  reqPositive("afterRepairValue", "After repair value (ARV)", inputs.afterRepairValue)
  reqPositive("monthlyRent", "Monthly rent", inputs.monthlyRent)

  reqPositive("ltvPercent", "LTV %", inputs.ltvPercent)
  if (Number.isFinite(inputs.ltvPercent) && inputs.ltvPercent > 100) {
    issues.push({ field: "ltvPercent", message: "LTV % cannot exceed 100." })
  }

  if (!Number.isFinite(inputs.annualInterestPercent) || inputs.annualInterestPercent < 0) {
    issues.push({ field: "annualInterestPercent", message: "Interest rate must be zero or greater." })
  }

  reqPositive("loanTermYears", "Loan term", inputs.loanTermYears)

  const nonNegFields: Array<[keyof BrrrrDealInputs, string]> = [
    ["closingCosts", "Closing costs"],
    ["holdingCostsTotal", "Holding costs"],
    ["annualPropertyTaxes", "Annual property taxes"],
    ["annualInsurance", "Annual insurance"],
    ["monthlyHoa", "Monthly HOA"],
    ["monthlyPropertyManagement", "Monthly property management"],
    ["monthlyMaintenanceReserve", "Monthly maintenance reserve"],
    ["refinanceFees", "Refinance fees"],
    ["existingDebtPayoff", "Payoff / original debt"],
  ]

  for (const [field, label] of nonNegFields) {
    const v = inputs[field]
    if (!Number.isFinite(v)) {
      issues.push({ field, message: `${label} must be a valid number.` })
    } else if (v < 0) {
      issues.push({ field, message: `${label} cannot be negative.` })
    }
  }

  return issues
}
