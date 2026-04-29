import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Free Comparative Market Analysis (CMA)",
  description:
    "Request a comprehensive market analysis for your Hampton Roads home — Marching 2 More uses local comps and condition to price strategically before you list.",
  alternates: { canonical: "/cma-form" },
  openGraph: {
    title: "CMA Request | Marching 2 More",
    description:
      "Seller CMA form for Virginia Beach, Norfolk, Chesapeake, and surrounding Hampton Roads.",
  },
}

export default function CmaFormLayout({ children }: { children: ReactNode }) {
  return children
}
