import { Metadata } from 'next';
import { ProjectContent } from '@/components/pages/ProjectContent';
import { createPageMetadata } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Construction Project',
  description:
    'Learn about the Graceway AGC Kitale construction project, why it matters, and how to pray, give, and serve.',
  path: '/about/construction-project',
  keywords: ['Graceway construction project', 'church building project', 'Graceway Kitale project'],
});

export default function ConstructionProjectPage() {
  return <ProjectContent />;
}

