<script>
  export let tech;
  export let icon;
  export let margin = "";
  export let hover;
</script>

<div
  class="cursor-default w-auto md:w-[175px] block md:flex items-center md:space-x-5 {margin} {hover}"
>
  <div class="p-2 bg-shadow">
    <img src={icon} alt={tech} class="w-8 h-8" />
  </div>
  <p class="hidden md:block text-secondary">{tech}</p>
</div>
