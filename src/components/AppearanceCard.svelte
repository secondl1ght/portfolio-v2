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
  class="bg-shadow hover:shadow-lg p-4 max-w-lg block mb-5"
>
  <img src="/images/{image}" {alt} />
</a>
