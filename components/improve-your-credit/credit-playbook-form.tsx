"use client"

import { useState } from "react"

import { M2mLeadQuizSection } from "@/components/m2m-lead-quiz-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  m2mPlaybookFieldLabelClass,
  m2mPlaybookInputClass,
} from "@/lib/m2m-form"
import { GOHIGHLEVEL_QUIZ_CREDIT_URL, isGohighlevelUrlConfigured } from "@/lib/m2m-site"

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

  const showLocalForm = !isGohighlevelUrlConfigured(GOHIGHLEVEL_QUIZ_CREDIT_URL)

  const description = (
    <div className="space-y-4">
      {PLAYBOOK_PARAGRAPHS.map((p) => (
        <p key={p.slice(0, 32)} className="text-sm leading-relaxed text-m2m-cream/88 sm:text-base font-sans">
          {p}
        </p>
      ))}
    </div>
  )

  return (
    <M2mLeadQuizSection
      id={CREDIT_PLAYBOOK_SECTION_ID}
      title={PLAYBOOK_HEADING}
      description={description}
      embedSrc={GOHIGHLEVEL_QUIZ_CREDIT_URL}
      footnote={
        showLocalForm
          ? "We’ll email your playbook and practical next steps. You can connect the GoHighLevel quiz in lib/m2m-site.ts when it’s ready."
          : undefined
      }
    >
      {showLocalForm ? (
        <div className="mx-auto max-w-xl">
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
      ) : null}
    </M2mLeadQuizSection>
  )
}
