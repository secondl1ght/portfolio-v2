<script>
	import '../../../blogpost.css';
	import { BlogPost } from '$comp';
</script>

<svelte:head>
	<title>secondl1ght - blog</title>
	<meta name="description" content="Feature highlight AMBOSS SPACE" />
	<meta property="og:image" content="https://www.secondl1ght.site/images/amboss.png" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="secondl1ght - blog" />
	<meta property="twitter:description" content="Feature highlight AMBOSS SPACE" />
	<meta property="twitter:image" content="https://www.secondl1ght.site/images/amboss.png" />
</svelte:head>

<BlogPost
	title="Feature highlight AMBOSS SPACE"
	image="amboss"
	description="Recently I have taken a bit of a deep dive into the features offered by Amboss Space. First off, I want to have full disclosure that I will be joining the team at Amboss next month as a Frontend Engineer, which I am super excited about!"
	date="Jan 13, 2023"
>
	<div
		id="blog-content"
		class="ibm mx-auto w-full space-y-5 text-lg !leading-normal text-secondary md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2"
	>
		<p>
			I started using their product and services more lately in order to research the company. What
			I discovered is that they offer <strong>WAY</strong> more than I originally had seen. So I thought
			I would put together a list showcasing some of the main features so that others can also discover
			their awesome feature-set.
		</p>

		<p>
			The <strong>TLDR</strong> is: if you are a lightning node operator, using Amboss is guaranteed
			to give you an edge.
		</p>

		<p>
			They have a wide variety of tools to help understand the complexity of the lightning network
			and make running a successful node easier. So without further ado, here is my feature
			highlight of some very cool <a href="https://amboss.space" target="_blank" rel="noreferrer"
				>Amboss</a
			> features.
		</p>

		<h2>Lightning Network Explorer</h2>

		<p>
			<a href="/images/blog/amboss-space/0.png"
				><img src="/images/blog/amboss-space/0.png" alt="explorer" loading="lazy" /></a
			>
		</p>

		<p>
			Just like the bitcoin network, the lightning network feels like magic. But to really get a
			sense of how cool it is, seeing it visually is important. The lightning network explorer on
			Amboss <strong>beautifully</strong>
			accomplishes this challenge. You have to visit the website yourself and explore to really appreciate
			it. Here is a popular node page to get you started:
			<a
				target="_blank"
				rel="noreferrer"
				href="https://amboss.space/node/02f1a8c87607f415c8f22c00593002775941dea48869ce23096af27b0cfdcc0b69"
				>Kraken 🐙⚡</a
			>. The explorer provides deep insights into the network so that you can make informed
			decisions about interacting with it. You can find nodes by entering either a pubkey or alias
			into the search and you can view top nodes and aggregated network stats on the main page. When
			viewing a node you can hop between the network by navigating to its channel connections.
		</p>

		<h2>Channel Liquidity Marketplace</h2>

		<p>
			<a href="/images/blog/amboss-space/1.png"
				><img src="/images/blog/amboss-space/1.png" alt="magma" loading="lazy" /></a
			>
		</p>

		<p>
			One of the more difficult parts of running a lightning node is creating and maintaining
			inbound liquidity so that you can receive sats. Amboss solves this problem by offering a <strong
				>P2P</strong
			>
			lightning marketplace called
			<a target="_blank" rel="noreferrer" href="https://amboss.space/magma">Magma</a>, where users
			are matched to buy and sell channels. Buyers of channels can easily <strong>connect</strong>
			&amp; setup sizeable amounts of inbound liquidity within minutes. Sellers can put their sats to
			work and
			<strong>earn</strong>
			a truly low-risk yield on their investment. They do this by selling liquidity in the form of opening
			channels to other nodes at a agreed upon rate. Sellers also get the added benefit of additional
			routing fees for payments being sent through their newly added channel. As of writing this article
			the average APR is <strong>3.07%</strong>. The process on either side of the trade is very
			simple, which is a huge win for node operators.
		</p>

		<h2>Enterprise Data Analytics</h2>

		<p>
			<a href="/images/blog/amboss-space/2.png"
				><img src="/images/blog/amboss-space/2.png" alt="stats" loading="lazy" /></a
			>
		</p>

		<p>
			The <a target="_blank" rel="noreferrer" href="https://amboss.space/stats">stats</a>
			section of Amboss provides even deeper historical analysis into individual node information and
			the network as a whole using multiple data sources. When operating a node at a professional level
			for profit, this data can be
			<strong>vital</strong> to the success of your business in a highly competitive landscape. With
			the stats dashboard you can create custom charts by entering node pubkeys. This advanced functionality
			gives you the ability to compare incoming fee rates to identity lightning native arbitrage opportunities
			and other actionable data points.
		</p>

		<h2>Monitoring and Recovery Services</h2>

		<h3>Monitoring</h3>

		<p>
			<a href="/images/blog/amboss-space/3.png"
				><img src="/images/blog/amboss-space/3.png" alt="monitor" loading="lazy" /></a
			>
		</p>

		<p>
			There are many important events that can happen to your node and you will want to be notified.
			Things like your node going offline, channels being opened or closed, Magma marketplace
			events, and more. Amboss has 3 methods for <strong>instantly</strong> receiving these notifications
			so that you can take action if necessary. You can setup notifications to be sent via Telegram,
			Email, or Webhook. I personally have setup the Telegram notifications and find it very useful to
			receive these updates either at my laptop or on mobile.
		</p>

		<h3>Recovery</h3>

		<p>
			<a href="/images/blog/amboss-space/4.png"
				><img src="/images/blog/amboss-space/4.png" alt="backup" loading="lazy" /></a
			>
		</p>

		<p>
			You need 2 pieces of information to fully recover a lightning node; your <strong
				>wallet seed phrase</strong
			>
			and a <strong>static channel backup</strong>. Amboss is
			<strong>non-custodial</strong>, so protecting your seed phrase is up to you. But the second
			part, which can be more difficult because it needs to be consistently updated, is where Amboss
			can make a <strong>big</strong>
			difference. They offer automated channel backups via
			<a target="_blank" rel="noreferrer" href="https://thunderhub.io/">Thunderhub</a>
			whenever your node state changes. The backup file is
			<strong>fully encrypted</strong>
			by your node's private key so <strong>only you</strong> have access to it. This is an extremely
			useful service that helps take the burden of this cumbersome task off the user.
		</p>

		<h2>API and Widgets</h2>

		<h3>API</h3>

		<p>
			<a href="/images/blog/amboss-space/5.png"
				><img src="/images/blog/amboss-space/5.png" alt="api" loading="lazy" /></a
			>
		</p>

		<p>
			If you thought Amboss was going to keep all of this data to themselves you thought wrong. They
			have made available a robust API that is free to use for <strong>non-commercial</strong> use.
			For commercial use you can reach out to the team for more details on how to use the API at
			<a href="mailto:info@amboss.tech">info@amboss.tech</a>. Documentation can be found
			<a target="_blank" rel="noreferrer" href="https://docs.amboss.space/api/introduction">here</a
			>. Anybody can have access to rich lightning network data and start building new apps or
			integrate into their existing applications.
		</p>

		<h3>Widgets</h3>

		<p>
			<a href="/images/blog/amboss-space/6.png"
				><img src="/images/blog/amboss-space/6.png" alt="widget" loading="lazy" /></a
			>
		</p>

		<p>
			If you want to embed lightning network statistics into your own website without fully
			integrating the API, they have a one-liner code option available in the form of an <strong
				>iframe</strong
			>
			widget. There are some style and unit options you can pass and you can either view a specific node
			details or total network stats. Documentation can be found
			<a target="_blank" rel="noreferrer" href="https://docs.amboss.space/space/widgets">here</a>.
			An example is shown below:
		</p>

		<div>
			<pre>
<code>
&lt;iframe src="https://amboss.space/embed/networkStats?theme=light&unit=EUR&noBackground=true" width="100%" height="40px" style="overflow: hidden" scrolling="no" /&gt;
</code>
</pre>
		</div>

		<h2>Personalized Node Profiles</h2>

		<p>
			<a href="/images/blog/amboss-space/7.png"
				><img src="/images/blog/amboss-space/7.png" alt="nodes" loading="lazy" /></a
			>
		</p>

		<p>
			Every node visible on the network gets a page on Amboss to view it's connection details and
			other metrics. But users can claim a node by proving they control the keys. Once a node is
			claimed you can add additional details to personalize your profile page. Not only does this
			make it easy for other users to contact you if needed, but it unlocks a fun social aspect to
			running a node. You can verify your node with other social platforms, add a bio, and even earn
			badges. Though the main use-case of lightning is as a payment processing network, it has
			always had an excitement and enthusiastic spirit around it. Features like this make running a
			node fun and is just another reason why trad-fi can't compete. My personal favorite node
			personality is <a
				target="_blank"
				rel="noreferrer"
				href="https://amboss.space/node/0298f6074a454a1f5345cb2a7c6f9fce206cd0bf675d177cdbf0ca7508dd28852f"
				>BCash_Is_Trash</a
			>.
		</p>

		<h2>Node Communities</h2>

		<p>
			<a href="/images/blog/amboss-space/8.png"
				><img src="/images/blog/amboss-space/8.png" alt="community" loading="lazy" /></a
			>
		</p>

		<p>
			Adding on to the previous section's social features you can also create and join lightning
			network node <a target="_blank" rel="noreferrer" href="https://amboss.space/community"
				>communities</a
			>. There are communities all around the world joining the decentralized financial revolution.
			Currently there are <strong>93</strong> listed on Amboss. The feature-set for these communities
			is currently being built out, but I have heard during BitDevs talks that there are some great new
			things in the works.
		</p>

		<h2>Keysend Billboards</h2>

		<p>
			<a href="/images/blog/amboss-space/9.png"
				><img src="/images/blog/amboss-space/9.png" alt="keysend" loading="lazy" /></a
			>
		</p>

		<p>
			On the homepage and on each node's page there is a keysend billboard. Anybody can post a
			message here which adds another social dynamic, but it can also display important information
			to other users. Further to this idea, users can subscribe to announcements from other nodes on
			the network who can broadcast a message to their subscribers. Messaging on the lightning
			network is possible and Amboss has utilized this feature and created some interesting
			use-cases.
		</p>

		<h2>Prime</h2>

		<p>
			<a href="/images/blog/amboss-space/10.png"
				><img src="/images/blog/amboss-space/10.png" alt="prime" loading="lazy" /></a
			>
		</p>

		<p>
			The majority of Amboss services are available completely free, but they do have a <strong
				>Prime</strong
			>
			membership which currently costs
			<strong>$8/month</strong> and gives you access to even more features. If you find all of the free
			features are more than what you need, you can still subscribe to support the projects development.
			I subscribed right away solely because I could tell how much work went into making a project of
			this caliber and I think it benefits the bitcoin ecosystem greatly.
		</p>

		<hr />

		<p>
			That is the end of my feature highlight for Amboss Space, and I didn't even cover everything!
			You will have to check it out for yourself to see it all. With all of these features packed
			in, it's hard to choose a favorite. But I would have to say the best part is that the app is
			dark mode by default! XD
		</p>

		<p>Here are some links for Amboss:</p>

		<ul>
			<li>
				<a target="_blank" rel="noreferrer" href="https://twitter.com/ambosstech">Twitter</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://t.me/GetAmboss">Telegram</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://docs.amboss.space/space/faqs">FAQ</a>
			</li>
		</ul>

		<p>
			I know the team behind Amboss cares about it being a community based project. So you should
			reach out to them if you have any suggestions, ideas, or feedback on what you would like to
			see in the application!
		</p>

		<p>
			Thanks for reading and happy stacking, here is my node information if you would like to
			connect with me: <a
				target="_blank"
				rel="noreferrer"
				href="https://amboss.space/node/021ef14c694456a3aae3471a2e8830da21a8130ccbead6794e3530430e2e074d63"
				>secondl1ght</a
			>. 🌩️
		</p>
	</div>
</BlogPost>
