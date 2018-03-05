import {GET_ORDERS, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE} from '../../actionTypes';


export default function OrdersReducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case GET_ORDERS:
      console.log('GET_ORDERS Action')
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    case GET_ORDERS_SUCCESS:
      console.log('GET_ORDERS_SUCCESS ', action.orders)
      newState = Object.assign({}, {
        ...state,
        orders: action.orders,
        total: action.total,
      });
      return newState;
    case GET_ORDERS_FAILURE:
      console.log('GET_ORDERS_FAILURE ', action.message)
      newState = Object.assign({}, {
        ...state,
      });
      return newState;
    default:
      return state;
  }
}
