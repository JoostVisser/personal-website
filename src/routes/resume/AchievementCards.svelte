<script>
	import { A } from 'flowbite-svelte';
	import ResumeCard from '$lib/components/ResumeCard.svelte';
</script>

<ResumeCard>
	<div slot="title">Conference Paper — StampNet</div>
	<div slot="date">September 2019</div>
	<div slot="summary">
		Published my master thesis on a novel neural network architecture for unsupervised multi-class
		object localisation.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Publication:</span> Available on
			<A href="https://arxiv.org/abs/1902.02693">arXiv</A> and
			<A href="https://ieeexplore.ieee.org/document/8803767">IEEE Xplore</A>.
		</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">Chairman — Kinjin</div>
	<div slot="date">September 2017 - September 2018</div>
	<div slot="summary">
		Kinjin is a Japanese student culture association, providing daily activities such as
		calligraphy and karaoke.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Event Management:</span> Led and organised our largest-ever
			festival for the association's lustrum.
		</li>
		<li>
			<span class="font-semibold">Operations:</span> Successfully relocated headquarters and
			restructured administration and website.
		</li>
		<li>
			<span class="font-semibold">Partnerships:</span> Organised collaborations including talks
			and movie screenings with local cinema.
		</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">NWERC — European Algorithm Contest</div>
	<div slot="date">November 2015, 2016, 2017</div>
	<div slot="summary">
		Qualified for NWERC three years in a row after passing both Eindhoven and Benelux preliminaries
		in this international programming contest.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Top Result:</span> Placed
			<A href="https://people.bath.ac.uk/masjhd/2016.NWERC/nwerc2016-scoreboard/">
				first in the Netherlands
			</A> at NWERC 2016.
		</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">Exchange — Tohoku University (Japan)</div>
	<div slot="date">April 2019 - August 2019</div>
	<div slot="summary">
		Conducted AI research and completed Japanese language courses at one of Japan's top
		universities.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Research:</span> Received 'AA' grade for reinforcement learning
			research project.
		</li>
		<li>
			<span class="font-semibold">Language:</span> Received 'AA' grades for both B1 Japanese
			language courses.
		</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">Exchange — Mälardalen University (Sweden)</div>
	<div slot="date">September 2014 - January 2015</div>
	<div slot="summary">
		Completed master-level courses and projects in Embedded Systems.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Academic Results:</span> Received 'pass with credit' or 'pass
			with distinction' for all courses.
		</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">National Training in Mathematics</div>
	<div slot="date">September 2010 - June 2011</div>
	<div slot="summary">
		Placed top-10 in the Dutch Mathematical Olympiad.
	</div>
	<div slot="bullets">
		<li>
			<span class="font-semibold">Award:</span> Received a year of funded national training in
			advanced mathematics topics.
		</li>
	</div>
</ResumeCard>
