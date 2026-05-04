"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

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
import { m2mLeadFieldInputClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

import { FLAG_QUOTE_BACKGROUND, QUOTE_FORM } from "./content"

const fhaQuoteLabelClass = "mb-2 block text-xs font-medium text-m2m-deep font-sans"

export function FhaQuoteForm() {
  const pathname = usePathname()
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    timeline: M2M_URGENCY_SHORT_FORM_DEFAULT,
    subject: "",
    message: "",
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
      const name = `${form.firstName} ${form.lastName}`.trim()
      const notes = [`Subject: ${form.subject.trim()}`, form.message.trim()].filter(Boolean).join("\n\n")
      const res = await submitLeadToApi({
        lead_type: "buyer",
        name,
        email: form.email.trim(),
        urgency: form.timeline,
        urgency_explicit: form.timeline.trim() !== M2M_URGENCY_SHORT_FORM_DEFAULT,
        notes: notes || undefined,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: pathname || "/fha-loan",
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
        id="request-quote"
        className="relative scroll-mt-24 py-16 sm:py-20 lg:py-28"
        aria-labelledby="fha-quote-heading"
      >
        <div className="absolute inset-0">
          <Image src={FLAG_QUOTE_BACKGROUND} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-m2m-deep/25 backdrop-blur-[1px]" />
        </div>
        <M2mContainer className="relative z-10 max-w-2xl">
          <div className="space-y-4 rounded-none bg-white px-6 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12">
            {successFollowUp?.warnings.length ? (
              <M2mLeadSubmitWarnings
                warnings={successFollowUp.warnings}
                correlationId={successFollowUp.correlationId}
                variant="onLight"
                className="text-left"
              />
            ) : null}
            <p className="text-center text-m2m-deep font-sans" role="status" aria-live="polite">
              Thank you! We&apos;ll follow up about your FHA questions.
            </p>
          </div>
        </M2mContainer>
      </section>
    )
  }

  return (
    <section
      id="request-quote"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-28"
      aria-labelledby="fha-quote-heading"
    >
      <div className="absolute inset-0">
        <Image src={FLAG_QUOTE_BACKGROUND} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-m2m-deep/25 backdrop-blur-[1px]" />
      </div>

      <M2mContainer className="relative z-10 max-w-2xl">
        <div className="rounded-none bg-white px-6 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12">
          <h2
            id="fha-quote-heading"
            className="mb-2 text-center text-2xl font-bold text-m2m-deep font-nav"
          >
            {QUOTE_FORM.title}
          </h2>
          <p className="mb-10 text-center text-sm text-m2m-deep/80 font-sans">{QUOTE_FORM.subtitle}</p>

          <form
            data-testid="m2m-lead-form-fha-loan"
            onSubmit={handleSubmit}
            className="space-y-7"
            aria-label={QUOTE_FORM.ariaSummary}
            aria-busy={submitting}
          >
            {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="w-full" /> : null}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <div>
                <Label htmlFor="fha-first" className={fhaQuoteLabelClass}>
                  First Name
                </Label>
                <Input
                  id="fha-first"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
                  className={m2mLeadFieldInputClass}
                />
              </div>
              <div>
                <Label htmlFor="fha-last" className={fhaQuoteLabelClass}>
                  Last Name
                </Label>
                <Input
                  id="fha-last"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
                  className={m2mLeadFieldInputClass}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="fha-email" className={fhaQuoteLabelClass}>
                Email *
              </Label>
              <Input
                id="fha-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className={m2mLeadFieldInputClass}
              />
            </div>

            <M2mLeadUrgencySelect
              id="fha-urgency"
              label={M2M_URGENCY_LABEL_SHORT_FORM}
              value={form.timeline}
              onChange={(v) => setForm((prev) => ({ ...prev, timeline: v }))}
              variant="interior"
              mode="short"
              required={false}
              hint={M2M_URGENCY_SHARED_HINT}
            />

            <div>
              <Label htmlFor="fha-subject" className={fhaQuoteLabelClass}>
                Subject *
              </Label>
              <Input
                id="fha-subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                className={m2mLeadFieldInputClass}
              />
            </div>

            <div>
              <Label htmlFor="fha-message" className={fhaQuoteLabelClass}>
                Leave us a message...
              </Label>
              <Textarea
                id="fha-message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className={m2mLeadFieldTextareaClass}
              />
            </div>

            <Button type="submit" variant="m2mPanel" className="w-full rounded-none py-3.5" disabled={submitting}>
              {submitting ? "Sending…" : QUOTE_FORM.submitLabel}
            </Button>
          </form>
        </div>
      </M2mContainer>
    </section>
  )
}
