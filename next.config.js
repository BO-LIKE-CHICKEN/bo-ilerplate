/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.modules.push(__dirname); // 추가
    return config;
  },
};

module.exports = nextConfig;
