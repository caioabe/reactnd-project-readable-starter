import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CommentItem } from '../../../components';
import { findComment } from '../../../modules/comments';

class CommentDetail extends Component {
  componentWillMount() {
    this.props.findComment(this.props.match.params.commentId);
  }

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

const mapDispatchToProps = { findComment };
const mapStateToProps = ({ comments }) => (
  {
    comments,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(CommentDetail);

export { connectedComponent as CommentDetail };

CommentDetail.propTypes = {
  comments: PropTypes.object,
  commentId: PropTypes.string,
};

CommentDetail.defaultProps = {
  comments: {},
  commentId: '',
};
