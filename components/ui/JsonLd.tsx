import React from "react";

const SITE_URL = "https://www.eroplein.com";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
  const serialized = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}

// ── Builders ────────────────────────────────────────────────────────────

type BreadcrumbItem = { name: string; url: string };

export function breadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

type CollectionPageArgs = {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: BreadcrumbItem[];
};

export function collectionPageSchema({
  name,
  description,
  url,
  breadcrumbs,
}: CollectionPageArgs) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    inLanguage: "nl-NL",
    isPartOf: {
      "@type": "WebSite",
      name: "Eroplein",
      url: SITE_URL,
    },
  };
  if (breadcrumbs && breadcrumbs.length > 0) {
    base.breadcrumb = breadcrumbListSchema(breadcrumbs);
  }
  return base;
}

type ListItem = {
  name: string;
  url: string;
  image?: string;
  description?: string;
};

export function itemListSchema(items: ListItem[], listName?: string) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
      name: item.name,
      ...(item.image && { image: item.image }),
      ...(item.description && { description: item.description }),
    })),
  };
  if (listName) base.name = listName;
  return base;
}

type FaqItem = { question: string; answer: string };

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

type LocalBusinessArgs = {
  name: string;
  description: string;
  url: string;
  image?: string;
  address?: {
    street?: string;
    locality: string;
    postalCode?: string;
    region?: string;
  };
  phone?: string;
  priceRange?: string;
  aggregateRating?: { ratingValue: number; reviewCount: number };
  reviews?: {
    author: string;
    reviewRating: number;
    datePublished: string;
    reviewBody: string;
  }[];
};

export function localBusinessSchema(args: LocalBusinessArgs) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: args.name,
    description: args.description,
    url: args.url.startsWith("http") ? args.url : `${SITE_URL}${args.url}`,
  };
  if (args.image) schema.image = args.image;
  if (args.phone) schema.telephone = args.phone;
  if (args.priceRange) schema.priceRange = args.priceRange;
  if (args.address) {
    schema.address = {
      "@type": "PostalAddress",
      ...(args.address.street && { streetAddress: args.address.street }),
      addressLocality: args.address.locality,
      ...(args.address.postalCode && { postalCode: args.address.postalCode }),
      ...(args.address.region && { addressRegion: args.address.region }),
      addressCountry: "NL",
    };
  }
  if (args.aggregateRating && args.aggregateRating.reviewCount > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: args.aggregateRating.ratingValue.toFixed(1),
      reviewCount: args.aggregateRating.reviewCount,
      bestRating: "5",
      worstRating: "1",
    };
  }
  if (args.reviews && args.reviews.length > 0) {
    schema.review = args.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.reviewRating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      datePublished: r.datePublished,
      reviewBody: r.reviewBody,
    }));
  }
  return schema;
}

type ArticleSchemaArgs = {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
};

export function articleSchema(args: ArticleSchemaArgs) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    image: args.image ? [args.image] : undefined,
    url: args.url.startsWith("http") ? args.url : `${SITE_URL}${args.url}`,
    datePublished: args.datePublished,
    dateModified: args.dateModified || args.datePublished,
    author: {
      "@type": "Person",
      name: args.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Eroplein",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
    inLanguage: "nl-NL",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Eroplein",
    alternateName: "Eroplein.com",
    url: SITE_URL,
    description:
      "Nederlands platform voor eerlijke reviews over escorts, parenclubs, erotische massage en meer.",
    inLanguage: "nl-NL",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Eroplein",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.svg`,
      width: 512,
      height: 512,
    },
    description:
      "Onafhankelijk Nederlands reviewplatform voor de erotische branche.",
    areaServed: { "@type": "Country", name: "Nederland" },
    knowsLanguage: "nl-NL",
  };
}

type HowToStep = { name: string; text: string };

export function howToSchema(args: {
  name: string;
  description: string;
  steps: HowToStep[];
  url: string;
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    description: args.description,
    url: args.url.startsWith("http") ? args.url : `${SITE_URL}${args.url}`,
    ...(args.totalTime && { totalTime: args.totalTime }),
    step: args.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
