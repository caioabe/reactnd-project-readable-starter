import React from 'react';
import { PostItem } from '../';

function renderPostItem(post) {
  return <PostItem post={post} key={`${post.id}-menu`} />;
}

const PostList = ({ posts }) => posts.map(renderPostItem);

export { PostList };
