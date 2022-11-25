<script>
  import Tech from "./Tech.svelte";
  export let marginTop = "mt-[8.75rem]";
  export let gradients;
  export let image;
  export let url;
  export let title;
  export let description;
  export let contribution;
  export let role;
  export let tech;

  let showMore = false;
</script>

<div class="w-full {marginTop} bg-gradient-to-r {gradients}">
  <img
    src={image}
    alt={title}
    loading="lazy"
    class="drop-shadow-xl w-full p-4 md:p-12 lg:p-16 2xl:p-20 hover:scale-105 transition-transform duration-500"
  />
</div>
<div class="mt-10 block lg:flex justify-between">
  <div class="w-full md:w-2/3">
    <h3>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        class="jakarta text-white hover:text-hover text-4xl md:text-5xl lg:text-6xl"
        >{title}</a
      >
    </h3>
    <p
      class="ibm text-secondary w-full md:text-lg lg:text-xl lg:w-3/4 mt-8 mb-10 !leading-normal"
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
        {showMore ? contribution : contribution.slice(0, 865) + "..."}
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
      <a
        href="https://stephanlivera.com/episode/420/"
        target="_blank"
        rel="noreferrer"
        class="bg-shadow hover:shadow-lg p-4 max-w-lg block mb-5"
      >
        <img src="/images/slp.webp" alt="Stephan Livera Podcast" />
      </a>

      <a
        href="https://youtu.be/BzdKSgT17pQ"
        target="_blank"
        rel="noreferrer"
        class="bg-shadow hover:shadow-lg p-4 max-w-lg block"
      >
        <img src="/images/adopting.jpeg" alt="Adopting Bitcoin" />
      </a>
    {/if}
  </div>
</div>
