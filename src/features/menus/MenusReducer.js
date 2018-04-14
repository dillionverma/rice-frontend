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
      const [ category_id, { menu_id } ] = Object.entries(action.payload.menu_categories)[0]
      return {
        ...state,
        entities: {
          ...merge({}, state.entities, action.payload),
          menus: {
            ...state.entities.menus,
            [menu_id]: {
              ...state.entities.menus[menu_id],
              menu_categories: [...state.entities.menus[menu_id].menu_categories, category_id]
            }
          }
        }
      }
    case actionTypes.CREATE_MENU_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors
      };
    case actionTypes.CREATE_ITEM:
      return state;
    case actionTypes.CREATE_ITEM_SUCCESS:
      debugger;
      const [ memu_category_id, { menu_id_2 } ] = Object.entries(action.payload.items)
      //return {
        //...state,
        //entities: {
          //...merge({}, state.entities, action.payload),
          //menus: {
            //...state.entities.menus,
            //[menu_id]: {
              //...state.entities.menus[menu_id],
              //menu_categories: [...state.entities.menus[menu_id].menu_categories, category_id]
            //}
          //}
        //}
      //};
    case actionTypes.CREATE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors
      };
    default:
      return state;
  }
}
