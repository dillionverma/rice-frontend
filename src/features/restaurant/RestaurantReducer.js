import { GET_TABLES, CREATE_TABLE } from '../../actionTypes';

export default function RestaurantReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case GET_TABLES:
      console.log('GET_TABLES Action', action.tables)
      newState = Object.assign({}, {
        ...state,
        tables: action.tables,
      });
      return newState;
    case CREATE_TABLE:
      console.log('CREATE_TABLE Action', action.table)
      newState = Object.assign({}, {
        ...state,
        tables: [...state.tables, action.table],
      });
      return newState;
    default:
      return state;
  }
}
