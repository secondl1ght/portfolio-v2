<script>
  import Tech from "./Tech.svelte";
  import { contact } from "../lib/store";
</script>

<div
  class="w-3/4 lg:w-1/2 mx-auto space-y-10 relative mt-[7.5rem] md:mt-[8.75rem] mb-40"
>
  <div
    class="w-2 h-16 bg-[#C2E9FB] absolute -top-3 md:-top-1.5 lg:top-0 -left-6 md:-left-10"
  />
  <h2 class="text-white !mb-16 text-4xl md:text-5xl lg:text-6xl">background</h2>
  <p
    class="md:text-lg lg:text-xl !leading-normal text-secondary w-full md:w-3/4"
  >
    during the summer of 2020 i discovered bitcoin and it completely changed my
    life in so many ways. one of which is that it prompted me to give coding a
    try. after discovering how much i enjoy coding, i began working hard at
    teaching myself the fundamentals of web development.<br /><br /> my goal was
    to become a bitcoin developer so that i could focus all of my resources
    towards what i believe is the most important project of our time. i am now
    happy to say that i contribute to open-source projects and work as a bitcoin
    dev full-time! <br /><br /> all of my code is open source, please feel free
    to review my code on github. this is my proof of work. <br /><br /> i'd like
    to thank everyone who has helped me along this incredible journey so far,
    i've met many kind and generous people along the way. for anyone interested
    in learning how to code, i wrote a blog
    <a
      href="https://dev.to/secondl1ght/how-to-teach-yourself-to-code-and-start-a-new-career-or-at-least-how-i-did-it-2cfn"
      target="_blank"
      rel="noreferrer"
      class="text-white underline">post</a
    > detailing how i was able to accomplish this.
  </p>
  <div>
    <h4 class="text-white text-lg md:text-xl mb-5">favorite tech stack</h4>
    <div class="block md:flex flex-wrap lg:w-[70vw]">
      <Tech
        tech="html5"
        icon="/icons/html.svg"
        margin="mr-10 mb-5"
        hover={"hover:shadow-lg"}
      />

      <Tech
        tech="css3"
        icon="/icons/css.svg"
        margin="mr-10 mb-5"
        hover={"hover:shadow-lg"}
      />

      <Tech
        tech="javascript"
        icon="/icons/js.svg"
        margin="mr-10 mb-5"
        hover={"hover:shadow-lg"}
      />

      <Tech
        tech="sveltekit"
        icon="/icons/svelte.svg"
        margin="mr-10 mb-5"
        hover={"hover:shadow-lg"}
      />

      <Tech
        tech="tailwindcss"
        icon="/icons/tailwind.svg"
        margin="mr-10 mb-5"
        hover={"hover:shadow-lg"}
      />

      <Tech
        tech="graphql"
        icon="/icons/graphql.svg"
        margin="mr-10 mb-5"
        hover={"hover:shadow-lg"}
      />

      <Tech
        tech="yarn"
        icon="/icons/yarn.svg"
        margin="mr-10 mb-5"
        hover={"hover:shadow-lg"}
      />

      <Tech
        tech="docker"
        icon="/icons/docker.svg"
        margin="mr-10 mb-5"
        hover={"hover:shadow-lg"}
      />

      <Tech
        tech="linux"
        icon="/icons/linux.svg"
        margin="mr-10 mb-5"
        hover={"hover:shadow-lg"}
      />

      <Tech
        tech="bitcoin"
        icon="/icons/bitcoin.svg"
        margin="mr-10 mb-5"
        hover={"hover:shadow-lg"}
      />
    </div>
  </div>
  <div bind:this={$contact} />
</div>
