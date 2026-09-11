import type { Metadata } from "next";

import {
  ServiceTuAbout,
  ServiceTuHero,
  ServiceTuPricing,
  SERVICE_TU_FAQ,
  
  SERVICE_TU_PRICING,SERVICE_TU_META,
  SERVICE_TU_SLUG,
} from "@/components/ServiceTu";
import { SharedFaq, stripHtml } from "@/components/SharedFaq";
import { SocialCta } from "@/components/SocialCta";
import { PHONE_TEL, SITE_EMAIL } from "@/constants/site";
import { seoPathUrl, SEO_CANONICAL_URL, SEO_SITE_NAME } from "@/constants/seo";

export const metadata: Metadata = {
  title: SERVICE_TU_META.title,
  description: SERVICE_TU_META.description,
  alternates: {
    canonical: seoPathUrl(SERVICE_TU_SLUG),
  },
  openGraph: {
    title: SERVICE_TU_META.title,
    description: SERVICE_TU_META.description,
    url: seoPathUrl(SERVICE_TU_SLUG),
    type: "website",
  },
};

export default function RazrabotkaTuPage() {
  const pageUrl = seoPathUrl(SERVICE_TU_SLUG);

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
            name: "Разработка Технических Условий (ТУ)",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Разработка Технических Условий (ТУ) и ТИ на производство",
        description: SERVICE_TU_META.description,
        provider: {
          "@type": "Organization",
          name: SEO_SITE_NAME,
          url: SEO_CANONICAL_URL,
          telephone: PHONE_TEL,
          email: SITE_EMAIL,
        },
        areaServed: "RU",
        serviceType: "Разработка ТУ",
        url: pageUrl,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "RUB",
          offerCount: SERVICE_TU_PRICING.rows.length,
          offers: SERVICE_TU_PRICING.rows.map((row) => ({
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
        mainEntity: SERVICE_TU_FAQ.items.map((item) => ({
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
      <ServiceTuHero />
      <ServiceTuAbout />
      <ServiceTuPricing />
      <SharedFaq
        items={SERVICE_TU_FAQ.items}
        title={SERVICE_TU_FAQ.title}
        tag={SERVICE_TU_FAQ.tag}
        id="service-tu-faq"
      />
      <SocialCta />
    </>
  );
}