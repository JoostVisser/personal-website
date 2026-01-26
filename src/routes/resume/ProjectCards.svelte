<script>
	import { A } from 'flowbite-svelte';
	import ResumeCard from '$lib/components/ResumeCard.svelte';
</script>

<ResumeCard languages="Svelte, Kubernetes, Docker, GitHub Actions, Tailwind, Node.js">
	<div slot="title">Portfolio Website</div>
	<div slot="date">May 2024</div>
	<div slot="summary">My personal portfolio website which you're currently viewing. :)</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Frontend:</span> Built with Svelte and Flowbite component
			library.
		</li>
		<li>
			<span class="font-semibold">Infrastructure:</span> Self-hosted on a Kubernetes cluster with
			CI/CD pipeline.
		</li>
		<li>
			<span class="font-semibold">Source:</span>
			<A href="https://github.com/JoostVisser/personal-website">GitHub</A>
		</li>
	</div>
</ResumeCard>

<ResumeCard languages="Rust, GitHub Actions">
	<div slot="title">Fortune Slip Generator</div>
	<div slot="date">April 2023 - July 2023</div>
	<div slot="summary">
		A configurable CLI tool that generates printable PDF fortune slips for events.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Design:</span> Fully configurable design and text generation
			via YAML configuration.
		</li>
		<li>
			<span class="font-semibold">Production Use:</span> Used annually at Kinjin's winter
			festival without manual intervention.
		</li>
		<li>
			<span class="font-semibold">Source:</span>
			<A href="https://github.com/JoostVisser/fortune-slip-generator">GitHub</A>
		</li>
	</div>
</ResumeCard>

<ResumeCard languages="Ruby on Rails, Bootstrap, CoffeeScript">
	<div slot="title">Cafeteria Website</div>
	<div slot="date">April 2020 - April 2021</div>
	<div slot="summary">
		A full-stack web application for the cafeteria of swimming pool Stappegoor.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Features:</span> Built-in reservation system and automated
			email notifications.
		</li>
		<li>
			<span class="font-semibold">Reliability:</span> Ran in production for multiple years
			without issues.
		</li>
		<li>
			<span class="font-semibold">Source:</span>
			<A href="https://github.com/JoostVisser/stappegoor">GitHub</A>
		</li>
	</div>
</ResumeCard>
