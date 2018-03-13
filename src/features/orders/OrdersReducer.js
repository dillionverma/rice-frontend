import actionTypes from 'actionTypes';

export default function OrdersReducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case actionTypes.GET_ORDERS:
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case actionTypes.GET_ORDERS_SUCCESS:
      newState = Object.assign({}, {
        ...state,
        orders: action.payload.data.orders,
        total: action.payload.data.meta.total,
      });
      return newState;
    case actionTypes.GET_ORDERS_FAILURE:
      newState = Object.assign({}, {
        ...state,
        error: action.payload.response.data.errors
      });
      return newState;
    case actionTypes.GET_ORDER:
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case actionTypes.GET_ORDER_SUCCESS:
      newState = Object.assign({}, {
        ...state,
        order: action.payload.data.order,
      });
      return newState;
    case actionTypes.GET_ORDER_FAILURE:
      newState = Object.assign({}, {
        ...state,
        error: action.payload.response.data.errors
      });
      return newState;
    default:
      return state;
  }
}
