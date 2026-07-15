'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const infoSlides = [
  {
    id: 0,
    bgImage:
      '/uploads/2019/01/Mission-Message-2-Carousel-Images-2000x1500-1800x550.jpg',
    title: 'Graceway Leadership',
    description: 'Find out More about Our Leadership, Strategies and Beliefs right here!',
    href: '/about/leadership',
    buttonClass: 'button--black',
    buttonText: 'READ NOW!',
  },
  {
    id: 1,
    bgImage:
      '/uploads/2019/01/Mission-Message-2-Carousel-Images-2000x1500-1800x550.jpg',
    title: 'Our Beliefs',
    description: 'Find out More about Our Leadership, Strategies and Beliefs right here!',
    href: '/about/our-beliefs',
    buttonClass: 'button--purple',
    buttonText: 'READ NOW!',
  },
  {
    id: 2,
    bgImage:
      '/uploads/2019/01/Mission-Message-3-Carousel-Images-2000x1500-1800x550.jpg',
    title: 'Our Strategies',
    description: 'Find out More about Our Leadership, Strategies and Beliefs right here!',
    href: '/about/strategies',
    buttonClass: 'button--yellow',
    buttonText: 'READ NOW!',
  },
];

const gallerySlides = [
  {
    id: 0,
    image: '/uploads/2019/01/Vision-Book-1-Gallery-Images-2000x1500-1160x700.jpg',
  },
  {
    id: 1,
    image: '/uploads/2019/01/Vision-Book-3-Gallery-Images-2000x1500-1160x700.jpg',
  },
  {
    id: 2,
    image: '/uploads/2019/01/Vision-Book-2-Gallery-Images-2000x1500-1160x700.jpg',
  },
];

function InfoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % infoSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const previous = () => setCurrent((prev) => (prev - 1 + infoSlides.length) % infoSlides.length);
  const next = () => setCurrent((prev) => (prev + 1) % infoSlides.length);

  return (
    <section className="relative w-full overflow-hidden" data-aos="fade-up" data-aos-delay="200">
      <div className="relative w-full h-[500px]">
        {infoSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.bgImage}
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">{slide.description}</p>
                <div className="mt-8">
                  <Link
                    href={slide.href}
                    className={`button ${slide.buttonClass}`}
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 flex justify-between pointer-events-none">
        <button
          type="button"
          className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors pointer-events-auto text-white"
          onClick={previous}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          type="button"
          className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors pointer-events-auto text-white"
          onClick={next}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}

function GalleryCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % gallerySlides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  const previous = () =>
    setCurrent((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  const next = () => setCurrent((prev) => (prev + 1) % gallerySlides.length);

  return (
    <div className="relative w-full overflow-hidden mt-8">
      <div className="relative w-full h-[400px] md:h-[600px]">
        {gallerySlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 flex justify-between pointer-events-none">
        <button
          type="button"
          className="p-3 bg-white/50 hover:bg-white/80 rounded-full transition-colors pointer-events-auto text-gray-900"
          onClick={previous}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          className="p-3 bg-white/50 hover:bg-white/80 rounded-full transition-colors pointer-events-auto text-gray-900"
          onClick={next}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export function MediaContent() {
  return (
    <main>
      <section className="inline-image page-banner" style={{ backgroundImage: 'url(/assets/mediablue.png)' }}>
        <div className="container container--small">
          <div className="page-banner--content">
            <h1>MEDIA</h1>
          </div>
        </div>
        <div className="overlay" />
      </section>

      <section className="text-block text-block--internal">
        <div className="container container--small">
          <div className="aos-init aos-animate text-block--internal-content" data-aos="fade-up" data-aos-delay="200">
            <h3>
              Stay connected and inspired through the Media Page of Graceway AGC! Here, you&apos;ll find a treasure trove
              of resources to nourish your spiritual journey and keep you updated on church activities. Our media
              library features:
            </h3>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--grey" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image">
            <Image
              src="/assets/maggie-sermon-poster.png"
              alt="Sermons"
              width={2000}
              height={1500}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-image--text">
            <div className="text-image--text-content">
              <h3>Sermons</h3>
              <p>
                Dive into life-changing messages that uplift and challenge you in your spiritual journey. Whether you
                missed a Sunday service or want to revisit a powerful sermon, you can access recordings and stay
                connected to God&apos;s Word.
              </p>
            </div>
            <Link className="button button--cherry" href="/media/sermon">
              Our Sermons
            </Link>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--light" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image text-image--image--text-left">
            <Image
              src="/assets/bookcover.png"
              alt="Blog"
              width={2000}
              height={1500}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-image--text text-image--text-right">
            <div className="text-image--text-content">
              <h3>Blog</h3>
              <p>
                Explore thoughtful articles and stories written to encourage and inform. From personal testimonies to
                in-depth discussions on faith and life, our blog is a space for reflection and growth.
              </p>
            </div>
            <Link className="button button--yellow" href="/media/blog">
              Our Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--grey" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image">
            <Image
              src="/assets/connectcollage.png"
              alt="Our Gallery"
              width={2000}
              height={1500}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-image--text">
            <div className="text-image--text-content">
              <h3>Our Gallery</h3>
              <p>
                Experience the vibrancy of Graceway AGC through photos and videos. Our gallery showcases memorable
                moments from church events, celebrations, and ministries, capturing the heart of our community.
              </p>
            </div>
            <Link className="button button--blue" href="/media/gallery">
              Our Gallery
            </Link>
          </div>
        </div>
      </section>

      <InfoCarousel />

      <section className="text-block text-block--internal">
        <div className="container container--small">
          <div className="aos-init aos-animate text-block--internal-content" data-aos="fade-up" data-aos-delay="200">
            <h3>Check the Progress of the construction of the Graceway New Church</h3>
            <div className="section gallery-section">
              <GalleryCarousel />
            </div>
            <div className="carousel--content-butt">
              <Link href="/project" className="button button--purple">
                CHECK NOW!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

