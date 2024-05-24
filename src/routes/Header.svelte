<script>
	import { page } from '$app/stores';
	import { Navbar, NavBrand, DarkMode } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>

<div class="mt-2" />
<Navbar class="bg-gray-100">
	<NavBrand href="/">
		<span
			class="self-center
				   whitespace-nowrap
				   text-xl font-semibold
				   text-gray-900 dark:text-white"
		>
			Joost Visser
		</span>
	</NavBrand>
	<div class="flex md:order-1">
		<DarkMode class="text-primary-500 dark:text-primary-600" />
	</div>
</Navbar>
