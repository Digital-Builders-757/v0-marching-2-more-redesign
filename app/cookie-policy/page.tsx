import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PolicyPage } from "@/components/policy/policy-page"
import {
  M2M_ADDRESS_LINES,
  M2M_EMAIL_DISPLAY,
  M2M_EMAIL_HREF,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
  M2M_SITE_ORIGIN,
} from "@/lib/m2m-site"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

const CANONICAL_COOKIE_POLICY = `${M2M_SITE_ORIGIN}/cookie-policy`

export const metadata: Metadata = m2mStandardMetadata({
  title: "Cookie Policy | Marching 2 More",
  description:
    "How Marching 2 More LLC uses cookies and similar technologies on marching2more.com.",
  path: "/cookie-policy",
})

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <PolicyPage
        title="Cookie Policy"
        lastUpdated="January 23, 2024"
        sourceUrl={CANONICAL_COOKIE_POLICY}
        showLegacyMigrationNotice={false}
      >
        <p>
          This Cookie Policy explains how Marching 2 More LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot;) uses
          cookies and similar technologies to recognize you when you visit our website at{" "}
          <a href={M2M_SITE_ORIGIN}>marching2more.com</a> (the &quot;Website&quot;). It explains what these technologies are
          and why we use them, as well as your rights to control our use of them.
        </p>
        <p>
          In some cases we may use cookies to collect personal information, or that becomes personal information if we
          combine it with other information.
        </p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website.
          Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as
          well as to provide reporting information.
        </p>
        <p>
          Cookies set by the website owner (in this case, Marching 2 More LLC) are called &quot;first-party cookies.&quot; Cookies
          set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable
          third-party features or functionality to be provided on or through the website (for example, advertising,
          interactive content, and analytics). The parties that set these third-party cookies can recognize your
          computer both when it visits the website in question and when it visits certain other websites.
        </p>

        <h2>Why do we use cookies?</h2>
        <p>
          We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in
          order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other
          cookies also enable us to track and target the interests of our users to enhance the experience on our online
          properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This
          is described in more detail below.
        </p>

        <h2>How can I control cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting
          your preferences in the Cookie Consent Manager where one is provided. The Cookie Consent Manager allows you to
          select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are
          strictly necessary to provide you with services.
        </p>
        <p>
          The Cookie Consent Manager can be found in the notification banner and on our Website. If you choose to reject
          cookies, you may still use our Website though your access to some functionality and areas of our Website may be
          restricted. You may also set or amend your web browser controls to accept or refuse cookies.
        </p>

        <p>
          The specific types of first- and third-party cookies served through our Website and the purposes they perform
          are described in the tables below (please note that the specific cookies served may vary depending on the exact
          pages you visit and how our hosting and analytics tools are configured over time):
        </p>

        <h3>Performance and functionality cookies</h3>
        <p>
          These cookies are used to enhance the performance and functionality of our Website but are non-essential to
          their use. However, without these cookies, certain functionality (like embedded media) may become unavailable.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-sm border border-m2m-deep/10">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-m2m-deep/10 bg-m2m-deep/[0.03]">
                <th className="px-3 py-3 font-medium text-m2m-deep">Name / type</th>
                <th className="px-3 py-3 font-medium text-m2m-deep">Purpose</th>
                <th className="px-3 py-3 font-medium text-m2m-deep">Provider</th>
                <th className="px-3 py-3 font-medium text-m2m-deep">Expiry</th>
              </tr>
            </thead>
            <tbody className="text-m2m-deep/90">
              <tr className="border-b border-m2m-deep/10">
                <td className="px-3 py-3 align-top font-medium text-m2m-deep">XSRF-TOKEN</td>
                <td className="px-3 py-3 align-top">
                  Helps protect against Cross-Site Request Forgery (CSRF) on forms or interactive endpoints where deployed.
                </td>
                <td className="px-3 py-3 align-top">marching2more.com</td>
                <td className="px-3 py-3 align-top">Session</td>
              </tr>
              <tr className="border-b border-m2m-deep/10">
                <td className="px-3 py-3 align-top font-medium text-m2m-deep">TS# (security session)</td>
                <td className="px-3 py-3 align-top">May be used by our hosting/network layer to strengthen connection security.</td>
                <td className="px-3 py-3 align-top">marching2more.com / infrastructure</td>
                <td className="px-3 py-3 align-top">Session</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Analytics and customization cookies</h3>
        <p>
          These cookies collect information that is used either in aggregate form to help us understand how our Website is
          being used or how effective our marketing campaigns are, or to help us customize our Website for you.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-sm border border-m2m-deep/10">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-m2m-deep/10 bg-m2m-deep/[0.03]">
                <th className="px-3 py-3 font-medium text-m2m-deep">Name / type</th>
                <th className="px-3 py-3 font-medium text-m2m-deep">Purpose</th>
                <th className="px-3 py-3 font-medium text-m2m-deep">Provider</th>
                <th className="px-3 py-3 font-medium text-m2m-deep">Expiry</th>
              </tr>
            </thead>
            <tbody className="text-m2m-deep/90">
              <tr className="border-b border-m2m-deep/10">
                <td className="px-3 py-3 align-top font-medium text-m2m-deep">bolt-performance</td>
                <td className="px-3 py-3 align-top">
                  May capture performance timings to improve reliability and speed when provided by hosting tools.
                </td>
                <td className="px-3 py-3 align-top">marching2more.com</td>
                <td className="px-3 py-3 align-top">Varies</td>
              </tr>
              <tr className="border-b border-m2m-deep/10">
                <td className="px-3 py-3 align-top font-medium text-m2m-deep">Analytics (e.g., Vercel Web Analytics)</td>
                <td className="px-3 py-3 align-top">
                  May use cookies or similar technologies to measure page views and usage in aggregate.
                </td>
                <td className="px-3 py-3 align-top">Vercel / marching2more.com</td>
                <td className="px-3 py-3 align-top">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-m2m-muted">
          Analytics details are governed by our providers&apos; policies (for example{" "}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Vercel&apos;s Privacy Policy
          </a>
          ).
        </p>

        <h3>Unclassified cookies</h3>
        <p>
          These are cookies that have not yet been categorized. We may classify them further with the help of their
          providers over time.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-sm border border-m2m-deep/10">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-m2m-deep/10 bg-m2m-deep/[0.03]">
                <th className="px-3 py-3 font-medium text-m2m-deep">Name / type</th>
                <th className="px-3 py-3 font-medium text-m2m-deep">Purpose</th>
                <th className="px-3 py-3 font-medium text-m2m-deep">Provider</th>
                <th className="px-3 py-3 font-medium text-m2m-deep">Expiry</th>
              </tr>
            </thead>
            <tbody className="text-m2m-deep/90">
              <tr className="border-b border-m2m-deep/10">
                <td className="px-3 py-3 align-top font-medium text-m2m-deep">ssr-caching</td>
                <td className="px-3 py-3 align-top">May relate to caching and delivery performance at the edge.</td>
                <td className="px-3 py-3 align-top">marching2more.com</td>
                <td className="px-3 py-3 align-top">Short-lived (often under one minute)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How can I control cookies on my browser?</h2>
        <p>
          As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you
          should visit your browser&apos;s help menu for more information. The following links describe how to manage cookies on
          common browsers:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Internet Explorer
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">
              Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies" target="_blank" rel="noopener noreferrer">
              Edge
            </a>
          </li>
          <li>
            <a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noopener noreferrer">
              Opera
            </a>
          </li>
        </ul>
        <p>In addition, most advertising networks offer you a way to opt out of targeted advertising. For example:</p>
        <ul>
          <li>
            <a href="https://youradchoices.com/" target="_blank" rel="noopener noreferrer">
              Digital Advertising Alliance
            </a>
          </li>
          <li>
            <a href="https://youradchoices.ca/" target="_blank" rel="noopener noreferrer">
              Digital Advertising Alliance of Canada
            </a>
          </li>
          <li>
            <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">
              European Interactive Digital Advertising Alliance
            </a>
          </li>
        </ul>

        <h2>What about other tracking technologies, like web beacons?</h2>
        <p>
          Cookies are not the only way to recognize or track visitors to a website. We may use other similar technologies
          from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear gifs&quot;). These are tiny graphic
          files that contain a unique identifier that enables us to recognize when someone has visited our Website or
          opened an email including them.
        </p>
        <p>
          For example, this allows us to monitor traffic patterns, deliver or communicate with cookies, understand
          whether you arrived from an online advertisement, improve site performance, and measure marketing effectiveness.
          In many instances, these technologies rely on cookies to function properly, so declining cookies may impair their
          functioning.
        </p>

        <h2>Do you use Flash cookies or Local Shared Objects?</h2>
        <p>
          Websites may use so-called &quot;Flash Cookies&quot; (Local Shared Objects) to collect and store information. If you do
          not want Flash Cookies stored on your computer, adjust your Flash player settings using the Website Storage Settings
          Panel or Global Storage Settings Panel, following the instructions provided by the Flash player publisher.
        </p>
        <p>
          Please note that restricting Flash Cookies may reduce functionality for some Flash-based content experienced on our
          services or elsewhere online.
        </p>

        <h2>Do you serve targeted advertising?</h2>
        <p>
          Third parties may serve cookies on your computer or mobile device to serve advertising through our Website.
          Companies may use information about your visits to this and other websites to provide relevant advertisements and
          may measure ad effectiveness using cookies or web beacons. Information collected through this process does not
          enable anyone to identify you by name or contact details unless you choose to provide that information separately.
        </p>

        <h2>How often will you update this Cookie Policy?</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for operational,
          legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of
          cookies and related technologies.
        </p>
        <p>The date near the title of this Cookie Policy indicates when it was last updated.</p>

        <h2>Where can I get further information?</h2>
        <p>If you have any questions about our use of cookies or other technologies, please contact us:</p>
        <p>
          Marching 2 More LLC
          <br />
          {M2M_ADDRESS_LINES[0]}
          <br />
          {M2M_ADDRESS_LINES[1]}
          <br />
          {M2M_ADDRESS_LINES[2]}
        </p>
        <p>
          <a href={M2M_EMAIL_HREF}>{M2M_EMAIL_DISPLAY}</a>
          <br />
          <a href={M2M_PHONE_HREF}>{M2M_PHONE_DISPLAY}</a>
        </p>
      </PolicyPage>
      <Footer />
    </>
  )
}
