import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Scams to Avoid: 9 Red Flags & What to Do",
  description:
    "Spot phishing before it costs you. These 9 email scams to avoid cover fake banks, gift cards, and hijacked inboxes. Learn the five-second inspection that exposes them.",
  alternates: { canonical: "https://tech.loanpaylogic.com/email-scams-to-avoid" },
  openGraph: {
    type: "article",
    url: "https://tech.loanpaylogic.com/email-scams-to-avoid",
    siteName: "LoanPay Tech",
    title: "Email Scams to Avoid: 9 Red Flags & What to Do",
    description:
      "Spot phishing before it costs you. These 9 email scams to avoid cover fake banks, gift cards, and hijacked inboxes. Learn the five-second inspection that exposes them.",
  },
  twitter: {
    card: "summary",
    title: "Email Scams to Avoid: 9 Red Flags & What to Do",
    description:
      "Spot phishing before it costs you. These 9 email scams to avoid cover fake banks, gift cards, and hijacked inboxes. Learn the five-second inspection that exposes them.",
  },
};

const faqs = [
  {
    q: "How can I tell if an email is really from my bank?",
    a: "Assume it is not until proven otherwise: banks never ask for passwords, PINs, or verification codes by email, and legitimate alerts always appear when you sign in directly via the official app or typed address. Inspect the sender's actual domain by tapping the name — lookalikes swap letters or add words — and hover links to preview destinations without clicking. When in doubt, call the number on your card and ask whether they sent anything.",
  },
  {
    q: "What should I do if I clicked a phishing link?",
    a: "Disconnect first: close the tab without entering anything, and if you downloaded a file, do not open it — delete it and run a full antivirus scan. If you entered credentials, change that password immediately from a clean device along with anywhere it was reused, turn on two-factor authentication, and watch statements for weeks. Report the message as phishing in Gmail, then forward it to your country's reporting address.",
  },
  {
    q: "Why do scammers always demand gift cards or wire transfers?",
    a: "Because those payments are irreversible and nearly untraceable — gift card codes spent in minutes, wires gone same-day, crypto laundered instantly — unlike credit cards with fraud reversal. No legitimate organization, government agency, or tech company accepts gift cards as payment, ever. Any message steering you toward gift cards, crypto ATMs, or payment apps for an official matter is a scam by that fact alone.",
  },
  {
    q: "What is the boss-text gift card scam and how do I stop it?",
    a: "Attackers spoof your executive's name or hijack a thread, manufacture urgency around a surprise or client gift, and request gift card photos — exploiting obedience and haste, often from a lookalike personal address. Defeat it with a verification rule: any unusual money or credential request gets confirmed through a second channel, a call or in-person check, before action. Organizations should publish this rule so juniors can verify without fear.",
  },
  {
    q: "Someone is emailing from my friend's real account asking for money — legit?",
    a: "Almost certainly their account is compromised: hijacked inboxes blasting urgent money pleas to contacts is a classic pattern. Contact the friend through a different channel — call or text their known number — and do not reply, click, or send anything. Tell them to recover the account with our hacked-account recovery guide, and warn mutual contacts so nobody else pays.",
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <article className="prose-tech py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="mono text-xs text-[#7d8f85]">~/guides ./email-scams-to-avoid --verify-sender</p>
      <div className="flex flex-wrap gap-2">
        <span className="badge">difficulty: awareness</span>
        <span className="badge">time: ~25 min read</span>
        <span className="badge">saves: your savings</span>
      </div>
      <h1>Email Scams to Avoid: 9 Red Flags &amp; What to Do</h1>
      <p className="mono text-sm text-[#34f27b]"><span className="prompt-dollar">inspect --sender-domain --urgency --payment-method</span></p>
      <p>
        The email scams to avoid in 2026 share one engine: manufactured urgency
        plus a spoofed identity, engineered to make you act before you think.
        Fake bank lockouts, boss-text gift cards, parcel redelivery fees,
        hijacked friends begging for bail money — each arrives dressed as
        someone you trust, demands action within hours, and steers toward
        irreversible payment. This guide dissects nine live patterns, teaches
        the five-second inspection that exposes all of them, and gives you the
        exact response playbook for the moment one lands in your inbox.
      </p>
      <p>
        Keep perspective while reading: scams succeed against smart busy people,
        not only the naive — attackers exploit distraction, authority, and
        kindness at scale, sending millions of attempts so the few successes pay
        enormously. Your defense is procedural, not intellectual: verify
        through second channels, never pay under pressure, and treat every
        unexpected credential or payment request as hostile until proven
        otherwise. Pair this with our{" "}
        <Link href="/two-factor-auth-setup-guide">2FA guide</Link> and{" "}
        <Link href="/password-manager-guide">password manager guide</Link>, and
        keep our <Link href="/recover-hacked-accounts-guide">account recovery
        guide</Link> bookmarked for emergencies.
      </p>
      <div className="term-card-static my-6 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" /><span className="dot bg-[#febc2e]" /><span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">five_second_inspection.sh</span>
        </div>
        <ol className="space-y-3 p-5">
          <li><span className="step-num">01</span>Expand the sender: is the actual domain the organization&apos;s real one?</li>
          <li><span className="step-num">02</span>Hover links (don&apos;t click): does the destination match the claimed site?</li>
          <li><span className="step-num">03</span>Clock the pressure: threats, countdowns, secrecy = manipulation signature</li>
          <li><span className="step-num">04</span>Check the payment: gift cards, wires, crypto = scam, full stop</li>
          <li><span className="step-num">05</span>Verify sideways: open the app yourself or call the official number</li>
        </ol>
      </div>

      <h2>What do the most common email scams look like?</h2>
      <p>
        Learn these nine by their scripts and you will recognize variants
        forever. The bank-lockout phish warns of suspension and links to a
        pixel-perfect login harvester. The parcel-fee scam exploits real
        delivery expectations with a small &quot;customs&quot; charge that
        harvests card numbers. The boss-text scheme (detailed in the FAQ)
        converts authority into gift cards. The hijacked-friend plea borrows a
        real identity for urgent money. Invoice fraud swaps payment details on
        real-looking bills — verify any changed bank instructions by phone.
        Tech-support popups and callback scams route you to fake agents who
        &quot;refund&quot; overpayments into emptying your account.
      </p>
      <p>
        Three more round out the set: job and task scams (fake recruiters
        paying in advance with bouncing checks while you forward real money),
        romance and crisis scams (months of grooming ending in one urgent
        wire), and sextortion bluffs (old leaked passwords quoted as hacking
        proof demanding crypto). Different costumes, identical skeleton —
        urgency, secrecy, irreversible payment. The response to all nine is the
        same: stop, verify sideways, report, delete.
      </p>

      <h2>How do I verify a suspicious message safely?</h2>
      <p>
        Verification means reaching the organization through a channel the
        message did not provide. For banks and services, type the address
        yourself or open the official app and check alerts there — real notices
        always appear in-account. For people, call their known number or start
        a fresh thread to an address you already trust; never reply inside the
        suspicious thread, since hijacked accounts intercept replies. For
        deliveries, paste tracking numbers into the carrier&apos;s official
        site rather than tapping message links. For invoices with new payment
        details, phone a known contact at the vendor — email confirmation of
        email instructions proves nothing.
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="data-table">
          <thead><tr><th>Scam pattern</th><th>Signature tell</th><th>Correct response</th></tr></thead>
          <tbody>
            <tr><td>Bank lockout phish</td><td>Login link + urgency + lookalike domain</td><td>Check in-app; report phishing; delete</td></tr>
            <tr><td>Parcel fee / customs</td><td>Small charge + link for expected package</td><td>Verify on carrier site with tracking no.</td></tr>
            <tr><td>Boss gift cards</td><td>Authority + secrecy + card photos</td><td>Second-channel verify; published org rule</td></tr>
            <tr><td>Hijacked friend</td><td>Real name, odd tone, urgent money</td><td>Call their known number; alert them</td></tr>
            <tr><td>Invoice redirect</td><td>Changed bank details by email</td><td>Phone known vendor contact before paying</td></tr>
            <tr><td>Refund / tech support</td><td>Callback number + remote access</td><td>Hang up; call official support yourself</td></tr>
          </tbody>
        </table>
      </div>

      <h2>What do I do after encountering a scam?</h2>
      <p>
        Triage in this order: if you paid, call your bank&apos;s fraud line
        immediately — card payments can sometimes be reversed within hours,
        wires and gift cards almost never. If you shared credentials, reset
        them from a clean device per the FAQ and enable 2FA everywhere the
        password was reused. If you granted remote access, disconnect, revoke
        the session, and scan thoroughly. Then report: mark phishing in Gmail
        (which protects others via filters), forward to national reporting
        addresses, and file with the FTC at ReportFraud.ftc.gov for US readers.
        Finally, tell the impersonated person or organization — hijack victims
        usually learn from contacts, not from their inbox.
      </p>
      <p>
        Harden the household afterward: organize alerts so real ones stand out
        (our <Link href="/gmail-organization-tips">Gmail guide</Link>), brief
        elderly relatives with the gift-card rule since they are disproportionately
        targeted, and rehearse the second-channel habit until it is reflex.
        Authoritative references: the FTC&apos;s{" "}
        <a href="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" rel="noopener">
          phishing recognition guide
        </a>{" "}
        and CISA&apos;s{" "}
        <a href="https://www.cisa.gov/secure-our-world/recognize-report-phishing" rel="noopener">
          recognize-and-report phishing guidance
        </a>
        . Continue from the <Link href="/">homepage hub</Link>.
      </p>

      <h2>Email scam FAQ</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p className="faq-body">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mono text-xs text-[#7d8f85]">
        Updated: October 2026 · Sources: FTC consumer phishing guidance; CISA
        recognize-and-report phishing guidance; scam pattern analysis from federal
        consumer-complaint reporting trends.
      </p>
    </article>
  );
}
