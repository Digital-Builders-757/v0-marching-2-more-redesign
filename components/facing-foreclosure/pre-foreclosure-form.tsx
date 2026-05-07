"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import type { ForeclosureFormIntent } from "@/components/facing-foreclosure/content"
import {
  FORM_CARD_SUB,
  FORM_CARD_TITLE,
  FORM_INTENT_OPTIONS,
  FORM_LABEL_ADDRESS,
  FORM_LABEL_EMAIL,
  FORM_LABEL_FIRST,
  FORM_LABEL_INTENT,
  FORM_LABEL_LAST,
  FORM_LABEL_MESSAGE,
  FORM_LABEL_PHONE,
  FORM_PLACEHOLDER_ADDRESS,
  FORM_PLACEHOLDER_LAST,
  FORM_PLACEHOLDER_MESSAGE,
  FORM_SUBMIT_LABEL,
  FORM_SUCCESS_MESSAGE,
  HERO_LEGAL_LINE,
} from "@/components/facing-foreclosure/content"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { SubmitLeadFailure } from "@/lib/ghl/types"
import { m2mLeadFieldInputClass, m2mLeadFieldLabelClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"
import { M2M_PRE_FORECLOSURE_GUIDE_PDF_FILENAME, getM2mPreForeclosureGuidePdfHref } from "@/lib/m2m-site"
import { cn } from "@/lib/utils"

const URGENCY_BY_INTENT: Record<ForeclosureFormIntent, string> = {
  guide: "Pre-foreclosure — free guide",
  speak_now: "Pre-foreclosure — speak with foreclosure specialist now",
  both: "Pre-foreclosure — guide + specialist contact now",
}

export function PreForeclosureUnifiedForm({ className }: { className?: string }) {
  const pathname = usePathname()
  const utm = useM2mUtm()
  const pdfHref = getM2mPreForeclosureGuidePdfHref()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    intent: "" as ForeclosureFormIntent | "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<SubmitLeadFailure | null>(null)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    if (!form.intent) {
      setSubmitError({
        ok: false,
        error: "Please choose how we can help.",
      })
      return
    }
    setSubmitting(true)
    try {
      const name = [form.firstName.trim(), form.lastName.trim()].filter(Boolean).join(" ").trim()
      const res = await submitLeadToApi({
        lead_type: "seller",
        name,
        email: form.email.trim(),
        phone: form.phone.trim(),
        address: form.address.trim(),
        foreclosure_intent: form.intent,
        urgency: URGENCY_BY_INTENT[form.intent],
        urgency_explicit: true,
        guide_name: "M2M Pre-Foreclosure Guide",
        notes: form.message.trim() || undefined,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: pathname || "/facing-foreclosure",
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
        className={cn(
          "space-y-5 rounded-sm bg-m2m-cream p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-8 lg:p-9",
          className,
        )}
        role="status"
        aria-live="polite"
      >
        <p
          className="text-center text-xl font-semibold text-m2m-panel sm:text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Thank you — we have your request
        </p>
        <p className="text-center text-sm leading-relaxed text-m2m-deep/88 font-sans sm:text-base">
          {FORM_SUCCESS_MESSAGE}
        </p>
        <div className="flex flex-col items-center gap-3 pt-2">
          <Button asChild variant="m2mPanel" className="w-full max-w-sm touch-manipulation">
            <a href={pdfHref} download={M2M_PRE_FORECLOSURE_GUIDE_PDF_FILENAME}>
              Download the guide (PDF)
            </a>
          </Button>
          <Link
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-xs text-m2m-deep/70 underline underline-offset-4 font-sans"
          >
            Open guide in a new tab
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn("rounded-sm bg-m2m-cream p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-8 lg:p-9", className)}
    >
      <h2
        className="text-center text-xl font-semibold text-m2m-panel sm:text-2xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {FORM_CARD_TITLE}
      </h2>
      <p className="mt-3 text-center text-sm leading-relaxed text-m2m-deep/85 font-sans sm:text-[0.95rem]">
        {FORM_CARD_SUB}
      </p>

      <form
        data-testid="m2m-lead-form-facing-foreclosure"
        data-m2m-lead="facing-foreclosure"
        onSubmit={handleSubmit}
        aria-busy={submitting}
        className="mt-8 space-y-5 sm:space-y-4"
        aria-label="Pre-foreclosure guide and contact request"
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
              {FORM_LABEL_LAST}{" "}
              <span style={{ fontFamily: "var(--font-nav)" }} className="text-xs font-normal text-m2m-deep/55">
                ({FORM_PLACEHOLDER_LAST})
              </span>
            </Label>
            <Input
              id="pf-last"
              type="text"
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
              className={m2mLeadFieldInputClass}
            />
          </div>
        </div>

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
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            className={m2mLeadFieldInputClass}
          />
        </div>

        <div>
          <Label htmlFor="pf-address" className={m2mLeadFieldLabelClass}>
            {FORM_LABEL_ADDRESS} <span className="text-m2m-panel">*</span>
          </Label>
          <Input
            id="pf-address"
            type="text"
            autoComplete="street-address"
            required
            placeholder={FORM_PLACEHOLDER_ADDRESS}
            value={form.address}
            onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))}
            className={m2mLeadFieldInputClass}
          />
        </div>

        <div>
          <Label htmlFor="pf-intent" className={m2mLeadFieldLabelClass}>
            {FORM_LABEL_INTENT} <span className="text-m2m-panel">*</span>
          </Label>
          <select
            id="pf-intent"
            required
            value={form.intent}
            onChange={(e) => setForm((prev) => ({ ...prev, intent: e.target.value as ForeclosureFormIntent }))}
            className={cn(m2mLeadFieldInputClass, "h-11 cursor-pointer")}
          >
            <option value="">Choose one…</option>
            {FORM_INTENT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="pf-message" className={m2mLeadFieldLabelClass}>
            {FORM_LABEL_MESSAGE}
          </Label>
          <Textarea
            id="pf-message"
            rows={4}
            placeholder={FORM_PLACEHOLDER_MESSAGE}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className={cn(m2mLeadFieldTextareaClass, "min-h-[6rem]")}
          />
        </div>

        <p className="text-xs leading-relaxed text-m2m-deep/68 font-sans">{HERO_LEGAL_LINE}</p>

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
