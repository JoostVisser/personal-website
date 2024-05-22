<script>
	import ResumeCard from './ResumeCard.svelte';
</script>

<ResumeCard>
	<div slot="title">Master Computer Science - Cum Laude</div>
	<div slot="date">September 2016 - February 2020</div>
	<div slot="summary">More specialised topics in AI, algorithms and data analysis.</div>
	<div slot="bullets">
		<li>Published an AI paper</li>
		<li>Exchange to Japan</li>
		<li>Chairman of a culture association.</li>
		<li>Qualified for international algorithm contests.</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">Bachelor Software Science</div>
	<div slot="date">September 2012 - January 2016</div>
	<div slot="summary">Learned the basic principles and methods of software and systems.</div>
	<div slot="bullets">
		<li>Exchange to Sweden</li>
		<li>Active at Study association GEWIS</li>
	</div>
</ResumeCard>
