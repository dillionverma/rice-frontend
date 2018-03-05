import {combineReducers} from 'redux';
import LoginReducer from './features/login/LoginReducer';
import RestaurantReducer from './features/restaurant/RestaurantReducer';
import OrdersReducer from './features/orders/OrdersReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  restaurant: RestaurantReducer,
  orders: OrdersReducer,
});

export default rootReducer;
