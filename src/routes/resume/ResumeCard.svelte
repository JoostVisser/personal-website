<script lang="ts">
	import { A, Badge, Heading, Li, List, P } from 'flowbite-svelte';
	export let title: string;
	export let date: string;
	export let summary: string;
	export let bullets: Array<string>;
	export let languages: string | undefined = undefined;

	const languageList = languages?.split(', ');

	$: outerWidth = 0;
	$: isMd = outerWidth >= 768;
	// => '768px'
</script>

<svelte:window bind:outerWidth />

<div
	class="my-6 flex
		   w-full
		   max-w-3xl flex-col
		   divide-gray-200
		   rounded-lg
		   border border-gray-200 bg-white px-4
		   pt-6 pb-3
		   text-gray-500
		   shadow-md sm:px-6
		   dark:divide-gray-700
		   dark:border-gray-700
		   dark:bg-gray-800
		   dark:text-gray-400"
>
	<Heading tag="h5" class="pb-1 text-lg md:text-xl">{title}</Heading>
	<P class="pb-2 text-xs text-gray-500 md:text-sm dark:text-gray-400">{date}</P>
	<P class="pb-2 text-sm md:text-base">
		{@html summary}
	</P>
	<List class="pb-4 text-sm text-gray-800 md:text-base dark:text-gray-300">
		{#each bullets as bullet}
			<Li>{@html bullet}</Li>
		{/each}
	</List>
	{#if languageList !== undefined}
		<div class="flex flex-row flex-wrap gap-2 pb-3">
			{#each languageList as language}
				<Badge large={isMd} color="dark">{language}</Badge>
			{/each}
		</div>
	{/if}

	<!-- <code class="pb-2 text-base text-gray-700 dark:text-gray-200">{languages}</code> -->
</div>
