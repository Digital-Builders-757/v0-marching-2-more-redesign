"use client"

import { useEffect, useMemo, useRef, useState } from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { M2M_DOB_MIN_YEAR } from "@/lib/m2m-dob"
import { cn } from "@/lib/utils"

const MONTH_OPTIONS: { value: string; label: string }[] = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
]

function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate()
}

function parseIsoParts(iso: string): { y: string; m: string; d: string } {
  if (/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    const [y, m, d] = iso.split("-")
    return { y: y!, m: m!, d: d! }
  }
  return { y: "", m: "", d: "" }
}

const triggerBase =
  "min-h-11 w-full rounded border bg-transparent px-2.5 py-2 text-sm outline-none focus:ring-2 touch-manipulation font-sans data-[size=default]:h-auto data-[size=default]:min-h-11"

/** Shared date-of-birth field for GHL-required intake (YYYY-MM-DD). Uses Radix Select so menus work inside overflow-hidden heroes. */
export function M2mLeadDobField({
  id = "m2m-dob",
  label = "Date of birth",
  value,
  onChange,
  className,
  inputClassName,
  required = true,
  helperClassName,
  /** Popover panel (portaled). Use on dark heroes so the list matches the form. */
  selectContentClassName,
  selectItemClassName,
}: {
  id?: string
  label?: string
  value: string
  onChange: (value: string) => void
  className?: string
  inputClassName?: string
  required?: boolean
  helperClassName?: string
  selectContentClassName?: string
  selectItemClassName?: string
}) {
  const [parts, setParts] = useState(() => parseIsoParts(value))
  const prevValueRef = useRef(value)

  useEffect(() => {
    const previous = prevValueRef.current
    const wasComplete = /^\d{4}-\d{2}-\d{2}$/.test(previous)
    let nextParts: { y: string; m: string; d: string } | null = null

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      nextParts = parseIsoParts(value)
    } else if (value === "" && wasComplete) {
      nextParts = { y: "", m: "", d: "" }
    }

    prevValueRef.current = value

    if (!nextParts) return
    queueMicrotask(() => {
      setParts(nextParts)
    })
  }, [value])

  const yVal = parts.y
  const mVal = parts.m
  const dVal = parts.d

  const currentYear = new Date().getUTCFullYear()
  const years = useMemo(
    () =>
      Array.from({ length: currentYear - M2M_DOB_MIN_YEAR + 1 }, (_, i) =>
        String(currentYear - i),
      ),
    [currentYear],
  )

  const yNum = yVal ? parseInt(yVal, 10) : NaN
  const mNum = mVal ? parseInt(mVal, 10) : NaN
  const maxDay =
    !Number.isNaN(yNum) && !Number.isNaN(mNum) ? daysInMonth(yNum, mNum) : 31

  const dayOptions = useMemo(() => {
    return Array.from({ length: maxDay }, (_, i) => String(i + 1).padStart(2, "0"))
  }, [maxDay])

  const emitIso = (y: string, m: string, d: string) => {
    if (!y || !m || !d) {
      onChange("")
      return
    }
    const yi = parseInt(y, 10)
    const mi = parseInt(m, 10)
    const max = daysInMonth(yi, mi)
    let di = parseInt(d, 10)
    if (di > max) di = max
    const ds = String(di).padStart(2, "0")
    onChange(`${y}-${m}-${ds}`)
  }

  const patchParts = (patch: Partial<{ y: string; m: string; d: string }>) => {
    setParts((prev) => {
      let next = { ...prev, ...patch }
      if (next.y && next.m && next.d) {
        const max = daysInMonth(parseInt(next.y, 10), parseInt(next.m, 10))
        if (parseInt(next.d, 10) > max) {
          next = { ...next, d: String(max).padStart(2, "0") }
        }
      }
      queueMicrotask(() => emitIso(next.y, next.m, next.d))
      return next
    })
  }

  const triggerCls = cn(triggerBase, inputClassName)

  const dobComplete = /^\d{4}-\d{2}-\d{2}$/.test(value)

  return (
    <fieldset className={className}>
      <legend className="mb-1.5 block w-full text-left text-sm font-medium text-inherit font-sans">
        {label}
        {required ? <span className="text-m2m-panel"> *</span> : null}
      </legend>
      {required ? (
        <input
          type="text"
          name={`${id}-iso`}
          value={dobComplete ? value : ""}
          readOnly
          required
          tabIndex={-1}
          className="sr-only"
          aria-label={`${label} (complete date required)`}
          onInvalid={(e) => {
            e.preventDefault()
            requestAnimationFrame(() => {
              document.getElementById(`${id}-month`)?.focus()
            })
          }}
        />
      ) : null}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-2">
          <span className="sr-only" id={`${id}-month-hint`}>
            Birth month
          </span>
          <Select value={mVal || undefined} onValueChange={(v) => patchParts({ m: v })}>
            <SelectTrigger
              id={`${id}-month`}
              aria-labelledby={`${id}-month-hint`}
              aria-required={required}
              className={triggerCls}
            >
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent className={selectContentClassName}>
              {MONTH_OPTIONS.map((mo) => (
                <SelectItem key={mo.value} value={mo.value} className={selectItemClassName}>
                  {mo.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <span className="sr-only" id={`${id}-day-hint`}>
            Birth day
          </span>
          <Select value={dVal || undefined} onValueChange={(v) => patchParts({ d: v })}>
            <SelectTrigger
              id={`${id}-day`}
              aria-labelledby={`${id}-day-hint`}
              aria-required={required}
              className={triggerCls}
            >
              <SelectValue placeholder="Day" />
            </SelectTrigger>
            <SelectContent className={selectContentClassName}>
              {dayOptions.map((day) => (
                <SelectItem key={day} value={day} className={selectItemClassName}>
                  {parseInt(day, 10)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <span className="sr-only" id={`${id}-year-hint`}>
            Birth year
          </span>
          <Select value={yVal || undefined} onValueChange={(v) => patchParts({ y: v })}>
            <SelectTrigger
              id={`${id}-year`}
              aria-labelledby={`${id}-year-hint`}
              aria-required={required}
              className={triggerCls}
            >
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className={cn("max-h-60", selectContentClassName)}>
              {years.map((y) => (
                <SelectItem key={y} value={y} className={selectItemClassName}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <p className={cn("mt-1.5 text-xs font-sans leading-relaxed", helperClassName ?? "opacity-80")}>
        Used only to verify identity and serve you faster.
      </p>
    </fieldset>
  )
}
