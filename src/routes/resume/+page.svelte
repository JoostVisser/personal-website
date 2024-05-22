<script>
	import { Heading, P } from 'flowbite-svelte';
	import { Tabs, TabItem, Button } from 'flowbite-svelte';

	import { AngleLeftOutline } from 'flowbite-svelte-icons';
	import AchievementCards from './AchievementCards.svelte';
	import CareerCards from './CareerCards.svelte';
	import ProjectCards from './ProjectCards.svelte';
	import EducationCards from './EducationCards.svelte';

	const tabClass = 'text-md sm:text-lg font-semibold';
</script>

<a href="/" class="mt-2 flex flex-row items-center gap-x-1">
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
		<CareerCards />
	</TabItem>
	<TabItem>
		<div slot="title" class={tabClass}>Achievements</div>
		<AchievementCards />
	</TabItem>
	<TabItem>
		<div slot="title" class={tabClass}>Projects</div>
		<ProjectCards />
	</TabItem>
	<TabItem>
		<div slot="title" class={tabClass}>Education</div>
		<EducationCards />
	</TabItem>
</Tabs>
