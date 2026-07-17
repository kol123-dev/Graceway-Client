import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { createBreadcrumbJsonLd, createPageMetadata, createWebPageJsonLd } from '@/lib/site';

const connectPages = {
  'graceway-kids': {
    title: 'Graceway Kids',
    bannerImage: '/assets/kids%20main.png',
    bannerTitle: 'Graceway Kids',
    sectionImage: '/assets/2Kids.png',
    sectionTitle: '"Worshiping Together, Uplifting Lives"',
    paragraphs: [
      'At Graceway AGC, we believe that children are a gift from God and an essential part of the church family. Our Graceway Kids Ministry provides a nurturing and fun environment where children can grow in their faith, learn about Jesus, and develop a strong foundation in God’s Word.',
      'Through age-appropriate Bible lessons, worship, interactive activities, and meaningful fellowship, we aim to inspire the next generation to love God, serve others, and live out their faith boldly.',
      'We welcome all children to join us in this exciting journey of discovering God’s love and purpose for their lives. Together, we are raising future leaders for Christ!',
    ],
  },
  'men-to-men': {
    title: "Men's Fellowship",
    bannerImage: '/assets/MENS%20fellowship.png',
    bannerTitle: "Men's Fellowship",
    sectionImage: '/assets/njehia-ndingor-pastor.jpg',
    sectionTitle: '"Strength in Brotherhood, Faith in Purpose"',
    paragraphs: [
      'At Graceway AGC, our Men’s Fellowship is a powerful space for men to grow spiritually, connect deeply, and empower one another in faith. This vibrant community provides a safe and welcoming environment where men can share experiences, seek wisdom, and strengthen their relationships with God and each other.',
      'Through impactful teachings, prayer, and fellowship, men are encouraged to live with purpose, integrity, and courage in all areas of life. Whether it’s personal growth, leadership development, or serving the church, Men’s Fellowship equips men to rise as strong, godly leaders.',
      'Join us as we support, challenge, and uplift one another, growing together in faith and making a lasting impact in our homes, communities, and the world.',
      '"As iron sharpens iron, so one person sharpens another." – Proverbs 27:17',
    ],
  },
  'youths-fearless': {
    title: 'Young Adults',
    bannerImage: '/uploads/2021/09/YA-Header.jpg',
    bannerTitle: 'Young Adults',
    sectionImage: '/assets/youth.jpg',
    sectionTitle: 'Young Adults is our 18-30s community at Graceway',
    paragraphs: [
      'Welcome to the Young Adults Ministry of Graceway AGC! We are a vibrant and passionate community of young people committed to growing in Christ, building strong relationships, and making a difference in our church and community.',
      'Our ministry creates a safe and welcoming space for young adults to connect, explore their faith, and discover God’s purpose for their lives. Through engaging Bible studies, uplifting worship, and practical teachings, we equip young adults to live boldly for Christ in their daily lives.',
      'We host regular fellowship meetings, outreach events, and fun activities designed to inspire, challenge, and unite us in our walk with God. Whether you’re a student, a young professional, or simply seeking to grow in your faith, the Young Adults Ministry is the perfect place for you to belong.',
      'Join us as we navigate life together, strengthen our faith, and shine the light of Christ in the world! Let’s grow, serve, and thrive as a family in Christ.',
      'Connect with us today and be part of something amazing!',
    ],
  },
  'graceway-women': {
    title: "Women's Fellowship",
    bannerImage: '/assets/womens-posters.png',
    bannerTitle: "Graceway AGC Women's Fellowship",
    sectionImage: '/assets/women%20fellowship%20agc.jpg',
    sectionTitle: '"Woman to Woman"',
    paragraphs: [
      'At Graceway AGC, our Women’s Fellowship is a vibrant community where women of all ages come together to grow spiritually, share experiences, and uplift one another',
      'Through inspiring teachings, heartfelt discussions, and prayer, we empower women to walk confidently in their faith and fulfill their God-given purpose. Whether you’re seeking encouragement, fellowship, or mentorship.',
      'Our Women’s Fellowship offers a supportive space where bonds are strengthened and hearts are united in Christ.',
      'Join us as we grow stronger together, rooted in love and grace.',
    ],
  },
  'bible-study': {
    title: 'Bible Study',
    bannerImage: '/assets/members-inside-clap.jpg',
    bannerTitle: 'Graceway AGC Bible Study',
    sectionImage: '/assets/anto-sermon-poster.png',
    sectionTitle: '"Discovering Truth, Strengthening Faith"',
    paragraphs: [
      'At Graceway AGC, our Bible Study is a vibrant space where individuals come together to deepen their understanding of God’s Word and grow spiritually. Through prayer, discussion, and reflection, we explore biblical teachings that guide our daily lives.',
      'Join us as we journey through Scripture, gaining wisdom, insight, and a closer relationship with God. Whether you\'re seeking answers, desiring community, or longing for spiritual growth, our Bible Study is a place for you.',
      'Come and be a part of a meaningful time of learning and fellowship.',
      'sunday afternoons---in every week',
    ],
  },
  'praise-worship': {
    title: 'Praise & Worship',
    bannerImage: '/assets/praise-worship-team2.jpg',
    bannerTitle: 'Graceway AGC Praise and Worship Team',
    sectionImage: '/assets/praise-worship-team.jpg',
    sectionTitle: '"Worshiping Together, Uplifting Lives"',
    paragraphs: [
      'The Graceway Praise and Worship Team is dedicated to leading our congregation into heartfelt worship and intimate communion with God. Through spiritual songs, dynamic melodies, and heartfelt expressions, we create an atmosphere where hearts are uplifted and souls are refreshed.',
      'Our team is passionate about glorifying God through music, fostering a deeper relationship with Him, and bringing people into a place of praise and surrender.',
      'Whether through contemporary, traditional, or spontaneous worship, we strive to create an environment where everyone can experience the presence of God. Join us as we lift our voices in unity, proclaiming His greatness and love.',
      '"As iron sharpens iron, so one person sharpens another." – Proverbs 27:17',
    ],
  },
  'graceway-couples': {
    title: "Couple's Fellowship",
    bannerImage: '/assets/couples-collage.png',
    bannerTitle: "Graceway Couple's Fellowship",
    html: `
<h2><b>Building Marriages on a Godly Foundation</b></h2>
<p>At Graceway AGC, we believe that marriage is a sacred covenant designed by God to reflect His love and unity. The Graceway Couple’s Fellowship is dedicated to walking alongside couples—whether newly married, seasoned, or engaged—as they navigate the beautiful and sometimes challenging journey of marriage.</p>
<p>Our commitment is to seek God’s mind together with you on all matters pertaining to a God-honoring marriage. Through interactive and practical class sessions, we address key areas of marriage to equip couples with biblical principles and practical tools to strengthen their relationship.</p>
<blockquote>
  <p><strong>So, what does we offer in our Graceway Couple's Fellowship?</strong></p>
  <p><strong>Our sessions are designed to be engaging, honest, and impactful, covering topics such as:</strong></p>
  <p><strong>1. Her Needs:</strong> Understanding and meeting a wife’s unique needs is key to building a fulfilling marriage. Our fellowships explore what the Bible says about cherishing and honoring her, while providing practical insights into Affection, affirmation, security, and shared companionship. By addressing these needs, couples learn to create an environment where love flourishes.</p>
  <p><strong>2. His Needs:</strong> A husband’s needs are just as vital in a thriving relationship. We focus on respecting and appreciating his role, supporting his vision, and building a partnership that uplifts him. From practical tools to biblical principles, couples discover how to affirm and strengthen the bond of unity in their marriage.</p>
  <p><strong>3. Communication:</strong> Effective communication is the cornerstone of any successful relationship. In this session, couples learn how to listen actively, express themselves clearly, and navigate misunderstandings with grace. We offer practical strategies and scriptural guidance to foster openness, trust, and unity in conversations.</p>
  <p><strong>4. Handling Conflicts:</strong> Conflicts are inevitable in any relationship, but they can also be opportunities for growth. Our sessions provide tools to resolve disagreements biblically, focusing on forgiveness, patience, and mutual understanding. Couples learn how to manage emotions and seek solutions that honor God and each other.</p>
  <p><strong>5. Parenting:</strong> Raising children is a shared responsibility that requires intentionality and unity. We guide couples in building a Christ-centered parenting approach that balances discipline, love, and spiritual growth. These sessions help couples navigate challenges while cultivating a home environment where children can thrive.</p>
  <p><strong>6. Family Finances and Investments:</strong> One of the greatest cause of conflicts in Marriages is finances. At Graceway we seek to equip members with God Honoring Financial Management Practices.</p>
  <p><strong>7. Relationships with In-laws:</strong> In-laws have been Known to strengthen or wreck Marriages, Every Couple therefore needs to be equipped with skills to work with In-laws so that the relationship strengthens rather than weakens the marriage.</p>
  <p>Many Other major topics related to couples are handled.</p>
</blockquote>
<p>The Graceway Couple’s Fellowship isn’t just about sessions; it’s about building a Christ-centered community. Here, couples connect, share experiences, and support each other in their journeys. Through small group discussions, mentorship programs, and fellowship events, we foster meaningful relationships that inspire growth and accountability.</p>
<p><strong>Our Invitation</strong></p>
<p>Whether you are preparing for marriage, strengthening your bond, or seeking guidance during a challenging season, Graceway Couple’s Fellowship is here for you. Together, we will discover God’s purpose for your marriage, enrich your relationship, and create a legacy of love that glorifies Him.</p>
<p>Join us and be part of a movement to build thriving, God-centered marriages.</p>
    `,
  },
} as const;

type Slug = keyof typeof connectPages;

export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: Slug }> {
  return Object.keys(connectPages).map((slug) => ({ slug: slug as Slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const page = connectPages[resolvedParams.slug as Slug];
  if (!page) return { title: 'Connect' };
  return createPageMetadata({
    title: page.title,
    description: `${page.title} at Graceway AGC Kitale.`,
    path: `/connect/${resolvedParams.slug}`,
    image: page.bannerImage,
  });
}

export default async function ConnectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = connectPages[resolvedParams.slug as Slug];

  if (!page) return null;

  const description = `${page.title} at Graceway AGC Kitale.`;
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Connect', path: '/connect' },
    { name: page.title, path: `/connect/${resolvedParams.slug}` },
  ];

  const breadcrumbJsonLd = createBreadcrumbJsonLd(breadcrumbItems);
  const webPageJsonLd = createWebPageJsonLd({
    title: page.title,
    description,
    path: `/connect/${resolvedParams.slug}`,
    type: 'CollectionPage',
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
                <Link href="/connect">Connect</Link>
                {' / '}
                <span>{page.title}</span>
              </nav>
              <h1>{page.bannerTitle}</h1>
            </div>
          </div>
          <div className="overlay" />
        </section>

        {'html' in page ? (
          <section className="section-page-content">
            <div className="container container--small">
              <div className="single-archive--content" dangerouslySetInnerHTML={{ __html: page.html }} />
              <p>
                Return to the <Link href="/connect">Connect page</Link> or explore the wider church story on the{' '}
                <Link href="/about">About page</Link>.
              </p>
            </div>
          </section>
        ) : (
          <section className="section text-image aos-init aos-animate section--light" data-aos="fade-up" data-aos-delay="200">
            <div className="container container--small">
              <div className="text-image--image">
                <Image
                  src={page.sectionImage}
                  alt={page.title}
                  width={1000}
                  height={1000}
                  unoptimized
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="text-image--text">
                <div>
                  <h2>{page.sectionTitle}</h2>
                  {page.paragraphs.map((p, idx) => (
                    <p key={`${resolvedParams.slug}-${idx}`}>{p}</p>
                  ))}
                  <p>
                    You can also return to the <Link href="/connect">Connect page</Link> or read more{' '}
                    <Link href="/about">about Graceway</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

