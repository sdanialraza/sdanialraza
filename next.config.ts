import type { NextConfig } from "next";

export default {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  poweredByHeader: false,
  reactStrictMode: true,
} satisfies NextConfig;
