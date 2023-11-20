<script>
	export let tech;
	export let icon;
</script>

<div title={tech} class="mb-5 mr-5 bg-shadow p-4 hover:shadow-lg">
	<img src={icon} alt={tech} loading="lazy" class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
</div>
