"use client"

import { BarChart3, Clock, TrendingUp } from "lucide-react"

import { formatUsd0, formatUsd0PerMo, formatUsd0PerYr, formatPercent1 } from "@/lib/brrrr-format"
import type { BrrrrMetrics } from "@/lib/brrrr-math"
import { cn } from "@/lib/utils"

function recommendationCopy(metrics: BrrrrMetrics): { title: string; body: string } {
  if (metrics.signal === "strong") {
    return {
      title: "Capital-efficient recycle with workable cash flow",
      body:
        "Recapture and post-refi cash flow both look supportive at these assumptions. Next step is underwriting sanity-checks on rent comps, rehab certainty, and lender overlays — especially around seasoning and appraisal quality.",
    }
  }
  if (metrics.signal === "caution") {
    return {
      title: "Proceed with discipline — stress rents and reserves",
      body:
        "Either capital recycle or cash flow (or both) looks thin versus typical investor guardrails. Tighten the rent/supportable NOI narrative, revisit refinance timing/fees, and model downside scenarios before you commit earnest money.",
    }
  }
  return {
    title: "Solid recycle profile — tune leasing or leverage carefully",
    body:
      "You may be close on recycle percentage while cash flow sits tighter than ideal (or vice versa). Pressure-test taxes/insurance, PM assumptions, and where rents settle once stabilized.",
  }
}

type BrrrrFullResultsProps = {
  metrics: BrrrrMetrics
  displayFirstName: string
  onReset: () => void
}

function MetricMiniCard(props: {
  label: string
  value: string
  hint: string
  tone?: "default" | "positive" | "negative" | "gold"
}) {
  const toneClass =
    props.tone === "positive"
      ? "text-emerald-300"
      : props.tone === "negative"
        ? "text-red-300"
        : props.tone === "gold"
          ? "text-m2m-gold-lt"
          : "text-m2m-cream"

  return (
    <div className="rounded-xl border border-m2m-gold/18 bg-m2m-black/25 px-4 py-4 shadow-sm sm:px-5 sm:py-5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-m2m-cream/55">{props.label}</p>
      <p className={cn("mt-2 font-display text-xl font-semibold leading-none sm:text-2xl", toneClass)}>{props.value}</p>
      <p className="mt-2 text-xs leading-snug text-m2m-cream/56">{props.hint}</p>
    </div>
  )
}

export function BrrrrFullResults({ metrics, displayFirstName, onReset }: BrrrrFullResultsProps) {
  const pct = Math.min(100, Math.max(0, metrics.percentRecaptured * 100))
  const rec = recommendationCopy(metrics)

  const cfTone = metrics.monthlyCashFlow < 0 ? "negative" : "positive"
  const cocTone =
    metrics.cashOnCashReturn !== undefined && metrics.cashOnCashReturn < 0 ? "negative" : metrics.cashOnCashReturn === undefined ? "default" : "positive"

  return (
    <div className="space-y-7 md:space-y-8">
      <div className="rounded-2xl border border-m2m-panel-lt/40 bg-gradient-to-br from-m2m-deep via-m2m-deep to-m2m-black/80 px-5 py-8 text-center shadow-[0_16px_44px_rgba(0,0,0,0.35)] sm:px-10">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-m2m-gold-lt/90">Results</p>
        <h2 className="mt-3 font-display text-2xl font-medium text-m2m-cream sm:text-3xl">Your Complete BRRRR Analysis</h2>
        <p className="mt-2 text-sm text-m2m-cream/65">
          Here&apos;s your complete deal analysis{displayFirstName.trim() ? `, ${displayFirstName.trim()}` : ""}.
        </p>
      </div>

      <section className="rounded-2xl border border-m2m-gold/20 bg-m2m-panel/45 p-5 shadow-lg shadow-black/25 sm:p-7 md:p-8">
        <div className="flex flex-wrap items-start gap-3 border-b border-m2m-gold/15 pb-5">
          <div className="flex size-10 items-center justify-center rounded-lg border border-m2m-gold/25 bg-m2m-black/30 text-m2m-gold-lt">
            <BarChart3 className="size-5" strokeWidth={1.35} aria-hidden />
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-m2m-cream">Deal Overview</h3>
            <p className="text-sm text-m2m-cream/62">Total investment and refinance summary</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <MetricMiniCard label="Total project cost" value={formatUsd0(metrics.totalProjectCost)} hint="Purchase + closing + rehab + holding" />
          <MetricMiniCard label="Refi loan amount" value={formatUsd0(metrics.refiLoanAmount)} hint="ARV × LTV" />
          <MetricMiniCard label="Capital recaptured" value={formatUsd0(metrics.capitalRecaptured)} hint="Loan − refi fees − payoff debt" tone="gold" />
          <MetricMiniCard label="Cash left in deal" value={formatUsd0(metrics.cashLeftInDeal)} hint="Trapped equity after refinance cycle" />
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-semibold text-m2m-cream/75">Capital recaptured</span>
            <span className="font-display text-lg font-semibold text-m2m-gold-lt">{(metrics.percentRecaptured * 100).toFixed(1)}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-m2m-black/45">
            <div
              className="h-full rounded-full bg-gradient-to-r from-m2m-panel-lt to-m2m-gold transition-[width] duration-700 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-[0.65rem] text-m2m-cream/45">
            <span>0%</span>
            <span className="text-m2m-gold-lt/90">70% = Strong BRRRR</span>
            <span>100%</span>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-m2m-gold/20 bg-m2m-panel/45 p-5 shadow-lg shadow-black/25 sm:p-7 md:p-8">
        <div className="flex flex-wrap items-start gap-3 border-b border-m2m-gold/15 pb-5">
          <div className="flex size-10 items-center justify-center rounded-lg border border-m2m-gold/25 bg-m2m-black/30 text-m2m-gold-lt">
            <TrendingUp className="size-5" strokeWidth={1.35} aria-hidden />
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-m2m-cream">Cash Flow Analysis</h3>
            <p className="text-sm text-m2m-cream/62">Monthly income, expenses, and net return</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <MetricMiniCard label="Monthly NOI" value={formatUsd0PerMo(metrics.noiMonthly)} hint="Rent minus all operating expenses" tone={metrics.noiMonthly < 0 ? "negative" : "positive"} />
          <MetricMiniCard label="Monthly debt service" value={formatUsd0PerMo(metrics.debtServiceMonthly)} hint="Amortized refi mortgage payment" />
          <MetricMiniCard label="Monthly cash flow" value={formatUsd0PerMo(metrics.monthlyCashFlow)} hint="NOI minus debt service" tone={cfTone} />
          <MetricMiniCard label="Annual cash flow" value={formatUsd0PerYr(metrics.annualCashFlow)} hint="Monthly cash flow × 12" tone={cfTone} />
        </div>
      </section>

      <section className="rounded-2xl border border-m2m-gold/20 bg-m2m-panel/45 p-5 shadow-lg shadow-black/25 sm:p-7 md:p-8">
        <div className="flex flex-wrap items-start gap-3 border-b border-m2m-gold/15 pb-5">
          <div className="flex size-10 items-center justify-center rounded-lg border border-m2m-gold/25 bg-m2m-black/30 text-m2m-gold-lt">
            <Clock className="size-5" strokeWidth={1.35} aria-hidden />
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-m2m-cream">Return Metrics</h3>
            <p className="text-sm text-m2m-cream/62">Efficiency of capital deployment</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <MetricMiniCard
            label="Cash-on-cash return"
            value={metrics.cashOnCashReturn !== undefined ? formatPercent1(metrics.cashOnCashReturn) : "—"}
            hint="Annual cash flow ÷ cash left in deal"
            tone={cocTone === "default" ? "default" : cocTone}
          />
          <MetricMiniCard
            label="% of project cost recaptured"
            value={formatPercent1(metrics.percentRecaptured)}
            hint="How close are you to infinite return?"
            tone="gold"
          />
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-m2m-panel-lt/45 shadow-md">
        <div className="bg-m2m-deep px-5 py-5 sm:px-8">
          <h3 className="font-display text-lg font-medium text-m2m-cream">Recommended next step</h3>
        </div>
        <div className="bg-m2m-panel/55 px-5 py-7 sm:px-8 sm:py-8">
          <p className="font-display text-xl text-m2m-gold-lt">{rec.title}</p>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-m2m-cream/72">{rec.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={onReset}
              data-testid="brrrr-reset"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-gradient-to-br from-m2m-panel-lt to-m2m-panel px-6 text-sm font-bold text-m2m-cream shadow-[0_6px_22px_rgba(0,0,0,0.28)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45 sm:max-w-xs sm:flex-none"
            >
              Analyze another deal
            </button>
          </div>
        </div>
      </section>

      <p className="text-center text-[0.65rem] leading-relaxed text-m2m-cream/48">
        This tool is for educational and estimation purposes only. Consult a licensed advisor before making investment decisions.
      </p>
    </div>
  )
}
