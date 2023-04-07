<script>
  export let tech;
  export let icon;
  export let iconOnly = false;
</script>

{#if iconOnly}
  <div title={tech} class="mb-5 mr-5 bg-shadow p-4 hover:shadow-lg">
    <img
      src={icon}
      alt={tech}
      loading="lazy"
      class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
    />
  </div>
{:else}
  <div
    class="mb-5 flex w-auto items-center space-x-5 md:mr-10 md:w-[210px] lg:w-[235px]"
  >
    <div class="bg-shadow p-4 hover:shadow-lg">
      <img
        src={icon}
        alt={tech}
        loading="lazy"
        class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
      />
    </div>
    <p class="ibm text-secondary md:text-lg lg:text-xl">{tech}</p>
  </div>
{/if}
