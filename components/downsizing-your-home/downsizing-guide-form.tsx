"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { m2mLeadFieldInputClass, m2mLeadFieldLabelClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"
import { cn } from "@/lib/utils"

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
      <p className="mt-3 text-sm leading-relaxed text-m2m-deep/80 font-sans">{GUIDE_INTRO}</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" aria-label="Request downsizing guide">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <Label htmlFor="ds-first" className={m2mLeadFieldLabelClass}>
              First name
            </Label>
            <Input
              id="ds-first"
              type="text"
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={m2mLeadFieldInputClass}
            />
          </div>
          <div className="sm:col-span-1">
            <Label htmlFor="ds-last" className={m2mLeadFieldLabelClass}>
              Last name
            </Label>
            <Input
              id="ds-last"
              type="text"
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className={m2mLeadFieldInputClass}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="ds-email" className={m2mLeadFieldLabelClass}>
            Email
          </Label>
          <Input
            id="ds-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={m2mLeadFieldInputClass}
          />
        </div>

        <div>
          <Label htmlFor="ds-ship" className={m2mLeadFieldLabelClass}>
            Ship to
          </Label>
          <Input
            id="ds-ship"
            type="text"
            autoComplete="street-address"
            value={form.shipTo}
            onChange={(e) => setForm({ ...form, shipTo: e.target.value })}
            className={m2mLeadFieldInputClass}
            placeholder="Mailing address (optional)"
          />
        </div>

        <div>
          <Label htmlFor="ds-notes" className={m2mLeadFieldLabelClass}>
            Special instructions
          </Label>
          <Textarea
            id="ds-notes"
            rows={4}
            value={form.specialInstructions}
            onChange={(e) => setForm({ ...form, specialInstructions: e.target.value })}
            className={cn(m2mLeadFieldTextareaClass, "min-h-[7rem]")}
            placeholder="Anything we should know about delivery or timing?"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="m2mGold" className="w-full">
            {GUIDE_CTA_LABEL}
          </Button>
        </div>
      </form>
    </div>
  )
}
