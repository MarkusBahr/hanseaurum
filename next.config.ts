import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["sql.js"],
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
