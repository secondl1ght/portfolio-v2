<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Background, Contact, Contributions, Footer, Hero, Support } from '$lib/comp';
	import { tick } from 'svelte';

	const clearHash = async () => {
		await tick();
		goto('/', { replaceState: true, noScroll: true, keepFocus: true });
	};

	if ($page.url.hash) {
		setTimeout(() => clearHash(), 210);
	}
</script>

<svelte:head>
	<title>secondl1ght - portfolio</title>
	<meta name="description" content="web developer portfolio" />
	<meta property="og:image" content="https://www.secondl1ght.site/images/og.jpg" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="secondl1ght - portfolio" />
	<meta property="twitter:description" content="web developer portfolio" />
	<meta property="twitter:image" content="https://www.secondl1ght.site/images/og.jpg" />
</svelte:head>

<!-- <Banner /> -->
<Hero />
<Contributions />
<Background />
<Contact />
<Support />
<Footer />
