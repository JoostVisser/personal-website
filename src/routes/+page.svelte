<script>
	import { Button, Heading, P } from 'flowbite-svelte';
	import { ArrowRightOutline, AngleRightOutline } from 'flowbite-svelte-icons';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="mb-30 my-20 flex flex-row items-center justify-center sm:mt-40">
	<div class="flex flex-col items-end pr-8">
		<Heading tag="h1" class="mb-2 sm:mb-4 text-3xl sm:text-5xl">Hey, I'm Joost</Heading>
		<P class="text-xl sm:text-2xl mb-1 sm:mb-3">Software Developer</P>
		<a
			href="/resume"
			class="inline-flex items-center
			text-primary-800 hover:underline
			dark:text-primary-500 sm:text-lg"
		>
			Check my resume
			<AngleRightOutline class="ms-2 h-4 w-4" />
		</a>
	</div>
	<enhanced:img
		src="$lib/images/profile-pic-2.jpg"
		class="w-36 rounded-full sm:w-48 md:w-64"
		alt="A photo of Joost Visser"
	/>
</div>

<P size="xl" class="mb-6">Good software development is like baking a cake. Hmmmmm.... Cake!</P>
