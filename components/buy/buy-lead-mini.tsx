"use client"

import { useState } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { m2mInteriorFormInputClass } from "@/lib/m2m-form"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

export function BuyLeadMini() {
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
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
        source_path: "/buy",
      })
      if (!res.ok) {
        setError(res.error)
        return
      }
      setDone(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <p className="text-m2m-muted text-base font-sans text-center">
        Thank you! We&apos;ll reach out to help with your home search.
      </p>
    )
  }

  return (
    <form onSubmit={submit} className="mt-8 max-w-xl mx-auto text-left space-y-4">
      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold font-nav text-center">Get matched with an agent</p>
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
      {error ? (
        <p className="text-sm text-red-700 font-sans text-center" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="w-full min-h-11 bg-m2m-deep text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 font-medium transition hover:bg-m2m-deep/90 disabled:opacity-60 font-nav"
      >
        {submitting ? "Sending…" : "Submit"}
      </button>
    </form>
  )
}
