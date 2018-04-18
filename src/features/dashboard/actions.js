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

export function getBestSelling() {
  return {
    type: actionTypes.GET_DASHBOARD_BEST_SELLING,
    payload: api.get('/v1/owner/dashboard/best_selling'),
  };
}

export function getOrderStatuses() {
  return {
    type: actionTypes.GET_DASHBOARD_ORDER_STATUSES,
    payload: api.get('/v1/owner/dashboard/order_statuses'),
  };
}

export function getDiningDuration() {
  return {
    type: actionTypes.GET_DASHBOARD_DINING_DURATION,
    payload: api.get('/v1/owner/dashboard/dining_duration'),
  };
}
