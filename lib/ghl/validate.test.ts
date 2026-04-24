import { describe, expect, it } from "vitest"

import { parseSubmitLeadBody } from "./validate"

describe("parseSubmitLeadBody", () => {
  it("rejects future DOB", () => {
    const future = new Date()
    future.setUTCFullYear(future.getUTCFullYear() + 1)
    const y = future.getUTCFullYear()
    const m = String(future.getUTCMonth() + 1).padStart(2, "0")
    const d = String(future.getUTCDate()).padStart(2, "0")
    const r = parseSubmitLeadBody({
      lead_type: "buyer",
      name: "Test User",
      email: "a@b.co",
      date_of_birth: `${y}-${m}-${d}`,
    })
    expect(r.ok).toBe(false)
    if (!r.ok) expect(r.code).toBe("validation_error")
  })

  it("accepts valid historical DOB", () => {
    const r = parseSubmitLeadBody({
      lead_type: "buyer",
      name: "Test User",
      email: "a@b.co",
      date_of_birth: "1988-06-15",
    })
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.data.dateOfBirth).toBe("1988-06-15")
  })

  it("passes urgency_explicit through", () => {
    const r = parseSubmitLeadBody({
      lead_type: "seller",
      name: "Test User",
      email: "a@b.co",
      urgency: "Not sure yet",
      urgency_explicit: false,
    })
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.data.urgencyExplicit).toBe(false)
  })
})
