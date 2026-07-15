import { Metadata } from 'next';
import { ProjectContent } from '@/components/pages/ProjectContent';

export const metadata: Metadata = {
  title: 'Construction Project | Graceway AGC Kitale',
  description: 'Graceway AGC new church construction project.',
};

export default function ConstructionProjectPage() {
  return <ProjectContent />;
}

