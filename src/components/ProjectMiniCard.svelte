<script>
  export let project;
  export let url;
  export let icon;
  export let description;
</script>

<a
  href={url}
  target="_blank"
  rel="noreferrer"
  class="text-white hover:text-hover mb-10 md:mb-0 m-5 hover:shadow-xl"
>
  <div class="block md:flex items-center md:space-x-10">
    <div class="p-5 bg-shadow">
      <img src={icon} alt={project} class="mx-auto w-24 h-24" />
    </div>
    <div class="mt-2 md:mt-0 w-full md:w-64">
      <span class="jakarta text-lg">{project}</span>
      <p class="text-sm text-secondary mt-2">{description}</p>
    </div>
  </div>
</a>
