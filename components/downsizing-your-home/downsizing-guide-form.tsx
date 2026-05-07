"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"

import { GuideDownloadForm } from "@/components/m2m-guide-download/guide-download-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { m2mLeadFieldInputClass, m2mLeadFieldLabelClass, m2mLeadFieldTextareaClass } from "@/lib/m2m-form"
import { M2M_GUIDE_FORM_SECTION_ID } from "@/lib/m2m-guide-download"
import { getM2mDownsizingGuidePdfHref, M2M_DOWNSIZING_GUIDE_PDF_FILENAME } from "@/lib/m2m-site"
import { cn } from "@/lib/utils"

import { GUIDE_CTA_LABEL, GUIDE_HEADING, GUIDE_INTRO } from "./content"

export function DownsizingGuideForm() {
  const pathname = usePathname()
  const [shipTo, setShipTo] = useState("")
  const [specialInstructions, setSpecialInstructions] = useState("")

  return (
    <GuideDownloadForm
      anchorId={M2M_GUIDE_FORM_SECTION_ID}
      variant="interiorCream"
      guideName="Downsizing guide"
      leadType="seller"
      pdfHref={getM2mDownsizingGuidePdfHref()}
      downloadFilename={M2M_DOWNSIZING_GUIDE_PDF_FILENAME}
      sourcePath={pathname || "/downsizing-your-home"}
      fieldIdPrefix="ds"
      resourceEyebrow="Free Resource"
      heading={GUIDE_HEADING}
      intro={GUIDE_INTRO}
      submitLabel={GUIDE_CTA_LABEL}
      formAriaLabel="Request downsizing guide"
      showUrgency
      urgencySelectVariant="interior"
      urgencyFieldId="ds-guide-urgency"
      formWrapperClassName="scroll-mt-28 rounded-sm bg-m2m-cream p-7 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-9 lg:p-10"
      successWrapperClassName="scroll-mt-28 space-y-6 rounded-sm bg-m2m-cream p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-10"
      successThanksHeadline="Thank you!"
      successThanksBody={
        <p className="text-sm leading-relaxed text-m2m-deep/80 font-sans">
          Your downsizing guide is ready. Open or download the PDF below. If you asked for a mailed copy or shared special
          instructions, our team will follow up.
        </p>
      }
      successDownloadLinkLabel="Download the downsizing guide (PDF)"
      getAddress={() => shipTo}
      getNotes={() =>
        [
          shipTo.trim() ? `Ship to: ${shipTo.trim()}` : "",
          specialInstructions.trim() ? `Notes: ${specialInstructions.trim()}` : "",
          "Downsizing guide request",
        ]
          .filter(Boolean)
          .join("\n")
      }
      afterUrgencySlot={
        <>
          <div>
            <Label htmlFor="ds-ship" className={m2mLeadFieldLabelClass}>
              Ship to
            </Label>
            <Input
              id="ds-ship"
              type="text"
              autoComplete="street-address"
              value={shipTo}
              onChange={(e) => setShipTo(e.target.value)}
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
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className={cn(m2mLeadFieldTextareaClass, "min-h-[7rem]")}
              placeholder="Anything we should know about delivery or timing?"
            />
          </div>
        </>
      }
    />
  )
}
