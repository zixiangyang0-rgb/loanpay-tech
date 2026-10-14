import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tech.loanpaylogic.com"),
  title: {
    default: "LoanPay Tech — Practical How-To Tech Guides",
    template: "%s | LoanPay Tech",
  },
  description:
    "Step-by-step tech guides: Wi-Fi fixes, security, phones, smart home and buying advice. Browse all 25 tested how-to guides today.",
  alternates: { canonical: "https://tech.loanpaylogic.com" },
  openGraph: {
    type: "website",
    url: "https://tech.loanpaylogic.com",
    siteName: "LoanPay Tech",
    title: "LoanPay Tech — Practical How-To Tech Guides",
    description:
      "Step-by-step tech guides: Wi-Fi fixes, security, phones, smart home and buying advice. Browse all 25 tested how-to guides today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Tech — Practical How-To Tech Guides",
    description:
      "Step-by-step tech guides: Wi-Fi fixes, security, phones, smart home and buying advice. Browse all 25 tested how-to guides today.",
  },
  robots: { index: true, follow: true },
  other: {
    "google-adsense-account": "ca-pub-4906207495792820",
  },
};

const NAV = [
  { href: "/wifi-troubleshooting-guide", label: "wifi-fix" },
  { href: "/password-manager-guide", label: "passwords" },
  { href: "/backup-guide-3-2-1", label: "backups" },
  { href: "/free-up-phone-storage", label: "phone-storage" },
  { href: "/gmail-organization-tips", label: "gmail" },
  { href: "/cloud-storage-compared", label: "cloud" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="scanlines min-h-screen">
        <div className="grid-bg pointer-events-none fixed inset-0" aria-hidden="true" />
        <header className="relative border-b border-[#1c2b21] bg-[#080c09]/95">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="mono inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#34f27b]/60 bg-[#0b100d] text-lg font-bold text-[#34f27b] shadow-[0_0_18px_rgba(52,242,123,0.35)]">
                &gt;_
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-extrabold tracking-tight text-[#eef7f1]">
                  LoanPay <span className="neon-text">Tech</span>
                </span>
                <span className="mono block text-[0.68rem] text-[#7d8f85]">
                  ./run practical-howto --verbose
                </span>
              </span>
            </Link>
            <nav aria-label="Primary" className="ml-auto flex flex-wrap items-center gap-1">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="nav-cmd">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="relative mx-auto w-full max-w-6xl px-4">{children}</main>
        <footer className="relative mt-16 border-t border-[#1c2b21] bg-[#080c09]">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
            <div>
              <p className="mono text-sm font-bold text-[#34f27b]">
                <span className="prompt-dollar">LoanPay Tech</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#7d8f85]">
                Plain-English, step-by-step technology guides. Fix it, secure
                it, speed it up — no jargon required.
              </p>
            </div>
            <nav aria-label="Guides" className="text-sm">
              <p className="mono mb-3 text-xs uppercase tracking-widest text-[#7d8f85]">
                // top_guides
              </p>
              <ul className="space-y-2">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="cmd-link text-sm">
                      ./{n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Legal" className="text-sm">
              <p className="mono mb-3 text-xs uppercase tracking-widest text-[#7d8f85]">
                // legal
              </p>
              <ul className="space-y-2">
                <li><Link href="/about" className="cmd-link text-sm">./about</Link></li>
                <li><Link href="/contact" className="cmd-link text-sm">./contact</Link></li>
                <li><Link href="/privacy-policy" className="cmd-link text-sm">./privacy-policy</Link></li>
                <li><Link href="/terms-of-service" className="cmd-link text-sm">./terms-of-service</Link></li>
                <li><Link href="/disclaimer" className="cmd-link text-sm">./disclaimer</Link></li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-[#1c2b21]">
            <p className="mono mx-auto max-w-6xl px-4 py-4 text-xs text-[#7d8f85]">
              © 2026 LoanPay Tech · tech.loanpaylogic.com ·{" "}
              <span className="text-[#34f27b]">status: all systems nominal</span> · network:{" "}
              <a href="https://loanpaylogic.com" className="underline text-[#34f27b]">loanpaylogic.com</a> ·{" "}
              <a href="https://career.loanpaylogic.com" className="underline">career</a> ·{" "}
              <a href="https://home.loanpaylogic.com" className="underline">home</a> ·{" "}
              <a href="https://business.loanpaylogic.com" className="underline">business</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
