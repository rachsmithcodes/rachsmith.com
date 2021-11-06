import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

export default function note({ data: { mdx }, pageContext: { references } }) {
  return (
    <Layout>
      <article>
        <h1 className="text-5xl mb-5">{mdx.fields.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <section>
          <h3>Referenced by:</h3>
          <ul>
            {references.map(({ slug, title }) => {
              return (
                <li key={slug}>
                  <Link to={`/$slug}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        title
      }
      body
    }
  }
`;
