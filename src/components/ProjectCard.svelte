<script>
  import Tech from "./Tech.svelte";
  import AppearanceCard from "./AppearanceCard.svelte";

  export let gradients;
  export let image;
  export let url;
  export let title;
  export let description;
  export let contribution;
  export let role;
  export let tech;

  const appearanceCards = [
    {
      url: "https://stephanlivera.com/episode/420/",
      image: "slp.webp",
      alt: "Stephan Livera Podcast",
    },
    {
      url: "https://youtu.be/BzdKSgT17pQ",
      image: "adopting.jpeg",
      alt: "Adopting Bitcoin",
    },
    /* {
      url: "https://youtu.be/fCPf7m8f_9U?t=1h41m4s",
      image: "legends.jpeg",
      alt: "Legends of Lightning",
    } */
  ];
  let showMore = false;
</script>

<div class="w-full mt-[8.75rem] bg-gradient-to-r {gradients}">
  <img
    src={image}
    alt={title}
    loading="lazy"
    class="drop-shadow-xl w-full p-4 md:p-12 lg:p-16 2xl:p-20 hover:scale-105 transition-transform duration-500"
  />
</div>
<div class="mt-10 block lg:flex justify-between">
  <div class="w-full md:w-2/3">
    <div class="md:flex flex-wrap items-center md:space-x-5">
      <h3>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          class="jakarta text-white hover:text-hover text-4xl md:text-5xl lg:text-6xl"
          >{title}</a
        >
      </h3>
      <div
        class="mt-5 md:mt-0 inline-block md:block p-4 bg-shadow hover:shadow-lg"
      >
        <img
          src="/images/{title.replace(' ', '')}{title === 'raretoshi'
            ? '.png'
            : '.jpg'}"
          alt="avatar"
          class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded"
        />
      </div>
    </div>
    {#if title === "btc map"}
      <h4>
        <a
          href="https://twitter.com/boltfun_btc/status/1597303111319982080"
          target="_blank"
          rel="noreferrer"
          class="jakarta text-white hover:text-hover inline-block mt-8 md:text-xl lg:text-2xl"
          >legends of lightning ⚡️ finalist</a
        >
      </h4>
    {/if}
    <p
      class="ibm text-secondary w-full md:text-lg lg:text-xl lg:w-3/4 {title ===
      'btc map'
        ? 'mt-5'
        : 'mt-8'} mb-10 !leading-normal"
    >
      {description}
    </p>
    <h4 class="jakarta text-white text-lg mb-5 md:text-xl lg:text-2xl">
      contribution
    </h4>
    <p
      class="ibm text-secondary w-full lg:w-3/4 md:text-lg lg:text-xl !leading-normal"
    >
      {#if title === "btc map"}
        {showMore ? contribution : contribution.slice(0, 802) + "..."}
        <button
          class="text-white hover:text-hover"
          on:click={() => (showMore = !showMore)}
          >{showMore ? "show less" : "show more"}</button
        >
      {:else}
        {contribution}
      {/if}
    </p>
  </div>
  <div class="mt-10 lg:mt-0 w-full lg:w-1/3">
    <h4 class="jakarta text-white text-lg mb-5 md:text-xl lg:text-2xl">role</h4>
    <p class="ibm text-secondary mb-10 md:text-lg lg:text-xl">{role}</p>
    <h4 class="jakarta text-white text-lg mb-5 md:text-xl lg:text-2xl">
      tech stack
    </h4>
    <div class="flex flex-wrap {title === 'btc map' ? 'mb-10' : ''}">
      {#each tech as tech}
        <Tech tech={tech.tech} icon={tech.icon} iconOnly={true} />
      {/each}
    </div>
    {#if title === "btc map"}
      <h4 class="jakarta text-white text-lg mb-5 md:text-xl lg:text-2xl">
        appearances
      </h4>
      {#each appearanceCards as card}
        <AppearanceCard url={card.url} image={card.image} alt={card.alt} />
      {/each}
    {/if}
  </div>
</div>
