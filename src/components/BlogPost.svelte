<script>
	import { Footer } from '$comp';

	export let title;
	export let image;
	export let description;
	export let date;
</script>

<div class="mx-auto my-10 w-3/4 max-w-7xl md:my-20">
	<p class="ibm mb-8 !leading-normal text-secondary">
		<a href="/blog" class="hover:text-hover">Blog</a>
		<span class="text-sm text-secondary/50">/ {title}</span>
	</p>
	<img src="/images/{image}.webp" alt={image} class="w-full" />
	<h1
		class="jakarta mx-auto mt-5 w-full text-center text-3xl !leading-normal text-white md:mt-10 md:w-10/12 md:text-5xl lg:text-6xl"
	>
		{title}
	</h1>
	<p
		class="ibm mx-auto mb-6 mt-6 w-full text-center text-xl !leading-normal text-secondary md:mt-8 md:w-2/3"
	>
		{description}
	</p>
	<div class="mb-10 flex items-center justify-center space-x-5">
		<img src="/images/avatar.png" class="h-20 w-20 rounded-full bg-hover" alt="avatar" />
		<div>
			<p class="jakarta text-white">secondl1ght</p>
			<p class="ibm text-secondary/50">
				{date}
			</p>
		</div>
	</div>
	<slot />
</div>

<Footer />
