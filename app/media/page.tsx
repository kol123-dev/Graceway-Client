import { Metadata } from 'next';
import { MediaContent } from '@/components/pages/MediaContent';

export const metadata: Metadata = {
  title: 'Media | Graceway AGC Kitale',
  description: 'Sermons, blogs, and gallery from Graceway AGC Kitale.',
};

export default function MediaPage() {
  return <MediaContent />;
}

