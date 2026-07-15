'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 0,
    title: 'Join us this Sunday at Graceway AGC for a Powerful time of worship',
    content:
      'Make sure to catch up, listen - as we have numerous speakers to share the word of Jesus!',
    href: '/connect',
    buttonText: 'Join Us',
    buttonClass: 'button--green',
    navClass: 'banner-slider--nav-item-green',
    navTitle: 'Sunday Worship',
    navMeta: 'Weekly gathering',
    bgImage: '/assets/church-members-outside.jpg',
  },
  {
    id: 1,
    title: 'Catch up on our timely Messages of Christ',
    content:
      "If you're looking to be blessed with our messages, click here to find out .",
    href: '/give',
    buttonText: 'Our Sermons, Blog and Articles',
    buttonClass: 'button--blue',
    navClass: 'banner-slider--nav-item-blue',
    navTitle: 'Sermons and Blogs',
    navMeta: 'Messages and articles',
    bgImage: '/assets/sermon-banner-main.png',
  },
  {
    id: 2,
    title: 'Help us Build our New Church',
    content:
      'Make sure to make a big difference in the community by helping us build a community church',
    href: '/give',
    buttonText: 'GET INVOLVED',
    buttonClass: 'button--yellow',
    navClass: 'banner-slider--nav-item-yellow',
    navTitle: 'Church Project',
    navMeta: 'Build with us',
    bgImage: '/assets/church-construction-slider.png',
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="banner-slider-container relative w-full h-[600px] md:h-[800px] overflow-hidden bg-black">
      <div className="banner-slider relative w-full h-full">
        {heroSlides.map((s, index) => (
          <div
            key={s.id}
            className={`owl-item absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'active opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <div className="banner-slider--item flex" data-id={s.id}>
              <div
                className="inline-image banner-slider--bk-image"
                aria-hidden="true"
                style={{ backgroundImage: `url(${s.bgImage})` }}
              />
              <div className="container">
                <div className="banner-slider--content-contain">
                  <h1 className="banner-slider--title">{s.title}</h1>
                  <p className="banner-slider--content">{s.content}</p>
                  <Link className={`button ${s.buttonClass}`} href={s.href}>
                    {s.buttonText}
                  </Link>
                </div>
              </div>
              <div className="overlay" />
            </div>
          </div>
        ))}
      </div>

      <div className="banner-slider--navigation container flex">
        <div id="banner-slider--buttons" className="banner-slider--buttons">
          <button type="button" onClick={previousSlide} aria-label="Previous slide">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button type="button" onClick={nextSlide} aria-label="Next slide">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div id="banner-slider--nav" className="banner-slider--nav">
          {heroSlides.map((s, index) => (
            <button
              type="button"
              key={s.id}
              id={`nav-item-${s.id}`}
              aria-label={`Go to slide ${index + 1}: ${s.navTitle}`}
              className={`bannerSliderTrigger banner-slider--nav-item ${
                s.navClass
              }${index === currentSlide ? ' banner-slider--nav-item-active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              <span className="banner-slider--nav-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="banner-slider--nav-copy">
                <span className="banner-slider--nav-title">{s.navTitle}</span>
                <span className="banner-slider--nav-meta">{s.navMeta}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="sr-only"
        onClick={previousSlide}
        aria-label="Previous slide"
      />
      <button
        type="button"
        className="sr-only"
        onClick={nextSlide}
        aria-label="Next slide"
      />
    </section>
  );
}
