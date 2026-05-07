"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useCallback, useMemo, useRef, useState } from "react"

import { M2mBrandLogo } from "@/components/m2m-brand-logo"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { BRRRR_DEFAULT_FIELDS, BrrrrInputFields, type BrrrrMoneyField, type BrrrrMoneyFieldValues } from "@/components/more-investments/brrrr-input-fields"
import { BRRRR_INVESTOR_TYPES, BrrrrGateForm, type BrrrrInvestorTypeId } from "@/components/more-investments/brrrr-gate-form"
import { BrrrrPartialResults } from "@/components/more-investments/brrrr-partial-results"
import { BrrrrFullResults } from "@/components/more-investments/brrrr-full-results"
import { parseMoneyInput, formatUsd0 } from "@/lib/brrrr-format"
import {
  computeBrrrrMetrics,
  validateBrrrrInputs,
  type BrrrrDealInputs,
  type BrrrrMetrics,
  type BrrrrValidationIssue,
} from "@/lib/brrrr-math"
import { submitLeadToApi, type SubmitLeadFailure } from "@/lib/m2m-lead-submit"
import { cn } from "@/lib/utils"

export type BrrrrPhase = "form" | "partial" | "gate" | "full"

function parseInputs(values: BrrrrMoneyFieldValues): BrrrrDealInputs | null {
  const n = (k: keyof BrrrrMoneyFieldValues) => parseMoneyInput(values[k])

  const nums = [
    n("purchasePrice"),
    n("closingCosts"),
    n("rehabBudget"),
    n("holdingCostsTotal"),
    n("monthlyRent"),
    n("annualPropertyTaxes"),
    n("annualInsurance"),
    n("monthlyHoa"),
    n("monthlyPropertyManagement"),
    n("monthlyMaintenanceReserve"),
    n("afterRepairValue"),
    n("ltvPercent"),
    n("annualInterestPercent"),
    n("loanTermYears"),
    n("refinanceFees"),
    n("existingDebtPayoff"),
  ]

  if (nums.some((v) => v === undefined)) return null

  return {
    purchasePrice: nums[0]!,
    closingCosts: nums[1]!,
    rehabBudget: nums[2]!,
    holdingCostsTotal: nums[3]!,
    monthlyRent: nums[4]!,
    annualPropertyTaxes: nums[5]!,
    annualInsurance: nums[6]!,
    monthlyHoa: nums[7]!,
    monthlyPropertyManagement: nums[8]!,
    monthlyMaintenanceReserve: nums[9]!,
    afterRepairValue: nums[10]!,
    ltvPercent: nums[11]!,
    annualInterestPercent: nums[12]!,
    loanTermYears: nums[13]!,
    refinanceFees: nums[14]!,
    existingDebtPayoff: nums[15]!,
  }
}

function investorLabel(id: BrrrrInvestorTypeId): string {
  return BRRRR_INVESTOR_TYPES.find((t) => t.id === id)?.label ?? id
}

function formatIssuesForAria(issues: BrrrrValidationIssue[]): string {
  return issues.map((i) => i.message).join(" ")
}

function buildLeadNotes(params: {
  investorType: BrrrrInvestorTypeId
  metrics: BrrrrMetrics
  inputs: BrrrrDealInputs
}): string {
  const lines = [
    "Lead source: BRRRR Deal Analyzer (more-investments)",
    `Investor type: ${investorLabel(params.investorType)}`,
    "",
    "Deal assumptions snapshot:",
    `- Purchase ${formatUsd0(params.inputs.purchasePrice)} | Closing ${formatUsd0(params.inputs.closingCosts)} | Rehab ${formatUsd0(params.inputs.rehabBudget)} | Holding ${formatUsd0(params.inputs.holdingCostsTotal)}`,
    `- Rent ${formatUsd0(params.inputs.monthlyRent)}/mo | ARV ${formatUsd0(params.inputs.afterRepairValue)} | LTV ${params.inputs.ltvPercent}%`,
    "",
    "Outputs:",
    `- Total project ${formatUsd0(params.metrics.totalProjectCost)} | Refi loan ${formatUsd0(params.metrics.refiLoanAmount)}`,
    `- Recaptured ${formatUsd0(params.metrics.capitalRecaptured)} (${(params.metrics.percentRecaptured * 100).toFixed(1)}%)`,
    `- Cash left ${formatUsd0(params.metrics.cashLeftInDeal)} | Monthly CF ${formatUsd0(params.metrics.monthlyCashFlow)}`,
    `- Signal: ${params.metrics.signal}`,
  ]
  return lines.join("\n")
}

export function BrrrrDealAnalyzer() {
  const utm = useM2mUtm()
  const anchorRef = useRef<HTMLDivElement>(null)

  const [toolTheme, setToolTheme] = useState<"dark" | "light">("dark")
  const [phase, setPhase] = useState<BrrrrPhase>("form")
  const [fields, setFields] = useState<BrrrrMoneyFieldValues>(() => ({ ...BRRRR_DEFAULT_FIELDS }))
  const [mathIssues, setMathIssues] = useState<BrrrrValidationIssue[]>([])
  const [metrics, setMetrics] = useState<BrrrrMetrics | null>(null)

  const [gateFirstName, setGateFirstName] = useState("")
  const [gateLastName, setGateLastName] = useState("")
  const [gateEmail, setGateEmail] = useState("")
  const [gatePhone, setGatePhone] = useState("")
  const [investorType, setInvestorType] = useState<BrrrrInvestorTypeId | null>(null)
  const [gateSubmitting, setGateSubmitting] = useState(false)
  const [gateError, setGateError] = useState<SubmitLeadFailure | null>(null)

  const shellDark = toolTheme === "dark"

  const scrollAnchor = useCallback(() => {
    anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  const handleAnalyze = () => {
    setMathIssues([])
    const parsed = parseInputs(fields)
    if (!parsed) {
      setMathIssues([
        { field: "general", message: "Enter numbers only — commas are okay — so we can run your scenario." },
      ])
      return
    }
    const issues = validateBrrrrInputs(parsed)
    if (issues.length) {
      setMathIssues(issues)
      return
    }
    setMetrics(computeBrrrrMetrics(parsed))
    setPhase("partial")
    queueMicrotask(scrollAnchor)
  }

  const handleUpdateAnalysis = () => {
    if (phase === "full") return
    handleAnalyze()
  }

  const handleUnlock = () => {
    setPhase("gate")
    setGateError(null)
    queueMicrotask(scrollAnchor)
  }

  const resetFlow = () => {
    setPhase("form")
    setFields({ ...BRRRR_DEFAULT_FIELDS })
    setMetrics(null)
    setMathIssues([])
    setGateFirstName("")
    setGateLastName("")
    setGateEmail("")
    setGatePhone("")
    setInvestorType(null)
    setGateError(null)
    queueMicrotask(scrollAnchor)
  }

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setGateError(null)
    if (!investorType || !metrics) return

    const parsed = parseInputs(fields)
    if (!parsed) {
      setGateError({
        ok: false,
        error: "Deal inputs changed unexpectedly — refresh inputs and try again.",
        code: "validation_error",
      })
      return
    }

    const digits = gatePhone.replace(/\D/g, "")
    if (digits.length < 10) {
      setGateError({
        ok: false,
        error: "Enter a valid phone number so our investor desk can follow up.",
        code: "validation_error",
      })
      return
    }

    setGateSubmitting(true)
    try {
      const res = await submitLeadToApi({
        lead_type: "buyer",
        name: `${gateFirstName.trim()} ${gateLastName.trim()}`.trim(),
        email: gateEmail.trim().toLowerCase(),
        phone: gatePhone.trim(),
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/more-investments",
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        notes: buildLeadNotes({ investorType, metrics, inputs: parsed }),
      })

      if (!res.ok) {
        setGateError(res)
        return
      }

      setPhase("full")
      queueMicrotask(scrollAnchor)
    } finally {
      setGateSubmitting(false)
    }
  }

  const ariaCalcAlert = useMemo(() => formatIssuesForAria(mathIssues), [mathIssues])

  const displayFirstName = gateFirstName.trim() || "there"

  return (
    <div
      ref={anchorRef}
      id="brrrr-analyzer"
      className={cn(
        "-mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6",
        shellDark ? "text-m2m-cream" : "text-m2m-deep",
      )}
    >
      {/* Investor-tool chrome (global Header stays above) */}
      <div
        className={cn(
          "sticky top-[calc(env(safe-area-inset-top,0px)+5rem)] z-30 mb-6 flex items-center justify-between gap-4 rounded-xl border px-4 py-3 shadow-md backdrop-blur-sm sm:px-5 sm:py-3.5",
          shellDark
            ? "border-m2m-gold/25 bg-m2m-deep/95 shadow-black/40"
            : "border-m2m-gold/30 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
        )}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className={cn("rounded-lg bg-white p-1 shadow-sm ring-1 ring-black/5", !shellDark && "ring-m2m-gold/20")}>
            <M2mBrandLogo variant="inline" className="h-10 w-auto" />
          </span>
          <span
            className={cn(
              "hidden min-w-0 font-display text-[clamp(1rem,3vw,1.25rem)] font-medium leading-tight sm:flex sm:flex-col",
              shellDark ? "text-m2m-cream" : "text-m2m-deep",
            )}
          >
            <span>Marching 2 More</span>
            <span
              className={cn(
                "text-[0.65rem] font-sans font-normal uppercase tracking-[0.14em]",
                shellDark ? "text-m2m-gold-lt" : "text-m2m-gold-dim",
              )}
            >
              Investor tools
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setToolTheme((t) => (t === "dark" ? "light" : "dark"))}
          aria-label={shellDark ? "Switch to light panel theme" : "Switch to dark panel theme"}
          className={cn(
            "inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/50",
            shellDark ? "border-white/15 bg-white/10 text-m2m-cream hover:bg-white/15" : "border-m2m-gold/35 bg-m2m-cream/60 text-m2m-deep hover:bg-m2m-cream",
          )}
        >
          {shellDark ? <Moon className="size-[1.15rem]" strokeWidth={1.5} /> : <Sun className="size-[1.15rem]" strokeWidth={1.5} />}
        </button>
      </div>

      <div
        className={cn(
          "rounded-[1.35rem] border px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14",
          shellDark
            ? "border-m2m-gold/15 bg-gradient-to-b from-m2m-deep via-[#0d1c11] to-m2m-black"
            : "border-m2m-gold/25 bg-gradient-to-b from-[#f6faf7] to-[#eef5ef]",
        )}
      >
        {phase !== "full" ? (
          <>
            <div className="relative mx-auto max-w-3xl text-center">
              <div
                className={cn(
                  "mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
                  shellDark ? "border-m2m-gold/35 bg-m2m-gold/12 text-m2m-gold-lt" : "border-m2m-gold/40 bg-m2m-gold/10 text-m2m-gold-dim",
                )}
              >
                <span aria-hidden>★</span>
                M2M Investor Tools
              </div>
              <h1 className="mt-6 font-display text-[clamp(2rem,6vw,3.25rem)] font-medium leading-[1.08] tracking-tight">
                <span className={shellDark ? "text-white" : "text-m2m-deep"}>BRRRR Deal </span>
                <em className="not-italic text-m2m-gold-lt">Analyzer</em>
              </h1>
              <p
                className={cn(
                  "mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
                  shellDark ? "text-m2m-cream/75" : "text-m2m-muted",
                )}
              >
                Model your full Buy–Rehab–Rent–Refinance–Repeat cycle. Find out how much capital you can recycle — and whether the deal still cash flows after refi.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl md:mt-12">
              <div aria-live="polite" className="sr-only">
                {mathIssues.length ? ariaCalcAlert : ""}
              </div>
              {mathIssues.length ? (
                <div
                  role="alert"
                  className="mb-6 rounded-xl border border-red-400/35 bg-red-500/10 px-4 py-3 text-sm text-red-100"
                >
                  <ul className="list-inside list-disc space-y-1">
                    {mathIssues.map((issue, idx) => (
                      <li key={`${issue.field}-${idx}`}>{issue.message}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <BrrrrInputFields
                values={fields}
                disabled={false}
                variant={shellDark ? "dark" : "light"}
                onChange={(key, v) => setFields((prev) => ({ ...prev, [key]: v }))}
              />

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  data-testid="brrrr-analyze"
                  onClick={handleAnalyze}
                  className="inline-flex min-h-[3rem] w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-br from-m2m-panel-lt to-m2m-panel px-8 text-base font-bold text-m2m-cream shadow-[0_10px_34px_rgba(26,62,34,0.45)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/50 sm:w-auto"
                >
                  Analyze deal
                </button>
                {(phase === "partial" || phase === "gate") && metrics ? (
                  <button
                    type="button"
                    onClick={handleUpdateAnalysis}
                    className={cn(
                      "text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45 rounded-sm",
                      shellDark ? "text-m2m-gold-lt" : "text-m2m-gold-dim",
                    )}
                  >
                    Update analysis with new inputs
                  </button>
                ) : null}
              </div>
              <p className={cn("mt-4 text-center text-xs", shellDark ? "text-m2m-cream/50" : "text-m2m-muted")}>
                Estimates only — confirm taxes, insurance, and lender terms before you offer.
              </p>
            </div>

            {(phase === "partial" || phase === "gate") && metrics ? (
              <div className="mx-auto mt-12 max-w-4xl space-y-10 md:mt-14">
                <BrrrrPartialResults metrics={metrics} onUnlock={handleUnlock} />

                {phase === "gate" ? (
                  <BrrrrGateForm
                    firstName={gateFirstName}
                    lastName={gateLastName}
                    email={gateEmail}
                    phone={gatePhone}
                    investorType={investorType}
                    submitting={gateSubmitting}
                    submitError={gateError}
                    onFieldChange={(field, value) => {
                      if (field === "firstName") setGateFirstName(value)
                      if (field === "lastName") setGateLastName(value)
                      if (field === "email") setGateEmail(value)
                      if (field === "phone") setGatePhone(value)
                    }}
                    onSelectInvestorType={setInvestorType}
                    onSubmit={handleGateSubmit}
                  />
                ) : null}
              </div>
            ) : null}
          </>
        ) : metrics ? (
          <div className="mx-auto max-w-4xl">
            <BrrrrFullResults metrics={metrics} displayFirstName={displayFirstName} onReset={resetFlow} />
          </div>
        ) : null}
      </div>
    </div>
  )
}
