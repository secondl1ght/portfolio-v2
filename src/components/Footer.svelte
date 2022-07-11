<script>
  import { scrollTop } from "../lib/utils";
</script>

<div class="w-full flex justify-end items-center pb-10 pr-[31px] md:pr-20">
  <button on:click={() => scrollTop()}>
    <img src="/icons/up.svg" class="w-8 animate-bounce" alt="up" />
  </button>
</div>
