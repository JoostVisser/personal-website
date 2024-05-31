<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="mx-auto flex-1 px-3 w-full max-w-3xl">
		<slot></slot>
	</main>

	<Footer />
</div>
