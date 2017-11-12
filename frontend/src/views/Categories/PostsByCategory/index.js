import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { PostList, CategoryMenu } from '../../../components';
import { getPosts } from '../../../modules/posts';

class PostsByCategory extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.posts)) {
      this.props.getPosts();
    }
  }

  render() {
    const { posts, categories } = this.props;
    const { categoryId } = this.props.match.params;
    const postsByCategory = posts.filter(p => p.category === categoryId);

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h2>Posts by category</h2>
            <CategoryMenu categories={categories} />
            <hr />
          </Col>
        </Row>
        <PostList posts={postsByCategory} />
      </Grid>
    );
  }
}

const mapDispatchToprops = { getPosts };
const mapStateToProps = ({ posts, categories }) => (
  {
    posts,
    categories,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToprops)(PostsByCategory);

export { connectedComponent as PostsByCategory };

PostsByCategory.propTypes = {
  posts: PropTypes.array,
  categories: PropTypes.array,
};

PostsByCategory.defaultProps = {
  posts: [],
  categories: [],
};
