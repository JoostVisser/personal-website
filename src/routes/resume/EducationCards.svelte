<script>
	import ResumeCard from '$lib/components/ResumeCard.svelte';
</script>

<ResumeCard>
	<div slot="title">Master Computer Science — Cum Laude</div>
	<div slot="date">September 2016 - February 2020</div>
	<div slot="summary">
		<p class="pb-1 italic">Eindhoven University of Technology</p>
		Specialised in AI, algorithms, and data analysis.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Research:</span> Published a peer-reviewed AI paper on neural
			network architecture.
		</li>
		<li>
			<span class="font-semibold">International:</span> Completed exchange program at Tohoku
			University, Japan.
		</li>
		<li>
			<span class="font-semibold">Leadership:</span> Served as Chairman of Japanese culture
			association Kinjin.
		</li>
		<li>
			<span class="font-semibold">Competitive Programming:</span> Qualified for NWERC three
			consecutive years.
		</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">Bachelor Software Science</div>
	<div slot="date">September 2012 - January 2016</div>
	<div slot="summary">
		<p class="pb-1 italic">Eindhoven University of Technology</p>
		Fundamentals of software engineering, systems design, and computer science.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">International:</span> Completed exchange program at Mälardalen
			University, Sweden.
		</li>
		<li>
			<span class="font-semibold">Extracurricular:</span> Active member of study association
			GEWIS.
		</li>
	</div>
</ResumeCard>
