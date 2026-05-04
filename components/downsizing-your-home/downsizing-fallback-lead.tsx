"use client"

import { useState } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { m2mLeadFieldInputClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"
import { M2M_URGENCY_SHARED_HINT } from "@/lib/m2m-lead-urgency"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"
import type { SubmitLeadFailure } from "@/lib/ghl/types"

const labelDark =
  "mb-1.5 block text-left text-[0.7rem] font-medium uppercase tracking-[0.12em] text-m2m-cream/85 font-nav"

/**
 * Shown inside `M2mLeadQuizSection` when the GHL downsizing quiz URL is still a placeholder.
 */
export function DownsizingFallbackLead() {
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
        notes: form.context.trim() || undefined,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/downsizing-your-home",
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
      <div
        className="space-y-4 rounded-md border border-m2m-gold/30 bg-gradient-to-br from-m2m-deep/85 to-m2m-deep/55 px-6 py-10 text-center shadow-[0_24px_60px_-8px_rgba(0,0,0,0.35)] ring-1 ring-m2m-gold/15 sm:px-10"
        role="status"
        aria-live="polite"
      >
        <p
          className="text-xl leading-snug text-m2m-cream sm:text-[1.375rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Thank you!
        </p>
        <p className="mt-3 text-sm leading-relaxed text-m2m-cream/85 font-sans">
          We&apos;ll follow up with downsizing resources shortly.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-md border border-m2m-gold/30 bg-gradient-to-b from-m2m-deep/50 to-m2m-deep/35 px-5 py-8 shadow-[0_14px_40px_-14px_rgba(0,0,0,0.32)] ring-1 ring-m2m-gold/[0.13] ring-inset sm:px-8">
      <p className="text-balance text-center text-[0.95rem] leading-relaxed text-m2m-cream/92 font-sans sm:text-sm">
        While we connect the guided quiz, leave your details and we&apos;ll send tailored next steps.
      </p>
      <form
        data-m2m-lead="downsizing-seller"
        onSubmit={submit}
        aria-busy={submitting}
        className="mt-7 space-y-5 sm:space-y-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="ds-first" className={labelDark}>
              First Name
            </Label>
            <Input
              id="ds-first"
              required
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={m2mLeadFieldInputClass}
            />
          </div>
          <div>
            <Label htmlFor="ds-last" className={labelDark}>
              Last Name
            </Label>
            <Input
              id="ds-last"
              required
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className={m2mLeadFieldInputClass}
            />
          </div>
        </div>
        <M2mLeadDobField
          id="ds-dob"
          value={form.dateOfBirth}
          onChange={(v) => setForm({ ...form, dateOfBirth: v })}
          inputClassName={m2mLeadFieldInputClass}
          className="text-m2m-cream"
          helperClassName="!opacity-100 text-m2m-cream/70"
          required={false}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="ds-email" className={labelDark}>
              Email
            </Label>
            <Input
              id="ds-email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={m2mLeadFieldInputClass}
            />
          </div>
          <div>
            <Label htmlFor="ds-phone" className={labelDark}>
              Phone
            </Label>
            <Input
              id="ds-phone"
              type="tel"
              required
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={m2mLeadFieldInputClass}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="ds-address" className={labelDark}>
            Current property address
          </Label>
          <Input
            id="ds-address"
            type="text"
            autoComplete="street-address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className={m2mLeadFieldInputClass}
            placeholder="Optional — helps us tailor your plan"
          />
        </div>
        <M2mLeadUrgencySelect
          id="ds-urgency"
          value={form.timeline}
          onChange={(v) => setForm({ ...form, timeline: v })}
          variant="dark"
          hint={M2M_URGENCY_SHARED_HINT}
        />
        <div>
          <Label htmlFor="ds-context" className={labelDark}>
            What should we know?
          </Label>
          <Textarea
            id="ds-context"
            rows={3}
            value={form.context}
            onChange={(e) => setForm({ ...form, context: e.target.value })}
            className={m2mLeadFieldTextareaClass}
            placeholder="Optional — goals, concerns, or timing details"
          />
        </div>
        {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onDark" className="w-full" /> : null}
        <Button type="submit" variant="m2mGold" className="w-full min-h-[52px] touch-manipulation" disabled={submitting}>
          {submitting ? "Sending…" : "Submit Your Info"}
        </Button>
      </form>
    </div>
  )
}
