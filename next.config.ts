import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "utfs.io" },
      { protocol: "https", hostname: "mnje44qvzv.ufs.sh" },
    ],
  },
};

export default nextConfig;
