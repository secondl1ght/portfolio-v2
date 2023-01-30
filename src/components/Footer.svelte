<script>
  import { scrollTop } from "../lib/utils";
</script>

<div class="flex w-full items-center justify-end pb-10 pr-5 md:pr-20">
  <button on:click={() => scrollTop()}>
    <img
      src="/icons/up.svg"
      alt="up"
      loading="lazy"
      class="w-8 animate-bounce"
    />
  </button>
</div>
