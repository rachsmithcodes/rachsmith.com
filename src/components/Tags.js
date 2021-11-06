import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

const Tags = () => {
  const {
    allMdx: { group },
  } = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  return (
    <section>
      <h3>Tags</h3>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tag/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tags;
