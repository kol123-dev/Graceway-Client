'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, HandHeart, Landmark, Users } from 'lucide-react';
import styles from './pageShowcase.module.css';

const projectSlides = [
  {
    id: 0,
    bgImage: '/assets/church-construction-slider.png',
    title: 'A faithful beginning',
    description: 'The current Graceway structure has served well, but it no longer fits the space needed for a growing church family.',
  },
  {
    id: 1,
    bgImage: '/assets/side-view1.jpg',
    title: 'Exterior direction',
    description: 'The design points toward a more welcoming and lasting place for worship, gathering, and church life.',
  },
  {
    id: 2,
    bgImage: '/assets/interior church 1.jpeg',
    title: 'Interior vision',
    description: 'The new interior aims to feel calm, practical, and ready for weekly ministry and future growth.',
  },
  {
    id: 3,
    bgImage: '/assets/plan-sign-draft.jpg',
    title: 'Planning and approvals',
    description: 'Careful planning has helped turn the vision from aspiration into a readable, actionable construction path.',
  },
];

const projectPhases = [
  {
    title: 'Plans and approvals',
    status: 'Administrative groundwork',
    note: 'Completed',
    description:
      'Reports, approvals, and planning documents helped establish the project on a clearer, more practical footing.',
  },
  {
    title: 'Foundation stage',
    status: 'Current financial focus',
    note: 'Estimated at KES 1,200,000',
    description:
      'The next major milestone is the foundation work, where provision, logistics, and church-wide participation meet.',
  },
  {
    title: 'Shared participation',
    status: 'Prayer, giving, service',
    note: 'Open now',
    description:
      'The project moves best when the congregation participates together with prayer, financial support, and practical help.',
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
    <section className={styles.carousel}>
      <div className={styles.carouselStage}>
        {projectSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.carouselSlide} ${index === current ? styles.carouselSlideActive : ''}`}
            aria-hidden={index !== current}
          >
            <div className="relative h-full w-full">
              <Image src={slide.bgImage} alt={slide.title} fill className={styles.carouselImage} unoptimized />
              <div className={styles.carouselContent}>
                <span className={styles.eyebrow}>Project journal</span>
                <h3 className={styles.carouselTitle}>{slide.title}</h3>
                <p className={styles.carouselText}>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.carouselControls}>
        <button type="button" className={styles.carouselButton} onClick={previous} aria-label="Previous slide">
          <ChevronLeft size={18} />
        </button>
        <button type="button" className={styles.carouselButton} onClick={next} aria-label="Next slide">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

export function ProjectContent() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: 'url(/assets/New%20Church%20design.jpg)' }}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Graceway Project</span>
            <h1 className={styles.heroTitle}>Building a more welcoming home for worship, discipleship, and community.</h1>
            <p className={styles.heroText}>
              The new church project is a practical response to growth at Graceway. It is about creating a more stable,
              lasting place for the congregation to gather, serve, and continue ministry into the future.
            </p>
            <div className={styles.heroActions}>
              <Link href="/give" className={styles.primaryLink}>
                Give to the project
                <ArrowRight size={16} />
              </Link>
              <Link href="/connect" className={styles.secondaryLink}>
                Volunteer with us
              </Link>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <div className={styles.heroPanel}>
              <span className={styles.cardMeta}>Project snapshot</span>
              <div className={styles.statGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Current focus</span>
                  <span className={styles.statValue}>Phase 2</span>
                  <span className={styles.statNote}>Resourcing and preparing the foundation stage.</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Shared response</span>
                  <span className={styles.statValue}>Build</span>
                  <span className={styles.statNote}>Prayer, service, and giving all move the work forward.</span>
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
              <span className={styles.sectionEyebrow}>Why this matters</span>
              <h2 className={styles.sectionTitle}>The project comes from ministry need, not excess.</h2>
            </div>
            <p className={styles.sectionText}>
              Graceway&apos;s current church structure has served faithfully, but the congregation has grown beyond what
              that temporary space can comfortably support. This project is about creating a more suitable and enduring
              home for the church family.
            </p>
          </div>

          <div className={styles.introGrid}>
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>What we are building toward</h3>
              <p className={styles.panelText}>
                A church environment that feels welcoming, practical, and ready for worship, fellowship, and the next
                chapter of Graceway&apos;s ministry in Kitale.
              </p>
            </div>

            <div className={styles.metricGrid}>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>Prayer</span>
                <span className={styles.metricLabel}>Seeking God&apos;s direction and provision.</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>Giving</span>
                <span className={styles.metricLabel}>Supporting each stage with generosity.</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>Service</span>
                <span className={styles.metricLabel}>Offering time, skill, and practical help.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.split}>
            <div className={styles.splitMedia}>
              <Image
                src="/assets/plan-sign-draft.jpg"
                alt="Architectural plans and approval documents"
                fill
                className={styles.splitImage}
                unoptimized
              />
            </div>

            <div className={styles.splitBody}>
              <span className={styles.sectionEyebrow}>Project path</span>
              <h3>One stage at a time, with clearer visibility.</h3>
              <p>
                Early work on the project has focused on planning, approvals, and preparing the church for a steadier
                construction process. That groundwork gives the rest of the build a more responsible foundation.
              </p>
              <p>
                The goal is not to rush, but to keep the process readable, prayerful, and shared by the whole church.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>Project phases</span>
              <h2 className={styles.sectionTitle}>A simpler overview of where the build stands.</h2>
            </div>
            <p className={styles.sectionText}>
              These phases help frame the project as a steady progression rather than one overwhelming appeal.
            </p>
          </div>

          <div className={styles.timeline}>
            {projectPhases.map((phase) => (
              <article key={phase.title} className={styles.timelineCard}>
                <div className={styles.timelineHeader}>
                  <span className={styles.badge}>{phase.status}</span>
                  <span className={`${styles.badge} ${styles.badgeMuted}`}>{phase.note}</span>
                </div>
                <h3 className={styles.timelineTitle}>{phase.title}</h3>
                <p className={styles.timelineText}>{phase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>Visual progress</span>
              <h2 className={styles.sectionTitle}>Key views of the project in one calmer gallery.</h2>
            </div>
            <p className={styles.sectionText}>
              Follow the story through the current church, early plans, exterior direction, and interior vision.
            </p>
          </div>

          <ProjectCarousel />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <span className={styles.cardIcon}>
                <Landmark size={20} />
              </span>
              <span className={styles.cardMeta}>Give</span>
              <h3 className={styles.cardTitle}>Support the build financially.</h3>
              <p className={styles.cardText}>
                Financial support helps Graceway move each construction step forward with stronger momentum and clarity.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.cardIcon}>
                <HandHeart size={20} />
              </span>
              <span className={styles.cardMeta}>Pray</span>
              <h3 className={styles.cardTitle}>Cover the project in prayer.</h3>
              <p className={styles.cardText}>
                Pray for wisdom, provision, protection, and faithfulness as the church continues to build together.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.cardIcon}>
                <Users size={20} />
              </span>
              <span className={styles.cardMeta}>Serve</span>
              <h3 className={styles.cardTitle}>Offer time and practical help.</h3>
              <p className={styles.cardText}>
                The project also benefits from willing hands, useful skills, and members ready to serve when needed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.ctaBand}>
            <span className={styles.sectionEyebrow}>Build together</span>
            <h2 className={styles.ctaBandTitle}>Join the next phase with prayer, generosity, or service.</h2>
            <p className={styles.ctaBandText}>
              This project is a shared act of faith. Every contribution, whether practical or financial, becomes part
              of Graceway&apos;s long-term ministry story.
            </p>
            <div className={styles.ctaBandActions}>
              <Link href="/give" className={styles.ghostLink}>
                Give now
              </Link>
              <Link href="/connect" className={styles.ghostLink}>
                Contact the church
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

