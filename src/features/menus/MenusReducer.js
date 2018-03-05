import {GET_MENUS, GET_MENUS_SUCCESS, GET_MENUS_FAILURE} from '../../actionTypes';

export default function MenusReducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case GET_MENUS:
      console.log('GET_MENUS Action')
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case GET_MENUS_SUCCESS:
      console.log('GET_MENUS_SUCCESS ', action.menus)
      newState = Object.assign({}, {
        ...state,
        menus: action.menus,
      });
      return newState;
    case GET_MENUS_FAILURE:
      console.log('GET_MENUS_FAILURE ', action.message)
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    default:
      return state;
  }
}
