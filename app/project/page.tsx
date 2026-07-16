import { Metadata } from 'next';
import { ProjectContent } from '@/components/pages/ProjectContent';
import { createPageMetadata } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Project',
  description:
    'Follow the Graceway AGC Kitale church construction project and learn how to pray, support, and stay engaged.',
  path: '/project',
  keywords: ['Graceway project', 'church construction Kitale', 'Graceway building project'],
});

export default function ProjectPage() {
  return <ProjectContent />;
}

