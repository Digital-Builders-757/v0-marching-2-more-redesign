/** Copy and plan definitions for `/plans-and-pricing`. */

export const PAGE_INTRO = {
  eyebrow: "Membership",
  title: "Plans & pricing",
  description:
    "Choose the level of support that fits your goals. Every plan includes core classes and sessions; higher tiers add flexibility, perks, and priority help.",
} as const

export type PricingPlan = {
  id: string
  name: string
  price: string
  periodNote: string
  highlight?: "best-value"
  features: readonly string[]
}

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    id: "beginner",
    name: "Beginner",
    price: "$15",
    periodNote: "introductory offering",
    features: [
      "Introductory course content",
      "Valid for 3 months",
      "6 classes",
      "3 individual sessions",
      "Online resources",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$10",
    periodNote: "Recommended for most members",
    highlight: "best-value",
    features: [
      "Valid for 12 months",
      "6 classes",
      "3 individual sessions",
      "Online resources",
      "1 guest pass",
      "Free WiFi",
      "Weekly newsletter",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    price: "$30",
    periodNote: "full access",
    features: [
      "Unlimited access to professional content",
      "6 classes",
      "3 individual sessions",
      "Online resources",
      "1 guest pass",
      "Free WiFi",
      "Weekly newsletter",
      "Priority support",
    ],
  },
] as const

export const CTA_LABEL = "Select" as const
