import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'rootReducer';
import middleware from 'middleware'

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      thunk, 
      ...middleware, 
    )
  );
}
