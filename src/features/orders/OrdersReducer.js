import actionTypes from 'actionTypes';

// TODO Initial state immutable

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
        orders: action.orders,
        total: action.total,
      });
      return newState;
    case actionTypes.GET_ORDERS_FAILURE:
      newState = Object.assign({}, {
        ...state,
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
        order: action.order,
      });
      return newState;
    case actionTypes.GET_ORDER_FAILURE:
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    default:
      return state;
  }
}
