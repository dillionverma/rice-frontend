import actionTypes from 'actionTypes';
import api from 'lib/api';

export function signUp(email, password, token) {
  let params = {email: email, password: password, token: token}
  return {
    type: actionTypes.SIGN_UP_OWNER,
    payload: api.post('/api/v1/owner/sign_up', params)
  }
}
