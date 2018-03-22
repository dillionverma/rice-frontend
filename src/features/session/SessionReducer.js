import actionTypes from 'actionTypes';

const INITIAL_STATE = {
  isLoggedIn:       false,
  isAuthenticating: false,
  emailStatus:      null,
  passwordStatus:   null,
  emailMessage:     null,
  passwordMessage:  null,
}

export default function SessionReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN_OWNER:
      return {
        ...state,
        isLoggedIn: false,
        isAuthenticating: true,
        emailStatus: 'validating',
        emailMessage: null,
        passwordStatus: 'validating',
        passwordMessage: null,
      };
    case actionTypes.LOGIN_OWNER_SUCCESS:
      localStorage.setItem('token', action.payload.data.token)
      return {
        ...state,
        isLoggedIn: true,
        isAuthenticating: false,
        emailStatus: 'success',
        emailMessage: null,
        passwordStatus: 'success',
        passwordMessage: null,
        token: action.payload.data.token
      };
    case actionTypes.LOGIN_OWNER_FAILURE:
      localStorage.removeItem('token')
      if (action.payload.response.data.errors[0].detail === 'email') {
        return {
          ...state,
          isLoggedIn: false,
          isAuthenticating: false,
          emailStatus: 'error',
          emailMessage: action.payload.response.data.errors[0].title,
        };
      } else if (action.payload.response.data.errors[0].detail === 'password') {
        return {
          ...state,
          isLoggedIn: false,
          isAuthenticating: false,
          passwordStatus: 'error',
          passwordMessage: action.payload.response.data.errors[0].title,
        };
      }
    case actionTypes.LOGOUT_OWNER:
      return {
        ...state,
        isLoggedIn: false,
        isAuthenticating: false,
        emailStatus: null,
        emailMessage: null,
        passwordStatus: null,
        passwordMessage: null,
      };
    case actionTypes.AUTHENTICATE_OWNER:
      return {
        ...state,
        isLoggedIn: false,
        isAuthenticating: true,
      };
    case actionTypes.AUTHENTICATE_OWNER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isAuthenticating: false,
        owner: action.payload.data.owner,
      };
    case actionTypes.AUTHENTICATE_OWNER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isAuthenticating: false,
        error: action.payload.response.data.errors,
      };
    default:
      return state;
  }
}
