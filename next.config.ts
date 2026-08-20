import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").pop() ?? "";
const isUserSite = repositoryName.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: "export",
  basePath:
    process.env.GITHUB_ACTIONS && repositoryName && !isUserSite
      ? `/${repositoryName}`
      : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
