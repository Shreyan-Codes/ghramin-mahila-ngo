import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  images: {
    // Modern formats cut image weight substantially, which feeds directly into
    // Largest Contentful Paint — a Core Web Vitals ranking signal.
    formats: ['image/avif', 'image/webp'] as ('image/avif' | 'image/webp')[],
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: '**',
      },
    ],
  },
  // One canonical shape per URL: no trailing-slash duplicates.
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
};

export default withNextIntl(nextConfig);
