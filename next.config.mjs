/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  
  assetPrefix: "/app/"
};

import withBundleAnalyzer from "@next/bundle-analyzer";

export default process.env.ANALYZE === "true"
  ? withBundleAnalyzer()(nextConfig)
  : nextConfig;
