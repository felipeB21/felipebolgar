import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
        pathname: "/weather/**", // Optional: restricts to weather images path
      },
    ],
  },
};

export default nextConfig;
