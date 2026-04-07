"use client"

import { useState } from "react"

export function ResourcesChecklistForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <p className="text-m2m-deep" style={{ fontFamily: "var(--font-sans)" }}>
        Sent! Please check your email.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label
        className="flex items-start gap-2 text-sm text-m2m-muted"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <input type="checkbox" required className="mt-1" />
        I agree to the terms &amp; conditions
      </label>
      <button
        type="submit"
        className="text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-deep text-m2m-cream hover:bg-m2m-deep/90 transition-colors"
        style={{ fontFamily: "var(--font-nav)" }}
      >
        Email me the Checklist
      </button>
    </form>
  )
}
