<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores';
	import extend from 'just-extend'; // Please provide functions that allow deep merging of objects, such as lodash.merge, deepmerge, just-extend.

	export let data;

	$: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
</script>

<MetaTags {...metaTags} />

<div class="flex flex-col min-h-screen min-h-dvh">
	<Header />

	<main class="mx-auto flex-1 px-3 w-full max-w-3xl">
		<slot />
	</main>

	<Footer />
</div>
