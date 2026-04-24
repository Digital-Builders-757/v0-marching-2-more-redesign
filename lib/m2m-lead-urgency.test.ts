import { describe, expect, it } from "vitest"

import { M2M_URGENCY_SHORT_FORM_DEFAULT, urgencyLogBucket } from "./m2m-lead-urgency"

describe("urgencyLogBucket", () => {
  it("marks default passive when not explicit", () => {
    expect(urgencyLogBucket(M2M_URGENCY_SHORT_FORM_DEFAULT, false)).toBe("passive_default")
  })

  it("marks passive explicit for Just exploring", () => {
    expect(urgencyLogBucket("Just exploring", true)).toBe("passive_explicit")
  })

  it("classifies timeline strings", () => {
    expect(urgencyLogBucket("Immediate (0-1 month)", true)).toBe("timeline")
  })
})
