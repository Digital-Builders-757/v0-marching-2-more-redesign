"use client"

import { useState } from "react"

import {
  LEAD_HELPER,
  LEAD_HEADING,
  LEAD_LABEL_EMAIL,
  LEAD_LABEL_MESSAGE,
  LEAD_LABEL_NAME,
  LEAD_PLACEHOLDER_EMAIL,
  LEAD_SUBHEAD,
  LEAD_SUBMIT_LABEL,
  LEAD_TEXTAREA_PLACEHOLDER,
  VA_LEAD_SECTION_ID,
} from "./content"

export function VaLeadForm() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire to CRM, Server Action, or transactional email — replace console stub before launch.
    console.log("VA loan benefits lead:", form)
  }

  const inputClass =
    "w-full rounded-md border border-m2m-deep/15 bg-white px-3 py-3 text-sm text-m2m-deep outline-none transition placeholder:text-m2m-muted focus:border-m2m-panel focus:ring-2 focus:ring-m2m-panel/25"

  const labelClass =
    "mb-1.5 block text-left text-[0.7rem] font-medium uppercase tracking-[0.12em] text-m2m-deep/75"

  return (
    <section
      id={VA_LEAD_SECTION_ID}
      className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="va-lead-heading"
    >
      <div className="mx-auto max-w-lg">
        <h2
          id="va-lead-heading"
          className="text-center text-[clamp(1.75rem,3.2vw,2.35rem)] font-medium text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {LEAD_HEADING}
        </h2>
        <p
          className="mt-3 text-center text-base text-m2m-cream/90"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {LEAD_SUBHEAD}
        </p>
        <p
          className="mt-4 text-center text-sm leading-relaxed text-m2m-cream/80"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {LEAD_HELPER}
        </p>

        <div className="mt-10 rounded-sm bg-m2m-cream p-6 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5" aria-label="Get on the list">
            <div>
              <label htmlFor="va-lead-email" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
                {LEAD_LABEL_EMAIL} <span className="text-m2m-panel">*</span>
              </label>
              <input
                id="va-lead-email"
                type="email"
                required
                autoComplete="email"
                placeholder={LEAD_PLACEHOLDER_EMAIL}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>
            <div>
              <label htmlFor="va-lead-name" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
                {LEAD_LABEL_NAME} <span className="text-m2m-panel">*</span>
              </label>
              <input
                id="va-lead-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>
            <div>
              <label htmlFor="va-lead-message" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
                {LEAD_LABEL_MESSAGE}
              </label>
              <textarea
                id="va-lead-message"
                rows={5}
                placeholder={LEAD_TEXTAREA_PLACEHOLDER}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} min-h-[8rem] resize-y`}
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-m2m-gold px-6 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-m2m-deep transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {LEAD_SUBMIT_LABEL}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
