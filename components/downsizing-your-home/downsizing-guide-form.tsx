"use client"

import { useState } from "react"

import {
  DOWNSIZING_GUIDE_SECTION_ID,
  GUIDE_CTA_LABEL,
  GUIDE_HEADING,
  GUIDE_INTRO,
} from "./content"

export function DownsizingGuideForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    shipTo: "",
    specialInstructions: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire to CRM, Server Action, or transactional email — replace console stub before launch.
    console.log("Downsizing guide request:", form)
  }

  const inputClass =
    "w-full rounded-md border border-m2m-deep/15 bg-white px-3 py-3 text-sm text-m2m-deep outline-none transition placeholder:text-m2m-muted focus:border-m2m-panel focus:ring-2 focus:ring-m2m-panel/25"

  const labelClass =
    "mb-1.5 block text-[0.7rem] font-medium uppercase tracking-[0.12em] text-m2m-deep/75"

  return (
    <div
      id={DOWNSIZING_GUIDE_SECTION_ID}
      className="scroll-mt-28 rounded-sm bg-m2m-cream p-6 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:p-8 lg:p-9"
    >
      <h2
        className="text-2xl font-medium text-m2m-deep sm:text-[1.65rem]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {GUIDE_HEADING}
      </h2>
      <p
        className="mt-3 text-sm leading-relaxed text-m2m-deep/80"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {GUIDE_INTRO}
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" aria-label="Request downsizing guide">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="ds-first" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
              First name
            </label>
            <input
              id="ds-first"
              type="text"
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={inputClass}
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="ds-last" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
              Last name
            </label>
            <input
              id="ds-last"
              type="text"
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className={inputClass}
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="ds-email" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
            Email
          </label>
          <input
            id="ds-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            style={{ fontFamily: "var(--font-sans)" }}
          />
        </div>

        <div>
          <label htmlFor="ds-ship" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
            Ship to
          </label>
          <input
            id="ds-ship"
            type="text"
            autoComplete="street-address"
            value={form.shipTo}
            onChange={(e) => setForm({ ...form, shipTo: e.target.value })}
            className={inputClass}
            style={{ fontFamily: "var(--font-sans)" }}
            placeholder="Mailing address (optional)"
          />
        </div>

        <div>
          <label htmlFor="ds-notes" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
            Special instructions
          </label>
          <textarea
            id="ds-notes"
            rows={4}
            value={form.specialInstructions}
            onChange={(e) => setForm({ ...form, specialInstructions: e.target.value })}
            className={`${inputClass} min-h-[7rem] resize-y`}
            style={{ fontFamily: "var(--font-sans)" }}
            placeholder="Anything we should know about delivery or timing?"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-m2m-gold px-6 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-m2m-deep transition hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {GUIDE_CTA_LABEL}
          </button>
        </div>
      </form>
    </div>
  )
}
