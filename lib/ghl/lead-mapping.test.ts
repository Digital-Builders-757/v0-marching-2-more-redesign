import { describe, expect, it } from "vitest"

import type { GhlConfig } from "./config"
import { normalizedLeadToCustomFields } from "./lead-mapping"
import type { NormalizedLead } from "./types"

const mockCfg: GhlConfig = {
  apiKey: "",
  locationId: "",
  apiVersion: "2021-07-28",
  baseUrl: "https://example.com",
  fieldIds: {
    dob: "f-dob",
    address: "f-addr",
    urgency: "f-urg",
    leadType: "f-lt",
    utmSource: "f-us",
    utmMedium: "f-um",
    utmCampaign: "f-uc",
    utmContent: "f-uo",
  },
  pipelines: null,
  tags: { buyer: [], seller: [], pathTags: {} },
  dryRun: false,
}

describe("normalizedLeadToCustomFields", () => {
  it("includes urgency when set", () => {
    const lead: NormalizedLead = {
      leadType: "buyer",
      fullName: "A B",
      firstName: "A",
      lastName: "B",
      email: "a@b.co",
      urgency: "Immediate (0-1 month)",
      utm: {},
    }
    const cf = normalizedLeadToCustomFields(lead, mockCfg)
    const u = cf.find((x) => x.id === "f-urg")
    expect(u?.value).toBe("Immediate (0-1 month)")
  })
})
