import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { M2mTeamMemberCard } from "@/components/team/team-members"
import { M2M_TEAM_MEMBERS_PUBLIC } from "@/components/team/team-members-data"

import { FINAL_CTA_BODY, FINAL_CTA_BUTTON, FINAL_CTA_TITLE, SIGNUP_SECTION_ID, TEAM_SECTION } from "./content"

export function PreForeclosureTeam() {
  return (
    <section className="border-t border-m2m-gold/12 bg-m2m-cream py-16 sm:py-20 lg:py-24" aria-labelledby="pre-foreclosure-team-heading">
      <M2mContainer>
        <p
          className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {TEAM_SECTION.eyebrow}
        </p>
        <h2
          id="pre-foreclosure-team-heading"
          className="max-w-3xl text-balance text-3xl font-light text-m2m-deep sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {TEAM_SECTION.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-m2m-deep/82 font-sans">{TEAM_SECTION.lead}</p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {M2M_TEAM_MEMBERS_PUBLIC.map((member) => (
            <M2mTeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </M2mContainer>
    </section>
  )
}

export function PreForeclosureFinalCta() {
  return (
    <section
      className="scroll-mt-24 border-t border-m2m-gold/15 bg-m2m-panel py-16 sm:py-20"
      aria-labelledby="pre-foreclosure-final-cta-heading"
    >
      <M2mContainer className="max-w-2xl text-center">
        <h2
          id="pre-foreclosure-final-cta-heading"
          className="text-2xl font-light text-m2m-cream sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {FINAL_CTA_TITLE}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-m2m-cream/86 font-sans">{FINAL_CTA_BODY}</p>
        <div className="mt-8">
          <Link
            href={`#${SIGNUP_SECTION_ID}`}
            className="inline-flex min-h-12 items-center justify-center bg-m2m-gold px-10 py-3.5 text-sm font-semibold text-m2m-deep transition hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
            data-m2m-track="facing_foreclosure_final_form"
          >
            {FINAL_CTA_BUTTON}
          </Link>
        </div>
      </M2mContainer>
    </section>
  )
}
