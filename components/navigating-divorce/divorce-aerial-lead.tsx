"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { M2mLeadSubmitWarnings } from "@/components/m2m-lead-submit-warnings"
import { M2mContainer } from "@/components/m2m-layout"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import type { SubmitLeadFailure, SubmitLeadWarningCode } from "@/lib/ghl/types"
import {
  M2M_URGENCY_LABEL_SHORT_FORM,
  M2M_URGENCY_SHARED_HINT,
  M2M_URGENCY_SHORT_FORM_DEFAULT,
} from "@/lib/m2m-lead-urgency"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

import { AERIAL_BACKGROUND, AERIAL_COPY } from "./content"

export function DivorceAerialLead() {
  const pathname = usePathname()
  const utm = useM2mUtm()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    timeline: M2M_URGENCY_SHORT_FORM_DEFAULT,
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
      const notes = [form.message.trim(), "Divorce home-selling guide request"].filter(Boolean).join("\n\n")
      const res = await submitLeadToApi({
        lead_type: "seller",
        name,
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        urgency: form.timeline,
        urgency_explicit: form.timeline.trim() !== M2M_URGENCY_SHORT_FORM_DEFAULT,
        notes: notes || undefined,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: pathname || "/navigating-divorce",
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

  return (
    <section
      id="guide-form"
      className="relative scroll-mt-24 border-b border-m2m-gold/15"
      aria-labelledby="aerial-heading"
    >
      <div className="absolute inset-0">
        <Image src={AERIAL_BACKGROUND} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-m2m-deep/72 via-m2m-deep/52 to-m2m-deep/38" />
      </div>

      <M2mContainer className="relative z-10 py-20 lg:flex lg:items-stretch lg:gap-16 lg:py-28">
        <div className="mb-14 max-w-xl lg:mb-0 lg:flex-1 lg:pt-4">
          <p
            className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold-lt sm:text-[0.7rem]"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            We&apos;re Here For You
          </p>
          <h2
            id="aerial-heading"
            className="mb-4 text-balance text-[clamp(1.85rem,3.5vw,2.65rem)] font-semibold leading-tight text-m2m-cream"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {AERIAL_COPY.headline}
          </h2>
          <p
            className="mb-10 text-pretty text-lg italic leading-relaxed text-m2m-cream/95"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {AERIAL_COPY.subhead}
          </p>
          {AERIAL_COPY.blocks.map((b) => (
            <div key={b.title} className="mb-8 last:mb-0">
              <h3 className="mb-2 text-base font-bold text-m2m-gold-lt" style={{ fontFamily: "var(--font-nav)" }}>
                {b.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-m2m-cream/90" style={{ fontFamily: "var(--font-sans)" }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:w-[min(100%,420px)] lg:flex-shrink-0">
          <div className="rounded-sm bg-[#f3f3fb] px-6 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10">
            {done ? (
              <div className="space-y-4" role="status" aria-live="polite">
                {successFollowUp?.warnings.length ? (
                  <M2mLeadSubmitWarnings
                    warnings={successFollowUp.warnings}
                    correlationId={successFollowUp.correlationId}
                    variant="onLight"
                    className="text-left"
                  />
                ) : null}
                <p className="text-center text-[0.95rem] font-medium leading-snug text-m2m-panel font-sans">
                  Thank you! We&apos;ll send your guide.
                </p>
              </div>
            ) : (
              <>
                <p
                  className="mb-8 text-center text-[0.95rem] font-medium leading-snug text-m2m-panel"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Please complete the form below to receive a complimentary copy of our guide on &apos;How to Sell Your
                  Home During a Divorce&apos;
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  aria-label="Request divorce and real estate guide"
                  aria-busy={submitting}
                >
                  {submitError ? (
                    <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="w-full" />
                  ) : null}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="sr-only">First name</span>
                      <input
                        type="text"
                        name="firstName"
                        required
                        autoComplete="given-name"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="w-full border-0 border-b border-m2m-panel/35 bg-transparent py-2 text-sm text-m2m-deep outline-none placeholder:text-m2m-muted focus:border-m2m-gold"
                        style={{ fontFamily: "var(--font-sans)" }}
                      />
                    </label>
                    <label className="block">
                      <span className="sr-only">Last name</span>
                      <input
                        type="text"
                        name="lastName"
                        required
                        autoComplete="family-name"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="w-full border-0 border-b border-m2m-panel/35 bg-transparent py-2 text-sm text-m2m-deep outline-none placeholder:text-m2m-muted focus:border-m2m-gold"
                        style={{ fontFamily: "var(--font-sans)" }}
                      />
                    </label>
                  </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email*"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-0 border-b border-m2m-panel/35 bg-transparent py-2 text-sm text-m2m-deep outline-none placeholder:text-m2m-muted focus:border-m2m-gold"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border-0 border-b border-m2m-panel/35 bg-transparent py-2 text-sm text-m2m-deep outline-none placeholder:text-m2m-muted focus:border-m2m-gold"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </label>
              </div>
              <M2mLeadUrgencySelect
                id="divorce-urgency"
                label={M2M_URGENCY_LABEL_SHORT_FORM}
                value={form.timeline}
                onChange={(v) => setForm({ ...form, timeline: v })}
                variant="playbook"
                mode="short"
                required={false}
                hint={M2M_URGENCY_SHARED_HINT}
                className="text-m2m-deep"
              />
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-y border-0 border-b border-m2m-panel/35 bg-transparent py-2 text-sm text-m2m-deep outline-none placeholder:text-m2m-muted focus:border-m2m-gold"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full min-h-[52px] bg-m2m-panel py-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-m2m-cream transition hover:bg-m2m-panel-lt disabled:opacity-70"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {submitting ? "Sending…" : "Get Your Free Guide Now"}
                  </button>

                  <p className="text-center">
                    <a
                      href="#"
                      className="text-xs text-m2m-panel underline decoration-m2m-gold/60 underline-offset-4 hover:text-m2m-gold-dim"
                      style={{ fontFamily: "var(--font-sans)" }}
                      onClick={(e) => e.preventDefault()}
                    >
                      Click here to download
                    </a>
                  </p>

                  <div className="flex justify-center gap-5 pt-2 text-m2m-panel/70">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="hover:text-m2m-panel"
                    >
                      <Facebook className="h-5 w-5" strokeWidth={1.25} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      className="hover:text-m2m-panel"
                    >
                      <Twitter className="h-5 w-5" strokeWidth={1.25} />
                    </a>
                    <a
                      href="https://www.instagram.com/marching2more"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="hover:text-m2m-panel"
                    >
                      <Instagram className="h-5 w-5" strokeWidth={1.25} />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="hover:text-m2m-panel"
                    >
                      <Linkedin className="h-5 w-5" strokeWidth={1.25} />
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
