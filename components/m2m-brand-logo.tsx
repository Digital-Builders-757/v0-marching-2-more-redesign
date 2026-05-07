import Image from "next/image"

import { M2M_BRAND_LOGO_ALT, M2M_BRAND_LOGO_SRC } from "@/lib/m2m-site"
import { cn } from "@/lib/utils"

export type M2mBrandLogoVariant = "header" | "footer" | "inline" | "carouselSm" | "carouselLg"

const variantClass: Record<M2mBrandLogoVariant, string> = {
  header: "h-12 w-auto",
  footer: "h-10 w-auto",
  inline: "h-9 w-auto",
  carouselSm: "h-9 w-auto",
  carouselLg: "h-16 w-auto sm:h-[4.25rem]",
}

const variantSize: Record<M2mBrandLogoVariant, { width: number; height: number }> = {
  header: { width: 200, height: 58 },
  footer: { width: 160, height: 46 },
  inline: { width: 160, height: 46 },
  carouselSm: { width: 140, height: 40 },
  carouselLg: { width: 180, height: 52 },
}

export type M2mBrandLogoProps = {
  variant?: M2mBrandLogoVariant
  className?: string
  priority?: boolean
  alt?: string
}

/**
 * Shared Marching 2 More wordmark — single `src` from {@link M2M_BRAND_LOGO_SRC}.
 * Uses height + `w-auto` so aspect ratio is never stretched.
 */
export function M2mBrandLogo({
  variant = "header",
  className,
  priority = false,
  alt = M2M_BRAND_LOGO_ALT,
}: M2mBrandLogoProps) {
  const { width, height } = variantSize[variant]
  return (
    <Image
      src={M2M_BRAND_LOGO_SRC}
      alt={alt}
      width={width}
      height={height}
      className={cn(variantClass[variant], "object-contain", className)}
      priority={priority}
    />
  )
}
