import {LOGIN_OWNER, LOGIN_OWNER_SUCCESS, LOGIN_OWNER_FAILURE} from '../../actionTypes';

export default function LoginReducer(state = {}, action) {
  let newState;
  let res = {
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
      });
      return newState;
    case LOGIN_OWNER_FAILURE:
      console.log('LOGIN_OWNER_FAILURE ', action.message)
      localStorage.removeItem('token')
      newState = Object.assign({}, {
        ...state, 
        ...res,
      });
      return newState;
    default:
      return state;
  }
}
