import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { voteOnPost, deletePost } from '../../modules/posts';

class PostItem extends Component {
  constructor(props) {
    super(props);

    this.upVoteOnPost = this.upVoteOnPost.bind(this);
    this.downVoteOnPost = this.downVoteOnPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
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
    const { posts, postId } = this.props;
    const post = posts.find(p => p.id === postId);

    return (
      <Col md={4}>
        <div className="post-item">
          <h4>{post.title}</h4>
          <p>Autor: {post.author}</p>
          <p>Vote Score: {post.voteScore}</p>
          <Button className="post-item__upVote" onClick={this.upVoteOnPost}>
            +
          </Button>
          <Button className="post-item__downVote" onClick={this.downVoteOnPost}>
            -
          </Button>
          <Button className="post-item__delete" onClick={this.deletePost}>
            delete
          </Button>
          <Button className="post-item__edit" onClick={() => {}}>
            edit
          </Button>
        </div>
      </Col>
    );
  }
}

const mapDispatchToProps = { voteOnPost, deletePost };
const mapStateToProps = ({ posts }) => (
  {
    posts,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(PostItem);

export { connectedComponent as PostItem };

PostItem.propTypes = {
  posts: PropTypes.array,
  post: PropTypes.string,
};

PostItem.defaultProps = {
  posts: [],
  post: '',
};
