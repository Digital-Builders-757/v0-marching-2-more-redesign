"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { M2mContainer, M2mSection } from "@/components/m2m-layout"
import { type M2mPublicTeamMember, M2M_TEAM_MEMBERS_PUBLIC } from "@/components/team/team-members-data"
import { cn } from "@/lib/utils"

export function M2mTeamMemberCard({ member }: { member: M2mPublicTeamMember }) {
  const content = (
    <div className="flex flex-col gap-6 rounded-sm border border-m2m-deep/10 p-6 transition-all duration-300 hover:border-m2m-gold/30 hover:shadow-lg">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div
          className={cn(
            "relative isolate mx-auto aspect-[4/5] w-full max-w-[220px] shrink-0 overflow-hidden rounded-sm bg-m2m-deep/[0.02] ring-1 ring-m2m-deep/[0.08]",
            "sm:mx-0 sm:w-44 sm:max-w-none",
          )}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={cn(
              "object-cover",
              member.imageObjectPosition ?? "object-top",
              member.imageScaleClass,
            )}
            style={member.imageObjectStyle}
            sizes="(min-width: 640px) 176px, 220px"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center text-center sm:text-left">
          <h3 className="mb-1 text-xl text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
            {member.name}
          </h3>
          <p className="text-sm text-m2m-deep/75" style={{ fontFamily: "var(--font-nav)" }}>
            {member.subtitle}
          </p>

          {member.href ? (
            <div className="mt-4 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-m2m-muted transition-colors group-hover:text-m2m-deep">
              View Profile <ArrowRight className="h-3 w-3" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )

  if (member.href) {
    return (
      <Link
        href={member.href}
        className="group block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        {content}
      </Link>
    )
  }

  return <article className="rounded-sm">{content}</article>
}

export function TeamMembers() {
  return (
    <M2mSection variant="light" className="py-24" data-gsap-section>
      <M2mContainer>
        <h2 className="sr-only">Team members</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {M2M_TEAM_MEMBERS_PUBLIC.map((member, index) => (
            <div key={member.name} className="min-w-0" data-gsap="fade-up" data-gsap-delay={index * 0.15}>
              <M2mTeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </M2mContainer>
    </M2mSection>
  )
}
