const API_BASE_URL = 'http://localhost:8008/api/';

const getRequest = async url => {
  const response = await fetch(
    `${API_BASE_URL}${url}`,
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
    }
  );
  return response.json();
};

const postRequest = async (url, data) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  });
  return response.json();
};

const pushRequest = async (url, data) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    method: 'PUSH'
  });
  return response.json();
};

const patchRequest = async (url, data) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    method: 'PATCH'
  });
  return response.json();
};

const deleteRequest = async (url) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'DELETE'
  });
  return response.json();
};

export default {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
  pushRequest,
};
