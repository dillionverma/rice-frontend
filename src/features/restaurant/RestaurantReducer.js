import { GET_RESTAURANT_TABLES } from '../../actionTypes';

export default function RestaurantReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case GET_RESTAURANT_TABLES:
      console.log('GET_RESTAURANT_TABLES Action')
      newState = Object.assign({}, {
        ...state, 
        tables: action.tables,
      });
      return newState;
    default:
      return state;
  }
}
