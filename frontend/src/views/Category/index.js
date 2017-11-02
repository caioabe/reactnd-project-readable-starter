import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PostsByCategory } from '../';
import { CategoryMenu } from '../../components';

class Category extends Component {
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

const mapStateToProps = ({ posts, categories }) => (
  {
    posts,
    categories,
  }
);

const connectedComponent = connect(mapStateToProps)(Category);

export { connectedComponent as Category };

Category.propTypes = {
  posts: PropTypes.array,
  categories: PropTypes.array,
};

Category.defaultProps = {
  posts: [],
  categories: [],
};
