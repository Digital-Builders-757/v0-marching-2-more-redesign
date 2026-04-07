"use client"

import { useEffect, useRef, RefObject } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Smooth scroll to anchor links
export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash && target.hash.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: element, offsetY: 80 },
            ease: "power3.inOut",
          })
        }
      }
    }
    
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleClick as EventListener)
    })
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleClick as EventListener)
      })
    }
  }, [])
}

// Parallax effect for backgrounds
export function useParallax(ref: RefObject<HTMLElement | null>, speed: number = 0.5) {
  useEffect(() => {
    if (!ref.current) return
    
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 30,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })
    
    return () => ctx.revert()
  }, [ref, speed])
}

// Text split reveal animation
export function useTextReveal(ref: RefObject<HTMLElement | null>, delay: number = 0) {
  useEffect(() => {
    if (!ref.current) return
    
    const ctx = gsap.context(() => {
      const lines = ref.current?.querySelectorAll(".split-line")
      
      if (lines && lines.length > 0) {
        gsap.fromTo(
          lines,
          { 
            y: "100%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            delay,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    })
    
    return () => ctx.revert()
  }, [ref, delay])
}

// Fade in animation with direction
export function useFadeIn(
  ref: RefObject<HTMLElement | null>,
  direction: "up" | "down" | "left" | "right" = "up",
  delay: number = 0,
  duration: number = 1
) {
  useEffect(() => {
    if (!ref.current) return
    
    const directions = {
      up: { y: 60, x: 0 },
      down: { y: -60, x: 0 },
      left: { y: 0, x: 60 },
      right: { y: 0, x: -60 },
    }
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y: directions[direction].y,
          x: directions[direction].x,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
    
    return () => ctx.revert()
  }, [ref, direction, delay, duration])
}

// Scale animation
export function useScaleIn(
  ref: RefObject<HTMLElement | null>,
  delay: number = 0,
  duration: number = 1
) {
  useEffect(() => {
    if (!ref.current) return
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
    
    return () => ctx.revert()
  }, [ref, delay, duration])
}

// Stagger children animation
export function useStaggerChildren(
  ref: RefObject<HTMLElement | null>,
  childSelector: string,
  direction: "up" | "down" | "left" | "right" = "up",
  stagger: number = 0.1
) {
  useEffect(() => {
    if (!ref.current) return
    
    const directions = {
      up: { y: 50, x: 0 },
      down: { y: -50, x: 0 },
      left: { y: 0, x: 50 },
      right: { y: 0, x: -50 },
    }
    
    const ctx = gsap.context(() => {
      const children = ref.current?.querySelectorAll(childSelector)
      
      if (children && children.length > 0) {
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: directions[direction].y,
            x: directions[direction].x,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    })
    
    return () => ctx.revert()
  }, [ref, childSelector, direction, stagger])
}

// Line reveal animation (for decorative lines)
export function useLineReveal(
  ref: RefObject<HTMLElement | null>,
  direction: "horizontal" | "vertical" = "horizontal",
  delay: number = 0
) {
  useEffect(() => {
    if (!ref.current) return
    
    const ctx = gsap.context(() => {
      const prop = direction === "horizontal" ? "scaleX" : "scaleY"
      const origin = direction === "horizontal" ? "left center" : "center top"
      
      gsap.fromTo(
        ref.current,
        {
          [prop]: 0,
          transformOrigin: origin,
        },
        {
          [prop]: 1,
          duration: 1.2,
          delay,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
    
    return () => ctx.revert()
  }, [ref, direction, delay])
}

// Counter animation
export function useCounter(
  ref: RefObject<HTMLElement | null>,
  endValue: number,
  duration: number = 2,
  suffix: string = ""
) {
  useEffect(() => {
    if (!ref.current) return
    
    const ctx = gsap.context(() => {
      const obj = { value: 0 }
      
      gsap.to(obj, {
        value: endValue,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.round(obj.value).toString() + suffix
          }
        },
      })
    })
    
    return () => ctx.revert()
  }, [ref, endValue, duration, suffix])
}

// Magnetic hover effect
export function useMagnetic(ref: RefObject<HTMLElement | null>, strength: number = 0.5) {
  useEffect(() => {
    if (!ref.current) return
    
    const element = ref.current
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out",
      })
    }
    
    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      })
    }
    
    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [ref, strength])
}

// Image reveal with mask
export function useImageReveal(
  ref: RefObject<HTMLElement | null>,
  direction: "left" | "right" | "top" | "bottom" = "left"
) {
  useEffect(() => {
    if (!ref.current) return
    
    const ctx = gsap.context(() => {
      const clipPaths = {
        left: { from: "inset(0 100% 0 0)", to: "inset(0 0% 0 0)" },
        right: { from: "inset(0 0 0 100%)", to: "inset(0 0 0 0%)" },
        top: { from: "inset(0 0 100% 0)", to: "inset(0 0 0% 0)" },
        bottom: { from: "inset(100% 0 0 0)", to: "inset(0% 0 0 0)" },
      }
      
      gsap.fromTo(
        ref.current,
        {
          clipPath: clipPaths[direction].from,
        },
        {
          clipPath: clipPaths[direction].to,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
    
    return () => ctx.revert()
  }, [ref, direction])
}

// Horizontal scroll section
export function useHorizontalScroll(
  containerRef: RefObject<HTMLElement | null>,
  scrollerRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return
    
    const ctx = gsap.context(() => {
      const scrollWidth = scrollerRef.current!.scrollWidth - containerRef.current!.offsetWidth
      
      gsap.to(scrollerRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })
    })
    
    return () => ctx.revert()
  }, [containerRef, scrollerRef])
}

// Custom hook for GSAP timeline with ScrollTrigger
export function useScrollTimeline(
  ref: RefObject<HTMLElement | null>,
  callback: (tl: gsap.core.Timeline) => void,
  config?: ScrollTrigger.Vars
) {
  useEffect(() => {
    if (!ref.current) return
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          ...config,
        },
      })
      
      callback(tl)
    })
    
    return () => ctx.revert()
  }, [ref, callback, config])
}

// Refresh ScrollTrigger on route change
export function useScrollTriggerRefresh() {
  useEffect(() => {
    ScrollTrigger.refresh()
    
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
