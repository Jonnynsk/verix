import type { Metadata } from "next";

import {
  ServiceTrtsAbout,
  ServiceTrtsDocTypes,
  SERVICE_TRTS_FAQ,
  ServiceTrtsHero,
  SERVICE_TRTS_PRICING,
  SERVICE_TRTS_META,
  ServiceTrtsPricing,
  ServiceTrtsProcess,
  SERVICE_TRTS_SLUG,
} from "@/components/ServiceTrts";
import { SharedFaq, stripHtml } from "@/components/SharedFaq";
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
            name: "Услуги",
            item: seoPathUrl("services"),
          },
          {
            "@type": "ListItem",
            position: 3,
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
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "RUB",
          offerCount: SERVICE_TRTS_PRICING.rows.length,
          offers: SERVICE_TRTS_PRICING.rows.map((row) => ({
            "@type": "Offer",
            name: row.service,
            price: row.price.replace(/\D/g, "") || "0",
            priceCurrency: "RUB",
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        about: {
          "@id": `${pageUrl}#service`,
        },
        mainEntity: SERVICE_TRTS_FAQ.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: stripHtml(item.answer),
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
      <SharedFaq
        items={SERVICE_TRTS_FAQ.items}
        title={SERVICE_TRTS_FAQ.title}
        tag={SERVICE_TRTS_FAQ.tag}
        id="service-trts-faq"
      />
      <SocialCta />
    </>
  );
}
