import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://majestic-rp.ru/**"),
      new URL("https://cdn2.tuoitre.vn/**"),
    ],
  },
};

export default nextConfig;
