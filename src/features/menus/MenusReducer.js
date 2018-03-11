import {GET_MENUS, GET_MENUS_SUCCESS, GET_MENUS_FAILURE} from '../../actionTypes';

export default function MenusReducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case GET_MENUS:
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case GET_MENUS_SUCCESS:
      newState = Object.assign({}, {
        ...state,
        menus: action.menus,
      });
      return newState;
    case GET_MENUS_FAILURE:
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    default:
      return state;
  }
}
