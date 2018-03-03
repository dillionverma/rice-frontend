import {combineReducers} from 'redux';
import LoginReducer from './features/login/LoginReducer';
import RestaurantReducer from './features/restaurant/RestaurantReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  restaurant: RestaurantReducer,
});

export default rootReducer;
