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
    setTimeout(() => clearHash(), 210);
  }
</script>

<svelte:head>
  <title>secondl1ght - portfolio</title>
  <meta name="description" content="web developer portfolio" />
  <meta property="og:image" content="/images/avatar.png" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="secondl1ght - portfolio" />
  <meta property="twitter:description" content="web developer portfolio" />
  <meta property="twitter:image" content="/images/avatar.png" />
</svelte:head>

<Hero />
<Contributions />
<Background />
<Contact />
<Support />
<Footer />
