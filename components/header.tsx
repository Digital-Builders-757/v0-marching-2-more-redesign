"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { M2M_PHONE_HREF } from "@/lib/m2m-site"
import { CALENDLY_URL } from "@/lib/m2m-constants"
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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Marching 2 More - Home">
            <Image
              src="https://static.wixstatic.com/media/63ece0_60ae3c63ab0d4755b7e49fbd76ad97c2~mv2.png/v1/fill/w_233,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_60ae3c63ab0d4755b7e49fbd76ad97c2~mv2.png"
              alt="Marching 2 More Logo"
              width={175}
              height={62}
              className="h-14 w-auto"
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
                className="mt-1 text-[0.7rem] font-medium tracking-[0.22em] text-m2m-deep/80"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                REAL ESTATE TEAM
              </span>
            </span>
          </Link>

          {/* Wix parity: hamburger/menu (shown on desktop too) */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-gray-700 transition-colors hover:text-gray-900"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <Plus
              className={cn(
                "h-6 w-6 transition-transform duration-300 ease-out",
                menuOpen && "rotate-[135deg]"
              )}
              strokeWidth={1.5}
            />
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
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.62rem] tracking-[0.2em] uppercase font-medium px-5 py-3 rounded-sm transition hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            BOOK A HOME CONSULTATION
          </a>
        </div>
      </div>

      {/* Menu panel */}
      {menuOpen ? (
        <div className="border-t border-gray-200 bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8" aria-label="Site">
            <ul className="flex flex-col gap-2">
              {M2M_WIX_HEADER_MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-sm px-2 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href={M2M_PHONE_HREF}
                  className="block rounded-sm px-2 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Call / Text
                </a>
              </li>

              <li className="pt-1 md:hidden">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-sm bg-m2m-gold px-2 py-2 text-center text-[0.7rem] tracking-[0.2em] uppercase font-medium text-m2m-deep hover:bg-m2m-gold-lt"
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
