import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ← This will bypass ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // ← Optional: Also ignore TS errors if needed
  },
}

export default nextConfig