import type { Metadata } from "next";

import {
  ServiceSgrAbout,
  ServiceSgrFaq,
  SERVICE_SGR_FAQ,
  ServiceSgrHero,
  SERVICE_SGR_META,
  ServiceSgrPricing,
  SERVICE_SGR_SLUG,
} from "@/components/ServiceSgr";
import { SocialCta } from "@/components/SocialCta";
import { PHONE_TEL, SITE_EMAIL } from "@/constants/site";
import { seoPathUrl, SEO_CANONICAL_URL, SEO_SITE_NAME } from "@/constants/seo";

export const metadata: Metadata = {
  title: SERVICE_SGR_META.title,
  description: SERVICE_SGR_META.description,
  alternates: {
    canonical: seoPathUrl(SERVICE_SGR_SLUG),
  },
  openGraph: {
    title: SERVICE_SGR_META.title,
    description: SERVICE_SGR_META.description,
    url: seoPathUrl(SERVICE_SGR_SLUG),
    type: "website",
  },
};

export default function SgrPage() {
  const pageUrl = seoPathUrl(SERVICE_SGR_SLUG);

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
            name: "Свидетельство о госрегистрации (СГР)",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Оформление Свидетельства о государственной регистрации (СГР) под ключ",
        description: SERVICE_SGR_META.description,
        provider: {
          "@type": "Organization",
          name: SEO_SITE_NAME,
          url: SEO_CANONICAL_URL,
          telephone: PHONE_TEL,
          email: SITE_EMAIL,
        },
        areaServed: "RU",
        serviceType: "Свидетельство о государственной регистрации",
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: SERVICE_SGR_FAQ.items.map((item) => ({
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
      <ServiceSgrHero />
      <ServiceSgrAbout />
      <ServiceSgrPricing />
      <ServiceSgrFaq />
      <SocialCta />
    </>
  );
}