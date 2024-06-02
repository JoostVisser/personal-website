<script>
	import { A, Blockquote, Heading, P } from 'flowbite-svelte';
	import { AngleRightOutline, QuoteSolid } from 'flowbite-svelte-icons';
</script>

<div class="mb-8 mt-10 flex flex-row items-center justify-center sm:mb-16 sm:mt-40">
	<div class="flex flex-col items-end pr-8">
		<Heading tag="h1" class="mb-1 text-2xl sm:mb-4 sm:text-5xl">Hey, I'm Joost</Heading>
		<P class="text-md mb-1 sm:mb-3 sm:text-2xl">Software Developer</P>
		<a
			href="/resume"
			class="inline-flex items-center
			text-sm text-primary-800
			hover:underline sm:text-lg dark:text-primary-500"
		>
			Check my resume
			<AngleRightOutline class="ms-2 h-4 w-4" />
		</a>
	</div>
	<enhanced:img
		src="$lib/images/profile-pic-2.jpg"
		class="w-36 rounded-full sm:w-48 md:w-64"
		alt="Joost Visser"
	/>
</div>

<div class="flex justify-center">
	<div class="mx-2 max-w-md sm:max-w-2xl">
		<QuoteSolid class="-mx-2 mb-3 h-12 w-12 text-gray-400 dark:text-gray-600" />
		<Blockquote class="text-md mb-4 font-normal sm:mb-6 sm:text-lg">
			"I really value Joost's ability to spar on any topic. Whether it is technical or process
			related, Joost generally seems to have some sort of opinion or can quickly reason about it." -
			Software Team Lead
		</Blockquote>

		<Blockquote class="text-md mb-4 font-normal sm:mb-6 sm:text-lg">
			"I don't think Joost will ever let himself get beaten by a challenge." - Software teammate
		</Blockquote>

		<Blockquote class="text-md mb-4 font-normal sm:mb-6 sm:text-lg">
			"Joost's view on how we should treat the product we're making has drastically improved our
			ways of working, not only as a software organization but also for me personally." - Product
			owner
		</Blockquote>

		<Blockquote class="text-md mb-8 font-normal sm:text-lg">
			"Joost, you have an inspiring personality, you make everything you do almost extra ordinary."
			- SCRUM master
		</Blockquote>
	</div>
</div>
