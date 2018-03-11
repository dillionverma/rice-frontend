import {
  SIGN_UP_OWNER,
  SIGN_UP_OWNER_SUCCESS,
  SIGN_UP_OWNER_FAILURE,
} from '../../actionTypes';


const INITIAL_STATE = {
  isRegistered:     false,
  isAuthenticating: false,
  emailStatus:      null,
  passwordStatus:   null,
  emailMessage:     null,
  passwordMessage:  null,
  tokenStatus:      null,
  tokenMessage:     null,
}
export default function RegistrationReducer(state = {}, action) {
  let newState;
  let res = {
    isRegistered:     action.isRegistered,
    isAuthenticating: action.isAuthenticating,
    emailStatus:      action.emailStatus,
    emailMessage:     action.emailMessage,
    passwordStatus:   action.passwordStatus,
    passwordMessage:  action.passwordMessage,
    tokenStatus:      action.tokenStatus,
    tokenMessage:     action.tokenMessage,
  }
  switch (action.type) {
    case SIGN_UP_OWNER:
      newState = Object.assign({}, {
        ...state,
        ...res,
      });
      return newState;
    case SIGN_UP_OWNER_SUCCESS:
      localStorage.setItem('token', action.token)
      newState = Object.assign({}, {
        ...state,
        ...res,
        token: action.token,
      });
      return newState;
    case SIGN_UP_OWNER_FAILURE:
      newState = Object.assign({}, {
        ...state,
        ...res,
      });
      return newState;
    default:
      return state;
  }
}
