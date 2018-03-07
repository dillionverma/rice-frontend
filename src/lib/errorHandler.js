import { message } from 'antd';

export function errorHandler(error) {
  let errors = error.response.data.errors

  if (errors && errors.length) {
    for(let i = 0; i < errors.length; ++i) {
      message.error(errors[i].title)
    }
  } else {
    message.error(error.response.statusText)
  }
}
