
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://centralcamshop.com';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/Admin/', '/api/', '/user/', '/Shopcart/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/Admin/', '/api/', '/user/', '/Shopcart/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/Admin/', '/user/'],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
