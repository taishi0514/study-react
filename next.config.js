const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
