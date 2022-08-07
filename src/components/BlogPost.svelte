<script>
  import { Footer } from "$comp";

  export let title;
  export let image;
  export let description;
  export let date;
</script>

<div class="my-10 md:my-20 w-3/4 mx-auto max-w-7xl">
  <p class="ibm !leading-normal text-secondary mb-8">
    <a href="/blog">Blog</a>
    <span class="text-secondary/50 text-sm">/ {title}</span>
  </p>
  <img src="/images/{image}.png" alt={image} class="w-full" />
  <h1
    class="jakarta !leading-normal w-full md:w-10/12 mx-auto text-center mt-5 md:mt-10 text-white text-3xl md:text-5xl lg:text-6xl font-semibold"
  >
    {title}
  </h1>
  <p
    class="ibm text-secondary w-full md:w-2/3 mx-auto text-center mt-6 md:mt-8 mb-6 !leading-normal text-xl"
  >
    {description}
  </p>
  <div class="flex justify-center items-center space-x-5 mb-10">
    <img
      src="/images/avatar.png"
      class="rounded-full bg-hover w-20 h-20"
      alt="avatar"
    />
    <div>
      <p class="jakarta text-white">secondl1ght</p>
      <p class="ibm text-secondary/50">
        {date}
      </p>
    </div>
  </div>
  <slot />
</div>

<Footer />
