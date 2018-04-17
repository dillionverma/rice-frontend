import actionTypes from 'actionTypes';

const INITIAL_STATE = {
  recentOrders:   null,
  diningDuration: null,
  bestSelling:    null,
  orderStates:    null,
  totalSales:     null,
  recentOrdersLoading:   false,
  diningDurationLoading: false,
  bestSellingLoading:    false,
  orderStatesLoading:    false,
  totalSalesLoading:     false,
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_DASHBOARD_ORDERS_PENDING:
      return {
        recentOrdersLoading: true,
      };
    case actionTypes.GET_DASHBOARD_ORDERS_SUCCESS:
      return {
        ...state,
        recentOrders: action.payload.data.orders,
        recentOrdersLoading: false,
      };
    case actionTypes.GET_DASHBOARD_ORDERS_FAILURE:
      return {
        ...state,
        recentOrdersLoading: false,
        error: action.payload.response.data.errors
      };


    case actionTypes.GET_DASHBOARD_BEST_SELLING_PENDING:
      return {
        bestSellingLoading: true,
      };
    case actionTypes.GET_DASHBOARD_BEST_SELLING_SUCCESS:
      return {
        ...state,
        bestSelling: action.payload.data,
        bestSellingLoading: false,
      };
    case actionTypes.GET_DASHBOARD_BEST_SELLING_FAILURE:
      return {
        ...state,
        bestSellingLoading: false,
        error: action.payload.response.data.errors
      };
    default:
      return state;
  }
}
