/**
 * Header / mobile menu “natural language” search routing.
 * Priority: specific people → checklist → home search intents → valuation → contact → team.
 */

export type MenuSearchSuggestion = {
  href: string
  title: string
  hint: string
}

const SUGGESTION_CATALOG: MenuSearchSuggestion[] = [
  { href: "/profile-page", title: "Donavan McFadden", hint: "Profile" },
  { href: "/roger-lee", title: "Roger Lee", hint: "Profile" },
  { href: "/kristin-s-profile", title: "Kristin Allen", hint: "Profile" },
  { href: "/our-team", title: "Our Team", hint: "Meet the team" },
  { href: "/sell#checklist", title: "Pre-listing checklist", hint: "Seller prep on /sell" },
  { href: "/home-search", title: "Home Search", hint: "Search homes & buying" },
  { href: "/free-home-valuation", title: "Free Home Valuation", hint: "CMA & home value" },
  { href: "/contact-us", title: "Contact Us", hint: "Speak with the team" },
]

function normalize(q: string): string {
  return q.trim().toLowerCase().replace(/\s+/g, " ")
}

/**
 * Single destination on submit / Enter — first matching rule wins (most specific first).
 */
export function resolveMenuSearchQuery(raw: string): string | null {
  const q = normalize(raw)
  if (!q) return null

  if (/\bdonavan\b|\bdonovan\b/.test(q)) return "/profile-page"
  if (/\broger\b/.test(q)) return "/roger-lee"
  if (/\bkristin\b/.test(q)) return "/kristin-s-profile"
  if (/\bjalessa\b/.test(q)) return "/our-team"

  if (
    /\bpre[\s-]?listing\b/.test(q) ||
    /\bseller checklist\b/.test(q) ||
    /getting ready to sell/.test(q) ||
    /how to prepare (home|house|my home)/.test(q) ||
    (/\bchecklist\b/.test(q) && !/\bcma\b/.test(q))
  ) {
    return "/sell#checklist"
  }

  if (
    /\b(buy|buying)\b/.test(q) ||
    /search homes|home search|house search|homes for sale|find a home/.test(q) ||
    /\b(relocation|relocating)\b/.test(q) ||
    /\bmoving\b|\bmilitary relocation\b/.test(q)
  ) {
    return "/home-search"
  }

  if (
    /\bcma\b|\bcma request\b/.test(q) ||
    /home valuation|free home valuation|free home evaluation/.test(q) ||
    /what'?s my (home|house) worth|what is my (home|house) worth/.test(q) ||
    /value my home|comparative market analysis/.test(q) ||
    /sell my (house|home)|list my home/.test(q) ||
    /\bselling\b/.test(q)
  ) {
    return "/free-home-valuation"
  }

  if (
    /contact( us)?|speak with an agent|talk to an agent|book a consultation|book appointment/.test(q) ||
    /\bhelp me (buy|sell)\b/.test(q) ||
    (/\bconsultation\b/.test(q) && /\bagent\b/.test(q)) ||
    (/\bagent\b/.test(q) && !/\bour team\b|meet the team|\broger\b|\bkristin\b|\bdonavan\b/.test(q))
  ) {
    return "/contact-us"
  }

  if (/\bteam\b|meet the team|our team/.test(q)) return "/our-team"

  return null
}

export function getMenuSearchSuggestions(raw: string, limit = 6): MenuSearchSuggestion[] {
  const q = normalize(raw)
  if (!q) return []

  const resolved = resolveMenuSearchQuery(q)
  const out: MenuSearchSuggestion[] = []

  if (resolved) {
    const hit = SUGGESTION_CATALOG.find((s) => s.href === resolved)
    if (hit) out.push(hit)
  }

  for (const item of SUGGESTION_CATALOG) {
    if (out.length >= limit) break
    if (out.some((o) => o.href === item.href)) continue

    const text = `${item.title} ${item.hint}`.toLowerCase()
    const words = q.split(/\s+/).filter((w) => w.length > 2)
    const match =
      words.some((w) => text.includes(w)) ||
      item.title
        .toLowerCase()
        .split(/\s+/)
        .some((part) => part.length > 2 && q.includes(part))

    if (match) out.push(item)
  }

  return out.slice(0, limit)
}

export const MENU_SEARCH_PLACEHOLDER = "Search homes, valuation, contact, team…"

export const MENU_SEARCH_EMPTY_HINT =
  'Try "home valuation," "contact," "search homes," or "checklist."'
