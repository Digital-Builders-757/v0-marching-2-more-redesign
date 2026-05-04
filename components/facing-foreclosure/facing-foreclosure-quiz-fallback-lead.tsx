"use client"

import { useState } from "react"

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

import {
  FORECLOSURE_QUIZ_FALLBACK_HEADLINE,
  FORECLOSURE_QUIZ_FALLBACK_SUB,
  FORECLOSURE_QUIZ_FALLBACK_SUBMIT_LABEL,
  FORM_LABEL_EMAIL,
  FORM_LABEL_FIRST,
  FORM_LABEL_LAST,
  FORM_LABEL_MESSAGE,
  FORM_LABEL_PHONE,
  FORM_PLACEHOLDER_MESSAGE,
  FORM_PLACEHOLDER_PHONE,
} from "./content"

const labelDark =
  "mb-1.5 block text-left text-[0.7rem] font-medium uppercase tracking-[0.12em] text-m2m-cream/85 font-nav"

/**
 * Shown inside `M2mLeadQuizSection` when the GHL foreclosure quiz URL is not yet configured.
 */
export function FacingForeclosureQuizFallbackLead() {
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    timeline: "",
    message: "",
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
      const notesParts = [
        "Facing foreclosure quiz section (embed fallback).",
        form.message.trim() || undefined,
      ].filter(Boolean)
      const res = await submitLeadToApi({
        lead_type: "seller",
        name,
        email: form.email,
        phone: form.phone,
        urgency: form.timeline,
        urgency_explicit: Boolean(form.timeline.trim()),
        notes: notesParts.join("\n\n"),
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/facing-foreclosure",
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
          Thank you
        </p>
        <p className="mt-3 text-sm leading-relaxed text-m2m-cream/85 font-sans">
          We received your message. A team member will follow up as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-md border border-m2m-gold/30 bg-gradient-to-br from-m2m-deep/85 to-m2m-deep/55 px-6 py-10 shadow-[0_24px_60px_-8px_rgba(0,0,0,0.35)] ring-1 ring-m2m-gold/15 sm:px-10">
      <p
        className="text-center text-xl font-semibold text-m2m-cream sm:text-[1.35rem]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {FORECLOSURE_QUIZ_FALLBACK_HEADLINE}
      </p>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-m2m-cream/85 font-sans">
        {FORECLOSURE_QUIZ_FALLBACK_SUB}
      </p>
      <form className="mx-auto mt-8 max-w-xl space-y-5" onSubmit={submit}>
        {submitError ? (
          <M2mLeadSubmitErrorAlert failure={submitError} variant="onDark" className="text-left" />
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="fc-quiz-fallback-first" className={labelDark}>
              {FORM_LABEL_FIRST}
            </Label>
            <Input
              id="fc-quiz-fallback-first"
              value={form.firstName}
              onChange={(ev) => setForm((f) => ({ ...f, firstName: ev.target.value }))}
              className={m2mLeadFieldInputClass}
              autoComplete="given-name"
              required
            />
          </div>
          <div>
            <Label htmlFor="fc-quiz-fallback-last" className={labelDark}>
              {FORM_LABEL_LAST}
            </Label>
            <Input
              id="fc-quiz-fallback-last"
              value={form.lastName}
              onChange={(ev) => setForm((f) => ({ ...f, lastName: ev.target.value }))}
              className={m2mLeadFieldInputClass}
              autoComplete="family-name"
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="fc-quiz-fallback-email" className={labelDark}>
            {FORM_LABEL_EMAIL}
          </Label>
          <Input
            id="fc-quiz-fallback-email"
            type="email"
            value={form.email}
            onChange={(ev) => setForm((f) => ({ ...f, email: ev.target.value }))}
            className={m2mLeadFieldInputClass}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <Label htmlFor="fc-quiz-fallback-phone" className={labelDark}>
            {FORM_LABEL_PHONE}
          </Label>
          <Input
            id="fc-quiz-fallback-phone"
            type="tel"
            value={form.phone}
            onChange={(ev) => setForm((f) => ({ ...f, phone: ev.target.value }))}
            className={m2mLeadFieldInputClass}
            placeholder={FORM_PLACEHOLDER_PHONE}
            autoComplete="tel"
          />
        </div>
        <div>
          <M2mLeadUrgencySelect
            id="fc-quiz-fallback-urgency"
            value={form.timeline}
            onChange={(v) => setForm((f) => ({ ...f, timeline: v }))}
            variant="dark"
            hint={M2M_URGENCY_SHARED_HINT}
          />
        </div>
        <div>
          <Label htmlFor="fc-quiz-fallback-message" className={labelDark}>
            {FORM_LABEL_MESSAGE}
          </Label>
          <Textarea
            id="fc-quiz-fallback-message"
            value={form.message}
            onChange={(ev) => setForm((f) => ({ ...f, message: ev.target.value }))}
            className={m2mLeadFieldTextareaClass}
            placeholder={FORM_PLACEHOLDER_MESSAGE}
            rows={4}
          />
        </div>
        <Button
          type="submit"
          variant="m2mGold"
          className="w-full min-h-[52px] touch-manipulation"
          disabled={submitting}
        >
          {submitting ? "Sending…" : FORECLOSURE_QUIZ_FALLBACK_SUBMIT_LABEL}
        </Button>
      </form>
    </div>
  )
}
