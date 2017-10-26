import uuidv1 from 'uuid/v1';

const baseUrl = 'http://localhost:3001';
const header = { headers: { Authorization: 'caioabe' } };
// const postMethod = { method: "POST" };

function parseResponse(request) {
  return request.json();
}

async function getAll(resource) {
  const uri = `${baseUrl}/${resource}`;
  const request = await fetch(uri, { ...header });

  return request;
}

async function getCategories() {
  const request = await getAll('categories');
  const parsedResponse = await parseResponse(request);

  return parsedResponse.categories;
}

async function findPostsByCategory(category) {
  const request = await fetch(`${baseUrl}/${category}/posts`, { ...header });
  const parsedResponse = await parseResponse(request);

  return parsedResponse;
}

async function getPosts() {
  const request = await getAll('posts');
  const parsedResponse = await parseResponse(request);

  return parsedResponse;
}

async function findPost(id) {
  const request = await getAll(`posts/${id}`);
  const parsedResponse = await parseResponse(request);

  return parsedResponse;
}

async function voteOnPost(id, isUp = true) {
  const option = isUp ? 'upVote' : 'downVote';

  await fetch(`${baseUrl}/posts/${id}`, {
    ...header,
    method: 'POST',
    body: { option },
  });
}

async function updatePost(post) {
  await fetch(`${baseUrl}/posts/${post.id}`, {
    ...header,
    method: 'PUT',
    body: {
      title: post.title,
      body: post.body,
    },
  });
}

async function createPost(post) {
  post.id = uuidv1();

  await fetch(`${baseUrl}/posts`, {
    ...header,
    method: 'POST',
    body: { ...post },
  });
}

async function deletePost(id) {
  await fetch(`${baseUrl}/posts/${id}`, { ...header, method: 'DELETE' });
}

async function findCommentsByPost(id) {
  const request = await getAll(`posts/${id}/comments`);
  const parsedResponse = await parseResponse(request);

  return parsedResponse;
}

async function findComment(id) {
  const request = await getAll(`comments/${id}`);
  const parsedResponse = await parseResponse(request);

  return parsedResponse;
}

async function createComment(postId, comment) {
  comment.id = uuidv1();
  comment.parentId = postId;

  await fetch(`${baseUrl}/posts`, {
    ...header,
    method: 'POST',
    body: { ...comment },
  });
}

async function voteOnComment(id, isUp = true) {
  const option = isUp ? 'upVote' : 'downVote';

  await fetch(`${baseUrl}/comments/${id}`, {
    ...header,
    method: 'POST',
    body: { option },
  });
}

async function updateComment(comment) {
  await fetch(`${baseUrl}/comments/${comment.id}`, {
    ...header,
    method: 'PUT',
    body: {
      timestamp: new Date().getTime(),
      body: comment.body,
    },
  });
}

async function deleteComment(id) {
  await fetch(`${baseUrl}/comments/${id}`, { ...header, method: 'DELETE' });
}

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
