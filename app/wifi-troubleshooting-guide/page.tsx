import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wi-Fi Troubleshooting Guide: Fix Slow Drops Fast",
  description:
    "Wi-Fi dropping or crawling? This troubleshooting guide walks you through proven fixes for dead zones and slow speeds on any router. Begin troubleshooting today.",
  alternates: { canonical: "https://tech.loanpaylogic.com/wifi-troubleshooting-guide" },
  openGraph: {
    type: "article",
    url: "https://tech.loanpaylogic.com/wifi-troubleshooting-guide",
    siteName: "LoanPay Tech",
    title: "Wi-Fi Troubleshooting Guide: Fix Slow Drops Fast",
    description:
      "Wi-Fi dropping or crawling? This troubleshooting guide walks you through proven fixes for dead zones and slow speeds on any router. Begin troubleshooting today.",
  },
  twitter: {
    card: "summary",
    title: "Wi-Fi Troubleshooting Guide: Fix Slow Drops Fast",
    description:
      "Wi-Fi dropping or crawling? This troubleshooting guide walks you through proven fixes for dead zones and slow speeds on any router. Begin troubleshooting today.",
  },
};

const faqs = [
  {
    q: "Why does my Wi-Fi keep disconnecting on my phone but not my laptop?",
    a: "This usually means the phone is clinging to a weak 5 GHz signal or hopping between your router and an extender with the same network name. On the phone, tap Forget on the network and rejoin it, then turn off any VPN or private-DNS app temporarily. If it persists, split your router's 2.4 GHz and 5 GHz bands into separate names in the router admin page and connect the phone to the 5 GHz name when nearby or the 2.4 GHz name farther away.",
  },
  {
    q: "How do I know if the problem is my Wi-Fi or my internet provider?",
    a: "Plug a laptop directly into the router with an Ethernet cable and run a speed test. If wired speeds match your plan but wireless is far slower, your Wi-Fi is the problem. If wired speeds are also bad at multiple times of day, call your provider — check their outage page first, then ask them to check signal levels to your modem before you buy any new gear.",
  },
  {
    q: "Does restarting my router actually fix slow Wi-Fi?",
    a: "Yes, surprisingly often. A reboot clears memory leaks in the router firmware, drops stale device sessions, and forces a fresh channel selection, which resolves transient slowdowns in about two minutes. Unplug the power for a full 30 seconds rather than pressing a reset pinhole — the pinhole usually factory-resets and erases your settings. If you must reboot weekly, the router is likely failing and should be replaced.",
  },
  {
    q: "Should I use 2.4 GHz or 5 GHz Wi-Fi in my house?",
    a: "Use 5 GHz when you are in the same room as the router or one room away — it is much faster. Use 2.4 GHz for far rooms, the backyard, and smart-home gadgets, because it travels through walls far better. Most modern routers offer a single combined name and steer devices automatically; only split the bands into separate names if a specific device keeps connecting to the wrong one.",
  },
  {
    q: "Will a Wi-Fi extender or mesh system fix my dead zones?",
    a: "A mesh system usually will; a cheap plug-in extender often just moves the problem. Extenders halve your speed because they retransmit everything on the same channel, while mesh nodes use a dedicated backhaul band. For homes over roughly 1,500 square feet or with two-plus dead rooms, a two- or three-node mesh kit is the reliable fix — place nodes halfway between the router and the dead zone, not inside it.",
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
      <p className="mono text-xs text-[#7d8f85]">~/guides ./wifi-troubleshooting-guide --verbose</p>
      <div className="flex flex-wrap gap-2">
        <span className="badge">difficulty: easy</span>
        <span className="badge">time: ~25 min</span>
        <span className="badge">tools: none</span>
      </div>
      <h1>Wi-Fi Troubleshooting Guide: Fix Slow Drops Fast</h1>
      <p className="mono text-sm text-[#34f27b]"><span className="prompt-dollar">diagnose wifi --slow --drops</span></p>
      <p>
        Wi-Fi troubleshooting follows a strict order, and skipping it is why most
        people waste money on gear they do not need. Roughly half of all
        &quot;slow internet&quot; complaints are actually Wi-Fi problems inside
        the home — congestion, placement, or settings — while the connection from
        the provider is fine. This Wi-Fi troubleshooting guide walks you through
        the exact sequence professionals use: isolate whether the fault is your
        Wi-Fi or your provider, apply the two-minute fixes first, then work
        outward to placement, settings, and finally hardware upgrades only if
        the evidence points there.
      </p>
      <p>
        Before touching anything, run one baseline test. Stand next to your
        router with your phone, run a speed test, and write down the number.
        Then run the same test from the room where things feel broken. If the
        two numbers are close and both bad, suspect the provider or modem. If
        the near-router number is healthy and the far-room number collapses, you
        have a Wi-Fi coverage problem — and everything below will fix it without
        a single call to support. Keep those two numbers handy; you will
        re-test after each change so you know what actually helped.
      </p>
      <div className="term-card-static my-6 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" /><span className="dot bg-[#febc2e]" /><span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">quick_diagnosis.sh</span>
        </div>
        <div className="mono space-y-2 p-5 text-sm">
          <p><span className="text-[#34f27b]">near-router speed</span> matches plan → Wi-Fi is the suspect, keep reading</p>
          <p><span className="text-[#34f27b]">all speeds bad, wired too</span> → provider/modem issue, check outage page</p>
          <p><span className="text-[#34f27b]">one device only</span> → that device&apos;s settings, not your network</p>
          <p><span className="text-[#34f27b]">slow every evening 7–11pm</span> → congestion or oversold neighborhood node</p>
        </div>
      </div>

      <h2>Why is my Wi-Fi slow even though I pay for fast internet?</h2>
      <p>
        The speed you pay for is measured at the modem; the speed you feel is
        measured through walls, interference, and an overloaded router CPU. The
        three most common culprits are a router stuffed in a cabinet or behind
        the TV, a congested Wi-Fi channel in an apartment building where twenty
        neighbors fight over the same airwaves, and a router that is simply too
        old to route modern speeds — many 2016-era units top out around 100 Mbps
        over Wi-Fi no matter what plan feeds them. There is also the quiet killer:
        twenty-plus connected gadgets (bulbs, cameras, speakers) chattering on
        the 2.4 GHz band and dragging down everything else.
      </p>
      <p>
        Work through the fixes below in order and re-test after each one. Stop
        as soon as your far-room number looks healthy; there is no prize for
        applying all of them. And note what this guide assumes: you can log into
        your router&apos;s admin page (the address is usually printed on its
        label, commonly 192.168.1.1 or 192.168.0.1) and you know its admin
        password. If your provider locked the router down, some advanced steps
        may be unavailable — call them and ask for the specific change by name.
      </p>

      <h2>How do I restart everything in the right order?</h2>
      <p>
        Order matters because each device depends on the one below it. Restarting
        the router while the modem is still confused just reconnects you to the
        same broken session. The full power-cycle takes about five minutes and
        resolves a remarkable share of complaints, so always do this before
        changing settings — otherwise you will never know which action actually
        fixed things, and you will have changed settings for nothing.
      </p>
      <div className="term-card-static my-6 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" /><span className="dot bg-[#febc2e]" /><span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">power_cycle.sh --strict-order</span>
        </div>
        <ol className="space-y-4 p-5">
          <li><span className="step-num">01</span>Unplug the modem&apos;s power cable (and remove its battery backup if it has one). Wait until every light is dark.</li>
          <li><span className="step-num">02</span>Unplug the router&apos;s power cable too. If you have mesh nodes or extenders, unplug those as well.</li>
          <li><span className="step-num">03</span>Wait a full 60 seconds. This lets the provider&apos;s equipment release your stale session — a quick 5-second flicker does not.</li>
          <li><span className="step-num">04</span>Plug the modem back in first and wait until its online light goes solid (2–3 minutes). Do not rush this.</li>
          <li><span className="step-num">05</span>Plug the router back in, wait two minutes, then power up mesh nodes one at a time from nearest to farthest.</li>
          <li><span className="step-num">06</span>Re-run your two speed tests. If the far-room number recovered, you are done — bookmark this page for next time.</li>
        </ol>
      </div>

      <h2>Where should my router actually sit in the house?</h2>
      <p>
        Wi-Fi radiates outward and downward from the antennas, and every wall it
        crosses costs speed — especially brick, concrete, mirrors, and fish
        tanks, which are nearly opaque to radio signals. The ideal spot is
        central in the home, elevated to chest height or higher on a shelf, out
        in the open with antennas vertical, and far from the microwave, baby
        monitor, and thick TV. The worst common spot is the corner of the living
        room inside a media cabinet, which is where installers tend to leave it
        because the cable outlet is there.
      </p>
      <p>
        If the cable entry forces a bad location, you have two realistic options:
        run a long Ethernet cable from the modem to a better router position
        (flat adhesive cables tuck under baseboards invisibly), or leave the
        router at the entry point and fix coverage with a mesh system described
        below. Do not try to compensate for a bad location with a
        &quot;high-gain&quot; antenna or a signal booster app — neither changes
        the physics of walls. Moving the router six feet into the open
        frequently beats spending any money at all, so try placement before
        purchasing.
      </p>

      <h2>Which settings should I change on the router?</h2>
      <p>
        Three settings deliver most of the available improvement, and all live
        in the router admin page under Wireless or Wi-Fi settings. First, enable
        band steering (sometimes called Smart Connect) so the router assigns each
        device to the right band automatically — but split the bands into two
        names if one stubborn device keeps misbehaving, as described in the FAQ.
        Second, set the 5 GHz channel width to 80 MHz and the 2.4 GHz width to
        20 MHz in crowded areas; wider is not always better when neighbors
        overlap you. Third, turn on automatic firmware updates, or check for
        updates manually every few months — vendors quietly patch performance
        and security bugs this way.
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="data-table">
          <thead><tr><th>Symptom pattern</th><th>Likely cause</th><th>Fix first</th></tr></thead>
          <tbody>
            <tr><td>Slow only in one far room</td><td>Coverage / walls</td><td>Move router; then mesh node halfway to the room</td></tr>
            <tr><td>Slow everywhere, wired is fine</td><td>Congestion or old router</td><td>Change channels; check router age and Wi-Fi standard</td></tr>
            <tr><td>Slow every evening only</td><td>Neighbor congestion or ISP oversubscription</td><td>Channel change; wired test; call ISP with numbers</td></tr>
            <tr><td>One device drops, others fine</td><td>That device&apos;s radio or VPN app</td><td>Forget + rejoin network; disable VPN; update its OS</td></tr>
            <tr><td>Random drops after years of stability</td><td>Failing router or new interference</td><td>Firmware update; factory reset + reconfigure; replace</td></tr>
          </tbody>
        </table>
      </div>

      <h2>When is it time to replace the router?</h2>
      <p>
        Replace the router when the evidence convicts it: it is more than five
        years old, it lacks Wi-Fi 6, it needs weekly reboots, its admin page
        shows no firmware updates in over a year, or your wired speed exceeds
        what it can deliver wirelessly standing right next to it. For most
        homes, a current Wi-Fi 6 or 6E router from an established maker is the
        sweet spot; Wi-Fi 7 is real but commands a premium that only makes sense
        with multi-gigabit internet and brand-new devices. Homes over about
        1,500 square feet, or with dead rooms on another floor, should buy a
        two- or three-node mesh kit instead of a single powerful router — one
        loud radio cannot hear the faint replies coming back through walls.
      </p>
      <p>
        A final caution on rented provider gateways: the combined modem-router
        box your ISP leases you is convenient but usually mediocre at Wi-Fi. You
        can often keep it as a modem and put it in bridge mode, then connect
        your own router or mesh system behind it — search your provider&apos;s
        support pages for &quot;bridge mode&quot; plus your gateway model. The
        monthly rental fee you eliminate by buying your own modem (where
        allowed) frequently pays for the upgrade within a year. For the official
        version of the Windows-side steps referenced here, see{" "}
        <a href="https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9424a1f7-6a3b-65a6-4d78-7a07c4c087d7" rel="noopener">
          Microsoft&apos;s guide to fixing Wi-Fi connection issues in Windows
        </a>
        , and Apple&apos;s{" "}
        <a href="https://support.apple.com/en-us/102665" rel="noopener">
          recommended Wi-Fi settings
        </a>
        . Once your network is stable, lock down the accounts riding on it with
        our <Link href="/password-manager-guide">password manager guide</Link> and{" "}
        <Link href="/two-factor-auth-setup-guide">two-factor setup guide</Link>, and
        if video calls still stutter, our <Link href="/video-call-setup-guide">video
        call setup guide</Link> tunes the rest. Start from the <Link href="/">homepage hub</Link> for the full library.
      </p>

      <h2>Wi-Fi troubleshooting FAQ</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p className="faq-body">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mono text-xs text-[#7d8f85]">
        Updated: October 2026 · Sources: Microsoft Support (Windows network reset and
        Wi-Fi fix documentation); Apple Support (recommended Wi-Fi settings); router
        vendor admin-interface behavior verified against current firmware.
      </p>
    </article>
  );
}
