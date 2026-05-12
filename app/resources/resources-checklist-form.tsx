"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
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
      <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-m2m-deep/10 bg-m2m-cream/96 px-6 py-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm md:px-8 md:py-8">
        {successFollowUp?.warnings.length ? (
          <M2mLeadSubmitWarnings
            warnings={successFollowUp.warnings}
            correlationId={successFollowUp.correlationId}
            variant="onLight"
            className="text-left"
          />
        ) : null}
        <p className="text-base font-semibold text-m2m-deep sm:text-lg" role="status" aria-live="polite">
          Thank you! Check your email for the checklist.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-m2m-deep/80 font-sans">
          If you want to keep browsing, the trusted links and next-step guides are still available above.
        </p>
      </div>
    )
  }

  return (
    <form
      id="listing-guide-form"
      className="mx-auto mt-10 max-w-3xl scroll-mt-28 rounded-lg bg-white/90 p-6 backdrop-blur-sm md:p-8 md:scroll-mt-32"
      onSubmit={handleSubmit}
      aria-busy={submitting}
      aria-label="Request the printable pre-listing checklist"
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
        <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-snug text-m2m-deep/80 font-sans">
          <input
            type="checkbox"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 size-4 shrink-0 rounded border-m2m-deep/20 text-m2m-panel"
          />
          <span>
            I agree to the{" "}
            <Link
              href="/terms-and-conditions"
              className="font-medium text-m2m-deep underline decoration-m2m-gold/40 underline-offset-2 hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-deep"
            >
              Terms and Conditions
            </Link>
          </span>
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-11 items-center justify-center bg-m2m-panel px-8 py-3 text-[0.75rem] font-medium tracking-[0.15em] text-m2m-cream transition hover:bg-m2m-panel-lt font-nav disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Send me the checklist"}
        </button>
      </div>
    </form>
  )
}
