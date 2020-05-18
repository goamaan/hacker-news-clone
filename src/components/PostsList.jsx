import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function PostsList({ posts }) {
  if (posts.length === 0) {
    return <p className="center-text">This user hasn't posted yet</p>;
  }

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id} className="post">
            {post.title}
          </li>
        );
      })}
    </ul>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};
