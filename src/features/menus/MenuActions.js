import actionTypes from 'actionTypes';
import api from 'lib/api';

export function getMenus() {
  return {
    type: actionTypes.GET_MENUS,
    payload: api.get('/v1/owner/menus')
  }
}

export function createMenu(params){
  return {
    type: actionTypes.CREATE_MENU,
    payload: api.post('/v1/owner/menus', params)
  }
}

export function createMenuCategory(params){
  return {
    type: actionTypes.CREATE_MENU_CATEGORY,
    payload: api.post(`/v1/owner/menus/${params.menu_id}/categories`, params)
  }
}
