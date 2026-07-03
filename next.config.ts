import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/yash-portfolio",
  assetPrefix: "/yash-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
