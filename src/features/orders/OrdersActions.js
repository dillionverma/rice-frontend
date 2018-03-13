import actionTypes from 'actionTypes';
import api from 'lib/api';

// ================== GET #index =======================

export function getOrders(pagination) {
  return {
    type: actionTypes.GET_ORDERS,
    payload: api.get('/api/v1/owner/orders', pagination),
  };
}

// ================== GET #show =======================

export function getOrder(id) {
  return {
    type: actionTypes.GET_ORDER,
    payload: api.get(`/api/v1/owner/orders/${id}`),
  };
}
