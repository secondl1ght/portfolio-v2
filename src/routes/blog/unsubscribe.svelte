<script context="module">
  export const prerender = true;
</script>

<script>
  import { BlogInfo } from "$comp";
</script>

<svelte:head>
  <title>secondl1ght - blog</title>
  <meta name="description" content="web developer blog" />
  <meta property="og:image" content="/images/avatar.png" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="secondl1ght - blog" />
  <meta property="twitter:description" content="web developer blog" />
  <meta property="twitter:image" content="https://www.secondl1ght.site/images/avatar.png" />
</svelte:head>

<div class="my-20 flex justify-center items-center">
  <BlogInfo />
</div>
