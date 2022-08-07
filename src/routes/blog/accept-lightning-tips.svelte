<script>
  import "../../blogpost.css";
  import { BlogPost } from "$comp";
</script>

<BlogPost
  title="How to accept bitcoin lightning tips on your website ⚡"
  image="tips"
  description="Have you ever wondered how to accept bitcoin tips on your website? Well this is the guide for you!"
  date="Aug 4, 2022"
>
  <div
    id="blog-content"
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
      <a target="_blank" rel="noreferrer" href="https://btcpayserver.org/"
        >BTCPay Server</a
      >
      or <a target="_blank" rel="noreferrer" href="https://coinos.io">CoinOS</a>
      (for in-person POS).
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

    <h2>STEP 1 - Get a lightning address ⚡</h2>

    <p>
      The first task you need to complete is getting a <strong
        >lightning address</strong
      >. This looks exactly like an e-mail address except it will allow you to
      receive lightning payments from <strong>anywhere</strong>. How cool is
      that?! 😎
    </p>

    <p>
      Head over to <a
        target="_blank"
        rel="noreferrer"
        href="https://lightningaddress.com/">lightningaddress.com</a
      > and choose from one of the many providers to get your very own lightning
      address.
    </p>

    <p>
      There are lots of options to choose from, but one of the quickest and
      easiest options is <a
        target="_blank"
        rel="noreferrer"
        href="https://getalby.com/lightning-address">Alby</a
      >. You can get setup in <strong>just a few clicks</strong>.
    </p>

    <p>
      Once you have a lightning address setup like <code
        >secondl1ght@getalby.com</code
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

    <h2>STEP 2 - Add your lightning address to your website 👨‍💻👩‍💻</h2>

    <p>
      Now that you are able to receive bitcoin lightning payments you will want
      to <strong>display this information</strong> on your website.
    </p>

    <p>
      Of course you can simply place the address anywhere on your site and
      instruct users to send you sats if they would like to, but I will explain
      a couple of ways to <strong>integrate</strong> even further into your website.
    </p>

    <h3>WebLN and Alby 🐝 meta tags</h3>

    <ul>
      <li>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.webln.guide/introduction/readme">WebLN</a
          >
          is a
          <strong>standard</strong> for integrating bitcoin lightning with the web.
        </p>
      </li>
      <li>
        <p>
          <a target="_blank" rel="noreferrer" href="https://getalby.com/"
            >Alby</a
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
      Place the following <code>&lt;meta&gt;</code> tags into the
      <code>&lt;head&gt;</code>
      of your HTML.<br />
    </p>

    <div>
      <pre><code
          >&lt;meta name="lightning" content="lnurlp:secondl1ght@getalby.com"&gt;
&lt;meta property="alby:image" content="/images/avatar.png"&gt;
</code></pre>
    </div>

    <p>
      <strong>Replace</strong> <code>secondl1ght@getalby.com</code> with your
      own lightning address that you created above in <strong>STEP 1</strong>.
    </p>

    <p>
      <strong>Replace</strong> <code>/images/avatar.png</code> with the path to
      an <strong>image</strong> you would like displayed to Alby users when they
      send you sats.
    </p>

    <p>
      Here is how the Alby browser extension looks normally when navigating the
      web:<br />
      <img
        src="/images/blog/accept-lightning-tips/0.png"
        alt="alby icon yellow"
        loading="lazy"
        width="72"
        height="32"
      />
    </p>

    <p>
      When Alby users navigate to your website after you enter the <code
        >&lt;meta&gt;</code
      >
      tags, Alby will <strong>turn blue</strong> like this:<br />
      <img
        src="/images/blog/accept-lightning-tips/1.png"
        alt="alby icon blue"
        loading="lazy"
        width="72"
        height="32"
      />
    </p>

    <p>
      This will <strong>notify users</strong> that your website accepts lightning
      payments natively.
    </p>

    <p>
      They can now click on the Alby icon and <strong>send you bitcoin</strong>
      just like this:<br />
      <img
        src="/images/blog/accept-lightning-tips/2.png"
        alt="alby send sats screen"
        loading="lazy"
        width="441"
        height="665"
      />
    </p>

    <h3>Tipping widget</h3>

    <p>
      Another option is to add an <strong>easy to use tipping widget</strong>
      directly on your website. Luckily a cool bitcoin developer named
      <a target="_blank" rel="noreferrer" href="https://github.com/reneaaron"
        >René Aaron</a
      > has made this possible!
    </p>

    <p>
      Visit the website <a
        target="_blank"
        rel="noreferrer"
        href="https://widgets.twentyuno.net/">widgets.twentyuno.net</a
      >
      and <strong>follow the instructions</strong> to create your very own
      bitcoin lightning tipping widget. You can <strong>customize</strong> the
      colors, avatar, and message to make it look how you want. Here is an
      <strong>example</strong>:<br />
      <img
        src="/images/blog/accept-lightning-tips/3.jpeg"
        alt="example tipping widget"
        loading="lazy"
        width="358"
        height="350"
      /><br />
      When you are ready you can add <strong>a few lines of code</strong> that
      are provided into the HTML of your website and your new bitcoin lightning
      widget will be <strong>operational</strong>. The code looks like this:<br
      />
    </p>

    <div>
      <pre><code
          >&lt;lightning-widget name="" accent="#20c997" to="reneaaron@getalby.com" image="https://secure.gravatar.com/avatar/07e22939e7672b38c56615068c4c715f?size=200&amp;default=mm&amp;rating=g" /&gt;
&lt;script src="https://embed.twentyuno.net/js/app.js"&gt;&lt;/script&gt;
</code></pre>
    </div>

    <h2>STEP 3 - Watch the sats stream in! 🥳</h2>

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
        target="_blank"
        rel="noreferrer"
        href="https://makers.bolt.fun/products">makers.bolt.fun</a
      >. One example would be to fund crowdfunding initiatives you find valuable
      on
      <a target="_blank" rel="noreferrer" href="https://geyser.fund">Geyser</a>.
    </p>

    <h3>That's it!</h3>

    <p>
      <strong>Thanks for reading</strong> and I hope you found this information useful.
      If you have any questions, feel free to reach out or reply to this post.
    </p>

    <p>
      If you are <strong>new to bitcoin</strong> and want to
      <strong>learn more</strong>
      there are a <strong>ton of resources</strong> online but a good place to
      start might be
      <a target="_blank" rel="noreferrer" href="https://bitcoin.org/en/"
        >bitcoin.org</a
      >. Some good topics to research would be <strong>self-custody</strong>,
      <strong>running a node</strong>, and
      <strong>privacy best practices</strong>.
    </p>

    <p>Happy stacking 🙂</p>

    <h2>₿</h2>
  </div>
</BlogPost>
