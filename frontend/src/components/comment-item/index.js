import _ from 'lodash';
import React, { Component } from 'react';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import { voteOnComment, deleteComment } from '../../modules/comments';

class CommentItem extends Component {
  constructor(props) {
    super(props);

    this.upVoteOnComment = this.upVoteOnComment.bind(this);
    this.downVoteOnComment = this.downVoteOnComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  upVoteOnComment() {
    this.props.voteOnComment(this.props.commentId, this.props.parentId, true);
  }

  downVoteOnComment() {
    this.props.voteOnComment(this.props.commentId, this.props.parentId, false);
  }

  deleteComment() {
    this.props.deleteComment(this.props.commentId, this.props.parentId);
  }

  render() {
    const { comments, commentId } = this.props;
    const comment = _.chain(comments)
      .values()
      .head()
      .find(c => c.id === commentId)
      .value() || {};

    return (
      <div className="comment-item">
        <h4><strong>{comment.author}:</strong> {comment.body}</h4>
        <p>Vote Score: {comment.voteScore}</p>
        <ButtonToolbar>
          <ButtonGroup bsSize="xsmall">
            <Button className="comment-item__upVote" onClick={this.upVoteOnComment}>
              +
            </Button>
            <Button className="comment-item__downVote" onClick={this.downVoteOnComment}>
              -
            </Button>
            <Button className="comment-item__delete" onClick={this.deleteComment}>
              delete
            </Button>
            <Button className="comment-item__edit" onClick={() => {}}>
              edit
            </Button>
            <LinkContainer to={`/comment/${comment.id}`}>
              <Button className="comment-item__edit">
                view
              </Button>
            </LinkContainer>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}

const mapDispatchToProps = { voteOnComment, deleteComment };
const mapStateToProps = ({ comments }) => (
  {
    comments,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(CommentItem);

export { connectedComponent as CommentItem };

CommentItem.propTypes = {
  comments: PropTypes.object,
  commentId: PropTypes.string,
};

CommentItem.defaultProps = {
  comments: {},
  commentId: '',
};
