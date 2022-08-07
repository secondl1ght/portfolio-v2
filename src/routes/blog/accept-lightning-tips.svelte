<script>
  import { BlogPost } from "$comp";
</script>

<BlogPost
  title="How to accept bitcoin lightning tips on your website ⚡"
  image="tips"
  description="Have you ever wondered how to accept bitcoin tips on your website? Well this is the guide for you!"
  date="Aug 4, 2022"
>
  <div
    class="ibm text-lg space-y-5 text-secondary w-full md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto !leading-normal"
  >
    <p>
      In this guide I will walk through the steps to start <strong
        >stacking satoshis</strong
      > (sats) from your website visitors.
    </p>
    <p>
      This guide is meant for accepting donation-like payments similar to 'buy
      me a coffee' and not for selling products. If you want to incorporate
      accepting <strong>bitcoin payments as a merchant</strong>, I would
      recommend looking into
      <a
        href="https://btcpayserver.org/"
        target="_blank"
        rel="noreferrer"
        class="text-white underline hover:text-hover">BTCPay Server</a
      >
      or
      <a
        href="https://coinos.io/"
        target="_blank"
        rel="noreferrer"
        class="text-white underline hover:text-hover">CoinOS</a
      > (for in-person POS).
    </p>
    <p>
      This guide is also specific to the <strong
        >bitcoin <u>lightning network</u></strong
      >
      which is a layer 2 network built on top of the bitcoin blockchain. Lightning
      enables <strong>faster</strong>, <strong>smaller</strong>, and
      <strong>cheaper payments</strong>, while not compromising on the
      properties of the settlement base layer.
    </p>
    <p>
      In fact, accepting payments over lightning can actually improve important
      aspects such as <strong>transaction privacy</strong> rather than using a static
      bitcoin address (which can be viewed by anyone). This has historically been
      the method most people have taken.
    </p>
    <p>Enough talking - <strong>let's start doing!</strong></p>
    <h2 class="jakarta text-3xl text-white font-semibold">
      STEP 1 - Get a lightning address ⚡
    </h2>
    <p>
      The first task you need to complete is getting a <strong
        >lightning address</strong
      >. This looks exactly like an e-mail address except it will allow you to
      receive lightning payments from <strong>anywhere</strong>. How cool is
      that?! 😎
    </p>
    <p>
      Head over to <a
        href="//lightningaddress.com"
        target="_blank"
        rel="noreferrer"
        class="text-white underline hover:text-hover">lightningaddress.com</a
      > and choose from one of the many providers to get your very own lightning
      address.
    </p>
    <p>
      There are lots of options to choose from, but one of the quickest and
      easiest options is <a
        href="https://getalby.com/lightning-address"
        target="_blank"
        rel="noreferrer"
        class="text-white underline hover:text-hover">Alby</a
      >. You can get setup in <strong>just a few clicks</strong>.
    </p>
    <p>
      Once you have a lightning address setup like <code
        class="inc text-white bg-code p-1">secondl1ght@getalby.com</code
      >
      you are ready to move onto the <strong>next step</strong>.
    </p>
    <p>
      <em
        >Note: You may want to use a VPN or Tor and a private e-mail address to
        protect your identity when using bitcoin, and avoid using platforms that
        ask for too much information if possible.</em
      >
    </p>
    <h2 class="jakarta text-3xl text-white font-semibold">
      STEP 2 - Add your lightning address to your website 👨&zwj;💻👩&zwj;💻
    </h2>
    <p>
      Now that you are able to receive bitcoin lightning payments you will want
      to <strong>display this information</strong> on your website.
    </p>
    <p>
      Of course you can simply place the address anywhere on your site and
      instruct users to send you sats if they would like to, but I will explain
      a couple of ways to <strong>integrate</strong> even further into your website.
    </p>
    <h3 class="jakarta text-2xl text-white font-semibold">
      WebLN and Alby 🐝 meta tags
    </h3>
    <ul class="list-disc pl-5">
      <li>
        <p>
          <a
            href="https://www.webln.guide/introduction/readme"
            target="_blank"
            rel="noreferrer"
            class="text-white underline hover:text-hover">WebLN</a
          >
          is a
          <strong>standard</strong> for integrating bitcoin lightning with the web.
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://getalby.com/"
            target="_blank"
            rel="noreferrer"
            class="text-white underline hover:text-hover">Alby</a
          >
          is a
          <strong>bitcoin lightning browser extension</strong>
          that allows anyone to easily send and receive bitcoin on the web and interact
          <strong>dynamically</strong> with certain websites (your website will now
          be one of them!).
        </p>
      </li>
    </ul>
    <p>
      Place the following <code class="inc text-white bg-code p-1"
        >&lt;meta&gt;</code
      >
      tags into the
      <code class="inc text-white bg-code p-1">&lt;head&gt;</code> of your HTML.
    </p>
    <pre class="inc text-white bg-code p-5 overflow-auto"><code
        >&lt;meta name="lightning" content="lnurlp:secondl1ght@getalby.com"&gt;
&lt;meta property="alby:image" content="/images/avatar.png"&gt;
</code></pre>
    <p>
      <strong>Replace</strong>
      <code class="inc text-white bg-code p-1">secondl1ght@getalby.com</code>
      with your own lightning address that you created above in
      <strong>STEP 1</strong>.
    </p>
    <p>
      <strong>Replace</strong>
      <code class="inc text-white bg-code p-1">/images/avatar.png</code>
      with the path to an <strong>image</strong> you would like displayed to Alby
      users when they send you sats.
    </p>
    <p>
      Here is how the Alby browser extension looks normally when navigating the
      web:<br /><img
        alt="alby icon yellow"
        class="mx-auto"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--jpGLaejM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vxj4z983jrghofjba88t.png"
      />
    </p>
    <p>
      When Alby users navigate to your website after you enter the <code
        class="inc text-white bg-code p-1">&lt;meta&gt;</code
      >
      tags, Alby will <strong>turn blue</strong> like this:<br /><img
        alt="alby icon blue"
        class="mx-auto"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--MO4Vs_Qn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/blve876c9mny0rs2sw1j.png"
      />
    </p>
    <p>
      This will <strong>notify users</strong> that your website accepts lightning
      payments natively.
    </p>
    <p>
      They can now click on the Alby icon and <strong>send you bitcoin</strong>
      just like this:<br /><img
        alt="alby send sats screen"
        class="mx-auto"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--11tXLqAq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/06hi8fthucqyz6dyzvul.png"
      />
    </p>
    <h3 class="jakarta text-2xl text-white font-semibold">Tipping widget</h3>
    <p>
      Another option is to add an <strong>easy to use tipping widget</strong>
      directly on your website. Luckily a cool bitcoin developer named
      <a
        href="https://github.com/reneaaron"
        target="_blank"
        rel="noreferrer"
        class="text-white underline hover:text-hover">René Aaron</a
      > has made this possible!
    </p>
    <p>
      Visit the website <a
        href="//widgets.twentyuno.net"
        target="_blank"
        rel="noreferrer"
        class="text-white underline hover:text-hover">widgets.twentyuno.net</a
      >
      and <strong>follow the instructions</strong> to create your very own
      bitcoin lightning tipping widget. You can <strong>customize</strong> the
      colors, avatar, and message to make it look how you want. Here is an
      <strong>example</strong>:<br /><img
        alt="example tipping widget"
        class="mx-auto"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--I-0WkNFY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5itzc4v67x502efcjjnd.png"
      /><br />When you are ready you can add
      <strong>a few lines of code</strong>
      that are provided into the HTML of your website and your new bitcoin lightning
      widget will be <strong>operational</strong>. The code looks like this:
    </p>
    <pre class="inc text-white bg-code p-5 overflow-auto"><code
        >&lt;lightning-widget name="" accent="#20c997" to="reneaaron@getalby.com" image="https://secure.gravatar.com/avatar/07e22939e7672b38c56615068c4c715f?size=200&amp;default=mm&amp;rating=g" /&gt;
&lt;script src="https://embed.twentyuno.net/js/app.js"&gt;&lt;/script&gt;
</code></pre>
    <h2 class="jakarta text-3xl text-white font-semibold">
      STEP 3 - Watch the sats stream in! 🥳
    </h2>
    <p>
      Once you have your lightning address setup on your website, you just have
      to wait for users to <strong>discover it</strong> and send you some sats
      if they would like to <strong>support your work</strong>.
    </p>
    <p>
      You can <strong>view your balance</strong>, incoming
      <strong>payments</strong>, and <strong>withdraw</strong> your funds with
      whichever <strong>wallet</strong> you chose to setup your lightning
      address in <strong>STEP 1</strong>.
    </p>
    <p>
      You can either <strong>HODL</strong> those newly acquired bitcoin or start
      sending and spending them yourself to complete the bitcoin
      <strong>circular economy</strong>!
    </p>
    <p>
      If you chose Alby as your wallet then here is a <strong>directory</strong>
      of WebLN websites that you can <strong>interact</strong> with:
      <a
        href="https://makers.bolt.fun"
        target="_blank"
        rel="noreferrer"
        class="text-white underline hover:text-hover">makers.bolt.fun</a
      >. One example would be to fund crowdfunding initiatives you find valuable
      on
      <a
        href="https://geyser.fund/"
        target="_blank"
        rel="noreferrer"
        class="text-white underline hover:text-hover">Geyser</a
      >.
    </p>
    <h3 class="jakarta text-2xl text-white font-semibold">That's it!</h3>
    <p>
      <strong>Thanks for reading</strong> and I hope you found this information useful.
      If you have any questions, feel free to reach out or reply to this post.
    </p>
    <p>
      If you are <strong>new to bitcoin</strong> and want to
      <strong>learn more</strong>
      there are a <strong>ton of resources</strong> online but a good place to
      start might be
      <a
        href="https://bitcoin.org"
        target="_blank"
        rel="noreferrer"
        class="text-white underline hover:text-hover">bitcoin.org</a
      >. Some good topics to research would be <strong>self-custody</strong>,
      <strong>running a node</strong>, and
      <strong>privacy best practices</strong>.
    </p>
    <p>Happy stacking 🙂</p>
    <h2 class="jakarta text-3xl text-white font-semibold">₿</h2>
  </div>
</BlogPost>
