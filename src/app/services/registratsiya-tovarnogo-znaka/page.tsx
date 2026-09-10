import type { Metadata } from "next";

import {
  ServiceTrademarkAbout,
  ServiceTrademarkFaq,
  ServiceTrademarkHero,
  ServiceTrademarkPricing,
  SERVICE_TRADEMARK_FAQ,
  SERVICE_TRADEMARK_META,
  SERVICE_TRADEMARK_SLUG,
} from "@/components/ServiceTrademark";
import { SocialCta } from "@/components/SocialCta";
import { PHONE_TEL, SITE_EMAIL } from "@/constants/site";
import { seoPathUrl, SEO_CANONICAL_URL, SEO_SITE_NAME } from "@/constants/seo";

export const metadata: Metadata = {
  title: SERVICE_TRADEMARK_META.title,
  description: SERVICE_TRADEMARK_META.description,
  alternates: {
    canonical: seoPathUrl(SERVICE_TRADEMARK_SLUG),
  },
  openGraph: {
    title: SERVICE_TRADEMARK_META.title,
    description: SERVICE_TRADEMARK_META.description,
    url: seoPathUrl(SERVICE_TRADEMARK_SLUG),
    type: "website",
  },
};

export default function RegistratsiyaTovarnogoZnakaPage() {
  const pageUrl = seoPathUrl(SERVICE_TRADEMARK_SLUG);

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
            name: "Регистрация товарного знака",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Регистрация товарного знака в Роспатенте под ключ",
        description: SERVICE_TRADEMARK_META.description,
        provider: {
          "@type": "Organization",
          name: SEO_SITE_NAME,
          url: SEO_CANONICAL_URL,
          telephone: PHONE_TEL,
          email: SITE_EMAIL,
        },
        areaServed: "RU",
        serviceType: "Регистрация товарного знака",
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: SERVICE_TRADEMARK_FAQ.items.map((item) => ({
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
      <ServiceTrademarkHero />
      <ServiceTrademarkAbout />
      <ServiceTrademarkPricing />
      <ServiceTrademarkFaq />
      <SocialCta />
    </>
  );
}
