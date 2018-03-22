import actionTypes from 'actionTypes';

export default function MenusReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_MENUS:
      return state;
    case actionTypes.GET_MENUS_SUCCESS:
      return {
        ...state,
        menus: action.payload.data.menus,
      };
    case actionTypes.GET_MENUS_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors
      };
    default:
      return state;
  }
}
