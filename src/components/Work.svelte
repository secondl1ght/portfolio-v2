<script lang="ts">
	import { ProjectCard } from '$lib/comp';
	import { contributions } from '$lib/store';

	const mainProjects = [
		{
			gradients: 'from-[#FF6600] via-[#C93250] to-[#CA488C]',
			image: '/images/the-atomic-economy.webp',
			url: 'https://synonym.to/',
			title: 'synonym',
			description: "building the atomic economy, the world's first free-market society.",
			role: 'react/next.js engineer',
			duration: 'nov 2025 – present',
			tech: [
				{ tech: 'react', icon: '/icons/react.svg' },
				{ tech: 'next.js', icon: '/icons/nextjs.svg' },
				{ tech: 'typescript', icon: '/icons/ts.svg' },
				{ tech: 'tailwindcss', icon: '/icons/tailwind.svg' },
				{ tech: 'pubky core', icon: '/icons/pubky.svg' },
				{ tech: 'dexie.js', icon: '/icons/dexie.png' },
				{ tech: 'zustand', icon: '🐻' },
				{ tech: 'node.js', icon: '/icons/node.svg' }
			]
		},
		{
			gradients: 'from-[#7928CA] to-[#FF0080]',
			image: '/images/magma.webp',
			url: 'https://amboss.tech/',
			title: 'amboss',
			description: 'lightning network tools and insights that give node operators an edge.',
			role: 'senior front-end & quality-assurance engineer',
			duration: 'feb 2023 – oct 2025',
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
			gradients: 'from-[#DDD6F3] to-[#FAACA8]',
			image: '/images/coinos.webp',
			url: 'https://coinos.io/',
			title: 'coinos',
			description:
				'bitcoin web wallet since 2012 and point-of-sale application, supports both liquid and lightning integration.',
			role: 'web developer',
			duration: 'nov 2021 – jan 2023',
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
				alt="github activity - 1yr"
				title="github activity - 1yr"
				class="w-full min-w-96"
				fetchpriority="high"
				loading="eager"
				decoding="sync"
			/>
		</div>
		<figcaption class="ibm text-right text-xs text-secondary">github activity - 1yr</figcaption>
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
		/>
	{/each}
	<div bind:this={$contributions} id="contributions" />
</div>
