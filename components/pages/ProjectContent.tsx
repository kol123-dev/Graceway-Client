'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const projectSlides = [
  {
    id: 0,
    bgImage: '/assets/church-construction-slider.png',
    title: 'Our Old Church',
  },
  {
    id: 1,
    bgImage: '/assets/side-view1.jpg',
    title: 'The New Church -Exterior Design',
  },
  {
    id: 2,
    bgImage: '/assets/interior church 1.jpeg',
    title: 'The New Church - Interior Design',
  },
  {
    id: 3,
    bgImage: '/assets/plan-sign-draft.jpg',
    title: 'The Architectural Plan',
  },
];

function ProjectCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % projectSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const previous = () => setCurrent((prev) => (prev - 1 + projectSlides.length) % projectSlides.length);
  const next = () => setCurrent((prev) => (prev + 1) % projectSlides.length);

  return (
    <section className="relative w-full overflow-hidden mt-12" data-aos="fade-up" data-aos-delay="200">
      <div className="relative w-full h-[400px] md:h-[600px]">
        {projectSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.bgImage}
                alt={slide.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl md:text-4xl font-bold text-center px-4">{slide.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 flex justify-between pointer-events-none">
        <button
          type="button"
          className="p-3 bg-white/50 hover:bg-white/80 rounded-full transition-colors pointer-events-auto text-gray-900"
          onClick={previous}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          type="button"
          className="p-3 bg-white/50 hover:bg-white/80 rounded-full transition-colors pointer-events-auto text-gray-900"
          onClick={next}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}

export function ProjectContent() {
  return (
    <main>
      <section
        className="inline-image page-banner"
        style={{ backgroundImage: 'url(/assets/New%20Church%20design.jpg)' }}
      >
        <div className="container container--small">
          <div className="page-banner--content">
            <h1>Our New Church Construction Project</h1>
          </div>
        </div>
        <div className="overlay" />
      </section>

      <section className="text-block text-block--internal">
        <div className="container container--small">
          <div className="aos-init aos-animate text-block--internal-content" data-aos="fade-up" data-aos-delay="200">
            <h3>
              Building Together One Step at a time.
              <br />
              <br />
              Welcome to the Graceway AGC Construction Project!
            </h3>
            <p>
              For years, Graceway AGC has been a place of worship, fellowship, and growth. However, as our congregation
              has grown, our current church structure, made of iron sheets, has become too small to accommodate our
              thriving community. While it has served us faithfully, it’s time to create a more suitable, permanent
              home for our church family.
            </p>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--grey" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image">
            <Image
              src="/assets/plan-sign-draft.jpg"
              alt="Phase 1 - Plans & Approvals"
              width={2000}
              height={1500}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-image--text">
            <div className="text-image--text-content">
              <h3>Phase: 1 - Plans &amp; Approvals</h3>
              <p>
                By God’s grace, all necessary approvals have been successfully acquired, and we are ready to embark on
                the next phase of the Project. The Approvals and Plans include Nema report , NCA and Others.
              </p>
              <p>As of 21st Dec 2024</p>
            </div>
            <a className="button button--cherry" href="#" title="Phase: 1">
              Phase: 1
            </a>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--light" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image text-image--image--text-left">
            <Image
              src="/assets/churchfoundation.jpg"
              alt="Phase 2 - The Foundation"
              width={2000}
              height={1500}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-image--text text-image--text-right">
            <div className="text-image--text-content">
              <h3>Phase: 2 - The Foundation</h3>
              <p>
                By Gods Faith, We are Glad to have received 70% of the Resources needed to start and complete the
                Foundation work. The Foundation is estimated to cost a total of KES 1,200,000. We are hopeful to start
                the work on 6th Jan.
              </p>
            </div>
            <a className="button button--yellow" href="#" title="Phase: 2">
              Phase: 2
            </a>
          </div>
        </div>
      </section>

      <ProjectCarousel />

      <section className="text-block text-block--internal">
        <div className="container container--small">
          <div className="aos-init aos-animate text-block--internal-content" data-aos="fade-up" data-aos-delay="200">
            <h3>How you can Help</h3>
            <p>
              This new church will not only provide more space but also a more comfortable and welcoming environment
              where all can worship, grow, and connect. It’s more than just a building; it’s a testament to our faith
              and a legacy for future generations.
            </p>
            <p>How You can Help:</p>
            <ul>
              <li>Pray: Lift this project up in prayer, asking for God’s guidance and provision.</li>
              <li>Give: Support the construction work financially or in Kind to help us move forward.</li>
              <li>Volunteer: Offer your time and talents to assist with the work ahead.</li>
            </ul>
            <p>
              Together, we can make this vision a reality. Let’s rise as one body in Christ and build a home that
              glorifies God and welcomes all.
            </p>
            <h5>&quot;Unless the Lord builds the house, the builders labor in vain.&quot; – Psalm 127:1</h5>
            <h6>Stay connected for updates and opportunities to get involved. Let’s build together!</h6>
            <div className="carousel--content-butt">
              <Link href="/give" className="button button--purple">
                GIVE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

