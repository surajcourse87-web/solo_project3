/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // OpenNext handles the build, so we keep this minimal
  // and ensure no standalone output is set here as it's handled by @opennextjs/cloudflare
}

module.exports = nextConfig
