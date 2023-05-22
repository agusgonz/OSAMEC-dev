/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    key: process.env.key
  }
}

module.exports = nextConfig
