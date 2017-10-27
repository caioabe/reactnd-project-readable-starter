import React from 'react';
import { Row } from 'react-bootstrap';

import { PostItem } from '../';

function renderPostItem(post) {
  return <PostItem post={post} key={`${post.id}-menu`} />;
}

const PostList = ({ posts }) => (
  <Row>
    { posts.map(renderPostItem) }
  </Row>
);

export { PostList };
