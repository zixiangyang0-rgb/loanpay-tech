import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "3-2-1 Backup Guide: Never Lose Files Again",
  description:
    "One dead drive shouldn't erase your life. This 3-2-1 backup guide builds automatic, tested protection for all devices. Build your safety net this afternoon.",
  alternates: { canonical: "https://tech.loanpaylogic.com/backup-guide-3-2-1" },
  openGraph: {
    type: "article",
    url: "https://tech.loanpaylogic.com/backup-guide-3-2-1",
    siteName: "LoanPay Tech",
    title: "3-2-1 Backup Guide: Never Lose Files Again",
    description:
      "One dead drive shouldn't erase your life. This 3-2-1 backup guide builds automatic, tested protection for all devices. Build your safety net this afternoon.",
  },
  twitter: {
    card: "summary",
    title: "3-2-1 Backup Guide: Never Lose Files Again",
    description:
      "One dead drive shouldn't erase your life. This 3-2-1 backup guide builds automatic, tested protection for all devices. Build your safety net this afternoon.",
  },
};

const faqs = [
  {
    q: "What exactly is the 3-2-1 backup rule?",
    a: "Keep three copies of important data, on two different types of storage, with one copy off-site. In practice that means your computer's original files, plus a local external-drive backup, plus a cloud backup — so no single event like theft, fire, or ransomware can take everything at once. It survives because the three copies never share one fate.",
  },
  {
    q: "Is syncing to Google Drive or iCloud the same as a backup?",
    a: "No, and the distinction matters: sync mirrors your mistakes everywhere, so a deleted, overwritten, or ransomware-encrypted file syncs its destruction to the cloud within seconds. True backup keeps version history and point-in-time snapshots you can roll back to. Use sync for convenience, but add a real versioned backup service or external-drive history for protection.",
  },
  {
    q: "How often should backups run automatically?",
    a: "Continuously or hourly for active work files, and at minimum daily for everything else — the right frequency is whatever makes the most you could lose an amount you can shrug at. Cloud backup tools default to continuous protection, and external-drive tools like File History or Time Machine default to hourly; leave those defaults alone. Anything you must remember to run manually effectively does not exist.",
  },
  {
    q: "How do I know my backup actually works when I need it?",
    a: "Restore something on purpose twice a year: pick a random folder, restore it to a test location, and open the files to confirm they are intact and current. Also verify you can sign into the backup service from another device, since a backup you cannot access is decoration. Untested backups fail at astonishing rates — usually discovered during the exact emergency they were meant to solve.",
  },
  {
    q: "What should I back up before a factory reset or new computer?",
    a: "Your documents, photos, and videos first, then browser bookmarks and saved passwords via export, then license keys and app settings, and finally a list of installed programs for rebuilding. Run a fresh manual backup to both destinations, verify the newest files are present by date, and only then wipe anything. Keep the old drive untouched for a month after migrating as a final safety net.",
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
      <p className="mono text-xs text-[#7d8f85]">~/guides ./backup-guide-3-2-1 --verify</p>
      <div className="flex flex-wrap gap-2">
        <span className="badge">difficulty: easy</span>
        <span className="badge">time: ~1 afternoon</span>
        <span className="badge">rule: 3-2-1</span>
      </div>
      <h1>3-2-1 Backup Guide: Never Lose Files Again</h1>
      <p className="mono text-sm text-[#34f27b]"><span className="prompt-dollar">backup --copies=3 --media=2 --offsite=1 --test-restore</span></p>
      <p>
        Every unbacked-up file is a file you have already agreed to lose — the
        only question is the date. Drives fail, laptops get stolen, phones meet
        water, ransomware encrypts family photos, and &quot;the cloud&quot;
        turns out to have been mere sync that faithfully mirrored your
        accidental deletion everywhere. This 3-2-1 backup guide builds you a
        protection system that survives all of those in a single afternoon of
        setup plus zero ongoing effort, because the entire design runs
        automatically once configured.
      </p>
      <p>
        The 3-2-1 rule is the industry&apos;s most durable wisdom precisely
        because it is simple: three copies of your important data, on two
        different storage media, with one copy off-site. Each number defeats a
        different catastrophe — the second copy defeats drive failure, the
        second medium defeats whole-device or whole-service failure, and the
        off-site copy defeats theft, fire, and flood. What follows is the
        practical build: what counts as a copy, which media to buy, which
        off-site to choose, and the twice-yearly test that proves it all works.
      </p>
      <div className="term-card-static my-6 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" /><span className="dot bg-[#febc2e]" /><span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">architecture.txt</span>
        </div>
        <div className="mono space-y-2 p-5 text-sm">
          <p><span className="text-[#34f27b]">copy 1:</span> originals on your computer and phone (the working set)</p>
          <p><span className="text-[#34f27b]">copy 2:</span> local external drive — File History (Win) / Time Machine (Mac)</p>
          <p><span className="text-[#34f27b]">copy 3:</span> off-site cloud backup with version history, automatic</p>
          <p><span className="text-[#34f27b]">defeats:</span> drive death ✓ &nbsp;theft/fire ✓ &nbsp;ransomware ✓ &nbsp;oops-delete ✓</p>
        </div>
      </div>

      <h2>What exactly counts as each of the three copies?</h2>
      <p>
        Precision here prevents the most common self-deception: counting the
        same data twice. Copy one is your live originals — the files on your
        computer&apos;s internal drive and the photos on your phone. Copy two
        must be a genuine separate backup on different media, typically an
        external USB hard drive managed by built-in versioned backup software,
        not a drag-and-drop folder you update when you remember. Copy three
        must live somewhere a house fire cannot reach — a cloud backup service
        with file versioning, ideally keeping multiple historical versions so
        encrypted or corrupted files can be rolled back to last week&apos;s
        clean state.
      </p>
      <p>
        What does not count: a second folder on the same drive, a RAID mirror
        in the same box (it mirrors corruption too), or plain cloud sync as
        explained in the FAQ. The test is always the disaster question — name
        the catastrophe each copy survives that the others do not. If two of
        your &quot;copies&quot; die in the same fire, you have one copy wearing
        a disguise. Size your purchases accordingly: a 2 TB external drive
        covers most households, and cloud plans are compared in our{" "}
        <Link href="/cloud-storage-compared">cloud storage comparison</Link>.
      </p>

      <h2>How do I set up the local external-drive backup?</h2>
      <p>
        The local copy is your fast lane: restores in minutes instead of days
        of downloading, and it works with no internet at all. Buy an external
        drive at least twice the size of the data you protect — backup software
        needs room for history — and plug it into a port it can live on
        permanently, since a backup drive sitting in a drawer protects nothing.
        Then switch on the operating system&apos;s built-in tool rather than
        buying software; both are competent, free, and already installed.
      </p>
      <div className="term-card-static my-6 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" /><span className="dot bg-[#febc2e]" /><span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">local_backup.sh --automatic</span>
        </div>
        <ol className="space-y-4 p-5">
          <li><span className="step-num">01</span>Windows: connect the drive → Settings &gt; System &gt; Storage &gt; Advanced storage settings &gt; Backup options → Add a drive → turn on Automatically back up my files.</li>
          <li><span className="step-num">02</span>Mac: connect the drive → System Settings &gt; General &gt; Time Machine → Add Backup Disk → select the drive and turn Time Machine on.</li>
          <li><span className="step-num">03</span>Include check: confirm Documents, Desktop, Photos, and any data folders are covered; exclude only regenerable bulk like game installs.</li>
          <li><span className="step-num">04</span>Let the first full backup finish overnight — it is the big one — then confirm hourly/daily incrementals tick over the next day.</li>
          <li><span className="step-num">05</span>Encrypt the backup drive if offered (File History via BitLocker, Time Machine via Encrypt backups) in case the drive itself is stolen.</li>
        </ol>
      </div>

      <h2>Which off-site cloud backup should I choose?</h2>
      <p>
        The off-site copy guards against the disasters that take the whole
        house: theft, fire, flood, and the burglary bonus where thieves steal
        the backup drive sitting next to the computer. You want a genuine
        backup service — continuous, automatic, with version history and
        point-in-time restore — rather than a sync folder, for the reasons the
        FAQ details. Evaluate candidates on five criteria: version history
        length (30 days minimum, longer better), restore options (single files
        and full rollback), encryption standards, price per terabyte as of
        October 2026 (verify on official sites), and a clear exit path with
        standard export.
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="data-table">
          <thead><tr><th>Approach (as of Oct 2026)</th><th>Effort</th><th>Restore speed</th><th>Survives house disaster?</th></tr></thead>
          <tbody>
            <tr><td>External drive + built-in tool</td><td>One-time setup</td><td>Minutes — fastest</td><td>No — same building</td></tr>
            <tr><td>Dedicated cloud backup service</td><td>Install and forget</td><td>Hours for full restore</td><td>Yes — off-site by design</td></tr>
            <tr><td>Cloud sync folder only</td><td>Zero</td><td>Fast but mirrors damage</td><td>Partially — no version safety</td></tr>
            <tr><td>Manual USB copies quarterly</td><td>High, always late</td><td>Minutes if fresh</td><td>Only if stored elsewhere</td></tr>
            <tr><td>Full 3-2-1 (local + cloud)</td><td>One afternoon</td><td>Best of both</td><td>Yes — the recommendation</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Phone photos deserve special attention because they are most
        people&apos;s only copy of irreplaceable memories: enable your
        phone&apos;s cloud photo backup on Wi-Fi, confirm the newest photos
        appear when signed in elsewhere, and count that as part of the system —
        our <Link href="/free-up-phone-storage">phone storage guide</Link>{" "}
        walks the exact toggles. Sensitive documents going to the cloud should
        first pass through the protections in our{" "}
        <Link href="/password-manager-guide">password manager guide</Link> and{" "}
        <Link href="/google-drive-basics">Google Drive basics</Link>.
      </p>

      <h2>How do I test backups and keep them alive?</h2>
      <p>
        An untested backup is a rumor. Twice a year — tie it to the clock
        changes so you remember — perform the fifteen-minute drill: restore a
        random folder to a temporary location from each destination and open
        several files to confirm they are intact and current; sign into the
        cloud service from a different browser to prove access still works; and
        check the local drive has recent timestamps rather than a months-old
        stalled job. Replace external drives every four to five years
        proactively, keep the cloud subscription&apos;s payment method current
        (lapsed cards silently kill protection), and update the system whenever
        your data footprint changes — new baby, new business, new hobby with
        big video files.
      </p>
      <p>
        Authoritative background: CISA&apos;s guidance on{" "}
        <a href="https://www.cisa.gov/secure-our-world/keep-software-updated" rel="noopener">
          protecting data through backup best practices
        </a>{" "}
        and Apple&apos;s{" "}
        <a href="https://support.apple.com/en-us/102630" rel="noopener">
          Time Machine documentation
        </a>
        . With backups verified, continue hardening via our{" "}
        <Link href="/recover-hacked-accounts-guide">account recovery guide</Link>{" "}
        and browse everything from the <Link href="/">homepage hub</Link>.
      </p>

      <h2>3-2-1 backup FAQ</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p className="faq-body">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mono text-xs text-[#7d8f85]">
        Updated: October 2026 · Sources: CISA backup and data-protection guidance;
        Apple Support (Time Machine); Microsoft Support (File History and backup
        settings); cloud plan details to be verified on official sites.
      </p>
    </article>
  );
}
