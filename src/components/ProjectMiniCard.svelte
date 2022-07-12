<script>
  export let project;
  export let url;
  export let icon;
  export let description;
</script>

<div
  class="mb-10 m-5 w-full md:w-auto block md:flex items-center md:space-x-10"
>
  <a href={url} target="_blank" rel="noreferrer">
    <div class="p-5 bg-shadow hover:shadow-xl">
      <img
        src={icon}
        alt={project}
        class="mx-auto w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
      />
    </div>
  </a>
  <div class="mt-4 md:mt-0 w-full md:w-64 lg:w-80">
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      class="jakarta text-xl md:text-2xl lg:text-3xl text-white hover:text-hover"
    >
      {project}</a
    >
    <p class="ibm md:text-lg lg:text-xl text-secondary mt-4 !leading-normal">
      {description}
    </p>
  </div>
</div>
