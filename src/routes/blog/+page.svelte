<script lang="ts">
	import { BlogCard, BlogInfo, Footer } from '$lib/comp';

	const posts = [
		{
			image: 'cipherchat-blog',
			title: 'Hello World, this is Cipherchat! 🐈‍⬛',
			description:
				'Today I am excited to open source and launch a new bitcoin lightning network application to the world called Cipherchat! It is an encrypted messaging app that leverages the power of lightning nodes to communicate privately.',
			date: 'Nov 12, 2023',
			url: 'cipherchat'
		},
		{
			image: 'amboss',
			title: 'Feature highlight AMBOSS SPACE',
			description:
				'Recently I have taken a bit of a deep dive into the features offered by Amboss Space. First off, I want to have full disclosure that I will be joining the team at Amboss next month as a Frontend Engineer, which I am super excited about!',
			date: 'Jan 13, 2023',
			url: 'amboss-space'
		},
		{
			image: 'lock',
			title: 'Privacy tools for the information age 🔐',
			description:
				'When I was first learning how to code I created a website called Privacy Tech Resource which was a curated list of privacy tools that I have found useful and recommend others to use. I have since taken down that site, but thought I would write a blog post containing the same information and some updated resources too.',
			date: 'Nov 23, 2022',
			url: 'privacy-tools'
		},
		{
			image: 'nodes',
			title: 'The state of bitcoin (plug and play) nodes 🌐',
			description: 'Everyone can run a bitcoin full node, and you should too!',
			date: 'Aug 23, 2022',
			url: 'state-of-nodes'
		},
		{
			image: 'tips',
			title: 'How to accept bitcoin lightning tips on your website ⚡',
			description:
				'Have you ever wondered how to accept bitcoin tips on your website? Well this is the guide for you!',
			date: 'Aug 5, 2022',
			url: 'accept-lightning-tips'
		},
		{
			image: 'code',
			title: 'How to Teach Yourself to Code and Start a New Career (or at least how I did it)',
			description:
				'Over the past 9 or so months I have taught myself how to code and started a new career as a Web Developer. I thought I would make a blog post about my self-taught journey so that others may find some inspiration and/or useful information from it. So here it is - my tips and advice to those considering or starting their own coding journey!',
			date: 'Feb 2, 2022',
			url: 'how-to-code'
		}
	];
</script>

<svelte:head>
	<title>secondl1ght - blog</title>
	<meta name="description" content="software engineer blog" />
	<meta property="og:image" content="https://www.secondl1ght.site/images/og.jpg" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="secondl1ght - blog" />
	<meta property="twitter:description" content="software engineer blog" />
	<meta property="twitter:image" content="https://www.secondl1ght.site/images/og.jpg" />
</svelte:head>

<div class="my-10 justify-center space-y-32 md:my-20 xl:flex xl:space-x-16 xl:space-y-0">
	<BlogInfo />
	<div class="space-y-32">
		{#each posts as post}
			<BlogCard
				image={post.image}
				title={post.title}
				description={post.description}
				date={post.date}
				url={post.url}
			/>
		{/each}
	</div>
</div>
<Footer />
