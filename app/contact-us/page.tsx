"use client"

import { useState } from "react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { M2mContainer } from "@/components/m2m-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { m2mInteriorFormInputClass, m2mInteriorFormTextareaClass } from "@/lib/m2m-form"
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
        <section className="pb-20 pt-28">
          <M2mContainer className="max-w-2xl">
            <h1 className="m2m-eyebrow mb-8 text-m2m-deep">Contact Us</h1>

            <h2
              className="mb-6 font-light italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Introduce Yourself
            </h2>

            <p className="mb-6 text-base leading-relaxed text-m2m-muted font-sans">
              Tell us a bit about your goals. One of our agents will review your request and follow up with your next
              steps within 24hrs.
            </p>

            <a
              href={M2M_PHONE_HREF}
              className="mb-10 inline-block text-sm text-m2m-deep transition-colors hover:text-m2m-gold font-sans"
            >
              Or give us a call — {M2M_PHONE_DISPLAY}
            </a>

            {submitted ? (
              <div className="py-12 text-center">
                <p className="text-2xl font-light text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                  Thank you!
                </p>
                <p className="mt-4 text-sm text-m2m-muted font-sans">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="First Name"
                    aria-label="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={m2mInteriorFormInputClass}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    aria-label="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={m2mInteriorFormInputClass}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={m2mInteriorFormInputClass}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone"
                    aria-label="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={m2mInteriorFormInputClass}
                  />
                </div>

                <Textarea
                  placeholder="Anything else we should know?"
                  aria-label="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={m2mInteriorFormTextareaClass}
                />

                <Button type="submit" variant="m2mPanel" className="w-full">
                  That&apos;s it — Send!
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
