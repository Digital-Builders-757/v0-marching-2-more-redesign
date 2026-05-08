import { TermsOfUsePart1 } from "@/components/policy/terms-of-use-part1"
import { TermsOfUsePart2 } from "@/components/policy/terms-of-use-part2"

const TOC: readonly { id: string; label: string }[] = [
  { id: "section-1", label: "Agreement to terms" },
  { id: "section-2", label: "Intellectual property rights" },
  { id: "section-3", label: "User representations" },
  { id: "section-4", label: "Prohibited activities" },
  { id: "section-5", label: "User generated contributions" },
  { id: "section-6", label: "Contribution license" },
  { id: "section-7", label: "Mobile application license" },
  { id: "section-8", label: "Submissions" },
  { id: "section-9", label: "Third-party website and content" },
  { id: "section-10", label: "Site management" },
  { id: "section-11", label: "Privacy policy" },
  { id: "section-12", label: "Term and termination" },
  { id: "section-13", label: "Modifications and interruptions" },
  { id: "section-14", label: "Governing law" },
  { id: "section-15", label: "Dispute resolution" },
  { id: "section-16", label: "Corrections" },
  { id: "section-17", label: "Disclaimer" },
  { id: "section-18", label: "Limitations of liability" },
  { id: "section-19", label: "Indemnification" },
  { id: "section-20", label: "User data" },
  { id: "section-21", label: "Electronic communications, transactions, and signatures" },
  { id: "section-22", label: "California users and residents" },
  { id: "section-23", label: "Miscellaneous" },
  { id: "section-24", label: "Contact us" },
] as const

/** Full Terms of Use (January 2024 template) with navigable TOC. */
export function TermsOfUseContent() {
  return (
    <>
      <h2 id="table-of-contents" className="scroll-mt-28">
        TABLE OF CONTENTS
      </h2>
      <nav aria-label="Terms of use sections" className="not-prose my-6">
        <ol className="list-decimal space-y-1 pl-6 text-sm text-m2m-deep/90 sm:text-base sm:columns-2 sm:gap-x-8 [&>li]:break-inside-avoid [&>li]:pb-1.5 [&>li]:pl-1">
          {TOC.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="text-m2m-deep no-underline underline-offset-4 decoration-m2m-gold/55 hover:text-m2m-deep hover:underline">
                {label.toUpperCase()}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <TermsOfUsePart1 />
      <TermsOfUsePart2 />
    </>
  )
}
