import {GET_MENUS, GET_MENUS_SUCCESS, GET_MENUS_FAILURE} from '../../actionTypes';
import api from '../../lib/api';
import { errorHandler } from '../../lib/errorHandler';

export function getMenusAction() {
  return {
    type: GET_MENUS,
  };
}

export function getMenusSuccess(json) {
  return {
    type: GET_MENUS_SUCCESS,
    menus: json.menus,
  };
}

export function getMenusFailure(json) {
  return {
    type: GET_MENUS_FAILURE,
  }
}

export function getMenus() {
  return dispatch => {
    dispatch(getMenusAction())
    return api.get('/api/v1/owner/menus')
              .then(({data})   => dispatch(getMenusSuccess(data)))
              .catch(error     => {
                dispatch(getMenusFailure(error.response.data.errors))
                errorHandler(error)
              });
  };
}
