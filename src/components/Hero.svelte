<script>
  import { contributions } from "../lib/store";
</script>

<div
  class="w-3/4 lg:w-2/3 xl:w-7/12 2xl:w-1/2 mx-auto space-y-10 mt-10 md:mt-20"
>
  <h4 class="ibm text-xl text-secondary mb-4 md:text-2xl lg:text-3xl">
    secondl1ght
  </h4>
  <span class="ibm text-secondary">
    PGP: DE22 DF78 1024 0A80 75A3 56DA 3E7C 74A3 5CBC 05C5
  </span>
  <div class="jakarta text-5xl md:text-7xl lg:text-8xl text-white relative">
    <div
      class="w-2 h-16 bg-[#9A6FF1] absolute top-1.5 md:top-[30px] lg:top-[51px] -left-6 md:-left-10"
    />
    <h1 class="leading-tight">
      privacy. freedom. community. ideas. human spirit. innovation. kindness.
    </h1>
  </div>
  <h3
    class="ibm text-2xl md:text-3xl lg:text-4xl w-full lg:w-10/12 text-secondary !leading-normal"
  >
    a web developer’s mission to make the world a better place through bitcoin.
  </h3>
  <div bind:this={$contributions} id="contributions" />
</div>
