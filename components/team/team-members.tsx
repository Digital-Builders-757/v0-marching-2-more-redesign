"use client"

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
}

const teamMembers: TeamMember[] = [
  {
    name: "Donavan McFadden",
    subtitle: "Founding Partner • Licensed Agent",
    image: M2M_MEDIA.headshotDonavan,
    href: "/profile-page",
    imageObjectPosition: "object-[center_26%]",
  },
  {
    name: "Roger Lee",
    subtitle: "Founding Partner • Licensed Agent",
    image: M2M_MEDIA.headshotRoger,
    href: "/roger-lee",
    imageObjectPosition: "object-[center_24%]",
  },
  {
    name: "Kristin Allen",
    subtitle: "Licensed Agent",
    image: M2M_MEDIA.headshotKristin,
    href: "/kristin-s-profile",
    imageObjectPosition: "object-[center_28%]",
  },
  {
    name: "Jalessa Hendricks",
    subtitle: "Licensed Agent",
    image: M2M_MEDIA.teamPhotoWide,
    imageObjectPosition: "object-[center_40%]",
  },
]

function MemberCard({ member }: { member: TeamMember }) {
  const content = (
    <div className="flex flex-col gap-6 border border-m2m-deep/10 p-6 transition-all duration-300 hover:border-m2m-gold/30 hover:shadow-lg">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch">
        <div
          className={cn(
            "relative mx-auto aspect-[3/4] w-full max-w-[220px] shrink-0 overflow-hidden",
            "sm:mx-0 sm:aspect-auto sm:h-40 sm:w-40 sm:max-w-none",
          )}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={cn("object-cover", member.imageObjectPosition)}
            sizes="(min-width: 640px) 160px, 220px"
          />
        </div>

        <div className="flex flex-col justify-center">
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
      <Link href={member.href} className="group block">
        {content}
      </Link>
    )
  }

  return <div className="group">{content}</div>
}

export function TeamMembers() {
  return (
    <M2mSection variant="light" className="py-24" data-gsap-section>
      <M2mContainer>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={member.name} data-gsap="fade-up" data-gsap-delay={index * 0.15}>
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </M2mContainer>
    </M2mSection>
  )
}
