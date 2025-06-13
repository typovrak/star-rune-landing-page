/** @type {import('next').NextConfig} */
const nextConfig = {
  // WARNING: disable double trigger of useEffect []
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
