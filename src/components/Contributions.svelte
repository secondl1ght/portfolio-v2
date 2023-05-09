<script>
  import Tech from "./Tech.svelte";
  import ProjectMiniCard from "./ProjectMiniCard.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import { background } from "../lib/store";

  const mainProjects = [
    {
      gradients: "from-[#0B9072] to-[#144046]",
      image: "/images/btcmap.png",
      url: "https://btcmap.org/",
      title: "btc map",
      description: "easily find places to spend sats anywhere on the planet.",
      contribution:
        "code and architect front-end of the app including; pull data from the osm api and filter based on bitcoin attributes, utilize leafletjs to make a custom mapping solution, create easy to use forms for adding and updating data on openstreetmap, integrate the github api with form submissions to automate issue generation and the opencage geocoding api to determine country of origin, add statistics dashboard to monitor mapping activity in real time including a latest taggers feed, make the web app pwa so it can be installed on mobile devices, include an easy to embed iframe with url search param queries, allow for dynamic community routes to position map on local areas, gamify merchant adoption by making leaderboards and tagger profiles with the ability to earn sats with lightning tips and badges, visualize datasets via charts and graphs to better understand progress and trends, write search algorithm and sort results by distance to make discovering locations easier and use techniques including debouncing for optimization, publish api documentation, display pay button for integrated merchants, leverage indexeddb to support caching and incremental background sync of data for massive performance improvements in loading times and data usage, build bot protection into forms using the crypto module to pass encrypted captcha secrets, markdown support with security checks, merchant boost feature to begin monetizing the platform, add just-in-time renders for popup components, polygon support using the geojson format, dark/light mode toggle plus system default, personal merchant pages to help small businesses, program service workers for offline fallback, match osm hash for geolocation coordinate sharing, fetch retries for greater resiliency, setup ci pipeline & more.",
      role: "open source maintainer",
      tech: [
        { tech: "sveltekit", icon: "/icons/svelte.svg" },
        { tech: "javascript", icon: "/icons/js.svg" },
        { tech: "tailwindcss", icon: "/icons/tailwind.svg" },
        { tech: "leafletjs", icon: "/icons/leaflet.png" },
        { tech: "openstreetmap", icon: "/icons/osm.svg" },
        { tech: "sqlite", icon: "/icons/sqlite.svg" },
        { tech: "node.js", icon: "/icons/node.svg" },
      ],
    },
    {
      gradients: "from-[#DDD6F3] to-[#FAACA8]",
      image: "/images/coinos.png",
      url: "https://coinos.io/",
      title: "coinos",
      description:
        "bitcoin web wallet since 2012 and point-of-sale application, supports both liquid and lightning integration.",
      contribution:
        "rewrite app from vue.js to sveltekit, refresh UI with new design and features focused on expanding POS, help implement a donation and fee system to monetize the platform, add support functionality to improve user experience, maintain and refactor website & more.",
      role: "web developer",
      tech: [
        { tech: "vue.js", icon: "/icons/vue.svg" },
        { tech: "sveltekit", icon: "/icons/svelte.svg" },
        { tech: "javascript", icon: "/icons/js.svg" },
        { tech: "tailwindcss", icon: "/icons/tailwind.svg" },
        { tech: "mariadb", icon: "/icons/maria.svg" },
        { tech: "node.js", icon: "/icons/node.svg" },
      ],
    },
    {
      gradients: "from-[#B1F5EE] to-[#A6C1EE]",
      image: "/images/geyser.png",
      url: "https://geyser.fund/",
      title: "geyser",
      description:
        "global and user-friendly crowdfunding, grants, and other engaging use-cases on the bitcoin lightning network.",
      contribution:
        "launch geyser grants feature, integrate gifs in messages, develop crowdfunding leaderboard to boost interactivity, help with lightning address embeds for campaigns, front-end for lnurl-auth, responsiveness improvements & more.",
      role: "software engineer",
      tech: [
        { tech: "react", icon: "/icons/react.svg" },
        { tech: "typescript", icon: "/icons/ts.svg" },
        { tech: "chakra ui", icon: "/icons/chakra.svg" },
        { tech: "graphql", icon: "/icons/graphql.svg" },
        { tech: "prisma", icon: "/icons/prisma.svg" },
        { tech: "postgresql", icon: "/icons/postgres.svg" },
        { tech: "node.js", icon: "/icons/node.svg" },
      ],
    },
    {
      gradients: "from-[#F6D365] to-[#FDA085]",
      image: "/images/alby.svg",
      url: "https://getalby.com/",
      title: "alby",
      description:
        "a versatile lightning browser extension bringing bitcoin payments and authentication to the web.",
      contribution:
        "add lightning node connection options, refactor public lightning address donation page to match new design, manage some dependency upgrades to ensure there are no breaking changes, create custom ghost blog and newsletter widget, dark mode, maintain and update landing pages & more.",
      role: "front-end developer",
      tech: [
        { tech: "react", icon: "/icons/react.svg" },
        { tech: "rubyonrails", icon: "/icons/rails.svg" },
        { tech: "typescript", icon: "/icons/ts.svg" },
        { tech: "javascript", icon: "/icons/js.svg" },
        { tech: "ruby", icon: "/icons/ruby.svg" },
        { tech: "tailwindcss", icon: "/icons/tailwind.svg" },
        { tech: "postgresql", icon: "/icons/postgres.svg" },
        { tech: "redis", icon: "/icons/redis.svg" },
        { tech: "node.js", icon: "/icons/node.svg" },
      ],
    },
    {
      gradients: "from-[#A1C4FD] to-[#C2E9FB]",
      image: "/images/rare.png",
      url: "https://raretoshi.com/",
      title: "raretoshi",
      description:
        "mint, collect, and transact rare digital & physical bitcoin art on the liquid network.",
      contribution:
        "ship end to end encrypted messaging, add artist tipping, support sat unit conversion, add commenting on artworks to increase platform engagement, audio file format upload compatibility, wallet revamp & more.",
      role: "open source contributor",
      tech: [
        { tech: "sveltekit", icon: "/icons/svelte.svg" },
        { tech: "javascript", icon: "/icons/js.svg" },
        { tech: "tailwindcss", icon: "/icons/tailwind.svg" },
        { tech: "graphql", icon: "/icons/graphql.svg" },
        { tech: "hasura", icon: "/icons/hasura.svg" },
        { tech: "postgresql", icon: "/icons/postgres.svg" },
        { tech: "ipfs", icon: "/icons/ipfs.svg" },
        { tech: "fastify", icon: "/icons/fast.svg" },
        { tech: "node.js", icon: "/icons/node.svg" },
      ],
    },
  ];

  const miniProjects = [
    {
      project: "jam",
      url: "https://jamapp.org/",
      icon: "/icons/jam.svg",
      description: "a web ui for joinmarket with focus on user-friendliness.",
    },
    {
      project: "stratum v2 website",
      url: "https://stratumprotocol.org/",
      icon: "/icons/stratum.svg",
      description: "the next generation protocol for pooled mining.",
    },
    {
      project: "thunderhub",
      url: "https://thunderhub.io/",
      icon: "/images/thunderhub.jpg",
      description:
        "monitor and manage your lightning node from any browser and any device.",
    },
    /* {
      project: "bitcoin beach wallet",
      url: "https://github.com/GaloyMoney/galoy-mobile",
      icon: "/icons/beach.svg",
      description:
        "helping bring the vision of a sustainable bitcoin economy to fruition.",
    },
    {
      project: "stacker.news",
      url: "https://github.com/stackernews/stacker.news",
      icon: "/icons/stacker.svg",
      description: "it's like hacker news, but for bitcoin.",
    },
     {
      project: "zeus",
      url: "https://github.com/ZeusLN/zeus",
      icon: "/icons/zeus.svg",
      description:
        "zeus is a mobile bitcoin/lightning node manager and wallet app for lnd, core lightning, and eclair.",
    },
     {
      project: "start9",
      url: "https://github.com/Start9Labs",
      icon: "/icons/s9.svg",
      description: "sovereign computing for a free future.",
    },
    {
      project: "polar",
      url: "https://github.com/jamaljsr/polar",
      icon: "/icons/polar.svg",
      description:
        "one-click bitcoin lightning networks for local app development & testing.",
    },
    {
      project: "bisq",
      url: "https://github.com/bisq-network/bisq",
      icon: "/icons/bisq.svg",
      description:
        "buy and sell bitcoin for fiat privately and securely using bisq's peer-to-peer network.",
    }, */
  ];
</script>

<div class="relative mx-auto mt-40 w-3/4 lg:w-2/3 xl:w-7/12 2xl:w-1/2">
  <div
    class="absolute -left-6 -top-2.5 h-16 w-2 bg-[#AF7CD5] md:-left-10 md:-top-0.5 lg:top-1"
  />
  <h2 class="jakarta mb-16 text-4xl text-white md:text-5xl lg:text-6xl">
    contributions
  </h2>
  <div
    class="ibm mb-5 mt-0 w-full bg-shadow p-4 !leading-normal text-secondary shadow-lg transition-transform duration-500 hover:scale-105 md:p-8 md:text-lg lg:text-xl"
  >
    <img src="/images/amboss.svg" alt="amboss" class="mb-8" />
    <p>
      I am currently working full-time with the amazing team at <a
        href="https://amboss.space/"
        target="_blank"
        rel="noreferrer"
        class="jakarta text-white hover:text-hover">Amboss Technologies</a
      > as a Frontend Engineer. We are helping bitcoin scale by building critical
      tools for Lightning Network infrastructure including; a beautifully visualized
      network explorer, channel liquidity marketplace, node communities and personalization,
      enterprise data analytics to give routers an edge, monitoring and recovery
      services, a robust API with access to deep insights into the exploding lightning
      network and much more. I am very grateful to have this incredible opportunity
      to work with such a high quality group of people on one of the most innovative
      projects in the space.
    </p>
  </div>
  {#each mainProjects as project}
    <ProjectCard
      gradients={project.gradients}
      image={project.image}
      url={project.url}
      title={project.title}
      description={project.description}
      contribution={project.contribution}
      role={project.role}
      tech={project.tech}
    />
  {/each}
  <div class="relative mt-[8.75rem] w-auto w-full">
    <div
      class="absolute -left-6 top-3 h-16 w-2 bg-[#A3C6FD] md:-left-10 md:top-6 lg:top-9"
    />
    <h2 class="jakarta mb-16 text-4xl text-white md:text-5xl lg:text-6xl">
      other<br /> contributions
    </h2>
    <div class="flex flex-wrap justify-between">
      {#each miniProjects as project}
        <ProjectMiniCard
          project={project.project}
          url={project.url}
          icon={project.icon}
          description={project.description}
        />
      {/each}
    </div>
  </div>
  <div bind:this={$background} id="background" />
</div>
