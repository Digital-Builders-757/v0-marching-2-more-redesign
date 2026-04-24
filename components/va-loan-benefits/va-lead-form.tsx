"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"

import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { M2mLeadSubmitWarnings } from "@/components/m2m-lead-submit-warnings"
import { M2mContainer } from "@/components/m2m-layout"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { SubmitLeadFailure, SubmitLeadWarningCode } from "@/lib/ghl/types"
import {
  M2M_URGENCY_LABEL_SHORT_FORM,
  M2M_URGENCY_SHARED_HINT,
  M2M_URGENCY_SHORT_FORM_DEFAULT,
} from "@/lib/m2m-lead-urgency"
import { m2mLeadFieldInputClass, m2mLeadFieldLabelClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

import {
  LEAD_HELPER,
  LEAD_HEADING,
  LEAD_LABEL_EMAIL,
  LEAD_LABEL_MESSAGE,
  LEAD_LABEL_NAME,
  LEAD_PLACEHOLDER_EMAIL,
  LEAD_SUBHEAD,
  LEAD_SUBMIT_LABEL,
  LEAD_TEXTAREA_PLACEHOLDER,
  VA_LEAD_SECTION_ID,
} from "./content"

export function VaLeadForm() {
  const pathname = usePathname()
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
    timeline: M2M_URGENCY_SHORT_FORM_DEFAULT,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<SubmitLeadFailure | null>(null)
  const [done, setDone] = useState(false)
  const [successFollowUp, setSuccessFollowUp] = useState<{
    warnings: SubmitLeadWarningCode[]
    correlationId: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    setSubmitting(true)
    try {
      const notes = [form.message.trim(), "VA loan benefits inquiry"].filter(Boolean).join("\n\n")
      const res = await submitLeadToApi({
        lead_type: "buyer",
        name: form.name.trim(),
        email: form.email.trim(),
        urgency: form.timeline,
        urgency_explicit: form.timeline.trim() !== M2M_URGENCY_SHORT_FORM_DEFAULT,
        notes: notes || undefined,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: pathname || "/va-loan-benefits",
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
      <section
        id={VA_LEAD_SECTION_ID}
        className="scroll-mt-28 border-b border-m2m-gold/15 py-16 sm:py-20 lg:py-24"
        aria-labelledby="va-lead-heading"
      >
        <M2mContainer className="max-w-lg space-y-4">
          {successFollowUp?.warnings.length ? (
            <M2mLeadSubmitWarnings
              warnings={successFollowUp.warnings}
              correlationId={successFollowUp.correlationId}
              variant="onDark"
              className="text-left"
            />
          ) : null}
          <p className="text-center text-base text-m2m-cream/95 font-sans" role="status" aria-live="polite">
            Thank you! We&apos;ll be in touch about VA loan benefits.
          </p>
        </M2mContainer>
      </section>
    )
  }

  return (
    <section
      id={VA_LEAD_SECTION_ID}
      className="scroll-mt-28 border-b border-m2m-gold/15 py-16 sm:py-20 lg:py-24"
      aria-labelledby="va-lead-heading"
    >
      <M2mContainer className="max-w-lg">
        <h2
          id="va-lead-heading"
          className="text-center text-[clamp(1.75rem,3.2vw,2.35rem)] font-medium text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {LEAD_HEADING}
        </h2>
        <p className="mt-3 text-center text-base text-m2m-cream/90 font-sans">{LEAD_SUBHEAD}</p>
        <p className="mt-4 text-center text-sm leading-relaxed text-m2m-cream/80 font-sans">{LEAD_HELPER}</p>

        <div className="mt-10 rounded-sm bg-m2m-cream p-6 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            aria-label="Get on the list"
            aria-busy={submitting}
          >
            {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="w-full" /> : null}
            <div>
              <Label htmlFor="va-lead-email" className={m2mLeadFieldLabelClass}>
                {LEAD_LABEL_EMAIL} <span className="text-m2m-panel">*</span>
              </Label>
              <Input
                id="va-lead-email"
                type="email"
                required
                autoComplete="email"
                placeholder={LEAD_PLACEHOLDER_EMAIL}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={m2mLeadFieldInputClass}
              />
            </div>
            <div>
              <Label htmlFor="va-lead-name" className={m2mLeadFieldLabelClass}>
                {LEAD_LABEL_NAME} <span className="text-m2m-panel">*</span>
              </Label>
              <Input
                id="va-lead-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={m2mLeadFieldInputClass}
              />
            </div>
            <M2mLeadUrgencySelect
              id="va-lead-urgency"
              label={M2M_URGENCY_LABEL_SHORT_FORM}
              value={form.timeline}
              onChange={(v) => setForm({ ...form, timeline: v })}
              variant="interior"
              mode="short"
              required={false}
              hint={M2M_URGENCY_SHARED_HINT}
            />
            <div>
              <Label htmlFor="va-lead-message" className={m2mLeadFieldLabelClass}>
                {LEAD_LABEL_MESSAGE}
              </Label>
              <Textarea
                id="va-lead-message"
                rows={5}
                placeholder={LEAD_TEXTAREA_PLACEHOLDER}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={m2mLeadFieldTextareaClass}
              />
            </div>
            <div className="pt-2">
              <Button type="submit" variant="m2mGold" className="w-full" disabled={submitting}>
                {submitting ? "Sending…" : LEAD_SUBMIT_LABEL}
              </Button>
            </div>
          </form>
        </div>
      </M2mContainer>
    </section>
  )
}
