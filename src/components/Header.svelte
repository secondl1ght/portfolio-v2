<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { background, contact, contributions, support, work } from '$lib/store';
	import { scroll } from '$lib/utils';

	let showMenu = false;

	const handleButtonClick = (section: string, store: HTMLDivElement) => {
		showMenu = false;
		if ($page.url.pathname.length > 1 || $page.error) {
			goto(`/#${section}`);
		} else {
			scroll(store);
		}
	};
</script>

<!-- desktop header -->
<header
	class="jakarta sticky top-0 z-10 hidden h-20 w-full items-center justify-center bg-primary/90 lg:flex"
>
	<nav class="space-x-16 text-xl text-white lg:text-2xl">
		<button class="hover:text-hover" on:click={() => handleButtonClick('work', $work)}>work</button>
		<button
			class="hover:text-hover"
			on:click={() => handleButtonClick('contributions', $contributions)}>contributions</button
		>
		<button class="hover:text-hover" on:click={() => handleButtonClick('background', $background)}
			>background</button
		>
		<button class="hover:text-hover" on:click={() => handleButtonClick('contact', $contact)}
			>contact</button
		>
		<button class="hover:text-hover" on:click={() => handleButtonClick('support', $support)}
			>support</button
		>
		<a
			href="https://github.com/secondl1ght"
			target="_blank"
			rel="noreferrer"
			class="hover:text-hover">github</a
		>
	</nav>
</header>

<!-- mobile header -->
<header class="jakarta sticky top-0 z-10 block h-20 w-full bg-primary/90 lg:hidden">
	<button on:click={() => (showMenu = !showMenu)} on:keydown={() => (showMenu = !showMenu)}>
		<img
			src={!showMenu ? '/icons/mobile-open.svg' : '/icons/mobile-close.svg'}
			alt="toggle-menu"
			class="absolute right-5 top-4 z-20"
		/>
	</button>
	<nav
		class="absolute top-0 flex h-[100dvh] w-full justify-end overflow-y-auto bg-primary text-3xl text-white transition-all ease-in-out {showMenu
			? 'left-0'
			: 'left-[-100%]'}"
	>
		<div class="mr-10 mt-28 space-y-16">
			<button class="block hover:text-hover" on:click={() => handleButtonClick('work', $work)}
				>work</button
			>
			<button
				class="block hover:text-hover"
				on:click={() => handleButtonClick('contributions', $contributions)}>contributions</button
			>
			<button
				class="block hover:text-hover"
				on:click={() => handleButtonClick('background', $background)}>background</button
			>
			<button class="block hover:text-hover" on:click={() => handleButtonClick('contact', $contact)}
				>contact</button
			>
			<button class="block hover:text-hover" on:click={() => handleButtonClick('support', $support)}
				>support</button
			>

			<a
				href="https://github.com/secondl1ght"
				target="_blank"
				rel="noreferrer"
				class="block pb-16 hover:text-hover"
				on:click={() => (showMenu = false)}>github</a
			>
		</div>
	</nav>
</header>
