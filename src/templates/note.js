import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

export default function note({ data: { mdx }, pageContext: { references } }) {
  return (
    <Layout page="note">
      <article className="mb-5 border-b text-xl p-5">
        <h1 className="text-5xl mb-5">{mdx.fields.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
      <section className="p-5">
        <h3 className="font-headings">Comments</h3>
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
      }
      body
    }
  }
`;
