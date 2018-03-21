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
      window.merge = merge
      debugger;
      return {
        ...state,
        entities: merge({}, state.entities, action.payload)
      };
    case actionTypes.GET_MENUS_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors
      };
    case actionTypes.CREATE_MENU:
      return state;
    case actionTypes.CREATE_MENU_SUCCESS:
      debugger;
      return {
        ...state,
        entities: merge({}, state.entities, action.payload)
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
        entities: merge({}, state.entities, action.payload)
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
