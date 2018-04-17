import actionTypes from 'actionTypes';
import api from 'lib/api';

export function getOrders() {
  return {
    type: actionTypes.GET_DASHBOARD_ORDERS,
    payload: api.get('/v1/owner/orders', { 
      page: 1,
      pageSize: 8,
    }),
  };
}

