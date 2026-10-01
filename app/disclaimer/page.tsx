import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer: Educational Tech Info, Not Advice",
  description:
    "LoanPay Tech disclaimer: guides are educational, not professional advice. Read this first before following technical steps.",
  alternates: { canonical: "https://tech.loanpaylogic.com/disclaimer" },
  openGraph: {
    type: "article",
    url: "https://tech.loanpaylogic.com/disclaimer",
    siteName: "LoanPay Tech",
    title: "Disclaimer: Educational Tech Info, Not Advice",
    description:
      "LoanPay Tech disclaimer: guides are educational, not professional advice. Read this first before following technical steps.",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer: Educational Tech Info, Not Advice",
    description:
      "LoanPay Tech disclaimer: guides are educational, not professional advice. Read this first before following technical steps.",
  },
};

export default function DisclaimerPage() {
  return (
    <article className="prose-tech py-10">
      <p className="mono text-xs text-[#7d8f85]">~/legal ./disclaimer --read-carefully</p>
      <h1>Disclaimer: Educational Tech Info, Not Advice</h1>
      <p>
        Every article on LoanPay Tech is published for general educational
        purposes only. Our guides explain how consumer technology works and how
        typical tasks are performed on typical devices; they are not
        professional advice — not legal advice, not financial advice, not
        enterprise IT consulting, and not a substitute for the official support
        channels of the companies whose products we describe. Reading a guide
        does not create any advisor, contractor, or fiduciary relationship
        between you and LoanPay Tech.
      </p>

      <h2>Why must you back up before following technical steps?</h2>
      <p>
        Many procedures we document are inherently destructive if misapplied: a
        network reset erases saved Wi-Fi passwords, freeing storage deletes
        photos, a factory reset wipes a phone, and account recovery can lock you
        out if done in the wrong order. Our{" "}
        <Link href="/backup-guide-3-2-1">3-2-1 backup guide</Link> exists
        precisely so you have a safety net before you touch anything risky, and
        individual guides — from <Link href="/free-up-phone-storage">freeing
        phone storage</Link> to <Link href="/speed-up-slow-computer">speeding up
        a slow computer</Link> — repeat the warning at the point of danger. If
        you skip the backup step and something is lost, that loss is yours to
        bear; to the maximum extent permitted by law, LoanPay Tech and the
        loanpaylogic.com network disclaim liability for data loss, device
        damage, account lockouts, or costs arising from following (or
        mis-following) our content.
      </p>

      <h2>Why can software steps differ on your device?</h2>
      <p>
        Vendors ship different builds to different regions, carriers, and
        hardware generations, and they rename menus without asking our
        permission. We verify paths such as Gmail&apos;s filter creation flow
        (see our <Link href="/gmail-organization-tips">Gmail guide</Link>) or
        Windows recovery screens against current software and stamp every page
        with its check month, but your screen may legitimately differ. Treat
        vendor documentation — Microsoft Support, Apple Support, Google Help —
        as the tiebreaker, and treat year-sensitive comparisons like our{" "}
        <Link href="/cutting-cable-streaming-guide-2026">streaming guide</Link>{" "}
        as snapshots labeled with their date rather than permanent truths. Where
        we express opinions, for instance in the{" "}
        <Link href="/do-you-need-antivirus">antivirus guide</Link> or{" "}
        <Link href="/vpn-explained-guide">VPN explainer</Link>, those are the
        editors&apos; judgments from testing, not guarantees of any outcome.
      </p>

      <h2>What about ads, links, and medical or legal topics?</h2>
      <p>
        Advertisements served by Google AdSense are third-party content governed
        by our <Link href="/privacy-policy">privacy policy</Link> and{" "}
        <Link href="/terms-of-service">terms of service</Link>, not editorial
        endorsements. Outbound links to authoritative sources are provided for
        verification; we do not control those destinations. We do not publish
        medical, legal, or financial instructions; our security articles (for
        example, <Link href="/email-scams-to-avoid">email scams</Link> and{" "}
        <Link href="/parental-controls-guide">parental controls</Link>) describe
        consumer self-help measures, and if you face identity theft, financial
        fraud, or a legal dispute, consult qualified professionals and official
        agencies promptly. Questions about this disclaimer:{" "}
        <strong>editors@loanpaylogic.com</strong>, or see our{" "}
        <Link href="/contact">contact page</Link> and{" "}
        <Link href="/about">about page</Link>. Return to the{" "}
        <Link href="/">homepage hub</Link> to keep browsing.
      </p>
      <p className="mono text-xs text-[#7d8f85]">
        Updated: October 2026 · Sources: our editorial standards; vendor support
        documentation practices as linked from each guide.
      </p>
    </article>
  );
}
