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
    <ul>
      {group.map((tag) => (
        <li key={tag.fieldValue} className="inline-block mr-4">
          <Link to={`/tag/${tag.fieldValue}/`} className="no-underline">
            <span className="text-sm">#</span>
            <span className="underline">{tag.fieldValue}</span>
          </Link>
          <span className="text-sm pl-1">{tag.totalCount}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
