<script>
  let submit;
  let email;
</script>

<div class="space-y-5 w-3/4 md:w-[350px] mx-auto xl:mx-0">
  <img
    src="/images/avatar.png"
    class="rounded-full bg-hover w-32 h-32"
    alt="avatar"
  />
  <div>
    <p class="jakarta text-white text-sm md:text-base lg:text-lg font-semibold">
      secondl1ght
    </p>
    <div class="flex items-center space-x-5 mt-4">
      <a href="https://github.com/secondl1ght" target="_blank" rel="noreferrer"
        ><img src="/icons/github.svg" class="w-8" alt="github" />
      </a>
      <a href="https://twitter.com/secondl1ght" target="_blank" rel="noreferrer"
        ><img src="/icons/twitter-white.svg" class="w-8" alt="twitter" />
      </a>
      <a
        href="https://makers.bolt.fun/profile/34/secondl1ght"
        target="_blank"
        rel="noreferrer"
        ><img src="/icons/makers.svg" class="w-8" alt="bolt.fun" />
      </a>
      <a href="https://dev.to/secondl1ght" target="_blank" rel="noreferrer"
        ><img src="/icons/dev.svg" class="w-8" alt="dev" />
      </a>
    </div>
  </div>
  <p
    class="ibm text-secondary !leading-normal md:text-lg lg:text-xl font-semibold"
  >
    An anonymous developer’s mission to make the world a better place.
  </p>

  <form on:submit|preventDefault={submit} class="space-y-3">
    <input
      type="email"
      required
      class="placeholder:text-secondary px-8 text-secondary border border-[#2F3143] bg-transparent h-12 md:h-16 lg:h-18 ibm md:text-lg lg:text-xl w-full font-semibold"
      placeholder="Email"
      bind:value={email}
    />
    <button
      class="relative ibm w-full md:text-lg lg:text-xl h-12 md:h-16 lg:h-18 bg-gradient-to-r from-[#9068FE] to-[#FEB068] flex justify-center items-center text-white font-semibold"
    >
      <span
        class="opacity-0 hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[#9068FE] to-[#FEB068] ibm md:text-lg lg:text-xl flex justify-center items-center text-white font-semibold"
        >Subscribe</span
      >
      Subscribe
    </button>
  </form>
</div>
