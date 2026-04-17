"use client"

import { useState } from "react"
import Image from "next/image"

import { M2mContainer } from "@/components/m2m-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { m2mLeadFieldInputClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"

import { FLAG_QUOTE_BACKGROUND, QUOTE_FORM } from "./content"

const fhaQuoteLabelClass = "mb-2 block text-xs font-medium text-m2m-deep font-sans"

export function FhaQuoteForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("FHA quote request:", form)
  }

  return (
    <section
      id="request-quote"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-28"
      aria-labelledby="fha-quote-heading"
    >
      <div className="absolute inset-0">
        <Image src={FLAG_QUOTE_BACKGROUND} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-m2m-deep/25 backdrop-blur-[1px]" />
      </div>

      <M2mContainer className="relative z-10 max-w-2xl">
        <div className="rounded-none bg-white px-6 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12">
          <h2
            id="fha-quote-heading"
            className="mb-2 text-center text-2xl font-bold text-m2m-deep font-nav"
          >
            {QUOTE_FORM.title}
          </h2>
          <p className="mb-10 text-center text-sm text-m2m-deep/80 font-sans">{QUOTE_FORM.subtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-7" aria-label="Request a quote">
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <div>
                <Label htmlFor="fha-first" className={fhaQuoteLabelClass}>
                  First Name
                </Label>
                <Input
                  id="fha-first"
                  type="text"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className={m2mLeadFieldInputClass}
                />
              </div>
              <div>
                <Label htmlFor="fha-last" className={fhaQuoteLabelClass}>
                  Last Name
                </Label>
                <Input
                  id="fha-last"
                  type="text"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className={m2mLeadFieldInputClass}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="fha-email" className={fhaQuoteLabelClass}>
                Email *
              </Label>
              <Input
                id="fha-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={m2mLeadFieldInputClass}
              />
            </div>

            <div>
              <Label htmlFor="fha-subject" className={fhaQuoteLabelClass}>
                Subject *
              </Label>
              <Input
                id="fha-subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={m2mLeadFieldInputClass}
              />
            </div>

            <div>
              <Label htmlFor="fha-message" className={fhaQuoteLabelClass}>
                Leave us a message...
              </Label>
              <Textarea
                id="fha-message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={m2mLeadFieldTextareaClass}
              />
            </div>

            <Button type="submit" variant="m2mPanel" className="w-full rounded-none py-3.5">
              {QUOTE_FORM.submitLabel}
            </Button>
          </form>
        </div>
      </M2mContainer>
    </section>
  )
}
