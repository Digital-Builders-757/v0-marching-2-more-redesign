"use client"

import { useState } from "react"
import { M2M_PHONE_DISPLAY, M2M_PHONE_TEL } from "@/lib/m2m-site"

export function ContactUsParity() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-white px-6 py-24 md:px-16 lg:px-24 border-t border-m2m-deep/10">
        <p
          className="max-w-xl mx-auto text-center text-2xl text-m2m-deep font-light"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Thank you!
        </p>
      </section>
    )
  }

  return (
    <section className="bg-white px-6 py-16 md:px-16 lg:px-24 border-t border-m2m-deep/10">
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-light text-m2m-deep mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Introduce Yourself
        </h2>
        <p
          className="text-m2m-muted leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Tell us a bit about your goals. One of our agents will review your request and follow
          up with your next steps within 24hrs.
        </p>
        <p className="mb-10">
          <a
            href={`tel:${M2M_PHONE_TEL}`}
            className="text-m2m-gold hover:text-m2m-deep text-sm tracking-wide transition-colors"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Or give us a call — {M2M_PHONE_DISPLAY}
          </a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="cu-first"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70 mb-2 block"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                First name
              </label>
              <input
                id="cu-first"
                required
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full border border-m2m-deep/20 text-m2m-deep text-sm px-4 py-3 outline-none focus:border-m2m-gold"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>
            <div>
              <label
                htmlFor="cu-last"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70 mb-2 block"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Last name
              </label>
              <input
                id="cu-last"
                required
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full border border-m2m-deep/20 text-m2m-deep text-sm px-4 py-3 outline-none focus:border-m2m-gold"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cu-email"
              className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70 mb-2 block"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Email
            </label>
            <input
              id="cu-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-m2m-deep/20 text-m2m-deep text-sm px-4 py-3 outline-none focus:border-m2m-gold"
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </div>

          <div>
            <label
              htmlFor="cu-message"
              className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep/70 mb-2 block"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Message
            </label>
            <textarea
              id="cu-message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-m2m-deep/20 text-m2m-deep text-sm px-4 py-3 outline-none focus:border-m2m-gold resize-none"
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </div>

          <button
            type="submit"
            className="text-[0.7rem] tracking-[0.2em] uppercase bg-m2m-deep text-m2m-cream font-medium px-10 py-4 hover:bg-m2m-deep/90 transition-colors"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            That&apos;s it — Send!
          </button>
        </form>
      </div>
    </section>
  )
}
