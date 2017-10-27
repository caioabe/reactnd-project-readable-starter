import uuidv1 from 'uuid/v1';
import Api from './api-methods';

const _timeStamp = () => new Date().getTime();

const _vote = async (resource, id, isUp) => {
  const option = isUp ? 'upVote' : 'downVote';
  await Api.post(`${resource}/${id}`, { option });
};

const _create = async (resource, entity) => {
  const body = { ...entity, id: uuidv1() };
  await Api.post(`${resource}`, body);
};

const _update = async (resource, id, body) => {
  await Api.put(`${resource}/${id}`, body);
};

const getCategories = async () => {
  const categories = await Api.get('categories');

  return categories.categories;
};

const getPosts = async () => {
  const posts = await Api.get('posts');
  return posts;
};

const findPost = async (id) => {
  const post = await Api.get(`posts/${id}`);
  return post;
};

const findPostsByCategory = async (category) => {
  const post = await Api.get(`${category}/posts`);
  return post;
};

const deletePost = async (id) => {
  await Api.delete(`posts/${id}`);
};

const voteOnPost = async (id, isUp = true) => {
  await _vote('posts', id, isUp);
};

const createPost = async (post) => {
  _create('posts', post);
};

const findComment = async (id) => {
  const comment = await Api.get(`comments/${id}`);
  return comment;
};

const findCommentsByPost = async (id) => {
  const comment = await Api.get(`posts/${id}/comments`);
  return comment;
};

const deleteComment = async (id) => {
  await Api.delete(`comments/${id}`);
};

const voteOnComment = async (id, isUp = true) => {
  await _vote('comments', id, isUp);
};

const createComment = async (comment) => {
  _create('comments', comment);
};

const updatePost = async (post) => {
  await _update('posts', post.id, { title: post.title, body: post.body });
};

const updateComment = async (comment) => {
  await _update('comments', comment.id, { timestamp: _timeStamp(), body: comment.body });
};

const ApiService = {
  getCategories,
  findPostsByCategory,
  getPosts,
  createPost,
  findPost,
  voteOnPost,
  updatePost,
  deletePost,
  findCommentsByPost,
  createComment,
  findComment,
  voteOnComment,
  updateComment,
  deleteComment,
};

export default ApiService;
