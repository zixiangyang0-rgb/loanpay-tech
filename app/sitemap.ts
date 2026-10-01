import type { MetadataRoute } from "next";

const BASE = "https://tech.loanpaylogic.com";

const ROUTES = [
  "",
  "/wifi-troubleshooting-guide",
  "/speed-up-slow-computer",
  "/password-manager-guide",
  "/two-factor-auth-setup-guide",
  "/backup-guide-3-2-1",
  "/vpn-explained-guide",
  "/do-you-need-antivirus",
  "/free-up-phone-storage",
  "/extend-phone-battery-guide",
  "/screenshot-guide-all-devices",
  "/video-call-setup-guide",
  "/printer-troubleshooting-guide",
  "/smart-tv-setup-guide",
  "/bluetooth-pairing-fix",
  "/gmail-organization-tips",
  "/google-drive-basics",
  "/cutting-cable-streaming-guide-2026",
  "/robot-vacuum-buying-guide",
  "/earbuds-buying-guide",
  "/email-scams-to-avoid",
  "/recover-hacked-accounts-guide",
  "/parental-controls-guide",
  "/home-office-tech-setup",
  "/cloud-storage-compared",
  "/browser-privacy-settings-guide",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date("2026-10-01"),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r.startsWith("/about") || r.startsWith("/contact") || r.startsWith("/privacy") || r.startsWith("/terms") || r.startsWith("/disclaimer") ? 0.4 : 0.8,
  }));
}
