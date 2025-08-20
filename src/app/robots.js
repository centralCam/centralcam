
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://centralcamshop.com';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/Admin/', '/api/'], // suma /api/ si no querés que lo rastreen
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
