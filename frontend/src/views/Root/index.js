import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../modules/posts';
import { getCategories } from '../../modules/categories';
import { PostList, CategoryMenu } from '../../components';

class Root extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getCategories();
  }

  render() {
    const { posts, categories } = this.props;

    return (
      <div>
        <h2>All Posts</h2>
        <CategoryMenu categories={categories} />
        <PostList posts={posts} />
      </div>
    );
  }
}

const mapDispatchToProps = { getPosts, getCategories };
const mapStateToProps = ({ posts, categories }) => (
  {
    posts,
    categories,
  }
);


const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Root);

export { connectedComponent as Root };
