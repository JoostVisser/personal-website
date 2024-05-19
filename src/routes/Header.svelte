<script>
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, DarkMode } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar>
	<NavBrand href="/">
		<img src="/favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span
			class="self-center
				   whitespace-nowrap
				   text-xl font-semibold dark:text-white"
		>
			Joost Visser
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		<Button size="sm">Get in touch!</Button>
		<DarkMode class="border text-primary-500 dark:border-gray-800 dark:text-primary-600" />
		<NavHamburger />
	</div>
	<NavUl {activeUrl}>
		<NavLi href="/resume">Resume</NavLi>
		<NavLi href="/blog">Blog</NavLi>
	</NavUl>
</Navbar>
