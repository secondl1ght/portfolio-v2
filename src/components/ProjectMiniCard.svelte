<script lang="ts">
	export let project: string;
	export let url: string;
	export let icon: string;
</script>

<a title={project} href={url} target="_blank" rel="noreferrer">
	<div class="bg-shadow p-5 hover:shadow-xl">
		<img
			src={icon}
			alt={project}
			loading="lazy"
			class="h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
		/>
	</div>
</a>
