<script lang="ts">
	import { Heading, Li, List, P } from 'flowbite-svelte';
	export let title: string;
	export let date: string;
	export let summary: string;
	export let bullets: Array<string>;
	export let languages: string;
</script>

<div
	class="my-4 w-full
		   max-w-3xl divide-gray-200
		   rounded-lg
		   border
		   border-gray-200 bg-white px-4 pb-2
		   text-gray-500
		   shadow-md
		   sm:px-6
		   flex flex-col
		   dark:divide-gray-700
		   dark:border-gray-700
		   dark:bg-gray-800
		   dark:text-gray-400"
>
	<div class="flex flex-row items-end justify-between pb-4 pt-6">
		<Heading tag="h5" class="w-fit">{title}</Heading>
		<P class='text-gray-500 dark:text-gray-400'>{date}</P>
	</div>
	<P class="pb-2">
		{@html summary}
	</P>
	<List class="pb-3 text-gray-600 dark:text-gray-300">
		{#each bullets as bullet}
			<Li>{bullet}</Li>
		{/each}
	</List>
	<code class="pb-2 text-base text-gray-700 dark:text-gray-200">{languages}</code>
</div>
