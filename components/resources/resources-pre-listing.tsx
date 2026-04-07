import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { CALENDLY_BOOK_URL } from "@/lib/m2m-site"
import {
  PRE_LISTING_CHECKLIST_BLURB,
  PRE_LISTING_CHECKLIST_ITEMS,
} from "@/lib/pre-listing-checklist-content"
import { ResourcesChecklistForm } from "./resources-checklist-form"

export function ResourcesPreListing() {
  return (
    <div className="space-y-10">
      <div>
        <p
          className="text-sm tracking-[0.3em] uppercase text-m2m-gold"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Sellers
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl font-semibold text-m2m-green md:text-5xl">
          Pre-listing checklist
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-m2m-sage">
          {PRE_LISTING_CHECKLIST_BLURB}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="/api/pre-listing-checklist"
            className="inline-flex items-center justify-center text-center text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-deep text-m2m-cream transition-colors hover:bg-m2m-deep/90"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Download checklist
          </a>
          <Link
            href={CALENDLY_BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center text-center text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-deep text-m2m-deep transition-colors hover:bg-m2m-deep hover:text-m2m-cream"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Book a consultation
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center text-center text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-deep/20 text-m2m-deep transition-colors hover:border-m2m-deep"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Contact us
          </Link>
        </div>
      </div>

      <ResourcesChecklistForm />

      <div>
        <h2
          className="text-2xl font-light text-m2m-deep"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What&apos;s inside
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {PRE_LISTING_CHECKLIST_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-m2m-muted">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-m2m-gold" aria-hidden />
              <span style={{ fontFamily: "var(--font-sans)" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
