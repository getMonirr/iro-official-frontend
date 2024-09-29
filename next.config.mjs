import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  // experimental: {
  //   turbo: {
  //     resolveAlias: {
  //       canvas: "./empty-module.ts",
  //     },
  //   },
  // },
  swcMinify: false,
};

export default withNextIntl(nextConfig);
