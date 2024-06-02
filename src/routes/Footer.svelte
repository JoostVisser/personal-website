<script lang="ts">
	import { GithubSolid, LinkedinSolid, EnvelopeOutline} from 'flowbite-svelte-icons';

	const iconClass = 'dark:text-white h-8 w-8';
</script>

<footer class="mx-auto flex flex-row items-center gap-x-2 pb-4">
	<a href="https://github.com/JoostVisser"><GithubSolid class={iconClass} /></a>
	<a href="https://linkedin.com/in/thejoostvisser"><LinkedinSolid class={iconClass} /></a>
	<a href="mailto:jwjhvisser@gmail.com"><EnvelopeOutline class={iconClass} /></a>
</footer>
