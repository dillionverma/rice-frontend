import {
  GET_ORDERS, 
  GET_ORDERS_SUCCESS, 
  GET_ORDERS_FAILURE,
  GET_ORDER, 
  GET_ORDER_SUCCESS, 
  GET_ORDER_FAILURE,
} from '../../actionTypes';
import api from '../../lib/api';
import { errorHandler } from '../../lib/errorHandler';


// ================== GET #index =======================

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
    type: GET_ORDER,
  };
}

export function getOrderSuccess(json) {
  return {
    type: GET_ORDER_SUCCESS,
    order: json.order,
  };
}

export function getOrderFailure(json) {
  return {
    type: GET_ORDER_FAILURE,
  }
}

export function getOrder(id) {
  return dispatch => {
    dispatch(getOrderAction())
    return api.get(`/api/v1/owner/orders/${id}`)
              .then(({data})   => dispatch(getOrderSuccess(data)))
              .catch(error     => {
                debugger;
                dispatch(getOrderFailure(error.response.data))
                errorHandler(error)
              });
  };
}
