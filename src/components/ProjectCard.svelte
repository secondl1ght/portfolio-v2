<script lang="ts">
	import { AppearanceCard, Tech } from '$lib/comp';

	export let gradients: string;
	export let image: string;
	export let url: string;
	export let title: string;
	export let description: string;
	export let role: string;
	export let duration: string;
	export let tech: { tech: string; icon: string }[];
	export let appearances: { url: string; image: string; alt: string }[] | undefined = undefined;
</script>

<div class="mt-[8.75rem] w-full bg-gradient-to-r {gradients}">
	<img
		src={image}
		alt={title}
		loading="lazy"
		class="w-full p-4 drop-shadow-xl transition-transform duration-500 hover:scale-105 md:p-12 lg:p-16 2xl:p-20"
	/>
</div>
<div class="mt-10 block justify-between lg:flex">
	<div class="w-full lg:w-2/3">
		<div class="flex-wrap items-center md:flex md:space-x-5">
			<h3>
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					class="jakarta text-4xl text-white hover:text-hover md:text-5xl lg:text-6xl">{title}</a
				>
			</h3>
			<div class="mt-5 inline-block bg-shadow p-4 hover:shadow-lg md:mt-0 md:block">
				<img
					src="/images/{title.replace(' ', '')}{title === 'cipherchat' ? '.png' : '.jpg'}"
					alt="avatar"
					class="h-8 w-8 rounded md:h-10 md:w-10 lg:h-12 lg:w-12"
				/>
			</div>
		</div>
		<p class="ibm mb-10 mt-8 w-full !leading-normal text-secondary md:w-2/3 md:text-lg lg:text-xl">
			{description}
		</p>
		<div class="block lg:hidden">
			<h4 class="jakarta mb-5 text-lg text-white md:text-xl lg:text-2xl">role</h4>
			<p class="ibm mb-10 text-secondary md:text-lg lg:text-xl">{role}</p>
			<h4 class="jakarta mb-5 text-lg text-white md:text-xl lg:text-2xl">duration</h4>
			<p class="ibm mb-10 text-secondary md:text-lg lg:text-xl">{duration}</p>
		</div>
		<h4 class="jakarta mb-5 text-lg text-white md:text-xl lg:text-2xl">tech stack</h4>
		<div class="flex flex-wrap gap-5">
			{#each tech as tech}
				<Tech tech={tech.tech} icon={tech.icon} />
			{/each}
		</div>
		{#if appearances}
			<h4 class="jakarta mb-5 mt-10 text-lg text-white md:text-xl lg:text-2xl">appearances</h4>
			<div class="flex flex-wrap gap-5">
				{#each appearances as card}
					<AppearanceCard url={card.url} image={card.image} alt={card.alt} />
				{/each}
			</div>
		{/if}
	</div>

	<div class="hidden w-1/3 lg:block">
		<h4 class="jakarta mb-5 text-lg text-white md:text-xl lg:text-2xl">role</h4>
		<p class="ibm mb-10 text-secondary md:text-lg lg:text-xl">{role}</p>
		<h4 class="jakarta mb-5 text-lg text-white md:text-xl lg:text-2xl">duration</h4>
		<p class="ibm mb-10 text-secondary md:text-lg lg:text-xl">{duration}</p>
	</div>
</div>
