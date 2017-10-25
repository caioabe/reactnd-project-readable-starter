const baseUrl = 'http://localhost:3001';
const header = { headers: { Authorization: 'caioabe' } };
// const postMethod = { method: "POST" };

function parseResponse(request) {
  return request.json();
}

async function get(resource) {
  const uri = `${baseUrl}/${resource}`;
  const request = await fetch(uri, { ...header });

  return request;
}

async function getPosts() {
  const request = await get('posts');
  const parsedResponse = await parseResponse(request);

  return parsedResponse;
}

async function getCategories() {
  const request = await get('categories');
  const parsedResponse = await parseResponse(request);

  return parsedResponse.categories;
}

const ApiService = {
  getPosts,
  getCategories,
};

export default ApiService;
