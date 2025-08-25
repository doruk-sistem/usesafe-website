import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

const nextConfig: NextConfig = {
  webpack(config) {
    // Remove any existing rules for SVG and image files
    config.module.rules = config.module.rules.filter((rule: any) => {
      if (typeof rule.test === "object" && rule.test instanceof RegExp) {
        return !rule.test.test(".svg") && !rule.test.test(".png");
      }
      return true;
    });

    // Add rules for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Add rules for image files
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp|ico)$/i,
      type: "asset/resource",
    });

    return config;
  },
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL].map((item) => {
        const url = new URL(item);
        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(":", ""),
        };
      }),
    ] as any,
  },
};

export default withNextIntl(nextConfig);
