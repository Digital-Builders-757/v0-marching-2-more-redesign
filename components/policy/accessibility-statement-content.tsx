import Link from "next/link"

import {
  M2M_ADDRESS_LINES,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
  M2M_SITE_ORIGIN,
} from "@/lib/m2m-site"

const ACCESSIBILITY_EMAIL = "marching2morerei@outlook.com"
const ACCESSIBILITY_MAILTO = `mailto:${ACCESSIBILITY_EMAIL}`

/** Accessibility statement body (January 2024 template). Postal + phone align with `lib/m2m-site.ts` (footer source of truth). */
export function AccessibilityStatementContent() {
  return (
    <>
      <h2 id="commitment">Commitment to Accessibility</h2>
      <p>
        At Marching 2 More we are committed to making our website and our publishing services accessible to everyone, including individuals with disabilities.
        We believe in equal opportunity and access to our platform and strive to ensure that all authors and readers can fully participate in our services.
      </p>

      <h2 id="measures">Measures to Support Accessibility</h2>
      <p>Marching 2 More takes the following measures to ensure accessibility:</p>
      <ul>
        <li>
          <strong>Standards Compliance:</strong> We aim to adhere to WCAG 2.1 AA standards as a guideline for making web content accessible.
        </li>
        <li>
          <strong>Continuous Training:</strong> Our staff receives training on accessibility best practices.
        </li>
        <li>
          <strong>User Feedback:</strong> We encourage users to provide feedback on accessibility issues they encounter.
        </li>
      </ul>

      <h2 id="technical">Technical Specifications</h2>
      <p>
        Accessibility of Marching 2 More relies on the following technologies to work with the particular combination of web browser and any assistive
        technologies or plugins installed on your computer:
      </p>
      <ul>
        <li>HTML</li>
        <li>WAI-ARIA</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <p>These technologies are relied upon for conformance with the accessibility standards used.</p>

      <h2 id="limitations">Limitations and Alternatives</h2>
      <p>
        Despite our best efforts to ensure accessibility of Marching 2 More, there may be some limitations. Please contact us if you observe an issue.
      </p>

      <h2 id="feedback">Feedback Process</h2>
      <p>We welcome your feedback on the accessibility of Marching 2 More. Please let us know if you encounter accessibility barriers:</p>
      <ul>
        <li>
          <strong>Phone:</strong>{" "}
          <a href={M2M_PHONE_HREF}>{M2M_PHONE_DISPLAY}</a>
        </li>
        <li>
          <strong>E-mail:</strong>{" "}
          <a href={ACCESSIBILITY_MAILTO}>{ACCESSIBILITY_EMAIL}</a>
        </li>
        <li>
          <strong>Postal address:</strong>
          <br />
          {M2M_ADDRESS_LINES[0]}
          <br />
          {M2M_ADDRESS_LINES[1]}
          <br />
          {M2M_ADDRESS_LINES[2]}
        </li>
        <li>
          <strong>Contact form:</strong>{" "}
          <Link href="/contact-us" className="text-m2m-gold no-underline hover:underline">
            {`${M2M_SITE_ORIGIN.replace(/^https:\/\//, "")}/contact-us`}
          </Link>
        </li>
      </ul>
      <p>We try to respond to feedback within 2-5 business days.</p>

      <h2 id="compatibility">Compatibility with Browsers and Assistive Technology</h2>
      <p>
        Marching 2 More is designed to be compatible with assistive technologies and the last two versions of major browsers.
      </p>

      <h2 id="assessment">Assessment Approach</h2>
      <p>Marching 2 More assessed the accessibility of our platform by the following approaches:</p>
      <ul>
        <li>Self-evaluation</li>
        <li>External auditing when necessary</li>
      </ul>

      <h2 id="complaints">Formal Complaints</h2>
      <p>
        We aim to respond to accessibility feedback promptly and to address the concerns raised. Should you find that your feedback has not been met with a satisfactory response, you can file a formal complaint through our customer service department, and we will use your input to improve our service.
      </p>
    </>
  )
}
