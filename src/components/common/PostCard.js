import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { readingTime as readingTimeHelper } from '@tryghost/helpers';
import Tag from './Tag';

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`;
  const readingTime = readingTimeHelper(post);
  return (
    <Link to={url} className="post-card">
      <header className="post-card-header">
        <div className="post-card-date">{post.published_at_pretty}</div>
        <h2 className="post-card-title">{post.title}</h2>
        <div className="post-card-meta">
          {post.tags && (
            <div className="post-card-tags">
              {post.tags.map((tag) => (
                <Tag key={tag.slug} tag={tag} />
              ))}
            </div>
          )}
          <div className="post-card-reading-time">
            <div>{readingTime}</div>
          </div>
        </div>
      </header>
      <section className="post-card-excerpt">{post.excerpt}</section>
    </Link>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
    published_at_pretty: PropTypes.string,
  }).isRequired,
};

export default PostCard;
