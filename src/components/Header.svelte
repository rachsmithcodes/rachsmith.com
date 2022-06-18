<script>
  export let page;
</script>

<section class="">
  {#if page === "home"}
    <p>
      Hi 👋🏼 &nbsp;I'm Rach. A{" "}
      <a href="/full-stack-t-shaped-comb-shaped-developer-or-engineer/">
        developer
      </a>{" "}
      building software for CodePen, wife, mother of two, productivity nerd and recovering
      screen addict. This is my digital garden.
    </p>
    <p>
      I am in process of redesigning this website in public. It has been
      stripped back to the bare minimum and I will make gradual improvements as
      time goes on. You can follow the changes or suggest your own at the{" "}
      <a href="https://github.com/rachsmithcodes/rachsmith.com">GitHub repo</a>.
    </p>
    <p>
      <a href="/all-notes/"> See all the notes </a>&nbsp;
      <a
        href="https://feedly.com/i/subscription/feed/https://rachsmith.com/rss/"
      >
        Subscribe to RSS feed
      </a>
    </p>
  {/if}

  {#if page == "page"}
    <h2 class="mb-5">
      <a href="/"> Rach Smith's digital garden </a>
      .
    </h2>
  {/if}

  {#if page == "note"}
    <h2 class="mb-5">
      A note from <a href="/">Rach Smith's digital garden</a>.
    </h2>
  {/if}
</section>
