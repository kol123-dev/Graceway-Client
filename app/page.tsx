import { HeroSection } from '@/components/sections/HeroSection';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { SermonsSection } from '@/components/sections/SermonsSection';
import { EventsSection } from '@/components/sections/EventsSection';

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
