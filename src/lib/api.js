const BASE_URL = 'http://localhost:3000';

function token() {
  localStorage.getItem('token')
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
  get(path, params) {
    return fetch(BASE_URL + path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token= + ${token()}`
      },
    })
    .then(response => response.json())
  }
}

export default api;
