import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostView } from '@/components/blog/BlogView';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/mockBlogPosts';
import { absoluteUrl, createPageMetadata, siteConfig } from '@/lib/site';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post | Graceway AGC Kitale',
    };
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/media/blog/${post.slug}`,
    image: post.coverImage,
    keywords: [...post.tags, post.category, post.author.name],
    type: 'article',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.publishedAt).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(siteConfig.logo),
      },
    },
    image: [absoluteUrl(post.coverImage)],
    mainEntityOfPage: absoluteUrl(`/media/blog/${post.slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostView post={post} />
    </>
  );
}
