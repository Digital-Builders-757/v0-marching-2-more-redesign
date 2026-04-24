"use client"

import { useState } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { M2mLeadSubmitWarnings } from "@/components/m2m-lead-submit-warnings"
import { m2mDarkPanelInputClass, m2mFormPrimaryButtonOnDarkPanel } from "@/lib/m2m-form"
import { M2M_URGENCY_SHARED_HINT } from "@/lib/m2m-lead-urgency"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"
import type { SubmitLeadFailure, SubmitLeadWarningCode } from "@/lib/ghl/types"

/** Compact seller intake on /sell — same contract as other seller forms. */
export function SellValuationLeadMini() {
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    timeline: "",
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
        address: form.address.trim() || undefined,
        urgency: form.timeline,
        urgency_explicit: Boolean(form.timeline.trim()),
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/sell",
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
      <div className="space-y-4">
        {successFollowUp?.warnings.length ? (
          <M2mLeadSubmitWarnings
            warnings={successFollowUp.warnings}
            correlationId={successFollowUp.correlationId}
            variant="onDark"
            className="text-left"
          />
        ) : null}
        <p className="text-sm text-m2m-cream/95 font-sans" role="status" aria-live="polite">
          Thank you — we&apos;ll reach out shortly. You can still use the instant online tool below anytime.
        </p>
      </div>
    )
  }

  return (
    <form
      data-m2m-lead="sell-seller-mini"
      onSubmit={submit}
      aria-busy={submitting}
      className="mt-6 space-y-5 border-t border-m2m-gold/20 pt-6 sm:space-y-4"
    >
      <p className="text-xs uppercase tracking-[0.15em] text-m2m-gold font-nav">Or request a call first</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="First name"
          required
          autoComplete="given-name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          className={m2mDarkPanelInputClass}
        />
        <input
          type="text"
          placeholder="Last name"
          required
          autoComplete="family-name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          className={m2mDarkPanelInputClass}
        />
      </div>
      <input
        type="text"
        placeholder="Property address (optional)"
        autoComplete="street-address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        className={m2mDarkPanelInputClass}
      />
      <M2mLeadDobField
        value={form.dateOfBirth}
        onChange={(v) => setForm({ ...form, dateOfBirth: v })}
        inputClassName={m2mDarkPanelInputClass}
        className="text-m2m-cream"
        label="Date of birth"
        helperClassName="!opacity-100 text-m2m-cream/70"
      />
      <M2mLeadUrgencySelect
        id="sell-mini-urgency"
        value={form.timeline}
        onChange={(v) => setForm({ ...form, timeline: v })}
        variant="leadPanel"
        className="text-m2m-cream"
        hint={M2M_URGENCY_SHARED_HINT}
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={m2mDarkPanelInputClass}
        />
        <input
          type="tel"
          placeholder="Phone"
          required
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={m2mDarkPanelInputClass}
        />
      </div>
      {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onDark" className="w-full" /> : null}
      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className={m2mFormPrimaryButtonOnDarkPanel}
      >
        {submitting ? "Sending…" : "Request contact"}
      </button>
    </form>
  )
}
