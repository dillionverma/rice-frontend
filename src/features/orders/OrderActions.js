import {GET_ORDERS, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE} from '../../actionTypes';
import api from '../../lib/api';

export function getOrdersAction() {
  return {
    type: GET_ORDERS,
  };
}

export function getOrdersSuccess(json) {
  return {
    type: GET_ORDERS_SUCCESS,
    orders: json.orders,
    total: json.meta.total,
  };
}

export function getOrdersFailure(json) {
  return {
    type: GET_ORDERS_FAILURE,
  }
}

export function getOrders(pagination) {
  console.log(pagination)
  return dispatch => {
    dispatch(getOrdersAction())
    return api.get('/api/v1/owner/orders', pagination)
              .then(handleResponse)
              .then(response => response.json())
              .then(json     => dispatch(getOrdersSuccess(json)))
              .catch(error   => console.log(error.message));
  };
}

function handleResponse(response) {
  if (!response.ok) {
    throw Error("Error")
  }
  return response;
}
