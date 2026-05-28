import type { MetadataRoute } from "next";

import {
  SEO_BASE_PATH,
  SEO_BRAND_NAME,
  SEO_DESCRIPTION,
  SEO_LANGUAGE,
  SEO_SITE_NAME,
  SEO_THEME_COLOR,
} from "@/constants/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_SITE_NAME,
    short_name: SEO_BRAND_NAME,
    description: SEO_DESCRIPTION,
    start_url: `${SEO_BASE_PATH}/`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: SEO_THEME_COLOR,
    lang: SEO_LANGUAGE,
    icons: [
      {
        src: `${SEO_BASE_PATH}/brand-mark.svg`,
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        src: `${SEO_BASE_PATH}/icon.png`,
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}

