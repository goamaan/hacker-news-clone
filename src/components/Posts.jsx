import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { fetchMainPosts } from '../utils/api';
import PostsList from './PostsList';

class Posts extends Component {
  state = {
    posts: null,
    error: null,
    loading: true,
  };

  static propTypes = {
    type: PropTypes.oneOf(['top', 'new']),
  };

  componentDidMount() {
    this.handleFetch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.type !== this.props.type) {
      this.handleFetch();
    }
  }

  handleFetch() {
    this.setState({
      posts: null,
      error: null,
      loading: true,
    });

    fetchMainPosts(this.props.type)
      .then((posts) =>
        this.setState({
          posts: posts,
          error: null,
          loading: false,
        })
      )
      .catch((message) =>
        this.setState({
          error: message,
          loading: false,
        })
      );
  }

  render() {
    const { posts, error, loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }
    if (error) {
      return <p className="center-text error">{error}</p>;
    }
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}

export default Posts;
