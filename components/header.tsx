"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { CALENDLY_BOOK_URL, M2M_PHONE_HREF } from "@/lib/m2m-site"
import { M2M_HEADER_AGENT_LINKS, M2M_WIX_HEADER_MENU_LINKS } from "@/lib/m2m-nav"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
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
            <Image
              src="/brand/m2m-logo.avif"
              alt="Marching 2 More Logo"
              width={180}
              height={52}
              className="h-12 w-auto"
              priority
            />

            {/* Wix parity: brand text links */}
            <span className="hidden flex-col leading-none sm:flex">
              <span
                className="text-[0.75rem] font-semibold tracking-[0.2em] text-m2m-deep"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                MARCHING 2 MORE
              </span>
              <span
                className="mt-1 text-[0.7rem] font-medium tracking-[0.22em] text-m2m-deep/70"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                REAL ESTATE TEAM
              </span>
            </span>
          </Link>

          {/* Wix parity: hamburger/menu (shown on desktop too) */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-m2m-deep/80 transition-colors hover:text-m2m-deep"
            onClick={() => setMenuOpen((v) => !v)}
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
                <Image src={agent.image} alt={agent.name} fill className="object-cover" sizes="40px" />
              </Link>
            ))}
          </div>

          <a
            href={CALENDLY_BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.62rem] tracking-[0.2em] uppercase font-medium px-5 py-3 rounded-sm transition hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            BOOK A HOME CONSULTATION
          </a>
        </div>
      </div>

      {/* Menu panel (Wix-like: right-side floating panel) */}
      {menuOpen ? (
        <div className="relative z-[80]">
          <nav
            className="absolute right-4 top-2 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-md bg-[#244b2a] shadow-xl ring-1 ring-black/20 sm:right-6"
            aria-label="Site"
          >
            {/* Search input — presentational parity */}
            <div className="p-4 pb-3">
              <input
                type="search"
                placeholder=""
                className="w-full rounded-sm bg-white px-3 py-2 text-sm text-gray-900 outline-none"
                aria-label="Menu search"
              />
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
                <a
                  href={CALENDLY_BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-sm bg-m2m-gold px-3 py-3 text-center text-[0.7rem] tracking-[0.2em] uppercase font-medium text-m2m-deep hover:bg-m2m-gold-lt"
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  BOOK A HOME CONSULTATION
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
