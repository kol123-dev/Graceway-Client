import Image from 'next/image';
import Link from 'next/link';

export function WelcomeSection() {
  return (
    <section
      className="section text-image section--light"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="container container--small">
        <div className="text-image--image text-image--text-left">
          <Image
            alt="Senior pastor"
            src="/assets/senior-pastor.png"
            width={350}
            height={350}
            unoptimized
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
        <div className="text-image--text text-image--text-right">
          <div className="text-image--text-content">
            <h3>
              Welcome to Graceway AGC, a dynamic, family church with people of
              all ages
            </h3>
            <p>
              At Graceway AGC, we are more than just a church; we are a vibrant
              family united in faith. As part of the Africa Gospel Church, with
              a legacy of over 50 years, our community in Kitale, Kenya, warmly
              embraces people from every corner of the world. Here at Graceway,
              you&apos;ll find a place where all ages and backgrounds come together
              in worship and fellowship. Our mission is to exalt Jesus and
              spread His love from one heart to many. Whether you&apos;re seeking a
              spiritual home or simply wish to explore faith, we invite you to
              join our family and experience the joy of serving and growing
              together in Christ.
            </p>
            <Link className="button button--green" href="/about">
              Read More About Our Church
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
