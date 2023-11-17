/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dasraa.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
