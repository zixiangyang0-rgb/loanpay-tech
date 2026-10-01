import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact LoanPay Tech: Corrections & Requests",
  description:
    "Contact the LoanPay Tech editors for corrections, questions, or topic requests. We reply within 5 days. Please include the article URL and device details.",
  alternates: { canonical: "https://tech.loanpaylogic.com/contact" },
  openGraph: {
    type: "article",
    url: "https://tech.loanpaylogic.com/contact",
    siteName: "LoanPay Tech",
    title: "Contact LoanPay Tech: Corrections & Requests",
    description:
      "Contact the LoanPay Tech editors for corrections, questions, or topic requests. We reply within 5 days. Please include the article URL and device details.",
  },
  twitter: {
    card: "summary",
    title: "Contact LoanPay Tech: Corrections & Requests",
    description:
      "Contact the LoanPay Tech editors for corrections, questions, or topic requests. We reply within 5 days. Please include the article URL and device details.",
  },
};

export default function ContactPage() {
  return (
    <article className="prose-tech py-10">
      <p className="mono text-xs text-[#7d8f85]">~/contact ./ping-editors</p>
      <h1>Contact LoanPay Tech: Corrections &amp; Requests</h1>
      <p className="mono text-sm text-[#34f27b]">
        <span className="prompt-dollar">mail editors@loanpaylogic.com</span>
      </p>
      <p>
        The fastest way to reach a human at LoanPay Tech is email:{" "}
        <strong>editors@loanpaylogic.com</strong>. That inbox is read by our
        managing editor Maya Chen and triaged every weekday. Corrections to
        published guides get first priority, reader troubleshooting questions
        second, and everything else — topic ideas, partnership notes, press
        queries — in the order it arrives. We aim to reply to every substantive
        message within five business days, and correction reports usually get an
        answer faster because they go straight into the testing queue.
      </p>

      <h2>What should you include in a correction report?</h2>
      <p>
        The reports we can act on immediately all contain the same four facts:
        the exact article URL, your device model, your operating-system or app
        version, and the step number where reality diverged from the guide. A
        message like &quot;step 4 of the{" "}
        <Link href="/wifi-troubleshooting-guide">Wi-Fi troubleshooting guide</Link>{" "}
        — the Network reset button on my Windows 11 laptop is under Advanced
        network settings, build 22631&quot; lets Devon reproduce your screen in
        minutes. A message that only says &quot;wifi guide broken&quot; starts a
        long round of guessing. Screenshots of the screen you actually see are
        welcome and never used for anything except verification.
      </p>

      <h2>Can you ask for one-on-one tech help?</h2>
      <p>
        You can write in with a tech problem, and if it is quick we will point
        you at the right guide — most Wi-Fi, storage, and{" "}
        <Link href="/printer-troubleshooting-guide">printer problems</Link> are
        already covered step by step. What we cannot do is remote into your
        machine or carry on long back-and-forth diagnoses; we are a publishing
        team, not a help desk. If your issue looks like a gap in our coverage,
        your email may become the next guide we write, tested on our own devices
        first. For hacked or compromised accounts, start with our{" "}
        <Link href="/recover-hacked-accounts-guide">account recovery guide</Link>{" "}
        immediately rather than waiting for a reply, since speed matters there.
      </p>

      <h2>How do topic requests and partnerships work?</h2>
      <p>
        Topic requests are genuinely welcome — roughly a third of our guides
        started as reader email. Tell us the task you are trying to accomplish
        and the device involved, and if it fits our how-to mission we will add it
        to the testing backlog. For business inquiries: we do not sell links,
        sell placement in buying guides, or publish sponsored how-tos. Our{" "}
        <Link href="/robot-vacuum-buying-guide">buying guides</Link> are scored
        on a fixed rubric regardless of brand, and that policy is not negotiable.
        Advertising runs through Google AdSense under the terms described in our{" "}
        <Link href="/privacy-policy">privacy policy</Link>.
      </p>
      <div className="term-card-static my-6 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" />
          <span className="dot bg-[#febc2e]" />
          <span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">contact --summary</span>
        </div>
        <div className="mono space-y-2 p-5 text-sm">
          <p><span className="text-[#34f27b]">email .....</span> editors@loanpaylogic.com</p>
          <p><span className="text-[#34f27b]">response ..</span> within 5 business days</p>
          <p><span className="text-[#34f27b]">priority ..</span> corrections first</p>
          <p><span className="text-[#34f27b]">include ...</span> article URL + device + OS version + step no.</p>
        </div>
      </div>
      <p>
        Prefer to browse first? Our <Link href="/">homepage hub</Link> groups all
        twenty-five guides by topic. And if you have not met the people behind
        the answers, our <Link href="/about">about page</Link> introduces the
        editorial team.
      </p>
      <p className="mono text-xs text-[#7d8f85]">
        Updated: October 2026 · Sources: LoanPay Tech editorial policy; response
        times tracked from our own inbox metrics.
      </p>
    </article>
  );
}
