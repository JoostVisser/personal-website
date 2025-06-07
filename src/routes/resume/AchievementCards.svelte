<script>
	import { A } from 'flowbite-svelte';
	import ResumeCard from '$lib/components/ResumeCard.svelte';
</script>

<ResumeCard>
	<div slot="title">Conference Paper - StampNet</div>
	<div slot="date">September 2019</div>
	<div slot="summary">
		Published my master thesis about a novel neural network architecture for unsupervised
		multi-class object localisation.
	</div>
	<div slot="bullets">
		<li>
			Paper available on <A href="https://arxiv.org/abs/1902.02693">Arxiv</A>
			and <A href="https://ieeexplore.ieee.org/document/8803767">IEEE</A>.
		</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">Chairman Kinjin</div>
	<div slot="date">September 2017 - September 2018</div>
	<div slot="summary">
		Kinjin is a Japanese student culture association, providing daily activities for her members,
		like calligraphy or karaoke.
	</div>
	<div slot="bullets">
		<li>Lead and organised our largest ever festival for our lustrum.</li>
		<li>Successfully moved our headquarters.</li>
		<li>Restructured our administration and website.</li>
		<li>
			Organised several collaborations such as a talk and movie showing with our local cinema.
		</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">NWERC - European Algorithm Contest</div>
	<div slot="date">November 2015, 2016, 2017</div>
	<div slot="summary">
		Qualitied for NWERC three timmes in a row after passing both Eindhoven and Benelux preliminaries
		in this international programming contest.
	</div>
	<div slot="bullets">
		<li>
			We placed
			<A href="https://people.bath.ac.uk/masjhd/2016.NWERC/nwerc2016-scoreboard/">
				first in the Netherlands
			</A> at NWERC 2016.
		</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">Exchange at Tohoku University (Japan)</div>
	<div slot="date">April 2019 - August 2019</div>
	<div slot="summary">
		Performed AI research and followed Japanese language courses at one of the top universities in
		Japan.
	</div>
	<div slot="bullets">
		<li>Received an 'AA' for my research on reinforcement learning.</li>
		<li>Received an 'AA' for both my B1 Japanese language courses.</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">Exchange at Mälardalen Universität (Sweden)</div>
	<div slot="date">September 2014 - January 2015</div>
	<div slot="summary">
		The exchange consisted of several master courses and projects in Embedded Systems.
	</div>
	<div slot="bullets">
		<li>Received 'pass with credit' or 'pass with distinction' for all courses.</li>
	</div>
</ResumeCard>

<ResumeCard>
	<div slot="title">National Training in Mathematics</div>
	<div slot="date">September 2010 - June 2011</div>
	<div slot="summary">I placed top-10 in the Dutch Mathematical Olympiad of my year.</div>
	<div slot="bullets">
		<li>Received a year of paid national training in a variety of math topics.</li>
	</div>
</ResumeCard>
