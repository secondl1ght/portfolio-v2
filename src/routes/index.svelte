<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { tick } from "svelte";
  import {
    Hero,
    Contributions,
    Background,
    Contact,
    Support,
    Footer,
  } from "$comp";

  const clearHash = async () => {
    await tick();
    goto("/", { replaceState: true, noscroll: true, keepfocus: true });
  };

  if ($page.url.hash) {
    clearHash();
  }
</script>

<Hero />
<Contributions />
<Background />
<Contact />
<Support />
<Footer />
