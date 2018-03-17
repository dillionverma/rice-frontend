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
        error: action.payload.response.data.errors
      });
      return newState;
    case actionTypes.CREATE_MENU:
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case actionTypes.CREATE_MENU_SUCCESS:
      newState = Object.assign({}, {
        ...state,
        menus: [...state.menus, action.payload.data.menu],
      });
      return newState;
    case actionTypes.CREATE_MENU_FAILURE:
      newState = Object.assign({}, {
        ...state,
        error: action.payload.response.data.errors
      });
      return newState;
    case actionTypes.CREATE_MENU_CATEGORY:
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case actionTypes.CREATE_MENU_CATEGORY_SUCCESS:
      const { menu_category } = action.payload.data;

      newState = Object.assign({}, {
        ...state,
        //menus: ddmenus,
      });
      return newState;
    case actionTypes.CREATE_MENU_CATEGORY_FAILURE:
      newState = Object.assign({}, {
        ...state,
        error: action.payload.response.data.errors
      });
      return newState;
    default:
      return state;
  }
}
