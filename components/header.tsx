"use client"

import type { CSSProperties, ReactNode } from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Plus, Phone, Mail, MapPin } from "lucide-react"
import { gsap } from "gsap"
import {
  CALENDLY_BOOK_URL,
  M2M_ADDRESS_LINES,
  M2M_EMAIL_INFO,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_TEL,
} from "@/lib/m2m-site"

const agentQuickLinks = [
  {
    name: "Donavan McFadden",
    short: "Donavan",
    href: "/profile-page",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donavan%20copy-R9RwXLWqjd9OnQw4gBl6EiAVWOj9x1.avif",
  },
  {
    name: "Roger Lee",
    short: "Roger",
    href: "/roger-lee",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roger%20Lee%20copy-ZbhqIDwo7JeGrBkKFa6Sv0ylWIuI1D.avif",
  },
  {
    name: "Kristin Allen",
    short: "Kristin",
    href: "/kristin-s-profile",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kristin%20copy-lMfUtkHjgotsvjdeeUby9aj3quqUGu.avif",
  },
] as const

const navLinks = [
  { label: "Home Valuation", href: "/free-home-valuation" },
  { label: "Work With Us", href: "/home-search" },
  { label: "Our Team", href: "/our-team" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact-us" },
]

const menuSections = [
  {
    title: "Buyers & sellers",
    links: [
      { label: "Home Valuation", href: "/free-home-valuation" },
      { label: "Search Properties", href: "/#properties" },
      { label: "Work With Us", href: "/home-search" },
      { label: "Pre-Listing Checklist", href: "/resources" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Team", href: "/our-team" },
      { label: "Client Reviews", href: "/reviews" },
      { label: "Resources", href: "/resources" },
      { label: "Partners", href: "/partners" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Agents",
    links: [
      { label: "Donavan McFadden", href: "/profile-page" },
      { label: "Roger Lee", href: "/roger-lee" },
      { label: "Kristin Allen", href: "/kristin-s-profile" },
      { label: "Jalessa Hendricks", href: "/jalessa-hendricks" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "Book consultation", href: CALENDLY_BOOK_URL },
      { label: M2M_PHONE_DISPLAY, href: `tel:${M2M_PHONE_TEL}` },
    ],
  },
]

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
]

function MenuLink({
  href,
  className,
  style,
  onClick,
  children,
}: {
  href: string
  className: string
  style: CSSProperties
  onClick: () => void
  children: ReactNode
}) {
  if (href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={className}
        style={style}
        onClick={onClick}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className} style={style} onClick={onClick}>
      {children}
    </Link>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const menuContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.2
      )

      const navItems = navRef.current?.querySelectorAll("a")
      if (navItems?.length) {
        tl.fromTo(
          navItems,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.04 },
          0.35
        )
      }

      tl.fromTo(
        menuBtnRef.current,
        { opacity: 0, rotate: -90 },
        { opacity: 1, rotate: 0, duration: 0.6 },
        0.65
      )
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!overlayRef.current) return

    if (isOpen) {
      gsap.set(overlayRef.current, { visibility: "visible", x: "100%" })

      gsap.to(overlayRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      })

      const sections = menuContentRef.current?.querySelectorAll(".menu-section")
      if (sections?.length) {
        gsap.fromTo(
          sections,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: "power3.out" }
        )
      }
    } else if (overlayRef.current.style.visibility === "visible") {
      gsap.to(overlayRef.current, {
        opacity: 0,
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { visibility: "hidden" })
          }
        },
      })
    }
  }, [isOpen])

  const linkCls =
    "text-[0.65rem] md:text-[0.7rem] tracking-[0.2em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors font-light"

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-[100]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          }}
        />
        <div className="relative flex items-center justify-between min-h-20 py-3 px-6 md:px-10 lg:px-16 gap-3">
          <Link
            ref={logoRef}
            href="/"
            className="flex-shrink-0 opacity-0"
            aria-label="Marching2More - Home"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-WlleymhFpZWiaSsI0YKWHMAcn1V6SX.avif"
              alt="Marching2More"
              width={120}
              height={43}
              className="h-[34px] md:h-[41px] w-auto"
              priority
            />
          </Link>

          <div
            className="hidden lg:flex items-center gap-2 xl:gap-3 opacity-0"
            aria-label="Agent profiles"
          >
            {agentQuickLinks.map((a) => (
              <Link key={a.href} href={a.href} className="group relative" title={a.name}>
                <Image
                  src={a.src}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover border border-m2m-gold/40 transition-transform group-hover:scale-105"
                />
                <span className="sr-only">{a.name}</span>
              </Link>
            ))}
          </div>

          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-3 xl:gap-5 flex-1 justify-end flex-wrap"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.65rem] xl:text-[0.7rem] tracking-[0.18em] uppercase text-m2m-cream/90 hover:text-m2m-gold transition-colors opacity-0"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CALENDLY_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 text-center text-[0.58rem] xl:text-[0.62rem] tracking-[0.12em] uppercase px-3 xl:px-4 py-2.5 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt leading-tight max-w-[10.5rem] xl:max-w-none"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              BOOK A HOME CONSULTATION
            </a>
          </nav>

          <button
            ref={menuBtnRef}
            type="button"
            className="w-10 h-10 flex items-center justify-center text-m2m-cream hover:text-m2m-gold transition-colors opacity-0 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <Plus
              className={cn(
                "w-6 h-6 transition-transform duration-500 ease-out",
                isOpen && "rotate-[135deg]"
              )}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[200] opacity-0 invisible"
        style={{ transform: "translateX(100%)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-03%20at%207.30.14%20PM-JVsmkDPrwryZHLk0Lm3Wqm4bAhGTc2.png')`,
          }}
        />
        <div className="absolute inset-0 bg-m2m-black/90" />

        <div className="absolute top-0 left-0 right-0 flex items-center justify-center h-20 px-6 md:px-10 lg:px-16 z-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-WlleymhFpZWiaSsI0YKWHMAcn1V6SX.avif"
            alt="Marching2More"
            width={140}
            height={50}
            className="h-[38px] md:h-[44px] w-auto"
          />

          <button
            type="button"
            className="absolute right-6 md:right-10 lg:right-16 w-10 h-10 flex items-center justify-center text-m2m-cream/70 hover:text-m2m-cream transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <Plus
              className="w-7 h-7 rotate-[135deg] transition-transform duration-500 ease-out hover:rotate-[180deg]"
              strokeWidth={1.5}
            />
          </button>
        </div>

        <div ref={menuContentRef} className="relative h-full overflow-y-auto">
          <div className="min-h-full flex flex-col justify-between px-6 md:px-10 lg:px-16 py-24">
            <div className="menu-section opacity-0 flex flex-wrap justify-center gap-4 py-4 lg:hidden">
              {agentQuickLinks.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center gap-1 w-20"
                >
                  <Image
                    src={a.src}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover border border-m2m-gold/40"
                  />
                  <span
                    className="text-[0.55rem] tracking-wider uppercase text-m2m-muted text-center"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {a.short}
                  </span>
                </Link>
              ))}
            </div>

            <div className="menu-section opacity-0 flex justify-center pb-6 lg:hidden">
              <a
                href={CALENDLY_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-center text-[0.65rem] tracking-[0.15em] uppercase px-6 py-3 bg-m2m-gold text-m2m-deep font-medium"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                BOOK A HOME CONSULTATION
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-16">
              {menuSections.map((section) => (
                <div key={section.title} className="menu-section opacity-0">
                  <h3
                    className="text-sm md:text-base tracking-[0.35em] uppercase text-m2m-cream mb-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <MenuLink
                          href={link.href}
                          className={linkCls}
                          style={{ fontFamily: "var(--font-nav)" }}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </MenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="menu-section opacity-0 mt-16 pt-5 flex justify-center w-full">
              <div className="grid grid-cols-2 gap-12 text-center">
                <div className="flex flex-col gap-3">
                  <h4
                    className="text-xs tracking-[0.3em] uppercase text-m2m-gold mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Contact
                  </h4>
                  <a
                    href={`mailto:${M2M_EMAIL_INFO}`}
                    className="flex items-center justify-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {M2M_EMAIL_INFO}
                  </a>
                  <a
                    href={`tel:${M2M_PHONE_TEL}`}
                    className="flex items-center justify-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {M2M_PHONE_DISPLAY}
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <h4
                    className="text-xs tracking-[0.3em] uppercase text-m2m-gold mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Virginia Beach
                  </h4>
                  <p className="text-[0.6rem] tracking-wider text-m2m-muted leading-relaxed flex items-start gap-2 justify-center">
                    <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>
                      {M2M_ADDRESS_LINES[0]}
                      <br />
                      {M2M_ADDRESS_LINES[1]}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="menu-section opacity-0 mt-16 pt-8 border-t border-m2m-gold/20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <span
                className="text-[0.65rem] tracking-[0.35em] uppercase text-m2m-muted"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Follow Us On:
              </span>
              <div className="flex items-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Header as SiteHeader }
