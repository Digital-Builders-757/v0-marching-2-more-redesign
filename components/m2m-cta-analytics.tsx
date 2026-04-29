"use client"

import { useEffect } from "react"
import { track } from "@vercel/analytics"

/**
 * Delegated click tracking for high-value CTAs.
 * Add `data-m2m-track="snake_case_event"` and optional `data-m2m-track-loc="context"`
 * on links or buttons. Fires Vercel Analytics custom event `m2m_cta` with properties.
 *
 * @see docs/marching2more/M2M_CONVERSION_AND_CONTENT_ENGINE_WORK_ORDER.md
 */
export function M2mCtaAnalytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("[data-m2m-track]")
      if (!el) return
      const name = el.getAttribute("data-m2m-track")
      if (!name) return
      const loc = el.getAttribute("data-m2m-track-loc") ?? ""
      track("m2m_cta", { name, loc })
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  return null
}
