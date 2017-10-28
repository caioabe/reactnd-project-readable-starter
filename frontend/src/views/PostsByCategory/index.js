import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { PostList } from '../../components';
import { findPostsByCategory, clearPostsByCategory } from '../../modules/posts-by-category';

class PostsByCategory extends Component {
  componentDidMount() {
    this.props.findPostsByCategory(this.props.match.params.categoryId);
  }

  componentWillUnmount() {
    this.props.clearPostsByCategory();
  }

  componentWillReceiveProps(nextProps) {
    const id = this.props.match.params.categoryId;
    const nextId = nextProps.match.params.categoryId;

    if (id !== nextId) {
      this.props.findPostsByCategory(nextId);
    }
  }

  render() {
    const { postsByCategory } = this.props;

    return (
      <Grid>
        <PostList posts={postsByCategory} />
      </Grid>
    );
  }
}

const mapDispatchToProps = { findPostsByCategory, clearPostsByCategory };
const mapStateToProps = ({ postsByCategory }) => (
  {
    postsByCategory,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(PostsByCategory);

export { connectedComponent as PostsByCategory };

PostsByCategory.propTypes = {
  postsByCategory: PropTypes.array,
};

PostsByCategory.defaultProps = {
  postsByCategory: [],
};
