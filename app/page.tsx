import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoanPay Tech: Practical How-To Tech Guides",
  description:
    "Fix Wi-Fi, secure accounts, speed up devices, and buy smart. Browse 25 step-by-step tech guides that work. Tested paths and honest buying advice.",
  alternates: { canonical: "https://tech.loanpaylogic.com" },
  openGraph: {
    type: "website",
    url: "https://tech.loanpaylogic.com",
    siteName: "LoanPay Tech",
    title: "LoanPay Tech: Practical How-To Tech Guides",
    description:
      "Fix Wi-Fi, secure accounts, speed up devices, and buy smart. Browse 25 step-by-step tech guides that work. Tested paths and honest buying advice.",
  },
  twitter: {
    card: "summary",
    title: "LoanPay Tech: Practical How-To Tech Guides",
    description:
      "Fix Wi-Fi, secure accounts, speed up devices, and buy smart. Browse 25 step-by-step tech guides that work. Tested paths and honest buying advice.",
  },
};

type Card = { href: string; cmd: string; title: string; desc: string };

const GROUPS: { id: string; label: string; comment: string; cards: Card[] }[] = [
  {
    id: "security",
    label: "Security & Privacy",
    comment: "// lock it down first — 7 guides",
    cards: [
      { href: "/password-manager-guide", cmd: "./passwords", title: "Password Manager Guide", desc: "Unique passwords everywhere in 20 minutes — setup, picks, and habits." },
      { href: "/two-factor-auth-setup-guide", cmd: "./2fa", title: "Two-Factor Auth Setup", desc: "Authenticator apps, backup codes, and security keys done right." },
      { href: "/backup-guide-3-2-1", cmd: "./backups", title: "3-2-1 Backup Guide", desc: "Three copies, two media, one off-site — never lose files again." },
      { href: "/vpn-explained-guide", cmd: "./vpn", title: "VPN Explained", desc: "What VPNs actually do, when you need one, how to choose." },
      { href: "/do-you-need-antivirus", cmd: "./antivirus?", title: "Do You Need Antivirus?", desc: "Honest 2026 answer for Windows, Mac, and phones." },
      { href: "/email-scams-to-avoid", cmd: "./scams", title: "Email Scams to Avoid", desc: "Nine live phishing patterns and the 5-second inspection." },
      { href: "/recover-hacked-accounts-guide", cmd: "./recovery", title: "Recover Hacked Accounts", desc: "Emergency playbook for Gmail, Apple, Microsoft, and social." },
    ],
  },
  {
    id: "phones-computers",
    label: "Phones & Computers",
    comment: "// speed up the daily drivers — 7 guides",
    cards: [
      { href: "/wifi-troubleshooting-guide", cmd: "./wifi-fix", title: "Wi-Fi Troubleshooting", desc: "Diagnose drops and dead zones in order — most fixed free." },
      { href: "/speed-up-slow-computer", cmd: "./speedup", title: "Speed Up a Slow Computer", desc: "Find the bottleneck in 2 minutes, fix it in 40." },
      { href: "/free-up-phone-storage", cmd: "./storage", title: "Free Up Phone Storage", desc: "Reclaim 10–30 GB on iPhone and Android, zero data loss." },
      { href: "/extend-phone-battery-guide", cmd: "./battery", title: "Extend Phone Battery Life", desc: "Twelve settings that add real hours, plus charging habits." },
      { href: "/screenshot-guide-all-devices", cmd: "./screenshot", title: "Screenshot Any Device", desc: "Button combos, scrolling shots, and blur-free sharing." },
      { href: "/gmail-organization-tips", cmd: "./gmail", title: "Gmail Organization Tips", desc: "Labels, filters, and the 10-minute inbox-zero routine." },
      { href: "/google-drive-basics", cmd: "./drive", title: "Google Drive Basics", desc: "Store, share safely, and find anything with search." },
    ],
  },
  {
    id: "home-tech",
    label: "Home Tech",
    comment: "// rooms, calls, and the office — 7 guides",
    cards: [
      { href: "/video-call-setup-guide", cmd: "./video-call", title: "Video Call Setup", desc: "Audio first, lighting second — look and sound pro." },
      { href: "/printer-troubleshooting-guide", cmd: "./printer", title: "Printer Troubleshooting", desc: "Offline errors, jams, and faded prints fixed in order." },
      { href: "/smart-tv-setup-guide", cmd: "./smart-tv", title: "Smart TV Setup", desc: "Filmmaker mode, dialogue audio, apps, and privacy." },
      { href: "/bluetooth-pairing-fix", cmd: "./bluetooth", title: "Bluetooth Pairing Fix", desc: "Earbuds, cars, PCs, and TVs connected without tears." },
      { href: "/parental-controls-guide", cmd: "./family", title: "Parental Controls Guide", desc: "Four layers across phone, TV, gaming, and network." },
      { href: "/home-office-tech-setup", cmd: "./home-office", title: "Home Office Tech Setup", desc: "Ergonomics, network redundancy, and pro call presence." },
      { href: "/browser-privacy-settings-guide", cmd: "./browser", title: "Browser Privacy Settings", desc: "Harden Chrome, Safari, Edge, and Firefox in 30 minutes." },
    ],
  },
  {
    id: "buying",
    label: "Buying Guides",
    comment: "// spend once, cry never — 4 guides",
    cards: [
      { href: "/cutting-cable-streaming-guide-2026", cmd: "./cord-cut", title: "Cutting Cable in 2026", desc: "Antennas, rotation strategy, and the sports problem solved." },
      { href: "/robot-vacuum-buying-guide", cmd: "./robovac", title: "Robot Vacuum Buying Guide", desc: "Seven scored features — navigation first, gimmicks last." },
      { href: "/earbuds-buying-guide", cmd: "./earbuds", title: "Earbuds Buying Guide", desc: "Fit, ANC, calls, and battery — the audition protocol." },
      { href: "/cloud-storage-compared", cmd: "./cloud", title: "Cloud Storage Compared", desc: "Google vs iCloud vs OneDrive vs Dropbox, as of Oct 2026." },
    ],
  },
];

export default function Home() {
  return (
    <div className="py-10">
      <section className="term-card-static overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" />
          <span className="dot bg-[#febc2e]" />
          <span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">loanpay-tech --mission</span>
        </div>
        <div className="p-6 md:p-10">
          <p className="mono text-xs text-[#7d8f85]">tech.loanpaylogic.com · 25 guides · updated oct 2026</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-[#eef7f1] md:text-5xl">
            Fix it, secure it, speed it up — <span className="neon-text">step by step.</span>
          </h1>
          <p className="mono mt-4 max-w-2xl text-sm leading-relaxed text-[#c3d2c8]">
            <span className="prompt-dollar">whoami</span> — practical how-to technology guides, tested on real
            devices against real menus. No jargon, no filler, no &quot;have you
            tried turning it off&quot; condescension. Pick your problem below.
          </p>
          <div className="mono mt-6 flex flex-wrap gap-2 text-xs">
            <span className="badge">25 step-by-step guides</span>
            <span className="badge">tested menu paths</span>
            <span className="badge">faq + tables + checklists</span>
          </div>
        </div>
      </section>

      {GROUPS.map((g) => (
        <section key={g.id} className="mt-12" aria-label={g.label}>
          <div className="mb-4 flex items-baseline gap-3">
            <h2 className="text-xl font-extrabold tracking-tight text-[#eef7f1] md:text-2xl">{g.label}</h2>
            <span className="mono text-xs text-[#7d8f85]">{g.comment}</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.cards.map((c) => (
              <Link key={c.href} href={c.href} className="hub-card">
                <p className="mono text-xs text-[#34f27b]">{c.cmd}</p>
                <p className="hub-title mt-2 font-bold text-[#eef7f1]">{c.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#7d8f85]">{c.desc}</p>
                <p className="mono mt-3 text-xs text-[#1fae55]">open guide →</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="term-card-static mt-12 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" />
          <span className="dot bg-[#febc2e]" />
          <span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">start_here.sh --recommended-order</span>
        </div>
        <div className="mono space-y-2 p-5 text-sm">
          <p><span className="text-[#34f27b]">new here?</span> <Link className="cmd-link" href="/password-manager-guide">passwords</Link> → <Link className="cmd-link" href="/two-factor-auth-setup-guide">2fa</Link> → <Link className="cmd-link" href="/backup-guide-3-2-1">backups</Link> — the security trinity, one evening.</p>
          <p><span className="text-[#34f27b]">something broken?</span> <Link className="cmd-link" href="/wifi-troubleshooting-guide">wifi</Link> · <Link className="cmd-link" href="/speed-up-slow-computer">slow pc</Link> · <Link className="cmd-link" href="/printer-troubleshooting-guide">printer</Link> · <Link className="cmd-link" href="/bluetooth-pairing-fix">bluetooth</Link></p>
          <p><span className="text-[#34f27b]">about us?</span> <Link className="cmd-link" href="/about">team + method</Link> · <Link className="cmd-link" href="/contact">contact</Link> · <Link className="cmd-link" href="/privacy-policy">privacy</Link></p>
        </div>
      </section>
    </div>
  );
}
