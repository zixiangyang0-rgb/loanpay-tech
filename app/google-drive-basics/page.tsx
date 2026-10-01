import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Drive Basics: Store, Share & Organize",
  description:
    "New to Google Drive? Learn Google Drive basics: uploading, folders, sharing safely, and finding anything fast. Upload, share safely, and find anything fast.",
  alternates: { canonical: "https://tech.loanpaylogic.com/google-drive-basics" },
  openGraph: {
    type: "article",
    url: "https://tech.loanpaylogic.com/google-drive-basics",
    siteName: "LoanPay Tech",
    title: "Google Drive Basics: Store, Share & Organize",
    description:
      "New to Google Drive? Learn Google Drive basics: uploading, folders, sharing safely, and finding anything fast. Upload, share safely, and find anything fast.",
  },
  twitter: {
    card: "summary",
    title: "Google Drive Basics: Store, Share & Organize",
    description:
      "New to Google Drive? Learn Google Drive basics: uploading, folders, sharing safely, and finding anything fast. Upload, share safely, and find anything fast.",
  },
};

const faqs = [
  {
    q: "How much free storage does Google Drive include?",
    a: "Fifteen gigabytes shared across Drive, Gmail, and Google Photos — not per service. When the quota fills, new mail bounces and uploads fail, so check the storage meter under Settings before assuming space exists. Paid Google One tiers add 100 GB and up; compare them against rivals in our cloud storage comparison before upgrading.",
  },
  {
    q: "How do I share a Google Drive file without exposing it to the internet?",
    a: "Share with named people instead of Anyone with the link: right-click the file, choose Share, add specific email addresses, and set them to Viewer unless editing is truly needed. Reserve link sharing for public-intended files, set it to Restricted the moment the need passes, and add expiration dates for sensitive shares. Review the Shared with me and link-shared inventory quarterly.",
  },
  {
    q: "What is the difference between My Drive and Shared drives?",
    a: "My Drive belongs to you — files vanish for collaborators if you delete them or leave. Shared drives belong to a team, so files persist regardless of membership changes and suit clubs, families, and workplaces. Use My Drive for personal work and a Shared drive the moment two or more people depend on the files surviving any one person's departure.",
  },
  {
    q: "Can I recover a deleted file from Google Drive?",
    a: "Yes within 30 days from Trash on the web — right-click and Restore returns it to its original location. After 30 days Google purges it permanently, and Workspace admins get a short additional recovery window regular users do not. For version-level recovery, use File then Version history in Docs, Sheets, and Slides to roll back bad edits without touching Trash at all.",
  },
  {
    q: "How do I find anything fast in a messy Google Drive?",
    a: "Search instead of browsing: Drive searches file names, full text inside PDFs and images via OCR, and owner or type filters from the search box dropdown. Star the dozen files you open weekly for one-click access, and use the Recent and Shared with me views instead of reconstructing folder expeditions. A shallow folder structure plus search beats deep nesting every time.",
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
      <p className="mono text-xs text-[#7d8f85]">~/guides ./google-drive-basics --sync</p>
      <div className="flex flex-wrap gap-2">
        <span className="badge">difficulty: beginner</span>
        <span className="badge">time: ~35 min</span>
        <span className="badge">free: 15 GB</span>
      </div>
      <h1>Google Drive Basics: Store, Share &amp; Organize</h1>
      <p className="mono text-sm text-[#34f27b]"><span className="prompt-dollar">drive mount --structure=shallow --share=least-privilege</span></p>
      <p>
        Google Drive basics come down to three skills: getting files in
        reliably, finding them in seconds, and sharing them without
        accidentally publishing your tax return to the internet. Drive bundles
        cloud file storage with the Docs, Sheets, and Slides editors, syncs
        across phone and computer, and gives every Google account 15 GB free —
        shared, note, across Drive, Gmail, and Photos rather than per service.
        Master the workflows below once and the platform quietly handles
        homework, household paperwork, club documents, and photo overflow for
        years.
      </p>
      <p>
        Two mental models prevent most confusion. First, Drive is not a backup
        by itself — synced deletions propagate, so pair it with the versioned
        system in our <Link href="/backup-guide-3-2-1">3-2-1 backup guide</Link>{" "}
        for anything irreplaceable. Second, search replaces filing: Drive
        indexes filenames, document text, and even words inside scanned PDFs
        and photos, so a shallow folder structure plus good search beats
        elaborate nesting you will never maintain. Organize lightly, search
        heavily.
      </p>
      <div className="term-card-static my-6 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" /><span className="dot bg-[#febc2e]" /><span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">starter_layout.txt</span>
        </div>
        <div className="mono space-y-2 p-5 text-sm">
          <p><span className="text-[#34f27b]">/Home-Finance/</span> statements, taxes, insurance — shared with spouse only</p>
          <p><span className="text-[#34f27b]">/Household/</span> manuals, warranties, medical, school docs</p>
          <p><span className="text-[#34f27b]">/Projects/</span> one folder per active project, archived yearly</p>
          <p><span className="text-[#34f27b]">/Inbox-sort-monthly/</span> phone uploads land here, filed or deleted monthly</p>
        </div>
      </div>

      <h2>How do I upload and organize files efficiently?</h2>
      <p>
        Upload three ways depending on volume: drag files straight into
        drive.google.com for batches, use the + New button for folders and
        native Docs/Sheets/Slides, or install Drive for desktop to mirror
        chosen computer folders continuously. Prefer Google-native formats for
        collaborative work — they enable simultaneous editing, comment threads,
        and infinite version history — and keep Office formats only where
        pixel-perfect compatibility matters. Name files for searchability with
        dates first (2026-09 dentist-receipt) because Drive sorts and searches
        names literally.
      </p>
      <p>
        Organize on a monthly rhythm rather than in real time: let phone
        uploads and downloads accumulate in one inbox folder, then spend ten
        minutes monthly filing keepers into the shallow structure above and
        deleting the rest. Star the dozen files you open weekly for sidebar
        access, color-code the three active-project folders, and empty Trash
        only after confirming nothing restorable matters — deletions finalize
        after 30 days automatically.
      </p>

      <h2>How do I share files safely with others?</h2>
      <p>
        Sharing is where Drive beginners cause real damage, so learn the
        permission ladder cold: Viewer can only read, Commenter can suggest,
        Editor can change and re-share — default to the lowest rung that gets
        the job done. The safe sequence is right-click, Share, add named email
        addresses, set Viewer, uncheck notify if it is routine, and set an
        expiration for time-bound access. &quot;Anyone with the link&quot; is a
        publication decision, not a sharing shortcut: anyone who receives or
        guesses the link reads the file, and forwarded links escape your
        control permanently.
      </p>
      <div className="term-card-static my-6 overflow-hidden">
        <div className="term-bar">
          <span className="dot bg-[#ff5f57]" /><span className="dot bg-[#febc2e]" /><span className="dot bg-[#28c840]" />
          <span className="mono ml-2 text-xs text-[#7d8f85]">share_audit.sh --quarterly</span>
        </div>
        <ol className="space-y-4 p-5">
          <li><span className="step-num">01</span>Search for link-shared files: open Drive search → Sharing: Anyone with the link → review every result.</li>
          <li><span className="step-num">02</span>Downgrade finished collaborations from Editor to Viewer; revoke access for completed projects entirely.</li>
          <li><span className="step-num">03</span>Move team-persistent files into a Shared drive so departures never orphan them.</li>
          <li><span className="step-num">04</span>Check sharing on sensitive folders after any &quot;quick share&quot; — convenience links linger for years.</li>
          <li><span className="step-num">05</span>Enable 2FA on the Google account itself — Drive security is account security (see our 2FA guide).</li>
        </ol>
      </div>

      <h2>How do storage limits and offline access work?</h2>
      <p>
        The 15 GB free quota fills faster than expected because Gmail
        attachments and original-quality photos draw from the same pool —
        check Settings, then Storage in Drive for the three-way split before
        buying space. Reclaim room by deleting Trash and Spam in Gmail (see our{" "}
        <Link href="/gmail-organization-tips">Gmail guide</Link>), converting
        Photos to storage-saver quality, and removing Drive&apos;s own
        duplicate uploads. For offline work, mark essential Docs and folders
        Available offline in the phone app or Drive for desktop before flights;
        edits sync on reconnection with full conflict history preserved.
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="data-table">
          <thead><tr><th>Need</th><th>Drive answer</th><th>Watch-out</th></tr></thead>
          <tbody>
            <tr><td>Collaborate live on documents</td><td>Docs/Sheets/Slides + comments</td><td>Editors can re-share — set expectations</td></tr>
            <tr><td>Access files offline</td><td>Available-offline marking per file</td><td>Mark before losing connectivity</td></tr>
            <tr><td>Recover mistakes</td><td>Version history + 30-day Trash</td><td>Sync is not backup — keep real backups</td></tr>
            <tr><td>Team files that outlive members</td><td>Shared drives</td><td>My Drive files die with departures</td></tr>
            <tr><td>More than 15 GB</td><td>Google One plans</td><td>Compare rivals in our cloud comparison first</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Secure the whole setup with our{" "}
        <Link href="/two-factor-auth-setup-guide">2FA guide</Link> and{" "}
        <Link href="/password-manager-guide">password manager guide</Link>,
        compare paid tiers against rivals in our{" "}
        <Link href="/cloud-storage-compared">cloud storage comparison</Link>,
        and confirm core mechanics in Google&apos;s{" "}
        <a href="https://support.google.com/drive/answer/2424384" rel="noopener">
          Drive getting-started guide
        </a>{" "}
        and{" "}
        <a href="https://support.google.com/drive/answer/2494822" rel="noopener">
          file-sharing documentation
        </a>
        . Everything else sits on the <Link href="/">homepage hub</Link>.
      </p>

      <h2>Google Drive FAQ</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p className="faq-body">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mono text-xs text-[#7d8f85]">
        Updated: October 2026 · Sources: Google Drive Help (getting started; sharing
        files); quota and plan details to be verified on official Google One pages.
      </p>
    </article>
  );
}
