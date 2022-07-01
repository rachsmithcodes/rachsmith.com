<script>
  export let tag;
</script>

<a href={`/tag/${tag}/`} class={`tag ${tag} ${$$props.class}`}>
  {tag}
</a>

<style>
  .tag {
    color: #000;
    text-decoration: none;
    position: relative;
    padding-left: 1em;
    text-transform: lowercase;
    display: inline-block;
  }

  .tag:hover {
    text-decoration: underline;
  }

  .tag::before {
    transition: 0.2s ease-out;
    content: '✰';
    left: 0;
    position: absolute;
  }

  .tag:hover::before {
    transform: scale(1.3) rotate(24deg);
  }

  .tag.books {
    text-shadow: 1px -1px 0 #ff1900;
  }

  .tag.development {
    text-shadow: 1px -1px 0 #ff8800;
  }

  .tag.miscellany {
    text-shadow: 1px -1px 0 #d8ff00;
  }

  .tag.mothering {
    text-shadow: 1px -1px 0 #00ff2e;
  }

  .tag.podcasts {
    text-shadow: 1px -1px 0 #00ddff;
  }

  .tag.productivity {
    text-shadow: 1px -1px 0 #057dff;
  }

  .tag.wellbeing {
    text-shadow: 1px -1px 0 #d400ff;
  }

  .tag.work {
    text-shadow: 1px -1px 0 #ff008c;
  }
</style>
