import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PostsByCategory } from '../';
import { CategoryMenu } from '../../components';
import { getCategories } from '../../modules/categories';

class Category extends Component {
  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    const { url } = this.props.match;
    const { categories } = this.props;

    return (
      <div>
        <h2>Category</h2>
        <CategoryMenu categories={categories} />
        <Route path={`${url}/:categoryId/posts`} component={PostsByCategory}/>
        <Route exact path={url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    );
  }
}

const mapDispatchToProps = { getCategories };
const mapStateToProps = ({ categories }) => (
  {
    categories,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Category);

export { connectedComponent as Category };

Category.propTypes = {
  categories: PropTypes.array,
};

Category.defaultProps = {
  categories: [],
};
