<script lang="ts">
	import { work } from '$lib/store';
</script>

<div class="mx-auto mt-10 w-3/4 space-y-10 md:mt-20 lg:w-2/3 xl:w-7/12 2xl:w-1/2">
	<h4
		class="ibm mb-4 text-xl text-secondary underline decoration-[#9A6FF1] decoration-dashed decoration-4 underline-offset-4 md:text-2xl lg:text-3xl"
	>
		secondl1ght
	</h4>
	<span class="ibm text-secondary"> PGP: DE22 DF78 1024 0A80 75A3 56DA 3E7C 74A3 5CBC 05C5 </span>
	<div class="jakarta text-4xl text-white sm:text-5xl md:text-7xl lg:text-8xl">
		<h1 class="leading-tight">
			privacy. freedom. community. ideas. human spirit. innovation. kindness.
		</h1>
	</div>
	<h3 class="ibm w-full text-2xl !leading-normal text-secondary md:text-3xl lg:w-10/12 lg:text-4xl">
		a software engineer’s mission to make the world a better place through bitcoin.
	</h3>
	<div bind:this={$work} id="work" />
</div>
