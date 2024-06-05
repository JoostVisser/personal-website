<script lang="ts">
	import { Badge, Heading, List, P } from 'flowbite-svelte';
	export let languages: string | undefined = undefined;

	const languageList = languages?.split(', ');

	$: outerWidth = 0;
	$: isMd = outerWidth >= 768;
	// => '768px'
</script>

<svelte:window bind:outerWidth />

<div
	class="mb-4 sm:mb-6 flex
		   w-full
		   max-w-3xl flex-col
		   divide-gray-200
		   rounded-lg
		   border border-gray-200 bg-white px-4
		   pb-3 pt-6
		   text-gray-500
		   shadow-md sm:px-6
		   dark:divide-gray-700
		   dark:border-gray-700
		   dark:bg-gray-800
		   dark:text-gray-400"
>
	<Heading tag="h5" class="pb-1 text-lg md:text-xl">
		<slot name="title" />
	</Heading>
	<P class="pb-2 text-xs text-gray-500 md:text-sm dark:text-gray-400">
		<slot name="date" />
	</P>
	<P class="pb-2 text-sm md:text-base">
		<slot name="summary" />
	</P>
	<List class="pb-4 pl-4 text-sm text-gray-800 md:text-base dark:text-gray-300 list-outside">
		<slot name="bullets" />
	</List>

	{#if languageList !== undefined}
		<div class="flex flex-row flex-wrap gap-2 pb-3" data-testid="language-list">
			{#each languageList as language}
				<Badge large={isMd} color="dark">{language}</Badge>
			{/each}
		</div>
	{/if}
</div>
