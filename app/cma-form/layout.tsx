import type { Metadata } from "next"
import type { ReactNode } from "react"

import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Request a Free CMA | Hampton Roads | Marching 2 More",
  description:
    "Request a seller comparative market analysis for your Hampton Roads home — local comps, condition, and listing strategy from Marching 2 More.",
  path: "/cma-form",
  openGraphTitle: "Free CMA Request | Marching 2 More",
})

export default function CmaFormLayout({ children }: { children: ReactNode }) {
  return children
}
