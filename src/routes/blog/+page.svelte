<script>
  import { BlogInfo, BlogCard, Footer } from "$comp";
  const posts = [
    {
      image: "lock",
      title: "Privacy tools for the information age 🔐",
      description:
        "When I was first learning how to code I created a website called Privacy Tech Resource which was a curated list of privacy tools that I have found useful and recommend others to use. I have since taken down that site, but thought I would write a blog post containing the same information and some updated resources too.",
      date: "Nov 23, 2022",
      url: "privacy-tools",
    },
    {
      image: "nodes",
      title: "The state of bitcoin (plug and play) nodes 🌐",
      description: "Everyone can run a bitcoin full node, and you should too!",
      date: "Aug 23, 2022",
      url: "state-of-nodes",
    },
    {
      image: "tips",
      title: "How to accept bitcoin lightning tips on your website ⚡",
      description:
        "Have you ever wondered how to accept bitcoin tips on your website? Well this is the guide for you!",
      date: "Aug 5, 2022",
      url: "accept-lightning-tips",
    },
    {
      image: "code",
      title:
        "How to Teach Yourself to Code and Start a New Career (or at least how I did it)",
      description:
        "Over the past 9 or so months I have taught myself how to code and started a new career as a Web Developer. I thought I would make a blog post about my self-taught journey so that others may find some inspiration and/or useful information from it. So here it is - my tips and advice to those considering or starting their own coding journey!",
      date: "Feb 2, 2022",
      url: "how-to-code",
    },
  ];
</script>

<svelte:head>
  <title>secondl1ght - blog</title>
  <meta name="description" content="web developer blog" />
  <meta
    property="og:image"
    content="https://www.secondl1ght.site/images/og.jpg"
  />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="secondl1ght - blog" />
  <meta property="twitter:description" content="web developer blog" />
  <meta
    property="twitter:image"
    content="https://www.secondl1ght.site/images/og.jpg"
  />
</svelte:head>

<div
  class="xl:flex justify-center space-y-32 xl:space-y-0 xl:space-x-16 my-10 md:my-20"
>
  <BlogInfo />
  <div class="space-y-32">
    {#each posts as post}
      <BlogCard
        image={post.image}
        title={post.title}
        description={post.description}
        date={post.date}
        url={post.url}
      />
    {/each}
  </div>
</div>
<Footer />
