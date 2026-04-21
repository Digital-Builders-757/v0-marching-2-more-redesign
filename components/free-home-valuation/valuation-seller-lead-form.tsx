"use client"

import { useState } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { m2mInteriorFormInputClass } from "@/lib/m2m-form"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

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
        lead_type: "seller",
        name,
        email: form.email,
        phone: form.phone,
        date_of_birth: form.dateOfBirth,
        address: form.address || undefined,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/free-home-valuation",
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
      <div
        className="rounded-xl border border-m2m-deep/12 bg-white p-8 text-center shadow-lg"
        role="status"
        aria-live="polite"
      >
        <p className="text-xl font-light text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
          Thank you!
        </p>
        <p className="mt-3 text-sm text-m2m-deep/80 font-sans">We&apos;ll be in touch soon.</p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-m2m-deep/12 bg-white p-8 shadow-lg">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-m2m-gold font-nav">Talk to the team</p>
      <h2 className="mt-2 text-2xl font-light text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
        Request a personalized valuation call
      </h2>
      <p className="mt-2 text-sm text-m2m-deep/80 font-sans">
        Short form — we&apos;ll reach out to coordinate your CMA and next steps.
      </p>
      <form onSubmit={submit} aria-busy={submitting} className="mt-6 space-y-4">
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
        <input
          type="text"
          placeholder="Property address (optional)"
          autoComplete="street-address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className={m2mInteriorFormInputClass}
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
        {error ? (
          <p className="text-sm text-red-700 font-sans" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-m2m-deep py-3 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-m2m-cream transition hover:bg-m2m-deep/90 disabled:opacity-60 font-nav"
        >
          {submitting ? "Sending…" : "Submit"}
        </button>
      </form>
    </div>
  )
}
