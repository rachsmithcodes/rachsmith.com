import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Tag from './Tag';

import config from '../../utils/siteConfig';

// Styles
import '../../styles/app.css';

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome, tags }) => {
  const site = data.allGhostSettings.edges[0].node;

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="viewport">
        <div className="sidebar">
          <header className="site-head">
            <Link to="/">
              {site.logo ? (
                <img className="site-logo" src={site.logo} alt={site.title} />
              ) : (
                <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
              )}
            </Link>
            <h3 className="tags-heading">Tags</h3>
            <ul className="tags">
              {tags.map((tag) => (
                <li key={tag.slug}>
                  <Tag tag={tag} />
                </li>
              ))}
            </ul>
            <a
              className="rss-feed"
              href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              RSS
            </a>
          </header>
        </div>
        <div className="site">
          <main className="site-main">
            {isHome ? (
              <p className="bio">
                Hi 👋🏼 I&apos;m Rach. A developer building software for{' '}
                <a href="https://codepen.io">CodePen</a>, wife, mother of two,
                productivity nerd and revovering screen addict. This is my blog.
              </p>
            ) : null}
            {/* All the main content gets inserted here, index.js, post.js */}
            {children}
          </main>
          <footer className="site-foot">
            <p>
              If you&apos;d like to connect, feel free send an email to contact
              at rachsmith dot com.
            </p>
            <Link to="/">{site.title}</Link> © 2020
          </footer>
        </div>
      </div>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object),
};

const DefaultLayoutSettingsQuery = (props) => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
        file(relativePath: { eq: "ghost-icon.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => <DefaultLayout data={data} {...props} />}
  />
);

export default DefaultLayoutSettingsQuery;
