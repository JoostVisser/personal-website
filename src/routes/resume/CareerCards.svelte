<script>
	import { P } from 'flowbite-svelte';
	import ResumeCard from './ResumeCard.svelte';
</script>

<ResumeCard languages="Dart, C++, Python, Flutter, Nest.js, Svelte, Azure, Terraform, PostgreSQL">
	<div slot="title">Full-stack developer at ELEO</div>
	<div slot="date">April 2023 - April 2024</div>
	<div slot="summary">
		<P italic class="pb-1">Temporary project</P>
		ELEO develops modular batteries for off-highway vehicles.
	</div>
	<div slot="bullets">
		<li>Developed and designed the Windows tooling app and API.</li>
		<li>Created our CI pipeline and infrastructure, increasing test-coverage 2% → 60%.</li>
		<li>Served as SCRUM master, increasing goal delivery rate from 20% to 90%.</li>
	</div>
</ResumeCard>

<ResumeCard languages="Python, C, Rust, CircleCI, Docker, Git, CAN, CCP, SonarQube">
	<div slot="title">Embedded Systems engineer at Lightyear</div>
	<div slot="date">May 2021 - March 2023</div>
	<div slot="summary">
		<P italic class="pb-1">Vacated due to bankruptcy</P>
		Lightyear was a scale-up company developing the world's first solar.
	</div>
	<div slot="bullets">
		<li>Setup our Python infrastructure, including test-framework and CI-tooling.'</li>
		<li>Introduced versioning, changelogs, and trunk-based git.'</li>
		<li>Integration and software testing.'</li>
		<li>Organised quarterly alignment events and gave several workshops.</li>
	</div>
</ResumeCard>

<ResumeCard languages="Python, Jupyter notebooks, Confluence, Git">
	<div slot="title">Algorithm developer at SmartQare</div>
	<div slot="date">April 2020 - April 2021</div>
	<div slot="summary">
		SmartQare is a startup developing a medical wearable for health monitoring.
	</div>
	<div slot="bullets">
		<li>Developed a reliable fall-detection algorithm.</li>
		<li>Managed a literature study with external parties.'</li>
		<li>Provided support for the QMS in Confluence.</li>
	</div>
</ResumeCard>

<ResumeCard languages="Java">
	<div slot="title">University Teacher at Avans University</div>
	<div slot="date">April 2021 - May 2021</div>
	<div slot="summary">
		Guest lecturer for the third-year course 'Algorithms and Data Structures'.
	</div>
	<div slot="bullets">
		<li>Created and gave lectures.',</li>
		<li>Developed and graded assignments.',</li>
		<li>Developed and graded exams.'</li>
	</div>
</ResumeCard>
