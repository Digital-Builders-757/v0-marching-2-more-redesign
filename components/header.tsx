"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { M2M_PHONE_HREF } from "@/lib/m2m-site"
import { CALENDLY_URL } from "@/lib/m2m-constants"

const navLinks = [
  { label: "Work With Us", href: "/home-search" },
  { label: "Home Valuation", href: "/free-home-valuation" },
  { label: "Our Team", href: "/our-team" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact-us" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!mobileMenuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Marching 2 More - Home">
          <Image
            src="https://static.wixstatic.com/media/63ece0_60ae3c63ab0d4755b7e49fbd76ad97c2~mv2.png/v1/fill/w_233,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_60ae3c63ab0d4755b7e49fbd76ad97c2~mv2.png"
            alt="Marching 2 More Real Estate Team"
            width={175}
            height={62}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.62rem] tracking-[0.2em] uppercase font-medium px-5 py-3 rounded-sm transition hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            BOOK A HOME CONSULTATION
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-gray-700 transition-colors hover:text-gray-900 md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <Plus
              className={cn(
                "h-6 w-6 transition-transform duration-300 ease-out",
                mobileMenuOpen && "rotate-[135deg]"
              )}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileMenuOpen ? (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-4" aria-label="Mobile">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm font-medium text-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={M2M_PHONE_HREF}
                  className="block py-2 text-sm font-medium text-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Call / Text
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
