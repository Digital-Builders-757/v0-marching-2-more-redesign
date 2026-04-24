"use client"

import { useMemo } from "react"

import { cn } from "@/lib/utils"
import { M2M_DOB_MIN_YEAR } from "@/lib/m2m-dob"

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

const selectBase =
  "min-h-11 w-full rounded border bg-transparent px-2.5 py-2 text-sm focus:outline-none focus:ring-2 touch-manipulation font-sans"

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
  const { y: yVal, m: mVal, d: dVal } = parseIsoParts(value)

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

  const setParts = (y: string, m: string, d: string) => {
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

  const selectCls = cn(selectBase, inputClassName)

  return (
    <fieldset className={className}>
      <legend className="mb-1.5 block w-full text-left text-sm font-medium text-inherit font-sans">
        {label}
        {required ? <span className="text-m2m-panel"> *</span> : null}
      </legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-2">
          <label htmlFor={`${id}-month`} className="sr-only">
            Birth month
          </label>
          <select
            id={`${id}-month`}
            autoComplete="bday-month"
            value={mVal}
            required={required}
            className={selectCls}
            onChange={(e) => setParts(yVal, e.target.value, dVal)}
          >
            <option value="">Month</option>
            {MONTH_OPTIONS.map((mo) => (
              <option key={mo.value} value={mo.value}>
                {mo.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-day`} className="sr-only">
            Birth day
          </label>
          <select
            id={`${id}-day`}
            autoComplete="bday-day"
            value={dVal}
            required={required}
            className={selectCls}
            onChange={(e) => setParts(yVal, mVal, e.target.value)}
          >
            <option value="">Day</option>
            {dayOptions.map((day) => (
              <option key={day} value={day}>
                {parseInt(day, 10)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-year`} className="sr-only">
            Birth year
          </label>
          <select
            id={`${id}-year`}
            autoComplete="bday-year"
            value={yVal}
            required={required}
            className={selectCls}
            onChange={(e) => setParts(e.target.value, mVal, dVal)}
          >
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className={cn("mt-1.5 text-xs font-sans leading-relaxed", helperClassName ?? "opacity-80")}>
        Used only to verify identity and serve you faster.
      </p>
    </fieldset>
  )
}
