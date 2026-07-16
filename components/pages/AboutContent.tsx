'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye, HeartHandshake, Target } from 'lucide-react';
import styles from './pageShowcase.module.css';

const aboutAreas = [
  {
    title: 'Mission',
    description:
      'Graceway seeks to fulfil the Great Commandment and the Great Commission of Jesus Christ with faithfulness and clarity.',
    href: '/about/mission',
    icon: Target,
    meta: 'Why we serve',
  },
  {
    title: 'Values',
    description:
      'Our values shape the way we worship, lead, serve one another, and remain rooted in practical biblical discipleship.',
    href: '/about/values',
    icon: HeartHandshake,
    meta: 'How we live',
  },
  {
    title: 'Vision',
    description:
      'The whole church taking the whole gospel to the whole world remains a defining vision for the Graceway family.',
    href: '/about/vision',
    icon: Eye,
    meta: 'Where we are going',
  },
];

export function AboutContent() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: 'url(/assets/church-members-outside.jpg)' }}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>About Graceway</span>
            <h1 className={styles.heroTitle}>A church family rooted in Scripture, worship, and shared life.</h1>
            <p className={styles.heroText}>
              Graceway AGC Kitale is part of the wider Africa Gospel Church tradition in Kenya. We want to be a church
              that holds together biblical conviction, warm fellowship, and visible service in the community.
            </p>
            <div className={styles.heroActions}>
              <Link href="/connect" className={styles.primaryLink}>
                Join the church family
                <ArrowRight size={16} />
              </Link>
              <Link href="/about/construction-project" className={styles.secondaryLink}>
                View the project story
              </Link>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <div className={styles.heroPanel}>
              <span className={styles.cardMeta}>Graceway at a glance</span>
              <div className={styles.statGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Heritage</span>
                  <span className={styles.statValue}>AGC</span>
                  <span className={styles.statNote}>Part of an evangelical church family with deep roots in Kenya.</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Posture</span>
                  <span className={styles.statValue}>Biblical</span>
                  <span className={styles.statNote}>Led by Scripture, the Holy Spirit, and practical discipleship.</span>
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
              <span className={styles.sectionEyebrow}>Who we are</span>
              <h2 className={styles.sectionTitle}>Graceway belongs to a larger gospel story and serves one local community.</h2>
            </div>
            <p className={styles.sectionText}>
              Africa Gospel Church traces its roots in Kenya to the work of missionaries from World Gospel Mission.
              Graceway stands within that broader story while serving Kitale as a local church family with its own
              pastoral rhythm and community focus.
            </p>
          </div>

          <div className={styles.split}>
            <div className={styles.splitMedia}>
              <Image src="/assets/mission.png" alt="Graceway mission artwork" fill className={styles.splitImage} unoptimized />
            </div>

            <div className={styles.splitBody}>
              <span className={styles.sectionEyebrow}>Church life</span>
              <h3>Strengthening families, forming disciples, and serving with hope.</h3>
              <p>
                Graceway focuses on strengthening families, empowering individuals, and building a church culture that
                is spiritually grounded and practically engaged with people&apos;s lives.
              </p>
              <p>
                Whether through worship services, Bible study, or outreach, the church aims to make Christ visible in
                the everyday life of the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>Core areas</span>
              <h2 className={styles.sectionTitle}>Our Mission, values, and vision.</h2>
            </div>
            <p className={styles.sectionText}>
              How Graceway is aiming to be and how it wants to live that calling out.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {aboutAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article key={area.title} className={styles.card}>
                  <span className={styles.cardIcon}>
                    <Icon size={20} />
                  </span>
                  <span className={styles.cardMeta}>{area.meta}</span>
                  <h3 className={styles.cardTitle}>{area.title}</h3>
                  <p className={styles.cardText}>{area.description}</p>
                  <div className={styles.cardActions}>
                    <Link href={area.href} className={styles.inlineLink}>
                      Read more
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.ctaBand}>
            <span className={styles.sectionEyebrow}>Graceway next steps</span>
            <h2 className={styles.ctaBandTitle}>Explore the construction story or find your place in the church family.</h2>
            <p className={styles.ctaBandText}>
              If you want to see what Graceway is building physically and spiritually, the project page and connect page
              are the clearest next steps.
            </p>
            <div className={styles.ctaBandActions}>
              <Link href="/about/construction-project" className={styles.ghostLink}>
                View construction project
              </Link>
              <Link href="/connect" className={styles.ghostLink}>
                Explore connect groups
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
