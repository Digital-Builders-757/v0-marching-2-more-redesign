/** Display helpers for calculator UI */

export function formatUsd0(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(Math.round(value))
}

export function formatUsd0PerMo(value: number): string {
  return `${formatUsd0(value)}/mo`
}

export function formatUsd0PerYr(value: number): string {
  return `${formatUsd0(value)}/yr`
}

export function formatPercent1(ratio: number): string {
  return `${(ratio * 100).toFixed(1)}%`
}

export function parseMoneyInput(raw: string): number | undefined {
  const t = raw.replace(/[$,\s]/g, "").trim()
  if (t === "") return undefined
  const n = Number(t)
  if (!Number.isFinite(n)) return undefined
  return n
}
