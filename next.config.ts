import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  ...(process.env.GITHUB_PAGES === "true" ? { basePath: "/interdimensional_cable" } : {}),
};

export default nextConfig;
