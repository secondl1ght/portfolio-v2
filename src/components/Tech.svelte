<script lang="ts">
	export let tech: string;
	export let icon: string;
</script>

<div class="group relative cursor-default bg-shadow p-4">
	<p
		class="{tech === 'lnc-web'
			? 'whitespace-nowrap'
			: ''} ibm absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100"
	>
		{tech}
	</p>
	{#if tech === 'zustand'}
		<p
			class="z-0 flex h-8 w-8 items-center justify-center transition-all group-hover:blur-sm md:h-10 md:w-10 lg:h-12 lg:w-12"
		>
			<span class="text-[24px] md:text-[32px] lg:text-[40px]">{icon}</span>
		</p>
	{:else}
		<img
			src={icon}
			alt={tech}
			loading="lazy"
			class="z-0 h-8 w-8 transition-all group-hover:blur-sm md:h-10 md:w-10 lg:h-12 lg:w-12"
		/>
	{/if}
</div>
