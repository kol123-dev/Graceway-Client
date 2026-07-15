import { Metadata } from 'next';
import { AboutContent } from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Graceway AGC Kitale',
  description:
    'Learn more about Graceway AGC Kitale, our mission, values, and leadership team.',
};

export default function About() {
  return <AboutContent />;
}
