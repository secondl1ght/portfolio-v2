<script>
  export let project;
  export let url;
  export let icon;
  export let description;
</script>

<div
  class="mb-10 block w-full items-center md:mr-10 md:flex md:w-auto md:space-x-10"
>
  <a href={url} target="_blank" rel="noreferrer">
    <div class="bg-shadow p-5 hover:shadow-xl">
      <img
        src={icon}
        alt={project}
        loading="lazy"
        class="mx-auto h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
      />
    </div>
  </a>
  <div class="mt-4 w-full md:mt-0 md:w-64 lg:w-80">
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      class="jakarta text-xl text-white hover:text-hover md:text-2xl lg:text-3xl"
    >
      {project}</a
    >
    <p class="ibm mt-4 !leading-normal text-secondary md:text-lg lg:text-xl">
      {description}
    </p>
  </div>
</div>
