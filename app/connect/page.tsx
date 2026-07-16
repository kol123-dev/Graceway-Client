import type { Metadata } from 'next';
import { ConnectContent } from '@/components/pages/ConnectContent';
import { createPageMetadata } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Connect',
  description:
    'Explore fellowships, ministries, and church communities at Graceway AGC Kitale and find where you can belong.',
  path: '/connect',
  keywords: ['Graceway connect', 'church fellowships Kitale', 'Christian community Kitale', 'Graceway ministries'],
});

export default function Connect() {
  return <ConnectContent />;
}
