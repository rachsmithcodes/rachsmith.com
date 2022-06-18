<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  export let page;
  export let tags;
</script>

<div class="container">
  <Header {page} />
  <main class="">
    <slot />
  </main>
  <Footer {tags} />
</div>
