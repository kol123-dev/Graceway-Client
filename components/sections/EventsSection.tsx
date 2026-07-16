'use client';

import Image from 'next/image';
import Link from 'next/link';

const connectLinks = [
  { title: 'Sunday Fellowship', href: '/connect', image: '/assets/church-inside.jpg', alt: 'Graceway Sunday Fellowship gathering' },
  { title: 'Couples Fellowship', href: '/connect/graceway-couples', image: '/assets/couples-2.jpg', alt: 'Graceway couples fellowship members together' },
  { title: 'Bible Study', href: '/connect/bible-study', image: '/assets/rafael.jpg', alt: 'Graceway Bible study teaching session' },
  { title: 'Graceway Intercessory', href: '/connect', image: '/assets/members-inside-clap.jpg', alt: 'Graceway intercessory prayer gathering' },
  { title: 'Men Fellowship', href: '/connect/men-to-men', image: '/assets/njehia-ndingor-pastor.jpg', alt: 'Graceway men fellowship ministry' },
  { title: 'Women Fellowship', href: '/connect/graceway-women', image: '/assets/women fellowship agc.jpg', alt: 'Graceway women fellowship ministry' },
];

const involvedLinks = [
  { title: 'Membership', description: 'Our network of home cell groups meet regularly across Kitale.', href: '/connect', image: '/assets/membership-cert-celestine.jpg', alt: 'Graceway membership and discipleship certificate moment' },
  { title: 'Media Team', description: 'Every day our amazing teams work together to make church happen.', href: '/media', image: '/assets/media-bg.jpg', alt: 'Graceway media team serving during church production' },
  { title: 'Hospitality', description: 'Find out about our Hospitality Ministry and get involved.', href: '/connect', image: '/assets/hospitality.jpg', alt: 'Graceway hospitality ministry serving the congregation' },
  { title: 'YOUTH', description: 'Find out more about our YOUTH ministry.', href: '/connect/youths-fearless', image: '/assets/youth.jpg', alt: 'Graceway youth ministry gathering' },
  { title: 'Sunday School', description: 'Find out whats happening with Graceway Kids.', href: '/connect/graceway-kids', image: '/assets/baha-raise-hand.jpg', alt: 'Graceway Sunday School children raising hands in class' },
  { title: 'Praise & Worship', description: 'Discover more about our Praise and Worship.', href: '/connect/praise-worship', image: '/assets/praise-worship-team.jpg', alt: 'Graceway praise and worship team leading music' },
];

export function EventsSection() {
  return (
    <>
      <section id="events" className="page-links section">
        <div className="container container--small">
          <h2 className="section-title section-title--green" data-aos="fade-up" data-aos-delay="200">CONNECT</h2>
          <div className="flex page-links__page-links-contain">
            {connectLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="page-links--item"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ overflow: 'hidden', position: 'relative' }}
              >
                <div className="page-links--image" aria-hidden="true" style={{ inset: 0 }}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 500px) 50vw, 100vw"
                    unoptimized
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="page-links--title">{item.title}</h3>
                <div className="overlay" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-image section--dark" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image text-image--image-right">
            <Image
              alt="Church construction"
              src="/assets/interior church 1.jpeg"
              width={1080}
              height={1080}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-image--text text-image--text-left">
            <div className="text-image--text-content">
              <h2>The New Church Construction Project</h2>
              <p>The church construction project is a meaningful initiative to create a welcoming space for worship, connection, and spiritual growth. With careful planning, we aim to build a structure that reflects our values and supports community development.</p>
            </div>
            <Link className="button button--teal" href="/project">Check it Out</Link>
          </div>
        </div>
      </section>

      <section className="section page-desc-blocks section-block-builder">
        <div className="container container--small">
          <h2 className="section-title section-title--green" data-aos="fade-up" data-aos-delay="200">Get Involved</h2>
          <p className="section-description" data-aos="fade-up" data-aos-delay="200">There are many ways you can get involved in our church ministries.</p>
          <div className="page-desc-blocks--contain" data-aos="fade-up" data-aos-delay="200">
            {involvedLinks.map((item) => (
              <Link key={item.title} href={item.href} className="page-desc-blocks--item" role="button">
                <div
                  className="page-desc-blocks--item-image"
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 500px) 50vw, 100vw"
                    unoptimized
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="page-desc-blocks--item-content">
                  <h3 className="page-desc-blocks--item-title">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
