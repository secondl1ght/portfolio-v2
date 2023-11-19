<script>
	import { BlogPost } from '$comp';
	import '../../../blogpost.css';
</script>

<svelte:head>
	<title>secondl1ght - blog</title>
	<meta name="description" content="Privacy tools for the information age 🔐" />
	<meta property="og:image" content="https://www.secondl1ght.site/images/lock.png" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="secondl1ght - blog" />
	<meta property="twitter:description" content="Privacy tools for the information age 🔐" />
	<meta property="twitter:image" content="https://www.secondl1ght.site/images/lock.png" />
</svelte:head>

<BlogPost
	title="Privacy tools for the information age 🔐"
	image="lock"
	description="When I was first learning how to code I created a website called Privacy Tech Resource which was a curated list of privacy tools that I have found useful and recommend others to use. I have since taken down that site, but thought I would write a blog post containing the same information and some updated resources too."
	date="Nov 23, 2022"
>
	<div
		id="blog-content"
		class="ibm mx-auto w-full space-y-5 text-lg !leading-normal text-secondary md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2"
	>
		<p>
			It's no secret that privacy is at an all time low in human history. Many people would like to
			reduce their online exposure but are unsure of how to do so or think it is too much work or
			impossible altogether.
		</p>

		<p>
			The good news is that there are many tools to help protect yourself online and they are no
			harder to use than the same applications already used by regular people every day.
		</p>

		<p>
			Certain companies including Facebook and Google I would recommend avoiding entirely even if
			using the following privacy tools, but I understand that this takes some time and effort and
			not everyone is ready to begin the process.
		</p>

		<p>
			Each tool is additive so even just using one or two will be a great improvement if you are
			starting from zero. You don't need to start using every tool at once, although it is fun and
			exciting reclaiming your privacy rights and I encourage everyone to do this!
		</p>

		<p>
			One final note is that this is not nearly an exhaustive list of all the privacy tools out
			there. There are many great privacy projects and 3 good questions to ask when you are
			evaluating the validity of a project are:
		</p>

		<ol>
			<li>Is it open source?</li>
			<li>What is it's revenue modal?</li>
			<li>Does it have a solid user base and community?</li>
		</ol>

		<p>
			There is a fantastic website you can check out with a more complete list and additional
			information about online privacy called <a
				target="_blank"
				rel="noreferrer"
				href="https://www.privacyguides.org/">Privacy Guides</a
			>.
		</p>

		<p>Now here are the tools:</p>

		<h2>Web Browsers 🌐</h2>

		<p>Browse the web safely and privately</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://brave.com/">Brave</a>
		</h3>

		<p>
			This browser is feature rich for advanced users but comes with privacy by default for
			non-technical users as well. They have integrated optional Tor and IPFS support that is as
			easy as a click of a button.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://www.torproject.org/">Tor</a>
		</h3>

		<p>
			Tor is likely the most private way to browse the internet. Not only will you be protected from
			ads and tracking but your IP address will also be shielded from websites you visit, giving you
			greater anonymity. In addition to that, even your ISP will not see your network traffic
			because it is routed through multiple nodes before reaching the destination. Tor is a
			non-profit and is used by many people worldwide who's lives depend on privacy. If you enjoy
			the service or just want to support human rights, please consider donating to the Tor Project.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://www.bromite.org/">Bromite</a>
		</h3>

		<p>Bromite is a good mobile-only option and available on F-Droid.</p>

		<h2>Browser Extensions 🔌</h2>

		<p>Harden your browser even further</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://clearurls.xyz/">ClearURLs</a>
		</h3>

		<p>
			Websites can add extra and unnecessary information to URLs in order to track you. This
			extension clears all of that metadata, giving you only the URL you actually require to surf
			the web.
		</p>

		<h3>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://github.com/Cookie-AutoDelete/Cookie-AutoDelete">Cookie AutoDelete</a
			>
		</h3>

		<p>
			We all hate cookies that follow you around the internet right? Well if you don't want to
			disable them entirely in your browser, then you can add this extension and set the parameters
			for when you would like them to be removed.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://decentraleyes.org/">Decentraleyes</a>
		</h3>

		<p>Protects you against tracking through "free", centralized, content delivery.</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://www.eff.org/https-everywhere"
				>HTTPS Everywhere</a
			>
		</h3>

		<p>
			Brought to you by the good folks at the <a
				target="_blank"
				rel="noreferrer"
				href="https://eff.org/">Electronic Frontier Foundation</a
			>, HTTPS Everywhere is essential. Some browsers have this available as a setting now but the
			extension is still a good add-on. There is really no excuse for a website to not have a
			certificate these days seeing as they are available for free from
			<a target="_blank" rel="noreferrer" href="https://letsencrypt.org/">Let's Encrypt!</a>. If you
			visit a website using HTTP instead of HTTPS, that means any data you enter is wide open for
			the world to see, including payment information. This extension will force all websites to use
			HTTPS.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://github.com/SimonBrazell/privacy-redirect"
				>Privacy Redirect</a
			>
		</h3>

		<p>
			Privacy Redirect is an awesome extension that will redirect URLs from popular sites like
			Twitter, Reddit and YouTube to privacy respecting frontends. This way you still get to view
			the content you want, but can do so in a much better way.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://ublockorigin.com/">uBlock Origin</a>
		</h3>

		<p>
			The web browsers I recommend will come with ad and tracking blocking by default. However, I
			like to use uBlock on top of these default settings for anything that may slip through the
			initial filters.
		</p>

		<h2>Messaging &amp; Video Calls 💬</h2>

		<p>Encrypted communication &amp; private connections</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://www.signal.org/">Signal</a>
		</h3>

		<p>
			Did you know that all of your text messages are sent un-encrypted? That is unacceptable.
			Signal provides an easy to use mobile or desktop app. When you message other Signal users your
			communication will be end-to-end encrypted, the way it should be.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://matrix.org/">Matrix</a>
		</h3>

		<p>
			Matrix provides secure AND decentralized communication using the IRC protocol on the backend
			with an easy to use interface on the frontend. This platform is great for online communities.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://keet.io/">Keet</a>
		</h3>

		<p>
			The engineers at Keet took private communications a step further by not only allowing for
			easily encrypted messages, but the protocol itself is peer-2-peer. Meaning that there aren't
			even any trusted third parties involved in the data transfer and all communication happens
			directly between you and the person you are talking with. Now that is cool.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://jitsi.org/">Jitsi</a>
		</h3>

		<p>Jitsi is an open source and privacy respecting video conferencing application.</p>

		<h2>Email ✉️</h2>

		<p>Secure correspondence</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://protonmail.com/">ProtonMail</a>
		</h3>

		<p>
			Secure and encrypted email based out of Switzerland, Proton offers a free and paid version of
			their service. This is an excellent alternative to Gmail which scans users emails to sell
			data. Emails will be end-to-end encrypted to other ProtonMail users or if you set a password
			to non-Proton users. There are many other useful features such as expiration times and more.
		</p>

		<h2>VPN 🔒</h2>

		<p>Secure your network traffic</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://mullvad.net/">Mullvad</a>
		</h3>

		<p>
			Mullvad is a great VPN option offering a super easy sign-up process. In fact, there is no real
			sign-up required. You can pay via bitcoin if you want and no further information is needed.
			You are generated your own unique account identifier to give you access to your tunnels.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://protonvpn.com/">ProtonVPN</a>
		</h3>

		<p>
			ProtonVPN, like all VPNs, will block websites from tracking your IP address to reveal your
			identity. It will also hide your network traffic from your ISP. But it will be visible to the
			VPN provider, however Proton states they do not keep logs. It is up to you to decide if this
			is enough to suit your use-case.
		</p>

		<h2>Search Engines 🔍</h2>

		<p>Search privately and with less influence</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://search.brave.com/">Brave Search</a>
		</h3>

		<p>
			Search with privacy and independent results for a massively improved experience. I have been
			using Brave Search since it's beta release with no issues.
		</p>

		<h2>App Store 📩</h2>

		<p>Free and open source apps</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://f-droid.org/">F-Droid</a>
		</h3>

		<p>
			F-Droid is your mobile app store that contains only free and open source software. Free as in
			freedom.
		</p>

		<h2>Social Media Frontends 📱</h2>

		<p>View from a distance</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://nitter.net/">Nitter</a>
		</h3>

		<p>
			For Twitter inside the web browser there is Nitter, you are able to view all the same
			information as the real thing.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://fritter.cc/">Fritter</a>
		</h3>

		<p>
			If you want a mobile app that allows you to follow accounts and have a feed, that's what
			Fritter does. You can have your own private Twitter feed.
		</p>

		<h3>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://f-droid.org/en/packages/org.mariotaku.twidere/">Twidere</a
			>
		</h3>

		<p>
			This open source Twitter app lets you have full functionality if you have an account. You can
			still participate, but from a distance.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://tube.cadence.moe/">CloudTube</a>
		</h3>

		<p>
			CloudTube is a private YouTube frontend inside the browser, you can even have subscriptions if
			you enable a cookie for it. Isn't it relaxing not having a page full of suggested videos?
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://freetubeapp.io/">FreeTube</a>
		</h3>

		<p>
			FreeTube is a private desktop application for YouTube, it is my favorite and I personally use
			it every day. You can hide many annoying YT features to have a clean interface, you can also
			create profiles to categorize your subs.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://newpipe.net/">NewPipe</a>
		</h3>

		<p>
			To complete the YT alternative stack, there is NewPipe for mobile. You now have no excuse to
			ditch Google. You can access YT privately via the browser, desktop or mobile. Happy viewing!
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://bibliogram.art/">Bibliogram</a>
		</h3>

		<p>
			A browser based frontend for IG. The project has since been deprecated by the maintainer but I
			wanted to include it as a shout-out to the hard word that was put in during its operations.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://libredd.it/">libreddit</a>
		</h3>

		<p>A private Reddit frontend in the browser.</p>

		<h3>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://github.com/Docile-Alligator/Infinity-For-Reddit">Infinity</a
			>
		</h3>

		<p>
			A mobile frontend app for Reddit where you can sign into your account and have all the same
			functionality, minus the ads and tracking.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://f-droid.org/en/packages/com.perflyst.twire/"
				>Twire</a
			>
		</h3>

		<p>
			Ad-free and open source Twitch mobile application available on F-Droid. You can sign into an
			account or watch anonymously.
		</p>

		<h2>Maps 🗺️</h2>

		<p>Open data</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://www.openstreetmap.org/">OpenStreetMap</a>
		</h3>

		<p>
			OpenStreetMap is an alternative to Google that is both open source and open data. You can use
			OSM directly or there are many applications built on top of OSM using their openly available
			API. Another cool feature is that you can help contribute to the map by adding data yourself!
		</p>

		<h2>Podcasts 🎙️</h2>

		<p>Support the little guys</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://podverse.fm/">Podverse</a>
		</h3>

		<p>
			There is a dedicated team behind this small open source project and they have integrated
			bitcoin payments within the app, so you can send tips to all your favorite shows.
		</p>

		<h2>Translations 🌎</h2>

		<p>Translate without tracking</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://lingva.ml/">Lingva</a>
		</h3>

		<p>
			Similar to the social media frontends listed above this app allows you to use services that
			would otherwise be a privacy nightmare in a private way.
		</p>

		<h2>Wiki 📖</h2>

		<p>Access information without worries</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://wikiless.org/">Wikiless</a>
		</h3>

		<p>Another FOSS alternative frontend focused on privacy specifically.</p>

		<h2>Operating Systems 👨‍💻</h2>

		<p>Privacy focused OS</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://lineageos.org/">LineageOS</a> - Mobile
		</h3>

		<p>
			If you use an Apple device you should switch to Android, Apple has openly admitted to scanning
			users devices (plus it's closed source). If you use Android already then you should use a
			custom OS that is de-Googled. There are a few options out there including Graphene and Calyx
			but both of those require using a Pixel device. So that is why I recommend LineageOS. It has a
			large contributor community and is available for many different mobile phones. You will need a
			bit of tech knowledge in order to follow the guide and flash this to your phone. Having
			software that you control on a device that you paid for is the way it should work. No more
			bloatware or spyware. You can breathe a sigh of relief knowing that you have now kicked
			surveillance tech to the curb.
		</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://elementary.io/">elementary OS</a> - Desktop
		</h3>

		<p>
			If you don't want to buy a Linux laptop you can flash any distribution onto whatever existing
			laptop you have. This will again take a bit of technical knowledge but it is not too hard.
			elementary OS is a good option that is privacy respecting and blazing fast because of this.
		</p>

		<h2>Hardware 💻</h2>

		<p>Secure, private and open source</p>

		<h3>
			<a target="_blank" rel="noreferrer" href="https://starlabs.systems/">Star Labs</a>
		</h3>

		<p>
			Star Labs make high quality, open source Linux laptops. You can choose from a variety of
			different operating systems to be pre-installed. Everything will work out of the box with
			impressive boot-up speeds. All levels of users will enjoy an incredible experience using
			Linux, especially if you are coming from Windows. There are a few modals available that you
			can customize depending on how much RAM you require and other preferences.
		</p>

		<hr />

		<p>
			That is the list to get you started on your digital privacy journey. Please reach out if you
			have any questions! 🙂
		</p>

		<hr />

		<blockquote>
			<p>
				"Ultimately, saying that you don't care about privacy because you have nothing to hide is no
				different from saying you don't care about freedom of speech because you have nothing to
				say. Or that you don't care about freedom of the press because you don't like to read. Or
				that you don't care about freedom of religion because you don't believe in God..." — Edward
				Snowden, <em>Permanent Record</em>
			</p>
		</blockquote>
	</div>
</BlogPost>
