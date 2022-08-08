<script context="module">
  export const prerender = true;
</script>

<script>
  import { BlogInfo, BlogCard, Footer } from "$comp";
  const posts = [
    {
      image: "tips",
      title: "How to accept bitcoin lightning tips on your website ⚡",
      description:
        "Have you ever wondered how to accept bitcoin tips on your website? Well this is the guide for you!",
      date: "Aug 4, 2022",
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
