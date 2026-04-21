"use client"

import { useEffect, useState } from "react"

import { mergeAndPersistUtm, readUtmFromSearchParams, type M2mUtm } from "@/lib/m2m-utm"

/**
 * Syncs UTMs from the current URL into sessionStorage and exposes merged values for lead payloads.
 * Uses `window.location` so parent pages do not require a Suspense boundary.
 */
export function useM2mUtm(): M2mUtm {
  const [utm, setUtm] = useState<M2mUtm>({})

  useEffect(() => {
    let cancelled = false
    queueMicrotask(() => {
      if (cancelled || typeof window === "undefined") return
      const params = new URLSearchParams(window.location.search)
      setUtm(mergeAndPersistUtm(readUtmFromSearchParams(params)))
    })
    return () => {
      cancelled = true
    }
  }, [])

  return utm
}
