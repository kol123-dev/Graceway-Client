'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 0,
    bgImage: '/assets/anto-sermon-poster.png',
    lines: ['Make sure to keep up to date on TikTok – follow us!'],
    href: 'https://www.tiktok.com/',
    buttonText: 'Follow us on TikTok',
    buttonClass: 'button--cherry',
  },
  {
    id: 1,
    bgImage: '/assets/maggie-sermon-poster.png',
    lines: ['Make sure to keep up to date on Facebook – follow us!'],
    href: 'https://www.facebook.com/gracewayagc',
    buttonText: 'Follow us on Facebook',
    buttonClass: 'button--blue',
  },
  {
    id: 2,
    bgImage: '/uploads/2024/01/3-2-2000x550.png',
    lines: [
      'You can watch our gatherings wherever you may be.',
      'Subscribe, watch and catch up.',
    ],
    href: 'https://www.youtube.com/channel/UCq65aktTY7wLJARpf8FYXtQ',
    buttonText: 'YouTube',
    buttonClass: 'button--cherry',
  },
];

export function SermonsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="carousel relative overflow-hidden" data-aos="fade-up" data-aos-delay="5">
      <div className="relative min-h-[420px] md:min-h-[520px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`owl-item absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'active opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <div
              className="inline-image carousel--slide"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="container container--small">
                <div className="carousel--content">
                  {slide.lines.map((line) => (
                    <p key={line} style={{ textAlign: 'center' }}>
                      {line}
                    </p>
                  ))}
                  <div className="carousel--content-butt">
                  <a
                    href={slide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                      className={`button ${slide.buttonClass}`}
                  >
                    {slide.buttonText}
                  </a>
                  </div>
                </div>
              </div>
              <div className="overlay" />
            </div>
          </div>
        ))}
      </div>

      <div className="owl-nav">
        <button
          type="button"
          className="owl-prev"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>
        <button
          type="button"
          className="owl-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-10 w-10" />
        </button>
      </div>
    </section>
  );
}
