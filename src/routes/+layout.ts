import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
  const baseMetaTags = Object.freeze({
    title: 'Home',
    titleTemplate: '%s - Joost Visser',
    description: 'Portfolio website of Joost Visser.',
    canonical: new URL(url.pathname, url.origin).href,
    openGraph: {
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
      locale: 'en_IE',
      title: 'Portfolio of Joost Visser',
      description: 'The personal portfolio website of Joost Visser.',
      siteName: 'JoostVisser',
      images: [
        {
          url: 'https://joostvisser.dev/open_graph_preview.jpg',
          alt: 'Joost Visser',
          width: 800,
          height: 600,
          secureUrl: 'https://joostvisser.dev/open_graph_preview.jpg',
          type: 'image/jpeg'
        }
      ]
    }
  }) satisfies MetaTagsProps;

  return {
    baseMetaTags
  };
};
