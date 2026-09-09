import type { Metadata } from "next";

import {
  ServiceGostRAbout,
  ServiceGostRDocTypes,
  ServiceGostRFaq,
  SERVICE_GOST_R_FAQ,
  ServiceGostRHero,
  SERVICE_GOST_R_META,
  ServiceGostRPricing,
  ServiceGostRProcess,
  SERVICE_GOST_R_SLUG,
} from "@/components/ServiceGostR";
import { SocialCta } from "@/components/SocialCta";
import { PHONE_TEL, SITE_EMAIL } from "@/constants/site";
import { seoPathUrl, SEO_CANONICAL_URL, SEO_SITE_NAME } from "@/constants/seo";

export const metadata: Metadata = {
  title: SERVICE_GOST_R_META.title,
  description: SERVICE_GOST_R_META.description,
  alternates: {
    canonical: seoPathUrl(SERVICE_GOST_R_SLUG),
  },
  openGraph: {
    title: SERVICE_GOST_R_META.title,
    description: SERVICE_GOST_R_META.description,
    url: seoPathUrl(SERVICE_GOST_R_SLUG),
    type: "website",
  },
};

export default function DeklarirovanieGostRPage() {
  const pageUrl = seoPathUrl(SERVICE_GOST_R_SLUG);

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
            name: "Декларирование ГОСТ Р",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Оформление декларации соответствия ГОСТ Р",
        description: SERVICE_GOST_R_META.description,
        provider: {
          "@type": "Organization",
          name: SEO_SITE_NAME,
          url: SEO_CANONICAL_URL,
          telephone: PHONE_TEL,
          email: SITE_EMAIL,
        },
        areaServed: "RU",
        serviceType: "Декларирование ГОСТ Р",
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: SERVICE_GOST_R_FAQ.items.map((item) => ({
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
      <ServiceGostRHero />
      <ServiceGostRAbout />
      <ServiceGostRDocTypes />
      <ServiceGostRPricing />
      <ServiceGostRProcess />
      <ServiceGostRFaq />
      <SocialCta />
    </>
  );
}