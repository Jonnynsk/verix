import type { Metadata } from "next";

import {
  ServiceTrademarkAbout,
  ServiceTrademarkHero,
  ServiceTrademarkPricing,
  SERVICE_TRADEMARK_FAQ,
  
  SERVICE_TRADEMARK_PRICING,SERVICE_TRADEMARK_META,
  SERVICE_TRADEMARK_SLUG,
} from "@/components/ServiceTrademark";
import { SharedFaq, stripHtml } from "@/components/SharedFaq";
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
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "RUB",
          offerCount: SERVICE_TRADEMARK_PRICING.rows.length,
          offers: SERVICE_TRADEMARK_PRICING.rows.map((row) => ({
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
        mainEntity: SERVICE_TRADEMARK_FAQ.items.map((item) => ({
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
      <ServiceTrademarkHero />
      <ServiceTrademarkAbout />
      <ServiceTrademarkPricing />
      <SharedFaq
        items={SERVICE_TRADEMARK_FAQ.items}
        title={SERVICE_TRADEMARK_FAQ.title}
        tag={SERVICE_TRADEMARK_FAQ.tag}
        id="service-trademark-faq"
      />
      <SocialCta />
    </>
  );
}
