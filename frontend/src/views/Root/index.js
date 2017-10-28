import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPosts } from '../../modules/posts';
import { getCategories } from '../../modules/categories';
import { PostList, CategoryMenu } from '../../components';

class Root extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getCategories();
  }

  render() {
    const { posts, categories, comments } = this.props;

    return (
      <div>
        <h2>All Posts</h2>
        <CategoryMenu categories={categories} />
        <PostList posts={posts} comments={comments}/>
      </div>
    );
  }
}

const mapDispatchToProps = { getPosts, getCategories };
const mapStateToProps = ({ posts, categories, comments }) => (
  {
    posts,
    categories,
    comments,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Root);

export { connectedComponent as Root };

Root.propTypes = {
  posts: PropTypes.array,
  categories: PropTypes.array,
  comments: PropTypes.object,
};

Root.defaultProps = {
  posts: [],
  categories: [],
  comments: {},
};
