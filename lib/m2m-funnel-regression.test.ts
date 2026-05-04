import fs from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"

import { M2M_FUNNEL_REGRESSION_PATHS, M2M_FUNNEL_PAGE_TESTIDS } from "./m2m-funnel-regression"

describe("m2m-funnel-regression", () => {
  it("every funnel path resolves to app/page.tsx", () => {
    for (const route of M2M_FUNNEL_REGRESSION_PATHS) {
      const segment = route.replace(/^\//, "")
      const pageFile = path.join(process.cwd(), "app", segment, "page.tsx")
      expect(fs.existsSync(pageFile), `Missing ${pageFile} for ${route}`).toBe(true)
    }
  })

  it("page test ids are unique", () => {
    const ids = Object.values(M2M_FUNNEL_PAGE_TESTIDS)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
