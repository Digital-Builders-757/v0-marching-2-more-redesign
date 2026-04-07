import { NextResponse } from "next/server"
import {
  PRE_LISTING_CHECKLIST_BLURB,
  PRE_LISTING_CHECKLIST_ITEMS,
} from "@/lib/pre-listing-checklist-content"

export async function GET() {
  const lines = [
    "Marching 2 More — Pre-Listing Checklist",
    "",
    PRE_LISTING_CHECKLIST_BLURB,
    "",
    ...PRE_LISTING_CHECKLIST_ITEMS.map((item, i) => `${i + 1}. ${item}`),
    "",
    "https://www.marching2more.com/",
  ]

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="marching2more-pre-listing-checklist.txt"',
    },
  })
}
