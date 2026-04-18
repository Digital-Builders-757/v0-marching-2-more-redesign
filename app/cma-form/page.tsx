"use client"

import { useState } from "react"
import Image from "next/image"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { M2mContainer } from "@/components/m2m-layout"
import { m2mInteriorFormInputClass, m2mInteriorFormTextareaClass } from "@/lib/m2m-form"

import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

export default function CmaFormPage() {
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
    goals: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-white">
        {/* Hero with background image */}
        <section className="relative min-h-screen overflow-hidden bg-white py-6 md:py-8">
          {/* Inner container with background image at 95% width */}
          <div 
            className="relative mx-auto overflow-hidden rounded-xl"
            style={{ width: '95%', minHeight: 'calc(100vh - 48px)' }}
          >
            {/* Background image */}
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
            {/* Dark green overlay */}
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(5, 13, 6, 0.75)" }}
            />

            <M2mContainer className="relative pt-28 pb-16">
              <div className="mx-auto max-w-5xl">
              {/* Kicker */}
              <div className="flex items-center gap-4">
                <p
                  className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-cream"
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
                Comprehensive<br />Market Analysis
              </h1>

              {/* Subheading */}
              <p
                className="mt-6 max-w-lg text-base leading-relaxed text-m2m-cream"
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
              <form onSubmit={handleSubmit} className="mt-12 bg-white/95 backdrop-blur-sm rounded-lg p-8 max-w-2xl shadow-xl">
                {/* Property Address Section */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-semibold text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                    Property Address
                  </h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="streetAddress"
                      placeholder="Street Address"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className={m2mInteriorFormInputClass}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={m2mInteriorFormInputClass}
                      />
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal / Zip code"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className={m2mInteriorFormInputClass}
                      />
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200 mb-8" />

                {/* Property Condition Section */}
                <div className="mb-8">
                  <h2 className="mb-2 text-lg font-semibold text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                    Property Condition
                  </h2>
                  <p className="text-xs text-gray-500 mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                    Select an option
                  </p>
                  <div className="space-y-2">
                    {["Newly Renovated", "Well Maintained", "Needs Work", "Distressed Property"].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="propertyCondition"
                          value={option}
                          checked={formData.propertyCondition === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-m2m-gold border-gray-300 focus:ring-m2m-gold"
                        />
                        <span className="text-sm text-gray-700" style={{ fontFamily: "var(--font-sans)" }}>
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <hr className="border-gray-200 mb-8" />

                {/* Timeline for Selling Section */}
                <div className="mb-8">
                  <h2 className="mb-2 text-lg font-semibold text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                    Timeline for Selling
                  </h2>
                  <p className="text-xs text-gray-500 mb-4" style={{ fontFamily: "var(--font-sans)" }}>
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
                      <label key={option} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="timeline"
                          value={option}
                          checked={formData.timeline === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-m2m-gold border-gray-300 focus:ring-m2m-gold"
                        />
                        <span className="text-sm text-gray-700" style={{ fontFamily: "var(--font-sans)" }}>
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <hr className="border-gray-200 mb-8" />

                {/* Introduce Yourself Section */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-semibold text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                    Introduce Yourself
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={m2mInteriorFormInputClass}
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={m2mInteriorFormInputClass}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={m2mInteriorFormInputClass}
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={m2mInteriorFormInputClass}
                      />
                    </div>
                    <textarea
                      name="goals"
                      placeholder="Any specific goals or concerns?"
                      value={formData.goals}
                      onChange={handleInputChange}
                      rows={4}
                      className={m2mInteriorFormTextareaClass}
                    />
                  </div>
                </div>

                {/* Privacy text */}
                <p className="mb-6 text-center text-xs text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
                  Your information is kept confidential and used only to respond to your CMA request.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-m2m-deep py-4 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-m2m-cream transition hover:bg-m2m-deep/90"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  That&apos;s it — Send!
                </button>
              </form>
              </div>
            </M2mContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
