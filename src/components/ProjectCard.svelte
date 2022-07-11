<script>
  import Tech from "./Tech.svelte";
  export let marginTop = "mt-40";
  export let gradients;
  export let image;
  export let url;
  export let title;
  export let description;
  export let contribution;
  export let role;
  export let duration;
  export let tech;
</script>

<div class="w-full {marginTop} bg-gradient-to-r {gradients}">
  <img
    src={image}
    alt={title}
    class="w-full p-5 lg:p-10 hover:scale-105 transition-transform duration-500"
  />
</div>
<div class="mt-10 block lg:flex justify-between">
  <div class="w-full lg:w-1/2">
    <h3>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        class="text-white hover:text-hover text-4xl mb-2">{title}</a
      >
    </h3>
    <p class="text-secondary w-full lg:w-3/4 mb-10">
      {description}
    </p>
    <h4 class="text-white text-lg mb-2">contribution</h4>
    <p class="text-secondary w-full lg:w-3/4">{contribution}</p>
  </div>
  <div class="mt-10 lg:mt-0 w-full lg:w-1/2">
    <h4 class="text-white text-lg mb-2">role</h4>
    <p class="text-secondary mb-10">{role}</p>
    <h4 class="text-white text-lg mb-2">duration</h4>
    <p class="text-secondary mb-10">{duration}</p>
    <h4 class="text-white text-lg mb-2">tech stack</h4>
    <div class="flex flex-wrap">
      {#each tech as tech}
        <Tech
          tech={tech.tech}
          icon={tech.icon}
          hover="hover:shadow-md"
          margin="mr-3 mb-3"
        />
      {/each}
    </div>
  </div>
</div>
