import type { Metadata } from "next";
import { notFound } from "next/navigation";

import hubsData from "@/data/hubs.json";
import productsData from "@/data/products.json";
import { ProductsTable } from "./ProductsTable";
import { SeoContent } from "./SeoContent";
import { DocInfoNotice } from "./DocInfoNotice";
import { SocialCta } from "@/components/SocialCta";
import { seoPathUrl, SEO_CANONICAL_URL, SEO_SITE_NAME } from "@/constants/seo";
import { PHONE_TEL, SITE_EMAIL } from "@/constants/site";

interface PageProps {
  params: Promise<{
    docType: string;
    categorySlug: string;
  }>;
}

export function generateStaticParams() {
  return hubsData.map((hub: any) => ({
    docType: hub.docType,
    categorySlug: hub.categorySlug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { docType, categorySlug } = await params;
  const hubs = hubsData as Array<any>;
  const hub = hubs.find(
    (h) => h.docType === docType && h.categorySlug === categorySlug,
  );

  if (!hub) {
    return {
      title: "Документ не найден",
    };
  }

  const title = hub.title || hub.h1 || `Оформление документации (${docType})`;
  const description =
    hub.description ||
    `Официальное оформление ${docType} для категории ${categorySlug}. Быстро, аккредитованный орган.`;
  const url = seoPathUrl(`${docType}/${categorySlug}`);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

export default async function ProgrammaticSeoPage({ params }: PageProps) {
  const { docType, categorySlug } = await params;
  const hubs = hubsData as Array<any>;
  const products = productsData as Array<any>;

  const hub = hubs.find(
    (h) => h.docType === docType && h.categorySlug === categorySlug,
  );

  if (!hub) {
    notFound();
  }

  // Filter products matching current docType & categorySlug (or matching url)
  const categoryProducts = products.filter(
    (p) =>
      (p.docType === docType && p.categorySlug === categorySlug) ||
      (p.url && p.url.includes(`${docType}/${categorySlug}`)),
  );

  const pageUrl = seoPathUrl(`${docType}/${categorySlug}`);

  const jsonLd = {
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
            name: docType.toUpperCase(),
            item: seoPathUrl(docType),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: hub.h1 || categorySlug,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: hub.h1,
        description: hub.description || hub.title,
        provider: {
          "@type": "Organization",
          name: SEO_SITE_NAME,
          url: SEO_CANONICAL_URL,
          telephone: PHONE_TEL,
          email: SITE_EMAIL,
        },
        areaServed: "RU",
        url: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section
        style={{
          boxSizing: "border-box",
          width: "100%",
          paddingInline: "1.5rem",
          paddingBlock: "3rem 4rem",
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
        }}
        aria-labelledby="seo-hero-title"
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginInline: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <h1
            id="seo-hero-title"
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              fontWeight: 700,
              color: "#0f172a",
              maxWidth: "54rem",
            }}
          >
            {hub.h1}
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: "#475569",
              maxWidth: "48rem",
            }}
          >
            Найдите свой товар в списке ниже и оставьте заявку на бесплатный
            расчет стоимости оформления документов для маркетплейсов.
          </p>
        </div>
      </section>

      {/* Products Table Section with Search */}
      <ProductsTable products={categoryProducts} categoryTitle={hub.h1} />

      {/* Info Notice Callout */}
      <DocInfoNotice />

      {/* SEO HTML Text Section */}
      <SeoContent
        html={hub.seoHtmlText || hub["SEO_HTML_Текст"] || hub["seo_html_текст"]}
      />

      {/* Social CTA Block */}
      <SocialCta />
    </>
  );
}
