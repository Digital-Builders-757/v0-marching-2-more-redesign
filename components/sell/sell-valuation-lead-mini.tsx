"use client"

import { useState } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { m2mDarkPanelInputClass } from "@/lib/m2m-form"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"
import type { SubmitLeadFailure } from "@/lib/ghl/types"

/** Compact seller intake on /sell — same contract as other seller forms. */
export function SellValuationLeadMini() {
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<SubmitLeadFailure | null>(null)
  const [done, setDone] = useState(false)

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
      setDone(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <p className="text-sm text-m2m-cream/95 font-sans" role="status" aria-live="polite">
        Thank you — we&apos;ll reach out shortly. You can still use the instant online tool below anytime.
      </p>
    )
  }

  return (
    <form onSubmit={submit} aria-busy={submitting} className="mt-6 space-y-5 border-t border-m2m-gold/20 pt-6 sm:space-y-4">
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
      <M2mLeadDobField
        value={form.dateOfBirth}
        onChange={(v) => setForm({ ...form, dateOfBirth: v })}
        inputClassName={m2mDarkPanelInputClass}
        className="text-m2m-cream"
        label="Date of birth"
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
        className="w-full min-h-12 touch-manipulation rounded-lg bg-m2m-gold py-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-m2m-deep transition hover:bg-m2m-gold-lt disabled:opacity-60 font-nav"
      >
        {submitting ? "Sending…" : "Request contact"}
      </button>
    </form>
  )
}
