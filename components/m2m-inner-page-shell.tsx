import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"

export function M2mInnerPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="bg-m2m-cream min-h-[50vh]">
        {children}
      </main>
      <Footer />
    </>
  )
}
