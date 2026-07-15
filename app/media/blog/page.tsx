import { Metadata } from 'next';
import { BlogIndexView } from '@/components/blog/BlogView';

export const metadata: Metadata = {
  title: 'Blog | Graceway AGC Kitale',
  description:
    'Read pastoral reflections, church life stories, and thoughtful faith articles from Graceway AGC Kitale.',
};

export default function BlogPage() {
  return <BlogIndexView />;
}

