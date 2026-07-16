import { Metadata } from 'next';
import { BlogIndexView } from '@/components/blog/BlogView';
import { createPageMetadata } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Blog',
  description:
    'Read pastoral reflections, church life stories, and faith-rooted articles from Graceway AGC Kitale.',
  path: '/media/blog',
  keywords: ['Graceway blog', 'Pastor Cyrus Mwangi', 'Christian reflections', 'church blog Kitale'],
});

export default function BlogPage() {
  return <BlogIndexView />;
}

