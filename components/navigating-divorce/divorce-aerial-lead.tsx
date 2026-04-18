"use client"

import { useState } from "react"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { M2mContainer } from "@/components/m2m-layout"

import { AERIAL_BACKGROUND, AERIAL_COPY } from "./content"

export function DivorceAerialLead() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire to CRM / email / server action when ready.
    console.log("Divorce guide lead:", form)
  }

  return (
    <section
      id="guide-form"
      className="relative scroll-mt-24 border-b border-m2m-gold/15"
      aria-labelledby="aerial-heading"
    >
      <div className="absolute inset-0">
        <Image src={AERIAL_BACKGROUND} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-m2m-deep/92 via-m2m-deep/80 to-m2m-deep/65" />
      </div>

      <M2mContainer className="relative z-10 py-16 lg:flex lg:items-stretch lg:gap-14 lg:py-24">
        <div className="mb-12 max-w-xl lg:mb-0 lg:flex-1 lg:pt-4">
          <h2
            id="aerial-heading"
            className="mb-4 text-[clamp(1.85rem,3.5vw,2.65rem)] font-semibold leading-tight text-m2m-cream"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {AERIAL_COPY.headline}
          </h2>
          <p
            className="mb-10 text-lg italic leading-relaxed text-m2m-cream/95"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {AERIAL_COPY.subhead}
          </p>
          {AERIAL_COPY.blocks.map((b) => (
            <div key={b.title} className="mb-8 last:mb-0">
              <h3 className="mb-2 text-base font-bold text-m2m-cream" style={{ fontFamily: "var(--font-sans)" }}>
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-m2m-cream/90" style={{ fontFamily: "var(--font-sans)" }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:w-[min(100%,420px)] lg:flex-shrink-0">
          <div className="rounded-sm bg-[#f3f3fb] px-6 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10">
            <p
              className="mb-8 text-center text-[0.95rem] font-medium leading-snug text-m2m-panel"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Please complete the form below to receive a complimentary copy of our guide on &apos;How to Sell Your Home
              During a Divorce&apos;
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Request divorce and real estate guide">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">First name</span>
                  <input
                    type="text"
                    name="firstName"
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
                className="w-full bg-m2m-panel py-4 text-center text-[0.95rem] font-medium text-m2m-cream transition hover:bg-m2m-panel-lt"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get Your Free Guide Now!
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
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-m2m-panel">
                  <Facebook className="h-5 w-5" strokeWidth={1.25} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-m2m-panel">
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
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
