<script>
	export let method;
	export let icon;
	export let url;
</script>

<div class="mb-5 flex items-center md:mr-10 md:w-[180px] lg:w-[195px]">
	<a href={url} target="_blank" rel="noreferrer">
		<div class="mr-5 bg-shadow p-4 hover:shadow-lg">
			<img src={icon} alt={method} loading="lazy" class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
		</div>
	</a>
	<a
		href={url}
		target="_blank"
		rel="noreferrer"
		class="ibm text-white hover:text-hover md:text-lg lg:text-xl"
	>
		{method}
	</a>
</div>
