import qs from 'qs';

const BASE_URL = 'http://localhost:3000';

function token() {
  return localStorage.getItem('token')
}

const api = {
  post(path, params) {
    return fetch(BASE_URL + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token= + ${token()}`

      },
      body: JSON.stringify(params),
    })
  },
  get(path, params = {}) {
    if (params && Object.keys(params).length) {
      path += `?${qs.stringify(params)}`;
    }
    return fetch(BASE_URL + path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${token()}`
      },
    })
  }
}

export default api;
