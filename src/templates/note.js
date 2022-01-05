import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';
import Seo from '../components/Seo';
import NoteListItem from '../components/NoteListItem';

function formatDate(date) {
  return new Date(date.replace(/-/g, '/')).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function note({ data: { mdx }, pageContext: { references } }) {
  return (
    <Layout page="note">
      <Seo title={mdx.fields.title} description={mdx.fields.excerpt} />
      <article className="mb-5 border-b p-5">
        <h1 className="font-headings text-5xl mb-5 font-bold">
          {mdx.fields.title}
        </h1>
        <div className="mb-5 pt-5 pb-5">
          <p>
            <em>Added:</em> {formatDate(mdx.fields.added)}
          </p>
          {mdx.fields.updated !== mdx.fields.added && (
            <p>
              <em>Updated:</em> {formatDate(mdx.fields.updated)}
            </p>
          )}
          <p>
            <em>Tags:</em>{' '}
            {mdx.fields.tags.map((tag) => (
              <Link className="mr-2" to={`/tag/${tag}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </p>
        </div>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
      {references.length > 0 && (
        <section className="p-5 border-b">
          <h3 className="font-headings text-xl mb-3">
            Referenced by these notes
          </h3>
          <ul className="list-none">
            {references.map(({ title, slug, excerpt, tags }) => (
              <NoteListItem
                slug={slug}
                title={title}
                excerpt={excerpt}
                tags={tags}
              />
            ))}
          </ul>
        </section>
      )}
      <section className="p-5 border-b">
        <h3 className="font-headings text-xl">Comments</h3>
        <TalkyardCommentsIframe />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        title
        added
        updated
        tags
        excerpt
      }
      body
    }
  }
`;
