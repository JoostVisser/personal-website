<script>
	import { A } from 'flowbite-svelte';
	import ResumeCard from './ResumeCard.svelte';
</script>

<ResumeCard languages="Svelte, Tailwind, Node.js">
	<div slot="title">Portfolio website</div>
	<div slot="date">May 2024</div>
	<div slot="summary">My personal portfolio website which you're currently viewing. :)</div>
	<div slot="bullets">
		<li>Developed using Flowbite and Svelte.</li>
		<li>Hosted on a K8s cluster</li>
		<li>
			Code available on
			<A href="https://github.com/JoostVisser/personal-website">Github</A>.
		</li>
	</div>
</ResumeCard>

<ResumeCard languages="Rust, Github Actions">
	<div slot="title">Fortune Slip Generator</div>
	<div slot="date">April 2023 - July 2023</div>
	<div slot="summary">A program that generates a PDF with fortune slips.</div>
	<div slot="bullets">
		<li>
			Everything has been written with configurability in mind, from design to text generation.
		</li>
		<li>Program is used yearly without help during the winter festival of Kinjin.</li>
		<li>
			Code available on
			<A href="https://github.com/JoostVisser/fortune-slip-generator">Github</A>.
		</li>
	</div>
</ResumeCard>

<ResumeCard languages="Ruby on Rails, Bootstrap, CoffeeScript">
	<div slot="title">Cafetaria Website</div>
	<div slot="date">April 2020 - April 2021</div>
	<div slot="summary">A website for the cafetaria of swimming pool Stappegoor.</div>
	<div slot="bullets">
		<li>Contained a reservation system and email integration.</li>
		<li>Website ran reliably for years.</li>
		<li>
			Code available on
			<A href="https://github.com/JoostVisser/stappegoor">Github</A>.
		</li>
	</div>
</ResumeCard>
