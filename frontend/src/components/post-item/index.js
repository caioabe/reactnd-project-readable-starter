import _ from 'lodash';
import React, { Component } from 'react';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import { voteOnPost, deletePost } from '../../modules/posts';
import { findCommentsByPost } from '../../modules/comments';

class PostItem extends Component {
  constructor(props) {
    super(props);

    this.upVoteOnPost = this.upVoteOnPost.bind(this);
    this.downVoteOnPost = this.downVoteOnPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentWillMount() {
    this.props.findCommentsByPost(this.props.postId);
  }

  upVoteOnPost() {
    this.props.voteOnPost(this.props.postId, true);
  }

  downVoteOnPost() {
    this.props.voteOnPost(this.props.postId, false);
  }

  deletePost() {
    this.props.deletePost(this.props.postId);
  }

  render() {
    const { posts, postId, comments } = this.props;
    const post = _.chain(posts)
      .find(p => p.id === postId)
      .value() || {};
    const postComments = comments[postId] || [];
    const postCommentsCount = postComments.length;

    return (
      <div className="post-item">
        <ButtonToolbar>
          <ButtonGroup bsSize="small">
            <Button className="post-item__upVote" onClick={this.upVoteOnPost}>
              +
            </Button>
            <Button className="post-item__downVote" onClick={this.downVoteOnPost}>
              -
            </Button>
            <Button className="post-item__delete" onClick={this.deletePost}>
              delete
            </Button>
            <LinkContainer to={`/post/${post.id}/edit`}>
              <Button className="post-item__edit">
                edit
              </Button>
            </LinkContainer>
            <LinkContainer to={`/category/${post.id}`}>
              <Button className="post-item__view">
                view
              </Button>
            </LinkContainer>
          </ButtonGroup>
        </ButtonToolbar>
        <h4>{post.title}</h4>
        <p>Autor: {post.author}</p>
        <p>Vote Score: {post.voteScore}</p>
        <p>Category: {post.category}</p>
        <p>Comments: {postCommentsCount}</p>
        {this.props.detailed && (
          <div>
            <p>{post.body}</p>
            <LinkContainer to={`/new-comment/${post.id}`}>
              <Button className="post-item__new-comment">
                Add Comment
              </Button>
            </LinkContainer>
          </div>)}
      </div>
    );
  }
}

const mapDispatchToProps = { voteOnPost, deletePost, findCommentsByPost };
const mapStateToProps = ({ posts, comments }) => (
  {
    comments,
    posts,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(PostItem);

export { connectedComponent as PostItem };

PostItem.propTypes = {
  posts: PropTypes.array,
  comments: PropTypes.object,
  postId: PropTypes.string,
};

PostItem.defaultProps = {
  posts: [],
  comments: {},
  postId: '',
};
