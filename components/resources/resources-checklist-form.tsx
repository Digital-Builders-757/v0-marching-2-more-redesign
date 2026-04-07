"use client"

import { useId, useState } from "react"

export function ResourcesChecklistForm() {
  const id = useId()
  const [ackTerms, setAckTerms] = useState(false)
  const [ackPrivacy, setAckPrivacy] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="mt-10 rounded-xl border border-m2m-deep/10 bg-m2m-deep/[0.03] p-6 md:p-8">
      <h2
        className="text-lg font-medium text-m2m-deep"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Email the checklist
      </h2>
      <p className="mt-2 text-sm text-m2m-muted">
        We will connect this to email soon. For now, please use{" "}
        <strong>Download checklist</strong> above.
      </p>
      <form
        className="mt-6 space-y-4"
        noValidate
        onSubmit={(e) => {
          e.preventDefault()
          if (!ackTerms || !ackPrivacy) return
          setSubmitted(true)
        }}
      >
        <div>
          <label htmlFor={`${id}-name`} className="sr-only">
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-md border border-m2m-deep/15 bg-white px-3 py-2 text-sm text-m2m-deep placeholder:text-m2m-muted/70"
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="sr-only">
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            className="w-full rounded-md border border-m2m-deep/15 bg-white px-3 py-2 text-sm text-m2m-deep placeholder:text-m2m-muted/70"
          />
        </div>
        <div className="space-y-2 text-sm text-m2m-muted">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={ackTerms}
              onChange={(e) => setAckTerms(e.target.checked)}
              className="mt-1"
            />
            <span>I agree to the site terms (placeholder acknowledgment).</span>
          </label>
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={ackPrivacy}
              onChange={(e) => setAckPrivacy(e.target.checked)}
              className="mt-1"
            />
            <span>I have read the privacy policy summary (placeholder).</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-m2m-deep px-4 py-3 text-center text-[0.7rem] font-medium uppercase tracking-[0.15em] text-m2m-cream transition-colors hover:bg-m2m-deep/90 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ fontFamily: "var(--font-nav)" }}
          disabled={!ackTerms || !ackPrivacy}
        >
          Email me the checklist
        </button>
        {submitted ? (
          <p className="text-sm text-m2m-green" role="status">
            Thanks — your request was recorded locally. Use the download link for the file
            today.
          </p>
        ) : null}
      </form>
    </div>
  )
}
