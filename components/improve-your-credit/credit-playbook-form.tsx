"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { GuideDownloadForm } from "@/components/m2m-guide-download/guide-download-form"
import { M2mContainer } from "@/components/m2m-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { M2M_GUIDE_FORM_SECTION_ID } from "@/lib/m2m-guide-download"
import { m2mLeadFieldInputClass, m2mLeadFieldLabelClass } from "@/lib/m2m-form"
import { M2M_URGENCY_LABEL_CREDIT } from "@/lib/m2m-lead-urgency"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

import {
  CREDIT_FORM_SUBMIT_LABEL,
  CREDIT_PLAYBOOK_GUIDE_NAME,
  CREDIT_PLAYBOOK_NOTES_BASE,
  PLAYBOOK_CONTEXT_LABEL,
  PLAYBOOK_CONTEXT_OPTIONAL,
  PLAYBOOK_CONTEXT_PLACEHOLDER,
  PLAYBOOK_FORM_ARIA_LABEL,
  PLAYBOOK_HEADING,
  PLAYBOOK_INTRO_PARAGRAPHS,
  PLAYBOOK_RESOURCE_EYEBROW,
} from "./content"

export function CreditPlaybookForm() {
  const pathname = usePathname()
  const [context, setContext] = useState("")

  const intro = (
    <div className="space-y-4">
      {PLAYBOOK_INTRO_PARAGRAPHS.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </div>
  )

  return (
    <section
      id={M2M_GUIDE_FORM_SECTION_ID}
      className="scroll-mt-28 border-b border-m2m-gold/15 py-16 sm:py-20 lg:py-24"
      aria-label="Credit Improvement Playbook"
    >
      <M2mContainer>
        <div className="mx-auto max-w-xl">
          <GuideDownloadForm
            leadCaptureOnly
            variant="interiorCream"
            guideName={CREDIT_PLAYBOOK_GUIDE_NAME}
            leadType="buyer"
            sourcePath={pathname || "/improve-your-credit"}
            fieldIdPrefix="credit-guide"
            resourceEyebrow={PLAYBOOK_RESOURCE_EYEBROW}
            heading={PLAYBOOK_HEADING}
            intro={intro}
            submitLabel={CREDIT_FORM_SUBMIT_LABEL}
            formAriaLabel={PLAYBOOK_FORM_ARIA_LABEL}
            collectPhone
            phoneRequired
            collectDateOfBirth
            dateOfBirthFieldId="credit-guide-dob"
            urgencyMode="full"
            urgencyLabel={M2M_URGENCY_LABEL_CREDIT}
            urgencySelectVariant="interior"
            urgencyRequired={false}
            urgencyFieldId="credit-guide-urgency"
            formWrapperClassName="rounded-sm bg-m2m-cream p-7 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-9 lg:p-10"
            successWrapperClassName="space-y-6 rounded-sm bg-m2m-cream p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-10"
            successThanksHeadline="Thank you!"
            successThanksBody={
              <p className="text-sm leading-relaxed text-m2m-deep/80 font-sans">
                We received your request. Our team will email your playbook outline and practical next steps. If you need
                help sooner, call us or reach out online.
              </p>
            }
            formTestId="m2m-lead-form-improve-your-credit"
            getNotes={() => {
              const ctx = context.trim()
              return ctx ? `${CREDIT_PLAYBOOK_NOTES_BASE}\n\n${ctx}` : CREDIT_PLAYBOOK_NOTES_BASE
            }}
            afterUrgencySlot={
              <div>
                <Label htmlFor="credit-guide-context" className={m2mLeadFieldLabelClass}>
                  {PLAYBOOK_CONTEXT_LABEL}{" "}
                  <span className="font-normal text-m2m-deep/50">{PLAYBOOK_CONTEXT_OPTIONAL}</span>
                </Label>
                <Input
                  id="credit-guide-context"
                  type="text"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className={m2mLeadFieldInputClass}
                  placeholder={PLAYBOOK_CONTEXT_PLACEHOLDER}
                />
              </div>
            }
          />
          <p className="mt-8 text-center text-sm leading-relaxed text-m2m-cream/85 font-sans">
            Prefer to talk now? Call{" "}
            <a className="text-m2m-gold-lt underline decoration-m2m-gold/55 underline-offset-4" href={M2M_PHONE_HREF}>
              {M2M_PHONE_DISPLAY}
            </a>{" "}
            or{" "}
            <Link
              href="/contact-us?intent=buyer"
              className="text-m2m-gold-lt underline decoration-m2m-gold/55 underline-offset-4"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </M2mContainer>
    </section>
  )
}
