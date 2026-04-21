"use client"

import { useState } from "react"
import Image from "next/image"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { M2mContainer, M2mInsetHeroFrame, M2mInsetHeroScrim } from "@/components/m2m-layout"
import { m2mCmaFormInputClass, m2mCmaFormTextareaClass } from "@/lib/m2m-form"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

export default function CmaFormPage() {
  const utm = useM2mUtm()
  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    postalCode: "",
    propertyCondition: "",
    timeline: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    goals: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const name = `${formData.firstName} ${formData.lastName}`.trim()
      const addressParts = [formData.streetAddress, formData.city, formData.postalCode].filter(Boolean)
      const address = addressParts.length ? addressParts.join(", ") : undefined
      const notesLines = [
        formData.propertyCondition ? `Property condition: ${formData.propertyCondition}` : "",
        formData.goals ? `Goals / concerns: ${formData.goals}` : "",
      ].filter(Boolean)
      const notes = notesLines.length ? notesLines.join("\n") : undefined

      const res = await submitLeadToApi({
        lead_type: "seller",
        name,
        email: formData.email,
        phone: formData.phone,
        date_of_birth: formData.dateOfBirth,
        address,
        urgency: formData.timeline || undefined,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: "/cma-form",
        notes,
      })
      if (!res.ok) {
        setError(res.error)
        return
      }
      setDone(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-white">
        {/* Hero with background image */}
        <section className="relative min-h-screen overflow-hidden bg-white py-6 md:py-8">
          <M2mInsetHeroFrame className="min-h-[calc(100dvh-3rem)]">
            <div className="absolute inset-0">
              <Image
                src="/images/cma-hero.png"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <M2mInsetHeroScrim variant="75" />

            <M2mContainer className="relative pt-28 pb-16">
              <div className="mx-auto max-w-5xl">
                {/* Kicker */}
                <div className="flex items-center gap-4">
                  <p
                    className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    CMA Request Form
                  </p>
                  <span className="h-px w-24 bg-m2m-cream/40" />
                </div>

                {/* Heading */}
                <h1
                  className="mt-8 font-light italic text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-m2m-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Comprehensive
                  <br />
                  Market Analysis
                </h1>

                {/* Subheading */}
                <p
                  className="mt-6 max-w-lg text-base leading-relaxed text-m2m-cream/95"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Unlock the true potential of your property with our Comprehensive Market Analysis
                </p>

                {/* Phone CTA */}
                <a
                  href={M2M_PHONE_HREF}
                  className="mt-8 inline-flex items-center justify-center border border-m2m-cream/60 text-m2m-cream text-[0.7rem] tracking-[0.15em] font-medium px-8 py-4 transition hover:border-m2m-cream hover:bg-m2m-cream/10"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Or give us a call — {M2M_PHONE_DISPLAY}
                </a>

                {/* Form Card */}
                {done ? (
                  <div className="mt-12 max-w-2xl rounded-xl border border-m2m-deep/12 bg-m2m-cream p-8 text-center shadow-[0_8px_40px_-12px_rgba(5,13,6,0.18)] ring-1 ring-m2m-deep/5">
                    <p className="text-2xl font-light text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                      Thank you!
                    </p>
                    <p className="mt-4 text-sm text-m2m-deep/80 font-sans">
                      We received your CMA request. A member of the team will reach out shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="mt-12 max-w-2xl rounded-xl border border-m2m-deep/12 bg-m2m-cream p-8 shadow-[0_8px_40px_-12px_rgba(5,13,6,0.18)] ring-1 ring-m2m-deep/5"
                  >
                    {/* Property Address Section */}
                    <div className="mb-8">
                      <h2
                        className="mb-4 text-lg font-semibold text-m2m-deep"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Property Address
                      </h2>
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="streetAddress"
                          placeholder="Street Address"
                          value={formData.streetAddress}
                          onChange={handleInputChange}
                          className={m2mCmaFormInputClass}
                        />
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={m2mCmaFormInputClass}
                          />
                          <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal / Zip code"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            className={m2mCmaFormInputClass}
                          />
                        </div>
                      </div>
                    </div>

                    <hr className="mb-8 border-m2m-deep/10" />

                    {/* Property Condition Section */}
                    <div className="mb-8">
                      <h2
                        className="mb-2 text-lg font-semibold text-m2m-deep"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Property Condition
                      </h2>
                      <p className="mb-4 text-xs text-m2m-deep/70" style={{ fontFamily: "var(--font-sans)" }}>
                        Select an option
                      </p>
                      <div className="space-y-2">
                        {["Newly Renovated", "Well Maintained", "Needs Work", "Distressed Property"].map((option) => (
                          <label key={option} className="flex cursor-pointer items-center gap-3">
                            <input
                              type="radio"
                              name="propertyCondition"
                              value={option}
                              checked={formData.propertyCondition === option}
                              onChange={handleInputChange}
                              className="size-4 border-m2m-deep/25 text-m2m-gold focus:ring-m2m-gold"
                            />
                            <span className="text-sm text-m2m-deep/90" style={{ fontFamily: "var(--font-sans)" }}>
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <hr className="mb-8 border-m2m-deep/10" />

                    {/* Timeline for Selling Section */}
                    <div className="mb-8">
                      <h2
                        className="mb-2 text-lg font-semibold text-m2m-deep"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Timeline for Selling
                      </h2>
                      <p className="mb-4 text-xs text-m2m-deep/70" style={{ fontFamily: "var(--font-sans)" }}>
                        Select an option
                      </p>
                      <div className="space-y-2">
                        {[
                          "Immediate (0-1 month)",
                          "Short Term (1-3 months)",
                          "Medium Term (3-6 months)",
                          "Long Term (6+ months)",
                          "Undecided",
                        ].map((option) => (
                          <label key={option} className="flex cursor-pointer items-center gap-3">
                            <input
                              type="radio"
                              name="timeline"
                              value={option}
                              checked={formData.timeline === option}
                              onChange={handleInputChange}
                              className="size-4 border-m2m-deep/25 text-m2m-gold focus:ring-m2m-gold"
                            />
                            <span className="text-sm text-m2m-deep/90" style={{ fontFamily: "var(--font-sans)" }}>
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <hr className="mb-8 border-m2m-deep/10" />

                    {/* Introduce Yourself Section */}
                    <div className="mb-8">
                      <h2
                        className="mb-4 text-lg font-semibold text-m2m-deep"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Introduce Yourself
                      </h2>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={m2mCmaFormInputClass}
                            required
                            autoComplete="given-name"
                          />
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={m2mCmaFormInputClass}
                            required
                            autoComplete="family-name"
                          />
                        </div>
                        <M2mLeadDobField
                          value={formData.dateOfBirth}
                          onChange={(v) => setFormData((p) => ({ ...p, dateOfBirth: v }))}
                          inputClassName={m2mCmaFormInputClass}
                          className="text-m2m-deep"
                        />
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={m2mCmaFormInputClass}
                            required
                            autoComplete="email"
                          />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={m2mCmaFormInputClass}
                            required
                            autoComplete="tel"
                          />
                        </div>
                        <textarea
                          name="goals"
                          placeholder="Any specific goals or concerns?"
                          value={formData.goals}
                          onChange={handleInputChange}
                          rows={4}
                          className={m2mCmaFormTextareaClass}
                        />
                      </div>
                    </div>

                    {error ? (
                      <p className="mb-4 text-center text-sm text-red-700 font-sans" role="alert">
                        {error}
                      </p>
                    ) : null}

                    {/* Privacy text */}
                    <p
                      className="mb-6 text-center text-xs text-m2m-deep/70"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Your information is kept confidential and used only to respond to your CMA request.
                    </p>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-md bg-m2m-deep py-4 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-m2m-cream transition hover:bg-m2m-deep/90 disabled:opacity-60"
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      {submitting ? "Sending…" : "That's it — Send!"}
                    </button>
                  </form>
                )}
              </div>
            </M2mContainer>
          </M2mInsetHeroFrame>
        </section>
      </main>
      <Footer />
    </>
  )
}
