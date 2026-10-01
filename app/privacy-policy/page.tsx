import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy: How LoanPay Tech Uses Data",
  description:
    "LoanPay Tech privacy policy: cookies, Google AdSense ads, analytics, and your choices. Learn how to opt out of personalized ads anytime.",
  alternates: { canonical: "https://tech.loanpaylogic.com/privacy-policy" },
  openGraph: {
    type: "article",
    url: "https://tech.loanpaylogic.com/privacy-policy",
    siteName: "LoanPay Tech",
    title: "Privacy Policy: How LoanPay Tech Uses Data",
    description:
      "LoanPay Tech privacy policy: cookies, Google AdSense ads, analytics, and your choices. Learn how to opt out of personalized ads anytime.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy: How LoanPay Tech Uses Data",
    description:
      "LoanPay Tech privacy policy: cookies, Google AdSense ads, analytics, and your choices. Learn how to opt out of personalized ads anytime.",
  },
};

export default function PrivacyPage() {
  return (
    <article className="prose-tech py-10">
      <p className="mono text-xs text-[#7d8f85]">~/legal ./privacy-policy --effective 2026-10-01</p>
      <h1>Privacy Policy: How LoanPay Tech Uses Data</h1>
      <p>
        This Privacy Policy explains what information LoanPay Tech
        (tech.loanpaylogic.com, &quot;we&quot;) collects when you read our
        guides, how we use it, and the choices you have. Our privacy practices
        are deliberately minimal: we publish free how-to articles, we do not run
        accounts or logins, we do not sell personal information, and we collect
        only what is needed to keep the site working, measure readership, and
        show advertising. If you have questions about anything below, contact{" "}
        <strong>editors@loanpaylogic.com</strong>.
      </p>

      <h2>What information do we collect?</h2>
      <p>
        We receive standard web-server log data every time anyone loads a page:
        the requested URL, the time of the visit, the referring page, a
        truncated network identifier, and basic device and browser
        characteristics from the user-agent string. We use this to keep the
        servers healthy, detect abuse, and understand in aggregate which guides —
        say, our <Link href="/wifi-troubleshooting-guide">Wi-Fi guide</Link> or{" "}
        <Link href="/password-manager-guide">password manager guide</Link> — need
        updating. If you email us, we keep your message and address so we can
        reply and track corrections; we never add correspondent addresses to
        marketing lists because we operate none.
      </p>

      <h2>How does third-party advertising and Google AdSense use cookies?</h2>
      <p>
        This site displays advertisements served by Google AdSense, which is how
        our free guides are funded. Google and its advertising partners use
        cookies and similar technologies — including the DoubleClick advertising
        cookie — to serve ads based on your visits to this site and other sites
        on the internet, to measure ad performance, and to detect fraud and
        abuse. These third-party cookies may record that your browser visited
        tech.loanpaylogic.com, which pages were viewed, and coarse signals such
        as device type and approximate location derived from your IP address.
      </p>
      <p>
        Google&apos;s use of advertising cookies enables it and its partners to
        serve personalized ads to you. You can opt out of personalized
        advertising by visiting Google&apos;s{" "}
        <a href="https://www.google.com/settings/ads" rel="noopener">
          Ads Settings page
        </a>{" "}
        and you can learn how Google uses data from sites that use its services
        at the{" "}
        <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">
          Google partner-sites disclosure
        </a>
        . Because these cookies are set by Google rather than by us, clearing
        this site&apos;s data alone may not remove them; use your browser&apos;s
        controls (see our <Link href="/browser-privacy-settings-guide">browser
        privacy guide</Link>) to clear third-party cookies or enable Global
        Privacy Control where supported. Our <Link href="/about">editorial
        independence policy</Link> means advertisers never influence guide
        content, but the ad slots themselves are operated by Google&apos;s
        systems under Google&apos;s policies.
      </p>

      <h2>Do we use analytics or other trackers?</h2>
      <p>
        We use privacy-respecting, aggregate traffic measurement to learn which
        guides readers finish and where they get stuck — for example, whether
        visitors to the <Link href="/backup-guide-3-2-1">3-2-1 backup guide</Link>{" "}
        continue to related security articles. We do not build cross-site
        profiles, do not use fingerprinting, and do not share analytics data
        with data brokers. Outbound links to authoritative references such as
        Microsoft Support, Apple Support, Google Help, or the FTC are ordinary
        hyperlinks; those destination sites apply their own privacy policies
        once you click through.
      </p>

      <h2>What are your choices and rights?</h2>
      <p>
        You can block or delete cookies in your browser settings, use private
        browsing modes, install reputable content blockers, and opt out of
        personalized ads through Google&apos;s Ads Settings linked above. Where
        applicable privacy law (including regimes such as the EU GDPR or the
        California CCPA/CPRA) grants rights to access, correct, delete, or limit
        the use of personal information, we honor those requests: email{" "}
        <strong>editors@loanpaylogic.com</strong> with the subject
        &quot;Privacy request&quot; and we will respond within thirty days. Note
        that because our server logs are minimal and short-retained, we often
        hold nothing attributable to an individual reader beyond active email
        correspondence.
      </p>

      <h2>How do we handle children&apos;s privacy and policy changes?</h2>
      <p>
        LoanPay Tech is a general-audience reference and is not directed at
        children under thirteen; we do not knowingly collect information from
        children, and parents who believe a child has emailed us may ask us to
        delete the correspondence. We keep server logs only as long as needed
        for security and operations and then aggregate or discard them. If we
        materially change this policy — for instance, by adding a new
        measurement tool — we will revise the effective date below and, for
        significant changes, add a notice on the <Link href="/">homepage</Link>{" "}
        for at least thirty days. Continued use of the site after a change takes
        effect constitutes acceptance of the revised policy.
      </p>
      <p className="mono text-xs text-[#7d8f85]">
        Updated: October 2026 · Effective: October 1, 2026 · Sources: Google Ads
        Settings and partner-sites disclosures; our own server and inbox
        practices.
      </p>
    </article>
  );
}
