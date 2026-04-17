"use client"

import { useState } from "react"
import Image from "next/image"

import { FLAG_QUOTE_BACKGROUND, QUOTE_FORM } from "./content"

export function FhaQuoteForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("FHA quote request:", form)
  }

  return (
    <section
      id="request-quote"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-28"
      aria-labelledby="fha-quote-heading"
    >
      <div className="absolute inset-0">
        <Image src={FLAG_QUOTE_BACKGROUND} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-m2m-deep/25 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-none bg-white px-6 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12">
          <h2
            id="fha-quote-heading"
            className="mb-2 text-center text-2xl font-bold text-black"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {QUOTE_FORM.title}
          </h2>
          <p className="mb-10 text-center text-sm text-black/80" style={{ fontFamily: "var(--font-sans)" }}>
            {QUOTE_FORM.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-7" aria-label="Request a quote">
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <div>
                <label
                  className="mb-2 block text-xs font-medium text-black"
                  style={{ fontFamily: "var(--font-sans)" }}
                  htmlFor="fha-first"
                >
                  First Name
                </label>
                <input
                  id="fha-first"
                  type="text"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full border border-black/80 bg-white px-3 py-2.5 text-sm text-black outline-none focus:ring-1 focus:ring-m2m-panel"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-xs font-medium text-black"
                  style={{ fontFamily: "var(--font-sans)" }}
                  htmlFor="fha-last"
                >
                  Last Name
                </label>
                <input
                  id="fha-last"
                  type="text"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="w-full border border-black/80 bg-white px-3 py-2.5 text-sm text-black outline-none focus:ring-1 focus:ring-m2m-panel"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>
            </div>

            <div>
              <label
                className="mb-2 block text-xs font-medium text-black"
                style={{ fontFamily: "var(--font-sans)" }}
                htmlFor="fha-email"
              >
                Email *
              </label>
              <input
                id="fha-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-black/80 bg-white px-3 py-2.5 text-sm text-black outline-none focus:ring-1 focus:ring-m2m-panel"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>

            <div>
              <label
                className="mb-2 block text-xs font-medium text-black"
                style={{ fontFamily: "var(--font-sans)" }}
                htmlFor="fha-subject"
              >
                Subject *
              </label>
              <input
                id="fha-subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border border-black/80 bg-white px-3 py-2.5 text-sm text-black outline-none focus:ring-1 focus:ring-m2m-panel"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>

            <div>
              <label
                className="mb-2 block text-xs font-medium text-black"
                style={{ fontFamily: "var(--font-sans)" }}
                htmlFor="fha-message"
              >
                Leave us a message...
              </label>
              <textarea
                id="fha-message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-y border border-black/80 bg-white px-3 py-2.5 text-sm text-black outline-none focus:ring-1 focus:ring-m2m-panel"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-m2m-panel py-3.5 text-center text-sm font-medium text-white transition hover:bg-m2m-panel-lt"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {QUOTE_FORM.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
