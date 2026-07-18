import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react';
import {
  BlogPost,
  blogCategories,
  featuredBlogPost,
  getAllBlogPosts,
  getRelatedBlogPosts,
} from '@/lib/mockBlogPosts';
import styles from './blog.module.css';

function AuthorMeta({ post }: { post: BlogPost }) {
  return (
    <div className={styles.authorMeta}>
      <span className={styles.authorLabel}>By</span>
      <div>
        <strong>{post.author.name}</strong>
        <span>{post.author.role}</span>
      </div>
    </div>
  );
}

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className={styles.metaRow}>
      <span>{post.category}</span>
      <span className={styles.metaDot} />
      <span>{post.publishedAt}</span>
      <span className={styles.metaDot} />
      <span>{post.readTime}</span>
    </div>
  );
}

function PostCard({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  return (
    <article className={compact ? styles.postCardCompact : styles.postCard}>
      <Link href={`/media/blog/${post.slug}`} className={styles.postCardImageLink}>
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          width={1200}
          height={900}
          className={styles.postCardImage}
          unoptimized
        />
      </Link>
      <div className={styles.postCardBody}>
        <PostMeta post={post} />
        <h2 className={styles.postCardTitle}>
          <Link href={`/media/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className={styles.postCardExcerpt}>{post.excerpt}</p>
        <AuthorMeta post={post} />
        <Link href={`/media/blog/${post.slug}`} className={styles.textLink}>
          Read article <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

function SecondaryListItem({ post }: { post: BlogPost }) {
  return (
    <article className={styles.secondaryItem}>
      <div className={styles.secondaryItemContent}>
        <PostMeta post={post} />
        <h3 className={styles.secondaryTitle}>
          <Link href={`/media/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className={styles.secondaryExcerpt}>{post.excerpt}</p>
        <AuthorMeta post={post} />
      </div>
      <Link href={`/media/blog/${post.slug}`} className={styles.secondaryThumbLink}>
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          width={560}
          height={420}
          className={styles.secondaryThumb}
          unoptimized
        />
      </Link>
    </article>
  );
}

export function BlogIndexView() {
  const posts = getAllBlogPosts();
  const featured = featuredBlogPost;
  const remainingPosts = posts.filter((post) => post.slug !== featured.slug);
  const spotlightPosts = remainingPosts.slice(0, 2);
  const gridPosts = remainingPosts.slice(2);
  const contributors = Array.from(new Set(posts.map((post) => post.author.name)));

  return (
    <main className={styles.blogShell}>
      <section
        className="inline-image page-banner"
        style={{ backgroundImage: 'url(/assets/media-bg.jpg)' }}
      >
        <div className="container container--small">
          <div className={styles.bannerContent}>
            <span className={styles.eyebrow}>Graceway Journal</span>
            <h1>Clean reading for pastoral reflections, church stories, and weekly encouragement.</h1>
            <p>
              A calm editorial archive of real pastoral reflections written by Pastor Cyrus Mwangi
              for the Graceway church family.
            </p>
          </div>
        </div>
        <div className={styles.bannerOverlay} />
      </section>

      <section className={styles.summarySection}>
        <div className="container container--small">
          <div className={styles.summaryGrid}>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Categories</span>
              <strong>{blogCategories.length}</strong>
              <p>Spiritual growth, church life, family, ministry, and encouragement.</p>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Contributors</span>
              <strong>{contributors.length}</strong>
              <p>{contributors.join(', ')}</p>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Format</span>
              <strong>Archive</strong>
              <p>Real devotional posts arranged in a clean reading system for archive and detail views.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className="container container--small">
          <div className={styles.featuredLayout}>
            <article className={styles.featuredCard}>
              <div className={styles.featuredImageWrap}>
                <Image
                  src={featured.coverImage}
                  alt={featured.coverAlt}
                  width={1600}
                  height={1200}
                  className={styles.featuredImage}
                  unoptimized
                />
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.featuredLabel}>Featured Reflection</span>
                <PostMeta post={featured} />
                <h2 className={styles.featuredTitle}>
                  <Link href={`/media/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className={styles.featuredExcerpt}>{featured.description}</p>
                <AuthorMeta post={featured} />
                <div className={styles.tagRow}>
                  {featured.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.featuredActions}>
                  <Link href={`/media/blog/${featured.slug}`} className={styles.primaryAction}>
                    Read featured story
                  </Link>
                  <Link href="/connect" className={styles.secondaryAction}>
                    Join our community
                  </Link>
                </div>
              </div>
            </article>

            <aside className={styles.sidebarPanel}>
              <div className={styles.sidebarBlock}>
                <span className={styles.eyebrow}>Browse Topics</span>
                <div className={styles.categoryList}>
                  {blogCategories.map((category) => (
                    <span key={category} className={styles.categoryPill}>
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.sidebarBlock}>
                <span className={styles.eyebrow}>Contributors</span>
                <div className={styles.contributorList}>
                  {contributors.map((contributor) => (
                    <span key={contributor} className={styles.contributorItem}>
                      {contributor}
                    </span>
                  ))}
                </div>
              </div>
              
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.streamSection}>
        <div className="container container--small">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>Latest Stories</span>
              <h2 className={styles.sectionTitle}>Recent journal notes from Graceway.</h2>
            </div>
          </div>

          <div className={styles.streamLayout}>
            <div className={styles.streamList}>
              {spotlightPosts.map((post) => (
                <SecondaryListItem key={post.slug} post={post} />
              ))}
            </div>
            <aside className={styles.newsletterPanel}>
              <span className={styles.eyebrow}>Weekly Reading Rhythm</span>
              <h3>Read slowly. Reflect deeply. Return during the week.</h3>
              <p>
                You are always invited to come back.
              </p>
              <Link href="/media" className={styles.primaryAction}>
                Explore all media
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container container--small">
          <div className={styles.postGrid}>
            {gridPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function RenderBlock({ block }: { block: BlogPost['content'][number] }) {
  if (block.type === 'paragraphs') {
    return (
      <section className={styles.contentBlock}>
        {block.title ? <h2 className={styles.blockTitle}>{block.title}</h2> : null}
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    );
  }

  if (block.type === 'list') {
    return (
      <section className={styles.contentBlock}>
        <h2 className={styles.blockTitle}>{block.title}</h2>
        <ul className={styles.listBlock}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }

  if (block.type === 'quote') {
    return (
      <blockquote className={styles.quoteBlock}>
        <p>{block.quote}</p>
        <cite>{block.attribution}</cite>
      </blockquote>
    );
  }

  return (
    <section className={styles.scriptureBlock}>
      <span>{block.reference}</span>
      <p>{block.text}</p>
    </section>
  );
}

export function BlogPostView({ post }: { post: BlogPost }) {
  const relatedPosts = getRelatedBlogPosts(post.slug);

  return (
    <main className={styles.blogShell}>
      <section className={styles.detailHero}>
        <div className="container container--small">
          <div className={styles.detailHeroLayout}>
            <div className={styles.detailHeroCopy}>
              <nav
                aria-label="Breadcrumb"
                style={{
                  marginBottom: '1rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  opacity: 0.78,
                }}
              >
                <Link href="/">Home</Link>
                {' / '}
                <Link href="/media">Media</Link>
                {' / '}
                <Link href="/media/blog">Blog</Link>
                {' / '}
                <span>{post.title}</span>
              </nav>
              <span className={styles.eyebrow}>{post.category}</span>
              <div className={styles.detailMeta}>
                <span>
                  <CalendarDays size={14} />
                  {post.publishedAt}
                </span>
                <span>
                  <Clock3 size={14} />
                  {post.readTime}
                </span>
              </div>
              <h1 className={styles.detailTitle}>{post.title}</h1>
              <p className={styles.detailExcerpt}>{post.description}</p>
              <div className={styles.detailInfoGrid}>
                <div className={styles.detailInfoCard}>
                  <span className={styles.detailInfoLabel}>Author</span>
                  <strong>{post.author.name}</strong>
                  <span>{post.author.role}</span>
                </div>
                <div className={styles.detailInfoCard}>
                  <span className={styles.detailInfoLabel}>Category</span>
                  <strong>{post.category}</strong>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className={styles.detailHeroImageWrap}>
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                width={1600}
                height={1200}
                className={styles.detailHeroImage}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.articleSection}>
        <div className="container container--small">
          <div className={styles.articleLayout}>
            <article className={styles.articleBody}>
              <p className={styles.leadHighlight}>{post.highlight}</p>
              {post.content.map((block, index) => (
                <RenderBlock key={`${post.slug}-${index}`} block={block} />
              ))}
            </article>

            <aside className={styles.articleSidebar}>
              <div className={styles.sidebarCard}>
                <span className={styles.eyebrow}>Author</span>
                <div className={styles.sidebarMetaList}>
                  <div>
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                  </div>
                </div>
              </div>
              <div className={styles.sidebarCard}>
                <span className={styles.eyebrow}>Details</span>
                <div className={styles.sidebarMetaList}>
                  <div>
                    <strong>Category</strong>
                    <span>{post.category}</span>
                  </div>
                  <div>
                    <strong>Published</strong>
                    <span>{post.publishedAt}</span>
                  </div>
                  <div>
                    <strong>Reading Time</strong>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className={styles.sidebarCard}>
                <span className={styles.eyebrow}>Article Notes</span>
                <p>{post.sidebarNote}</p>
              </div>
              <div className={styles.sidebarCard}>
                <span className={styles.eyebrow}>Tags</span>
                <div className={styles.tagRow}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.sidebarCard}>
                <span className={styles.eyebrow}>Next Step</span>
                <p>Bring this reflection into Sunday by sharing one insight with someone after service.</p>
                <Link href="/connect" className={styles.primaryAction}>
                  Connect with Graceway
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className="container container--small">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>Continue Reading</span>
              <h2 className={styles.sectionTitle}>More reflections from the journal.</h2>
            </div>
          </div>
          <div className={styles.postGrid}>
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
