import actionTypes from 'actionTypes';
import api from 'lib/api';

export function authenticate() {
  return {
    type: actionTypes.AUTHENTICATE_OWNER,
    payload: api.get('/api/v1/owner/authenticate'),
    meta: { globalError: true }
  }
}

export function login(email, password) {
  let params = {email: email, password: password}
  return {
    type: actionTypes.LOGIN_OWNER,
    payload: api.post('/api/v1/owner/login', params),
  };
}

export function logout() {
  return dispatch => dispatch({type: actionTypes.LOGOUT_OWNER});
}
