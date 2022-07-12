<script>
  import ContactCard from "./ContactCard.svelte";
  import { support } from "../lib/store";

  const contactMethods = [
    {
      method: "email",
      icon: "/icons/email.svg",
      url: "mailto:secondl1ght@protonmail.com",
    },
    {
      method: "telegram",
      icon: "/icons/telegram.svg",
      url: "https://t.me/secondl1ght",
    },
    {
      method: "matrix",
      icon: "/icons/matrix.svg",
      url: "https://matrix.to/#/@secondl1ght:matrix.org",
    },
    {
      method: "twitter",
      icon: "/icons/twitter.svg",
      url: "https://www.twitter.com/secondl1ght",
    },
  ];
</script>

<div class="w-3/4 lg:w-1/2 mx-auto space-y-10 relative my-40">
  <div
    class="w-2 h-16 bg-[#956CF7] absolute -top-2.5 md:-top-1 lg:top-1 -left-6 md:-left-10"
  />
  <h2 class="jakarta text-white !mb-16 text-4xl md:text-5xl lg:text-6xl">contact</h2>
  <p
    class="ibm text-secondary w-full md:w-3/4 md:text-lg lg:text-xl !leading-normal"
  >
    while i am not currently looking for work, i am always open to chatting with
    interesting people who share my values and work on projects that align with
    our mission. here are the best ways to get a hold of me:
  </p>
  <div class="block md:flex flex-wrap">
    {#each contactMethods as contact}
      <ContactCard
        method={contact.method}
        icon={contact.icon}
        url={contact.url}
      />
    {/each}
  </div>
  <div bind:this={$support} />
</div>
