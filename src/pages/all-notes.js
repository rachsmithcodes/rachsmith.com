import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NoteListItem from '../components/NoteListItem';

const AllNotes = ({ data }) => {
  return (
    <Layout page="page">
      <Seo title="All Notes" />
      <div className="p-5">
        <h1 className="mb-3 uppercase tracking-wide">All Notes</h1>
        <ul>
          {data.allMdx.edges.map(
            ({
              node: {
                fields: { excerpt, slug, title, tags },
              },
            }) => (
              <NoteListItem
                key={slug}
                excerpt={excerpt}
                slug={slug}
                title={title}
                tags={tags}
              />
            )
          )}
        </ul>
      </div>
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
            tags
          }
        }
      }
    }
  }
`;

export default AllNotes;
