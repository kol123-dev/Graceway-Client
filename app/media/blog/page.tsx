import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Graceway AGC Kitale',
  description: 'Blog posts from Graceway AGC Kitale.',
};

export default function BlogPage() {
  return (
    <main>
      <section className="inline-image page-banner" style={{ backgroundImage: 'url(/assets/mediablue.png)' }}>
        <div className="container container--small">
          <div className="page-banner--content">
            <h1>BLOG</h1>
          </div>
        </div>
        <div className="overlay" />
      </section>

      <section className="text-block text-block--internal">
        <div className="container container--small">
          <div className="aos-init aos-animate text-block--internal-content" data-aos="fade-up" data-aos-delay="200">
            <h3>Blogs Coming soon, Keep in touch...</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

