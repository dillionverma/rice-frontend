import {GET_ORDERS, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE} from '../../actionTypes';
import api from '../../lib/api';
import { errorHandler } from '../../lib/errorHandler';

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
