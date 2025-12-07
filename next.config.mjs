/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "new.primor.com.br",
      },
      {
        protocol: "http",
        hostname: "primor-teste.local",
      },
    ]
  },
};

export default nextConfig;
