<script>
  import Tag from './Tag.svelte';
  export let slug;
  export let title;
  export let tags;
  export let excerpt;
</script>

<li>
  <a href={`/${slug}/`} class:title>{title}</a><br />
  {#if excerpt}
    <span class:excerpt>{excerpt}</span>
  {/if}
  <ul>
    {#each tags as tag}
      <li class:tag>
        <Tag {tag} small />
      </li>
    {/each}
  </ul>
</li>

<style>
  .title {
    font-weight: bold;
    color: #222;
    text-decoration: none;
  }
  .title:hover {
    text-decoration: underline;
  }

  .excerpt {
    font-size: 0.9em;
    line-height: 1;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1.2em;
    list-style: none;
    display: block;
  }

  .tag {
    display: inline-block;
  }
</style>
