<script lang="ts">
	import { contact } from '$lib/store';

	const years = new Date().getFullYear() - 2021;
</script>

<div class="mx-auto mt-[8.75rem] w-3/4 space-y-10 lg:w-2/3 xl:w-7/12 2xl:w-1/2">
	<h2
		class="jakarta !mb-16 text-4xl text-white underline decoration-[#C2E9FB] decoration-dashed decoration-8 underline-offset-8 md:text-5xl lg:text-6xl"
	>
		background
	</h2>
	<p class="ibm w-full !leading-normal text-secondary md:w-3/4 md:text-lg lg:text-xl">
		during the summer of 2020 i discovered bitcoin and it completely changed my life in so many
		ways. one of which is that it prompted me to give coding a try. after discovering how much i
		enjoy coding, i began working hard at teaching myself the fundamentals of web development.
		<br /><br />
		my goal was to become a bitcoin developer so that i could focus all of my resources towards what
		i believe is the most important project of our time. i am now happy to say that i contribute to open
		source projects and work as a bitcoin dev full-time!
		<br /><br />
		for the past {years} years i have been mainly building applications using the lightning network.
		the projects i have created and contributed to have had a meaningful impact on bitcoin adoption globally.
		this has given me the opportunity to appear on podcasts and speak at conferences worldwide about
		my areas of expertise.
		<br /><br />
		as a team member of many innovative startups i played a key role in taking features through the full
		development cycle and shipping high-quality, pixel-perfect, user-facing products to production.
		<br /><br />
		all of my code is open source and can be verified on github. this is my proof of work.
		<br /><br />
		i'd like to thank everyone who has helped me along this incredible journey so far, i've met many
		kind and generous people along the way.
	</p>
	<div bind:this={$contact} id="contact" />
</div>
