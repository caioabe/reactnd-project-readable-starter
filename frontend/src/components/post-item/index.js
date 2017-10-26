import React from 'react';

const PostItem = ({ post }) => (
  <div>
    <p>{post.author}</p>
    <p>{post.body}</p>
    <p>{post.category}</p>
    <p>{post.id}</p>
    <p>{post.timestamp}</p>
    <p>{post.title}</p>
    <p>{post.voteScore}</p>
  </div>
);

export { PostItem };
