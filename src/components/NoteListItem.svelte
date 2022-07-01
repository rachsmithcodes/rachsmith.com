<script>
  import Tag from './Tag.svelte';
  export let slug;
  export let title;
  export let tags;
  export let excerpt;
</script>

<li>
  <a href={`/${slug}/`} class:title>{title}</a>{' '}
  {excerpt && `- ${excerpt} `}
  {#each tags as tag}
    <Tag {tag} class="smallTag" />&nbsp;
  {/each}
</li>

<style>
  .title {
    font-weight: bold;
    color: #222;
  }

  li {
    margin-bottom: 1.2em;
  }

  li :global(.smallTag) {
    font-size: 0.9em;
  }
</style>
