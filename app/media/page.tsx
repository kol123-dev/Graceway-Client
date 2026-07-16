import { Metadata } from 'next';
import { MediaContent } from '@/components/pages/MediaContent';
import { createPageMetadata } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Media',
  description: 'Watch sermons, read blog reflections, and explore gallery moments from Graceway AGC Kitale.',
  path: '/media',
  keywords: ['Graceway media', 'Graceway sermons', 'Graceway blog', 'Graceway gallery'],
});

export default function MediaPage() {
  return <MediaContent />;
}

