import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Tag = ({ tag, noLink, noBorder }) => {
  const className = `tag tag-${tag.slug}${noBorder ? ' no-border' : ''}`;
  if (noLink) return <span className={className}>{tag.name}</span>;
  
  return <Link to={`/tag/${tag.slug}`} className={className}>
    {tag.name}
  </Link>;
};

Tag.propTypes = {
  tag: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tag;
