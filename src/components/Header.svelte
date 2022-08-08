<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { contributions, background, contact, support } from "../lib/store";
  import { scroll } from "../lib/utils";

  let showMenu = false;

  const handleButtonClick = (section, store) => {
    showMenu = false;
    if ($page.url.pathname.includes("blog")) {
      goto(`/#${section}`);
    } else {
      scroll(store);
    }
  };
</script>

<!-- desktop header -->
<header
  class="w-full jakarta hidden lg:flex h-20 sticky top-0 z-10 bg-primary/90 justify-center items-center"
>
  <nav class="text-xl lg:text-2xl text-white space-x-16">
    <button
      class="hover:text-hover"
      on:click={() => handleButtonClick("contributions", $contributions)}
      >contributions</button
    >
    <button
      class="hover:text-hover"
      on:click={() => handleButtonClick("background", $background)}
      >background</button
    >
    <button
      class="hover:text-hover"
      on:click={() => handleButtonClick("contact", $contact)}>contact</button
    >
    <button
      class="hover:text-hover"
      on:click={() => handleButtonClick("support", $support)}>support</button
    >
    <a
      href="/blog"
      class="hover:text-hover {$page.url.pathname.includes('blog')
        ? 'text-hover'
        : ''}">blog</a
    >
    <a
      href="https://github.com/secondl1ght"
      target="_blank"
      rel="noreferrer"
      class="hover:text-hover">github</a
    >
  </nav>
</header>

<!-- mobile header -->
<header
  class="w-full jakarta block lg:hidden h-20 sticky top-0 z-10 bg-primary/90"
>
  <button
    ><img
      src={!showMenu ? "/icons/mobile-open.svg" : "/icons/mobile-close.svg"}
      alt="toggle-menu"
      class="absolute top-4 right-5 z-20"
      on:click={() => (showMenu = !showMenu)}
    /></button
  >
  <nav
    class="text-3xl text-white bg-primary flex justify-end w-full h-[100vh] absolute top-0 transition-all ease-in-out {showMenu
      ? 'left-0'
      : 'left-[-100%]'}"
  >
    <div class="space-y-16 mt-28 mr-10">
      <button
        class="block hover:text-hover"
        on:click={() => handleButtonClick("contributions", $contributions)}
        >contributions</button
      >
      <button
        class="block hover:text-hover"
        on:click={() => handleButtonClick("background", $background)}
        >background</button
      >
      <button
        class="block hover:text-hover"
        on:click={() => handleButtonClick("contact", $contact)}>contact</button
      >
      <button
        class="block hover:text-hover"
        on:click={() => handleButtonClick("support", $support)}>support</button
      >

      <a
        href="/blog"
        class="block hover:text-hover {$page.url.pathname.includes('blog')
          ? 'text-hover'
          : ''}"
        on:click={() => (showMenu = false)}>blog</a
      >
      <a
        href="https://github.com/secondl1ght"
        target="_blank"
        rel="noreferrer"
        class="block hover:text-hover"
        on:click={() => (showMenu = false)}>github</a
      >
    </div>
  </nav>
</header>
