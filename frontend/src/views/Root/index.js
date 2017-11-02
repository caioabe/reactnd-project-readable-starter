import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPosts } from '../../modules/posts';
import { getCategories } from '../../modules/categories';
import { PostList } from '../../components';

class Root extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getCategories();
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <h2>All Posts</h2>
        <PostList posts={posts} />
      </div>
    );
  }
}

const mapDispatchToProps = { getPosts, getCategories };
const mapStateToProps = ({ posts }) => (
  {
    posts,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Root);

export { connectedComponent as Root };

Root.propTypes = {
  posts: PropTypes.array,
};

Root.defaultProps = {
  posts: [],
};
