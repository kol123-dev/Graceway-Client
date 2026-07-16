 import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { SermonsSection } from '@/components/sections/SermonsSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  description:
    'Join Graceway AGC Kitale, Kenya for worship, discipleship, gospel teaching, and community life centered on Jesus Christ.',
  keywords: ['Graceway AGC Kitale Kenya', 'worship in Kitale', 'church home Kitale', 'Christian fellowship Kitale'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.name,
    description:
      'Join Graceway AGC Kitale,Kenya for worship, discipleship, gospel teaching, and community life centered on Jesus Christ.',
    url: '/',
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description:
      'Join Graceway AGC Kitale,Kenya for worship, discipleship, gospel teaching, and community life centered on Jesus Christ.',
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="next-event">
        <div className="container container--small flex">
          <div className="next-event--left-half">
            <span className="next-event--heading">GRACEWAY ONLINE:</span>{' '}
            <span className="next-event--date">
              WATCH OUR SERMONS ON YOUTUBE EVERY WEEK
            </span>
          </div>
          <div className="next-event--close">
            <span role="button" aria-label="close this next event banner">
              Close
            </span>
          </div>
        </div>
      </section>
      <WelcomeSection />
      <SermonsSection />
      <EventsSection />
    </main>
  );
}
