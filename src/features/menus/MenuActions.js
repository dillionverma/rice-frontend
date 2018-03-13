import actionTypes from 'actionTypes';
import api from 'lib/api';

export function getMenus() {
  return {
    type: actionTypes.GET_MENUS,
    payload: api.get('/api/v1/owner/menus'),
  };
}
