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
    isLoggedIn: false,
    isAuthenticating: true,
    emailStatus: 'validating',
    emailMessage: null,
    passwordStatus: 'validating',
    passwordMessage: null,
  };
}

function loginOwnerSuccess(token) {
  return {
    type: LOGIN_OWNER_SUCCESS,
    isLoggedIn: true,
    isAuthenticating: false,
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
      isLoggedIn: false,
      isAuthenticating: false,
      emailStatus: 'error',
      emailMessage: errors[0].title,
      passwordStatus: null,
      passwordMessage: null
    }
  } else if (errors[0].detail === 'password') {
    return {
      type: LOGIN_OWNER_FAILURE,
      isLoggedIn: false,
      isAuthenticating: false,
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
    isLoggedIn: false,
    isAuthenticating: false,
    emailStatus: null,
    emailMessage: null,
    passwordStatus: null,
    passwordMessage: null,
  }
}

function authenticateOwner() {
  return {
    type: AUTHENTICATE_OWNER,
    isLoggedIn: false,
    isAuthenticating: true,
  }
}


function authenticateOwnerSuccess(owner) {
  return {
    type: AUTHENTICATE_OWNER_SUCCESS,
    owner: owner,
    isLoggedIn: true,
    isAuthenticating: false,
  }
}

function authenticateOwnerFailure(error) {
  return {
    type: AUTHENTICATE_OWNER_FAILURE,
    error: error,
    isLoggedIn: false,
    isAuthenticating: false,
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
