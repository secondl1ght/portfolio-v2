<script>
  import ContactCard from "./ContactCard.svelte";
  import { support } from "../lib/store";
</script>

<div class="w-2/3 lg:w-1/2 mx-auto space-y-10 relative my-40">
  <div class="w-2 h-16 bg-[#956CF7] absolute -top-2.5 -left-10" />
  <h2 class="text-white mb-5 text-4xl">contact</h2>
  <p class="text-secondary w-full lg:w-2/3">
    while i am not currently looking for work, i am always open to chatting with
    interesting people who share my values and work on projects that align with
    our mission. here are the best ways to get a hold of me:
  </p>
  <div class="flex flex-wrap">
    <ContactCard
      method="email"
      icon="/icons/email.svg"
      url="mailto:secondl1ght@protonmail.com"
    />

    <ContactCard
      method="telegram"
      icon="/icons/telegram.svg"
      url="https://t.me/secondl1ght"
    />

    <ContactCard
      method="matrix"
      icon="/icons/matrix.svg"
      url="https://matrix.to/#/@secondl1ght:matrix.org"
    />

    <ContactCard
      method="twitter"
      icon="/icons/twitter.svg"
      url="https://www.twitter.com/secondl1ght"
    />
  </div>
  <div bind:this={$support} />
</div>
