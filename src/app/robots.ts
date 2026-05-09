import type { MetadataRoute } from "next";

import { SEO_CANONICAL_URL } from "@/constants/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SEO_CANONICAL_URL}sitemap.xml`,
    host: SEO_CANONICAL_URL,
  };
}

