import { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Sermons',
  description:
    'Listen to sermons from Graceway AGC Kitale and stay connected to weekly Bible teaching, pastoral messages, and gospel encouragement.',
  path: '/media/sermon',
  keywords: ['Graceway sermons', 'Bible teaching Kitale', 'church messages Graceway', 'pastoral sermons'],
});

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
            <h2>A sermon archive for listening, revisiting, and sharing biblical teaching.</h2>
            <p>
              The Graceway sermons page is for visitors and members who want to revisit Sunday messages, listen during
              the week, and remain connected to the teaching life of the church.
            </p>
            <p>
              As the sermon archive expands, you can also visit the <Link href="/media">media hub</Link>, read the{' '}
              <Link href="/media/blog">Graceway blog</Link>, or learn more <Link href="/about">about Graceway</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

