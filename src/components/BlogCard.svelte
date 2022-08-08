<script>
  export let image;
  export let title;
  export let description;
  export let date;
  export let url;
</script>

<div
  class="w-3/4 md:w-[655px] lg:w-[755px] 2xl:w-[855px] space-y-5 mx-auto xl:mx-0"
>
  <a href="/blog/{url}" class="block">
    <img src="/images/{image}.png" alt={image} class="w-full" />
  </a>
  <a href="/blog/{url}" class="block">
    <h2
      class="!leading-normal jakarta text-white hover:text-hover text-2xl md:text-3xl lg:text-4xl"
    >
      {title}
    </h2>
  </a>
  <p class="!leading-normal ibm text-secondary md:text-lg lg:text-xl">
    {description}
  </p>
  <p class="ibm text-secondary/50 text-sm md:text-base lg:text-lg">{date}</p>
</div>
