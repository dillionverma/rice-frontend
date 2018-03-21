import actionTypes from 'actionTypes';
import { normalize, schema } from 'normalizr';
import merge from 'lodash/merge';

const itemSchema = new schema.Entity('items');
const menuCategorySchema = new schema.Entity('menu_categories', {
  items: [ itemSchema ],
});
const menuSchema = new schema.Entity('menus', {
  menu_categories: [ menuCategorySchema ],
});
const menuListSchema = [ menuSchema ];

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
        entities: merge({}, state.entities, normalize(action.payload.data.menus, menuListSchema).entities)
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
        entities: merge({}, state.entities, normalize(action.payload.data.menu, menuSchema).entities)
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
        entities: merge({}, state.entities, normalize(action.payload.data.menu_category, menuCategorySchema).entities)
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
