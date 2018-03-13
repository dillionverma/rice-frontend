import actionTypes from 'actionTypes';

const INITIAL_STATE = {
  isRegistered: false,
  isAuthenticating: false,
  emailStatus: null,
  passwordStatus: null,
  emailMessage: null,
  passwordMessage: null,
  tokenStatus: null,
  tokenMessage: null,
};
export default function RegistrationReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case actionTypes.SIGN_UP_OWNER:
      newState = Object.assign({}, {
        ...state,
        isRegistered: false,
        isAuthenticating: true,
        emailStatus: 'validating',
        emailMessage: null,
        passwordStatus: 'validating',
        passwordMessage: null,
        tokenStatus: 'validating',
        tokenMessage: null,
      });
      return newState;
    case actionTypes.SIGN_UP_OWNER_SUCCESS:
      localStorage.setItem('token', action.payload.data.token);
      newState = Object.assign({}, {
        ...state,
        isRegistered: true,
        isAuthenticating: false,
        emailStatus: 'success',
        emailMessage: null,
        passwordStatus: 'success',
        passwordMessage: null,
        tokenStatus: 'success',
        tokenMessage: null,
        token: action.payload.data.token,
      });
      return newState;
    case actionTypes.SIGN_UP_OWNER_FAILURE:
      if (action.payload.response.data.errors[0].detail === 'email') {
        newState = Object.assign({}, {
          ...state,
          isRegistered: false,
          isAuthenticating: false,
          emailStatus: 'error',
          emailMessage: action.payload.response.data.errors[0].title,
        });
      } else if (action.payload.response.data.errors[0].detail === 'password') {
        newState = Object.assign({}, {
          ...state,
          isRegistered: false,
          isAuthenticating: false,
          passwordStatus: 'error',
          passwordMessage: action.payload.response.data.errors[0].title,
        });
      } else if (action.payload.response.data.errors[0].detail === 'token') {
        newState = Object.assign({}, {
          ...state,
          isRegistered: false,
          isAuthenticating: false,
          tokenStatus: 'error',
          tokenMessage: action.payload.response.data.errors[0].title,
        });
      }
      return newState;
    default:
      return state;
  }
}
