import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Resume',
    description: 'Resume of Joost Visser',
    openGraph: {
      title: 'Resume - Joost Visser',
      description: 'Resume of Joost Visser'
    }
  }) satisfies MetaTagsProps;

  return {
    pageMetaTags
  };
};
