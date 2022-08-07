<script>
  import "../app.css";
  import { Header, Footer } from "$comp";

  let fadeIn = false;
  setTimeout(() => (fadeIn = true), 0);
</script>

<div
  class="{fadeIn
    ? 'opacity-100'
    : 'opacity-0'} transition-opacity duration-[2100ms]"
>
  <Header />
  <slot />
  <Footer />
</div>
