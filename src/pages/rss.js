import rss from '@astrojs/rss';
import * as marked from 'marked';

const postImportResult = import.meta.globEager('../notes/**/*.md');
const posts = Object.values(postImportResult);

const postsWithContent = await Promise.all(
  posts.map(async (post) => {
    const rawContent = await post.rawContent();
    let html = marked.parse(rawContent);
    html =
      `<img class="webfeedsFeaturedVisual" src="https://rachsmith.com/feedly-nothing.png" />` +
      html;

    return {
      ...post,
      htmlContent: html,
    };
  })
);

postsWithContent.sort((a, b) => {
  return new Date(b.frontmatter.added) - new Date(a.frontmatter.added);
});

export const get = () =>
  rss({
    title: "Rach Smith's digital garden",
    description:
      "Hi 👋🏼 I'm Rach. A developer building software for CodePen, wife, mother of two, productivity nerd and recovering screen addict. This is my digital garden.",
    site: import.meta.env.SITE,
    items: postsWithContent.map((post, i) => {
      const contentTag = `<content:encoded><![CDATA[${post.htmlContent}]]></content:encoded>`;
      const categoryTags = post.frontmatter.tags
        .map((tag) => `<category><![CDATA[${tag}]]></category>`)
        .join('');
      return {
        link: post.frontmatter.slug,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.added,
        description: post.frontmatter.excerpt,
        customData: contentTag + categoryTags,
      };
    }),
    customData: `<atom:link href="https://rachsmith.com/rss/" rel="self" type="application/rss+xml" />`,
    xmlns: {
      dc: 'http://purl.org/dc/elements/1.1/',
      content: 'http://purl.org/rss/1.0/modules/content/',
      atom: 'http://www.w3.org/2005/Atom',
    },
  });
