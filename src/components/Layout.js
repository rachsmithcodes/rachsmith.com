/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import Sidebar from './Sidebar';

const Paragraph = (props) => <p className="mb-5" {...props} />;
const H1 = (props) => <p className="text-5xl mb-5" {...props} />;
const H2 = (props) => <p className="text-4xl mb-5" {...props} />;
const H3 = (props) => <p className="text-3xl mb-5" {...props} />;
const H4 = (props) => <p className="text-2xl mb-5" {...props} />;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="font-sans text-lg min-h-full flex flex-col">
      <div className="flex min-h-full">
        <Sidebar siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="p-4 max-w-screen-md">
          <MDXProvider
            components={{ p: Paragraph, h1: H1, h2: H2, h3: H3, h4: H4 }}
          >
            {children}
          </MDXProvider>
        </main>
      </div>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
