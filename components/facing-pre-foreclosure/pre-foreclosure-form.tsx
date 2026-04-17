"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { m2mLeadFieldInputClass, m2mLeadFieldLabelClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"
import { cn } from "@/lib/utils"

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
            <Label htmlFor="pf-first" className={m2mLeadFieldLabelClass}>
              {FORM_LABEL_FIRST}
            </Label>
            <Input
              id="pf-first"
              type="text"
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={m2mLeadFieldInputClass}
            />
          </div>
          <div>
            <Label htmlFor="pf-last" className={m2mLeadFieldLabelClass}>
              {FORM_LABEL_LAST}
            </Label>
            <Input
              id="pf-last"
              type="text"
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className={m2mLeadFieldInputClass}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="pf-email" className={m2mLeadFieldLabelClass}>
            {FORM_LABEL_EMAIL} <span className="text-m2m-panel">*</span>
          </Label>
          <Input
            id="pf-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={m2mLeadFieldInputClass}
          />
        </div>

        <div>
          <Label htmlFor="pf-phone" className={m2mLeadFieldLabelClass}>
            {FORM_LABEL_PHONE}
          </Label>
          <Input
            id="pf-phone"
            type="tel"
            autoComplete="tel"
            placeholder={FORM_PLACEHOLDER_PHONE}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={m2mLeadFieldInputClass}
          />
        </div>

        <div>
          <Label htmlFor="pf-message" className={m2mLeadFieldLabelClass}>
            {FORM_LABEL_MESSAGE}
          </Label>
          <Textarea
            id="pf-message"
            rows={5}
            placeholder={FORM_PLACEHOLDER_MESSAGE}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={cn(m2mLeadFieldTextareaClass, "min-h-[7.5rem]")}
          />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="m2mPanel" className="w-full">
            {FORM_SUBMIT_LABEL}
          </Button>
        </div>
      </form>
    </div>
  )
}
