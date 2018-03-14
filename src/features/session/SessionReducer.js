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
  let newState;
  switch (action.type) {
    case actionTypes.LOGIN_OWNER:
      newState = Object.assign({}, {
        ...state,
        isLoggedIn: false,
        isAuthenticating: true,
        emailStatus: 'validating',
        emailMessage: null,
        passwordStatus: 'validating',
        passwordMessage: null,
      });
      return newState;
    case actionTypes.LOGIN_OWNER_SUCCESS:
      localStorage.setItem('token', action.payload.data.token)
      newState = Object.assign({}, {
        ...state,
        isLoggedIn: true,
        isAuthenticating: false,
        emailStatus: 'success',
        emailMessage: null,
        passwordStatus: 'success',
        passwordMessage: null,
        token: action.payload.data.token
      });
      return newState;
    case actionTypes.LOGIN_OWNER_FAILURE:
      localStorage.removeItem('token')
      if (action.payload.response.data.errors[0].detail === 'email') {
        newState = Object.assign({}, {
          ...state,
          isLoggedIn: false,
          isAuthenticating: false,
          emailStatus: 'error',
          emailMessage: action.payload.response.data.errors[0].title,
        });
      } else if (action.payload.response.data.errors[0].detail === 'password') {
        newState = Object.assign({}, {
          ...state,
          isLoggedIn: false,
          isAuthenticating: false,
          passwordStatus: 'error',
          passwordMessage: action.payload.response.data.errors[0].title,
        });
      }
      return newState;
    case actionTypes.LOGOUT_OWNER:
      console.log('LOGOUT_OWNER')
      newState = Object.assign({}, {
        ...state,
        isLoggedIn: false,
        isAuthenticating: false,
        emailStatus: null,
        emailMessage: null,
        passwordStatus: null,
        passwordMessage: null,
      });
      return newState;
    case actionTypes.AUTHENTICATE_OWNER:
      newState = Object.assign({}, {
        ...state,
        isLoggedIn: false,
        isAuthenticating: true,
      });
      return newState;
    case actionTypes.AUTHENTICATE_OWNER_SUCCESS:
      newState = Object.assign({}, {
        ...state,
        isLoggedIn: true,
        isAuthenticating: false,
        owner: action.payload.data.owner,
      });
      return newState;
    case actionTypes.AUTHENTICATE_OWNER_FAILURE:
      newState = Object.assign({}, {
        ...state,
        isLoggedIn: false,
        isAuthenticating: false,
        error: action.payload.response.data.errors,
      });
      return newState;
    default:
      return state;
  }
}
