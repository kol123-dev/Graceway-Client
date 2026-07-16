import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/mockBlogPosts';
import { absoluteUrl } from '@/lib/site';

const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/connect', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/give', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/media', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/media/blog', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/media/gallery', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/media/sermon', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/project', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/about/construction-project', priority: 0.6, changeFrequency: 'monthly' as const },
];

const aboutSlugs = [
  'mission',
  'values',
  'vision',
  'strategies',
  'our-beliefs',
  'doctrine',
  'leadership',
];

const connectSlugs = [
  'graceway-kids',
  'men-to-men',
  'youths-fearless',
  'graceway-women',
  'bible-study',
  'praise-worship',
  'graceway-couples',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const coreEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const aboutEntries: MetadataRoute.Sitemap = aboutSlugs.map((slug) => ({
    url: absoluteUrl(`/about/${slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const connectEntries: MetadataRoute.Sitemap = connectSlugs.map((slug) => ({
    url: absoluteUrl(`/connect/${slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: absoluteUrl(`/media/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...coreEntries, ...aboutEntries, ...connectEntries, ...blogEntries];
}
