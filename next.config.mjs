/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'infofrankrijk.com' },
    ],
  },
  async headers() {
    return [
      {
        // CSP frame-ancestors regelt welke sites moestuin-fr in een iframe mogen tonen.
        // X-Frame-Options bewust NIET gezet — frame-ancestors heeft voorrang en is
        // expressiever (multiple origins). Vervang/uitbreiden bij aanvullende domeinen.
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "frame-ancestors 'self' https://infofrankrijk.com https://www.infofrankrijk.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
