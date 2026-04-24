import { describe, expect, it } from "vitest"

import { classifyGhlUserFacingError } from "./crm-user-message"

describe("classifyGhlUserFacingError", () => {
  it("maps network failure (status 0) to crm_unreachable", () => {
    const r = classifyGhlUserFacingError({
      httpStatus: 0,
      upstreamMessage: "Network request failed",
    })
    expect(r.code).toBe("crm_unreachable")
    expect(r.userError.toLowerCase()).toContain("reach")
  })

  it("detects duplicate phone hints", () => {
    const r = classifyGhlUserFacingError({
      httpStatus: 400,
      upstreamMessage: "Duplicate phone already assigned",
    })
    expect(r.code).toBe("crm_duplicate_or_merge")
    expect(r.logDuplicateHint).toBe("phone")
  })

  it("tiered validation for email field hints", () => {
    const r = classifyGhlUserFacingError({
      httpStatus: 400,
      upstreamMessage: "Invalid email format",
    })
    expect(r.code).toBe("crm_validation")
    expect(r.logValidationHint).toBe("email_field")
    expect(r.userError.toLowerCase()).toContain("email")
  })
})
