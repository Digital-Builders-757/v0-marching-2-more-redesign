"use client"

import { useState } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { m2mLeadFieldInputClass, m2mLeadFieldLabelClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { M2M_URGENCY_SHARED_HINT } from "@/lib/m2m-lead-urgency"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"
import type { SubmitLeadFailure } from "@/lib/ghl/types"
import { cn } from "@/lib/utils"

import {
  FORM_LABEL_EMAIL,
  FORM_LABEL_FIRST,
  FORM_LABEL_LAST,
  FORM_LABEL_MESSAGE,
  FORM_LABEL_PHONE,
  FORM_PLACEHOLDER_MESSAGE,
  FORM_PLACEHOLDER_PHONE,
  FORM_SUBMIT_LABEL,
  LEAD_HEADLINE,
  LEAD_SUBHEAD,
} from "./content"

export function PreForeclosureForm() {
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    timeline: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<SubmitLeadFailure | null>(null)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
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
        notes: form.message || undefined,
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
        className="space-y-4 rounded-sm bg-m2m-cream p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-8 lg:p-9"
        role="status"
        aria-live="polite"
      >
        <p
          className="text-center text-2xl font-semibold text-m2m-panel sm:text-[1.65rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Thank you
        </p>
        <p className="mt-4 text-center text-sm text-m2m-deep/85 font-sans">
          We received your request. A team member will follow up as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-sm bg-m2m-cream p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-8 lg:p-9">
      <h2
        className="text-center text-2xl font-semibold text-m2m-panel sm:text-[1.65rem]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {LEAD_HEADLINE}
      </h2>
      <p
        className="mt-4 text-center text-sm leading-relaxed text-m2m-deep/85 sm:text-base"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {LEAD_SUBHEAD}
      </p>

      <form
        data-testid="m2m-lead-form-facing-foreclosure"
        data-m2m-lead="facing-foreclosure"
        onSubmit={handleSubmit}
        aria-busy={submitting}
        className="mt-8 space-y-5 sm:space-y-4"
        aria-label="Request foreclosure guide"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="pf-first" className={m2mLeadFieldLabelClass}>
              {FORM_LABEL_FIRST} <span className="text-m2m-panel">*</span>
            </Label>
            <Input
              id="pf-first"
              type="text"
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
              className={m2mLeadFieldInputClass}
              required
            />
          </div>
          <div>
            <Label htmlFor="pf-last" className={m2mLeadFieldLabelClass}>
              {FORM_LABEL_LAST} <span className="text-m2m-panel">*</span>
            </Label>
            <Input
              id="pf-last"
              type="text"
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
              className={m2mLeadFieldInputClass}
              required
            />
          </div>
        </div>

        <M2mLeadDobField
          id="pf-dob"
          value={form.dateOfBirth}
          onChange={(v) => setForm((prev) => ({ ...prev, dateOfBirth: v }))}
          inputClassName={m2mLeadFieldInputClass}
          className="text-m2m-deep"
          required={false}
        />

        <div>
          <Label htmlFor="pf-email" className={m2mLeadFieldLabelClass}>
            {FORM_LABEL_EMAIL} <span className="text-m2m-panel">*</span>
          </Label>
          <Input
            id="pf-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className={m2mLeadFieldInputClass}
          />
        </div>

        <div>
          <Label htmlFor="pf-phone" className={m2mLeadFieldLabelClass}>
            {FORM_LABEL_PHONE} <span className="text-m2m-panel">*</span>
          </Label>
          <Input
            id="pf-phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder={FORM_PLACEHOLDER_PHONE}
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            className={m2mLeadFieldInputClass}
          />
        </div>

        <div>
          <Label htmlFor="pf-address" className={m2mLeadFieldLabelClass}>
            Property address
          </Label>
          <Input
            id="pf-address"
            type="text"
            autoComplete="street-address"
            value={form.address}
            onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))}
            className={m2mLeadFieldInputClass}
            placeholder="Optional — helps the team move faster"
          />
        </div>

        <M2mLeadUrgencySelect
          id="pf-urgency"
          value={form.timeline}
          onChange={(v) => setForm((prev) => ({ ...prev, timeline: v }))}
          variant="interior"
          hint={M2M_URGENCY_SHARED_HINT}
        />

        <div>
          <Label htmlFor="pf-message" className={m2mLeadFieldLabelClass}>
            {FORM_LABEL_MESSAGE}
          </Label>
          <Textarea
            id="pf-message"
            rows={5}
            placeholder={FORM_PLACEHOLDER_MESSAGE}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className={cn(m2mLeadFieldTextareaClass, "min-h-[7.5rem]")}
          />
        </div>

        {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="w-full" /> : null}

        <div className="pt-2">
          <Button type="submit" variant="m2mPanel" className="w-full min-h-12 touch-manipulation" disabled={submitting}>
            {submitting ? "Sending…" : FORM_SUBMIT_LABEL}
          </Button>
        </div>
      </form>
    </div>
  )
}
