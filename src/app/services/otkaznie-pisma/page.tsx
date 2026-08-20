import type { Metadata } from "next";

import {
  ServiceRefusalAbout,
  ServiceRefusalFaq,
  SERVICE_REFUSAL_FAQ,
  ServiceRefusalHero,
  SERVICE_REFUSAL_META,
  ServiceRefusalPricing,
  SERVICE_REFUSAL_SLUG,
} from "@/components/ServiceRefusal";
import { SocialCta } from "@/components/SocialCta";
import { PHONE_TEL, SITE_EMAIL } from "@/constants/site";
import { seoPathUrl, SEO_CANONICAL_URL, SEO_SITE_NAME } from "@/constants/seo";

export const metadata: Metadata = {
  title: SERVICE_REFUSAL_META.title,
  description: SERVICE_REFUSAL_META.description,
  alternates: {
    canonical: seoPathUrl(SERVICE_REFUSAL_SLUG),
  },
  openGraph: {
    title: SERVICE_REFUSAL_META.title,
    description: SERVICE_REFUSAL_META.description,
    url: seoPathUrl(SERVICE_REFUSAL_SLUG),
    type: "website",
  },
};

export default function OtkazniePismaPage() {
  const pageUrl = seoPathUrl(SERVICE_REFUSAL_SLUG);

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
            name: "Отказные письма",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Оформление отказных писем для маркетплейсов",
        description: SERVICE_REFUSAL_META.description,
        provider: {
          "@type": "Organization",
          name: SEO_SITE_NAME,
          url: SEO_CANONICAL_URL,
          telephone: PHONE_TEL,
          email: SITE_EMAIL,
        },
        areaServed: "RU",
        serviceType: "Отказное письмо",
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: SERVICE_REFUSAL_FAQ.items.map((item) => ({
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
      <ServiceRefusalHero />
      <ServiceRefusalAbout />
      <ServiceRefusalPricing />
      <ServiceRefusalFaq />
      <SocialCta />
    </>
  );
}
