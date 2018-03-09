import {combineReducers} from 'redux';
import SessionReducer    from './features/session/SessionReducer';
import RestaurantReducer from './features/restaurant/RestaurantReducer';
import OrdersReducer     from './features/orders/OrdersReducer';
import MenusReducer      from './features/menus/MenusReducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  restaurant: RestaurantReducer,
  orders: OrdersReducer,
  menus: MenusReducer
});

export default rootReducer;
