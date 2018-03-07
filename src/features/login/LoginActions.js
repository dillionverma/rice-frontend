import {
  LOGIN_OWNER,
  LOGIN_OWNER_SUCCESS,
  LOGIN_OWNER_FAILURE,
  LOGOUT_OWNER,
  AUTHENTICATE_OWNER,
  AUTHENTICATE_OWNER_SUCCESS,
  AUTHENTICATE_OWNER_FAILURE,
} from '../../actionTypes';
import api from '../../lib/api';
import { errorHandler } from '../../lib/errorHandler';

function loginOwner() {
  return {
    type: LOGIN_OWNER,
    emailStatus: 'validating',
    emailMessage: null,
    passwordStatus: 'validating',
    passwordMessage: null,
  };
}

function loginOwnerSuccess(token) {
  return {
    type: LOGIN_OWNER_SUCCESS,
    status: true,
    emailStatus: 'success',
    emailMessage: null,
    passwordStatus: 'success',
    passwordMessage: null,
    token: token
  };
}

function loginOwnerFailure(errors) {
  if (errors[0].detail === 'email') {
    return {
      type: LOGIN_OWNER_FAILURE,
      status: false,
      emailStatus: 'error',
      emailMessage: errors[0].title,
      passwordStatus: null,
      passwordMessage: null
    }
  } else if (errors[0].detail === 'password') {
    return {
      type: LOGIN_OWNER_FAILURE,
      status: false,
      emailStatus: null,
      emailMessage: null,
      passwordStatus: 'error',
      passwordMessage: errors[0].title,
    }
  }
}

function logoutOwner() {
  return {
    type: LOGOUT_OWNER,
    emailStatus: null,
    emailMessage: null,
    passwordStatus: null,
    passwordMessage: null,
    status: false,
  }
}

function authenticateOwner() {
  return {
    type: AUTHENTICATE_OWNER,
  }
}


function authenticateOwnerSuccess(owner) {
  return {
    type: AUTHENTICATE_OWNER_SUCCESS,
    owner: owner,
    status: true,
  }
}

function authenticateOwnerFailure(error) {
  return {
    type: AUTHENTICATE_OWNER_FAILURE,
    error: error,
    status: false,
  }
}

export function authenticate() {
  return dispatch => {
    dispatch(authenticateOwner())
    return api.get('/api/v1/owner/authenticate')
              .then( ({data})  => dispatch(authenticateOwnerSuccess(data.owner)))
              .catch(error     => {
                dispatch(authenticateOwnerFailure(error.response.data.errors))
                errorHandler(error)
              });
  };
}

export function login(email, password) {
  let params = {email: email, password: password}
  return dispatch => {
    dispatch(loginOwner())
    return api.post('/api/v1/owner/login', params)
              .then(({data}) => dispatch(loginOwnerSuccess(data.token)))
              .catch(error  => {
                dispatch(loginOwnerFailure(error.response.data.errors))
                errorHandler(error)
              });
  };
}

export function logout() {
  return dispatch => dispatch(logoutOwner());
}
