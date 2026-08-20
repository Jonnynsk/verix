import type { Metadata } from "next";

import {
  ServicesHubCards,
  ServicesHubDecision,
  ServicesHubHero,
  SERVICES_HUB_META,
  SERVICES_HUB_SLUG,
} from "@/components/ServicesHub";
import { SocialCta } from "@/components/SocialCta";
import { seoPathUrl, SEO_CANONICAL_URL } from "@/constants/seo";

export const metadata: Metadata = {
  title: SERVICES_HUB_META.title,
  description: SERVICES_HUB_META.description,
  alternates: {
    canonical: seoPathUrl(SERVICES_HUB_SLUG),
  },
  openGraph: {
    title: SERVICES_HUB_META.title,
    description: SERVICES_HUB_META.description,
    url: seoPathUrl(SERVICES_HUB_SLUG),
    type: "website",
  },
};

export default function ServicesHubPage() {
  const pageUrl = seoPathUrl(SERVICES_HUB_SLUG);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: SEO_CANONICAL_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Услуги",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        name: SERVICES_HUB_META.title,
        description: SERVICES_HUB_META.description,
        url: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHubHero />
      <ServicesHubDecision />
      <ServicesHubCards />
      <SocialCta />
    </>
  );
}
