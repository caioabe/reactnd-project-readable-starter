
const baseUrl = 'http://localhost:3001';
const header = { headers: { Authorization: 'caioabecaioabe' } };

function _parseResponse(request) {
  return request.json();
}

async function _apiRequest(method, resource, body) {
  const uri = `${baseUrl}/${resource}`;
  const params = {
    ...header,
    method,
  };

  if (method === 'POST' || method === 'PUT') {
    params.body = body;
  }

  const request = await fetch(uri, params);

  return request;
}

async function apiGet(resource) {
  const request = await _apiRequest('GET', resource);
  const parsedResponse = await _parseResponse(request);

  return parsedResponse;
}

async function apiDelete(resource) {
  const request = await _apiRequest('DELETE', resource);
  return request;
}

async function apiPost(resource, body) {
  const request = await _apiRequest('POST', resource, body);
  return request;
}

async function apiPut(resource, body) {
  const request = await _apiRequest('PUT', resource, body);
  return request;
}

const Api = {
  get: apiGet,
  delete: apiDelete,
  post: apiPost,
  put: apiPut,
};

export default Api;
