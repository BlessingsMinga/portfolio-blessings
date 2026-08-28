/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line for static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Source maps add several megabytes to each production deployment.
  productionBrowserSourceMaps: false,
}

export default nextConfig
