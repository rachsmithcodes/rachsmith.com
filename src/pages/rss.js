import rss from '@astrojs/rss';
import * as marked from 'marked';

const postImportResult = import.meta.globEager('../notes/**/*.md');
const posts = Object.values(postImportResult);

const postsWithContent = await Promise.all(
  posts.map(async (post) => {
    let rawContent = await post.rawContent();

    const titleEncoded = encodeURIComponent(`re: ${post.frontmatter.title}`);
    const tweetTextEncoded = encodeURIComponent(
      `re: https://olek.works/${post.frontmatter.slug}`
    );

    let html = marked.parse(rawContent);

    html += `
      <hr />
      <p>Thanks for reading this post via RSS! Let me know your thoughts by leaving a comment on the <a href="https://olek.works/${post.frontmatter.slug}">original post</a>, send <a href="mailto:hi@olek.works?subject=${titleEncoded}">me an email</a>, or <a href="https://twitter.com/intent/tweet?screen_name=rachsmithtweets&text=${tweetTextEncoded}">Tweet at me</a>.</p>
      `;

    return {
      ...post,
      htmlContent: html,
    };
  })
);

postsWithContent.sort((a, b) => {
  return new Date(b.frontmatter.added) - new Date(a.frontmatter.added);
});

const postsToRender = postsWithContent.slice(0, 20);

export const get = () =>
  rss({
    title: "Rach Smith's digital garden",
    description:
      "Hi 👋🏼 I'm Rach. A developer building software for CodePen, wife, mother of two, productivity nerd and recovering screen addict. This is my digital garden.",
    site: import.meta.env.SITE,
    items: postsToRender.map((post, i) => {
      const categoryTags = post.frontmatter.tags
        .map((tag) => `<category><![CDATA[${tag}]]></category>`)
        .join('');
      return {
        link: post.frontmatter.slug,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.added,
        description: post.htmlContent,
        customData: categoryTags,
      };
    }),
    // customData: `<atom:link href="https://olek.works/rss/" rel="self" type="application/rss+xml" />`,
    xmlns: {
      // atom: 'http://www.w3.org/2005/Atom',
    },
  });
