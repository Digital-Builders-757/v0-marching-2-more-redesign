import type { Metadata } from "next"

import { BlogHero } from "@/components/blog/blog-hero"
import { BlogList } from "@/components/blog/blog-list"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { M2mRelatedPages } from "@/components/m2m-related-pages"

export const metadata: Metadata = {
  title: "Blog — Hampton Roads Real Estate & Military Moves",
  description:
    "Practical articles on Virginia Beach and Hampton Roads real estate, PCS moves, VA loans, selling strategy, coastal homes, and buyer/seller education from Marching 2 More.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Marching 2 More Blog",
    description:
      "Local market context and military-friendly homebuying guidance from a veteran-owned Virginia Beach team.",
  },
}

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="bg-white">
        <BlogHero />
        <BlogList />
        <M2mRelatedPages cluster="learn" omitHref="/blog" variant="onLight" />
      </main>
      <Footer />
    </>
  )
}
