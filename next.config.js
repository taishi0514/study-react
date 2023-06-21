/** @type {import('next').NextConfig} */

// const dns = require("dns");
// dns.setDefaultResultOrder("ipv4first")

const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
}

module.exports = nextConfig