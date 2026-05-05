"use client"

import { useState } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { M2mLeadSubmitWarnings } from "@/components/m2m-lead-submit-warnings"
import { M2mPostSubmitNextSteps } from "@/components/m2m-post-submit-next-steps"
import { m2mInteriorFormInputClass, m2mInteriorFormTextareaClass } from "@/lib/m2m-form"
import { cn } from "@/lib/utils"
import { M2M_URGENCY_SHARED_HINT } from "@/lib/m2m-lead-urgency"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"
import type { SubmitLeadFailure, SubmitLeadWarningCode } from "@/lib/ghl/types"

/**
 * Short seller intake for /free-home-valuation — complements the RealScout instant estimate link.
 */
export function ValuationSellerLeadForm() {
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    timeline: "",
    context: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<SubmitLeadFailure | null>(null)
  const [done, setDone] = useState(false)
  const [successFollowUp, setSuccessFollowUp] = useState<{
    warnings: SubmitLeadWarningCode[]
    correlationId: string
  } | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    setSubmitting(true)
    try {
      const name = `${form.firstName} ${form.lastName}`.trim()
      const res = await submitLeadToApi({
        lead_type: "seller",
        name,
        email: form.email,
        phone: form.phone,
        date_of_birth: form.dateOfBirth,
        address: form.address || undefined,
        urgency: form.timeline,
        urgency_explicit: Boolean(form.timeline.trim()),
        notes: form.context.trim() || undefined,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/free-home-valuation",
      })
      if (!res.ok) {
        setSubmitError(res)
        return
      }
      setSuccessFollowUp({ warnings: res.warnings ?? [], correlationId: res.correlationId })
      setDone(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div
        className="space-y-4 rounded-xl border border-m2m-deep/12 bg-white p-8 text-center shadow-lg"
        role="status"
        aria-live="polite"
      >
        {successFollowUp?.warnings.length ? (
          <M2mLeadSubmitWarnings
            warnings={successFollowUp.warnings}
            correlationId={successFollowUp.correlationId}
            variant="onLight"
            className="text-left"
          />
        ) : null}
        <p className="text-xl font-light text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
          Thank you!
        </p>
        <p className="mt-3 text-sm text-m2m-deep/80 font-sans">
          We&apos;ll be in touch soon — usually within one business day, often faster when you submit earlier in the day.
        </p>
        <M2mPostSubmitNextSteps variant="onLight" omitHrefs={["/free-home-valuation"]} />
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-m2m-deep/12 bg-white p-6 shadow-lg sm:p-8">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-m2m-gold font-nav">Talk to the team</p>
      <h2 className="mt-2 text-2xl font-light text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
        Request a personalized valuation call
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-m2m-deep/82 font-sans">
        Short form — we&apos;ll reach out to coordinate your CMA and next steps.
      </p>
      <div
        className="mt-4 rounded-lg border border-m2m-deep/10 bg-m2m-cream/50 px-4 py-3 text-xs leading-relaxed text-m2m-deep/85 font-sans"
        role="note"
      >
        Licensed Virginia professionals · Veteran-owned · Five-star rated team — your info stays private and goes
        straight to our inbox (never sold).
      </div>
      <form
        data-m2m-lead="free-home-valuation"
        onSubmit={submit}
        aria-busy={submitting}
        className="mt-6 space-y-5 sm:space-y-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="First name"
            required
            autoComplete="given-name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className={m2mInteriorFormInputClass}
          />
          <input
            type="text"
            placeholder="Last name"
            required
            autoComplete="family-name"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className={m2mInteriorFormInputClass}
          />
        </div>
        <div>
          <label htmlFor="valuation-address" className="mb-1.5 block text-sm font-medium text-m2m-deep font-sans">
            Property address <span className="font-normal text-m2m-muted">(optional)</span>
          </label>
          <input
            id="valuation-address"
            type="text"
            autoComplete="street-address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className={m2mInteriorFormInputClass}
            placeholder="Street, city, or ZIP"
          />
        </div>
        <M2mLeadUrgencySelect
          id="valuation-urgency"
          value={form.timeline}
          onChange={(v) => setForm({ ...form, timeline: v })}
          variant="interior"
          hint={M2M_URGENCY_SHARED_HINT}
        />
        <M2mLeadDobField
          value={form.dateOfBirth}
          onChange={(v) => setForm({ ...form, dateOfBirth: v })}
          inputClassName={m2mInteriorFormInputClass}
          className="text-m2m-deep"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="email"
            placeholder="Email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={m2mInteriorFormInputClass}
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={m2mInteriorFormInputClass}
          />
        </div>
        <div>
          <label htmlFor="valuation-context" className="mb-1.5 block text-sm font-medium text-m2m-deep font-sans">
            Notes for your agent <span className="font-normal text-m2m-muted">(optional)</span>
          </label>
          <textarea
            id="valuation-context"
            placeholder="Access, goals, or timing details"
            value={form.context}
            onChange={(e) => setForm({ ...form, context: e.target.value })}
            rows={3}
            className={cn(m2mInteriorFormTextareaClass, "min-h-[5rem]")}
          />
        </div>
        {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="w-full" /> : null}
        <button
          type="submit"
          disabled={submitting}
          className="w-full min-h-12 touch-manipulation rounded-md bg-m2m-deep py-3 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-m2m-cream transition hover:bg-m2m-deep/90 disabled:opacity-60 font-nav"
        >
          {submitting ? "Sending…" : "Submit"}
        </button>
      </form>
    </div>
  )
}
