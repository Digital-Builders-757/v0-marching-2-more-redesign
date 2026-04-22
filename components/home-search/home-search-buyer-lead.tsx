"use client"

import { useState } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { m2mCmaFormInputClass } from "@/lib/m2m-form"
import type { SubmitLeadFailure } from "@/lib/ghl/types"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

/** Buyer intake on /home-search — dark-on-hero styling. */
export function HomeSearchBuyerLead() {
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

  const inputClass = `${m2mCmaFormInputClass} min-h-12 sm:min-h-11 touch-manipulation bg-m2m-deep/40 border-m2m-cream/40 text-m2m-cream placeholder:text-m2m-cream/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`

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
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/home-search",
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
      <p className="mt-6 text-sm text-m2m-cream/90 font-sans" role="status" aria-live="polite">
        Thank you! An agent will reach out to help with your search.
      </p>
    )
  }

  return (
    <form onSubmit={submit} aria-busy={submitting} className="mt-6 space-y-5 max-w-md sm:space-y-4">
      <p className="text-[0.62rem] tracking-[0.2em] uppercase text-m2m-gold font-nav">Want help from the team?</p>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-3">
        <input
          type="text"
          placeholder="First name"
          required
          autoComplete="given-name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Last name"
          required
          autoComplete="family-name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          className={inputClass}
        />
      </div>
      <M2mLeadDobField
        value={form.dateOfBirth}
        onChange={(v) => setForm({ ...form, dateOfBirth: v })}
        inputClassName={inputClass}
        className="text-m2m-cream"
      />
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-3">
        <input
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Phone"
          required
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
      </div>
      {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onDark" className="w-full" /> : null}
      <button
        type="submit"
        disabled={submitting}
        className="w-full min-h-12 touch-manipulation border border-m2m-gold/50 bg-m2m-deep/30 text-m2m-cream text-[0.65rem] tracking-[0.2em] uppercase py-3.5 font-medium shadow-[0_2px_16px_-4px_rgba(5,13,6,0.35)] hover:border-m2m-gold hover:bg-m2m-deep/45 hover:text-m2m-gold disabled:opacity-60 font-nav"
      >
        {submitting ? "Sending…" : "Get matched"}
      </button>
    </form>
  )
}
