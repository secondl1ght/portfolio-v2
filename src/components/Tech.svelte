<script>
  export let tech;
  export let icon;
  export let margin = "";
  export let hover;
</script>

<div
  class="w-auto md:w-[210px] lg:w-[235px] flex items-center space-x-5 {margin}"
>
  <div class="p-4 bg-shadow {hover}">
    <img
      src={icon}
      alt={tech}
      class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    />
  </div>
  <p class="text-secondary md:text-lg lg:text-xl">{tech}</p>
</div>
