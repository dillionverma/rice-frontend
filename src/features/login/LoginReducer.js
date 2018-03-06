import {
  LOGIN_OWNER,
  LOGIN_OWNER_SUCCESS,
  LOGIN_OWNER_FAILURE,
  LOGOUT_OWNER,
  AUTHENTICATE_OWNER,
  AUTHENTICATE_OWNER_SUCCESS,
  AUTHENTICATE_OWNER_FAILURE,
} from '../../actionTypes';

export default function LoginReducer(state = {status: false}, action) {
  let newState;
  let res = {
    status:          action.status,
    emailStatus:     action.emailStatus,
    passwordStatus:  action.passwordStatus,
    emailMessage:    action.emailMessage,
    passwordMessage: action.passwordMessage
  };

  switch (action.type) {
    case LOGIN_OWNER:
      console.log('LOGIN_OWNER Action')
      newState = Object.assign({}, {
        ...state,
        ...res,
      });
      return newState;
    case LOGIN_OWNER_SUCCESS:
      console.log('LOGIN_OWNER_SUCCESS ', action.token)
      localStorage.setItem('token', action.token)
      newState = Object.assign({}, {
        ...state,
        ...res,
        token: action.token,
        error: null,
      });
      return newState;
    case LOGIN_OWNER_FAILURE:
      console.log('LOGIN_OWNER_FAILURE ', action.error)
      localStorage.removeItem('token')
      newState = Object.assign({}, {
        ...state,
        ...res,
      });
      return newState;
    case LOGOUT_OWNER:
      console.log('LOGOUT_OWNER')
      localStorage.removeItem('token')
      newState = Object.assign({}, {
        ...state,
        ...res,
      });
      return newState;
    case AUTHENTICATE_OWNER:
      console.log('AUTHENTICATE_OWNER Action')
      return state;
    case AUTHENTICATE_OWNER_SUCCESS:
      console.log('AUTHENTICATE_OWNER_SUCCESS ', action.owner)
      newState = Object.assign({}, {
        ...state,
        owner: action.owner,
        status: action.status,
      });
      return newState;
    case AUTHENTICATE_OWNER_FAILURE:
      console.log('AUTHENTICATE_OWNER_FAILURE ', action.error)
      newState = Object.assign({}, {
        ...state,
        status: action.status,
        error: action.error
      });
      return newState;
    default:
      return state;
  }
}
