/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },

  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/resume/index.html", // Assuming your file is in public/resume/index.html
      },
      {
        source: "/vue-test-app",
        destination: "/vue-test-app/index.html", // Assuming your file is in public/resume/index.html
      },
      {
        source: "/video-page",
        destination: "/video-page/index.html", // Assuming your file is in public/resume/index.html
      },
      {
        source: "/video-page/video",
        destination: "/video-page/video.html", // Assuming your file is in public/resume/index.html
      },
    ];
  },
};

module.exports = nextConfig;
