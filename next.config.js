/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },

  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/resume/index.html', // Assuming your file is in public/resume/index.html
      },
    ];
  },
}

module.exports = nextConfig
