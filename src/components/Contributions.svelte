<script lang="ts">
	import { ProjectCard } from '$lib/comp';
	import { background } from '$lib/store';

	const mainProjects = [
		{
			gradients: 'from-[#7928CA] to-[#FF0080]',
			image: '/images/magma.webp',
			url: 'https://amboss.space/',
			title: 'amboss',
			description: 'lightning network tools and insights that give node operators an edge.',
			role: 'senior front-end & quality-assurance engineer',
			duration: '2023 - present',
			tech: [
				{ tech: 'next.js', icon: '/icons/nextjs.svg' },
				{ tech: 'react', icon: '/icons/react.svg' },
				{ tech: 'typescript', icon: '/icons/ts.svg' },
				{ tech: 'styled components', icon: '/icons/styled-components.svg' },
				{ tech: 'graphql', icon: '/icons/graphql.svg' },
				{ tech: 'apollo', icon: '/icons/apollo.svg' },
				{ tech: 'nestjs', icon: '/icons/nest.svg' },
				{ tech: 'prisma', icon: '/icons/prisma.svg' },
				{ tech: 'postgresql', icon: '/icons/postgres.svg' },
				{ tech: 'redis', icon: '/icons/redis.svg' },
				{ tech: 'rabbitmq', icon: '/icons/rabbit.svg' },
				{ tech: 'node.js', icon: '/icons/node.svg' },
				{ tech: 'docker', icon: '/icons/docker.svg' }
			]
		},
		{
			gradients: 'from-[#F5F7FA] to-[#C3CFE2]',
			image: '/images/cipherchat-screenshot.webp',
			url: 'https://cipherchat.app/',
			title: 'cipherchat',
			description: 'encrypted messaging over the bitcoin lightning network.',
			role: 'creator',
			duration: '2023 - present',
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
			duration: '2022 - present',
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
		},
		{
			gradients: 'from-[#DDD6F3] to-[#FAACA8]',
			image: '/images/coinos.webp',
			url: 'https://coinos.io/',
			title: 'coinos',
			description:
				'bitcoin web wallet since 2012 and point-of-sale application, supports both liquid and lightning integration.',
			role: 'web developer',
			duration: '2021 - 2023',
			tech: [
				{ tech: 'vue.js', icon: '/icons/vue.svg' },
				{ tech: 'sveltekit', icon: '/icons/svelte.svg' },
				{ tech: 'javascript', icon: '/icons/js.svg' },
				{ tech: 'tailwindcss', icon: '/icons/tailwind.svg' },
				{ tech: 'hasura', icon: '/icons/hasura.svg' },
				{ tech: 'fastify', icon: '/icons/fast.svg' },
				{ tech: 'mariadb', icon: '/icons/maria.svg' },
				{ tech: 'keydb', icon: '/icons/keydb.svg' },
				{ tech: 'ipfs', icon: '/icons/ipfs.svg' },
				{ tech: 'node.js', icon: '/icons/node.svg' },
				{ tech: 'docker', icon: '/icons/docker.svg' }
			]
		},
		{
			gradients: 'from-[#B1F5EE] to-[#A6C1EE]',
			image: '/images/geyser.webp',
			url: 'https://geyser.fund/',
			title: 'geyser',
			description:
				'global and user-friendly crowdfunding, grants, and other engaging use-cases on the bitcoin lightning network.',
			role: 'software engineer',
			duration: '2022',
			tech: [
				{ tech: 'react', icon: '/icons/react.svg' },
				{ tech: 'typescript', icon: '/icons/ts.svg' },
				{ tech: 'chakra ui', icon: '/icons/chakra.svg' },
				{ tech: 'graphql', icon: '/icons/graphql.svg' },
				{ tech: 'prisma', icon: '/icons/prisma.svg' },
				{ tech: 'postgresql', icon: '/icons/postgres.svg' },
				{ tech: 'node.js', icon: '/icons/node.svg' }
			]
		},
		{
			gradients: 'from-[#F6D365] to-[#FDA085]',
			image: '/images/alby.webp',
			url: 'https://getalby.com/',
			title: 'alby',
			description:
				'a versatile lightning browser extension bringing bitcoin payments and authentication to the web.',
			role: 'front-end developer',
			duration: '2021 - 2022',
			tech: [
				{ tech: 'rubyonrails', icon: '/icons/rails.svg' },
				{ tech: 'ruby', icon: '/icons/ruby.svg' },
				{ tech: 'react', icon: '/icons/react.svg' },
				{ tech: 'typescript', icon: '/icons/ts.svg' },
				{ tech: 'tailwindcss', icon: '/icons/tailwind.svg' },
				{ tech: 'postgresql', icon: '/icons/postgres.svg' },
				{ tech: 'redis', icon: '/icons/redis.svg' },
				{ tech: 'node.js', icon: '/icons/node.svg' }
			]
		}
	];
</script>

<div class="mx-auto mt-40 w-3/4 lg:w-2/3 xl:w-7/12 2xl:w-1/2">
	<h2
		class="jakarta mb-16 text-4xl text-white underline decoration-[#AF7CD5] decoration-dashed decoration-8 underline-offset-8 md:text-5xl lg:text-6xl"
	>
		proof of work
	</h2>
	<figure>
		<div class="w-full overflow-x-auto transition-all duration-500 ease-in-out hover:saturate-200">
			<img
				src="https://gh-contributions-7debee29ca94.herokuapp.com/9A6FF1/secondl1ght"
				alt="github contributions - 1yr"
				title="github contributions - 1yr"
				class="w-full min-w-96"
				fetchpriority="high"
				loading="eager"
				decoding="sync"
			/>
		</div>
		<figcaption class="ibm text-right text-xs text-secondary">
			github contributions - 1yr
		</figcaption>
	</figure>
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
