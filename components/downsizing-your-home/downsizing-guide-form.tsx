"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"

import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { M2mLeadSubmitWarnings } from "@/components/m2m-lead-submit-warnings"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { SubmitLeadFailure, SubmitLeadWarningCode } from "@/lib/ghl/types"
import { m2mLeadFieldInputClass, m2mLeadFieldLabelClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"
import {
  M2M_URGENCY_LABEL_SHORT_FORM,
  M2M_URGENCY_SHARED_HINT,
  M2M_URGENCY_SHORT_FORM_DEFAULT,
} from "@/lib/m2m-lead-urgency"
import { cn } from "@/lib/utils"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

import {
  DOWNSIZING_GUIDE_SECTION_ID,
  GUIDE_CTA_LABEL,
  GUIDE_HEADING,
  GUIDE_INTRO,
} from "./content"

export function DownsizingGuideForm() {
  const pathname = usePathname()
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    timeline: M2M_URGENCY_SHORT_FORM_DEFAULT,
    shipTo: "",
    specialInstructions: "",
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
      const notes = [
        form.shipTo.trim() ? `Ship to: ${form.shipTo.trim()}` : "",
        form.specialInstructions.trim() ? `Notes: ${form.specialInstructions.trim()}` : "",
        "Downsizing guide request",
      ]
        .filter(Boolean)
        .join("\n")
      const res = await submitLeadToApi({
        lead_type: "seller",
        name,
        email: form.email.trim(),
        address: form.shipTo.trim() || undefined,
        urgency: form.timeline,
        urgency_explicit: form.timeline.trim() !== M2M_URGENCY_SHORT_FORM_DEFAULT,
        notes,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: pathname || "/downsizing-your-home",
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
        id={DOWNSIZING_GUIDE_SECTION_ID}
        className="scroll-mt-28 space-y-4 rounded-sm bg-m2m-cream p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-10"
      >
        {successFollowUp?.warnings.length ? (
          <M2mLeadSubmitWarnings
            warnings={successFollowUp.warnings}
            correlationId={successFollowUp.correlationId}
            variant="onLight"
            className="text-left"
          />
        ) : null}
        <p className="text-center text-lg text-m2m-deep font-display" role="status" aria-live="polite">
          Thank you! We&apos;ll send your downsizing guide.
        </p>
      </div>
    )
  }

  return (
    <div
      id={DOWNSIZING_GUIDE_SECTION_ID}
      className="scroll-mt-28 rounded-sm bg-m2m-cream p-7 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-9 lg:p-10"
    >
      <p
        className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-panel sm:text-[0.7rem]"
        style={{ fontFamily: "var(--font-nav)" }}
      >
        Free Resource
      </p>
      <h2
        className="text-balance text-2xl font-medium text-m2m-deep sm:text-[1.65rem]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {GUIDE_HEADING}
      </h2>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-m2m-deep/80 font-sans">{GUIDE_INTRO}</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" aria-label="Request downsizing guide" aria-busy={submitting}>
        {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="w-full" /> : null}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <Label htmlFor="ds-first" className={m2mLeadFieldLabelClass}>
              First name
            </Label>
            <Input
              id="ds-first"
              type="text"
              required
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={m2mLeadFieldInputClass}
            />
          </div>
          <div className="sm:col-span-1">
            <Label htmlFor="ds-last" className={m2mLeadFieldLabelClass}>
              Last name
            </Label>
            <Input
              id="ds-last"
              type="text"
              required
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className={m2mLeadFieldInputClass}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="ds-email" className={m2mLeadFieldLabelClass}>
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

        <M2mLeadUrgencySelect
          id="ds-guide-urgency"
          label={M2M_URGENCY_LABEL_SHORT_FORM}
          value={form.timeline}
          onChange={(v) => setForm({ ...form, timeline: v })}
          variant="interior"
          mode="short"
          required={false}
          hint={M2M_URGENCY_SHARED_HINT}
        />

        <div>
          <Label htmlFor="ds-ship" className={m2mLeadFieldLabelClass}>
            Ship to
          </Label>
          <Input
            id="ds-ship"
            type="text"
            autoComplete="street-address"
            value={form.shipTo}
            onChange={(e) => setForm({ ...form, shipTo: e.target.value })}
            className={m2mLeadFieldInputClass}
            placeholder="Mailing address (optional)"
          />
        </div>

        <div>
          <Label htmlFor="ds-notes" className={m2mLeadFieldLabelClass}>
            Special instructions
          </Label>
          <Textarea
            id="ds-notes"
            rows={4}
            value={form.specialInstructions}
            onChange={(e) => setForm({ ...form, specialInstructions: e.target.value })}
            className={cn(m2mLeadFieldTextareaClass, "min-h-[7rem]")}
            placeholder="Anything we should know about delivery or timing?"
          />
        </div>

        <div className="pt-3">
          <Button type="submit" variant="m2mGold" className="w-full min-h-[52px]" disabled={submitting}>
            {submitting ? "Sending…" : GUIDE_CTA_LABEL}
          </Button>
        </div>
      </form>
    </div>
  )
}
