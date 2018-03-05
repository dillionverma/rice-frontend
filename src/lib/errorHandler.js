import { message } from 'antd';

export function errorHandler(errors) {
  let e = JSON.parse(errors)
  console.log(e)
  for(let i = 0; i < e.length; ++i) {
    //message.error(e[i].detail)
    message.error(e[i].title)
  }
}

export function handleResponse(response) {
  if (response.errors && response.errors.length) {
    throw Error(JSON.stringify(response.errors))
  }
  return response;
}
