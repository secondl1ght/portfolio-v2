<script>
  export let method;
  export let icon;
  export let url;
</script>

<a
  href={url}
  target="_blank"
  rel="noreferrer"
  class="text-white hover:text-hover w-[175px] mr-10 mb-5 hover:shadow-lg"
>
  <div class="flex items-center">
    <div class="p-2 bg-shadow mr-5">
      <img src={icon} alt={method} class="w-8 h-8" />
    </div>
    {method}
  </div>
</a>
