"use client"

import { cn } from "@/lib/utils"
import {
  M2M_URGENCY_LABEL_DEFAULT,
  M2M_URGENCY_SHORT_FORM_OPTIONS,
  M2M_URGENCY_SHORT_FORM_DEFAULT,
  M2M_URGENCY_TIMELINE_OPTIONS,
} from "@/lib/m2m-lead-urgency"

type UrgencyVariant = "interior" | "dark" | "cma" | "playbook" | "leadPanel"

const labelClass: Record<UrgencyVariant, string> = {
  interior: "mb-1.5 block text-left text-sm font-medium text-m2m-deep font-sans",
  dark: "mb-1.5 block text-left text-sm font-medium text-m2m-cream/95 font-sans",
  cma: "mb-1.5 block text-left text-sm font-medium text-m2m-deep font-sans",
  playbook: "mb-1 block text-xs font-medium text-m2m-deep/80 font-sans",
  leadPanel: "mb-1.5 block text-left text-[0.7rem] font-medium uppercase tracking-[0.12em] text-m2m-cream/85 font-nav",
}

const selectClass: Record<UrgencyVariant, string> = {
  interior:
    "w-full min-h-12 rounded border border-m2m-deep/18 bg-white px-3 text-sm text-m2m-deep focus:outline-none focus:ring-2 focus:ring-m2m-panel/25 font-sans",
  dark: "w-full min-h-12 rounded border border-m2m-cream/40 bg-m2m-deep/40 px-3 text-sm text-m2m-cream focus:outline-none focus:ring-2 focus:ring-m2m-gold/30 font-sans",
  cma: "w-full min-h-11 rounded border border-m2m-deep/20 bg-white px-3 text-sm text-m2m-deep focus:outline-none focus:ring-2 focus:ring-m2m-gold/30 font-sans",
  playbook:
    "min-h-11 w-full border-0 border-b-2 border-m2m-deep/35 bg-transparent py-2.5 text-sm text-m2m-deep outline-none transition focus-visible:border-m2m-panel font-sans",
  leadPanel:
    "w-full min-h-12 rounded-lg border border-m2m-gold/30 bg-m2m-deep/50 px-3 text-sm text-m2m-cream focus:outline-none focus:ring-2 focus:ring-m2m-gold/40 font-sans",
}

const hintClass: Record<UrgencyVariant, string> = {
  interior: "text-m2m-deep/65",
  dark: "text-m2m-cream/70",
  cma: "text-m2m-deep/65",
  playbook: "text-m2m-deep/65",
  leadPanel: "text-m2m-cream/65",
}

export type M2mLeadUrgencyMode = "full" | "short"

type Props = {
  id: string
  label?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  variant: UrgencyVariant
  /** `full`: timeline list + empty “Select…” placeholder. `short`: passive defaults + timelines, default “Not sure yet”. */
  mode?: M2mLeadUrgencyMode
  /** Extra class on the outer wrapper (e.g. M2mLeadDobField-style text color) */
  className?: string
  disabled?: boolean
  /** One line under the select (e.g. CRM routing); keep short for mobile. */
  hint?: string
}

export function M2mLeadUrgencySelect({
  id,
  label = M2M_URGENCY_LABEL_DEFAULT,
  value,
  onChange,
  required = true,
  variant,
  mode = "full",
  className,
  disabled,
  hint,
}: Props) {
  const options = mode === "short" ? M2M_URGENCY_SHORT_FORM_OPTIONS : M2M_URGENCY_TIMELINE_OPTIONS
  const showPlaceholder = mode === "full"

  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass[variant]}>
        {label}
        {required ? <span className="text-m2m-panel"> *</span> : null}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        className={cn(selectClass[variant], "touch-manipulation")}
        aria-describedby={hint ? `${id}-hint` : undefined}
      >
        {showPlaceholder ? (
          <option value="">{required ? "Select…" : "Optional — select…"}</option>
        ) : null}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {hint ? (
        <p id={`${id}-hint`} className={cn("mt-1.5 text-xs leading-relaxed", hintClass[variant])}>
          {hint}
        </p>
      ) : null}
    </div>
  )
}
