import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/go/",
    },
    sitemap: "https://verix-cert.ru/sitemap.xml",
  };
}
