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
import { M2mLeadSubmitWarnings } from "@/components/m2m-lead-submit-warnings"
import { m2mLeadFieldInputClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"
import { M2M_URGENCY_SHARED_HINT } from "@/lib/m2m-lead-urgency"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"
import type { SubmitLeadFailure, SubmitLeadWarningCode } from "@/lib/ghl/types"

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
      setSuccessFollowUp({ warnings: res.warnings ?? [], correlationId: res.correlationId })
      setDone(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div
        className="space-y-4 rounded-sm border border-m2m-gold/25 bg-m2m-deep/40 px-6 py-8 text-center"
        role="status"
        aria-live="polite"
      >
        {successFollowUp?.warnings.length ? (
          <M2mLeadSubmitWarnings
            warnings={successFollowUp.warnings}
            correlationId={successFollowUp.correlationId}
            variant="onDark"
            className="text-left"
          />
        ) : null}
        <p className="text-lg text-m2m-cream font-display">Thank you!</p>
        <p className="mt-2 text-sm text-m2m-cream/85 font-sans">We&apos;ll follow up with downsizing resources shortly.</p>
      </div>
    )
  }

  return (
    <div className="rounded-sm border border-m2m-gold/25 bg-m2m-deep/40 px-5 py-6 sm:px-8">
      <p className="text-center text-sm text-m2m-cream/90 font-sans">
        While we connect the guided quiz, leave your details and we&apos;ll send tailored next steps.
      </p>
      <form
        data-m2m-lead="downsizing-seller"
        onSubmit={submit}
        aria-busy={submitting}
        className="mt-6 space-y-5 sm:space-y-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="ds-first" className={labelDark}>
              First name
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
              Last name
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
        <Button type="submit" variant="m2mGold" className="w-full min-h-12 touch-manipulation" disabled={submitting}>
          {submitting ? "Sending…" : "Submit"}
        </Button>
      </form>
    </div>
  )
}
