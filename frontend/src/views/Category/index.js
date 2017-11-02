import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PostsByCategory } from '../';
import { CategoryMenu } from '../../components';
import { getCategories } from '../../modules/categories';
import { getPosts } from '../../modules/posts';

class Category extends Component {
  componentWillMount() {
    if (this.props.posts.length === 0) {
      this.props.getPosts();
    }

    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        <h2>Category</h2>
        <CategoryMenu categories={categories} />
        <Switch>
          <Route exact path='/category' render={() => (
            <h3>Please select a topic.</h3>
          )}/>
          <Route path={'/category/:categoryId'} component={PostsByCategory}/>
        </Switch>
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

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Category);

export { connectedComponent as Category };

Category.propTypes = {
  posts: PropTypes.array,
  categories: PropTypes.array,
};

Category.defaultProps = {
  posts: [],
  categories: [],
};
