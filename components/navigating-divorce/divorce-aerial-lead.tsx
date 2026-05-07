"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

import { GuideDownloadForm } from "@/components/m2m-guide-download/guide-download-form"
import { M2mContainer } from "@/components/m2m-layout"
import {
  getM2mDivorceGuidePdfHref,
  M2M_DIVORCE_GUIDE_PDF_FILENAME,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
} from "@/lib/m2m-site"

import { AERIAL_BACKGROUND, AERIAL_COPY } from "./content"

export function DivorceAerialLead() {
  const pathname = usePathname()
  const [message, setMessage] = useState("")

  return (
    <section
      id="guide-form"
      className="relative scroll-mt-24 border-b border-m2m-gold/15"
      aria-labelledby="aerial-heading"
    >
      <div className="absolute inset-0">
        <Image src={AERIAL_BACKGROUND} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-m2m-deep/72 via-m2m-deep/52 to-m2m-deep/38" />
      </div>

      <M2mContainer className="relative z-10 py-20 lg:flex lg:items-stretch lg:gap-16 lg:py-28">
        <div className="mb-14 max-w-xl lg:mb-0 lg:flex-1 lg:pt-4">
          <p
            className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold-lt sm:text-[0.7rem]"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            We&apos;re Here For You
          </p>
          <h2
            id="aerial-heading"
            className="mb-4 text-balance text-[clamp(1.85rem,3.5vw,2.65rem)] font-semibold leading-tight text-m2m-cream"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {AERIAL_COPY.headline}
          </h2>
          <p
            className="mb-10 text-pretty text-lg italic leading-relaxed text-m2m-cream/95"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {AERIAL_COPY.subhead}
          </p>
          {AERIAL_COPY.blocks.map((b) => (
            <div key={b.title} className="mb-8 last:mb-0">
              <h3 className="mb-2 text-base font-bold text-m2m-gold-lt" style={{ fontFamily: "var(--font-nav)" }}>
                {b.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-m2m-cream/90" style={{ fontFamily: "var(--font-sans)" }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:w-[min(100%,420px)] lg:flex-shrink-0">
          <div className="rounded-sm bg-[#f3f3fb] px-6 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10">
            <GuideDownloadForm
              variant="divorcePanel"
              guideName="Divorce home-selling guide"
              leadType="seller"
              pdfHref={getM2mDivorceGuidePdfHref()}
              downloadFilename={M2M_DIVORCE_GUIDE_PDF_FILENAME}
              sourcePath={pathname || "/navigating-divorce"}
              collectPhone
              showUrgency
              urgencySelectVariant="playbook"
              urgencyFieldId="divorce-urgency"
              fieldIdPrefix="divorce-guide"
              formTestId="m2m-lead-form-navigating-divorce"
              submitLabel="Get Your Free Guide Now"
              formAriaLabel="Request divorce and real estate guide"
              formWrapperClassName="contents"
              successWrapperClassName="contents"
              panelIntro={
                <>
                  Please complete the form below to receive a complimentary copy of our guide on &apos;How to Sell Your Home
                  During a Divorce&apos;
                </>
              }
              getNotes={() =>
                [message.trim(), "Divorce home-selling guide request"].filter(Boolean).join("\n\n") || undefined
              }
              afterUrgencySlot={
                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-y border-0 border-b border-m2m-panel/35 bg-transparent py-2 text-sm text-m2m-deep outline-none placeholder:text-m2m-muted focus:border-m2m-gold"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </label>
              }
              successThanksBody={
                <p className="text-sm leading-relaxed text-m2m-deep/80 font-sans">
                  Your Divorce &amp; Real Estate guide is ready. Open or download the PDF below. Our team may also follow up
                  by email with tailored resources.
                </p>
              }
              successDownloadLinkLabel="Download the guide (PDF)"
              belowSubmitSlot={
                <>
                  <p className="text-center text-xs leading-relaxed text-m2m-panel/80" style={{ fontFamily: "var(--font-sans)" }}>
                    Prefer direct support?
                    <a
                      href={M2M_PHONE_HREF}
                      className="mx-1 text-m2m-panel underline decoration-m2m-gold/60 underline-offset-4 hover:text-m2m-gold-dim"
                    >
                      {M2M_PHONE_DISPLAY}
                    </a>
                    <a
                      href="/contact-us?intent=seller"
                      className="ml-1 text-m2m-panel underline decoration-m2m-gold/60 underline-offset-4 hover:text-m2m-gold-dim"
                      aria-label="Contact us"
                    >
                      Contact us
                    </a>{" "}
                    and we&apos;ll help you map next steps.
                  </p>
                  <p className="text-center">
                    <a
                      href="/navigating-divorce#guide-form"
                      className="text-xs text-m2m-panel underline decoration-m2m-gold/60 underline-offset-4 hover:text-m2m-gold-dim"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Review this guide section again
                    </a>
                  </p>
                </>
              }
            />
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
