<script>
  export let method;
  export let icon;
  export let url;
</script>

<div
  class="flex items-center md:text-lg lg:text-xl md:w-[180px] lg:w-[195px] mr-10 mb-5"
>
  <a href={url} target="_blank" rel="noreferrer">
    <div class="p-4 bg-shadow mr-5 hover:shadow-lg">
      <img
        src={icon}
        alt={method}
        loading="lazy"
        class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
      />
    </div>
  </a>
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    class="ibm text-white hover:text-hover"
  >
    {method}
  </a>
</div>
