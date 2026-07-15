'use client';

import Image from 'next/image';
import Link from 'next/link';

export function ConnectContent() {
  return (
    <main>
      <section
        className="inline-image page-banner"
        style={{ backgroundImage: 'url(/assets/connectcollage.png)' }}
      >
        <div className="container container--small">
          <div className="page-banner--content">
            <h1>GRACEWAY CONNECT</h1>
          </div>
        </div>
        <div className="overlay" />
      </section>

      <section className="text-block text-block--internal">
        <div className="container container--small">
          <div
            className="aos-init aos-animate text-block--internal-content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>
              At Graceway AGC, we believe in the power of community and shared experiences. The Connect initiative is
              designed to bring people together in various groups where they can bond over shared interests, grow
              spiritually, and build meaningful relationships.
            </h3>
            <p>
              These groups are open to both church members and non-members, providing an exciting opportunity to
              connect, learn, and thrive together.
            </p>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--grey" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image">
            <Image
              src="/assets/couples-2.jpg"
              alt="Graceway Couple's Fellowship"
              width={2000}
              height={1500}
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-image--text">
            <div className="text-image--text-content">
              <h3>Graceway Couple&apos;s Fellowship</h3>
              <p>
                A place for couples to strengthen their relationships, share experiences, and grow in faith together.
              </p>
            </div>
            <Link className="button button--cherry" href="/connect/graceway-couples">
              Graceway Couple&apos;s
            </Link>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--light" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image text-image--image--text-left">
            <Image
              src="/assets/njehia-ndingor-pastor.jpg"
              alt="Man to Man"
              width={1000}
              height={500}
              unoptimized
              style={{ width: 'auto', height: 500, maxWidth: '100%' }}
            />
          </div>
          <div className="text-image--text text-image--text-right">
            <div className="text-image--text-content">
              <h3>Man to Man</h3>
              <p>
                A dynamic group where men gather to encourage one another, share wisdom, and tackle life’s challenges
                as brothers in Christ.
              </p>
            </div>
            <Link className="button button--yellow" href="/connect/men-to-men">
              Man to Man
            </Link>
          </div>
        </div>
      </section>

      <section className="section text-image aos-init aos-animate section--grey" data-aos="fade-up" data-aos-delay="200">
        <div className="container container--small">
          <div className="text-image--image">
            <Image
              src="/assets/women fellowship agc.jpg"
              alt="Women of Christ"
              width={1000}
              height={500}
              unoptimized
              style={{ width: 'auto', height: 500, maxWidth: '100%' }}
            />
          </div>
          <div className="text-image--text">
            <div className="text-image--text-content">
              <h3>Women of Christ</h3>
              <p>
                A nurturing space for women to support each other, share life stories, and deepen their walk with God.
              </p>
            </div>
            <Link className="button button--blue" href="/connect/graceway-women">
              Women of Christ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

