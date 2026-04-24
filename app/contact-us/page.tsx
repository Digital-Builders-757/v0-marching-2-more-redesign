"use client"

import { useEffect, useState } from "react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { M2mContainer } from "@/components/m2m-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { m2mInteriorFormInputClass, m2mInteriorFormTextareaClass } from "@/lib/m2m-form"
import { M2M_URGENCY_SHARED_HINT } from "@/lib/m2m-lead-urgency"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { M2mLeadSubmitWarnings } from "@/components/m2m-lead-submit-warnings"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"
import type { LeadType, SubmitLeadFailure, SubmitLeadWarningCode } from "@/lib/ghl/types"
import { getPrimaryConsultationBookUrl, M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

export default function ContactUsPage() {
  const utm = useM2mUtm()
  const [leadType, setLeadType] = useState<LeadType>("seller")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    timeline: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<SubmitLeadFailure | null>(null)
  const [successFollowUp, setSuccessFollowUp] = useState<{
    warnings: SubmitLeadWarningCode[]
    correlationId: string
  } | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const intent = params.get("intent")?.toLowerCase()
    if (intent === "buyer") setLeadType("buyer")
    if (intent === "seller") setLeadType("seller")
  }, [])

  const messagePlaceholder =
    leadType === "buyer"
      ? "Preferred areas, price range, or questions (optional)"
      : "Property, timeline, or other details (optional)"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    setSubmitting(true)
    try {
      const name = `${formData.firstName} ${formData.lastName}`.trim()
      const res = await submitLeadToApi({
        lead_type: leadType,
        name,
        email: formData.email,
        phone: formData.phone,
        date_of_birth: formData.dateOfBirth,
        address: leadType === "seller" ? formData.address.trim() || undefined : undefined,
        urgency: formData.timeline,
        urgency_explicit: Boolean(formData.timeline.trim()),
        notes: formData.message || undefined,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/contact-us",
      })
      if (!res.ok) {
        setSubmitError(res)
        return
      }
      setSuccessFollowUp({ warnings: res.warnings ?? [], correlationId: res.correlationId })
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-white">
        <section className="pb-20 pt-28">
          <M2mContainer className="max-w-2xl">
            <p className="m2m-eyebrow mb-3 text-m2m-deep">Contact Us</p>

            <h1
              className="mb-6 font-light italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Introduce Yourself
            </h1>

            <p className="mb-6 text-base leading-relaxed text-m2m-muted font-sans">
              Tell us a bit about your goals. One of our agents will review your request and follow up with your next
              steps within 24hrs.
            </p>

            <div className="mb-10 flex flex-col gap-3 border-y border-m2m-deep/10 py-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <a
                href={M2M_PHONE_HREF}
                className="text-sm font-medium text-m2m-deep transition-colors hover:text-m2m-gold font-sans"
              >
                Call or text — {M2M_PHONE_DISPLAY}
              </a>
              <a
                href={getPrimaryConsultationBookUrl()}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-m2m-deep transition-colors hover:text-m2m-gold font-sans"
              >
                Book a consultation
              </a>
            </div>

            {submitted ? (
              <div className="space-y-6 py-12 text-center" role="status" aria-live="polite">
                {successFollowUp?.warnings.length ? (
                  <M2mLeadSubmitWarnings
                    warnings={successFollowUp.warnings}
                    correlationId={successFollowUp.correlationId}
                    variant="onLight"
                    className="mx-auto max-w-lg text-left"
                  />
                ) : null}
                <p className="text-2xl font-light text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                  Thank you!
                </p>
                <p className="mt-4 text-sm text-m2m-muted font-sans">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                data-m2m-lead="contact"
                onSubmit={handleSubmit}
                aria-busy={submitting}
                className="space-y-6 sm:space-y-7"
              >
                <fieldset className="space-y-2">
                  <legend className="mb-0.5 text-sm font-medium text-m2m-deep font-sans">I am primarily…</legend>
                  <p className="text-xs leading-relaxed text-m2m-muted font-sans">We route buyers and sellers to different playbooks. Pick the best fit for today.</p>
                  <div className="flex flex-wrap gap-6 pt-1">
                    <label className="flex min-h-11 cursor-pointer items-center gap-2.5 text-sm text-m2m-deep font-sans touch-manipulation">
                      <input
                        type="radio"
                        name="leadType"
                        checked={leadType === "buyer"}
                        onChange={() => {
                          setLeadType("buyer")
                          setFormData((p) => ({ ...p, address: "" }))
                        }}
                        className="size-4 border-m2m-deep/25 text-m2m-panel focus:ring-m2m-panel"
                      />
                      Looking to buy
                    </label>
                    <label className="flex min-h-11 cursor-pointer items-center gap-2.5 text-sm text-m2m-deep font-sans touch-manipulation">
                      <input
                        type="radio"
                        name="leadType"
                        checked={leadType === "seller"}
                        onChange={() => setLeadType("seller")}
                        className="size-4 border-m2m-deep/25 text-m2m-panel focus:ring-m2m-panel"
                      />
                      Looking to sell
                    </label>
                  </div>
                </fieldset>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="First Name"
                    aria-label="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={m2mInteriorFormInputClass}
                    required
                    autoComplete="given-name"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    aria-label="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={m2mInteriorFormInputClass}
                    required
                    autoComplete="family-name"
                  />
                </div>

                <M2mLeadDobField
                  value={formData.dateOfBirth}
                  onChange={(v) => setFormData({ ...formData, dateOfBirth: v })}
                  inputClassName={m2mInteriorFormInputClass}
                  className="text-m2m-deep"
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={m2mInteriorFormInputClass}
                    required
                    autoComplete="email"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone"
                    aria-label="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={m2mInteriorFormInputClass}
                    required
                    autoComplete="tel"
                  />
                </div>

                <M2mLeadUrgencySelect
                  id="contact-urgency"
                  value={formData.timeline}
                  onChange={(v) => setFormData({ ...formData, timeline: v })}
                  variant="interior"
                  hint={M2M_URGENCY_SHARED_HINT}
                />

                {leadType === "seller" ? (
                  <Input
                    type="text"
                    placeholder="Property address (optional)"
                    aria-label="Property address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className={m2mInteriorFormInputClass}
                    autoComplete="street-address"
                  />
                ) : null}

                <Textarea
                  placeholder={messagePlaceholder}
                  aria-label="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className={m2mInteriorFormTextareaClass}
                />

                {submitError ? (
                  <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="w-full" />
                ) : null}

                <Button
                  type="submit"
                  variant="m2mPanel"
                  className="w-full min-h-12 touch-manipulation"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "That's it — Send!"}
                </Button>
              </form>
            )}
          </M2mContainer>
        </section>
      </main>
      <Footer />
    </>
  )
}
