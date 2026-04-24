"use client"

import { usePathname } from "next/navigation"
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
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

function leadTypeFromInterest(interest: string): "buyer" | "seller" {
  if (interest === "buying" || interest === "pcs") return "buyer"
  if (interest === "selling" || interest === "valuation") return "seller"
  return "seller"
}

export function Contact() {
  const pathname = usePathname()
  const utm = useM2mUtm()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
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
      const name = `${formData.firstName} ${formData.lastName}`.trim()
      const interestLine = formData.interest
        ? `Interest: ${formData.interest.replace(/-/g, " ")}`
        : "Interest: not specified"
      const notes = [interestLine, formData.message.trim()].filter(Boolean).join("\n\n")
      const res = await submitLeadToApi({
        lead_type: leadTypeFromInterest(formData.interest),
        name,
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        urgency: formData.timeline,
        urgency_explicit: formData.timeline.trim() !== M2M_URGENCY_SHORT_FORM_DEFAULT,
        notes,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: pathname || "/",
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
    <section id="contact" className="bg-m2m-panel border-t border-m2m-gold/20 px-6 py-16 md:px-[60px] md:py-[120px] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute -bottom-[200px] -right-[200px] w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(205,176,95,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left content */}
        <div className="flex flex-col gap-8">
          <h2 
            className="font-light text-[clamp(2.5rem,4.5vw,4.2rem)] leading-none text-m2m-cream"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Have a question? <br />
            <em className="italic text-m2m-gold">Contact Us</em>
          </h2>

          <p 
            className="text-sm leading-relaxed text-m2m-muted-lt max-w-md"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Whether you&apos;re buying, selling, or just exploring your options, 
            we&apos;re here to help. Call or Text - Anytime.
          </p>

          <div className="flex flex-col gap-4">
            <ContactDetail label="Phone" value="757-206-2859" />
            <ContactDetail label="Email" value="hello@marching2more.com" />
            <ContactDetail label="Office" value="582 Lynnhaven Pkwy ste 400, Virginia Beach, VA 23452" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-busy={submitting}>
          {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onDark" className="w-full" /> : null}
          {done ? (
            <div className="space-y-4">
              {successFollowUp?.warnings.length ? (
                <M2mLeadSubmitWarnings
                  warnings={successFollowUp.warnings}
                  correlationId={successFollowUp.correlationId}
                  variant="onDark"
                  className="text-left"
                />
              ) : null}
              <p className="text-m2m-cream font-sans" role="status" aria-live="polite">
                Thank you! We&apos;ll be in touch soon.
              </p>
            </div>
          ) : null}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${done ? "hidden" : ""}`}>
            <FormGroup
              label="First Name"
              required
              value={formData.firstName}
              onChange={(v) => setFormData({ ...formData, firstName: v })}
              placeholder="John"
            />
            <FormGroup
              label="Last Name"
              value={formData.lastName}
              onChange={(v) => setFormData({ ...formData, lastName: v })}
              placeholder="Smith"
            />
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${done ? "hidden" : ""}`}>
            <FormGroup
              label="Email"
              type="email"
              required
              value={formData.email}
              onChange={(v) => setFormData({ ...formData, email: v })}
              placeholder="john@example.com"
            />
            <FormGroup
              label="Phone"
              type="tel"
              value={formData.phone}
              onChange={(v) => setFormData({ ...formData, phone: v })}
              placeholder="(757) 555-0123"
            />
          </div>

          <div className={`flex flex-col gap-2 ${done ? "hidden" : ""}`}>
            <label 
              className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              I&apos;m Interested In
            </label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="bg-black/35 border border-m2m-gold/20 text-m2m-cream text-sm font-light px-4 py-3.5 outline-none transition-colors focus:border-m2m-gold appearance-none"
            >
              <option value="">Select an option</option>
              <option value="buying">Buying a Home</option>
              <option value="selling">Selling a Home</option>
              <option value="pcs">PCS Relocation</option>
              <option value="valuation">Home Valuation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={`${done ? "hidden" : ""}`}>
            <M2mLeadUrgencySelect
              id="home-contact-urgency"
              label={M2M_URGENCY_LABEL_SHORT_FORM}
              value={formData.timeline}
              onChange={(v) => setFormData({ ...formData, timeline: v })}
              variant="dark"
              mode="short"
              required={false}
              hint={M2M_URGENCY_SHARED_HINT}
            />
          </div>

          <div className={`flex flex-col gap-2 ${done ? "hidden" : ""}`}>
            <label 
              className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your real estate goals..."
              rows={5}
              className="bg-black/35 border border-m2m-gold/20 text-m2m-cream text-sm font-light px-4 py-3.5 outline-none transition-colors focus:border-m2m-gold resize-y min-h-[120px] placeholder:text-m2m-muted"
            />
          </div>

          <button
            type="submit"
            disabled={submitting || done}
            className="text-[0.7rem] tracking-[0.2em] uppercase bg-m2m-gold text-m2m-deep font-medium px-9 py-4 transition-colors hover:bg-m2m-gold-lt self-start mt-1 disabled:opacity-70"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>

          <p className={`text-[0.6rem] text-m2m-muted italic tracking-wider leading-relaxed ${done ? "hidden" : ""}`}>
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </form>
      </div>
    </section>
  )
}

function ContactDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span 
        className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold"
        style={{ fontFamily: 'var(--font-nav)' }}
      >
        {label}
      </span>
      <span 
        className="text-lg font-light text-m2m-cream"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {value}
      </span>
    </div>
  )
}

function FormGroup({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required: requiredProp,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label 
        className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold"
        style={{ fontFamily: 'var(--font-nav)' }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={requiredProp}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-black/35 border border-m2m-gold/20 text-m2m-cream text-sm font-light px-4 py-3.5 outline-none transition-colors focus:border-m2m-gold placeholder:text-m2m-muted"
        style={{ fontFamily: 'var(--font-sans)' }}
      />
    </div>
  )
}
