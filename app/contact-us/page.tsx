"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-white">
        <section className="px-6 pt-28 pb-20 md:px-16 lg:px-24">
          <div className="max-w-2xl mx-auto">
            {/* Page heading */}
            <h1
              className="text-[0.65rem] tracking-[0.3em] uppercase text-m2m-deep mb-8"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Contact Us
            </h1>

            {/* Introduce Yourself */}
            <h2
              className="font-light italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-m2m-deep mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Introduce Yourself
            </h2>

            {/* Description */}
            <p
              className="text-base leading-relaxed text-m2m-muted mb-6"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Tell us a bit about your goals. One of our agents will review your request and follow up with your next steps within 24hrs.
            </p>

            {/* Phone link */}
            <a
              href={M2M_PHONE_HREF}
              className="inline-block text-sm text-m2m-deep hover:text-m2m-gold transition-colors mb-10"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Or give us a call — {M2M_PHONE_DISPLAY}
            </a>

            {/* Form */}
            {submitted ? (
              <div className="py-12 text-center">
                <p
                  className="text-2xl font-light text-m2m-deep"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Thank you!
                </p>
                <p
                  className="mt-4 text-sm text-m2m-muted"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-100 text-sm text-m2m-deep outline-none focus:ring-1 focus:ring-m2m-gold placeholder:text-gray-500"
                    style={{ fontFamily: "var(--font-sans)" }}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-100 text-sm text-m2m-deep outline-none focus:ring-1 focus:ring-m2m-gold placeholder:text-gray-500"
                    style={{ fontFamily: "var(--font-sans)" }}
                    required
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-100 text-sm text-m2m-deep outline-none focus:ring-1 focus:ring-m2m-gold placeholder:text-gray-500"
                    style={{ fontFamily: "var(--font-sans)" }}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-100 text-sm text-m2m-deep outline-none focus:ring-1 focus:ring-m2m-gold placeholder:text-gray-500"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </div>

                {/* Message */}
                <textarea
                  placeholder="Anything else we should know?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-100 text-sm text-m2m-deep outline-none resize-none focus:ring-1 focus:ring-m2m-gold placeholder:text-gray-500"
                  style={{ fontFamily: "var(--font-sans)" }}
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#1B4332] text-white text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:bg-[#1B4332]/90"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  That&apos;s it — Send!
                </button>
              </form>
            )}
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
