import { Advantages } from "@/components/Advantages";
import { FOOTER_SOCIAL } from "@/components/Footer/constants";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProcessWork } from "@/components/ProcessWork";
import { SERVICE_CARDS } from "@/components/Services/constants";
import { SITE_ADDRESS, SITE_EMAIL, PHONE_TEL } from "@/constants/site";
import {
  SEO_CATEGORY,
  SEO_CANONICAL_URL,
  SEO_DESCRIPTION,
  SEO_LANGUAGE,
  SEO_REGION,
  SEO_SITE_NAME,
} from "@/constants/seo";
import { Services } from "@/components/Services";
import { SocialCta } from "@/components/SocialCta";
import { Reviews } from "@/components/Reviews";

import styles from "./page.module.css";

export default function Home() {
  const sameAs = FOOTER_SOCIAL.map((item) => item.href).filter((href) => {
    return !href.startsWith("/go/");
  });

  const serviceItems = SERVICE_CARDS.map((service) => ({
    "@type": "Service",
    name: service.title,
    description: service.description,
    areaServed: "RU",
    serviceType: service.title,
    url: `${SEO_CANONICAL_URL}${service.anchor ? `#${service.anchor}` : ""}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SEO_CANONICAL_URL}#organization`,
        name: SEO_SITE_NAME,
        url: SEO_CANONICAL_URL,
        email: SITE_EMAIL,
        telephone: PHONE_TEL,
        ...(sameAs.length ? { sameAs } : {}),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: PHONE_TEL,
            email: SITE_EMAIL,
            areaServed: "RU",
            availableLanguage: ["Russian"],
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SEO_CANONICAL_URL}#service`,
        name: SEO_SITE_NAME,
        url: SEO_CANONICAL_URL,
        description: SEO_DESCRIPTION,
        category: SEO_CATEGORY,
        telephone: PHONE_TEL,
        email: SITE_EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_ADDRESS,
          addressLocality: SEO_REGION,
          addressCountry: "RU",
        },
        areaServed: "RU",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Услуги сертификационного центра",
          itemListElement: serviceItems,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SEO_CANONICAL_URL}#website`,
        url: SEO_CANONICAL_URL,
        name: SEO_SITE_NAME,
        description: SEO_DESCRIPTION,
        inLanguage: SEO_LANGUAGE,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SEO_CANONICAL_URL}?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SEO_CANONICAL_URL}#webpage`,
        url: SEO_CANONICAL_URL,
        name: SEO_SITE_NAME,
        isPartOf: {
          "@id": `${SEO_CANONICAL_URL}#website`,
        },
        about: {
          "@id": `${SEO_CANONICAL_URL}#service`,
        },
        inLanguage: SEO_LANGUAGE,
        description: SEO_DESCRIPTION,
      },
    ],
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Marquee />
      <Services />
      <ProcessWork />
      <Advantages />
      <SocialCta />
      <Reviews />
    </div>
  );
}
