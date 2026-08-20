import type { Metadata } from "next";

import {
  ServiceTrtsAbout,
  ServiceTrtsDocTypes,
  ServiceTrtsFaq,
  SERVICE_TRTS_FAQ,
  ServiceTrtsHero,
  SERVICE_TRTS_META,
  ServiceTrtsPricing,
  ServiceTrtsProcess,
  SERVICE_TRTS_SLUG,
} from "@/components/ServiceTrts";
import { SocialCta } from "@/components/SocialCta";
import { PHONE_TEL, SITE_EMAIL } from "@/constants/site";
import { seoPathUrl, SEO_CANONICAL_URL, SEO_SITE_NAME } from "@/constants/seo";

export const metadata: Metadata = {
  title: SERVICE_TRTS_META.title,
  description: SERVICE_TRTS_META.description,
  alternates: {
    canonical: seoPathUrl(SERVICE_TRTS_SLUG),
  },
  openGraph: {
    title: SERVICE_TRTS_META.title,
    description: SERVICE_TRTS_META.description,
    url: seoPathUrl(SERVICE_TRTS_SLUG),
    type: "website",
  },
};

export default function SertifikaciyaTrTsPage() {
  const pageUrl = seoPathUrl(SERVICE_TRTS_SLUG);

  const serviceJsonLd = {
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
            name: "Сертификация ТР ТС",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Сертификация и декларирование ТР ТС (ЕАЭС)",
        description: SERVICE_TRTS_META.description,
        provider: {
          "@type": "Organization",
          name: SEO_SITE_NAME,
          url: SEO_CANONICAL_URL,
          telephone: PHONE_TEL,
          email: SITE_EMAIL,
        },
        areaServed: "RU",
        serviceType: "Сертификация ТР ТС",
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: SERVICE_TRTS_FAQ.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceTrtsHero />
      <ServiceTrtsAbout />
      <ServiceTrtsDocTypes />
      <ServiceTrtsPricing />
      <ServiceTrtsProcess />
      <ServiceTrtsFaq />
      <SocialCta />
    </>
  );
}
