<script>
  export let url;
  export let margin;
  export let image;
  export let alt;
</script>

<a
  href={url}
  target="_blank"
  rel="noreferrer"
  class="bg-shadow hover:shadow-lg p-4 max-w-lg block {margin}"
>
  <img src="/images/{image}" {alt} />
</a>
