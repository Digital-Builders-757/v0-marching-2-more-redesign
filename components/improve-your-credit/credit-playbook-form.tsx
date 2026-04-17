"use client"

import { useState } from "react"

import {
  CREDIT_PLAYBOOK_SECTION_ID,
  PLAYBOOK_CARD_TITLE,
  PLAYBOOK_DOWNLOAD_BUTTON,
  PLAYBOOK_HEADING,
  PLAYBOOK_PARAGRAPHS,
} from "./content"

export function CreditPlaybookForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire to CRM, Server Action, or transactional email — replace console stub before launch.
    console.log("Credit playbook lead:", form)
  }

  return (
    <section
      id={CREDIT_PLAYBOOK_SECTION_ID}
      className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="credit-playbook-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="credit-playbook-heading"
          className="text-[clamp(1.85rem,3.5vw,2.65rem)] font-medium leading-tight text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {PLAYBOOK_HEADING}
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-left sm:text-center">
          {PLAYBOOK_PARAGRAPHS.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="text-sm leading-relaxed text-m2m-cream/88 sm:text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <div className="bg-m2m-cream px-6 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12">
          <p
            className="mb-10 text-center text-base font-semibold leading-snug text-m2m-deep sm:text-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {PLAYBOOK_CARD_TITLE}
          </p>

          <form onSubmit={handleSubmit} className="space-y-8" aria-label="Credit Improvement Playbook download">
            <div>
              <label
                htmlFor="credit-playbook-first"
                className="mb-1 block text-xs font-medium text-m2m-deep/80"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                First name
              </label>
              <input
                id="credit-playbook-first"
                type="text"
                autoComplete="given-name"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full border-0 border-b-2 border-m2m-deep/35 bg-transparent py-2.5 text-sm text-m2m-deep outline-none transition focus:border-m2m-panel"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>
            <div>
              <label
                htmlFor="credit-playbook-last"
                className="mb-1 block text-xs font-medium text-m2m-deep/80"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Last name
              </label>
              <input
                id="credit-playbook-last"
                type="text"
                autoComplete="family-name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full border-0 border-b-2 border-m2m-deep/35 bg-transparent py-2.5 text-sm text-m2m-deep outline-none transition focus:border-m2m-panel"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>
            <div>
              <label
                htmlFor="credit-playbook-email"
                className="mb-1 block text-xs font-medium text-m2m-deep/80"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Enter your email here<span className="text-m2m-panel">*</span>
              </label>
              <input
                id="credit-playbook-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-0 border-b-2 border-m2m-deep/35 bg-transparent py-2.5 text-sm text-m2m-deep outline-none transition focus:border-m2m-panel"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="min-h-11 text-sm font-semibold uppercase tracking-[0.14em] text-m2m-panel underline decoration-m2m-gold-dim decoration-2 underline-offset-8 transition hover:text-m2m-deep"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {PLAYBOOK_DOWNLOAD_BUTTON}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
