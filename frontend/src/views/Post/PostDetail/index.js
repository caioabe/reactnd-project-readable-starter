import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PostItem } from '../../../components';

class PostDetail extends Component {
  render() {
    return (
      <PostItem postId={this.props.match.params.postId} />
    );
  }
}

export { PostDetail };

PostDetail.propTypes = {
  postId: PropTypes.string,
};

PostDetail.defaultProps = {
  postId: '',
};
