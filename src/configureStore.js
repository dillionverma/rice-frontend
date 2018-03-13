import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'rootReducer';
import middleware from 'middleware';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      ...middleware,
    ),
  );
}
