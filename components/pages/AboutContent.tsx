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
                <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8">
                  {slide.description}
                </p>
                <div className="mt-8">
                  <Link
                    href={slide.href}
                    className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors"
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
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors pointer-events-auto text-white"
          onClick={next}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
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

export function AboutContent() {
  return (
    <main>
      <section
        className="inline-image page-banner"
        style={{ backgroundImage: 'url(/assets/church-members-outside.jpg)' }}
      >
        <div className="container container--small">
          <div className="page-banner--content">
            <h1>ABOUT GRACEWAY AGC CHURCH</h1>
          </div>
        </div>
        <div className="overlay" />
      </section>

      <section className="text-block text-block--internal">
        <div className="container container--small">
          <div className="aos-init aos-animate text-block--internal-content" data-aos="fade-up" data-aos-delay="200">
            <h3>
              Africa Gospel Church is an evangelical denomination in Kenya. The church traces its roots back to the
              work of missionaries from World Gospel Mission starting in 1905. From its registration as an autonomous
              entity on 29th August 1961, the church has grown to close to 2000 congregations spread in different parts
              of the country, GRACEWAY AGC, Kitale Being part of them.
            </h3>
            <p>
              Graceway AGC Kitale is Guided by Biblical principles and led by the Holy Spirit, we focus on
              strengthening families, empowering individuals, and building a strong spiritual foundation for our
              community. Whether through dynamic worship services, engaging Bible studies, or impactful outreach
              programs, Graceway AGC is dedicated to bringing hope and making a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--grey" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image">
            <Image
              src="/assets/mission.png"
              alt="Our Mission"
              width={2000}
              height={1500}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-image--text">
            <div className="text-image--text-content">
              <h3>Our Mission</h3>
              <p>
                The Mission of the Graceway AGC is to fulfill the Great Commandment and Great Commission of the Lord
                Jesus Christ according to the Great Plan.
              </p>
            </div>
            <Link className="button button--cherry" href="/about/mission">
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--light" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image text-image--image--text-left">
            <Image
              src="/assets/values.png"
              alt="Our Values"
              width={2000}
              height={1500}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-image--text text-image--text-right">
            <div className="text-image--text-content">
              <h3>Our Values</h3>
              <p>Graceway’s values are what we do alongside what we believe. Read more about our values here.</p>
            </div>
            <Link className="button button--yellow" href="/about/values">
              Our Values
            </Link>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--grey" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image">
            <Image
              src="/assets/vision.png"
              alt="Our Vision"
              width={2000}
              height={1500}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-image--text">
            <div className="text-image--text-content">
              <h3>Our Vision</h3>
              <p>
                The Whole Church taking the Whole Gospel to the Whole World. (Swahili: KANISA LOTE, likieneza INJILI
                YOTE, ULIMWENGUNI KOTE)
              </p>
            </div>
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
              <Link href="/about/construction-project" className="button button--purple">
                CHECK NOW!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

