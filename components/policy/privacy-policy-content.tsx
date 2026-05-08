import Link from "next/link"

import { M2M_ADDRESS_LINES, M2M_SITE_ORIGIN } from "@/lib/m2m-site"

const PRIVACY_EMAIL = "marching2morerei@outlook.com"
const PRIVACY_MAILTO = `mailto:${PRIVACY_EMAIL}`

/** Full privacy notice — legal copy synced with client-approved January 2024 text where applicable; obvious template errors corrected. */
export function PrivacyPolicyContent() {
  return (
    <>
      <p>
        This privacy notice for Marching 2 More LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we might
        collect, store, use, and/or share (&quot;process&quot;) your information when you use our services (&quot;Services&quot;), such as when you:
      </p>
      <ul>
        <li>Visit our website at <a href={M2M_SITE_ORIGIN}>marching2more.com</a>, or any website of ours that links to this privacy notice</li>
        <li>Engage with us in other related ways, including any sales, marketing, or events</li>
      </ul>
      <p>
        As a fully regulated and licensed limited liability company, Marching 2 More LLC acts as a data controller for individuals engaging with its
        services—including website experiences and mobile applications collectively referred to as &quot;Platforms&quot;—to the extent we offer such
        applications.
      </p>
      <p>
        By accessing the Platforms, namely <a href={M2M_SITE_ORIGIN}>marching2more.com</a>, or activating features that require affirmative acceptance during
        sign-up (&quot;I agree&quot;), you agree to this Privacy Notice unless superseded by a mutually signed arrangement (&quot;the accessing party&quot;).
      </p>
      <p>
        The safeguarding of personal data is a paramount concern for Marching 2 More LLC, and adherence to pertinent data-protection laws is prioritized.
      </p>
      <p>
        This Policy applies when you engage with Marching 2 More LLC—including real-estate brokerage and advising, marketing inquiries, advertised offers,
        online tools, referral programs where applicable, promotions, messaging with staff, loyalty-style communications, transactions supported through our
        channels, publishing use of volunteered testimonials—and personal data stays bound to disclosures inside this Privacy Policy unless a separate signed
        addendum modifies them.
      </p>

      <h2 id="questions">Questions or concerns?</h2>
      <p>
        Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices,
        please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
        <a href={PRIVACY_MAILTO}>{PRIVACY_EMAIL}</a>.
      </p>

      <h2 id="summary">Summary of key points</h2>
      <p>
        This summary provides key points from our privacy notice, but you can learn more detail about any topic by using the numbered table of contents
        below to jump to each section or by scrolling the headings sequentially.
      </p>
      <p>
        <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information
        depending on how you interact with Marching 2 More LLC and the Services, the choices you make, and the products and features you use.
      </p>
      <p>
        <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
      </p>
      <p>
        <strong>Do we receive any information from third parties?</strong> We may receive information from public databases, marketing partners, social
        media platforms, and other outside sources.
      </p>
      <p>
        <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate
        with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We
        process your information only when we have a valid legal reason to do so.
      </p>
      <p>
        <strong>In what situations and with whom do we share personal information?</strong> We may share information in specific situations and with
        specific categories of third parties described in this notice.
      </p>
      <p>
        <strong>What are your rights?</strong> Depending on where you are located geographically, applicable privacy law may give you rights regarding
        your personal information.
      </p>
      <p>
        <strong>How do you exercise your rights?</strong> The easiest paths are emailing{" "}
        <a href={PRIVACY_MAILTO}>{PRIVACY_EMAIL}</a> describing your DSAR/access/deletion/editing wishes or submitting comparable writing via{" "}
        <Link href="/contact-us">our Contact Us workflow</Link> as a supplemental data-subject-request channel—we respond consistent with prevailing legal
        requirements.
      </p>
      <p>Continue reading to learn more about what Marching 2 More LLC does with any information we collect.</p>

      <h2 id="table-of-contents">Table of contents</h2>
      <nav aria-label="Privacy policy sections" className="not-prose my-6">
        <ol className="list-decimal space-y-2 pl-6 text-m2m-deep/90 [&>li]:pl-1">
          <li>
            <a href="#section-1" className="text-m2m-gold no-underline hover:underline">
              What information do we collect?
            </a>
          </li>
          <li>
            <a href="#section-2" className="text-m2m-gold no-underline hover:underline">
              How do we process your information?
            </a>
          </li>
          <li>
            <a href="#section-3" className="text-m2m-gold no-underline hover:underline">
              When and with whom do we share your personal information?
            </a>
          </li>
          <li>
            <a href="#section-4" className="text-m2m-gold no-underline hover:underline">
              Do we use cookies and other tracking technologies?
            </a>
          </li>
          <li>
            <a href="#section-5" className="text-m2m-gold no-underline hover:underline">
              How long do we keep your information?
            </a>
          </li>
          <li>
            <a href="#section-6" className="text-m2m-gold no-underline hover:underline">
              Do we collect information from minors?
            </a>
          </li>
          <li>
            <a href="#section-7" className="text-m2m-gold no-underline hover:underline">
              What are your privacy rights?
            </a>
          </li>
          <li>
            <a href="#section-8" className="text-m2m-gold no-underline hover:underline">
              Controls for do-not-track features
            </a>
          </li>
          <li>
            <a href="#section-9" className="text-m2m-gold no-underline hover:underline">
              Do California residents have specific privacy rights?
            </a>
          </li>
          <li>
            <a href="#section-10" className="text-m2m-gold no-underline hover:underline">
              Do we make updates to this notice?
            </a>
          </li>
          <li>
            <a href="#section-11" className="text-m2m-gold no-underline hover:underline">
              How can you contact us about this notice?
            </a>
          </li>
          <li>
            <a href="#section-12" className="text-m2m-gold no-underline hover:underline">
              How can you review, update, or delete the data we collect from you?
            </a>
          </li>
        </ol>
      </nav>

      <h2 id="section-1">1. What information do we collect?</h2>
      <h3>Personal information you disclose to us</h3>
      <p>
        <strong>In short:</strong> We collect personal information that you provide to us.
      </p>
      <p>
        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our Services,
        participate in activities on the Services, or otherwise contact us.
      </p>
      <p>
        <strong>Personal Information Provided by You.</strong> The categories we collect depend on the context of your interactions with us,
        choices you make, and the features you use. They may include:
      </p>
      <ul>
        <li>Names</li>
        <li>Phone numbers</li>
        <li>Email addresses</li>
        <li>Mailing addresses</li>
        <li>Business name</li>
        <li>Account login details (when applicable)</li>
        <li>Information related to inquiries, browsing, coarse location inferred from technical data (such as IP), and feedback</li>
        <li>Professional/work experience details you choose to submit</li>
      </ul>
      <p>
        <strong>Sensitive Information.</strong> We do not process sensitive personal information.
      </p>
      <p>
        All personal information that you provide must be true, complete, and accurate, and you must notify us of changes to such personal information.
      </p>

      <h3>Information automatically collected</h3>
      <p>
        <strong>In short:</strong> Some information—such as your Internet Protocol (IP) address and/or browser or device characteristics—is collected
        automatically when you visit our Services.
      </p>
      <p>
        We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity
        (like your name or contact detail) by itself but may include device and usage information, such as your IP address, browser and device characteristics,
        operating system, language preferences, referring URLs, device name, country/region, information about how and when you use our Services, and other
        technical signals. This collection supports security, operations, and internal analytics. Like many businesses, we also collect information through
        cookies and related technologies (Section 4).
      </p>
      <ul>
        <li>
          <strong>Log and usage data.</strong> Diagnostics, usage, and performance information servers record in log files—including IP address, device
          information, browser type and settings, timestamps, pages or files viewed, searches, feature usage, system events, crashes, and hardware snapshots
          when reported.
        </li>
        <li>
          <strong>Device data.</strong> Computers, phones, tablets, or other devices you use—including IP (or proxy server) information, identifiers, browser
          type, hardware model, ISP or mobile carrier metadata, operating system, and configuration cues.
        </li>
        <li>
          <strong>Location data.</strong> Coarse or precise location depending on device APIs and permissions—for example geolocation where you opt in. You
          may refuse or disable location signals, though some features may degrade.
        </li>
      </ul>

      <h3>Information collected from other sources</h3>
      <p>
        <strong>In short:</strong> We may collect limited information from public databases, marketing partners, and other outside sources.
      </p>
      <p>
        To enrich service delivery, record accuracy, segmentation, and permissible marketing, we may receive information from joint marketing partners,
        affiliates, data providers, enrichment vendors, and publicly available channels. Such data can include mailing addresses, job titles, email addresses,
        phone numbers, intent/behavioral signals, IPs, social-media handles/URLs, customized audience attributes, and analogous fields when lawfully provided.
      </p>

      <h2 id="section-2">2. How do we process your information?</h2>
      <p>
        <strong>In short:</strong> We process information to operate, administer, safeguard, personalize, advertise (where lawful), comply with obligations,
        and—with explicit consent—pursue other notified purposes grounded in valid lawful bases required by geography.
      </p>
      <p>We process personal information consistent with interactions you choose, including to:</p>
      <ul>
        <li>
          <strong>Deliver services.</strong> Provide or coordinate brokerage, advising, valuations, consultations, introductions, referrals,
          and related deliverables requested.
        </li>
        <li>
          <strong>Respond to inquiries and support tickets.</strong> Resolve questions, fulfill information requests, and troubleshoot Services.
        </li>
        <li>
          <strong>Send administrative notices.</strong> Communicate about products, services, policy changes, security updates, and compliance-related topics.
        </li>
        <li>
          <strong>Manage transactions.</strong> Facilitate orders, payments, refunds, or logistics when you engage in paid or sponsored programs we operate.
        </li>
        <li>
          <strong>Request feedback.</strong> Conduct optional surveys or satisfaction outreach where permitted.
        </li>
        <li>
          <strong>Deliver marketing or promotional communication.</strong> Share offers consistent with consent or legal soft-opt mechanisms; see Section 7
          for opt-out instructions.
        </li>
        <li>
          <strong>Personalize advertising.</strong> Tailor promotional content to interests, geography, or attributes when allowed.
        </li>
        <li>
          <strong>Showcase testimonials.</strong> Publish statements you authorize, which may include limited personal information.
        </li>
        <li>
          <strong>Protect Services.</strong> Monitor fraud, abuse, cyber risks, and enforce policies.
        </li>
        <li>
          <strong>Improve experiences.</strong> Analyze usage, marketing lift, product quality, and Service performance.
        </li>
        <li>
          <strong>Measure campaigns.</strong> Evaluate effectiveness of advertising and partnership spend.
        </li>
        <li>
          <strong>Meet legal duties.</strong> Respond to regulators, law enforcement, courts, and preserve/defend rights.
        </li>
      </ul>

      <h2 id="section-3">3. When and with whom do we share your personal information?</h2>
      <p>
        <strong>In short:</strong> We may share information in the situations described here and with vendor categories below. Our agreements require service
        providers to follow documented instructions, protect data, and avoid secondary uses without permission.
      </p>
      <ul>
        <li>
          <strong>Vendors, consultants, and other service providers.</strong> CRM, email delivery, hosting, analytics, scheduling, payment, security, or other
          contractors who require limited access to perform services on our behalf under written obligations.
        </li>
        <li>
          <strong>Business transfers.</strong> During mergers, acquisitions, financings, reorganizations, or asset sales, information may transfer subject to
          successor obligations.
        </li>
        <li>
          <strong>Google Maps Platform (if enabled).</strong> Integrations such as Google Maps or Places may process location or device signals under Google&apos;s
          policies—see{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&apos;s Privacy Policy
          </a>
          . EU/UK visitors should also review our <Link href="/cookie-policy">Cookie Policy</Link> for applicable cookie notices. You may withdraw location
          consent through device settings or by contacting us with questions.
        </li>
        <li>
          <strong>Affiliates.</strong> Parent, subsidiary, or commonly controlled entities must honor this notice or provide equivalent protections.
        </li>
        <li>
          <strong>Business partners.</strong> Co-branded offers, events, or promotions may necessitate limited sharing with vetted partners.
        </li>
      </ul>
      <p>We may also disclose personal information when:</p>
      <ul>
        <li>
          Governmental authorities compel cooperation, or we must establish, exercise, or defend legal claims.
        </li>
        <li>
          Trusted financial, title, insurance, or transaction partners need data to perform regulated functions on documented instructions.
        </li>
        <li>
          Cross-border transfers occur with safeguards such as standard contractual clauses or derogations recognized in your jurisdiction.
        </li>
      </ul>

      <h2 id="section-4">4. Do we use cookies and other tracking technologies?</h2>
      <p>
        <strong>In short:</strong> We may use cookies and comparable technologies to collect/store information supporting analytics, personalization, fraud
        mitigation, preference storage, pixels, SDKs where applicable across Platforms.
      </p>
      <p>
        Additional detail—including categories, retention, refusal paths, banner expectations, browser controls—is published in our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2 id="section-5">5. How long do we keep your information?</h2>
      <p>
        <strong>In short:</strong> We retain personal information while necessary for the purposes in this Privacy Policy—or longer when law, tax, escrow, or
        regulatory duties require—and protect submissions with industry-standard measures such as HTTPS/TLS wherever supported.
      </p>
      <p>
        When no lawful business necessity remains, we delete or anonymize information; backups or archived systems may delay completion until overwritten in
        the ordinary course, during which isolated access controls apply until secure deletion becomes feasible.
      </p>

      <h2 id="section-6">6. Do we collect information from minors?</h2>
      <p>
        <strong>In short:</strong> We do not knowingly solicit data from or market to individuals under 18.
      </p>
      <p>
        Using the Services signifies you are at least 18 or the supervising parent/guardian consenting to a minor&apos;s supervised access. Discovering contrary
        information triggers remediation steps such as restricting access or deleting identifiable records when feasible under law. Parents who believe minors
        shared data unintentionally should contact us at{" "}
        <a href={PRIVACY_MAILTO}>{PRIVACY_EMAIL}</a>.
      </p>

      <h2 id="section-7">7. What are your privacy rights?</h2>
      <p>
        <strong>In short:</strong> Where provided by law, you may review, rectify, delete, export, restrict processing, object, or withdraw consent for certain
        processing—including marketing—and may contact regulators as described below.
      </p>
      <p>
        Residents of the European Economic Area or United Kingdom believing processing violates law may escalate complaints with local supervisory authorities listed at{" "}
        <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
        </a>
        .
      </p>
      <p>
        Swiss residents can reach data-protection authorities via{" "}
        <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noopener noreferrer">
          https://www.edoeb.admin.ch/edoeb/en/home.html
        </a>
        .
      </p>
      <p>
        <strong>Consent withdrawal.</strong> Where processing relies solely on consent, you may revoke it anytime using Section 11 contact methods without
        undermining lawful processing beforehand or processing grounded in separate lawful bases afterward.
      </p>
      <p>
        <strong>Marketing opt-out.</strong> Use unsubscribe mechanisms in outbound communications or instruct us directly; operational or transactional notices
        may continue while you maintain accounts or active deals.
      </p>
      <p>
        <strong>Cookies:</strong> Browsers permit blocking/deleting cookies—see Section 4 and our <Link href="/cookie-policy">Cookie Policy</Link>. Interest-based ads may often be declined via initiatives such as{" "}
        <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
          aboutads.info/choices
        </a>
        .
      </p>

      <h2 id="section-8">8. Controls for do-not-track features</h2>
      <p>
        Most web browsers—and some mobile operating systems or apps—expose &quot;Do-Not-Track&quot; preferences signaling that online browsing shouldn&apos;t be
        monitored broadly. Uniform global standards aren&apos;t finalized, so Marching 2 More LLC presently does not automatically honor every DNT flag; we rely
        on cookie controls, lawful consent pathways, vendor settings, and this notice&apos;s transparency commitments. Adoption of mandated technology will prompt
        an updated Privacy Policy describing any response obligations.
      </p>

      <h2 id="section-9">9. Do California residents have specific privacy rights?</h2>
      <p>
        <strong>In short:</strong> California residents possess extra transparency and removal rights enumerated in statutes such as Shine the Light (Civil Code §
        1798.83)—including annual, no-cost disclosures about categories shared with third parties for their direct-marketing objectives along with counterpart
        names/addresses unless an exemption applies.
      </p>
      <p>
        Certified California minors with registered profiles may petition removal of public-facing data—with reasonable commercial efforts—even though archival or
        legal retention copies may briefly persist elsewhere.
      </p>

      <h2 id="section-10">10. Do we make updates to this notice?</h2>
      <p>
        <strong>In short:</strong> Yes—updates preserve legal compliance as laws, regulators, vendors, Services, technologies, partnerships, jurisdictions, audits,
        or risk appetites evolve.
      </p>
      <p>
        Updated versions disclose a refreshed &quot;Last updated&quot; marker and generally take effect immediately when posted unless law demands delayed
        effective dates. Material alterations may merit additional emails, banners, or in-product confirmations. Review this Notice periodically—especially after
        feature launches—to stay informed about practices protecting your privacy.
      </p>

      <h2 id="section-11">11. How can you contact us about this notice?</h2>
      <p>
        If you have questions or comments about this notice, email us at <a href={PRIVACY_MAILTO}>{PRIVACY_EMAIL}</a>{" "}
        or write:
      </p>
      <p>
        Marching 2 More LLC
        <br />
        {M2M_ADDRESS_LINES[0]}
        <br />
        {M2M_ADDRESS_LINES[1]}
        <br />
        {M2M_ADDRESS_LINES[2]}
      </p>

      <h2 id="section-12">12. How can you review, update, or delete the data we collect from you?</h2>
      <p>
        You may invoke access/correction/deletion avenues permitted in your jurisdiction by emailing{" "}
        <a href={PRIVACY_MAILTO}>{PRIVACY_EMAIL}</a>.
      </p>
      <p>
        You may also submit detailed requests—including identity verification artefacts we reasonably request—via <Link href="/contact-us">Contact Us</Link> when
        you reference &quot;Privacy data request.&quot;
      </p>
    </>
  )
}
