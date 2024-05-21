<script>
	import ResumeCard from './ResumeCard.svelte';
	import { Breadcrumb, BreadcrumbItem, Heading, P } from 'flowbite-svelte';
	import { Tabs, TabItem, Button } from 'flowbite-svelte';

	import { achievements, career, education } from '$lib/resume_data';
  import { AngleLeftOutline } from 'flowbite-svelte-icons';

	const tabClass = 'text-lg font-bold';
</script>

<a href="/" class="mt-2 flex flex-row gap-x-1 items-center">
  <AngleLeftOutline class="text-gray-500 dark:text-gray-400" />
  <P class="text-gray-500 dark:text-gray-400">Back</P>
</a>

<Heading tag="h1" class="mb-8 mt-2">Resume</Heading>

<a href="/Resume Joost Visser.pdf" download="Resume Joost Visser.pdf"
	><Button outline class="mb-8">Download PDF</Button></a
>

<Tabs tabStyle="pill" contentClass="">
	<TabItem open>
		<div slot="title" class={tabClass}>Career</div>
		{#each career as entry}
			<ResumeCard {...entry} />
		{/each}
	</TabItem>
	<TabItem>
		<div slot="title" class={tabClass}>Projects</div>
		{#each career as entry}
			<ResumeCard {...entry} />
		{/each}
	</TabItem>
	<TabItem>
		<div slot="title" class={tabClass}>Achievements</div>
		{#each achievements as entry}
			<ResumeCard {...entry} />
		{/each}
	</TabItem>
	<TabItem>
		<div slot="title" class={tabClass}>Education</div>
		{#each education as entry}
			<ResumeCard {...entry} />
		{/each}
	</TabItem>
</Tabs>
