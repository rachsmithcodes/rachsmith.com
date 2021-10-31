import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Layout } from '../components/common';
import { MetaData } from '../components/common/meta';
import Tag from '../components/common/Tag';
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';
import Prism from 'prismjs';

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
  const post = data.ghostPost;
  const tagSlug = post.primary_tag.slug;
  const tags = data.allGhostTag.edges.map((edge) => edge.node);

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <Layout tags={tags}>
        <div className="container">
          <article className="content">
            {post.feature_image ? (
              <figure className="post-feature-image">
                <img src={post.feature_image} alt={post.title} />
              </figure>
            ) : null}
            <section className="post-full-content">
              <h1 className="content-title">{post.title}</h1>
              <div className="post-meta">
                <p className="content-date">{post.published_at_pretty}</p>
                <p>
                  Tagged:{' '}
                  {post.tags.map((tag, i) => (
                    <Fragment key={tag.slug}>
                      <Tag tag={tag} noBorder />
                      {i < post.tags.length - 1 && <>, </>}
                    </Fragment>
                  ))}
                </p>
              </div>
              {/* The main post content */}
              {tagSlug === 'podcasts' && (
                <section className="post-tag-intro">
                  I listen to a lot of podcasts. When one makes a personal
                  impact or gets me thinking I share those thoughts here.
                </section>
              )}
              <section
                className="content-body load-external-scripts"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <TalkyardCommentsIframe />
            </section>
          </article>
        </div>
      </Layout>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      published_at_pretty: PropTypes.string,
    }).isRequired,
    allGhostTag: PropTypes.object,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
    allGhostTag {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`;
