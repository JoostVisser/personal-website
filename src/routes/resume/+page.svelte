<script>
	import { Heading, P } from 'flowbite-svelte';
	import { Tabs, TabItem, Button } from 'flowbite-svelte';

	import { AngleLeftOutline } from 'flowbite-svelte-icons';
	import AchievementCards from './AchievementCards.svelte';
	import CareerCards from './CareerCards.svelte';
	import ProjectCards from './ProjectCards.svelte';
	import EducationCards from './EducationCards.svelte';

	const tabClassActive = 'inline-block text-sm sm:text-lg font-medium text-center disabled:cursor-not-allowed font-semibold py-3 px-2 sm:px-4 text-white bg-primary-600 rounded-lg active'
	const tabClassInactive = 'inline-block text-sm sm:text-lg font-medium text-center disabled:cursor-not-allowed font-semibold py-3 px-2 sm:px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
</script>

<a href="/" class="mt-2 flex flex-row items-center gap-x-1">
	<AngleLeftOutline class="text-gray-500 dark:text-gray-400" />
	<P class="text-gray-500 dark:text-gray-400">Back</P>
</a>

<Heading tag="h1" class="mb-6 sm:mb-8 mt-2">Resume</Heading>

<a href="/Resume Joost Visser.pdf" download="Resume Joost Visser.pdf"
	><Button outline class="mb-6 sm:mb-8">Download PDF</Button></a
>

<Tabs tabStyle="pill"
      contentClass=""
	  defaultClass="flex mb-4 sm:mb-6 justify-between sm:justify-start flex-wrap space-x-1 sm:space-x-2 rtl:space-x-reverse">
	<TabItem open
			 activeClasses={tabClassActive}
			 inactiveClasses={tabClassInactive}
			 title="Career">
		<CareerCards />
	</TabItem>
	<TabItem activeClasses={tabClassActive}
			 inactiveClasses={tabClassInactive}
			 title="Achievements">
		<AchievementCards />
	</TabItem>
	<TabItem activeClasses={tabClassActive}
			 inactiveClasses={tabClassInactive}
			 title="Projects">
		<ProjectCards />
	</TabItem>
	<TabItem activeClasses={tabClassActive}
			 inactiveClasses={tabClassInactive}
			 title="Education">
		<EducationCards />
	</TabItem>
</Tabs>
