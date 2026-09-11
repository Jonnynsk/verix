import type { Metadata } from "next";

import {
  ServiceHonestCategories,
  SERVICE_HONEST_FAQ,
  ServiceHonestHero,
  SERVICE_HONEST_PRICING,
  SERVICE_HONEST_META,
  ServiceHonestPricing,
  SERVICE_HONEST_SLUG,
  ServiceHonestWhy,
} from "@/components/ServiceHonestSign";
import { SharedFaq, stripHtml } from "@/components/SharedFaq";
import { SocialCta } from "@/components/SocialCta";
import { PHONE_TEL, SITE_EMAIL } from "@/constants/site";
import { seoPathUrl, SEO_CANONICAL_URL, SEO_SITE_NAME } from "@/constants/seo";

export const metadata: Metadata = {
  title: SERVICE_HONEST_META.title,
  description: SERVICE_HONEST_META.description,
  alternates: {
    canonical: seoPathUrl(SERVICE_HONEST_SLUG),
  },
  openGraph: {
    title: SERVICE_HONEST_META.title,
    description: SERVICE_HONEST_META.description,
    url: seoPathUrl(SERVICE_HONEST_SLUG),
    type: "website",
  },
};

export default function ChestnyZnakPage() {
  const pageUrl = seoPathUrl(SERVICE_HONEST_SLUG);

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
            name: "Честный знак",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Регистрация и маркировка товаров «Честный знак»",
        description: SERVICE_HONEST_META.description,
        provider: {
          "@type": "Organization",
          name: SEO_SITE_NAME,
          url: SEO_CANONICAL_URL,
          telephone: PHONE_TEL,
          email: SITE_EMAIL,
        },
        areaServed: "RU",
        serviceType: "Маркировка Честный знак",
        url: pageUrl,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "RUB",
          offerCount: SERVICE_HONEST_PRICING.rows.length,
          offers: SERVICE_HONEST_PRICING.rows.map((row) => ({
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
        mainEntity: SERVICE_HONEST_FAQ.items.map((item) => ({
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
      <ServiceHonestHero />
      <ServiceHonestWhy />
      <ServiceHonestCategories />
      <ServiceHonestPricing />
      <SharedFaq
        items={SERVICE_HONEST_FAQ.items}
        title={SERVICE_HONEST_FAQ.title}
        tag={SERVICE_HONEST_FAQ.tag}
        id="service-honest-faq"
      />
      <SocialCta />
    </>
  );
}
