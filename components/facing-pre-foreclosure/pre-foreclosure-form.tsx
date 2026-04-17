"use client"

import { useState } from "react"

import {
  FORM_LABEL_EMAIL,
  FORM_LABEL_FIRST,
  FORM_LABEL_LAST,
  FORM_LABEL_MESSAGE,
  FORM_LABEL_PHONE,
  FORM_PLACEHOLDER_MESSAGE,
  FORM_PLACEHOLDER_PHONE,
  FORM_SUBMIT_LABEL,
  LEAD_HEADLINE,
  LEAD_SUBHEAD,
} from "./content"

export function PreForeclosureForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire to CRM, Server Action, or transactional email — replace console stub before launch.
    console.log("Pre-foreclosure lead:", form)
  }

  const inputClass =
    "w-full rounded-md border border-m2m-deep/15 bg-white px-3 py-3 text-sm text-m2m-deep outline-none transition placeholder:text-m2m-muted focus:border-m2m-panel focus:ring-2 focus:ring-m2m-panel/25"

  const labelClass =
    "mb-1.5 block text-left text-[0.7rem] font-medium uppercase tracking-[0.12em] text-m2m-deep/75"

  return (
    <div className="rounded-sm bg-m2m-cream p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-8 lg:p-9">
      <h2
        className="text-center text-2xl font-semibold text-m2m-panel sm:text-[1.65rem]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {LEAD_HEADLINE}
      </h2>
      <p
        className="mt-4 text-center text-sm leading-relaxed text-m2m-deep/85 sm:text-base"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {LEAD_SUBHEAD}
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" aria-label="Pre-foreclosure signup">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="pf-first" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
              {FORM_LABEL_FIRST}
            </label>
            <input
              id="pf-first"
              type="text"
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={inputClass}
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </div>
          <div>
            <label htmlFor="pf-last" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
              {FORM_LABEL_LAST}
            </label>
            <input
              id="pf-last"
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
          <label htmlFor="pf-email" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
            {FORM_LABEL_EMAIL} <span className="text-m2m-panel">*</span>
          </label>
          <input
            id="pf-email"
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
          <label htmlFor="pf-phone" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
            {FORM_LABEL_PHONE}
          </label>
          <input
            id="pf-phone"
            type="tel"
            autoComplete="tel"
            placeholder={FORM_PLACEHOLDER_PHONE}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            style={{ fontFamily: "var(--font-sans)" }}
          />
        </div>

        <div>
          <label htmlFor="pf-message" className={labelClass} style={{ fontFamily: "var(--font-nav)" }}>
            {FORM_LABEL_MESSAGE}
          </label>
          <textarea
            id="pf-message"
            rows={5}
            placeholder={FORM_PLACEHOLDER_MESSAGE}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} min-h-[7.5rem] resize-y`}
            style={{ fontFamily: "var(--font-sans)" }}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-m2m-panel px-6 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-m2m-cream transition hover:bg-m2m-panel-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {FORM_SUBMIT_LABEL}
          </button>
        </div>
      </form>
    </div>
  )
}
