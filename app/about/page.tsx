import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About LoanPay Tech: Who Writes Our Guides",
  description:
    "Meet the LoanPay Tech editorial team and our testing process. Learn how we write accurate how-to guides. Contact us with corrections anytime you spot one.",
  alternates: { canonical: "https://tech.loanpaylogic.com/about" },
  openGraph: {
    type: "article",
    url: "https://tech.loanpaylogic.com/about",
    siteName: "LoanPay Tech",
    title: "About LoanPay Tech: Who Writes Our Guides",
    description:
      "Meet the LoanPay Tech editorial team and our testing process. Learn how we write accurate how-to guides. Contact us with corrections anytime you spot one.",
  },
  twitter: {
    card: "summary",
    title: "About LoanPay Tech: Who Writes Our Guides",
    description:
      "Meet the LoanPay Tech editorial team and our testing process. Learn how we write accurate how-to guides. Contact us with corrections anytime you spot one.",
  },
};

export default function AboutPage() {
  return (
    <article className="prose-tech py-10">
      <p className="mono text-xs text-[#7d8f85]">~/about ./whoami</p>
      <h1>About LoanPay Tech: Who Writes Our Guides</h1>
      <p className="mono text-sm text-[#34f27b]">
        <span className="prompt-dollar">cat mission.txt</span>
      </p>
      <p>
        LoanPay Tech (tech.loanpaylogic.com) exists for one reason: technology
        instructions that actually work when a regular person follows them. Every
        guide on this site is written in plain language, tested against the real
        menus and settings of current devices and apps, and updated when those
        menus change. If a step says open <strong>Settings &gt; Network &amp;
        internet &gt; Advanced network settings</strong> on Windows 11, it is
        because an editor opened that exact screen and confirmed the path.
      </p>
      <p>
        We are part of the loanpaylogic.com network of practical lifestyle
        publications. While our sister sites cover money topics, LoanPay Tech
        stays in its lane: fixing Wi-Fi, securing accounts, speeding up slow
        computers and phones, setting up smart-home gear, and explaining buying
        decisions in honest terms. We do not publish press releases, rumors, or
        filler. If a page is on this site, it teaches you how to do something.
      </p>

      <h2>Who is on the editorial team?</h2>
      <div className="term-card-static my-6 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" />
          <span className="dot bg-[#febc2e]" />
          <span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">team --list</span>
        </div>
        <div className="space-y-5 p-5">
          <div>
            <p className="mono font-bold text-[#a7f3c7]">Maya Chen — Managing Editor</p>
            <p className="text-sm leading-relaxed">
              Maya spent eight years on consumer-tech help desks before moving into
              publishing. She owns the site&apos;s accuracy standard: every menu
              path, button label, and settings location in our guides must match
              the current shipping software. Maya personally re-verifies the
              security guides (password managers, two-factor authentication,
              backups, and scam awareness) on a quarterly cycle and signs off on
              every update stamped on this site.
            </p>
          </div>
          <div>
            <p className="mono font-bold text-[#a7f3c7]">Devon Park — Senior How-To Writer</p>
            <p className="text-sm leading-relaxed">
              Devon covers phones, computers, printers, TVs, and smart-home
              devices. His background is in retail tech support, which taught him
              how real households actually break things — and how to explain the
              fix without condescension. Devon maintains our Windows, macOS,
              iPhone, and Android test devices and reproduces each troubleshooting
              flow before it is published.
            </p>
          </div>
          <div>
            <p className="mono font-bold text-[#a7f3c7]">Priya Nair — Buying Guides &amp; Comparisons Editor</p>
            <p className="text-sm leading-relaxed">
              Priya runs the buying guides and comparison tables (robot vacuums,
              earbuds, streaming, and cloud storage). She does not accept review
              units tied to coverage commitments and scores products on a fixed
              rubric: setup effort, everyday usability, running costs, and how
              gracefully the thing fails. Comparison data is labeled with its
              check date, and readers are always told to verify prices and specs
              on official sites.
            </p>
          </div>
        </div>
      </div>

      <h2>How do we test and verify guides?</h2>
      <p>
        Our process is deliberately boring, because boring is reliable. First, the
        writer reproduces the task on a real device running publicly available
        software — not a beta, not a screenshot from someone else&apos;s video.
        Second, a second editor repeats the steps from the draft alone, with no
        help from the writer, and flags anywhere the draft assumes knowledge the
        reader does not have. Third, the draft&apos;s menu paths are checked
        against the official support documentation from the maker (Microsoft
        Support, Apple Support, Google Help, and similar authoritative sources),
        which we link wherever the reader might need deeper detail.
      </p>
      <p>
        Year-sensitive material — prices, plan lineups, model comparisons — is
        labeled with its verification month. Anything stamped &quot;as of October
        2026&quot; was checked that month, and we tell you outright to confirm it
        on the official site before spending money. Software moves fast; our
        promise is to tell you exactly how fresh each fact is rather than pretend
        it never ages.
      </p>

      <h2>How do we make money?</h2>
      <p>
        LoanPay Tech displays advertising served by Google AdSense. Ads do not
        influence our recommendations: advertisers cannot pay for placement in a
        guide, for a favorable comparison score, or to suppress a cheaper
        alternative. Our buying guides routinely recommend spending less — see
        our <Link href="/earbuds-buying-guide">earbuds buying guide</Link> and{" "}
        <Link href="/robot-vacuum-buying-guide">robot vacuum buying guide</Link>{" "}
        — because the honest answer is frequently the mid-range option. For the
        full detail on cookies and ad personalization, read our{" "}
        <Link href="/privacy-policy">privacy policy</Link>.
      </p>

      <h2>How can readers contact us?</h2>
      <p>
        Corrections reach us fastest and are acted on fastest. If a menu moved, a
        step fails on your device, or a comparison fact went stale, email the
        editorial team at <strong>editors@loanpaylogic.com</strong> with the
        article URL and your device and software version. We read every report,
        reproduce what we can, and update the page with a fresh timestamp. For
        anything else — topic requests, partnership queries, or privacy
        questions — use the same address or the form on our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
      <p className="mono text-xs text-[#7d8f85]">
        Updated: October 2026 · Sources: our published testing process and staff
        records; menu paths cross-checked against Microsoft Support, Apple
        Support, and Google Help documentation.
      </p>
    </article>
  );
}
