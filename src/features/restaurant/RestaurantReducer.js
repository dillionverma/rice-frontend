import actionTypes from 'actionTypes';

export default function RestaurantReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case actionTypes.GET_TABLES:
      newState = Object.assign({}, {
        ...state,
        isLoading: true,
      });
      return newState;
    case actionTypes.GET_TABLES_SUCCESS:
      newState = Object.assign({}, {
        ...state,
        tables: action.payload.data.tables,
        isLoading: false,
      });
      return newState;
    case actionTypes.GET_TABLES_FAILURE:
      newState = Object.assign({}, {
        ...state,
        error: action.payload.response.data.errors,
      });
      return newState;
    case actionTypes.CREATE_TABLE:
      newState = Object.assign({}, {
        ...state,
        isLoading: true,
      });
      return newState;
    case actionTypes.CREATE_TABLE_SUCCESS:
      newState = Object.assign({}, {
        ...state,
        tables: [...state.tables, action.payload.data.table],
        isLoading: false,
      });
      return newState;
    case actionTypes.CREATE_TABLE_FAILURE:
      newState = Object.assign({}, {
        ...state,
        error: action.payload.response.data.errors,
      });
      return newState;
    default:
      return state;
  }
}
