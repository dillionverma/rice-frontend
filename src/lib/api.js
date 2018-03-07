import axios from 'axios';

const API_URL = 'http://localhost:3000';

var HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': auth()
};

function token() {
  return localStorage.getItem('token')
}

function auth() {
  return {'Authorization': `Token token=${token()}`}
}

const api = {
  post(path, body = {}) {
    return axios({
      baseURL:  API_URL,
      headers:  auth(),
      url:      path,
      method:  'POST',
      data:     body,
    })
  },
  get(path, params = {}) {
    return axios({
      baseURL:  API_URL,
      headers:  auth(),
      url:      path,
      method:  'GET',
      params:   params,
    })
  }
}

export default api;
