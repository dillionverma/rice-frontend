import actionTypes from 'actionTypes';
import api from 'lib/api';
import schema from './schema';

export function getMenus() {
  return {
    type: actionTypes.GET_MENUS,
    payload: api.get('/v1/owner/menus'),
    meta: {
      schema: schema.menuList
    }
  }
}

export function createMenu(params){
  return {
    type: actionTypes.CREATE_MENU,
    payload: api.post('/v1/owner/menus', params),
    meta: {
      schema: schema.menu
    }
  }
}

export function createMenuCategory(params){
  return {
    type: actionTypes.CREATE_MENU_CATEGORY,
    payload: api.post(`/v1/owner/menus/${params.menu_id}/categories`, params),
    meta: {
      schema: schema.menuCategory
    }
  }
}
