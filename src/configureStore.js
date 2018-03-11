import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

function logger({ getState }) {
  return next => action => {
    console.group(action.type);
    console.info('dispatching: ', action);
    const result = next(action);
    console.log('next state: ', getState());
    console.groupEnd()
    return result;
  }
}

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(...[thunk, logger])
  );
}
