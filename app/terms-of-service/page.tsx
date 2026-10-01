import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service: Rules for Using LoanPay Tech",
  description:
    "LoanPay Tech terms of service: acceptable use, content license, accuracy limits, and liability. Updated October 2026 with plain-English rules.",
  alternates: { canonical: "https://tech.loanpaylogic.com/terms-of-service" },
  openGraph: {
    type: "article",
    url: "https://tech.loanpaylogic.com/terms-of-service",
    siteName: "LoanPay Tech",
    title: "Terms of Service: Rules for Using LoanPay Tech",
    description:
      "LoanPay Tech terms of service: acceptable use, content license, accuracy limits, and liability. Updated October 2026 with plain-English rules.",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service: Rules for Using LoanPay Tech",
    description:
      "LoanPay Tech terms of service: acceptable use, content license, accuracy limits, and liability. Updated October 2026 with plain-English rules.",
  },
};

export default function TermsPage() {
  return (
    <article className="prose-tech py-10">
      <p className="mono text-xs text-[#7d8f85]">~/legal ./terms-of-service --effective 2026-10-01</p>
      <h1>Terms of Service: Rules for Using LoanPay Tech</h1>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of LoanPay
        Tech at tech.loanpaylogic.com. By reading, browsing, or following any
        guide on this site, you agree to these Terms. If you do not agree, do
        not use the site. We may update these Terms as the publication evolves;
        the effective date below always reflects the current version, and
        continued use after an update constitutes acceptance.
      </p>

      <h2>What is LoanPay Tech allowed to be used for?</h2>
      <p>
        You may read our guides for personal, non-commercial purposes and share
        links to them freely — we encourage sending a struggling relative our{" "}
        <Link href="/speed-up-slow-computer">slow-computer guide</Link> or a new
        hire the <Link href="/video-call-setup-guide">video-call setup
        guide</Link>. You may quote brief excerpts with attribution and a link
        back to the source article. You may not scrape the site at abusive
        volumes, republish entire articles elsewhere, present our content as your
        own, circumvent access controls, probe our infrastructure, or use any
        guide in a way that harms your own or others&apos; devices, accounts, or
        networks.
      </p>

      <h2>How accurate are the guides, really?</h2>
      <p>
        We test every procedure on real devices and stamp each page with its last
        verification month, but software changes constantly: vendors rename
        menus, move buttons, and alter default behaviors without notice. Our
        guides are educational references, not warranties. Before destructive or
        security-sensitive operations — network resets (see our{" "}
        <Link href="/wifi-troubleshooting-guide">Wi-Fi guide</Link>), storage
        wipes, account recovery in our{" "}
        <Link href="/recover-hacked-accounts-guide">recovery guide</Link>, or
        purchases based on our <Link href="/cloud-storage-compared">cloud
        comparison</Link> — back up your data and confirm critical facts against
        the official vendor documentation we link. You follow any steps at your
        own risk. See also our <Link href="/disclaimer">disclaimer</Link> for
        the full limitation of liability.
      </p>

      <h2>Who owns the content and the branding?</h2>
      <p>
        All articles, tables, explanations, and the LoanPay Tech terminal-style
        presentation are the property of the loanpaylogic.com network and are
        protected by copyright law. The LoanPay Tech name, the &quot;&gt;_&quot;
        prompt mark, and the site&apos;s distinctive styling may not be copied to
        imply endorsement or affiliation. Trademarks belonging to others —
        Windows, macOS, iPhone, Android, Gmail, Google Drive, and all the rest —
        remain the property of their respective owners, and our guides use those
        names only to describe genuine compatibility and procedures. Nothing in
        these Terms transfers any ownership interest to you.
      </p>

      <h2>How do advertising, links, and termination work?</h2>
      <p>
        The site displays advertising served by Google AdSense; ad content is
        selected by Google&apos;s systems and is not our editorial content, as
        detailed in our <Link href="/privacy-policy">privacy policy</Link>. We
        link to authoritative third-party sources (Microsoft Support, Apple
        Support, Google Help, the FTC) for verification and depth; we do not
        control those sites and are not responsible for them. We may restrict or
        terminate access for anyone who violates these Terms, abuses the site
        technically, or misuses our content. These Terms are governed by the
        laws applicable at our principal place of business, without regard to
        conflict-of-law rules. Questions? Email{" "}
        <strong>editors@loanpaylogic.com</strong> or visit our{" "}
        <Link href="/contact">contact page</Link>, and meet the team on our{" "}
        <Link href="/about">about page</Link>. Start from the{" "}
        <Link href="/">homepage hub</Link> anytime.
      </p>
      <p className="mono text-xs text-[#7d8f85]">
        Updated: October 2026 · Effective: October 1, 2026 · Sources: our
        publication policies; vendor trademark attributions as referenced.
      </p>
    </article>
  );
}
