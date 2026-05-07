"use client"

import { BarChart3 } from "lucide-react"

import { formatUsd0, formatUsd0PerMo } from "@/lib/brrrr-format"
import type { BrrrrMetrics } from "@/lib/brrrr-math"
import { cn } from "@/lib/utils"

function signalLabel(signal: BrrrrMetrics["signal"]): string {
  switch (signal) {
    case "strong":
      return "Strong BRRRR signal"
    case "caution":
      return "Caution — pressure-test assumptions"
    default:
      return "Neutral — room to optimize"
  }
}

type BrrrrPartialResultsProps = {
  metrics: BrrrrMetrics
  onUnlock: () => void
}

export function BrrrrPartialResults({ metrics, onUnlock }: BrrrrPartialResultsProps) {
  const track = "bg-m2m-deep/80"
  const border = "border-m2m-gold/20"
  const bannerStrong = "bg-emerald-500/12 border-l-emerald-400"
  const bannerNeutral = "bg-m2m-gold/10 border-l-m2m-gold"
  const bannerCaution = "bg-red-500/12 border-l-red-400"

  const banner =
    metrics.signal === "strong" ? bannerStrong : metrics.signal === "caution" ? bannerCaution : bannerNeutral

  const cfNeg = metrics.monthlyCashFlow < 0

  return (
    <div className={cn("overflow-hidden rounded-2xl border shadow-lg bg-m2m-panel/50 shadow-black/35", border)}>
      <div className={cn("border-b px-5 py-6 sm:px-8 sm:py-7", border, track)}>
        <div className="flex items-center gap-2 text-m2m-gold-lt">
          <BarChart3 className="size-5 shrink-0" strokeWidth={1.35} aria-hidden />
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">Preview</p>
        </div>
        <h2 className="mt-2 font-display text-2xl font-medium text-m2m-cream sm:text-3xl">Your BRRRR snapshot</h2>
        <p className="mt-1 text-sm text-m2m-cream/65">
          Top-line outcomes before we unlock the full operating statement.
        </p>
      </div>

      <div className={cn("flex flex-wrap items-center gap-3 border-b px-5 py-4 sm:px-8", border, banner)}>
        <span
          className={cn(
            "size-3 shrink-0 rounded-full",
            metrics.signal === "strong" && "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.45)]",
            metrics.signal === "neutral" && "bg-m2m-gold-lt shadow-[0_0_10px_rgba(232,208,158,0.35)]",
            metrics.signal === "caution" && "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.35)]",
          )}
          aria-hidden
        />
        <p
          className={cn(
            "text-sm font-bold",
            metrics.signal === "strong" && "text-emerald-300",
            metrics.signal === "neutral" && "text-m2m-gold-lt",
            metrics.signal === "caution" && "text-red-300",
          )}
        >
          {signalLabel(metrics.signal)}
        </p>
      </div>

      <div className="grid grid-cols-1 divide-y divide-m2m-gold/15 md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="px-5 py-6 text-center sm:px-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-m2m-cream/55">Capital recaptured</p>
          <p className="mt-2 font-display text-2xl font-semibold text-m2m-gold-lt sm:text-3xl">{formatUsd0(metrics.capitalRecaptured)}</p>
          <p className="mt-1 text-xs text-m2m-cream/55">Net proceeds vs cash basis</p>
        </div>
        <div className="px-5 py-6 text-center sm:px-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-m2m-cream/55">Cash flow</p>
          <p
            className={cn(
              "mt-2 font-display text-2xl font-semibold sm:text-3xl",
              cfNeg ? "text-red-300" : "text-emerald-300",
            )}
          >
            {formatUsd0PerMo(metrics.monthlyCashFlow)}
          </p>
          <p className="mt-1 text-xs text-m2m-cream/55">After refi debt service</p>
        </div>
        <div className="px-5 py-6 text-center sm:px-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-m2m-cream/55">% Recaptured</p>
          <p className="mt-2 font-display text-2xl font-semibold text-m2m-cream sm:text-3xl">
            {(metrics.percentRecaptured * 100).toFixed(1)}%
          </p>
          <p className="mt-1 text-xs text-m2m-cream/55">Vs total project cost</p>
        </div>
      </div>

      <div className="border-t border-m2m-gold/15 px-5 py-4 sm:px-8">
        <div className="space-y-3">
          {["Monthly NOI", "Debt service", "Annual cash flow"].map((label) => (
            <div key={label} className="flex items-center justify-between gap-4 border-b border-m2m-gold/10 pb-3 last:border-0 last:pb-0">
              <span className="text-sm text-m2m-cream/60">{label}</span>
              <div className="h-5 min-w-[40%] rounded-full bg-m2m-black/35 blur-[3px] opacity-60" aria-hidden />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-m2m-gold/15 bg-gradient-to-b from-transparent to-m2m-gold/[0.06] px-5 py-8 text-center sm:px-8">
        <h3 className="font-display text-xl text-m2m-cream">Unlock your full analysis</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-m2m-cream/65">
          Tell us a bit about yourself and we&apos;ll show the complete breakdown — plus connect you with our investor team.
        </p>
        <button
          type="button"
          onClick={onUnlock}
          data-testid="brrrr-unlock-full"
          className="mx-auto mt-6 flex min-h-12 w-full max-w-sm items-center justify-center rounded-xl bg-gradient-to-br from-m2m-gold-dim to-m2m-gold px-6 text-sm font-bold text-white shadow-[0_8px_28px_rgba(205,176,95,0.38)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold-lt/80"
        >
          Unlock full breakdown
        </button>
        <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-4 text-[0.65rem] text-m2m-cream/50">
          <span>Veteran-led investor desk</span>
          <span aria-hidden className="text-m2m-cream/25">
            ·
          </span>
          <span>No spam — human follow-up</span>
        </div>
      </div>
    </div>
  )
}
