import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PostItem, CommentItem } from '../../../components';
import { getPosts } from '../../../modules/posts';
import { getCategories } from '../../../modules/categories';
import { findCommentsByPost } from '../../../modules/comments';

class PostDetail extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getCategories();
    this.props.findCommentsByPost(this.props.match.params.postId);
  }

  render() {
    let render;
    const { comments, posts } = this.props;
    const { postId } = this.props.match.params;
    const postComments = comments[postId] || [];
    const post = posts.filter(p => p.id === postId)[0] || [];

    if (!_.isEmpty(post)) {
      render = (
        <div>
          <PostItem detailed={true} postId={postId} />
          {postComments.map(comment => <CommentItem commentId={comment.id} parentId={postId} key={comment.id} />)}
        </div>
      );
    } else {
      render = 'Post not found';
    }

    return render;
  }
}

const mapDispatchToProps = { getPosts, getCategories, findCommentsByPost };
const mapStateToProps = ({ posts, comments }) => (
  {
    posts,
    comments,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(PostDetail);

export { connectedComponent as PostDetail };

PostDetail.propTypes = {
  comments: PropTypes.object,
  postId: PropTypes.string,
};

PostDetail.defaultProps = {
  comments: {},
  postId: '',
};
