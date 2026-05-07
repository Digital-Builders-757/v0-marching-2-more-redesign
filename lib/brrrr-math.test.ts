import { describe, expect, it } from "vitest"

import {
  computeBrrrrMetrics,
  monthlyDebtService,
  resolveSignal,
  validateBrrrrInputs,
  type BrrrrDealInputs,
} from "./brrrr-math"

describe("monthlyDebtService", () => {
  it("matches standard 30yr fixed approximation (100k @ 6%)", () => {
    const pmt = monthlyDebtService(100_000, 6, 30)
    expect(pmt).toBeGreaterThan(599)
    expect(pmt).toBeLessThan(601)
  })

  it("returns straight-line repayment when rate is zero", () => {
    expect(monthlyDebtService(120_000, 0, 10)).toBeCloseTo(1000, 8)
  })
})

describe("computeBrrrrMetrics", () => {
  const base: BrrrrDealInputs = {
    purchasePrice: 213_000,
    closingCosts: 0,
    rehabBudget: 0,
    holdingCostsTotal: 0,
    monthlyRent: 1400,
    annualPropertyTaxes: 2400,
    annualInsurance: 1200,
    monthlyHoa: 0,
    monthlyPropertyManagement: 112,
    monthlyMaintenanceReserve: 100,
    afterRepairValue: 265_000,
    ltvPercent: 75,
    annualInterestPercent: 6.925,
    loanTermYears: 30,
    refinanceFees: 4000,
    existingDebtPayoff: 0,
  }

  it("computes capital stack consistent with refinance proceeds model", () => {
    const m = computeBrrrrMetrics(base)
    expect(m.totalProjectCost).toBe(213_000)
    expect(m.refiLoanAmount).toBeCloseTo(198_750, 8)
    expect(m.capitalRecaptured).toBeCloseTo(194_750, 8)
    expect(m.cashLeftInDeal).toBeCloseTo(18_250, 8)
    expect(m.percentRecaptured).toBeCloseTo(194_750 / 213_000, 6)
    expect(Math.sign(m.monthlyCashFlow)).toBe(-1)
    expect(resolveSignal(m.percentRecaptured, m.monthlyCashFlow)).toBe("caution")
  })
})

describe("validateBrrrrInputs", () => {
  it("flags invalid LTV and missing purchase", () => {
    const issues = validateBrrrrInputs({
      purchasePrice: 0,
      closingCosts: 0,
      rehabBudget: 0,
      holdingCostsTotal: 0,
      monthlyRent: 1000,
      annualPropertyTaxes: 1000,
      annualInsurance: 1000,
      monthlyHoa: 0,
      monthlyPropertyManagement: 0,
      monthlyMaintenanceReserve: 0,
      afterRepairValue: 200000,
      ltvPercent: 101,
      annualInterestPercent: 7,
      loanTermYears: 30,
      refinanceFees: 0,
      existingDebtPayoff: 0,
    })
    const fields = issues.map((i) => i.field)
    expect(fields).toContain("purchasePrice")
    expect(fields).toContain("ltvPercent")
  })
})

describe("resolveSignal", () => {
  it("returns strong only when pct and cash flow are favorable", () => {
    expect(resolveSignal(0.72, 100)).toBe("strong")
    expect(resolveSignal(0.72, -50)).toBe("caution")
  })

  it("returns neutral in mid band with positive cash flow", () => {
    expect(resolveSignal(0.55, 50)).toBe("neutral")
  })

  it("returns caution when recapture is thin", () => {
    expect(resolveSignal(0.4, 200)).toBe("caution")
  })
})
