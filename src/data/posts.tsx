import 'astro/jsx-runtime';

export function postsAndTags(allPosts) {
  const posts = sortedPosts(allPosts);
  const tags = postTags(posts);
  return { allPosts: posts, allTags: tags };
}

function sortedPosts(allPosts) {
  allPosts = allPosts.sort((a, b) => {
    return new Date(b.frontmatter.added) - new Date(a.frontmatter.added);
  });
  return allPosts;
}

function postTags(posts) {
  return posts.reduce((allTags, post) => {
    const postTags = post.frontmatter.tags;
    if (postTags) {
      postTags.forEach((tag) => {
        if (!allTags[tag]) {
          allTags[tag] = [];
        }
        allTags[tag].push(post);
      });
    }
    return allTags;
  }, {});
}
