"use client"

import { cn } from "@/lib/utils"

/** Shared date-of-birth field for GHL-required intake (YYYY-MM-DD). */
export function M2mLeadDobField({
  id = "m2m-dob",
  label = "Date of birth",
  value,
  onChange,
  className,
  inputClassName,
  required = true,
  /** Override default helper line (e.g. higher contrast on dark hero forms). */
  helperClassName,
}: {
  id?: string
  label?: string
  value: string
  onChange: (value: string) => void
  className?: string
  inputClassName?: string
  required?: boolean
  helperClassName?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-left text-sm font-medium text-inherit font-sans">
        {label}
        {required ? <span className="text-m2m-panel"> *</span> : null}
      </label>
      <input
        id={id}
        type="date"
        autoComplete="bday"
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputClassName)}
      />
      <p className={cn("mt-1 text-xs font-sans leading-relaxed", helperClassName ?? "opacity-80")}>
        Used only to verify identity and serve you faster.
      </p>
    </div>
  )
}
