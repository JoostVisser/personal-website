<script>
	import ResumeCard from './ResumeCard.svelte';
	import { Heading, Li, List, P } from 'flowbite-svelte';
	import { Tabs, TabItem, Timeline, TimelineItem, Button } from 'flowbite-svelte';

  import { career } from '$lib/resume_data'
</script>

<Heading tag="h1" class="my-8">Resume</Heading>

<Button outline class="mx-auto mb-10 mr-4">Download PDF</Button>
<Button outline class="mx-auto mb-10">Download SVG</Button>

<Tabs tabStyle="pill" contentClass="p-4">
	<TabItem open>
		<div slot="title" class="text-lg">Career</div>
    <Heading tag="h2">Career</Heading>
    {#each career as entry}
      <ResumeCard {...entry} />
    {/each}
	</TabItem>
	<TabItem>
		<div slot="title" class="text-lg">Education</div>
		<Timeline>
			<TimelineItem
				title="Full-stack developer at ELEO (temporary project)"
				date="April 2023 - April 2024"
			>
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					ELEO develops modular batteries for off-highway vehicles.
				</p>

				<ul>
					<li>Developed and designed the Windows tooling app and API</li>
					<li>Created our CI pipeline and infrastructure, increasing test-coverage 2% → 60%</li>
					<li>Served as SCRUM master, increasing goal delivery rate from 20% to 90%.</li>
				</ul>
				<code>Dart, Flutter, Nest.js, Svelte, C++, Python, Azure, Terraform, PostgreSQL</code>
			</TimelineItem>
			<TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					All of the pages and components are first designed in Figma and we keep a parity between
					the two versions even as we update the project.
				</p>
			</TimelineItem>
			<TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					Get started with dozens of web components and interactive elements built on top of
					Tailwind CSS.
				</p>
			</TimelineItem>
		</Timeline>
	</TabItem>
	<TabItem>
		<div slot="title" class="text-lg">Highlights</div>
		<p class="text-sm text-gray-500 dark:text-gray-400"></p>
	</TabItem>
	<TabItem>
		<div slot="title" class="text-lg">Users</div>
		<p class="text-sm text-gray-500 dark:text-gray-400"></p>
	</TabItem>
</Tabs>
