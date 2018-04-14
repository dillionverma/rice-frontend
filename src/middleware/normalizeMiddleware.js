import { normalize } from 'normalizr';
import includes from 'lodash/includes';
import { successActionTypes } from 'actionTypes';

export default function normalizeMiddleware() {
  return next => action => {
    if (!includes(successActionTypes, action.type)) {
      return next(action);
    }
    if (action.meta && action.meta.schema) {
      action = Object.assign({}, action, { payload: normalize(action.payload.data, action.meta.schema).entities });
    }
    return next(action);
  };
}
