'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, BookOpenText, ChevronLeft, ChevronRight, Images, Mic2 } from 'lucide-react';
import styles from './pageShowcase.module.css';

const gallerySlides = [
  {
    id: 0,
    image: '/uploads/2019/01/Vision-Book-1-Gallery-Images-2000x1500-1160x700.jpg',
    alt: 'Graceway congregation during a worship and fellowship gathering',
  },
  {
    id: 1,
    image: '/uploads/2019/01/Vision-Book-3-Gallery-Images-2000x1500-1160x700.jpg',
    alt: 'Graceway church members sharing a community ministry moment',
  },
  {
    id: 2,
    image: '/uploads/2019/01/Vision-Book-2-Gallery-Images-2000x1500-1160x700.jpg',
    alt: 'Graceway AGC event scene captured for the media gallery',
  },
];

function GalleryCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % gallerySlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const previous = () => setCurrent((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  const next = () => setCurrent((prev) => (prev + 1) % gallerySlides.length);

  return (
    <section className={styles.carousel}>
      <div className={styles.carouselStage}>
        {gallerySlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.carouselSlide} ${index === current ? styles.carouselSlideActive : ''}`}
            aria-hidden={index !== current}
          >
            <div className="relative h-full w-full">
              <Image src={slide.image} alt={slide.alt} fill className={styles.carouselImage} unoptimized />
              <div className={styles.carouselContent}>
                <span className={styles.eyebrow}>Church life</span>
                <h3 className={styles.carouselTitle}>Moments from worship, fellowship, and ministry.</h3>
                <p className={styles.carouselText}>
                  Browse a rotating glimpse of the life and joy shared across Graceway gatherings and community moments.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.carouselControls}>
        <button type="button" className={styles.carouselButton} onClick={previous} aria-label="Previous image">
          <ChevronLeft size={18} />
        </button>
        <button type="button" className={styles.carouselButton} onClick={next} aria-label="Next image">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

export function MediaContent() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: 'url(/assets/mediablue.png)' }}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Graceway Media</span>
            <h1 className={styles.heroTitle}>Messages, journal reflections, and church moments in one place.</h1>
            <p className={styles.heroText}>
              The media page brings together the main ways Graceway shares teaching and story: sermons for listening,
              journal posts for slower reflection, and gallery moments from the life of the church.
            </p>
            <div className={styles.heroActions}>
              <Link href="/media/sermon" className={styles.primaryLink}>
                Listen to sermons
                <ArrowRight size={16} />
              </Link>
              <Link href="/media/blog" className={styles.secondaryLink}>
                Read the blog
              </Link>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <div className={styles.heroPanel}>
              <span className={styles.cardMeta}>Media focus</span>
              <div className={styles.statGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Listen</span>
                  <span className={styles.statValue}>Sermons</span>
                  <span className={styles.statNote}>Weekly teaching and revisited messages in one archive.</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Read</span>
                  <span className={styles.statValue}>Journal</span>
                  <span className={styles.statNote}>Thoughtful writing and pastoral reflections from Graceway.</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>Media library</span>
              <h2 className={styles.sectionTitle}>Three simple ways to stay connected through content.</h2>
            </div>
            <p className={styles.sectionText}>
              Each area serves a different kind of engagement while keeping the page itself calm, readable, and not
              overly crowded.
            </p>
          </div>

          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <span className={styles.cardIcon}>
                <Mic2 size={20} />
              </span>
              <span className={styles.cardMeta}>Audio and teaching</span>
              <h3 className={styles.cardTitle}>Sermons</h3>
              <p className={styles.cardText}>
                Catch up on Sunday teaching, revisit recent messages, and stay rooted in Graceway&apos;s preaching
                ministry through the week.
              </p>
              <div className={styles.cardActions}>
                <Link href="/media/sermon" className={styles.inlineLink}>
                  Open sermons
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            <article className={styles.card}>
              <span className={styles.cardIcon}>
                <BookOpenText size={20} />
              </span>
              <span className={styles.cardMeta}>Writing and reflection</span>
              <h3 className={styles.cardTitle}>Blog</h3>
              <p className={styles.cardText}>
                Explore pastoral reflections, scripture-based encouragement, and longer-form journal writing from the
                Graceway blog.
              </p>
              <div className={styles.cardActions}>
                <Link href="/media/blog" className={styles.inlineLink}>
                  Open blog
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            <article className={styles.card}>
              <span className={styles.cardIcon}>
                <Images size={20} />
              </span>
              <span className={styles.cardMeta}>Photos and moments</span>
              <h3 className={styles.cardTitle}>Gallery</h3>
              <p className={styles.cardText}>
                See memorable moments from worship, gatherings, and ministry life across the Graceway community.
              </p>
              <div className={styles.cardActions}>
                <Link href="/media/gallery" className={styles.inlineLink}>
                  Open gallery
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <div className={styles.featureMedia}>
                <Image src="/assets/maggie-sermon-poster.png" alt="Graceway sermon archive" fill className={styles.featureImage} unoptimized />
              </div>
              <div className={styles.featureBody}>
                <span className={styles.cardMeta}>Sermon archive</span>
                <h3 className={styles.cardTitle}>Teaching that remains accessible through the week.</h3>
                <p className={styles.cardText}>
                  Use the sermon archive to stay connected to Graceway&apos;s weekly teaching wherever you may be.
                </p>
              </div>
            </article>

            <article className={styles.featureCard}>
              <div className={styles.featureMedia}>
                <Image src="/assets/bookcover.png" alt="Graceway blog cover" fill className={styles.featureImage} unoptimized />
              </div>
              <div className={styles.featureBody}>
                <span className={styles.cardMeta}>Pastoral journal</span>
                <h3 className={styles.cardTitle}>Longer-form reflections with a calmer reading experience.</h3>
                <p className={styles.cardText}>
                  The blog extends Sunday teaching into slower written reflection and practical encouragement.
                </p>
              </div>
            </article>

            <article className={styles.featureCard}>
              <div className={styles.featureMedia}>
                <Image src="/assets/connectcollage.png" alt="Graceway gallery collage" fill className={styles.featureImage} unoptimized />
              </div>
              <div className={styles.featureBody}>
                <span className={styles.cardMeta}>Community gallery</span>
                <h3 className={styles.cardTitle}>A visual record of the life shared by the church family.</h3>
                <p className={styles.cardText}>
                  Photos from church events, celebrations, and ministries help tell the story of Graceway&apos;s life together.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>Community moments</span>
              <h2 className={styles.sectionTitle}>A quieter gallery of life at Graceway.</h2>
            </div>
            <p className={styles.sectionText}>
              The gallery rotation keeps the page visual without feeling busy and offers a simple glimpse into church
              life.
            </p>
          </div>

          <GalleryCarousel />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.ctaBand}>
            <span className={styles.sectionEyebrow}>Beyond media</span>
            <h2 className={styles.ctaBandTitle}>Follow the wider Graceway story beyond the media archive.</h2>
            <p className={styles.ctaBandText}>
              If you want more than messages and photos, you can also explore the project page and the broader church
              story through the main site sections.
            </p>
            <div className={styles.ctaBandActions}>
              <Link href="/project" className={styles.ghostLink}>
                View project page
              </Link>
              <Link href="/about" className={styles.ghostLink}>
                Read about Graceway
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

