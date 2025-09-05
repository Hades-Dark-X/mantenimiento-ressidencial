import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/mantenimiento-ressidencial",

  images: {
    unoptimized: true,
  },
  eslint: {
    // Advertencia: Esto no solucionará los errores, solo los ignorará para el despliegue.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
