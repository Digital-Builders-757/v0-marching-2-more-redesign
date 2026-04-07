import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogList } from "@/components/blog/blog-list"
import { GSAPAnimations } from "@/components/gsap-animations"

export const metadata: Metadata = {
  title: "Blog | Marching 2 More Real Estate",
  description: "Expert insights on Hampton Roads real estate, military relocation tips, VA loans, and home buying and selling strategies.",
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1}>
        <BlogHero />
        <BlogList />
      </main>
      <Footer />
    </>
  )
}
