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

import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Paragraph = (props) => <p className="mb-5" {...props} />;
const H1 = (props) => <p className="text-5xl mb-3 mt-3" {...props} />;
const H2 = (props) => <p className="text-4xl mb-3 mt-3" {...props} />;
const H3 = (props) => <p className="text-3xl mb-3 mt-3" {...props} />;
const H4 = (props) => <p className="text-2xl mb-3 mt-3" {...props} />;
const List = (props) => <ul className="mb-5" {...props} />;
const OrderedList = (props) => (
  <ol className="mb-5 ml-5 list-decimal" {...props} />
);

const Layout = ({ page, children }) => {
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
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      <div className="font-body container text-lg">
        <Header page={page} />
        <main className="">
          <MDXProvider
            components={{
              p: Paragraph,
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              ul: List,
              ol: OrderedList,
            }}
          >
            {children}
          </MDXProvider>
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
