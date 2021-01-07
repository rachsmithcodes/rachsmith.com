import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Tag = ({ tag }) => (
  <Link to={`/tag/${tag.slug}`} className={`tag tag-${tag.slug}`}>
    {tag.name}
  </Link>
);

Tag.propTypes = {
  tag: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tag;
