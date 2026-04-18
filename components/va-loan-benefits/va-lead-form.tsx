"use client"

import { useState } from "react"

import { M2mContainer } from "@/components/m2m-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { m2mLeadFieldInputClass, m2mLeadFieldLabelClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"

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

  return (
    <section
      id={VA_LEAD_SECTION_ID}
      className="scroll-mt-28 border-b border-m2m-gold/15 py-16 sm:py-20 lg:py-24"
      aria-labelledby="va-lead-heading"
    >
      <M2mContainer className="max-w-lg">
        <h2
          id="va-lead-heading"
          className="text-center text-[clamp(1.75rem,3.2vw,2.35rem)] font-medium text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {LEAD_HEADING}
        </h2>
        <p className="mt-3 text-center text-base text-m2m-cream/90 font-sans">{LEAD_SUBHEAD}</p>
        <p className="mt-4 text-center text-sm leading-relaxed text-m2m-cream/80 font-sans">{LEAD_HELPER}</p>

        <div className="mt-10 rounded-sm bg-m2m-cream p-6 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5" aria-label="Get on the list">
            <div>
              <Label htmlFor="va-lead-email" className={m2mLeadFieldLabelClass}>
                {LEAD_LABEL_EMAIL} <span className="text-m2m-panel">*</span>
              </Label>
              <Input
                id="va-lead-email"
                type="email"
                required
                autoComplete="email"
                placeholder={LEAD_PLACEHOLDER_EMAIL}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={m2mLeadFieldInputClass}
              />
            </div>
            <div>
              <Label htmlFor="va-lead-name" className={m2mLeadFieldLabelClass}>
                {LEAD_LABEL_NAME} <span className="text-m2m-panel">*</span>
              </Label>
              <Input
                id="va-lead-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={m2mLeadFieldInputClass}
              />
            </div>
            <div>
              <Label htmlFor="va-lead-message" className={m2mLeadFieldLabelClass}>
                {LEAD_LABEL_MESSAGE}
              </Label>
              <Textarea
                id="va-lead-message"
                rows={5}
                placeholder={LEAD_TEXTAREA_PLACEHOLDER}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={m2mLeadFieldTextareaClass}
              />
            </div>
            <div className="pt-2">
              <Button type="submit" variant="m2mGold" className="w-full">
                {LEAD_SUBMIT_LABEL}
              </Button>
            </div>
          </form>
        </div>
      </M2mContainer>
    </section>
  )
}
