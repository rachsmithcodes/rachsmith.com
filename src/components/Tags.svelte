<script>
  export let tags;
  let tagsSorted = tags ? Object.keys(tags).sort() : [];
</script>

<ul>
  {#each tagsSorted as tag}
    <li class="">
      <a href={`/tag/${tag}/`} class="">
        <span class="">#</span>
        <span class="">{tag}</span>
      </a>
      <span class="">{tags[tag].length}</span>
    </li>
  {/each}
</ul>
