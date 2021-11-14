import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function note({ data: { mdx }, pageContext: { references } }) {
  return (
    <Layout page="note">
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
      <section className="p-5 border-b">
        <h3 className="font-headings text-xl">Comments</h3>
        <TalkyardCommentsIframe />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        title
        added
        updated
        tags
      }
      body
    }
  }
`;
