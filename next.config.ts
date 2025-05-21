import type { NextConfig } from "next";

export default {
  experimental: {
    ppr: true,
    reactCompiler: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  poweredByHeader: false,
  reactStrictMode: true,
} satisfies NextConfig;
