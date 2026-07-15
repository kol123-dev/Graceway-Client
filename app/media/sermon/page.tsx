import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sermons | Graceway AGC Kitale',
  description: 'Sermons from Graceway AGC Kitale.',
};

export default function SermonPage() {
  return (
    <main>
      <section className="inline-image page-banner" style={{ backgroundImage: 'url(/assets/mediablue.png)' }}>
        <div className="container container--small">
          <div className="page-banner--content">
            <h1>SERMONS</h1>
          </div>
        </div>
        <div className="overlay" />
      </section>

      <section className="text-block text-block--internal">
        <div className="container container--small">
          <div className="aos-init aos-animate text-block--internal-content" data-aos="fade-up" data-aos-delay="200">
            <h3>Sermons Coming soon, Keep in touch...</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

