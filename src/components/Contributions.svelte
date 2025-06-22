<script lang="ts">
	import { ProjectCard } from '$lib/comp';
	import { background } from '$lib/store';

	const mainProjects = [
		{
			gradients: 'from-[#F5F7FA] to-[#C3CFE2]',
			image: '/images/cipherchat-screenshot.webp',
			url: 'https://cipherchat.app/',
			title: 'cipherchat',
			description: 'encrypted messaging over the bitcoin lightning network.',
			role: 'creator',
			duration: '2023',
			tech: [
				{ tech: 'sveltekit', icon: '/icons/svelte.svg' },
				{ tech: 'typescript', icon: '/icons/ts.svg' },
				{ tech: 'tailwindcss', icon: '/icons/tailwind.svg' },
				{ tech: 'lnc-web', icon: '/icons/lnc.png' },
				{ tech: 'dexie.js', icon: '/icons/dexie.png' },
				{ tech: 'node.js', icon: '/icons/node.svg' }
			],
			appearances: [
				{
					url: 'https://youtu.be/p5UuHwXH4kk',
					image: 'ctw.webp',
					alt: 'Connect The World'
				}
			]
		},
		{
			gradients: 'from-[#0B9072] to-[#144046]',
			image: '/images/btcmap.webp',
			url: 'https://btcmap.org/',
			title: 'btc map',
			description: 'easily find places to spend sats anywhere on the planet.',
			role: 'co-creator',
			duration: '2022',
			tech: [
				{ tech: 'sveltekit', icon: '/icons/svelte.svg' },
				{ tech: 'typescript', icon: '/icons/ts.svg' },
				{ tech: 'tailwindcss', icon: '/icons/tailwind.svg' },
				{ tech: 'leafletjs', icon: '/icons/leaflet.png' },
				{ tech: 'openstreetmap', icon: '/icons/osm.svg' },
				{ tech: 'sqlite', icon: '/icons/sqlite.svg' },
				{ tech: 'node.js', icon: '/icons/node.svg' }
			],
			appearances: [
				{
					url: 'https://stephanlivera.com/episode/420/',
					image: 'slp.webp',
					alt: 'Stephan Livera Podcast'
				},
				{
					url: 'https://youtu.be/BzdKSgT17pQ',
					image: 'adopting.webp',
					alt: 'Adopting Bitcoin'
				}
			]
		}
	];
</script>

<div class="mx-auto mt-[8.75rem] w-3/4 lg:w-2/3 xl:w-7/12 2xl:w-1/2">
	<h2
		class="jakarta mb-16 text-4xl text-white underline decoration-[#A3C6FD] decoration-dashed decoration-8 underline-offset-8 md:text-5xl lg:text-6xl"
	>
		contributions
	</h2>
	{#each mainProjects as project}
		<ProjectCard
			gradients={project.gradients}
			image={project.image}
			url={project.url}
			title={project.title}
			description={project.description}
			role={project.role}
			duration={project.duration}
			tech={project.tech}
			appearances={project.appearances}
		/>
	{/each}
	<div bind:this={$background} id="background" />
</div>
