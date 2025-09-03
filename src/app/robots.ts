import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://skinera.com.ua'; // Update with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/auth/', '/account/', '*.pdf'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
