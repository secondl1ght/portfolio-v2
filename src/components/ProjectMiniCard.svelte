<script>
	export let project;
	export let url;
	export let icon;
</script>

<a title={project} href={url} target="_blank" rel="noreferrer" class="mb-10 mr-10">
	<div class="bg-shadow p-5 hover:shadow-xl">
		<img
			src={icon}
			alt={project}
			loading="lazy"
			class="mx-auto h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
		/>
	</div>
</a>
