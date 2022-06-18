<script>
  export let slug;
  export let title;
  export let tags;
  export let excerpt;
</script>

<li>
  <a href={`/${slug}/`} class:title>
    {title}
  </a>{" "}
  {excerpt && `- ${excerpt} `}
  {#each tags as tag}
    <a href={`/tag/${tag}/`}>{`#${tag}`}</a>&nbsp;
  {/each}
</li>

<style>
  .title {
    font-weight: bold;
  }
</style>
