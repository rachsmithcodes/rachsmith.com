<script>
  import Tag from './Tag.svelte';

  export let tags;
  let tagsSorted = tags ? Object.keys(tags).sort() : [];
</script>

<ul class="tags">
  {#each tagsSorted as tag}
    <li>
      <Tag {tag} />
      <span class="">{tags[tag].length}</span>
    </li>
  {/each}
</ul>

<style>
  .tags {
    text-align: center;
  }

  .tags li {
    display: inline-block;
    margin-right: 1em;
  }
</style>
