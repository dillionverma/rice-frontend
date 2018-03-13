import actionTypes from 'actionTypes';
import api from 'lib/api';
import { errorHandler } from 'lib/errorHandler';

// ================== GET #index =======================

export function getOrdersAction() {
  return {
    type: actionTypes.GET_ORDERS,
  };
}

export function getOrdersSuccess(json) {
  return {
    type: actionTypes.GET_ORDERS_SUCCESS,
    orders: json.orders,
    total: json.meta.total,
  };
}

export function getOrdersFailure(json) {
  return {
    type: actionTypes.GET_ORDERS_FAILURE,
  }
}


export function getOrders(pagination) {
  console.log(pagination)
  return dispatch => {
    dispatch(getOrdersAction())
    return api.get('/api/v1/owner/orders', pagination)
              .then(({data})   => dispatch(getOrdersSuccess(data)))
              .catch(error     => {
                dispatch(getOrdersFailure(error.response.data))
                errorHandler(error)
              });
  };
}

// ================== GET #show =======================

export function getOrderAction() {
  return {
    type: actionTypes.GET_ORDER,
  };
}

export function getOrderSuccess(json) {
  return {
    type: actionTypes.GET_ORDER_SUCCESS,
    order: json.order,
  };
}

export function getOrderFailure(json) {
  return {
    type: actionTypes.GET_ORDER_FAILURE,
  }
}

export function getOrder(id) {
  return dispatch => {
    dispatch(getOrderAction())
    return api.get(`/api/v1/owner/orders/${id}`)
              .then(({data})   => dispatch(getOrderSuccess(data)))
              .catch(error     => {
                dispatch(getOrderFailure(error.response.data))
                errorHandler(error)
              });
  };
}
