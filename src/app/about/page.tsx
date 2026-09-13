import type { Metadata } from "next";
import { AboutHero } from "@/components/About/AboutHero";
import { AboutPrinciples } from "@/components/About/AboutPrinciples";
import { AboutRequisites } from "@/components/About/AboutRequisites";
import { SocialCta } from "@/components/SocialCta";
import {
  seoPathUrl,
  SEO_CANONICAL_URL,
  SEO_SITE_NAME,
  SEO_ADDRESS_LOCALITY,
  SEO_ADDRESS_REGION,
} from "@/constants/seo";
import { STREET_ADDRESS } from "@/constants/site";

export const metadata: Metadata = {
  title: "О компании | Сертификационный центр ВЕРИКС",
  description:
    "Официальное оформление документов для E-commerce. 5 лет опыта, прозрачные цены и прямая выгрузка в реестр Росаккредитации.",
  alternates: { canonical: seoPathUrl("about") },
};

export default function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_CANONICAL_URL}#organization`,
    name: SEO_SITE_NAME,
    url: SEO_CANONICAL_URL,
    email: "verix-cert@mail.ru",
    telephone: "+79538057999",
    description: "Сертификационный центр для селлеров Wildberries и Ozon",
    address: {
      "@type": "PostalAddress",
      postalCode: "630032",
      addressCountry: "RU",
      addressRegion: SEO_ADDRESS_REGION,
      addressLocality: SEO_ADDRESS_LOCALITY,
      streetAddress: STREET_ADDRESS,
    },
    founder: {
      "@type": "Person",
      name: "Евгений Файзрахманов",
      jobTitle: "Основатель, Ведущий инженер",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <AboutHero />
      <AboutPrinciples />
      <AboutRequisites />
      <SocialCta />
    </>
  );
}
