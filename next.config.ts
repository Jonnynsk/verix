import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "development" ? "" : "/verix";

const nextConfig: NextConfig = {
  reactCompiler: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  output: "export",
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
