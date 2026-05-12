"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState, type ReactNode } from "react"

import { M2mLeadDobField } from "@/components/m2m-lead-form-fields"
import type { M2mLeadUrgencyMode } from "@/components/m2m-lead-urgency-field"
import { M2mLeadUrgencySelect } from "@/components/m2m-lead-urgency-field"
import { M2mLeadSubmitErrorAlert } from "@/components/m2m-lead-submit-error-alert"
import { M2mLeadSubmitWarnings } from "@/components/m2m-lead-submit-warnings"
import { useM2mUtm } from "@/components/m2m-utm-effect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { LeadType, SubmitLeadFailure, SubmitLeadWarningCode } from "@/lib/ghl/types"
import { m2mLeadFieldInputClass, m2mLeadFieldLabelClass } from "@/lib/m2m-form"
import {
  M2M_URGENCY_LABEL_SHORT_FORM,
  M2M_URGENCY_SHARED_HINT,
  M2M_URGENCY_SHORT_FORM_DEFAULT,
} from "@/lib/m2m-lead-urgency"
import { submitLeadToApi } from "@/lib/m2m-lead-submit"

const DIVORCE_FIELD_CLASS =
  "w-full border-0 border-b border-m2m-panel/35 bg-transparent py-2 text-sm text-m2m-deep outline-none placeholder:text-m2m-muted focus:border-m2m-gold"

export type GuideDownloadFormVariant = "interiorCream" | "divorcePanel"

export type GuideDownloadFormSharedProps = {
  variant: GuideDownloadFormVariant
  guideName: string
  leadType: LeadType
  /** Fallback when `usePathname()` is unavailable */
  sourcePath: string
  submitLabel: string
  formAriaLabel: string
  formWrapperClassName: string
  successWrapperClassName: string
  /** When set, applied to the outer shell (use when no parent owns `#guide-form`). */
  anchorId?: string
  resourceEyebrow?: string
  heading?: ReactNode
  intro?: ReactNode
  panelIntro?: ReactNode
  showUrgency?: boolean
  urgencySelectVariant?: "interior" | "playbook"
  urgencyFieldId: string
  /** Timeline mode — `"short"` matches downsizing-style passive default; `"full"` matches playbook timelines. */
  urgencyMode?: M2mLeadUrgencyMode
  urgencyLabel?: string
  urgencyRequired?: boolean
  /** Overrides default initial timeline (`short` → passive default; `full` → empty). */
  urgencyInitialValue?: string
  collectPhone?: boolean
  /** When `collectPhone`, require a phone number (cream variant only). */
  phoneRequired?: boolean
  collectDateOfBirth?: boolean
  /** Required when `collectDateOfBirth` is true (cream variant). */
  dateOfBirthFieldId?: string
  afterUrgencySlot?: ReactNode
  belowSubmitSlot?: ReactNode
  formTestId?: string
  successThanksHeadline?: string
  successThanksBody: ReactNode
  getNotes: () => string | undefined
  /** Maps to GHL property-address field when set (e.g. downsizing ship-to line). */
  getAddress?: () => string | undefined
  /** Used for interior variant controls, e.g. `ds` → `ds-first`. */
  fieldIdPrefix?: string
}

export type GuideDownloadFormProps =
  | (GuideDownloadFormSharedProps & {
      leadCaptureOnly?: false | undefined
      pdfHref: string
      downloadFilename: string
      successDownloadLinkLabel: string
    })
  | (GuideDownloadFormSharedProps & {
      leadCaptureOnly: true
    })

export function GuideDownloadForm(props: GuideDownloadFormProps) {
  const leadCaptureOnly = props.leadCaptureOnly === true
  const pdfHref =
    !leadCaptureOnly && "pdfHref" in props && typeof props.pdfHref === "string" ? props.pdfHref : ""
  const downloadFilename =
    !leadCaptureOnly && "downloadFilename" in props && typeof props.downloadFilename === "string"
      ? props.downloadFilename
      : ""
  const successDownloadLinkLabel =
    !leadCaptureOnly &&
    "successDownloadLinkLabel" in props &&
    typeof props.successDownloadLinkLabel === "string"
      ? props.successDownloadLinkLabel
      : ""

  const {
    variant,
    guideName,
    leadType,
    sourcePath,
    submitLabel,
    formAriaLabel,
    formWrapperClassName,
    successWrapperClassName,
    anchorId,
    resourceEyebrow,
    heading,
    intro,
    panelIntro,
    showUrgency = true,
    urgencySelectVariant = "interior",
    urgencyFieldId,
    urgencyMode = "short",
    urgencyLabel = M2M_URGENCY_LABEL_SHORT_FORM,
    urgencyRequired = false,
    urgencyInitialValue: urgencyInitialValueProp,
    collectPhone = false,
    phoneRequired = false,
    collectDateOfBirth = false,
    dateOfBirthFieldId = "m2m-guide-dob",
    afterUrgencySlot,
    belowSubmitSlot,
    formTestId,
    successThanksHeadline = "Thank you!",
    successThanksBody,
    getNotes,
    getAddress,
    fieldIdPrefix = "m2m-guide",
  } = props

  const urgencyInitialValue =
    urgencyInitialValueProp !== undefined
      ? urgencyInitialValueProp
      : urgencyMode === "short"
        ? M2M_URGENCY_SHORT_FORM_DEFAULT
        : ""

  const pathname = usePathname()
  const utm = useM2mUtm()
  const autoDlRef = useRef<HTMLAnchorElement | null>(null)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [timeline, setTimeline] = useState(urgencyInitialValue)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<SubmitLeadFailure | null>(null)
  const [done, setDone] = useState(false)
  const [successFollowUp, setSuccessFollowUp] = useState<{
    warnings: SubmitLeadWarningCode[]
    correlationId: string
  } | null>(null)

  const isExternalPdf =
    !leadCaptureOnly && (pdfHref.startsWith("http://") || pdfHref.startsWith("https://"))

  useEffect(() => {
    if (leadCaptureOnly || !done || isExternalPdf) return
    queueMicrotask(() => {
      autoDlRef.current?.click()
    })
  }, [leadCaptureOnly, done, isExternalPdf])

  const urgencyExplicit =
    urgencyMode === "short"
      ? timeline.trim() !== M2M_URGENCY_SHORT_FORM_DEFAULT
      : Boolean(timeline.trim())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    setSubmitting(true)
    try {
      const name = `${firstName} ${lastName}`.trim()
      const notesRaw = getNotes()
      const phoneOut =
        collectPhone && phoneRequired
          ? phone.trim()
          : collectPhone
            ? phone.trim() || undefined
            : undefined
      const dobOut =
        collectDateOfBirth && variant === "interiorCream" && dateOfBirth.trim()
          ? dateOfBirth.trim()
          : undefined
      const res = await submitLeadToApi({
        lead_type: leadType,
        name,
        email: email.trim(),
        phone: phoneOut,
        date_of_birth: dobOut,
        address: getAddress?.()?.trim() || undefined,
        urgency: timeline,
        urgency_explicit: urgencyExplicit,
        notes: notesRaw?.trim() ? notesRaw.trim() : undefined,
        guide_name: guideName,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        source_page: typeof window !== "undefined" ? window.location.href : undefined,
        source_path: pathname || sourcePath,
      })
      if (!res.ok) {
        setSubmitError(res)
        return
      }
      setSuccessFollowUp({
        warnings: res.warnings ?? [],
        correlationId: res.correlationId,
      })
      setDone(true)
    } finally {
      setSubmitting(false)
    }
  }

  const fi = `${fieldIdPrefix}-first`
  const la = `${fieldIdPrefix}-last`
  const em = `${fieldIdPrefix}-email`
  const ph = `${fieldIdPrefix}-phone`

  const successBlockPdf = (
    <div className="space-y-6" role="status" aria-live="polite">
      {successFollowUp?.warnings.length ? (
        <M2mLeadSubmitWarnings
          warnings={successFollowUp.warnings}
          correlationId={successFollowUp.correlationId}
          variant="onLight"
          className="text-left"
        />
      ) : null}
      <div className="space-y-3 text-center">
        <p className="text-lg font-medium text-m2m-deep font-display">{successThanksHeadline}</p>
        <div className="text-sm leading-relaxed text-m2m-deep/80 font-sans">{successThanksBody}</div>
      </div>
      <a
        ref={autoDlRef}
        href={pdfHref}
        download={isExternalPdf ? undefined : downloadFilename}
        className="sr-only"
        aria-hidden
        tabIndex={-1}
      >
        {successDownloadLinkLabel}
      </a>
      <Button variant="m2mGold" className="w-full min-h-[52px]" asChild>
        <a
          href={pdfHref}
          download={isExternalPdf ? undefined : downloadFilename}
          {...(isExternalPdf ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center justify-center touch-manipulation"
        >
          {successDownloadLinkLabel}
        </a>
      </Button>
    </div>
  )

  const successBlockLeadOnly = (
    <div className="space-y-6" role="status" aria-live="polite">
      {successFollowUp?.warnings.length ? (
        <M2mLeadSubmitWarnings
          warnings={successFollowUp.warnings}
          correlationId={successFollowUp.correlationId}
          variant="onLight"
          className="text-left"
        />
      ) : null}
      <div className="space-y-3 text-center">
        <p className="text-lg font-medium text-m2m-deep font-display">{successThanksHeadline}</p>
        <div className="text-sm leading-relaxed text-m2m-deep/80 font-sans">{successThanksBody}</div>
      </div>
    </div>
  )

  const successBlock = leadCaptureOnly ? successBlockLeadOnly : successBlockPdf

  if (done) {
    return (
      <div id={anchorId} className={successWrapperClassName}>
        {successBlock}
      </div>
    )
  }

  const formInner = (
    <>
      {submitError ? <M2mLeadSubmitErrorAlert failure={submitError} variant="onLight" className="w-full" /> : null}

      {variant === "interiorCream" ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <Label htmlFor={fi} className={m2mLeadFieldLabelClass}>
              First Name
            </Label>
            <Input
              id={fi}
              type="text"
              required
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={m2mLeadFieldInputClass}
            />
          </div>
          <div className="sm:col-span-1">
            <Label htmlFor={la} className={m2mLeadFieldLabelClass}>
              Last Name
            </Label>
            <Input
              id={la}
              type="text"
              required
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={m2mLeadFieldInputClass}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">First name</span>
            <input
              type="text"
              name="firstName"
              required
              autoComplete="given-name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={DIVORCE_FIELD_CLASS}
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </label>
          <label className="block">
            <span className="sr-only">Last name</span>
            <input
              type="text"
              name="lastName"
              required
              autoComplete="family-name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={DIVORCE_FIELD_CLASS}
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </label>
        </div>
      )}

      {variant === "interiorCream" ? (
        <div>
          <Label htmlFor={em} className={m2mLeadFieldLabelClass}>
            Email
          </Label>
          <Input
            id={em}
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={m2mLeadFieldInputClass}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">Email</span>
            <input
              id={em}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={DIVORCE_FIELD_CLASS}
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </label>
          {collectPhone ? (
            <label className="block">
              <span className="sr-only">Phone</span>
              <input
                id={ph}
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={DIVORCE_FIELD_CLASS}
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </label>
          ) : null}
        </div>
      )}

      {variant === "interiorCream" && collectPhone ? (
        <div>
          <Label htmlFor={ph} className={m2mLeadFieldLabelClass}>
            Phone
            {phoneRequired ? (
              <span className="text-m2m-panel"> *</span>
            ) : (
              <span className="font-normal text-m2m-deep/60"> (optional)</span>
            )}
          </Label>
          <Input
            id={ph}
            type="tel"
            required={phoneRequired}
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={m2mLeadFieldInputClass}
          />
        </div>
      ) : null}

      {variant === "interiorCream" && collectDateOfBirth ? (
        <M2mLeadDobField
          id={dateOfBirthFieldId}
          value={dateOfBirth}
          onChange={setDateOfBirth}
          inputClassName={m2mLeadFieldInputClass}
          className="text-m2m-deep"
        />
      ) : null}

      {showUrgency ? (
        <M2mLeadUrgencySelect
          id={urgencyFieldId}
          label={urgencyLabel}
          value={timeline}
          onChange={setTimeline}
          variant={urgencySelectVariant}
          mode={urgencyMode}
          required={urgencyRequired}
          hint={M2M_URGENCY_SHARED_HINT}
          className={variant === "divorcePanel" ? "text-m2m-deep" : undefined}
        />
      ) : null}

      {afterUrgencySlot}

      <div className={variant === "interiorCream" ? "pt-3" : undefined}>
        {variant === "interiorCream" ? (
          <Button type="submit" variant="m2mGold" className="w-full min-h-[52px]" disabled={submitting}>
            {submitting ? "Sending…" : submitLabel}
          </Button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="w-full min-h-[52px] bg-m2m-panel py-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-m2m-cream transition hover:bg-m2m-panel-lt disabled:opacity-70"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {submitting ? "Sending…" : submitLabel}
          </button>
        )}
      </div>

      {belowSubmitSlot}
    </>
  )

  return (
    <div id={anchorId} className={formWrapperClassName}>
      {variant === "interiorCream" ? (
        <>
          {resourceEyebrow ? (
            <p
              className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-panel sm:text-[0.7rem]"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {resourceEyebrow}
            </p>
          ) : null}
          {heading ? (
            <h2
              className="text-balance text-2xl font-medium text-m2m-deep sm:text-[1.65rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {heading}
            </h2>
          ) : null}
          {intro ? <div className="mt-4 text-pretty text-sm leading-relaxed text-m2m-deep/80 font-sans">{intro}</div> : null}

          <form
            data-testid={formTestId}
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
            aria-label={formAriaLabel}
            aria-busy={submitting}
          >
            {formInner}
          </form>
        </>
      ) : (
        <>
          {panelIntro ? (
            <div
              className="mb-8 text-center text-[0.95rem] font-medium leading-snug text-m2m-panel"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {panelIntro}
            </div>
          ) : null}
          <form
            data-testid={formTestId}
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-label={formAriaLabel}
            aria-busy={submitting}
          >
            {formInner}
          </form>
        </>
      )}
    </div>
  )
}
