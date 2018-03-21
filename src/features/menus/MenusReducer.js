import actionTypes from 'actionTypes';
import { normalize } from 'normalizr';
import merge from 'lodash/merge';
import schema from './schema';

const INITIAL_STATE = {
  entities: {menus: {}, menu_categories: {}, items: {}},
  error: {},
}

export default function MenusReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.GET_MENUS:
      return state;
    case actionTypes.GET_MENUS_SUCCESS:
      return {
        ...state,
        entities: merge({}, state.entities, normalize(action.payload.data.menus, schema.menuList).entities)
      };
    case actionTypes.GET_MENUS_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors
      };
    case actionTypes.CREATE_MENU:
      return state;
    case actionTypes.CREATE_MENU_SUCCESS:
      return {
        ...state,
        entities: merge({}, state.entities, normalize(action.payload.data.menu, schema.Menu).entities)
      };
    case actionTypes.CREATE_MENU_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors
      };
    case actionTypes.CREATE_MENU_CATEGORY:
      return state;
    case actionTypes.CREATE_MENU_CATEGORY_SUCCESS:
      return {
        ...state,
        entities: merge({}, state.entities, normalize(action.payload.data.menu_category, schema.menuCategory).entities)
      };
    case actionTypes.CREATE_MENU_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors
      };
    default:
      return state;
  }
}
