"use client"

import { useState } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { M2mLeadSubmitWarnings } from "@/components/m2m-lead-submit-warnings"
import {
  m2mFormPrimaryButtonOnLight,
  m2mInteriorFormInputClass,
  m2mInteriorFormTextareaClass,
} from "@/lib/m2m-form"
import { cn } from "@/lib/utils"
import type { SubmitLeadFailure, SubmitLeadWarningCode } from "@/lib/ghl/types"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

export function BuyLeadMini() {
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
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
        lead_type: "buyer",
        name,
        email: form.email,
        phone: form.phone,
        date_of_birth: form.dateOfBirth,
        urgency: form.timeline,
        urgency_explicit: Boolean(form.timeline.trim()),
        notes: form.context.trim() || undefined,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/buy",
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
      <div className="mx-auto max-w-xl space-y-4 text-center">
        {successFollowUp?.warnings.length ? (
          <M2mLeadSubmitWarnings
            warnings={successFollowUp.warnings}
            correlationId={successFollowUp.correlationId}
            variant="onLight"
            className="text-left"
          />
        ) : null}
        <p className="text-m2m-muted text-base font-sans" role="status" aria-live="polite">
          Thank you! We&apos;ll reach out to help with your home search.
        </p>
      </div>
    )
  }

  return (
    <form
      data-m2m-lead="buyer-mini"
      onSubmit={submit}
      aria-busy={submitting}
      className="mx-auto mt-8 max-w-xl space-y-5 text-left sm:space-y-4"
    >
      <p className="text-center text-[0.65rem] font-nav uppercase tracking-[0.2em] text-m2m-gold">Get matched with an agent</p>
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
      <M2mLeadDobField
        value={form.dateOfBirth}
        onChange={(v) => setForm({ ...form, dateOfBirth: v })}
        inputClassName={m2mInteriorFormInputClass}
        className="text-m2m-deep"
      />
      <M2mLeadUrgencySelect
        id="buy-mini-urgency"
        value={form.timeline}
        onChange={(v) => setForm({ ...form, timeline: v })}
        variant="interior"
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
        <label htmlFor="buy-mini-context" className="mb-1.5 block text-left text-sm font-medium text-m2m-deep font-sans">
          Additional context <span className="font-normal text-m2m-muted">(optional)</span>
        </label>
        <textarea
          id="buy-mini-context"
          placeholder="e.g. cities, price range, must-haves"
          value={form.context}
          onChange={(e) => setForm({ ...form, context: e.target.value })}
          rows={3}
          className={cn(m2mInteriorFormTextareaClass, "min-h-[5.5rem]")}
        />
      </div>
      {submitError ? (
        <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="w-full text-left" />
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className={m2mFormPrimaryButtonOnLight}
      >
        {submitting ? "Sending…" : "Submit"}
      </button>
    </form>
  )
}
