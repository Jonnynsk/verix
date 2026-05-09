import type { MetadataRoute } from "next";

import { SEO_CANONICAL_URL } from "@/constants/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SEO_CANONICAL_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

