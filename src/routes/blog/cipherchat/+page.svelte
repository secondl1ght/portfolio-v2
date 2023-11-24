<script lang="ts">
	import { BlogPost } from '$lib/comp';
	import '../blogpost.css';
</script>

<svelte:head>
	<title>secondl1ght - blog</title>
	<meta name="description" content="Hello World, this is Cipherchat! 🐈‍⬛" />
	<meta property="og:image" content="https://www.secondl1ght.site/images/cipherchat-blog.png" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="secondl1ght - blog" />
	<meta property="twitter:description" content="Hello World, this is Cipherchat! 🐈‍⬛" />
	<meta
		property="twitter:image"
		content="https://www.secondl1ght.site/images/cipherchat-blog.png"
	/>
</svelte:head>

<BlogPost
	title="Hello World, this is Cipherchat! 🐈‍⬛"
	image="cipherchat-blog"
	description="Today I am excited to open source and launch a new bitcoin lightning network application to the world called Cipherchat! It is an encrypted messaging app that leverages the power of lightning nodes to communicate privately."
	date="Nov 12, 2023"
>
	<div
		id="blog-content"
		class="ibm mx-auto w-full space-y-5 text-lg !leading-normal text-secondary md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2"
	>
		<h2>Intro</h2>

		<p>
			I have been building this new project in my spare time over the past few months as a way to
			become a better developer and to learn more about how nodes operate under the hood.
		</p>

		<p>
			This blog post will give a bit of background on the origin of the project, highlight some key
			features, and explain how it works at a high level. If you would like to skip all of that and
			check out the app right away, you can just head over to <a
				target="_blank"
				rel="noreferrer"
				href="https://cipherchat.app">cipherchat.app</a
			> to get started!
		</p>

		<h2>Background</h2>

		<p>
			Cipherchat builds on a number of technologies including the node module <a
				target="_blank"
				rel="noreferrer"
				href="https://github.com/lightninglabs/lnc-web">lnc-web</a
			>. This package makes it possible for web developers to build applications that interact with
			a user's lightning node securely and remotely. For those interested you can look into
			<strong>Lightning Node Connect</strong> to learn more details.
		</p>

		<p>
			When I discovered this I knew I had to build something awesome using it. The question was,
			what to build? So I reached out to <strong>Leo</strong> the
			<strong>Technical Content Lead</strong>
			at <strong>Lightning Labs</strong> to ask him what kinds of new lightning apps he would like to
			see built. He gave me a few suggestions and the one that stood out to me was; create an easily
			accessible and private lightning messenger that can run on any device, from anywhere in the world.
		</p>

		<p>
			So Cipherchat is exactly that. It is a web app which means the only requirement to use it is a
			browser. It can be installed on any device and will function with native features. A user
			simply needs to connect their node via a pairing phrase and they can start chatting privately
			in seconds.
		</p>

		<h2>Keysend App Recap</h2>

		<p>
			The idea of using keysend messages to create chat experiences over lightning is not a new one.
			There are other existing and previous implementations of this feature. Some examples are <a
				target="_blank"
				rel="noreferrer"
				href="https://sphinx.chat/">Sphinx</a
			>, <a target="_blank" rel="noreferrer" href="https://thunderhub.io/">ThunderHub</a>, and
			<a target="_blank" rel="noreferrer" href="https://github.com/joostjager/whatsat">Whatsat</a>.
			The first two have a product scope that is much larger than only sending and receiving
			messages, and the last one is a proof-of-concept that was created in the early days of
			lightning.
		</p>

		<p>
			While <strong>Sphinx</strong> covers decentralized social media and
			<strong>ThunderHub</strong>
			is an entire lightning node manager, I wanted to keep the focus for this new lightning messenger
			app very narrow. The goal was to create a great user experience for private chatting between nodes
			on the network. Similar to something like <strong>Signal</strong>, keeping in mind some of the
			constraints of the protocol itself.
		</p>

		<p>
			When showing off a <a
				target="_blank"
				rel="noreferrer"
				href="https://youtu.be/mx5LI4vPnvo?t=1h17m33s">keysend demo</a
			>
			during the first <strong>Shock the Web</strong> hackathon presented by
			<strong>Bolt.Fun</strong>, <strong>Bumi</strong> from <strong>Alby</strong> said that:
		</p>

		<blockquote>
			<p>
				"You can even imagine if you allow loading the messages from the users wallet maybe in the
				future, that would be something like a web-based, lightning-based, decentralized chat."
			</p>
		</blockquote>

		<p>And from the README file of <strong>Whatsat</strong>:</p>

		<blockquote>
			<p>
				"Whatsat is a client application for lnd that demonstrates how the Lightning Network can be
				used as an end-to-end encrypted, onion-routed, censorship-resistant, peer-to-peer chat
				messages protocol."
			</p>
		</blockquote>

		<p>
			So in that light - I hope that the bitcoin community finds this new offering in the lightning
			app ecosystem a fun and useful tool that lives up to to some of the expectations set when
			keysend messages were first being discussed.
		</p>

		<h2>Interoperability</h2>

		<p>
			One of the coolest parts of open protocols is interoperability. When selecting the custom
			record and verification scheme for message transfer, I used established keys in the <a
				target="_blank"
				rel="noreferrer"
				href="https://github.com/satoshisstream/satoshis.stream/blob/main/TLV_registry.md#tlv-record-registry"
				>TLV Registry</a
			>. This means that if other lightning apps use the same specification, conversations can be
			had between nodes regardless of which chat client they are using.
		</p>

		<p>
			Keysend messages are supported by many apps. However, the nuance is <strong>if</strong> and
			<strong>how</strong>
			those apps try to verify the information such as the <strong>sender</strong>,
			<strong>intended recipient</strong>, <strong>timestamp</strong> etc. A published table showing
			which records and how they are used in Cipherchat can be found
			<a
				target="_blank"
				rel="noreferrer"
				href="https://cipherchat.app/faq#is-cipherchat-inter-operable-with-other-lightning-messaging-apps"
				>here</a
			>.
		</p>

		<h2>Privacy & Self-hosting</h2>

		<p>
			A note on privacy: Just like the lightning network itself, Cipherchat can be used privately.
			But it's important to understand that <strong>anytime</strong> you use the internet your IP address
			is exposed. So you should always take steps to protect that information and only reveal what you
			choose, to who you choose, when you choose to do it.
		</p>

		<p>
			Users also have the option to self-host the entire tech stack. This is possible because
			everything is <strong>free and open source</strong> all the way down. For more information and
			to find answers to many questions there is a
			<a target="_blank" rel="noreferrer" href="https://cipherchat.app/faq">FAQ</a>
			available and be sure to check out the
			<a target="_blank" rel="noreferrer" href="https://cipherchat.app/privacy">Privacy</a> page.
		</p>

		<h2>Thanks</h2>

		<p>
			I'd like to thank everyone in the <strong>#dev-help</strong> channel on the
			<strong>LND Developer Community</strong>
			Slack for answering questions I had while working on this project. Especially
			<strong>alexbosworth</strong>
			who is always in there helping people build. Also thanks to the contributors &amp; maintainers
			of the <strong>lnc-web</strong> package, and to <strong>Leo</strong> for helping with beta testing.
		</p>

		<h2>Wrap-up</h2>

		<p>
			Stay tuned for easy one-click installs to self-host the app on all the popular plug-and-play
			node app stores like <strong>Umbrel</strong>, <strong>myNode</strong> and
			<strong>Start9</strong>. Social accounts will be made for following updates and getting
			support if needed.
		</p>

		<p>Now let's go and make keysend messages popular again! ⚡</p>
	</div>
</BlogPost>
