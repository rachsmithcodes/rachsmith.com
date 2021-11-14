import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import NoteListItem from '../components/NoteListItem';

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout page="page">
      <div className="p-5 border-b">
        <h1 className="font-headings text-2xl mb-5">{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { title, slug, excerpt, tags } = node.fields;
            return (
              <NoteListItem
                key={slug}
                title={title}
                slug={slug}
                excerpt={excerpt}
                tags={tags}
              />
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tag;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___added], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            title
            excerpt
            tags
          }
        }
      }
    }
  }
`;
