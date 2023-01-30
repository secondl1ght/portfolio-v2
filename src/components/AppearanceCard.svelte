<script>
  export let url;
  export let image;
  export let alt;
</script>

<a
  title={alt}
  href={url}
  target="_blank"
  rel="noreferrer"
  class="mb-5 block max-w-lg bg-shadow p-4 hover:shadow-lg"
>
  <img src="/images/{image}" {alt} />
</a>
