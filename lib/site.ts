import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Graceway AGC Kitale',
  shortName: 'Graceway AGC',
  description:
    'Graceway AGC Kitale is a Christ-centered church in Kitale, Kenya, committed to worship, discipleship, pastoral care, and gospel mission in the community.',
  url: 'https://www.gracewayagc.com',
  locale: 'en_US',
  themeColor: '#0ea5e9',
  ogImage: '/assets/church-members-outside.jpg',
  logo: '/uploads/graceway-logos/graceway-logo-rmbg-green.png',
};

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
};

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  keywords,
  type = 'website',
}: PageMetadataOptions): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: image,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
