/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['localhost:3000', 'trycloudflare.com', '*.trycloudflare.com']
}

export default nextConfig
