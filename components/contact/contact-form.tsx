"use client"

import { useState } from "react"

import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wix parity: form submission wiring TBD.
    console.log("Contact form:", formData)
  }

  return (
    <section id="book" className="bg-white px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Left Text */}
          <div className="lg:col-span-2" data-gsap="fade-right">
            <p
              className="mb-4 text-sm tracking-[0.3em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Send a Message
            </p>
            <h2
              className="mb-6 font-light leading-[1.1] text-m2m-deep text-[clamp(1.8rem,3vw,2.5rem)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We&apos;d Love to <em className="italic">Hear From You</em>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
              Fill out the form and our team will get back to you within 24 hours. For immediate assistance, give us a
              call.
            </p>
            <a
              href={M2M_PHONE_HREF}
              className="inline-block border border-m2m-deep px-8 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-m2m-deep transition-all duration-300 hover:bg-m2m-deep hover:text-m2m-cream"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Call {M2M_PHONE_DISPLAY}
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3" data-gsap="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full border border-m2m-deep/20 px-4 py-3 text-sm text-m2m-deep outline-none transition-colors placeholder:text-m2m-muted focus:border-m2m-gold"
                    style={{ fontFamily: "var(--font-sans)" }}
                    autoComplete="given-name"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full border border-m2m-deep/20 px-4 py-3 text-sm text-m2m-deep outline-none transition-colors placeholder:text-m2m-muted focus:border-m2m-gold"
                    style={{ fontFamily: "var(--font-sans)" }}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-m2m-deep/20 px-4 py-3 text-sm text-m2m-deep outline-none transition-colors placeholder:text-m2m-muted focus:border-m2m-gold"
                  style={{ fontFamily: "var(--font-sans)" }}
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Anything else we should know?
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full resize-none border border-m2m-deep/20 px-4 py-3 text-sm text-m2m-deep outline-none transition-colors placeholder:text-m2m-muted focus:border-m2m-gold"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-m2m-deep px-10 py-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-m2m-cream transition-colors hover:bg-m2m-deep/90"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                That&apos;s it — Send!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
