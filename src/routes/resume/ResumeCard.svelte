<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	export let title: string;
	// export let location: string;
	export let date: string;
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
		   dark:divide-gray-700
		   dark:border-gray-700
		   dark:bg-gray-800
		   dark:text-gray-400"
>
	<div class="flex flex-row justify-between items-end">
		<h3 class="-mb-1">{title}</h3>
		<p class="-mb-1">{date}</p>
	</div>
	<slot />
</div>
