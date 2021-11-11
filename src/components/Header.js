import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Tags from './Tags';

const Header = ({ siteTitle }) => (
  <section className="p-5">
    <h1 className="text-3xl mb-5">
      <Link to="/">{siteTitle}</Link>
    </h1>
    {/* <Tags /> */}
  </section>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
