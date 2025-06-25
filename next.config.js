/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: "",
  trailingSlash: true,
  distDir: "out",
};

module.exports = nextConfig;
