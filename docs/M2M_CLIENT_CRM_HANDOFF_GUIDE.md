# Marching 2 More — website and CRM (GoHighLevel) for the team

**Last updated:** April 24, 2026  
**Audience:** The M2M client team, ISAs, and anyone who works leads in GHO but does not need code detail.

**Technical deep-dive (same topic):** [M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md](./M2M_WEBSITE_TO_GHL_SYSTEM_GUIDE.md)

---

## What the website is doing

The public site (Marching2More.com) is the **first touch**: short forms, clear calls to action, and optional information like when someone wants to move or a property address. When a visitor hits “Submit,” the site sends a **secure server request** to the team’s GoHighLevel account. **No CRM password ever goes to the visitor’s browser.**

## What GoHighLevel is doing

**GoHighLevel (GHO) is the operational brain:** the contact record, follow-up, pipelines, text/email automation (once configured in GHO), and reporting. If it lives in a CRM list, pipeline, tag, or note in GHO, that is the **day-to-day source of truth** for “what happened to this lead.”

---

## How lead type works (buyer vs seller)

- The website marks each lead as a **buyer** or a **seller** (some pages are fixed, for example the home search path is a buyer; a CMA or valuation path is a seller; **Contact Us** can be either, depending on what the visitor selects).
- In GHO you should see:
  - **Tag:** *M2M - Buyer* or *M2M - Seller* (as configured in the account).
  - **Pipeline / opportunity (when set up end-to-end):** *M2M Buyer Pipeline* or *M2M Seller Pipeline*, usually starting in **New Inquiry**.

---

## What pages map to which kind of lead (simple view)

| Page / area | Main lead type | What people are usually doing |
|-------------|---------------|--------------------------------|
| **Buy a home** (`/buy`) | Buyer | Getting help with search / representation |
| **Home search** (`/home-search`) | Buyer | Same |
| **Free home valuation** (`/free-home-valuation`) | Seller | Wants a value / conversation |
| **Sell** (`/sell`) | Seller | Listing / selling track |
| **CMA** (`/cma-form`) | Seller | Detailed comp / pricing request |
| **Contact us** (`/contact-us`) | Buyer *or* seller (they choose) | General questions |
| **Downsizing** | Seller | Guide + follow-up, depending on which form they use on the page |
| **Facing foreclosure** | Seller | Distress / options |
| **Improve your credit** | Buyer (credit to buy) | Playbook / education lead |
| **VA loan** / **FHA loan** | Buyer | Program-specific interest |
| **Navigating divorce** (real estate) | Seller (context-specific) | Often tied to a guide or message |
| **Resources** (checklist) | Buyer | Checklist / resource request |

*Exact fields (birthday, address, long message) depend on the form — see the technical matrix if you need a checklist during QA: [M2M_LEAD_CAPTURE_MATRIX.md](./M2M_LEAD_CAPTURE_MATRIX.md).*

---

## What you should see on the back end (happy path)

For a **normal** successful submit (everything configured):

1. **A contact** for that person in the M2M GHO location.
2. **Custom fields** where the form provided them, including **Urgency** (as a **text** field the site is configured to use), **Property address** if they typed one, **date of birth** on forms that ask for it, and **lead type** (Buyer / Seller) when the integration writes it.
3. **The right tag(s)** (buyer or seller, plus any extra tags the account is set to add for certain pages).
4. **A note** when the visitor left a message or the form had long context (for example a CMA or “before you call” box).
5. **An opportunity** on the correct pipeline, **New Inquiry** stage, when the account and website settings are both fully connected (if something is not configured, the **contact** can still be created; your tech lead checks pipeline settings).

---

## How to know the lead “saved” correctly

1. **Find the person** in **Contacts** (search email is easiest).
2. **Open the full custom fields** — not only the first screen. The values may be there even if you did not see them on the main card.
3. **Urgency and birthday:** The website has been **tested to save** these. If you do not see them at first, ask an admin to add those fields to the **default contact view** in GHO. A hidden field in the database is not the same as a field you have chosen to show on the layout — **saving the data and showing it in your layout are two different GHO admin steps.**
4. **Tags** — confirm buyer or seller and any other expected tags.
5. **Notes** — read the note tab if the form included a message.
6. **Opportunity** — look at the **M2M Buyer** or **M2M Seller** pipeline board for *New Inquiry* if your location uses opportunities for web leads.

If the visitor saw a “thank you” (or a small “Heads up” with a reference id), but something is **missing in GHO**, your technical contact can search logs using that **reference id** — not something you have to do every day, but it **does** make support faster.

**Heads up messages:** Sometimes the lead **still saved**, but a **tag**, **note**, or **opportunity** step had a hiccup. GHO is still the place to see what actually landed; the id helps support reconcile it.

---

## Common misunderstandings to avoid

- **“I don’t see Urgency on the contact, so the website is broken.”**  
  Check that you are looking at the **text** Urgency field the integration uses, and that your **contact layout** shows that field. The site writes to a specific field; GHO can also have other fields with similar names.
- **“The dropdown for Urgency is empty even though the lead came in.”**  
  The website may be filling a **text** Urgency field, not a **dropdown** field. Use the one your integration is mapped to, or work with the admin to align the layout.
- **“There’s no opportunity card.”**  
  That can be a GHO or settings issue, not a missing contact. Check **Contacts** first, then the pipeline, or ask the technical owner to confirm environment settings.
- **“Partial success is the same as failure.”**  
  It is not. Partial means: **at minimum the contact** often made it in; a secondary step (tag, note, opportunity) may need a retry or a settings fix.

---

## Where to go next (for the team)

- **Operators / env / troubleshooting:** [M2M_GHL_OPERATOR_VERIFICATION.md](./M2M_GHL_OPERATOR_VERIFICATION.md)
- **Checklist of every route and field:** [M2M_LEAD_CAPTURE_MATRIX.md](./M2M_LEAD_CAPTURE_MATRIX.md)
- **Manual test script:** [M2M_LEAD_CAPTURE_QA.md](./M2M_LEAD_CAPTURE_QA.md)
- **Big-picture product scope:** [M2M_GHL_INTEGRATION_MASTER_PLAN.md](./M2M_GHL_INTEGRATION_MASTER_PLAN.md)
