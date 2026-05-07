"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/** Avoid stamping `from` inline styles before ScrollTrigger runs — prevents React hydration mismatches vs GSAP-mutated DOM. */
const immediateRenderFalse = { immediateRender: false } as const

export function GSAPAnimations() {
  useEffect(() => {
    let cancelled = false
    let ctx: gsap.Context | null = null
    let raf2Id: number | undefined

    const raf1Id = requestAnimationFrame(() => {
      raf2Id = requestAnimationFrame(() => {
        if (cancelled) return

        ctx = gsap.context(() => {
          // Fade up animations
          gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 60 },
              {
                ...immediateRenderFalse,
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Fade down animations
          gsap.utils.toArray<HTMLElement>("[data-gsap='fade-down']").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: -60 },
              {
                ...immediateRenderFalse,
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Fade left animations
          gsap.utils.toArray<HTMLElement>("[data-gsap='fade-left']").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, x: 80 },
              {
                ...immediateRenderFalse,
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Fade right animations
          gsap.utils.toArray<HTMLElement>("[data-gsap='fade-right']").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, x: -80 },
              {
                ...immediateRenderFalse,
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Scale in animations
          gsap.utils.toArray<HTMLElement>("[data-gsap='scale-in']").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, scale: 0.8 },
              {
                ...immediateRenderFalse,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Blur in animations
          gsap.utils.toArray<HTMLElement>("[data-gsap='blur-in']").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, filter: "blur(10px)" },
              {
                ...immediateRenderFalse,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Line reveal horizontal
          gsap.utils.toArray<HTMLElement>("[data-gsap='line-reveal']").forEach((el) => {
            gsap.fromTo(
              el,
              { scaleX: 0, transformOrigin: "left center" },
              {
                ...immediateRenderFalse,
                scaleX: 1,
                duration: 1.2,
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Stagger children animations
          gsap.utils.toArray<HTMLElement>("[data-gsap='stagger-children']").forEach((container) => {
            const children = container.querySelectorAll("[data-gsap-child]")
            const direction = container.dataset.gsapDirection || "up"

            const fromVars: gsap.TweenVars = { opacity: 0 }
            if (direction === "up") fromVars.y = 50
            else if (direction === "down") fromVars.y = -50
            else if (direction === "left") fromVars.x = 50
            else if (direction === "right") fromVars.x = -50

            gsap.fromTo(
              children,
              fromVars,
              {
                ...immediateRenderFalse,
                opacity: 1,
                y: 0,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                  trigger: container,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Text reveal (split lines)
          gsap.utils.toArray<HTMLElement>("[data-gsap='text-reveal']").forEach((el) => {
            const lines = el.querySelectorAll(".split-line")

            gsap.fromTo(
              lines,
              { y: "100%", opacity: 0 },
              {
                ...immediateRenderFalse,
                y: "0%",
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Parallax backgrounds
          gsap.utils.toArray<HTMLElement>("[data-gsap='parallax']").forEach((el) => {
            const speed = parseFloat(el.dataset.gsapSpeed || "0.5")

            gsap.to(el, {
              yPercent: speed * 30,
              ease: "none",
              immediateRender: false,
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            })
          })

          // Counter animation
          gsap.utils.toArray<HTMLElement>("[data-gsap='counter']").forEach((el) => {
            const endValue = parseInt(el.dataset.gsapEnd || "0", 10)
            const suffix = el.dataset.gsapSuffix || ""
            const obj = { value: 0 }

            gsap.to(obj, {
              value: endValue,
              duration: 2,
              ease: "power2.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reset",
              },
              onUpdate: () => {
                el.textContent = Math.round(obj.value).toString() + suffix
              },
            })
          })

          // Image reveal with clip-path
          gsap.utils.toArray<HTMLElement>("[data-gsap='image-reveal']").forEach((el) => {
            const direction = el.dataset.gsapDirection || "left"

            const clipPaths: Record<string, { from: string; to: string }> = {
              left: { from: "inset(0 100% 0 0)", to: "inset(0 0% 0 0)" },
              right: { from: "inset(0 0 0 100%)", to: "inset(0 0 0 0%)" },
              top: { from: "inset(0 0 100% 0)", to: "inset(0 0 0% 0)" },
              bottom: { from: "inset(100% 0 0 0)", to: "inset(0% 0 0 0)" },
            }

            gsap.fromTo(
              el,
              { clipPath: clipPaths[direction].from },
              {
                ...immediateRenderFalse,
                clipPath: clipPaths[direction].to,
                duration: 1.2,
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Rotate in animations
          gsap.utils.toArray<HTMLElement>("[data-gsap='rotate-in']").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, rotation: -10, y: 30 },
              {
                ...immediateRenderFalse,
                opacity: 1,
                rotation: 0,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Zoom out reveal
          gsap.utils.toArray<HTMLElement>("[data-gsap='zoom-out']").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, scale: 1.2 },
              {
                ...immediateRenderFalse,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          // Scrub animations (tied to scroll progress)
          gsap.utils.toArray<HTMLElement>("[data-gsap='scrub']").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0.3, y: 50 },
              {
                ...immediateRenderFalse,
                opacity: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  end: "top 30%",
                  scrub: 1,
                },
              },
            )
          })

          // Split text character animations
          gsap.utils.toArray<HTMLElement>("[data-gsap='char-reveal']").forEach((el) => {
            const text = el.textContent || ""
            el.textContent = ""

            text.split("").forEach((char) => {
              const span = document.createElement("span")
              span.textContent = char === " " ? "\u00A0" : char
              span.style.display = "inline-block"
              span.style.opacity = "0"
              span.style.transform = "translateY(50px)"
              el.appendChild(span)
            })

            gsap.to(el.children, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.02,
              immediateRender: false,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            })
          })

          // Magnetic hover effect on buttons
          gsap.utils.toArray<HTMLElement>("[data-gsap='magnetic']").forEach((el) => {
            const handleMouseMove = (e: MouseEvent) => {
              const rect = el.getBoundingClientRect()
              const x = e.clientX - rect.left - rect.width / 2
              const y = e.clientY - rect.top - rect.height / 2

              gsap.to(el, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out",
              })
            }

            const handleMouseLeave = () => {
              gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)",
              })
            }

            el.addEventListener("mousemove", handleMouseMove)
            el.addEventListener("mouseleave", handleMouseLeave)
          })

          ScrollTrigger.refresh()
        })
      })
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(raf1Id)
      if (raf2Id !== undefined) cancelAnimationFrame(raf2Id)
      ctx?.revert()
    }
  }, [])

  return null
}
