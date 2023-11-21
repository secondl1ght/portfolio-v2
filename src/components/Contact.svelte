<script>
	import { support } from '../lib/store';
	import ContactCard from './ContactCard.svelte';

	const contactMethods = [
		{
			method: 'email',
			icon: '/icons/email.svg',
			url: 'mailto:secondl1ght@protonmail.com'
		},
		{
			method: 'telegram',
			icon: '/icons/telegram.svg',
			url: 'https://t.me/secondl1ght'
		},
		{
			method: 'matrix',
			icon: '/icons/matrix.svg',
			url: 'https://matrix.to/#/@secondl1ght:matrix.org'
		},
		{
			method: 'twitter',
			icon: '/icons/twitter.svg',
			url: 'https://www.twitter.com/secondl1ght'
		}
	];
</script>

<div class="relative mx-auto mt-[8.75rem] w-3/4 space-y-10 lg:w-2/3 xl:w-7/12 2xl:w-1/2">
	<div class="absolute -left-6 -top-2.5 h-16 w-2 bg-[#956CF7] md:-left-10 md:-top-1 lg:top-1" />
	<h2 class="jakarta !mb-16 text-4xl text-white md:text-5xl lg:text-6xl">contact</h2>
	<p class="ibm w-full !leading-normal text-secondary md:w-3/4 md:text-lg lg:text-xl">
		i am always open to chatting with interesting people who share my values and work on projects
		that align with our mission. here are the best ways to get a hold of me:
	</p>
	<div class="grid gap-5 sm:grid-cols-2 sm:gap-10 3xl:grid-cols-4">
		{#each contactMethods as contact}
			<ContactCard method={contact.method} icon={contact.icon} url={contact.url} />
		{/each}
	</div>
	<div bind:this={$support} id="support" />
</div>
