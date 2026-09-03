import type { Metadata } from "next";

import {
  ServiceHonestCategories,
  ServiceHonestFaq,
  SERVICE_HONEST_FAQ,
  ServiceHonestHero,
  SERVICE_HONEST_META,
  ServiceHonestPricing,
  SERVICE_HONEST_SLUG,
  ServiceHonestWhy,
} from "@/components/ServiceHonestSign";
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
      },
      {
        "@type": "FAQPage",
        mainEntity: SERVICE_HONEST_FAQ.items.map((item) => ({
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
      <ServiceHonestHero />
      <ServiceHonestWhy />
      <ServiceHonestCategories />
      <ServiceHonestPricing />
      <ServiceHonestFaq />
      <SocialCta />
    </>
  );
}
