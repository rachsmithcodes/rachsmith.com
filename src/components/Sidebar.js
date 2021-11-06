import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Tags from './Tags';

const Sidebar = ({ siteTitle }) => (
  <aside className="min-w-max p-5">
    <h1 className="text-3xl mb-5">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Tags />
  </aside>
);

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  siteTitle: ``,
};

export default Sidebar;
