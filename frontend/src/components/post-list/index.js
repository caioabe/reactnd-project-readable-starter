import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { PostItem } from '../';

function renderPostItem(post) {
  return <PostItem postId={post.id} key={`${post.id}-menu`} />;
}

const PostList = ({ posts, comments }) => (
  <Row>
    { posts.map((post) => {
      post.comments = comments[post.id];

      return renderPostItem(post);
    }) }
  </Row>
);

export { PostList };

PostList.propTypes = {
  posts: PropTypes.array,
  comments: PropTypes.object,
};

PostList.defaultProps = {
  posts: [],
  comments: {},
};
