<script context="module">
  export const prerender = true;
</script>

<script>
  import { BlogInfo } from "$comp";
</script>

<svelte:head>
  <meta name="description" content="web developer blog" />
  <meta property="og:image" content="/images/avatar.png" />
</svelte:head>

<div class="my-20 flex justify-center items-center">
  <BlogInfo />
</div>
