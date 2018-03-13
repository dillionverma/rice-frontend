import actionTypes from 'actionTypes';

export default function MenusReducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case actionTypes.GET_MENUS:
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case actionTypes.GET_MENUS_SUCCESS:
      newState = Object.assign({}, {
        ...state,
        menus: action.payload.data.menus,
      });
      return newState;
    case actionTypes.GET_MENUS_FAILURE:
      newState = Object.assign({}, {
        ...state,
        error: action.payload.response.data.errors,
      });
      return newState;
    default:
      return state;
  }
}
