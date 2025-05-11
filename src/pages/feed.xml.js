import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import * as marked from 'marked';

const notes = await getCollection('notes');

const notesWithContent = await Promise.all(
  notes.map(async (note) => {
    let rawContent = note.body;

    const titleEncoded = encodeURIComponent(`re: ${note.data.title}`);

    let html = marked.parse(rawContent);

    html += `
      <hr />
      <p>Thanks for reading this post via RSS! Let me know your thoughts by leaving a comment on the <a href="https://rachsmith.com/${note.id}">original post</a> or send <a href="mailto:contact@rachsmith.com?subject=${titleEncoded}">me an email</a>.</p>
      `;

    return {
      ...note,
      htmlContent: html,
    };
  }),
);

notesWithContent.sort((a, b) => {
  return new Date(b.data.added) - new Date(a.data.added);
});

const notesToRender = notesWithContent.slice(0, 20);

export function GET(context) {
  return rss({
    title: "Rach Smith's digital garden",
    description:
      "Hi 👋🏼 I'm Rach. A developer building software for CodePen, wife, mother of two, productivity nerd and recovering screen addict. This is my digital garden.",
    site: context.site,
    items: notesToRender.map((note) => {
      const categoryTags = note.data.tags
        .map((tag) => `<category><![CDATA[${tag}]]></category>`)
        .join('');
      return {
        link: `/${note.id}`,
        title: note.data.title,
        pubDate: note.data.added,
        description: note.htmlContent,
        customData: categoryTags,
      };
    }),
    stylesheet: '/rss-styles.xsl',
  });
}
