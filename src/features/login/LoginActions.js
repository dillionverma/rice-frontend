import { LOGIN_OWNER, LOGIN_OWNER_SUCCESS, LOGIN_OWNER_FAILURE } from '../../actionTypes';
import api from '../../lib/api';

export function loginOwner() {
  return {
    type: LOGIN_OWNER, 
    emailStatus: 'validating', 
    emailMessage: null,
    passwordStatus: 'validating',
    passwordMessage: null,
  };
}

export function loginOwnerSuccess(token) {
  return {
    type: LOGIN_OWNER_SUCCESS, 
    emailStatus: 'success', 
    emailMessage: null,
    passwordStatus: 'success',
    passwordMessage: null,
    token: token
  };
}

export function loginOwnerFailure(error) {
  if (error.type == 'email') {
    return {
      type: LOGIN_OWNER_FAILURE, 
      emailStatus: 'error', 
      emailMessage: error.message,
      passwordStatus: null,
      passwordMessage: null
    }
  } else if (error.type == 'password') {
    return {
      type: LOGIN_OWNER_FAILURE, 
      emailStatus: null,
      emailMessage: null,
      passwordStatus: 'error', 
      passwordMessage: error.message
    }
  }
}

export function login(email, password) {
  let params = {email: email, password: password}
  return dispatch => {
    dispatch(loginOwner())
    return api.post('/api/v1/owner/login', params)
              .then(response => response.json())
              .then(handleResponse)
              .then(json     => dispatch(loginOwnerSuccess(json.token)))
              .catch(error   => dispatch(loginOwnerFailure(JSON.parse(error.message))));
  };
}

function handleResponse(response) {
  if (response.error) {
    throw Error(JSON.stringify({message: response.error, type: response.type }))
  }
  return response;
}
