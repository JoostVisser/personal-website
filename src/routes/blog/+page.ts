import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: 'Blog',
		description: "Joost Visser's blog. Ramblings about travel, programming, and more.",
		openGraph: {
			title: 'Blog - Joost Visser',
			description: 'The blog of Joost Visser. Ramblings about travel, programming, and more.'
		}
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags
	};
};
