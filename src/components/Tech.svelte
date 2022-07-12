<script>
  export let tech;
  export let icon;
</script>

<div
  class="w-auto md:w-[210px] lg:w-[235px] flex items-center space-x-5 mr-10 mb-5"
>
  <div class="p-4 bg-shadow hover:shadow-lg">
    <img
      src={icon}
      alt={tech}
      class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    />
  </div>
  <p class="ibm text-secondary md:text-lg lg:text-xl">{tech}</p>
</div>
