import type { Metadata } from "next";

import {
  ServiceVoluntaryAbout,
  SERVICE_VOLUNTARY_FAQ,
  ServiceVoluntaryHero,
  SERVICE_VOLUNTARY_PRICING,
  SERVICE_VOLUNTARY_META,
  ServiceVoluntaryPricing,
  SERVICE_VOLUNTARY_SLUG,
} from "@/components/ServiceVoluntary";
import { SharedFaq, stripHtml } from "@/components/SharedFaq";
import { SocialCta } from "@/components/SocialCta";
import { PHONE_TEL, SITE_EMAIL } from "@/constants/site";
import { seoPathUrl, SEO_CANONICAL_URL, SEO_SITE_NAME } from "@/constants/seo";

export const metadata: Metadata = {
  title: SERVICE_VOLUNTARY_META.title,
  description: SERVICE_VOLUNTARY_META.description,
  alternates: {
    canonical: seoPathUrl(SERVICE_VOLUNTARY_SLUG),
  },
  openGraph: {
    title: SERVICE_VOLUNTARY_META.title,
    description: SERVICE_VOLUNTARY_META.description,
    url: seoPathUrl(SERVICE_VOLUNTARY_SLUG),
    type: "website",
  },
};

export default function DobrovolnayaSertifikaciyaPage() {
  const pageUrl = seoPathUrl(SERVICE_VOLUNTARY_SLUG);

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
            name: "Добровольная сертификация",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Оформление добровольного сертификата соответствия на продукцию и услуги",
        description: SERVICE_VOLUNTARY_META.description,
        provider: {
          "@type": "Organization",
          name: SEO_SITE_NAME,
          url: SEO_CANONICAL_URL,
          telephone: PHONE_TEL,
          email: SITE_EMAIL,
        },
        areaServed: "RU",
        serviceType: "Добровольный сертификат соответствия",
        url: pageUrl,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "RUB",
          offerCount: SERVICE_VOLUNTARY_PRICING.rows.length,
          offers: SERVICE_VOLUNTARY_PRICING.rows.map((row) => ({
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
        mainEntity: SERVICE_VOLUNTARY_FAQ.items.map((item) => ({
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
      <ServiceVoluntaryHero />
      <ServiceVoluntaryAbout />
      <ServiceVoluntaryPricing />
      <SharedFaq
        items={SERVICE_VOLUNTARY_FAQ.items}
        title={SERVICE_VOLUNTARY_FAQ.title}
        tag={SERVICE_VOLUNTARY_FAQ.tag}
        id="service-voluntary-faq"
      />
      <SocialCta />
    </>
  );
}
