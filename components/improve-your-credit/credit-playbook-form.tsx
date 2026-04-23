"use client"

import { useState } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { M2mLeadQuizSection } from "@/components/m2m-lead-quiz-section"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  m2mPlaybookFieldLabelClass,
  m2mPlaybookInputClass,
} from "@/lib/m2m-form"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"
import type { SubmitLeadFailure } from "@/lib/ghl/types"
import { M2M_URGENCY_LABEL_CREDIT, M2M_URGENCY_SHARED_HINT } from "@/lib/m2m-lead-urgency"
import { GOHIGHLEVEL_QUIZ_CREDIT_URL, isGohighlevelUrlConfigured } from "@/lib/m2m-site"

import {
  CREDIT_PLAYBOOK_SECTION_ID,
  PLAYBOOK_CARD_TITLE,
  PLAYBOOK_DOWNLOAD_BUTTON,
  PLAYBOOK_HEADING,
  PLAYBOOK_PARAGRAPHS,
} from "./content"

export function CreditPlaybookForm() {
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    timeline: "",
    context: "",
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
      const baseNote = "Credit Improvement Playbook — download request"
      const notes = form.context.trim() ? `${baseNote}\n\n${form.context.trim()}` : baseNote
      const res = await submitLeadToApi({
        lead_type: "buyer",
        name,
        email: form.email,
        phone: form.phone,
        date_of_birth: form.dateOfBirth,
        urgency: form.timeline,
        notes,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/improve-your-credit",
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

  const showLocalForm = !isGohighlevelUrlConfigured(GOHIGHLEVEL_QUIZ_CREDIT_URL)

  const description = (
    <div className="space-y-4">
      {PLAYBOOK_PARAGRAPHS.map((p) => (
        <p key={p.slice(0, 32)} className="text-sm leading-relaxed text-m2m-cream/88 sm:text-base font-sans">
          {p}
        </p>
      ))}
    </div>
  )

  return (
    <M2mLeadQuizSection
      id={CREDIT_PLAYBOOK_SECTION_ID}
      title={PLAYBOOK_HEADING}
      description={description}
      embedSrc={GOHIGHLEVEL_QUIZ_CREDIT_URL}
      footnote={
        showLocalForm
          ? "We’ll email your playbook and practical next steps. You can connect the GoHighLevel quiz in lib/m2m-site.ts when it’s ready."
          : undefined
      }
    >
      {showLocalForm ? (
        <div className="mx-auto max-w-xl">
          <div className="bg-m2m-cream px-6 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12">
            {done ? (
              <div role="status" aria-live="polite" className="text-center">
                <p
                  className="text-base font-semibold leading-snug text-m2m-deep sm:text-lg"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Thank you!
                </p>
                <p className="mt-4 text-sm text-m2m-deep/80 font-sans">
                  We received your request. Check your email for next steps.
                </p>
              </div>
            ) : (
              <>
                <p
                  className="mb-10 text-center text-base font-semibold leading-snug text-m2m-deep sm:text-lg"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {PLAYBOOK_CARD_TITLE}
                </p>

                <form
                  data-m2m-lead="improve-your-credit"
                  onSubmit={handleSubmit}
                  aria-busy={submitting}
                  className="space-y-8"
                  aria-label="Credit Improvement Playbook download"
                >
                  <div>
                    <Label htmlFor="credit-playbook-first" className={m2mPlaybookFieldLabelClass}>
                      First name<span className="text-m2m-panel">*</span>
                    </Label>
                    <Input
                      id="credit-playbook-first"
                      type="text"
                      required
                      autoComplete="given-name"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={m2mPlaybookInputClass}
                    />
                  </div>
                  <div>
                    <Label htmlFor="credit-playbook-last" className={m2mPlaybookFieldLabelClass}>
                      Last name<span className="text-m2m-panel">*</span>
                    </Label>
                    <Input
                      id="credit-playbook-last"
                      type="text"
                      required
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className={m2mPlaybookInputClass}
                    />
                  </div>
                  <M2mLeadDobField
                    id="credit-playbook-dob"
                    value={form.dateOfBirth}
                    onChange={(v) => setForm({ ...form, dateOfBirth: v })}
                    inputClassName={m2mPlaybookInputClass}
                    className="text-m2m-deep"
                  />
                  <M2mLeadUrgencySelect
                    id="credit-playbook-urgency"
                    label={M2M_URGENCY_LABEL_CREDIT}
                    value={form.timeline}
                    onChange={(v) => setForm({ ...form, timeline: v })}
                    variant="playbook"
                    hint={M2M_URGENCY_SHARED_HINT}
                  />
                  <div>
                    <Label htmlFor="credit-playbook-email" className={m2mPlaybookFieldLabelClass}>
                      Enter your email here<span className="text-m2m-panel">*</span>
                    </Label>
                    <Input
                      id="credit-playbook-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={m2mPlaybookInputClass}
                    />
                  </div>
                  <div>
                    <Label htmlFor="credit-playbook-phone" className={m2mPlaybookFieldLabelClass}>
                      Phone<span className="text-m2m-panel">*</span>
                    </Label>
                    <Input
                      id="credit-playbook-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={m2mPlaybookInputClass}
                    />
                  </div>
                  <div>
                    <Label htmlFor="credit-playbook-context" className={m2mPlaybookFieldLabelClass}>
                      Anything we should know? <span className="text-m2m-panel/50">(optional)</span>
                    </Label>
                    <Input
                      id="credit-playbook-context"
                      type="text"
                      value={form.context}
                      onChange={(e) => setForm({ ...form, context: e.target.value })}
                      className={m2mPlaybookInputClass}
                      placeholder="Credit goals, co-borrower, or timeline details"
                    />
                  </div>

                  {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="w-full" /> : null}

                  <div className="pt-4 text-center">
                    <Button
                      type="submit"
                      variant="m2mTextUnderline"
                      className="min-h-12 touch-manipulation px-4"
                      disabled={submitting}
                    >
                      {submitting ? "Sending…" : PLAYBOOK_DOWNLOAD_BUTTON}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}
    </M2mLeadQuizSection>
  )
}
