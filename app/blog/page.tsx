import type { Metadata } from "next"

import { BlogHero } from "@/components/blog/blog-hero"
import { BlogList } from "@/components/blog/blog-list"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Blog | Hampton Roads Real Estate & Military Moves | Marching 2 More",
  description:
    "Practical articles on Virginia Beach and Hampton Roads real estate, PCS moves, VA loans, selling strategy, and buyer/seller education from Marching 2 More.",
  path: "/blog",
  openGraphTitle: "Marching 2 More Blog",
})

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
