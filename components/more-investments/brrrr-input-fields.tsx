"use client"

import { DollarSign, Home, Landmark, Wrench } from "lucide-react"

import { cn } from "@/lib/utils"

export type BrrrrFieldSectionId = "acquisition" | "rehab" | "rent" | "refinance"

export type BrrrrMoneyField =
  | "purchasePrice"
  | "closingCosts"
  | "rehabBudget"
  | "holdingCostsTotal"
  | "monthlyRent"
  | "annualPropertyTaxes"
  | "annualInsurance"
  | "monthlyHoa"
  | "monthlyPropertyManagement"
  | "monthlyMaintenanceReserve"
  | "afterRepairValue"
  | "ltvPercent"
  | "annualInterestPercent"
  | "loanTermYears"
  | "refinanceFees"
  | "existingDebtPayoff"

export type BrrrrMoneyFieldValues = Record<BrrrrMoneyField, string>

export const BRRRR_DEFAULT_FIELDS: BrrrrMoneyFieldValues = {
  purchasePrice: "164500",
  closingCosts: "3500",
  rehabBudget: "40000",
  holdingCostsTotal: "5000",
  monthlyRent: "1400",
  annualPropertyTaxes: "2400",
  annualInsurance: "1200",
  monthlyHoa: "0",
  monthlyPropertyManagement: "112",
  monthlyMaintenanceReserve: "100",
  afterRepairValue: "265000",
  ltvPercent: "75",
  annualInterestPercent: "6.925",
  loanTermYears: "30",
  refinanceFees: "4000",
  existingDebtPayoff: "0",
}

export type BrrrrSectionDef = {
  id: BrrrrFieldSectionId
  title: string
  subtitle: string
  icon: typeof Home
  fields: Array<{
    key: BrrrrMoneyField
    label: string
    hint?: string
    prefix?: string
    suffix?: string
    fullWidth?: boolean
  }>
}

export const BRRRR_SECTIONS: BrrrrSectionDef[] = [
    {
      id: "acquisition",
      title: "Acquisition",
      subtitle: "Purchase costs and initial cash in",
      icon: Home,
      fields: [
        { key: "purchasePrice", label: "Purchase Price", prefix: "$" },
        { key: "closingCosts", label: "Closing Costs", prefix: "$" },
      ],
    },
    {
      id: "rehab",
      title: "Rehab",
      subtitle: "Renovation budget and holding period costs",
      icon: Wrench,
      fields: [
        { key: "rehabBudget", label: "Rehab Budget", prefix: "$" },
        { key: "holdingCostsTotal", label: "Holding Costs (total)", prefix: "$", hint: "Interest, utilities, taxes during rehab." },
      ],
    },
    {
      id: "rent",
      title: "Rent & Operating",
      subtitle: "Monthly income and recurring expenses",
      icon: DollarSign,
      fields: [
        { key: "monthlyRent", label: "Monthly Rent", prefix: "$" },
        { key: "annualPropertyTaxes", label: "Annual Property Taxes", prefix: "$" },
        { key: "annualInsurance", label: "Annual Insurance", prefix: "$" },
        { key: "monthlyHoa", label: "Monthly HOA", prefix: "$" },
        { key: "monthlyPropertyManagement", label: "Monthly Property Management", prefix: "$" },
        { key: "monthlyMaintenanceReserve", label: "Monthly Maintenance Reserve", prefix: "$" },
      ],
    },
    {
      id: "refinance",
      title: "Refinance Assumptions",
      subtitle: "Stabilized ARV, leverage, and refinance terms",
      icon: Landmark,
      fields: [
        { key: "afterRepairValue", label: "After Repair Value (ARV)", prefix: "$", fullWidth: true },
        { key: "ltvPercent", label: "Refinance LTV", suffix: "%" },
        { key: "annualInterestPercent", label: "Annual Interest Rate", suffix: "%" },
        { key: "loanTermYears", label: "Loan Term", suffix: "yrs" },
        { key: "refinanceFees", label: "Refinance Fees", prefix: "$", hint: "Closing costs on the new loan." },
        { key: "existingDebtPayoff", label: "Payoff / Original Debt", prefix: "$", hint: "Outstanding balance paid off at refinance (0 if all-cash)." },
      ],
    },
]

type BrrrrInputFieldsProps = {
  values: BrrrrMoneyFieldValues
  onChange: (key: BrrrrMoneyField, value: string) => void
  disabled?: boolean
  variant: "dark" | "light"
}

export function BrrrrInputFields({ values, onChange, disabled, variant }: BrrrrInputFieldsProps) {
  const lab = variant === "dark" ? "text-m2m-cream" : "text-m2m-dark"
  const mut = variant === "dark" ? "text-m2m-muted-lt/90" : "text-m2m-muted"
  const border = variant === "dark" ? "border-m2m-gold/20" : "border-m2m-gold/35"
  const inputBg = variant === "dark" ? "bg-m2m-black/40" : "bg-white"
  const inputText = variant === "dark" ? "text-m2m-cream" : "text-m2m-deep"
  const prefixC = variant === "dark" ? "text-m2m-gold-lt" : "text-m2m-gold-dim"
  const iconBox = variant === "dark" ? "border-m2m-panel-lt/50 bg-m2m-panel/35 text-m2m-gold-lt" : "border-m2m-gold/30 bg-m2m-cream/70 text-m2m-gold-dim"
  const divider = variant === "dark" ? "border-m2m-gold/15" : "border-m2m-gold/25"
  const cardBg = variant === "dark" ? "bg-m2m-panel/55" : "bg-white/90"
  const innerBorder = variant === "dark" ? "border-white/10" : "border-m2m-muted/25"

  return (
    <div className="space-y-6 md:space-y-7">
      {BRRRR_SECTIONS.map((section) => (
        <section
          key={section.id}
          className={cn(
            "rounded-2xl border p-5 shadow-sm sm:p-6 md:p-8",
            border,
            cardBg,
            variant === "dark" ? "shadow-black/30" : "shadow-[0_12px_36px_rgba(0,0,0,0.08)]",
          )}
        >
          <div className={cn("flex items-start gap-3 border-b pb-5 sm:gap-4", divider)}>
            <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-lg border sm:size-11", iconBox)}>
              <section.icon className="size-5" strokeWidth={1.35} aria-hidden />
            </div>
            <div className="min-w-0 pt-0.5">
              <h2 className={cn("font-display text-xl font-medium tracking-tight sm:text-2xl", lab)}>{section.title}</h2>
              <p className={cn("mt-1 text-sm leading-relaxed", mut)}>{section.subtitle}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:pt-1">
            {section.fields.map((f) => (
              <div key={f.key} className={cn("flex flex-col gap-2", f.fullWidth && "md:col-span-2")}>
                <label htmlFor={`brrrr-${f.key}`} className={cn("text-sm font-semibold", lab)}>
                  {f.label}
                </label>
                {f.hint ? (
                  <p id={`brrrr-${f.key}-hint`} className={cn("-mt-0.5 text-xs leading-snug", mut)}>
                    {f.hint}
                  </p>
                ) : null}
                <div className={cn("relative flex min-h-[2.75rem] items-center rounded-lg border shadow-inner", innerBorder)}>
                  {f.prefix ? (
                    <span className={cn("pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold", prefixC)}>
                      {f.prefix}
                    </span>
                  ) : null}
                  <input
                    id={`brrrr-${f.key}`}
                    name={f.key}
                    type="text"
                    inputMode="decimal"
                    disabled={disabled}
                    value={values[f.key]}
                    onChange={(e) => onChange(f.key, e.target.value)}
                    className={cn(
                      "min-h-11 w-full rounded-lg border bg-transparent py-2.5 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-m2m-gold/40",
                      border,
                      inputBg,
                      inputText,
                      f.prefix ? "pl-8 pr-3" : f.suffix ? "pl-3 pr-12" : "px-3",
                      disabled && "cursor-not-allowed opacity-60",
                    )}
                    aria-describedby={f.hint ? `brrrr-${f.key}-hint` : undefined}
                  />
                  {f.suffix ? (
                    <span className={cn("pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold", prefixC)}>
                      {f.suffix}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
