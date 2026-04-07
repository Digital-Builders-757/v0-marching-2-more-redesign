"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Menu, X } from "lucide-react"

import { CALENDLY_BOOK_URL, M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

const agentLinks = [
  {
    href: "/profile-page",
    aria: "Donavan McFadden profile",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donavan%20copy-R9RwXLWqjd9OnQw4gBl6EiAVWOj9x1.avif",
  },
  {
    href: "/roger-lee",
    aria: "Roger Lee profile",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roger%20Lee%20copy-ZbhqIDwo7JeGrBkKFa6Sv0ylWIuI1D.avif",
  },
  {
    href: "/kristin-s-profile",
    aria: "Kristin Allen profile",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kristin%20copy-lMfUtkHjgotsvjdeeUby9aj3quqUGu.avif",
  },
]

export function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = useMemo(
    () => [
      { label: "Work With Us", href: "/home-search" },
      { label: "Home Valuation", href: "/free-home-valuation" },
      { label: "Our Team", href: "/our-team" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact Us", href: "/contact-us" },
    ],
    [],
  )

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-black/5">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Marching 2 More - Home">
          <Image
            src="https://static.wixstatic.com/media/63ece0_60ae3c63ab0d4755b7e49fbd76ad97c2~mv2.png/v1/fill/w_233,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_60ae3c63ab0d4755b7e49fbd76ad97c2~mv2.png"
            alt="Marching 2 More Real Estate Team"
            width={175}
            height={62}
            className="h-14 w-auto"
            priority
          />
          <span className="sr-only">Marching 2 More</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Agent quick-links */}
          <div className="hidden items-center gap-1.5 lg:flex">
            {agentLinks.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="relative h-9 w-9 overflow-hidden rounded-full border border-m2m-gold/20 hover:border-m2m-gold/50 transition"
                aria-label={a.aria}
              >
                <Image src={a.img} alt="" fill className="object-cover" sizes="36px" />
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

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-gray-900 hover:bg-black/5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <a href={M2M_PHONE_HREF} className="text-sm font-medium text-gray-900" onClick={() => setOpen(false)}>
                Call/Text — {M2M_PHONE_DISPLAY}
              </a>
              <a
                href={CALENDLY_BOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.62rem] tracking-[0.2em] uppercase font-medium px-5 py-3 rounded-sm"
                style={{ fontFamily: "var(--font-nav)" }}
                onClick={() => setOpen(false)}
              >
                BOOK A HOME CONSULTATION
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
