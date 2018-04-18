import actionTypes from 'actionTypes';

const INITIAL_STATE = {
  recentOrders:   null,
  diningDuration: null,
  bestSelling:    null,
  orderStatuses:  null,
  totalSales:     null,
  recentOrdersLoading:   false,
  diningDurationLoading: false,
  bestSellingLoading:    false,
  orderStatusesLoading:  false,
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


    case actionTypes.GET_DASHBOARD_ORDER_STATUSES_PENDING:
      return {
        orderStatusesLoading: true,
      };
    case actionTypes.GET_DASHBOARD_ORDER_STATUSES_SUCCESS:
      return {
        ...state,
        orderStatuses: action.payload.data,
        orderStatusesLoading: false,
      };
    case actionTypes.GET_DASHBOARD_ORDER_STATUSES_FAILURE:
      return {
        ...state,
        orderStatusesLoading: false,
        error: action.payload.response.data.errors
      };


    case actionTypes.GET_DASHBOARD_DINING_DURATION_PENDING:
      return {
        diningDurationLoading: true,
      };
    case actionTypes.GET_DASHBOARD_DINING_DURATION_SUCCESS:
      return {
        ...state,
        diningDuration: action.payload.data,
        diningDurationLoading: false,
      };
    case actionTypes.GET_DASHBOARD_DINING_DURATION_FAILURE:
      return {
        ...state,
        diningDurationLoading: false,
        error: action.payload.response.data.errors
      };
    default:
      return state;
  }
}
