import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const AllNotes = ({ data }) => {
  console.log(data);
  return (
    <Layout page="page">
      <Seo title="All Notes" />
      <h1 className="text-xl mb-6 font-headings">All Notes</h1>
      <ul>
        {data.allMdx.edges.map(
          ({
            node: {
              fields: { added, excerpt, slug, title },
            },
          }) => (
            <li className="mb-6">
              <Link
                to={`/{slug}/`}
                className="text-black font-headings font-bold"
              >
                {title}
              </Link>{' '}
              - {excerpt}
            </li>
          )
        )}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query AllNotesQuery {
    allMdx(sort: { fields: [frontmatter___added], order: DESC }) {
      edges {
        node {
          fields {
            title
            added
            slug
            excerpt
          }
        }
      }
    }
  }
`;

export default AllNotes;
