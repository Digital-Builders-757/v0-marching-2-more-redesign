/**
 * Capture first-touch / current-touch UTM parameters for lead payloads.
 * Browser-only helpers; safe to import from client components.
 */

export type M2mUtm = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
}

const STORAGE_KEY = "m2m_utm_v1"

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const

function trimUtm(u: M2mUtm): M2mUtm {
  const out: M2mUtm = {}
  for (const k of KEYS) {
    const v = u[k]?.trim()
    if (v) out[k] = v
  }
  return out
}

export function readUtmFromSearchParams(searchParams: URLSearchParams): M2mUtm {
  const out: M2mUtm = {}
  for (const k of KEYS) {
    const v = searchParams.get(k)?.trim()
    if (v) out[k] = v
  }
  return out
}

export function readStoredUtm(): M2mUtm {
  if (typeof window === "undefined") return {}
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== "object") return {}
    return trimUtm(parsed as M2mUtm)
  } catch {
    return {}
  }
}

/** URL values win; merged result is persisted for SPA navigations. */
export function mergeAndPersistUtm(fromUrl: M2mUtm): M2mUtm {
  const merged = trimUtm({ ...readStoredUtm(), ...fromUrl })
  if (typeof window !== "undefined" && Object.keys(merged).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
    } catch {
      /* ignore quota */
    }
  }
  return merged
}
