<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
</script>

<Navbar>
	<NavBrand href="/">
		<img src="/favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Joost</span
		>
	</NavBrand>
	<div class="flex md:order-2">
		<Button size="sm">Get in touch!</Button>
		<NavHamburger />
	</div>
	<NavUl>
		<NavLi href="/resume">Resume</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
	</NavUl>
</Navbar>
