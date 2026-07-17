import { Metadata } from 'next';
import Link from 'next/link';
import { createBreadcrumbJsonLd, createPageMetadata, createWebPageJsonLd } from '@/lib/site';

const aboutPages = {
  mission: {
    title: 'Our Mission',
    bannerImage: '/assets/mission-page-banner.png',
    html: `
<p>The purpose of the Africa Gospel Church is to fulfill the Great Commandment and Great Commission of the Lord Jesus Christ according to the Great Plan. The Great Commandment embodies Loving God (Spiritual Development) and Man (Social Development). The Great Commission informs the need for (Intentional Discipleship) structure and programs. The Great Plan (Dynamic Evangelism) defines the extent of our mission ... not just local, but to also make an impact on our families, communities, nations and the world.</p>
<h2>Watch below for our Elders speaking in more detail around our mission as a church;</h2>
<p>youtube video here</p>
    `,
  },
  values: {
    title: 'Our Core Values',
    bannerImage: '/assets/mission-page-banner.png',
    html: `
<p>The following are the “Guiding Principles” that direct our decision making as a church:</p>
<ul>
  <li>Accountability</li>
  <li>Biblical</li>
  <li>Authority</li>
  <li>Commitment</li>
  <li>Diversity</li>
  <li>Excellence</li>
  <li>Faith Family</li>
  <li>Fellowship</li>
  <li>Holiness</li>
  <li>Servanthood</li>
</ul>
<h2>Watch below for our Elders speaking in more detail around our mission as a church;</h2>
<p>youtube video here</p>
    `,
  },
  vision: {
    title: 'Our Vision',
    bannerImage: '/assets/mission-page-banner.png',
    html: `
<p>The Whole Church taking the Whole Gospel to the Whole World. (Swahili: KANISA LOTE, likieneza INJILI YOTE, ULIMWENGUNI KOTE)</p>
<h2>Watch below for our Elders speaking in more detail around our mission as a church;</h2>
<p>youtube video here</p>
    `,
  },
  strategies: {
    title: 'Our Strategies',
    bannerImage: '/assets/mission-page-banner.png',
    html: `
<p>In order to fulfill our mission and God-directed vision, we will pursue the following strategies</p>
<ol>
  <li>E1: Evangelizing the Unsaved</li>
  <li>E2: Establishing Dynamic Churches</li>
  <li>E3: Edifying Believers</li>
  <li>E4: Equipping Leaders</li>
  <li>E5: Exercising Compassion</li>
</ol>
<h2>Watch below for our Elders speaking in more detail about our church;</h2>
<p>youtube video here</p>
    `,
  },
  'our-beliefs': {
    title: 'What We Believe',
    bannerImage: '/assets/mission-page-banner.png',
    html: `
<p>Africa Gospel Church Kenya is a Bible-believing community of believers within the Wesleyan Armenian Evangelical heritage.</p>
<p>It is committed to wisely preserve, propagate and pass on to the future generations the doctrines and principles with which the founders of the Church started.</p>
<p>The Africa Gospel Church Kenya, in accordance with the word of God, is a Church of people of all economic, social, ethnic, age, national, and gender backgrounds.</p>
<p>The AGC Kenya is prepared to expand the Kingdom of God on earth through evangelizing the lost, establishing of Churches, edifying believers, equipping the Church & community leaders, and exercising social compassion.</p>
<p>Together, we want this to be a welcoming, loving, supportive community; one of grace and generosity but clear in what we believe and stand for. This is our foundation in the context we find ourselves in, where people can get to know who we are alongside what we believe!</p>
<h3>Governance</h3>
<p>The governance of Africa Gospel Church is by Councils with the supreme council being the Central Church Council.</p>
<p>The Bishop is the spiritual and administrative head of the Africa Gospel Church, Kenya. The Bishop provides leadership and direction towards accomplishing strategic objectives of the Church and answerable to the Central Church Council.</p>
<p>This structure gives stability to the church and responsibility to the congregants, protecting the organization from personal interests.</p>
<p>With great leadership these structures can be harnessed for the growth of the church and outreach to the community.</p>
<h3>OUR DOCTRINAL STATEMENT</h3>
<p>Members of the Africa Gospel Church declare their belief:</p>
<ul>
  <li>That both Old and New Testaments constitute the divinely inspired Word of God, inerrant in the originals, and the final authority for life and faith.</li>
  <li>That there is one God, eternally existent in the Holy Trinity of Father, Son and Holy Spirit, each with personality and deity.</li>
  <li>That the Son, our Lord Jesus Christ, manifested in the flesh through the virgin birth, died on the cross for the redemption of the human family, all of whom may be saved from sin through faith in Him.</li>
  <li>That man, although created by God in His own image and likeness fell into sin through disobedience and “so death passed upon all men, for all have sinned”. (Romans 5:12).</li>
  <li>In the salvation of the human soul, including the new birth; and in a subsequent work of God in the soul, a crisis, wrought by faith, whereby the heart is cleansed from all sin and filled with the Holy Spirit. This gracious experience is retained by faith as expressed in a constant obedience to God’s revealed will, thus giving us perfect cleansing moment by moment” (1 John 1:7-9).</li>
  <li>That the Church is the body of Christ; that all who are united by faith to Christ are members of the same; and that, having thus become members of one another, it is our solemn covenant duty to fellowship with one another in peace, and to love one another with pure and fervent hearts.</li>
  <li>That our Lord Jesus Christ in His literal resurrection from the dead is the living guarantee of the resurrection of all human beings; the believing saved to conscious eternal joy, and the unbelieving lost to conscious eternal punishment.</li>
  <li>That our Lord Jesus Christ, in fulfillment of His own promise, both angelically and apostolically attested that will personally return in power and great glory.</li>
</ul>
<h2>Watch below for our Elders speaking in more detail around our beliefs as a church;</h2>
<p>youtube video here</p>
    `,
  },
  doctrine: {
    title: 'Our Doctrines',
    bannerImage: '/assets/mission-page-banner.png',
    html: `
<p>Everyone holds a worldview and believes in something. Our current culture confronts us with a staggering number of ideologies, lifestyles and faith options, all competing for our attention. At Graceway we believe the Bible shows us the truth about God, our relationship with Him and His purposes in the world. At Graceway it’s the name of Jesus we hold up above every other ideology, thought and belief.</p>
<p>Together, we want this to be a welcoming, loving, supportive community; one of grace and generosity but clear in what we believe and stand for. This is our foundation in the context we find ourselves in, where people can get to know who we are alongside what we believe!</p>
<h3>We believe</h3>
<ul>
  <li>God exists in three persons, but as the one true God: Father, Son and Holy Spirit (the Trinity)</li>
  <li>In the Virgin birth</li>
  <li>In the Sinful state of man</li>
  <li>In the need for man to be redeemed from sin</li>
  <li>The justification of sinners solely by the grace of God through faith in Christ.</li>
  <li>In the death, burial and resurrection of Jesus Christ for our atonement (forgiveness and reconciliation)</li>
  <li>In Baptism by total immersion for those confessing faith in Christ</li>
  <li>In the remembrance of Communion as thankfulness for the cross and looking forward to Jesus coming again</li>
  <li>In the gifts and ministries of the Holy Spirit given to individuals, and to the church.</li>
  <li>That the Bible is the Inspired Word of God</li>
  <li>The divine inspiration and supreme authority of the Old and New Testament Scriptures, which are the written Word of God-fully trustworthy for faith and conduct</li>
  <li>In the Second Coming of the Lord Jesus Christ</li>
  <li>The personal and visible return of Jesus Christ to fulfil the purposes of God, who will raise all people to judgement, bring eternal life to the redeemed and eternal condemnation to the lost, and establish a new heaven and new earth</li>
  <li>That the Church is made up of all, regardless of denomination, or background, who have truly repented and have made Jesus Christ Lord of their lives</li>
  <li>In a literal Heaven and Hell</li>
  <li>The dignity of all people, made male and female in God’s image to love, be holy and care for creation, yet corrupted by sin, which incurs divine wrath and judgement</li>
  <li>That marriage is between one man and one woman and is the true context for sexual relations</li>
</ul>
<h2>Watch below for our Elders speaking in more detail around our mission as a church;</h2>
<p>youtube video here</p>
    `,
  },
  leadership: {
    title: 'Our Leadership',
    bannerImage: '/assets/mission-page-banner.png',
    html: `<h3>Coming Soon , Keep in touch ...</h3>`,
  },
} as const;

type Slug = keyof typeof aboutPages;

export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: Slug }> {
  return Object.keys(aboutPages).map((slug) => ({ slug: slug as Slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const page = aboutPages[resolvedParams.slug as Slug];
  if (!page) return { title: 'About' };

  return createPageMetadata({
    title: page.title,
    description: `${page.title} at Graceway AGC Kitale.`,
    path: `/about/${resolvedParams.slug}`,
  });
}

export default async function AboutDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = aboutPages[resolvedParams.slug as Slug];
  if (!page) return null;

  const description = `${page.title} at Graceway AGC Kitale.`;
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: page.title, path: `/about/${resolvedParams.slug}` },
  ];

  const breadcrumbJsonLd = createBreadcrumbJsonLd(breadcrumbItems);
  const webPageJsonLd = createWebPageJsonLd({
    title: page.title,
    description,
    path: `/about/${resolvedParams.slug}`,
    type: 'AboutPage',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <main>
        <section className="inline-image page-banner" style={{ backgroundImage: `url(${page.bannerImage})` }}>
          <div className="container container--small">
            <div className="page-banner--content">
              <nav aria-label="Breadcrumb" style={{ marginBottom: '1rem', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.88 }}>
                <Link href="/">Home</Link>
                {' / '}
                <Link href="/about">About</Link>
                {' / '}
                <span>{page.title}</span>
              </nav>
              <h1>{page.title}</h1>
            </div>
          </div>
          <div className="overlay" />
        </section>

        <section className="text-block text-block--internal">
          <div className="container container--small">
            <div className="aos-init aos-animate text-block--internal-content" data-aos="fade-up" data-aos-delay="200">
              <div dangerouslySetInnerHTML={{ __html: page.html }} />
              <p>
                Continue exploring the church through the <Link href="/connect">Connect page</Link> or follow the{' '}
                <Link href="/about/construction-project">construction project story</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

