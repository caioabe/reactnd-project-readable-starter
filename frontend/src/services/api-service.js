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

async function getPosts() {
  const request = await getAll('posts');
  const parsedResponse = await parseResponse(request);

  return parsedResponse;
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

const ApiService = {
  getPosts,
  getCategories,
  findPostsByCategory,
};

export default ApiService;
