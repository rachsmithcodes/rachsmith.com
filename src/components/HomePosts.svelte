<script>
  import NoteListItem from './NoteListItem.svelte';
  import OutlineHeading from './OutlineHeading.svelte';
  import Section from './Section.svelte';

  export let allPosts;
  let homepageNoteSlugs = [
    'learning-how-you-best-learn-some-questions-to-ask-yourself',
    'we-confuse-visibility-with-competency',
    'avoiding-when-then-thinking-versus-respecting-your-season',
    'matching-pantry-containers',
    'the-reason-caring-for-babies-and-toddlers-can-be-so-maddening',
    'dont-ask-me-im-a-guesser',
    'i-completely-ignored-the-front-end-development-scene-for-6-months',
  ];
  let homepageNotes = homepageNoteSlugs.map((slug) =>
    allPosts.find((note) => note.frontmatter.slug === slug)
  );
</script>

<div class="">
  <OutlineHeading>Try these</OutlineHeading>
  <Section>
    <ul class="">
      {#each homepageNotes as note}
        <NoteListItem
          url={note.url}
          slug={note.frontmatter.slug}
          title={note.frontmatter.title}
          tags={note.frontmatter.tags}
          excerpt={note.frontmatter.excerpt}
        />
      {/each}
    </ul>
  </Section>
</div>

<style>
  ul {
    padding: 0;
  }
</style>
