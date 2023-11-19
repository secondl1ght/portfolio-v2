<script>
	import { contact } from '../lib/store';
	import Tech from './Tech.svelte';
	const favoriteTechStack = [
		{ tech: 'html5', icon: '/icons/html.svg' },
		{ tech: 'css3', icon: '/icons/css.svg' },
		{ tech: 'typescript', icon: '/icons/ts.svg' },
		{ tech: 'sveltekit', icon: '/icons/svelte.svg' },
		{ tech: 'tailwindcss', icon: '/icons/tailwind.svg' },
		{ tech: 'graphql', icon: '/icons/graphql.svg' },
		{ tech: 'yarn', icon: '/icons/yarn.svg' },
		{ tech: 'docker', icon: '/icons/docker.svg' },
		{ tech: 'node.js', icon: '/icons/node.svg' },
		{ tech: 'linux', icon: '/icons/linux.svg' },
		{ tech: 'bitcoin', icon: '/icons/bitcoin.svg' },
		{ tech: 'lightning', icon: '/icons/cln.svg' },
		{ tech: 'liquid', icon: '/icons/liquid.svg' }
	];
</script>

<div class="relative mx-auto mt-[7.5rem] w-3/4 space-y-10 lg:w-2/3 xl:w-7/12 2xl:w-1/2">
	<div class="absolute -left-6 -top-3 h-16 w-2 bg-[#C2E9FB] md:-left-10 md:-top-1.5 lg:top-0" />
	<h2 class="jakarta !mb-16 text-4xl text-white md:text-5xl lg:text-6xl">background</h2>
	<p class="ibm w-full !leading-normal text-secondary md:w-3/4 md:text-lg lg:text-xl">
		during the summer of 2020 i discovered bitcoin and it completely changed my life in so many
		ways. one of which is that it prompted me to give coding a try. after discovering how much i
		enjoy coding, i began working hard at teaching myself the fundamentals of web development.<br
		/><br /> my goal was to become a bitcoin developer so that i could focus all of my resources
		towards what i believe is the most important project of our time. i am now happy to say that i
		contribute to open source projects and work as a bitcoin dev full-time! <br /><br /> all of my
		code is open source, please feel free to review my code on github. this is my proof of work.
		<br /><br /> i'd like to thank everyone who has helped me along this incredible journey so far, i've
		met many kind and generous people along the way.
	</p>
	<div>
		<h4 class="jakarta mb-5 text-lg text-white md:text-xl lg:text-2xl">favorite tech stack</h4>
		<div class="block w-full flex-wrap md:flex">
			{#each favoriteTechStack as tech}
				<Tech tech={tech.tech} icon={tech.icon} />
			{/each}
		</div>
	</div>
	<div bind:this={$contact} id="contact" />
</div>
