<script>
  import { contributions, background, contact, support } from "../lib/store";
  import { scroll } from "../lib/utils";
  let showMenu = false;
</script>

<!-- desktop header -->
<header
  class="hidden md:flex h-20 sticky top-0 z-10 bg-primary/90 justify-center lg:justify-start lg:pl-[25vw] items-center"
>
  <nav class="text-lg text-white space-x-16">
    <a
      href="https://github.com/secondl1ght"
      target="_blank"
      rel="noreferrer"
      class="hover:text-hover">github</a
    >
    <button class="hover:text-hover" on:click={() => scroll($contributions)}
      >contributions</button
    >
    <button class="hover:text-hover" on:click={() => scroll($background)}
      >background</button
    >
    <button class="hover:text-hover" on:click={() => scroll($contact)}
      >contact</button
    >
    <button class="hover:text-hover" on:click={() => scroll($support)}
      >support</button
    >
  </nav>
</header>

<!-- mobile header -->
<header class="block md:hidden h-20 sticky top-0 z-10 bg-primary/90">
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
      <a
        href="https://github.com/secondl1ght"
        target="_blank"
        rel="noreferrer"
        class="block hover:text-hover"
        on:click={() => (showMenu = false)}>github</a
      >
      <button
        class="block hover:text-hover"
        on:click={() => {
          scroll($contributions);
          showMenu = false;
        }}>contributions</button
      >
      <button
        class="block hover:text-hover"
        on:click={() => {
          scroll($background);
          showMenu = false;
        }}>background</button
      >
      <button
        class="block hover:text-hover"
        on:click={() => {
          scroll($contact);
          showMenu = false;
        }}>contact</button
      >
      <button
        class="block hover:text-hover"
        on:click={() => {
          scroll($support);
          showMenu = false;
        }}>support</button
      >
    </div>
  </nav>
</header>
