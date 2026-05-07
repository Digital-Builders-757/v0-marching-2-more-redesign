/** Canonical Marching 2 More brand Instagram (use on every agent profile). */
export const M2M_COMPANY_INSTAGRAM_URL = "https://www.instagram.com/marching2more" as const

/** Donavan McFadden — personal Instagram (distinct from company). */
export const M2M_DONAVAN_INSTAGRAM_PERSONAL_URL = "https://www.instagram.com/mr.marching2more/" as const

/** Roger Lee — personal Instagram (distinct from company). */
export const M2M_ROGER_INSTAGRAM_PERSONAL_URL = "https://www.instagram.com/rogerleerealtor757" as const

export function instagramUrlsEquivalent(a: string, b: string): boolean {
  return a.trim().replace(/\/$/, "") === b.trim().replace(/\/$/, "")
}
