import actionTypes from 'actionTypes';

export default function OrdersReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_ORDERS:
      return state;
    case actionTypes.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload.data.orders,
        total: action.payload.data.meta.total,
      };
    case actionTypes.GET_ORDERS_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors
      };
    case actionTypes.GET_ORDER:
      return state;
    case actionTypes.GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload.data.order,
      };
    case actionTypes.GET_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors
      };
    default:
      return state;
  }
}
