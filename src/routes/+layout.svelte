<script lang="ts">
	import { Header } from '$lib/comp';
	import '../app.css';

	let fadeIn = false;
	setTimeout(() => (fadeIn = true), 0);
</script>

<div class="{fadeIn ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[2100ms]">
	<Header />
	<slot />
</div>
