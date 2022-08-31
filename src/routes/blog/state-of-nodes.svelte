<script>
  import "../../blogpost.css";
  import { BlogPost } from "$comp";
</script>

<svelte:head>
  <title>secondl1ght - blog</title>
  <meta
    name="description"
    content="The state of bitcoin (plug and play) nodes 🌐"
  />
  <meta
    property="og:image"
    content="https://www.secondl1ght.site/images/nodes.png"
  />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="secondl1ght - blog" />
  <meta
    property="twitter:description"
    content="The state of bitcoin (plug and play) nodes 🌐"
  />
  <meta
    property="twitter:image"
    content="https://www.secondl1ght.site/images/nodes.png"
  />
</svelte:head>

<BlogPost
  title="The state of bitcoin (plug and play) nodes 🌐"
  image="nodes"
  description="Everyone can run a bitcoin full node, and you should too!"
  date="Aug 23, 2022"
>
  <div
    id="blog-content"
    class="ibm text-lg space-y-5 text-secondary w-full md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto !leading-normal"
  >
    <p>
      While it may sound complicated at first, the bitcoin node software space
      has come a long way over the past few years. There are <strong
        >many options</strong
      >
      to choose from to get <strong>connected to the bitcoin network</strong> and
      begin syncing the blockchain in minutes.
    </p>

    <p>
      You may be wondering why someone would want to run their own node. The
      main reason for doing this is to <strong>validate</strong> that the
      bitcoin you hold in your wallet actually exist. This sounds alarming, but
      you cannot verify this fact unless you have a copy of the
      <strong>blockchain history yourself</strong>. While it is unlikely that
      the bitcoin you hold is 'fake bitcoin', the reality is: if you are using a
      wallet that is connected to somebody else's node, then you are trusting
      them with the <strong>authenticity of your funds</strong>. A good way to
      think of it is:
    </p>

    <blockquote>
      <p>
        'If my bitcoin live on the blockchain, then I should probably have a
        copy of that ledger to make sure they are there.' - a humble stacker 🤠
      </p>
    </blockquote>

    <p>Other reasons for running your own node are:</p>

    <ul class="space-y-5">
      <li>
        <p>
          <strong>greatly improved privacy</strong> (if you use a public node
          you expose your <strong>IP address</strong> and <strong>XPUB</strong>
          to whoever is offering this service. this can be used to
          <strong>view all</strong>
          of your funds associated with a wallet and potentially
          <strong>link them</strong> to your identity.)
        </p>
      </li>
      <li>
        <p>
          <strong>have a voice</strong> during bitcoin protocol upgrades (the
          bitcoin protocol is <strong>continually under development</strong>,
          you may agree or disagree with some of the proposed changes. by
          running a node <strong>you get to choose</strong> which version of bitcoin
          you want to support in these situations.)
        </p>
      </li>
      <li>
        <p>
          <strong>become censorship resistant</strong> (<a
            target="_blank"
            rel="noreferrer"
            href="https://nakamotoinstitute.org/trusted-third-parties/"
            >trusted third parties are security holes</a
          >. by running a full node you are
          <strong>guaranteed to have access</strong>
          to the <strong>bitcoin network anytime</strong> and
          <strong>without asking for permission</strong>. you get to choose when
          you want to <strong>broadcast a transaction</strong>.)
        </p>
      </li>
      <li>
        <p>
          <strong>decentralize the network</strong> (<strong>help</strong> make
          it <strong>impossible to shutdown</strong> bitcoin by adding a node to
          the <strong>distributed network</strong> of peers that are
          communicating <strong>across the globe</strong>. another
          <strong>small beacon of freedom</strong>
          will come online and <strong>discover</strong> others who speak the same
          language.)
        </p>
      </li>
    </ul>

    <p>
      Connecting to the bitcoin network is an <strong>exciting</strong> and
      <strong>rewarding</strong>
      experience. Even though it is all code - there is something
      <strong>magical</strong>
      about bringing a new node online and
      <strong>joining in the decentralized revolution</strong>. There are
      <strong>thousands</strong>
      of nodes ready to sync with you their copy of the
      <strong>immutable bitcoin history</strong>, all the way back to the
      game-changing
      <a
        target="_blank"
        rel="noreferrer"
        href="https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
        >Genesis Block</a
      >.
    </p>

    <p>
      The fact that you can verify <strong>every single transaction</strong> on
      a <strong>global permissionless financial network</strong> that settles
      billions of dollars of value a day, on <strong>consumer grade</strong>
      hardware, for <strong>a few hundred dollars</strong>, and run this
      <strong>anywhere in the world</strong>, is an <strong>incredible</strong> networking
      and human ingenuity feat to behold.
    </p>

    <p>
      So what are you waiting for? Feel the sparks fly and plug in <strong
        >YOUR node</strong
      > today!
    </p>

    <p>
      I have put together a list of <strong>easy to use</strong> bitcoin node
      options for anyone looking to <strong>get started</strong>. For each
      option I have included some basic information, but I have also provided
      links to the projects so that you can <strong>DYOR</strong> and decide for
      yourself which plug and play node you would like to
      <strong>use and support</strong>. Each node should have a
      <strong>guide</strong>
      and some kind of <strong>support channel</strong> to help you get up and running
      seamlessly.
    </p>

    <p>
      Some of these projects offer more than just a bitcoin core node with
      additional services like a <strong>lightning node</strong>,
      <strong>coinjoin software</strong>, and other useful
      <strong>bitcoin applications</strong>. Also many of these projects
      <strong>run over Tor</strong>
      by default, so you will have <strong>good privacy</strong> features right out
      of the box.
    </p>

    <p>
      I have listed these in <strong>alphabetical order</strong>. Please note
      that many of the options with prices also offer a free
      <strong>DIY</strong>
      version. Lastly, many of these projects are <strong>open source</strong>
      and are open to <strong>contributors</strong>.
    </p>

    <p>
      <img
        src="/images/blog/state-of-nodes/0.jpeg"
        alt="citadel"
        loading="lazy"
        width="300"
        height="300"
      />
    </p>

    <h2>Citadel</h2>

    <p>
      <a target="_blank" rel="noreferrer" href="https://runcitadel.space/"
        >runcitadel.space</a
      ><br />
      <strong>Price: Free or donation (hardware not included)</strong><br />
      This is a great open source project with a nice user-interface, it also has
      good documentation for installing on a Raspberry Pi or on any computer running
      Linux.
    </p>

    <p>
      <img
        src="/images/blog/state-of-nodes/1.jpeg"
        alt="mynode"
        loading="lazy"
        width="300"
        height="300"
      />
    </p>

    <h2>myNode</h2>

    <p>
      <a target="_blank" rel="noreferrer" href="https://mynodebtc.com/"
        >mynodebtc.com</a
      ><br />
      <strong>Price: $429 USD</strong><br />
      One of the oldest plug and play node projects, myNode has a loyal user-base
      and may be the easiest option out there.
    </p>

    <p>
      <img
        src="/images/blog/state-of-nodes/2.jpeg"
        alt="nodl"
        loading="lazy"
        width="300"
        height="300"
      />
    </p>

    <h2>nodl</h2>

    <p>
      <a target="_blank" rel="noreferrer" href="https://www.nodl.it/"
        >www.nodl.it</a
      ><br />
      <strong>Price: $529 USD</strong><br />
      Another project that has been around for a while, nodl has an extra focus on
      security with features like full disk encryption and a killswitch.
    </p>

    <p>
      <img
        src="/images/blog/state-of-nodes/4.jpeg"
        alt="raspiblitz"
        loading="lazy"
        width="300"
        height="300"
      />
    </p>

    <h2>RaspiBlitz</h2>

    <p>
      <a target="_blank" rel="noreferrer" href="https://raspiblitz.org/"
        >raspiblitz.org</a
      ><br />
      <strong>Price: €369 EUR</strong><br />
      The RaspiBlitz is a pillar in the bitcoin node space and they have recently
      added a web interface.
    </p>

    <p>
      <img
        src="/images/blog/state-of-nodes/3.jpeg"
        alt="ronindojo"
        loading="lazy"
        width="300"
        height="300"
      />
    </p>

    <h2>RoninDojo</h2>

    <p>
      <a target="_blank" rel="noreferrer" href="https://ronindojo.io/"
        >ronindojo.io</a
      ><br />
      <strong>Price: $599 USD</strong><br />
      Privacy maximalists will love the folks building this software, they are connected
      with the Samourai Wallet crew and take no shortcuts in creating this privacy-focused
      offering.
    </p>

    <p>
      <img
        src="/images/blog/state-of-nodes/5.jpeg"
        alt="embassy"
        loading="lazy"
        width="300"
        height="300"
      />
    </p>

    <h2>Start9 (Embassy)</h2>

    <p>
      <a target="_blank" rel="noreferrer" href="https://start9.com/latest/"
        >start9.com</a
      ><br />
      <strong>Price: $539 USD</strong><br />
      A fully custom operating system backs the Embassy personal server that your
      bitcoin core node will be running on.
    </p>

    <p>
      <img
        src="/images/blog/state-of-nodes/6.jpeg"
        alt="umbrel"
        loading="lazy"
        width="300"
        height="300"
      />
    </p>

    <h2>Umbrel</h2>

    <p>
      <a target="_blank" rel="noreferrer" href="https://umbrel.com/"
        >umbrel.com</a
      ><br />
      <strong>Price: Free (hardware not included)</strong><br />
      Likely the most popular DIY node software out there, Umbrel has brought more
      awareness to the importance of self-hosting.
    </p>

    <hr />

    <p>
      As you can see there are <strong>many great options</strong> to
      <strong>easily run</strong> a bitcoin full node. If I missed any projects
      please let me know. Once you have your node
      <strong>up and running</strong>
      don't forget to <strong>connect it</strong> to whichever
      <strong>wallets</strong> you are using.
    </p>

    <p>
      For more detailed information about bitcoin core you can check out these
      useful links:<br />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://bitcoin.org/en/bitcoin-core/"
        >bitcoin.org/en/bitcoin-core</a
      > <br />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://bitcoin.org/en/full-node">bitcoin.org/en/full-node</a
      ><br />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://bitcoin.org/en/posts/how-to-run-a-full-node"
        >bitcoin.org/en/posts/how-to-run-a-full-node</a
      >
    </p>

    <p>
      <strong>Thanks</strong> so much for reading and I hope this article will
      inspire you to: <strong>'don't trust, verify!'</strong>. 🕵️‍♂️🕵️‍♀️
    </p>
  </div>
</BlogPost>

<style>
  #blog-content img {
    margin: 60px 0px 20px 0px;
  }
</style>
