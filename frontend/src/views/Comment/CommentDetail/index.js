import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CommentItem } from '../../../components';

class CommentDetail extends Component {
  render() {
    const { comments } = this.props;
    const { commentId } = this.props.match.params;
    const comment = _.chain(comments)
      .values()
      .head()
      .find(c => c.id === commentId)
      .value() || {};

    return (
      <CommentItem commentId={comment.id} parentId={comment.parentId} key={comment.id} />
    );
  }
}

const mapStateToProps = ({ comments }) => (
  {
    comments,
  }
);

const connectedComponent = connect(mapStateToProps)(CommentDetail);

export { connectedComponent as CommentDetail };

CommentDetail.propTypes = {
  comments: PropTypes.object,
  commentId: PropTypes.string,
};

CommentDetail.defaultProps = {
  comments: {},
  commentId: '',
};
