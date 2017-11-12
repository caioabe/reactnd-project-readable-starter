import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { PostList } from '../../../components';
import { getPosts } from '../../../modules/posts';

class PostsByCategory extends Component {
  componentWillMount() {
    if (_.isEmpty(this.props.posts)) {
      this.props.getPosts();
    }
  }

  render() {
    const { posts } = this.props;
    const { categoryId } = this.props.match.params;
    const postsByCategory = posts.filter(p => p.category === categoryId);

    return (
      <Grid>
        <PostList posts={postsByCategory} />
      </Grid>
    );
  }
}

const mapDispatchToprops = { getPosts };
const mapStateToProps = ({ posts }) => (
  {
    posts,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToprops)(PostsByCategory);

export { connectedComponent as PostsByCategory };

PostsByCategory.propTypes = {
  posts: PropTypes.array,
};

PostsByCategory.defaultProps = {
  posts: [],
};
