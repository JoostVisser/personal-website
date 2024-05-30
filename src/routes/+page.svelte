<script>
	import { Heading, P } from 'flowbite-svelte';
	import { AngleRightOutline } from 'flowbite-svelte-icons';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio of Joost Visser" />
</svelte:head>

<div class="mb-30 my-20 flex flex-row items-center justify-center sm:mt-40">
	<div class="flex flex-col items-end pr-8">
		<Heading tag="h1" class="mb-2 text-3xl sm:mb-4 sm:text-5xl">Hey, I'm Joost</Heading>
		<P class="mb-1 text-xl sm:mb-3 sm:text-2xl">Software Developer</P>
		<a
			href="/resume"
			class="inline-flex items-center
			text-primary-800 hover:underline
			sm:text-lg dark:text-primary-500"
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

<!-- <P class="mb-6 text-lg sm:text-xl">
	Good software development is like baking a cake. Hmmmmm.... Cake!
</P> -->
