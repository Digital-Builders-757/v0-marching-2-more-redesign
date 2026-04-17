"use client"

import { useState } from "react"

import { M2mContainer } from "@/components/m2m-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  m2mPlaybookFieldLabelClass,
  m2mPlaybookInputClass,
} from "@/lib/m2m-form"

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
      className="scroll-mt-28 border-b border-m2m-gold/15 py-16 md:py-20"
      aria-labelledby="credit-playbook-heading"
    >
      <M2mContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="credit-playbook-heading"
            className="m2m-section-title text-m2m-cream"
          >
            {PLAYBOOK_HEADING}
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-left sm:text-center">
            {PLAYBOOK_PARAGRAPHS.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="text-sm leading-relaxed text-m2m-cream/88 sm:text-base font-sans"
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
                <Label htmlFor="credit-playbook-first" className={m2mPlaybookFieldLabelClass}>
                  First name
                </Label>
                <Input
                  id="credit-playbook-first"
                  type="text"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className={m2mPlaybookInputClass}
                />
              </div>
              <div>
                <Label htmlFor="credit-playbook-last" className={m2mPlaybookFieldLabelClass}>
                  Last name
                </Label>
                <Input
                  id="credit-playbook-last"
                  type="text"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className={m2mPlaybookInputClass}
                />
              </div>
              <div>
                <Label htmlFor="credit-playbook-email" className={m2mPlaybookFieldLabelClass}>
                  Enter your email here<span className="text-m2m-panel">*</span>
                </Label>
                <Input
                  id="credit-playbook-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={m2mPlaybookInputClass}
                />
              </div>

              <div className="pt-4 text-center">
                <Button type="submit" variant="m2mTextUnderline">
                  {PLAYBOOK_DOWNLOAD_BUTTON}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
