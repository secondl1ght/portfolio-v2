<script>
	export let image;
	export let title;
	export let description;
	export let date;
	export let url;
</script>

<div class="mx-auto w-3/4 space-y-5 md:w-[655px] lg:w-[755px] xl:mx-0 2xl:w-[855px]">
	<a data-sveltekit-prefetch href="/blog/{url}" class="block">
		<img src="/images/{image}.png" alt={image} class="w-full" />
	</a>
	<a data-sveltekit-prefetch href="/blog/{url}" class="block">
		<h2
			class="jakarta text-2xl !leading-normal text-white hover:text-hover md:text-3xl lg:text-4xl"
		>
			{title}
		</h2>
	</a>
	<p class="ibm !leading-normal text-secondary md:text-lg lg:text-xl">
		{description}
	</p>
	<p class="ibm text-sm text-secondary/50 md:text-base lg:text-lg">{date}</p>
</div>
