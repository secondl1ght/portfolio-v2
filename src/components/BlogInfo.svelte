<script lang="ts">
	// @ts-nocheck
	import { page } from '$app/stores';

	let form: HTMLFormElement;
	let formComplete = false;
	$: subscribe = !$page.url.pathname.includes('unsubscribe');
	const handleSubmit = () => {
		let formData = new FormData(form);
		fetch(subscribe ? '/blog' : '/blog/unsubscribe', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString()
		})
			.then(() => {
				formComplete = true;
				console.log('Form successfully submitted');
			})
			.catch((error) => alert(error));
	};
</script>

<div class="mx-auto w-3/4 space-y-5 md:w-[350px] xl:mx-0">
	<img src="/images/avatar.png" class="h-32 w-32 rounded-full bg-hover" alt="avatar" />
	<div>
		<p class="jakarta text-sm text-white md:text-base lg:text-lg">secondl1ght</p>
		<div class="mt-4 flex items-center space-x-5">
			<a href="https://github.com/secondl1ght" target="_blank" rel="noreferrer"
				><img src="/icons/github.svg" class="w-8" alt="github" />
			</a>
			<a href="https://twitter.com/secondl1ght" target="_blank" rel="noreferrer"
				><img src="/icons/twitter-white.svg" class="w-8" alt="twitter" />
			</a>
			<a href="https://dev.to/secondl1ght" target="_blank" rel="noreferrer"
				><img src="/icons/dev.svg" class="w-8" alt="dev" />
			</a>
		</div>
	</div>
	<p class="ibm !leading-normal text-secondary md:text-lg lg:text-xl">
		A software engineer’s mission to make the world a better place through bitcoin.
	</p>
	{#if !formComplete}
		<form
			name={subscribe ? 'subscribe' : 'unsubscribe'}
			method="POST"
			netlify
			netlify-honeypot="bot-field"
			on:submit|preventDefault={handleSubmit}
			bind:this={form}
			class="space-y-3"
		>
			<input type="hidden" name="form-name" value={subscribe ? 'subscribe' : 'unsubscribe'} />
			<input name="bot-field" class="hidden" />
			<input
				type="email"
				required
				name="email"
				class="lg:h-18 ibm h-12 w-full border border-[#2F3143] bg-transparent px-8 text-secondary placeholder:text-secondary md:h-16 md:text-lg lg:text-xl"
				placeholder="Email"
			/>
			<button
				type="submit"
				class="ibm lg:h-18 relative flex h-12 w-full items-center justify-center bg-gradient-to-r from-[#9068FE] to-[#FEB068] text-white md:h-16 md:text-lg lg:text-xl"
			>
				<span
					class="ibm absolute left-0 top-0 flex h-full w-full items-center justify-center bg-gradient-to-l from-[#9068FE] to-[#FEB068] text-white opacity-0 transition-opacity duration-500 hover:opacity-100 md:text-lg lg:text-xl"
					>{subscribe ? 'Subscribe' : 'Unsubscribe'}</span
				>
				{subscribe ? 'Subscribe' : 'Unsubscribe'}
			</button>
		</form>
	{:else}
		<p class="ibm !leading-normal text-secondary md:text-lg lg:text-xl">
			{subscribe ? 'Thanks for subscribing!' : 'You have been unsubscribed!'}
		</p>
	{/if}
</div>
