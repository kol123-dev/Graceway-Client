'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import styles from './pageShowcase.module.css';

const connectGroups = [
  {
    title: "Graceway Couple's Fellowship",
    description: 'A space for couples to strengthen their relationships, pray together, and grow in shared faith.',
    href: '/connect/graceway-couples',
    image: '/assets/couples-2.jpg',
    meta: 'For couples',
  },
  {
    title: 'Man to Man',
    description: 'A gathering for men to encourage one another, share wisdom, and pursue mature discipleship together.',
    href: '/connect/men-to-men',
    image: '/assets/njehia-ndingor-pastor.jpg',
    meta: 'For men',
  },
  {
    title: 'Women of Christ',
    description: 'A nurturing community where women support one another and deepen their walk with God together.',
    href: '/connect/graceway-women',
    image: '/assets/women fellowship agc.jpg',
    meta: 'For women',
  },
];

export function ConnectContent() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: 'url(/assets/connectcollage.png)' }}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Graceway Connect</span>
            <h1 className={styles.heroTitle}>Shared spaces for friendship, formation, and spiritual support.</h1>
            <p className={styles.heroText}>
              Connect at Graceway is about helping people move from simply attending church to belonging in community.
              These spaces make it easier to grow spiritually alongside others.
            </p>
            <div className={styles.heroActions}>
              <Link href="/connect/graceway-couples" className={styles.primaryLink}>
                Explore connect groups
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className={styles.secondaryLink}>
                Learn about Graceway
              </Link>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <div className={styles.heroPanel}>
              <span className={styles.cardMeta}>Why connect matters</span>
              <div className={styles.statGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Belonging</span>
                  <span className={styles.statValue}>Community</span>
                  <span className={styles.statNote}>Shared life grows best in visible, relational spaces.</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Outcome</span>
                  <span className={styles.statValue}>Growth</span>
                  <span className={styles.statNote}>Spiritual formation becomes easier when it is not lived alone.</span>
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
              <span className={styles.sectionEyebrow}>Belong well</span>
              <h2 className={styles.sectionTitle}>Connect is designed around shared life, not just attendance.</h2>
            </div>
            <p className={styles.sectionText}>
              These groups bring people together around life stage, shared interest, and spiritual encouragement. They
              are open spaces for both members and those still getting to know Graceway.
            </p>
          </div>

          <div className={styles.metricGrid}>
            <div className={styles.metricCard}>
              <span className={styles.metricValue}>Gather</span>
              <span className={styles.metricLabel}>Meet people and build real relationships.</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricValue}>Grow</span>
              <span className={styles.metricLabel}>Strengthen faith through shared encouragement.</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricValue}>Belong</span>
              <span className={styles.metricLabel}>Find a place where church begins to feel personal.</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>Current groups</span>
              <h2 className={styles.sectionTitle}>Three clean entry points into Graceway community life.</h2>
            </div>
            <p className={styles.sectionText}>
              These groups help people connect in a more personal and sustainable way, while keeping the page simple to
              scan and use.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {connectGroups.map((group) => (
              <article key={group.title} className={styles.featureCard}>
                <div className={styles.featureMedia}>
                  <Image src={group.image} alt={group.title} fill className={styles.featureImage} unoptimized />
                </div>
                <div className={styles.featureBody}>
                  <span className={styles.cardMeta}>{group.meta}</span>
                  <h3 className={styles.cardTitle}>{group.title}</h3>
                  <p className={styles.cardText}>{group.description}</p>
                  <div className={styles.cardActions}>
                    <Link href={group.href} className={styles.inlineLink}>
                      View group
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <span className={styles.cardIcon}>
                <Users size={20} />
              </span>
              <span className={styles.cardMeta}>Shared life</span>
              <h3 className={styles.cardTitle}>Meet people in a setting that feels more personal.</h3>
              <p className={styles.cardText}>
                Connect groups make the church feel smaller, warmer, and easier to belong to.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.cardIcon}>
                <HeartHandshake size={20} />
              </span>
              <span className={styles.cardMeta}>Encouragement</span>
              <h3 className={styles.cardTitle}>Carry life with others instead of carrying it alone.</h3>
              <p className={styles.cardText}>
                Shared encouragement, prayer, and wisdom are part of what makes Christian community durable.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.cardIcon}>
                <ShieldCheck size={20} />
              </span>
              <span className={styles.cardMeta}>Formation</span>
              <h3 className={styles.cardTitle}>Grow spiritually in a more accountable rhythm.</h3>
              <p className={styles.cardText}>
                Community works best when it helps people become more steady, faithful, and rooted in Christ.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.ctaBand}>
            <span className={styles.sectionEyebrow}>Next step</span>
            <h2 className={styles.ctaBandTitle}>Find a group and begin belonging more deeply at Graceway.</h2>
            <p className={styles.ctaBandText}>
              If you are ready to move from attending to participating, the connect groups are one of the clearest ways
              to begin.
            </p>
            <div className={styles.ctaBandActions}>
              <Link href="/about" className={styles.ghostLink}>
                Learn about Graceway
              </Link>
              <Link href="/give" className={styles.ghostLink}>
                Support the church
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

