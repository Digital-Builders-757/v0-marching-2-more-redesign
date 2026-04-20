"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

import { M2mBrandLogo } from "@/components/m2m-brand-logo"
import { M2mConsultationCta } from "@/components/m2m-cta"
import {
  getMenuSearchSuggestions,
  MENU_SEARCH_EMPTY_HINT,
  MENU_SEARCH_PLACEHOLDER,
  resolveMenuSearchQuery,
} from "@/lib/m2m-menu-search"
import { M2M_PHONE_HREF } from "@/lib/m2m-site"
import { M2M_HEADER_AGENT_LINKS, M2M_WIX_HEADER_MENU_LINKS } from "@/lib/m2m-nav"

export type HeaderProps = {
  /** Landing pages: cream outline CTA on green. Default keeps Wix gold fill. */
  consultationCtaVariant?: "default" | "outlineCream"
}

export function Header({ consultationCtaVariant = "default" }: HeaderProps) {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuSearchQuery, setMenuSearchQuery] = useState("")
  const [menuSearchNoMatch, setMenuSearchNoMatch] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  const menuSuggestions = menuOpen ? getMenuSearchSuggestions(menuSearchQuery, 6) : []

  const navigateMenuSearch = (href: string) => {
    router.push(href)
    setMenuOpen(false)
    setMenuSearchQuery("")
    setMenuSearchNoMatch(false)
  }

  const submitMenuSearch = () => {
    const href = resolveMenuSearchQuery(menuSearchQuery)
    if (href) {
      navigateMenuSearch(href)
      return
    }
    setMenuSearchNoMatch(true)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-m2m-gold/15 bg-m2m-panel">
      {/* Backdrop */}
      {menuOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-[60] bg-black/30"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <div className="relative z-[70] mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Marching 2 More - Home">
            <M2mBrandLogo variant="header" priority />

            {/* Wix parity: brand text links */}
            <span className="hidden flex-col leading-none sm:flex">
              <span
                className="text-[0.75rem] font-semibold tracking-[0.2em] text-m2m-cream"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                MARCHING 2 MORE
              </span>
              <span
                className="mt-1 text-[0.7rem] font-medium tracking-[0.22em] text-m2m-cream/80"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                REAL ESTATE TEAM
              </span>
            </span>
          </Link>

          {/* Wix parity: hamburger/menu (shown on desktop too) */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-m2m-cream/90 transition-colors hover:text-m2m-cream"
            onClick={() => {
              setMenuOpen((wasOpen) => {
                if (!wasOpen) {
                  setMenuSearchQuery("")
                  setMenuSearchNoMatch(false)
                }
                return !wasOpen
              })
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {/* Wix parity: agent headshot quick links */}
          <div className="hidden items-center gap-2 md:flex">
            {M2M_HEADER_AGENT_LINKS.map((agent) => (
              <Link
                key={agent.href}
                href={agent.href}
                aria-label={agent.name}
                className="relative h-10 w-10 overflow-hidden rounded-full border border-m2m-deep/10 transition hover:border-m2m-gold/40"
              >
                <Image src={agent.image} alt={agent.name} fill className="object-cover object-top" sizes="40px" />
              </Link>
            ))}
          </div>

          <M2mConsultationCta
            variant={consultationCtaVariant === "outlineCream" ? "outlineCream" : "gold"}
            className="hidden md:inline-flex"
          />
        </div>
      </div>

      {/* Menu panel (Wix-like: right-side floating panel) */}
      {menuOpen ? (
        <div className="relative z-[80]">
          <nav
            className="absolute right-4 top-2 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-md bg-m2m-panel shadow-xl ring-1 ring-black/20 sm:right-6"
            aria-label="Site"
          >
            {/* Site search (keyword routing) */}
            <div className="border-b border-white/10 p-4 pb-3">
              <form
                role="search"
                className="space-y-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  submitMenuSearch()
                }}
              >
                <label className="sr-only" htmlFor="m2m-menu-search-input">
                  Search by service, question, or page
                </label>
                <input
                  id="m2m-menu-search-input"
                  type="search"
                  value={menuSearchQuery}
                  placeholder={MENU_SEARCH_PLACEHOLDER}
                  autoComplete="off"
                  onChange={(e) => {
                    setMenuSearchQuery(e.target.value)
                    setMenuSearchNoMatch(false)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      submitMenuSearch()
                    }
                  }}
                  className="w-full rounded-sm border border-m2m-deep/10 bg-white px-3 py-2.5 text-sm text-m2m-deep placeholder:text-m2m-muted/80 outline-none ring-m2m-gold/30 focus:ring-2"
                  aria-label="Menu search"
                  aria-describedby="m2m-menu-search-hint"
                />
                <p id="m2m-menu-search-hint" className="text-[0.65rem] leading-snug text-m2m-cream/65">
                  {menuSearchQuery.trim() ? null : MENU_SEARCH_EMPTY_HINT}
                </p>
              </form>
              {menuSearchNoMatch ? (
                <p className="mt-2 text-[0.7rem] text-m2m-gold" role="alert">
                  No match. {MENU_SEARCH_EMPTY_HINT}
                </p>
              ) : null}
              {menuSearchQuery.trim() && menuSuggestions.length > 0 ? (
                <ul className="mt-3 max-h-48 space-y-1 overflow-y-auto">
                  {menuSuggestions.map((s) => (
                    <li key={s.href}>
                      <button
                        type="button"
                        className="w-full rounded-sm px-2 py-2 text-left text-sm text-m2m-cream transition hover:bg-white/10"
                        onClick={() => navigateMenuSearch(s.href)}
                      >
                        <span className="font-medium">{s.title}</span>
                        <span className="block text-[0.65rem] text-m2m-cream/60">{s.hint}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <ul className="flex flex-col gap-1 p-2 pt-0">
              {M2M_WIX_HEADER_MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-sm px-3 py-3 text-base font-medium text-m2m-cream hover:bg-white/10"
                    onClick={() => setMenuOpen(false)}
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href={M2M_PHONE_HREF}
                  className="block rounded-sm px-3 py-3 text-base font-medium text-m2m-cream hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Call / Text
                </a>
              </li>

              <li className="px-2 pb-2 pt-1 md:hidden">
                <M2mConsultationCta
                  variant={consultationCtaVariant === "outlineCream" ? "outlineCream" : "gold"}
                  className="block w-full rounded-sm px-3 py-3 text-[0.7rem]"
                  onClick={() => setMenuOpen(false)}
                />
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
