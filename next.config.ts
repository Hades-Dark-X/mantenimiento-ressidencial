import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/mantenimiento-ressidencial",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
