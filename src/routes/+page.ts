import type { MetaTagsProps } from 'svelte-meta-tags';
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = () => {
    const pageMetaTags = Object.freeze({
      title: 'Joost Visser',
      titleTemplate: '%s',
      description: 'Home page of Joost Visser',
      openGraph: {
        title: 'Joost Visser',
        description: 'Portfolio website of Joost Visser'
      }
    }) satisfies MetaTagsProps;

    return {
      pageMetaTags
    };
  };
