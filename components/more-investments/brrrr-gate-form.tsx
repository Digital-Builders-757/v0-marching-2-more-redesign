"use client"

import { Check } from "lucide-react"

import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import type { SubmitLeadFailure } from "@/lib/m2m-lead-submit"
import { cn } from "@/lib/utils"

export type BrrrrInvestorTypeId = "first-time" | "active" | "scaling" | "veteran"

export const BRRRR_INVESTOR_TYPES: Array<{
  id: BrrrrInvestorTypeId
  label: string
  emoji: string
}> = [
  { id: "first-time", label: "First-Time Investor", emoji: "\u{1F331}" },
  { id: "active", label: "Active Investor (1–5 doors)", emoji: "\u{1F3E0}" },
  { id: "scaling", label: "Scaling Investor (6+ doors)", emoji: "\u{1F4C8}" },
  { id: "veteran", label: "Military / Veteran Investor", emoji: "\u{1F396}\uFE0F" },
]

type BrrrrGateFormProps = {
  firstName: string
  lastName: string
  email: string
  phone: string
  investorType: BrrrrInvestorTypeId | null
  submitting: boolean
  submitError: SubmitLeadFailure | null
  onFieldChange: (field: "firstName" | "lastName" | "email" | "phone", value: string) => void
  onSelectInvestorType: (id: BrrrrInvestorTypeId) => void
  onSubmit: (e: React.FormEvent) => void
}

export function BrrrrGateForm({
  firstName,
  lastName,
  email,
  phone,
  investorType,
  submitting,
  submitError,
  onFieldChange,
  onSelectInvestorType,
  onSubmit,
}: BrrrrGateFormProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-m2m-gold/35 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
      <div className="bg-gradient-to-br from-m2m-gold-dim to-m2m-gold px-5 py-7 text-center sm:px-10 sm:py-9">
        <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">Unlock Your Full Analysis</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85">
          Tell us a bit about yourself and we&apos;ll show you the complete BRRRR breakdown — plus connect you with our investor team.
        </p>
      </div>

      <form className="bg-m2m-panel/85 px-5 py-8 sm:px-10 sm:py-10" onSubmit={onSubmit} noValidate>
        {submitError ? (
          <div className="mb-6">
            <M2mLeadSubmitErrorAlert failure={submitError} variant="onDark" className="w-full text-left" />
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="brrrr-gate-first" className="text-sm font-semibold text-m2m-cream">
              First Name
            </label>
            <input
              id="brrrr-gate-first"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => onFieldChange("firstName", e.target.value)}
              className="min-h-11 rounded-lg border border-m2m-gold/20 bg-m2m-black/35 px-3 text-sm text-m2m-cream outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="brrrr-gate-last" className="text-sm font-semibold text-m2m-cream">
              Last Name
            </label>
            <input
              id="brrrr-gate-last"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => onFieldChange("lastName", e.target.value)}
              className="min-h-11 rounded-lg border border-m2m-gold/20 bg-m2m-black/35 px-3 text-sm text-m2m-cream outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="brrrr-gate-email" className="text-sm font-semibold text-m2m-cream">
              Email Address
            </label>
            <input
              id="brrrr-gate-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => onFieldChange("email", e.target.value)}
              className="min-h-11 rounded-lg border border-m2m-gold/20 bg-m2m-black/35 px-3 text-sm text-m2m-cream outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="brrrr-gate-phone" className="text-sm font-semibold text-m2m-cream">
              Phone Number
            </label>
            <input
              id="brrrr-gate-phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => onFieldChange("phone", e.target.value)}
              className="min-h-11 rounded-lg border border-m2m-gold/20 bg-m2m-black/35 px-3 text-sm text-m2m-cream outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45"
              required
            />
          </div>
        </div>

        <fieldset className="mt-8">
          <legend className="text-sm font-semibold text-m2m-cream">I am a(n)...</legend>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Investor type">
            {BRRRR_INVESTOR_TYPES.map((t) => {
              const selected = investorType === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => onSelectInvestorType(t.id)}
                  className={cn(
                    "flex min-h-[3rem] items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45",
                    selected
                      ? "border-m2m-gold bg-m2m-gold/15 text-m2m-gold-lt"
                      : "border-m2m-gold/25 bg-m2m-black/25 text-m2m-cream/75 hover:border-m2m-gold/45 hover:text-m2m-cream",
                  )}
                >
                  <span className="text-lg leading-none" aria-hidden>
                    {t.emoji}
                  </span>
                  <span className="flex-1">{t.label}</span>
                  {selected ? <Check className="size-5 shrink-0 text-m2m-cream" strokeWidth={2} aria-hidden /> : null}
                </button>
              )
            })}
          </div>
        </fieldset>

        <button
          type="submit"
          data-testid="brrrr-gate-submit"
          disabled={submitting || !investorType}
          className="mx-auto mt-8 flex min-h-[3rem] w-full max-w-lg items-center justify-center rounded-xl bg-gradient-to-br from-m2m-gold-dim to-m2m-gold px-6 text-sm font-bold text-white shadow-[0_8px_28px_rgba(205,176,95,0.38)] transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold-lt/80"
        >
          {submitting ? "Sending…" : "Show My Full Breakdown →"}
        </button>

        <p className="mx-auto mt-5 max-w-lg text-center text-[0.7rem] leading-relaxed text-m2m-cream/55">
          By submitting, you agree to receive follow-up from our investor relations team. We never sell your data.
        </p>
      </form>
    </div>
  )
}
