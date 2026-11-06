import Script from "next/script";

const SITE_URL = "https://tech.loanpaylogic.com";
const ORG_NAME = "LoanPay Tech";
const ORG_LOGO = `${SITE_URL}/logo.png`;

export type FaqItem = {
  question: string;
  answer: string;
};

type GuideSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  faqs?: FaqItem[];
};

function stripHtml(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/** Site-wide Organization + WebSite JSON-LD (render once in layout). */
export function OrgJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: ORG_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: ORG_LOGO,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "support@loanpaylogic.com",
          contactType: "customer support",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: ORG_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
  return (
    <Script
      id="org-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/**
 * Per-article Article + FAQPage + BreadcrumbList JSON-LD.
 * FAQ answers are plain text (HTML stripped) to keep validation clean.
 */
export function GuideSchema({
  title,
  description,
  slug,
  datePublished = "2026-10-01",
  dateModified = "2026-10-01",
  faqs = [],
}: GuideSchemaProps) {
  const pageUrl = `${SITE_URL}/${slug}`;
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: title,
      description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      datePublished,
      dateModified,
      author: {
        "@type": "Organization",
        name: ORG_NAME,
        url: SITE_URL,
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title,
          item: pageUrl,
        },
      ],
    },
  ];

  const cleanFaqs = faqs
    .map((f) => ({
      question: stripHtml(f.question).slice(0, 300),
      answer: stripHtml(f.answer).slice(0, 1000),
    }))
    .filter((f) => f.question.length > 0 && f.answer.length > 0);

  if (cleanFaqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: cleanFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  const json = { "@context": "https://schema.org", "@graph": graph };
  return (
    <Script
      id={`tech-ld-${slug}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/** Editorial byline shown under each guide hero. */
export function Byline({ updated = "October 2026" }: { updated?: string }) {
  return (
    <p className="mt-4 text-sm leading-relaxed opacity-80">
      By <span className="font-medium">LoanPay Tech Editorial Team</span> · Updated: {updated} ·
      Educational guide, not financial advice.
    </p>
  );
}
