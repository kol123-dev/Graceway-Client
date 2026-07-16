import { Metadata } from 'next';
import { AboutContent } from '@/components/pages/AboutContent';
import { createPageMetadata } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'About Us',
  description:
    'Learn more about Graceway AGC Kitale, our mission, values, and leadership team.',
  path: '/about',
  keywords: ['about Graceway AGC Kitale Kenya', 'Graceway mission', 'Graceway values', 'Graceway leadership'],
});

export default function About() {
  return <AboutContent />;
}
