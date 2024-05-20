<script>
	import { P } from 'flowbite-svelte';
	import '../app.css';
	import Header from './Header.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header></Header>

	<main class="mx-auto flex-1">
		<slot></slot>
	</main>

	<footer class="mx-auto pb-4">
		<P>grab a coffee with Joost</P>
	</footer>
</div>
