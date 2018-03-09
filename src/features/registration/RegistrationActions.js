import {
  SIGN_UP_OWNER,
  SIGN_UP_OWNER_SUCCESS,
  SIGN_UP_OWNER_FAILURE,
} from '../../actionTypes';
import api from '../../lib/api';
import { errorHandler } from '../../lib/errorHandler';

function signUpOwner() {
  return {
    type: SIGN_UP_OWNER,
    isRegistered: false,
    isAuthenticating: true,
    emailStatus: 'validating',
    emailMessage: null,
    passwordStatus: 'validating',
    passwordMessage: null,
    tokenStatus: 'validating',
    tokenMessage: null,
  };
}

function signUpOwnerSuccess(token) {
  return {
    type: SIGN_UP_OWNER_SUCCESS,
    isRegistered: true,
    isAuthenticating: false,
    emailStatus: 'success',
    emailMessage: null,
    passwordStatus: 'success',
    passwordMessage: null,
    tokenStatus: 'success',
    tokenMessage: null,
    token: token,
  };
}

function signUpOwnerFailure(errors) {
  if (errors[0].detail === 'email') {
    return {
      type: SIGN_UP_OWNER_FAILURE,
      isRegistered: false,
      isAuthenticating: false,
      emailStatus: 'error',
      emailMessage: errors[0].title,
    }
  } else if (errors[0].detail === 'password') {
    return {
      type: SIGN_UP_OWNER_FAILURE,
      isRegistered: false,
      isAuthenticating: false,
      passwordStatus: 'error',
      passwordMessage: errors[0].title,
    }
  } else if (errors[0].detail === 'token') {
    return {
      type: SIGN_UP_OWNER_FAILURE,
      isRegistered: false,
      isAuthenticating: false,
      tokenStatus: 'error',
      tokenMessage: errors[0].title,
    }
  }
}

export function signUp(email, password, token) {
  let params = {email: email, password: password, token: token}
  return dispatch => {
    dispatch(signUpOwner())
    return api.post('/api/v1/owner/sign_up', params)
              .then(({data}) => dispatch(signUpOwnerSuccess(data.token)))
              .catch(error  => {
                dispatch(signUpOwnerFailure(error.response.data.errors))
                errorHandler(error)
              });
  };
}
