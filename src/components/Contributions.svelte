<script>
  import Tech from "./Tech.svelte";
  import ProjectMiniCard from "./ProjectMiniCard.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import { background } from "../lib/store";

  const mainProjects = [
    {
      marginTop: "mt-0",
      gradients: "from-[#DDD6F3] to-[#FAACA8]",
      image: "/images/coinos.svg",
      url: "https://coinos.io/",
      title: "coinos",
      description:
        "bitcoin web wallet since 2012 and point-of-sale application, supports both liquid and lightning integration.",
      contribution:
        "implement a donation and fee system to help monetize the platform, add support functionality to improve user experience, maintain and refactor website & more.",
      role: "web developer",
      duration: "nov 2021 - present",
      tech: [
        { tech: "vue.js", icon: "/icons/vue.svg" },
        { tech: "javascript", icon: "/icons/js.svg" },
        { tech: "tailwindcss", icon: "/icons/tailwind.svg" },
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
        "ship end to end encrypted messaging, add tipping support, support sat unit conversion, add commenting on artworks to increase platform engagement, upload audio file format compatibility & more.",
      role: "open source contributor",
      duration: "nov 2021 - present",
      tech: [
        { tech: "sveltekit", icon: "/icons/svelte.svg" },
        { tech: "javascript", icon: "/icons/js.svg" },
        { tech: "tailwindcss", icon: "/icons/tailwind.svg" },
        { tech: "graphql", icon: "/icons/graphql.svg" },
        { tech: "hasura", icon: "/icons/hasura.svg" },
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
        "launch geyser grants feature, integrate gif support, develop crowdfunding leaderboard to boost interactivity & more.",
      role: "web developer",
      duration: "mar 2022 - present",
      tech: [
        { tech: "react", icon: "/icons/react.svg" },
        { tech: "typescript", icon: "/icons/ts.svg" },
        { tech: "chakra ui", icon: "/icons/chakra.svg" },
        { tech: "graphql", icon: "/icons/graphql.svg" },
      ],
    },
    {
      gradients: "from-[#F6D365] to-[#FDA085]",
      image: "/images/alby.png",
      url: "https://getalby.com/",
      title: "alby",
      description:
        "a versatile lightning browser extension bringing bitcoin payments and authentication to the web.",
      contribution:
        "add lightning node connection options, create custom ghost blog and newsletter widget, dark mode, maintain and update landing pages & more.",
      role: "web developer",
      duration: "oct 2021 - present",
      tech: [
        { tech: "react", icon: "/icons/react.svg" },
        { tech: "typescript", icon: "/icons/ts.svg" },
        { tech: "tailwindcss", icon: "/icons/tailwind.svg" },
      ],
    },
  ];

  const miniProjects = [
    {
      project: "jam",
      url: "https://github.com/joinmarket-webui/joinmarket-webui",
      icon: "/icons/jam.svg",
      description:
        "jam is a web ui for joinmarket with focus on user-friendliness.",
    },
    {
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
      project: "stratum v2 website",
      url: "https://github.com/stratum-mining/stratumprotocol.org",
      icon: "/icons/stratum.svg",
      description:
        "stratum v2 is the next generation protocol for pooled mining.",
    },
    {
      project: "bisq",
      url: "https://github.com/bisq-network/bisq",
      icon: "/icons/bisq.svg",
      description:
        "buy and sell bitcoin for fiat privately and securely using bisq's peer-to-peer network.",
    },
  ];
</script>

<div class="w-3/4 lg:w-2/3 xl:w-7/12 2xl:w-1/2 mx-auto mt-40 relative">
  <div
    class="w-2 h-16 bg-[#AF7CD5] absolute -top-2.5 md:-top-0.5 lg:top-1 -left-6 md:-left-10"
  />
  <h2 class="jakarta text-white mb-16 text-4xl md:text-5xl lg:text-6xl">
    contributions
  </h2>
  {#each mainProjects as project}
    <ProjectCard
      marginTop={project.marginTop}
      gradients={project.gradients}
      image={project.image}
      url={project.url}
      title={project.title}
      description={project.description}
      contribution={project.contribution}
      role={project.role}
      duration={project.duration}
      tech={project.tech}
    />
  {/each}
  <div class="relative mt-40 w-auto w-full">
    <div
      class="w-2 h-16 bg-[#A3C6FD] absolute top-3 md:top-6 lg:top-9 -left-6 md:-left-10"
    />
    <h2 class="jakarta text-white mb-16 text-4xl md:text-5xl lg:text-6xl">
      other<br /> contributions
    </h2>
    <div class="flex flex-wrap">
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
  <div bind:this={$background} />
</div>
