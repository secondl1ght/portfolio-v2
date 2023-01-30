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

<div class="mt-[8.75rem] w-full bg-gradient-to-r {gradients}">
  <img
    src={image}
    alt={title}
    loading="lazy"
    class="w-full p-4 drop-shadow-xl transition-transform duration-500 hover:scale-105 md:p-12 lg:p-16 2xl:p-20"
  />
</div>
<div class="mt-10 block justify-between lg:flex">
  <div class="w-full md:w-2/3">
    <div class="flex-wrap items-center md:flex md:space-x-5">
      <h3>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          class="jakarta text-4xl text-white hover:text-hover md:text-5xl lg:text-6xl"
          >{title}</a
        >
      </h3>
      <div
        class="mt-5 inline-block bg-shadow p-4 hover:shadow-lg md:mt-0 md:block"
      >
        <img
          src="/images/{title.replace(' ', '')}{title === 'raretoshi'
            ? '.png'
            : '.jpg'}"
          alt="avatar"
          class="h-8 w-8 rounded md:h-10 md:w-10 lg:h-12 lg:w-12"
        />
      </div>
    </div>
    {#if title === "btc map"}
      <h4>
        <a
          href="https://twitter.com/boltfun_btc/status/1597303111319982080"
          target="_blank"
          rel="noreferrer"
          class="jakarta mt-8 inline-block text-white hover:text-hover md:text-xl lg:text-2xl"
          >legends of lightning ⚡️ finalist</a
        >
      </h4>
    {/if}
    <p
      class="ibm w-full text-secondary md:text-lg lg:w-3/4 lg:text-xl {title ===
      'btc map'
        ? 'mt-5'
        : 'mt-8'} mb-10 !leading-normal"
    >
      {description}
    </p>
    <h4 class="jakarta mb-5 text-lg text-white md:text-xl lg:text-2xl">
      contribution
    </h4>
    <p
      class="ibm w-full !leading-normal text-secondary md:text-lg lg:w-3/4 lg:text-xl"
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
  <div class="mt-10 w-full lg:mt-0 lg:w-1/3">
    <h4 class="jakarta mb-5 text-lg text-white md:text-xl lg:text-2xl">role</h4>
    <p class="ibm mb-10 text-secondary md:text-lg lg:text-xl">{role}</p>
    <h4 class="jakarta mb-5 text-lg text-white md:text-xl lg:text-2xl">
      tech stack
    </h4>
    <div class="flex flex-wrap {title === 'btc map' ? 'mb-10' : ''}">
      {#each tech as tech}
        <Tech tech={tech.tech} icon={tech.icon} iconOnly={true} />
      {/each}
    </div>
    {#if title === "btc map"}
      <h4 class="jakarta mb-5 text-lg text-white md:text-xl lg:text-2xl">
        appearances
      </h4>
      {#each appearanceCards as card}
        <AppearanceCard url={card.url} image={card.image} alt={card.alt} />
      {/each}
    {/if}
  </div>
</div>
