import {GET_MENUS, GET_MENUS_SUCCESS, GET_MENUS_FAILURE} from '../../actionTypes';
import api from '../../lib/api';
import { errorHandler, handleResponse } from '../../lib/errorHandler';

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
              .then(response => response.json())
              .then(handleResponse)
              .then(json     => dispatch(getMenusSuccess(json)))
              .catch(error   => errorHandler(error.message));
  };
}
