import actionTypes from 'actionTypes';

export default function RestaurantReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_TABLES:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_TABLES_SUCCESS:
      return {
        ...state,
        tables: action.payload.data.tables,
        isLoading: false,
      };
    case actionTypes.GET_TABLES_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors,
      };
    case actionTypes.CREATE_TABLE:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CREATE_TABLE_SUCCESS:
      return {
        ...state,
        tables: [...state.tables, action.payload.data.table],
        isLoading: false,
      };
    case actionTypes.CREATE_TABLE_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.errors,
      };
    default:
      return state;
  }
}
