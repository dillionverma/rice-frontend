import {combineReducers} from 'redux';
import SessionReducer      from './features/session/SessionReducer';
import RegistrationReducer from './features/registration/RegistrationReducer';
import RestaurantReducer   from './features/restaurant/RestaurantReducer';
import OrdersReducer       from './features/orders/OrdersReducer';
import MenusReducer        from './features/menus/MenusReducer';
import { reducer as DashboardReducer }    from './features/dashboard';

const rootReducer = combineReducers({
  session: SessionReducer,
  registration: RegistrationReducer,
  restaurant: RestaurantReducer,
  orders: OrdersReducer,
  menus: MenusReducer,
  dashboard: DashboardReducer,
});

export default rootReducer;
