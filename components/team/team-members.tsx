"use client"

import type { CSSProperties } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { M2mContainer, M2mSection } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"
import { cn } from "@/lib/utils"

type TeamMember = {
  name: string
  subtitle: string
  image: string
  href?: string
  imageObjectPosition?: string
  /** Slight zoom helps isolate one person when `image` is the wide team shot */
  imageScaleClass?: string
  imageObjectStyle?: Pick<CSSProperties, "objectPosition">
}

const teamMembers: TeamMember[] = [
  {
    name: "Donavan McFadden",
    subtitle: "Founding Partner • Licensed Agent",
    image: M2M_MEDIA.headshotDonavan,
    href: "/profile-page",
    imageObjectPosition: "object-[center_32%]",
  },
  {
    name: "Roger Lee",
    subtitle: "Founding Partner • Licensed Agent",
    image: M2M_MEDIA.headshotRoger,
    href: "/roger-lee",
    imageObjectPosition: "object-[center_30%]",
  },
  {
    name: "Kristin Allen",
    subtitle: "Licensed Agent",
    image: M2M_MEDIA.headshotKristin,
    href: "/kristin-s-profile",
    imageObjectPosition: "object-[center_32%]",
  },
  {
    name: "Jalessa Hendricks",
    subtitle: "Licensed Agent",
    // Same asset as hero — portrait cards need a tighter crop from the wide plate (tune objectPosition if lineup changes)
    image: M2M_MEDIA.teamPhotoWide,
    imageScaleClass: "origin-[82%_26%] scale-[1.16]",
    imageObjectStyle: { objectPosition: "82% 26%" },
  },
]

function MemberCard({ member }: { member: TeamMember }) {
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
            className={cn("object-cover", member.imageObjectPosition, member.imageScaleClass)}
            style={member.imageObjectStyle}
            sizes="(min-width: 640px) 176px, 220px"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center text-center sm:text-left">
          <h3 className="mb-1 text-xl text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
            {member.name}
          </h3>
          <p className="text-sm text-m2m-gold" style={{ fontFamily: "var(--font-nav)" }}>
            {member.subtitle}
          </p>

          {member.href ? (
            <div className="mt-4 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-m2m-muted transition-colors group-hover:text-m2m-gold">
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
          {teamMembers.map((member, index) => (
            <div key={member.name} className="min-w-0" data-gsap="fade-up" data-gsap-delay={index * 0.15}>
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </M2mContainer>
    </M2mSection>
  )
}
