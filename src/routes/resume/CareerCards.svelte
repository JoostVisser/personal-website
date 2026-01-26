<script>
	import ResumeCard from '$lib/components/ResumeCard.svelte';
</script>

<ResumeCard languages="C#, Python, Azure, Terraform, CI/CD, GeoJSON, REST">
	<div slot="title">Software Developer at AgXeed</div>
	<div slot="date">July 2024 - Present</div>
	<div slot="summary">
		AgXeed develops autonomous agricultural robots for sustainable farming.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Cloud & IaC:</span> Re-architected legacy backend to distributed
			systems via Terraform, cutting costs by 10x and enabling auto-scaling to 100+ nodes.
		</li>
		<li>
			<span class="font-semibold">Developer Tooling:</span> Engineered internal Python CLI tooling
			(Typer, uv) and automated NuGet deployment scripts to streamline workflows.
		</li>
		<li>
			<span class="font-semibold">Computational Geometry:</span> Engineered high-level polygon and
			pathing logic, applying advanced data structures to solve geometry problems.
		</li>
	</div>
</ResumeCard>

<ResumeCard languages="Dart, Flutter, Nest.js, Svelte, C++, Azure, Terraform, PostgreSQL">
	<div slot="title">Full-stack Developer at ELEO</div>
	<div slot="date">April 2023 - April 2024</div>
	<div slot="summary">
		<p class="pb-1 italic">Temporary project</p>
		ELEO develops modular batteries for off-highway vehicles.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Product Development:</span> Developed and designed the product's
			Windows tooling app and API.
		</li>
		<li>
			<span class="font-semibold">Infrastructure & CI/CD:</span> Set up CI pipeline and Azure
			infrastructure, increasing test coverage from 2% → 60%.
		</li>
		<li>
			<span class="font-semibold">Agile Leadership:</span> Served as SCRUM Master, increasing goal
			delivery rate from 20% → 90%.
		</li>
	</div>
</ResumeCard>

<ResumeCard languages="Python, C, Rust, CircleCI, Docker, Git, CAN, CCP, SonarQube">
	<div slot="title">Embedded Software Engineer at Lightyear</div>
	<div slot="date">May 2021 - March 2023</div>
	<div slot="summary">
		<p class="pb-1 italic">Vacated due to bankruptcy</p>
		Lightyear was a scale-up developing the world's first solar electric vehicle.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">CI/CD & Infrastructure:</span> Established Python infrastructure,
			test frameworks, and automated CI tooling to support hardware integration.
		</li>
		<li>
			<span class="font-semibold">Version Control:</span> Introduced versioning, changelogs, and
			trunk-based development to stabilize the codebase.
		</li>
		<li>
			<span class="font-semibold">Technical Leadership:</span> Organized quarterly alignment events
			and workshops to bridge knowledge gaps across engineering teams.
		</li>
	</div>
</ResumeCard>

<ResumeCard languages="Python, Jupyter Notebook, Confluence">
	<div slot="title">Algorithm Developer at SmartQare</div>
	<div slot="date">April 2020 - April 2021</div>
	<div slot="summary">
		SmartQare is a startup developing a medical wearable for health monitoring.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">MDR Compliance:</span> Led a data-driven literature analysis of
			1,000+ papers to secure clinical evidence for medical approval.
		</li>
		<li>
			<span class="font-semibold">Biomedical Algorithms:</span> Engineered a reliable fall-detection
			algorithm.
		</li>
	</div>
</ResumeCard>

<ResumeCard languages="Java">
	<div slot="title">University Teacher at Avans University</div>
	<div slot="date">April 2021 - May 2021</div>
	<div slot="summary">
		Guest lecturer for the third-year course 'Algorithms and Data Structures'.
	</div>
	<div slot="bullets">
		<li>Created and delivered lectures on algorithms and data structures.</li>
		<li>Developed and graded assignments and exams.</li>
	</div>
</ResumeCard>
