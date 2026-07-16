import { ArrowRight, Building2, HandHeart, Heart, Landmark, Repeat, Users } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/components/pages/pageShowcase.module.css';

export const metadata: Metadata = {
  title: 'Give | Graceway AGC Kitale',
  description:
    'Support our mission of lifting up Jesus and sharing the gospel. Find ways to give.',
};

const givingOptions = [
  {
    title: 'Bank or Mobile Giving',
    description: 'Use our church giving channels for one-time support toward ministry and worship life.',
    icon: Landmark,
    link: '#bank-transfer',
    meta: 'Simple one-time support',
  },
  {
    title: 'During Worship Services',
    description: 'Give in person during Sunday gatherings and special church moments of thanksgiving.',
    icon: Heart,
    link: '#service-giving',
    meta: 'Sunday and special services',
  },
  {
    title: 'Monthly Partnership',
    description: 'Commit to a steady rhythm of generosity that helps Graceway plan ministry with confidence.',
    icon: Repeat,
    link: '#partnership',
    meta: 'Consistent ongoing support',
  },
];

const impactAreas = [
  {
    title: 'Worship, teaching, and discipleship',
    description: 'Supporting the weekly life of the church through teaching resources, gatherings, and pastoral care.',
    percentage: '40%',
  },
  {
    title: 'Community care and outreach',
    description: 'Extending practical support and gospel witness beyond the church walls into the wider community.',
    percentage: '30%',
  },
  {
    title: 'Construction and future readiness',
    description: 'Helping Graceway prepare welcoming spaces for the growing church family and long-term ministry.',
    percentage: '20%',
  },
  {
    title: 'Youth and family formation',
    description: 'Investing in younger generations, mentorship, and family-strengthening ministry rhythms.',
    percentage: '10%',
  },
];

export default function Give() {
  return (
    <main className={styles.page}>
      <section
        className={styles.hero}
        style={{ backgroundImage: 'url(/assets/church-members-outside.jpg)' }}
      >
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Graceway Giving</span>
            <h1 className={styles.heroTitle}>Generosity that strengthens worship, witness, and community.</h1>
            <p className={styles.heroText}>
              Giving at Graceway is an act of worship. Every gift helps sustain pastoral care, teaching, outreach,
              and the long-term work of building a church family that serves Kitale with faithfulness.
            </p>
            <div className={styles.heroActions}>
              <Link href="#bank-transfer" className={styles.primaryLink}>
                Explore giving options
                <ArrowRight size={16} />
              </Link>
              <Link href="/project" className={styles.secondaryLink}>
                Support the project
              </Link>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <div className={styles.heroPanel}>
              <span className={styles.cardMeta}>Stewardship focus</span>
              <div className={styles.statGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Heart posture</span>
                  <span className={styles.statValue}>Worship</span>
                  <span className={styles.statNote}>Giving begins as gratitude before it becomes support.</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Shared outcome</span>
                  <span className={styles.statValue}>Impact</span>
                  <span className={styles.statNote}>Every contribution strengthens ministry beyond one moment.</span>
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
              <span className={styles.sectionEyebrow}>Why we give</span>
            </div>
          </div>

          <div className={styles.introGrid}>
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>What your generosity supports</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Church life:</strong> Sunday worship, teaching, discipleship rhythms, and pastoral care.
                </li>
                <li>
                  <strong>Community witness:</strong> Practical outreach and visible gospel presence in Kitale.
                </li>
                <li>
                  <strong>Future readiness:</strong> The spaces, planning, and resources needed for sustainable growth.
                </li>
              </ul>
            </div>

            <div className={styles.metricGrid}>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>Worship</span>
                <span className={styles.metricLabel}>An offering of trust and thanksgiving.</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>Care</span>
                <span className={styles.metricLabel}>Meeting real needs inside and beyond the church.</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>Legacy</span>
                <span className={styles.metricLabel}>Investing in spaces and people for years to come.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>Ways to give</span>
              <h2 className={styles.sectionTitle}>Choose a rhythm that fits how you want to support Graceway.</h2>
            </div>
            <p className={styles.sectionText}>
              Whether you are giving once, during worship, or as an ongoing partner, the goal is the same: faithful
              support for the work God is doing through the church.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {givingOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article key={option.title} className={styles.card}>
                  <span className={styles.cardIcon}>
                    <Icon size={20} />
                  </span>
                  <span className={styles.cardMeta}>{option.meta}</span>
                  <h3 className={styles.cardTitle}>{option.title}</h3>
                  <p className={styles.cardText}>{option.description}</p>
                  <div className={styles.cardActions}>
                    <Link href={option.link} className={styles.inlineLink}>
                      Learn more
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
          <div className={styles.cardGrid}>
            <article id="bank-transfer" className={styles.card}>
              <span className={styles.cardIcon}>
                <Building2 size={20} />
              </span>
              <span className={styles.cardMeta}>Bank or mobile giving</span>
              <h3 className={styles.cardTitle}>Use the church channels you already trust.</h3>
              <p className={styles.cardText}>
                Give toward the life of the church or the construction project using the Graceway giving channels
                shared by the church office and leadership team.
              </p>
            </article>

            <article id="service-giving" className={styles.card}>
              <span className={styles.cardIcon}>
                <HandHeart size={20} />
              </span>
              <span className={styles.cardMeta}>In-person giving</span>
              <h3 className={styles.cardTitle}>Join the rhythm of generosity during worship.</h3>
              <p className={styles.cardText}>
                You can give during Sunday gatherings and thanksgiving moments as part of the worship life of the
                congregation.
              </p>
            </article>

            <article id="partnership" className={styles.card}>
              <span className={styles.cardIcon}>
                <Users size={20} />
              </span>
              <span className={styles.cardMeta}>Partnership giving</span>
              <h3 className={styles.cardTitle}>Build with us through steady monthly support.</h3>
              <p className={styles.cardText}>
                If you want to support Graceway consistently, monthly partnership gives the church stronger planning
                visibility and ministry stability.
              </p>
            </article>
          </div>
        </div>
      </section>

     

      <section className={styles.section}>
        <div className={styles.sectionShell}>
          <div className={styles.ctaBand}>
            <span className={styles.sectionEyebrow}>Next step</span>
            <h2 className={styles.ctaBandTitle}>Ready to support the work of Graceway?</h2>
            <p className={styles.ctaBandText}>
              If you would like to give, partner more consistently, or ask about construction support, we would love
              to point you to the right channel.
            </p>
            <div className={styles.ctaBandActions}>
              <Link href="/project" className={styles.ghostLink}>
                View the church project
              </Link>
              <Link href="/connect" className={styles.ghostLink}>
                Contact the church office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
