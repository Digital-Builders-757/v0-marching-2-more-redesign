"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"

import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { M2mLeadSubmitWarnings } from "@/components/m2m-lead-submit-warnings"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import type { SubmitLeadFailure, SubmitLeadWarningCode } from "@/lib/ghl/types"
import {
  M2M_URGENCY_LABEL_SHORT_FORM,
  M2M_URGENCY_SHARED_HINT,
  M2M_URGENCY_SHORT_FORM_DEFAULT,
} from "@/lib/m2m-lead-urgency"
import { m2mInteriorFormInputClass } from "@/lib/m2m-form"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

export function ResourcesChecklistForm() {
  const pathname = usePathname()
  const utm = useM2mUtm()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [timeline, setTimeline] = useState(M2M_URGENCY_SHORT_FORM_DEFAULT)
  const [agreed, setAgreed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<SubmitLeadFailure | null>(null)
  const [done, setDone] = useState(false)
  const [successFollowUp, setSuccessFollowUp] = useState<{
    warnings: SubmitLeadWarningCode[]
    correlationId: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    setSubmitError(null)
    setSubmitting(true)
    try {
      const name = `${firstName} ${lastName}`.trim()
      const res = await submitLeadToApi({
        lead_type: "buyer",
        name,
        email: email.trim(),
        phone: phone.trim() || undefined,
        urgency: timeline,
        urgency_explicit: timeline.trim() !== M2M_URGENCY_SHORT_FORM_DEFAULT,
        notes: "Pre-listing / seller checklist request (Resources page)",
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: pathname || "/resources",
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
            variant="onLight"
            className="text-left"
          />
        ) : null}
        <p className="text-m2m-deep font-sans" role="status" aria-live="polite">
          Thank you! Check your email for the checklist.
        </p>
      </div>
    )
  }

  return (
    <form
      className="mx-auto mt-10 max-w-3xl rounded-lg bg-white/90 p-6 backdrop-blur-sm md:p-8"
      onSubmit={handleSubmit}
      aria-busy={submitting}
    >
      {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="mb-4 w-full" /> : null}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="First Name"
          aria-label="First name"
          required
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={m2mInteriorFormInputClass}
        />
        <input
          type="text"
          placeholder="Last Name"
          aria-label="Last name"
          required
          autoComplete="family-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={m2mInteriorFormInputClass}
        />
        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={m2mInteriorFormInputClass}
        />
      </div>
      <div className="mt-4 md:max-w-md">
        <input
          type="tel"
          placeholder="Phone (optional)"
          aria-label="Phone"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={m2mInteriorFormInputClass}
        />
      </div>

      <div className="mt-4 md:max-w-xl">
        <M2mLeadUrgencySelect
          id="resources-checklist-urgency"
          label={M2M_URGENCY_LABEL_SHORT_FORM}
          value={timeline}
          onChange={setTimeline}
          variant="interior"
          mode="short"
          required={false}
          hint={M2M_URGENCY_SHARED_HINT}
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="flex min-h-11 cursor-pointer items-center gap-2 text-sm text-m2m-deep/80 font-sans">
          <input
            type="checkbox"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="size-4 rounded border-m2m-deep/20 text-m2m-panel"
          />
          I agree to the terms &amp; conditions
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-11 items-center justify-center bg-m2m-panel px-8 py-3 text-[0.75rem] font-medium tracking-[0.15em] text-m2m-cream transition hover:bg-m2m-panel-lt font-nav disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Email me the Checklist"}
        </button>
      </div>
    </form>
  )
}
