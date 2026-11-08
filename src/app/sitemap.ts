import type { MetadataRoute } from "next";

import hubsData from "@/data/hubs.json";
import { seoPathUrl } from "@/constants/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const hubs = hubsData as Array<{ docType: string; categorySlug: string }>;

  const hubEntries: MetadataRoute.Sitemap = hubs.map((hub) => ({
    url: seoPathUrl(`${hub.docType}/${hub.categorySlug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: seoPathUrl(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: seoPathUrl("services"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: seoPathUrl("services/sertifikaciya-tr-ts"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: seoPathUrl("services/otkaznie-pisma"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: seoPathUrl("services/chestny-znak"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: seoPathUrl("services/deklarirovanie-gost-r"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: seoPathUrl("services/dobrovolnaya-sertifikaciya"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: seoPathUrl("services/registratsiya-tovarnogo-znaka"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: seoPathUrl("services/razrabotka-tu"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: seoPathUrl("services/sgr"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: seoPathUrl("about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: seoPathUrl("privacy"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: seoPathUrl("terms"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...hubEntries,
  ];
}
