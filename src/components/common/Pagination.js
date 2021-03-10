import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Pagination = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext;

  return (
    <nav className="pagination" role="navigation">
      <div>
        {previousPagePath && (
          <Link
            to={previousPagePath}
            rel="prev"
            className="pagination-link later-posts"
          >
            &laquo; Later Posts
          </Link>
        )}
      </div>
      {numberOfPages > 1 && (
        <div className="pagination-location">
          Page {humanPageNumber} of {numberOfPages}
        </div>
      )}
      <div>
        {nextPagePath && (
          <Link
            to={nextPagePath}
            rel="next"
            className="pagination-link earlier-posts"
          >
            Earlier Posts &raquo;
          </Link>
        )}
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Pagination;
