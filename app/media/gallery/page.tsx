import { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Gallery',
  description:
    'Explore photo moments from worship, fellowship, and church life at Graceway AGC Kitale through the Graceway gallery.',
  path: '/media/gallery',
  keywords: ['Graceway gallery', 'church photos Kitale', 'Graceway events', 'Graceway worship moments'],
});

export default function GalleryPage() {
  return (
    <main>
      <section className="inline-image page-banner" style={{ backgroundImage: 'url(/assets/mediablue.png)' }}>
        <div className="container container--small">
          <div className="page-banner--content">
            <h1>GALLERY</h1>
          </div>
        </div>
        <div className="overlay" />
      </section>

      <section className="text-block text-block--internal">
        <div className="container container--small">
          <div className="aos-init aos-animate text-block--internal-content" data-aos="fade-up" data-aos-delay="200">
            <h2>A visual archive of worship, fellowship, and church life at Graceway.</h2>
            <p>
              The Graceway gallery will gather moments from Sunday worship, ministry events, church celebrations, and
              shared community life in Kitale. It is designed to help visitors see the warmth and rhythm of the church
              beyond a single service.
            </p>
            <p>
              While the full gallery is still being organized, you can explore the{' '}
              <Link href="/media">media page</Link>, read reflections on the <Link href="/media/blog">Graceway blog</Link>,
              or follow the <Link href="/project">church project story</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

