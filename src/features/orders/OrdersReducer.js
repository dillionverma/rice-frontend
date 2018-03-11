import {
  GET_ORDERS, 
  GET_ORDERS_SUCCESS, 
  GET_ORDERS_FAILURE,
  GET_ORDER, 
  GET_ORDER_SUCCESS, 
  GET_ORDER_FAILURE,
} from '../../actionTypes';

export default function OrdersReducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case GET_ORDERS:
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case GET_ORDERS_SUCCESS:
      newState = Object.assign({}, {
        ...state,
        orders: action.orders,
        total: action.total,
      });
      return newState;
    case GET_ORDERS_FAILURE:
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case GET_ORDER:
      console.log('GET_ORDER Action')
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case GET_ORDER_SUCCESS:
      console.log('GET_ORDER_SUCCESS ', action.order)
      newState = Object.assign({}, {
        ...state,
        order: action.order,
      });
      return newState;
    case GET_ORDER_FAILURE:
      console.log('GET_ORDER_FAILURE ', action.message)
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    default:
      return state;
  }
}
