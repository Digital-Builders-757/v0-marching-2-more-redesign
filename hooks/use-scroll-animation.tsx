"use client"

import { useEffect, useRef, useState, useCallback } from "react"

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "zoom-in" 
  | "zoom-out"
  | "reveal-up"
  | "reveal-left"
  | "reveal-right"
  | "blur-in"
  | "slide-up"
  | "scale-up"
  | "rotate-in"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options?: UseScrollAnimationOptions) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } =
    options ?? {}
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

// Parallax hook for background elements
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const elementTop = rect.top + scrolled
      const relativeScroll = scrolled - elementTop + window.innerHeight
      setOffset(relativeScroll * speed)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return { ref, offset }
}

// Animation component wrapper
interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  stagger?: number
  index?: number
}

export function ScrollAnimation({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  className = "",
  threshold = 0.1,
  stagger = 0,
  index = 0,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })
  
  const totalDelay = delay + (stagger * index)

  const baseStyles: React.CSSProperties = {
    transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${totalDelay}s`,
  }

  const animationStyles: Record<AnimationType, { initial: React.CSSProperties; visible: React.CSSProperties }> = {
    "fade-up": {
      initial: { opacity: 0, transform: "translateY(60px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-down": {
      initial: { opacity: 0, transform: "translateY(-60px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-left": {
      initial: { opacity: 0, transform: "translateX(60px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "fade-right": {
      initial: { opacity: 0, transform: "translateX(-60px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "zoom-in": {
      initial: { opacity: 0, transform: "scale(0.9)" },
      visible: { opacity: 1, transform: "scale(1)" },
    },
    "zoom-out": {
      initial: { opacity: 0, transform: "scale(1.1)" },
      visible: { opacity: 1, transform: "scale(1)" },
    },
    "reveal-up": {
      initial: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
      visible: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
    },
    "reveal-left": {
      initial: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
      visible: { opacity: 1, clipPath: "inset(0 0 0 0)" },
    },
    "reveal-right": {
      initial: { opacity: 0, clipPath: "inset(0 0 0 100%)" },
      visible: { opacity: 1, clipPath: "inset(0 0 0 0)" },
    },
    "blur-in": {
      initial: { opacity: 0, filter: "blur(10px)", transform: "translateY(20px)" },
      visible: { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
    },
    "slide-up": {
      initial: { opacity: 0, transform: "translateY(100%)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "scale-up": {
      initial: { opacity: 0, transform: "scale(0.8) translateY(40px)" },
      visible: { opacity: 1, transform: "scale(1) translateY(0)" },
    },
    "rotate-in": {
      initial: { opacity: 0, transform: "rotate(-5deg) translateY(40px)" },
      visible: { opacity: 1, transform: "rotate(0deg) translateY(0)" },
    },
  }

  const currentAnimation = animationStyles[animation]
  const styles: React.CSSProperties = {
    ...baseStyles,
    ...(isVisible ? currentAnimation.visible : currentAnimation.initial),
  }

  return (
    <div ref={ref} style={styles} className={className}>
      {children}
    </div>
  )
}

// Staggered children animation wrapper
interface StaggeredAnimationProps {
  children: React.ReactNode[]
  animation?: AnimationType
  staggerDelay?: number
  baseDelay?: number
  duration?: number
  className?: string
  childClassName?: string
}

export function StaggeredAnimation({
  children,
  animation = "fade-up",
  staggerDelay = 0.1,
  baseDelay = 0,
  duration = 0.8,
  className = "",
  childClassName = "",
}: StaggeredAnimationProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation
          key={index}
          animation={animation}
          delay={baseDelay}
          stagger={staggerDelay}
          index={index}
          duration={duration}
          className={childClassName}
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}

// Parallax wrapper component
interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.3, className = "" }: ParallaxProps) {
  const { ref, offset } = useParallax(speed)

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  )
}

// Text reveal animation for headlines
interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export function TextReveal({ text, className = "", delay = 0, stagger = 0.1 }: TextRevealProps) {
  const { ref, isVisible } = useScrollAnimation()
  const words = text.split(" ")

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden mr-[0.25em]"
        >
          <span
            className="inline-block"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              opacity: isVisible ? 1 : 0,
              transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay + index * stagger}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  )
}

// Line reveal for decorative elements
interface LineRevealProps {
  direction?: "horizontal" | "vertical"
  className?: string
  delay?: number
}

export function LineReveal({ direction = "horizontal", className = "", delay = 0 }: LineRevealProps) {
  const { ref, isVisible } = useScrollAnimation()

  const styles: React.CSSProperties = direction === "horizontal"
    ? {
        transform: isVisible ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: `transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
      }
    : {
        transform: isVisible ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
        transition: `transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
      }

  return <div ref={ref} className={className} style={styles} />
}

// Counter animation for statistics
interface CounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function Counter({ end, duration = 2, prefix = "", suffix = "", className = "" }: CounterProps) {
  const { ref, isVisible } = useScrollAnimation()
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!isVisible) return

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount
        setCount(currentCount)
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
