<script>
  import { contributions } from "../lib/store";
</script>

<div class="w-2/3 lg:w-1/2 mx-auto space-y-10 mt-10 md:mt-20">
  <h4 class="text-lg text-secondary mb-1">secondl1ght</h4>
  <span class="text-secondary">
    DE22 DF78 1024 0A80 75A3 56DA 3E7C 74A3 5CBC 05C5
  </span>
  <div class="text-4xl md:text-6xl text-white relative">
    <div class="w-2 h-16 bg-[#9A6FF1] absolute top-2.5 -left-10" />
    <h1>privacy. freedom.</h1>
    <h1>community. ideas.</h1>
    <h1>human spirit.</h1>
    <h1>innovation.</h1>
    <h1>kindness.</h1>
  </div>
  <h3 class="text-xl w-full lg:w-1/2 text-secondary">
    an anonymous developer’s mission to make the world a better place.
  </h3>
  <div bind:this={$contributions} />
</div>
