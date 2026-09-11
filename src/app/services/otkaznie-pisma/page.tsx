import type { Metadata } from "next";

import {
  ServiceRefusalAbout,
  SERVICE_REFUSAL_FAQ,
  ServiceRefusalHero,
  SERVICE_REFUSAL_PRICING,
  SERVICE_REFUSAL_META,
  ServiceRefusalPricing,
  SERVICE_REFUSAL_SLUG,
} from "@/components/ServiceRefusal";
import { SharedFaq, stripHtml } from "@/components/SharedFaq";
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
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "RUB",
          offerCount: SERVICE_REFUSAL_PRICING.rows.length,
          offers: SERVICE_REFUSAL_PRICING.rows.map((row) => ({
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
        mainEntity: SERVICE_REFUSAL_FAQ.items.map((item) => ({
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
      <ServiceRefusalHero />
      <ServiceRefusalAbout />
      <ServiceRefusalPricing />
      <SharedFaq
        items={SERVICE_REFUSAL_FAQ.items}
        title={SERVICE_REFUSAL_FAQ.title}
        tag={SERVICE_REFUSAL_FAQ.tag}
        id="service-refusal-faq"
      />
      <SocialCta />
    </>
  );
}
