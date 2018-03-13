import isPromise from 'utils/isPromise';
import { failureActionTypes } from 'actionTypes';
import { message } from 'antd';

export default function globalErrorMiddleware() {
  return next => (action) => {
    // const types = failureActionTypes;
    if (!isPromise(action.payload)) {
      return next(action);
    }
    if (action.meta && action.meta.globalError === true) {
      return next(action).catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          if (error.response.data && error.response.data.errors) {
            message.error(error.response.data.errors[0].detail);
          } else {
            message.error(error.statusText);
          }
        }
        return error;
      });
    }
    return next(action);
  };
}
