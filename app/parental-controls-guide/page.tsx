import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parental Controls Guide: iPhone, Android & More",
  description:
    "Keep kids safe on every screen. This parental controls guide sets up filters, limits, and Family Link/Screen Time. Build all four protection layers in about an hour.",
  alternates: { canonical: "https://tech.loanpaylogic.com/parental-controls-guide" },
  openGraph: {
    type: "article",
    url: "https://tech.loanpaylogic.com/parental-controls-guide",
    siteName: "LoanPay Tech",
    title: "Parental Controls Guide: iPhone, Android & More",
    description:
      "Keep kids safe on every screen. This parental controls guide sets up filters, limits, and Family Link/Screen Time. Build all four protection layers in about an hour.",
  },
  twitter: {
    card: "summary",
    title: "Parental Controls Guide: iPhone, Android & More",
    description:
      "Keep kids safe on every screen. This parental controls guide sets up filters, limits, and Family Link/Screen Time. Build all four protection layers in about an hour.",
  },
};

const faqs = [
  {
    q: "What age should kids get their first phone or tablet?",
    a: "There is no magic age — readiness shows in responsibility with shared devices, understanding of online risks, and agreement to supervision rules beforehand. Many families start with a supervised tablet around 8 to 10 and a limited phone around 11 to 13 tied to the walk-to-school need. Whatever the age, the controls in this guide should be configured before the device is handed over, not after the first incident.",
  },
  {
    q: "Can kids bypass Screen Time and Family Link restrictions?",
    a: "Determined teenagers defeat almost any control eventually — clock changes, VPN apps, factory resets, and borrowed devices are all documented workarounds. Treat controls as guardrails that stop accidents and add friction, not as vaults, and layer them with the ongoing conversations that actually shape behavior. Check restriction settings monthly and keep the parent device's own PIN and account secure.",
  },
  {
    q: "How do I block inappropriate content on YouTube for kids?",
    a: "Put young children in the dedicated YouTube Kids app with an age profile rather than filtering main YouTube, and use supervised accounts with content settings for older kids graduating upward. Disable search in the youngest profiles, turn on the app timer, and keep viewing in shared rooms where glances catch problems filters miss. No filter is perfect — approve channels actively for under-8s.",
  },
  {
    q: "Should I read my child's messages and monitor everything?",
    a: "Calibrate to age: young children warrant full visibility with their knowledge, while teenagers need privacy with spot-checks tied to agreed rules and warning signs. Announce the arrangement upfront — secret surveillance that is discovered destroys the trust that protects them more than any filter. Focus monitoring on new contacts, money requests, and secrecy spikes rather than reading every meme.",
  },
  {
    q: "How do I set consistent limits across phone, TV, and gaming?",
    a: "Anchor on bedtime and total recreational hours rather than per-device rules that kids arbitrage: one bedtime device curfew with charging outside bedrooms, downtime windows enforced by each platform's tools, and earned flexibility for homework devices. Use router-level pauses for Wi-Fi devices as the backstop, and hold a monthly family review where good behavior visibly earns expanded privileges.",
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
      <p className="mono text-xs text-[#7d8f85]">~/guides ./parental-controls-guide --family-policy</p>
      <div className="flex flex-wrap gap-2">
        <span className="badge">difficulty: easy</span>
        <span className="badge">time: ~1 hour</span>
        <span className="badge">layer: tech + talk</span>
      </div>
      <h1>Parental Controls Guide: iPhone, Android &amp; More</h1>
      <p className="mono text-sm text-[#34f27b]"><span className="prompt-dollar">family init --child-account --filters=on --bedtime=enforced</span></p>
      <p>
        Parental controls work best as a layered system — child accounts at
        the foundation, platform tools (Screen Time, Family Link) in the
        middle, network-level backstops on top, and honest conversation
        holding the whole stack together. No single toggle covers the phone,
        the TV, the game console, and the school Chromebook simultaneously, so
        this parental controls guide builds all four layers in about an hour,
        starting with the account architecture most families skip and suffer
        for later. Controls configured before handover prevent negotiations
        you will lose after.
      </p>
      <p>
        The foundational rule: children get child accounts, never adult
        hand-me-down logins. A child signed into your Apple or Google account
        inherits your payment methods, your email, your browsing history, and
        immunity from every age filter — while a proper child account in your
        family group unlocks ask-to-buy approvals, age-gated stores, activity
        reports, and remote limit changes. Create the family group first
        (Apple Family Sharing or Google Family Link), invite or create the
        child account inside it, and only then set up the device.
      </p>
      <div className="term-card-static my-6 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" /><span className="dot bg-[#febc2e]" /><span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">layers.conf</span>
        </div>
        <div className="mono space-y-2 p-5 text-sm">
          <p><span className="text-[#34f27b]">layer 1 — accounts:</span> child account inside family group, ask-to-buy ON</p>
          <p><span className="text-[#34f27b]">layer 2 — device:</span> Screen Time / Family Link: downtime, app limits, filters</p>
          <p><span className="text-[#34f27b]">layer 3 — network:</span> router pause schedules, safe-search lock, guest Wi-Fi</p>
          <p><span className="text-[#34f27b]">layer 4 — human:</span> written agreement, monthly review, earned privileges</p>
        </div>
      </div>

      <h2>How do I set up iPhone and Android controls?</h2>
      <p>
        On iPhone, open Settings, then Screen Time on the child&apos;s device
        (or manage it from your own via Family Sharing): set Downtime for
        bedtime hours, App Limits for games and social categories, Communication
        Limits for who can reach them, and Content &amp; Privacy Restrictions
        to filter web content, lock app-install age ratings, and require your
        approval for purchases. Protect it all with a Screen Time passcode the
        child never learns — distinct from the device unlock code — and enable
        Share Across Devices so rules follow them to the iPad.
      </p>
      <p>
        On Android, install Google Family Link on your phone, link the
        child&apos;s supervised Google account, and drive everything remotely:
        daily limits, bedtime lockdown, per-app timers, Play Store approval for
        every install, SafeSearch and YouTube restrictions, and location
        sharing for younger kids. Approve or deny app requests from your own
        phone the moment they arrive — fast responses teach that the system is
        attentive rather than decorative. Chromebooks signed into the same
        supervised account inherit web filtering automatically, which covers
        school devices elegantly.
      </p>

      <h2>What about TV, gaming, and the home network?</h2>
      <p>
        Extend the system to shared screens or kids route around phone limits
        effortlessly. On the TV, create dedicated kid profiles in each
        streaming app with age ratings set, PIN-protect purchases and new app
        installs, and prefer YouTube Kids over filtered main YouTube for young
        children (see our <Link href="/smart-tv-setup-guide">TV setup
        guide</Link> for the menus). On consoles, create child sub-accounts
        tied to your family wallet with spending caps, disable voice chat with
        strangers by default, and require approval for friend requests from
        unknown players.
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="data-table">
          <thead><tr><th>Surface</th><th>Primary tool</th><th>Three must-set controls</th></tr></thead>
          <tbody>
            <tr><td>iPhone / iPad</td><td>Screen Time + Family Sharing</td><td>Downtime schedule; ask-to-buy; content age filters</td></tr>
            <tr><td>Android / Chromebook</td><td>Family Link supervised account</td><td>Bedtime lock; per-install approval; SafeSearch</td></tr>
            <tr><td>Smart TV + streaming</td><td>Kid profiles + purchase PIN</td><td>Profile age ratings; YouTube Kids; install PIN</td></tr>
            <tr><td>Game consoles</td><td>Child sub-account + wallet cap</td><td>Stranger chat off; spending limit; play-time alarms</td></tr>
            <tr><td>Home Wi-Fi</td><td>Router pause + guest network</td><td>Bedtime pause schedule; visitor isolation; DNS filtering</td></tr>
          </tbody>
        </table>
      </div>

      <h2>How do conversations make the tech actually work?</h2>
      <p>
        Technology buys time; agreements buy safety. Write a one-page family
        media agreement covering charging outside bedrooms overnight, no
        devices at meals, asking before downloads and purchases, telling a
        parent about scary messages or money requests, and the explicit
        consequence ladder — because rules discovered mid-punishment breed
        resentment while rules signed in advance breed acceptance. Review it
        monthly over something pleasant, loosening limits visibly as trust is
        demonstrated; controls that only ever tighten teach evasion, while
        earned freedom teaches judgment. Teach the scam patterns from our{" "}
        <Link href="/email-scams-to-avoid">scam guide</Link> at age-appropriate
        depth — gaming-item scams and free-currency lures target kids daily.
      </p>
      <p>
        Keep the parent side secure too: your family-manager account needs the
        unique password and 2FA from our{" "}
        <Link href="/password-manager-guide">password manager guide</Link> and{" "}
        <Link href="/two-factor-auth-setup-guide">2FA guide</Link>, since
        whoever holds the parent account holds every control. Official
        references: Apple&apos;s{" "}
        <a href="https://support.apple.com/en-us/108806" rel="noopener">
          parental controls and Screen Time guide
        </a>{" "}
        and Google&apos;s{" "}
        <a href="https://support.google.com/families/answer/7103418" rel="noopener">
          Family Link help center
        </a>
        . All family-tech roads meet at the <Link href="/">homepage hub</Link>.
      </p>

      <h2>Parental controls FAQ</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p className="faq-body">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mono text-xs text-[#7d8f85]">
        Updated: October 2026 · Sources: Apple Support (Screen Time and families);
        Google Family Link Help; settings paths verified on current iOS and
        Android releases.
      </p>
    </article>
  );
}
