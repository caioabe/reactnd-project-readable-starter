import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PostsByCategory } from '../';
import { CategoryMenu } from '../../components';
import { getCategories } from '../../modules/categories';

class Categories extends Component {
  componentWillMount() {
    if (_.isEmpty(this.props.categories)) {
      this.props.getCategories();
    }
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        <Row>
          <Col md={12}>
            <h2>Category</h2>
            <CategoryMenu categories={categories} />
            <hr />
          </Col>
        </Row>
        <Switch>
          <Route exact path='/categories' render={() => (
            <h3>Please select a topic.</h3>
          )}/>
          <Route path={'/categories/:categoryId'} component={PostsByCategory}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = { getCategories };
const mapStateToProps = ({ posts, categories }) => (
  {
    posts,
    categories,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Categories);

export { connectedComponent as Categories };

Categories.propTypes = {
  posts: PropTypes.array,
  categories: PropTypes.array,
};

Categories.defaultProps = {
  posts: [],
  categories: [],
};
