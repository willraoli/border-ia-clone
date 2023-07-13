/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "randomuser.me", protocol: "https" }],
  },
};

module.exports = nextConfig;
