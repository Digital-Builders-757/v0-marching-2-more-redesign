import type { CSSProperties } from "react"

import { M2M_MEDIA } from "@/lib/m2m-media"

export type M2mPublicTeamMember = {
  name: string
  subtitle: string
  image: string
  href?: string
  imageObjectPosition?: string
  imageScaleClass?: string
  imageObjectStyle?: Pick<CSSProperties, "objectPosition">
}

/** Shared roster for `/our-team` and campaign pages (e.g. `/facing-foreclosure`). */
export const M2M_TEAM_MEMBERS_PUBLIC: M2mPublicTeamMember[] = [
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
    image: M2M_MEDIA.headshotJalessa,
    href: "/jalessa-hendricks",
    imageObjectPosition: "object-[center_28%]",
  },
]
