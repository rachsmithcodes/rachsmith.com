<script>
  import Tag from './Tag.svelte';

  export let tags;
  let tagsSorted = tags ? Object.keys(tags).sort() : [];
</script>

<ul class="tags">
  {#each tagsSorted as tag}
    <li>
      <Tag {tag} number={tags[tag].length} />
    </li>
  {/each}
</ul>

<style>
  .tags {
    text-align: center;
    padding: 0;
  }

  .tags li {
    display: inline-block;
    margin-bottom: 0.5em;
  }
</style>
